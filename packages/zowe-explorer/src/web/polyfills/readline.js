const readlinePolyfill = {
    createInterface: () => ({
        close: () => {},
        pause: () => {},
        prompt: () => {},
        question: (query, callback) => {
            if (callback) callback("");
        },
        resume: () => {},
        setPrompt: () => {},
        write: () => {},

        // EventEmitter methods
        addListener: () => {},
        emit: () => {},
        on: () => {},
        once: () => {},
        removeListener: () => {},
        removeAllListeners: () => {},
        setMaxListeners: () => {},
        listeners: () => [],
        rawListeners: () => [],

        // Stream methods
        pause: () => {},
        resume: () => {},

        // Additional properties
        line: "",
        cursor: 0,
        history: [],
        terminal: false,
    }),

    clearLine: () => {},
    clearScreenDown: () => {},
    cursorTo: () => {},
    moveCursor: () => {},
    emitKeypressEvents: () => {},
};

// Add readline.promises API
readlinePolyfill.promises = {
    createInterface: () => Promise.resolve(readlinePolyfill.createInterface()),
};

module.exports = readlinePolyfill;
