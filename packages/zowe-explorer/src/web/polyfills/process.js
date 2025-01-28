const processPolyfill = {
    // Properties
    arch: "unknown",
    argv: [],
    argv0: "",
    config: {},
    connected: false,
    env: {},
    execArgv: [],
    execPath: "",
    exitCode: 0,
    mainModule: null,
    pid: 0,
    platform: "browser",
    ppid: 0,
    release: {},
    title: "browser",
    version: "v22.0.0",
    versions: {
        node: "22.12.1",
    },

    // Methods
    abort: () => {},
    chdir: () => {},
    cpuUsage: () => ({ user: 0, system: 0 }),
    cwd: () => "/",
    disconnect: () => {},
    emitWarning: () => {},
    exit: () => {},
    getegid: () => 0,
    geteuid: () => 0,
    getgid: () => 0,
    getgroups: () => [],
    getuid: () => 0,
    hasUncaughtExceptionCaptureCallback: () => false,
    hrtime: () => [0, 0],
    initgroups: () => {},
    kill: () => {},
    memoryUsage: () => ({
        rss: 0,
        heapTotal: 0,
        heapUsed: 0,
        external: 0,
        arrayBuffers: 0,
    }),
    nextTick: (callback) => setTimeout(callback, 0),
    setegid: () => {},
    seteuid: () => {},
    setgid: () => {},
    setgroups: () => {},
    setuid: () => {},
    umask: () => 0,
    uptime: () => 0,

    // Stream-like methods
    stdout: {
        write: () => {},
        end: () => {},
    },
    stderr: {
        write: () => {},
        end: () => {},
    },
    stdin: {
        read: () => null,
        pause: () => {},
        resume: () => {},
    },

    // Event emitter methods
    on: () => processPolyfill,
    once: () => processPolyfill,
    off: () => processPolyfill,
    removeListener: () => processPolyfill,
    removeAllListeners: () => processPolyfill,
    emit: () => false,
    addListener: () => processPolyfill,
    prependListener: () => processPolyfill,
    prependOnceListener: () => processPolyfill,
    listeners: () => [],
};

// Add process.binding as a non-functional method
Object.defineProperty(processPolyfill, "binding", {
    enumerable: false,
    writable: false,
    value: () => {
        throw new Error("process.binding is not available");
    },
});

module.exports = processPolyfill;
