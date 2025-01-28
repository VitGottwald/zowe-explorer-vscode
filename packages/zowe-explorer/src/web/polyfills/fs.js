const fs = require("browserify-fs");

const fsPolyfill = {};

const methods = [
    "access",
    "accessSync",
    "appendFile",
    "appendFileSync",
    "chmod",
    "chmodSync",
    "chown",
    "chownSync",
    "close",
    "closeSync",
    "copyFile",
    "copyFileSync",
    "createReadStream",
    "createWriteStream",
    "exists",
    "existsSync",
    "fchmod",
    "fchmodSync",
    "fchown",
    "fchownSync",
    "fdatasync",
    "fdatasyncSync",
    "fstat",
    "fstatSync",
    "fsync",
    "fsyncSync",
    "ftruncate",
    "ftruncateSync",
    "futimes",
    "futimesSync",
    "lchmod",
    "lchmodSync",
    "lchown",
    "lchownSync",
    "link",
    "linkSync",
    "lstat",
    "lstatSync",
    "mkdir",
    "mkdirSync",
    "mkdtemp",
    "mkdtempSync",
    "open",
    "openSync",
    "opendir",
    "opendirSync",
    "read",
    "readSync",
    "readFile",
    "readFileSync",
    "readdir",
    "readdirSync",
    "readlink",
    "readlinkSync",
    "realpath",
    "realpathSync",
    "rename",
    "renameSync",
    "rmdir",
    "rmdirSync",
    "stat",
    "statSync",
    "symlink",
    "symlinkSync",
    "truncate",
    "truncateSync",
    "unlink",
    "unlinkSync",
    "unwatchFile",
    "utimes",
    "utimesSync",
    "watch",
    "watchFile",
    "write",
    "writeSync",
    "writeFile",
    "writeFileSync",
    "writev",
    "writevSync",
];

methods.forEach((method) => {
    fsPolyfill[method] = function (...args) {
        console.log(`fs.${method} called with arguments:`, args);
        // For methods that typically return synchronously, return an empty result
        if (method.endsWith("Sync")) {
            return method.startsWith("read") ? "" : undefined;
        }
        // For async methods, call the last argument if it's a function (callback)
        const callback = args[args.length - 1];
        if (typeof callback === "function") {
            callback(null, method.startsWith("read") ? "" : undefined);
        }
    };
});

// Add promises API
fsPolyfill.promises = {};
methods.forEach((method) => {
    if (!method.endsWith("Sync")) {
        fsPolyfill.promises[method] = function (...args) {
            console.log(`fs.promises.${method} called with arguments:`, args);
            return Promise.resolve(method.startsWith("read") ? "" : undefined);
        };
    }
});

// Add constants
fsPolyfill.constants = {
    F_OK: 0,
    R_OK: 4,
    W_OK: 2,
    X_OK: 1,
};

module.exports = { ...fsPolyfill, ...fs };
