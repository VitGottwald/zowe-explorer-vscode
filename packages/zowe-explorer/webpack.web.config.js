/*
 * This program and the accompanying materials are made available under the terms of the *
 * Eclipse Public License v2.0 which accompanies this distribution, and is available at *
 * https://www.eclipse.org/legal/epl-v20.html                                      *
 *                                                                                 *
 * SPDX-License-Identifier: EPL-2.0                                                *
 *                                                                                 *
 * Copyright Contributors to the Zowe Project.                                     *
 *                                                                                 *
 */

//@ts-check

"use strict";

const path = require("path");
const webpack = require("webpack");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const config = (mode) => ({
    mode: "none",
    target: "webworker",
    entry: "./src/extension.ts",
    output: {
        path: path.resolve(__dirname, "out/src"),
        filename: "[name].extension.js",
        libraryTarget: "commonjs",
        devtoolModuleFilenameTemplate: "webpack:///[absolute-resource-path]",
    },
    devtool: "source-map",
    optimization: {
        usedExports: true,
    },
    externals: ["vscode", "cpu-features", "module"],
    resolve: {
        mainFields: ["browser", "module", "main"],
        extensions: [".ts", ".js"],
        alias: {
            "@zowe/zowe-explorer-api$": path.resolve(__dirname, "..", "zowe-explorer-api/src"),
        },
        conditionNames: ["@zowe:bundler", "..."],
        fallback: {
            child_process: path.resolve(__dirname, "src/web/polyfills/child_process.js"),
            fs: path.resolve(__dirname, "src/web/polyfills/fs.js"),
            net: path.resolve(__dirname, "src/web/polyfills/net.js"),
            readline: path.resolve(__dirname, "src/web/polyfills/readline.js"),
            tls: path.resolve(__dirname, "src/web/polyfills/tls.js"),
            dns: path.resolve(__dirname, "src/web/polyfills/dns.js"),
            zlib: path.resolve(__dirname, "src/web/polyfills/zlib.js"),
            crypto: path.resolve(__dirname, "src/web/polyfills/crypto.js"),
            process: require.resolve("process/browser"),
        },
    },
    watchOptions: {
        ignored: /node_modules/,
    },
    stats: {
        warnings: false,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "esbuild-loader",
                        options: {
                            target: "esnext",
                        },
                    },
                ],
            },
            {
                test: /\.js/,
                include: /wontache/, // https://gitlab.com/jgonggrijp/wontache/-/issues/68
                type: "javascript/auto",
            },
            {
                test: /\.node$/,
                loader: "node-loader",
            },
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            process: path.resolve(__dirname, "src/web/polyfills/process.js"),
        }),
        new NodePolyfillPlugin({
            excludeAliases: ["crypto", "_stream_readable"],
        }),
        // new webpack.BannerPlugin(fs.readFileSync("../../scripts/LICENSE_HEADER", "utf-8")),
        new ForkTsCheckerWebpackPlugin({
            typescript: {
                build: true,
                configFile: path.join(__dirname, "tsconfig.json"),
                diagnosticOptions: {
                    syntactic: true,
                    semantic: true,
                },
            },
        }),
    ],
});

module.exports = (_, { mode }) => config(mode);
