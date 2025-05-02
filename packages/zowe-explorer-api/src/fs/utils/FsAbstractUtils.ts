/**
 * This program and the accompanying materials are made available under the terms of the
 * Eclipse Public License v2.0 which accompanies this distribution, and is available at
 * https://www.eclipse.org/legal/epl-v20.html
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Copyright Contributors to the Zowe Project.
 *
 */

import * as vscode from "vscode";
import { ProfilesCache } from "../../profiles/ProfilesCache";
import { DirEntry, FileEntry, FilterEntry, IFileSystemEntry, UriFsInfo } from "../types/abstract";
import { Gui } from "../../globals";
import { posix } from "path";

export class FsAbstractUtils {
    /**
     * Returns the metadata for a given URI in the FileSystem.
     * @param uri The "Zowe-compliant" URI to extract info from
     * @returns a metadata type with info about the URI
     */
    public static getInfoForUri(uri: vscode.Uri, profilesCache?: ProfilesCache): UriFsInfo {
        // Paths pointing to the session root will have the format `<scheme>:/{lpar_name}`
        const slashAfterProfilePos = uri.path.indexOf("/", 1);
        const isRoot = slashAfterProfilePos === -1;

        // Determine where to parse profile name based on location of first slash
        const startPathPos = isRoot ? uri.path.length : slashAfterProfilePos;

        // Load profile that matches the parsed name
        const profileName = uri.path.startsWith("/") ? uri.path.substring(1, startPathPos) : uri.path.substring(0, startPathPos);
        // debugger; // here is the mapping from uri to profile
        // why the hell do they test for the whole profilesCache?.loadNamedProfile ???
        // looks like lack of confidence in the types
        // also why is the check not the first line in the fucntion? 
        //   if profilesCache not provided the return value is null
        // then the next question is why even bother calling the function without profilesCache
        //   we know the answer is null, so we do not need to call it at all and just assign the 
        //   return variable on the caller site `null`
        // then the next question is why even have the profilesCache as optional
        //   just make it mandatory and get rid of the check
        // actually doing just this (removing the optionality of profilesCache) will allow for a quick refactor
        // another suspistion why this pattern is here is that the code base is not strictly typed
        //   so the type checker does not distinguish between proper type and null value
        //   that allows the developer to think they have an instance where
        //   in some cases they will actually have a null
        //   - easy for passing CI today
        //   - one they things will explode ...
        const profile = profilesCache?.loadNamedProfile ? profilesCache.loadNamedProfile(profileName) : null;

        return {
            isRoot,
            slashAfterProfilePos,
            profileName,
            profile,
        };
    }

    public static findDocMatchingUri(uri: vscode.Uri): vscode.TextDocument {
        return vscode.workspace.textDocuments.find((doc) => doc.uri.toString() === uri.toString());
    }

    public static async confirmForUnsavedDoc(uri: vscode.Uri): Promise<boolean> {
        const doc = FsAbstractUtils.findDocMatchingUri(uri);
        if (doc?.isDirty) {
            const confirmItem = vscode.l10n.t("Confirm");
            return (
                (await Gui.warningMessage(
                    vscode.l10n.t(
                        "{0} is opened and has pending changes in the editor. By selecting 'Confirm', any unsaved changes will be lost.",
                        posix.basename(doc.fileName)
                    ),
                    {
                        items: [confirmItem],
                        vsCodeOpts: { modal: true },
                    }
                )) === confirmItem
            );
        }

        // either the document doesn't exist or it isn't dirty
        return true;
    }

    public static isDirectoryEntry(entry: IFileSystemEntry): entry is DirEntry {
        return entry != null && entry["type"] === vscode.FileType.Directory;
    }

    public static isFileEntry(entry: IFileSystemEntry): entry is FileEntry {
        return entry != null && entry["type"] === vscode.FileType.File;
    }

    public static isFilterEntry(entry: IFileSystemEntry): entry is FilterEntry {
        return entry != null && "filter" in entry;
    }
}
