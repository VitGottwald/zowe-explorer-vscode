const dnsPolyfill = {
    // Lookup methods
    lookup: (hostname, options, callback) => {
        if (typeof options === "function") {
            callback = options;
        }
        if (callback) {
            callback(null, "", 4);
        }
    },
    lookupService: (address, port, callback) => {
        if (callback) {
            callback(null, "", "");
        }
    },

    // DNS server methods
    resolve: (hostname, rrtype, callback) => {
        if (typeof rrtype === "function") {
            callback = rrtype;
        }
        if (callback) {
            callback(null, []);
        }
    },
    resolve4: (hostname, options, callback) => {
        if (typeof options === "function") {
            callback = options;
        }
        if (callback) {
            callback(null, []);
        }
    },
    resolve6: (hostname, options, callback) => {
        if (typeof options === "function") {
            callback = options;
        }
        if (callback) {
            callback(null, []);
        }
    },
    resolveAny: (hostname, callback) => {
        if (callback) {
            callback(null, []);
        }
    },
    resolveCname: (hostname, callback) => {
        if (callback) {
            callback(null, []);
        }
    },
    resolveMx: (hostname, callback) => {
        if (callback) {
            callback(null, []);
        }
    },
    resolveNaptr: (hostname, callback) => {
        if (callback) {
            callback(null, []);
        }
    },
    resolveNs: (hostname, callback) => {
        if (callback) {
            callback(null, []);
        }
    },
    resolvePtr: (hostname, callback) => {
        if (callback) {
            callback(null, []);
        }
    },
    resolveSoa: (hostname, callback) => {
        if (callback) {
            callback(null, {});
        }
    },
    resolveSrv: (hostname, callback) => {
        if (callback) {
            callback(null, []);
        }
    },
    resolveTxt: (hostname, callback) => {
        if (callback) {
            callback(null, []);
        }
    },
    reverse: (ip, callback) => {
        if (callback) {
            callback(null, []);
        }
    },

    // Constants
    ADDRCONFIG: 0,
    V4MAPPED: 0,

    // Errors
    NODATA: "ENODATA",
    FORMERR: "EFORMERR",
    SERVFAIL: "ESERVFAIL",
    NOTFOUND: "ENOTFOUND",
    NOTIMP: "ENOTIMP",
    REFUSED: "EREFUSED",
    BADQUERY: "EBADQUERY",
    BADNAME: "EBADNAME",
    BADFAMILY: "EBADFAMILY",
    BADRESP: "EBADRESP",
    CONNREFUSED: "ECONNREFUSED",
    TIMEOUT: "ETIMEOUT",
    EOF: "EOF",
    FILE: "EFILE",
    NOMEM: "ENOMEM",
    DESTRUCTION: "EDESTRUCTION",
    BADSTR: "EBADSTR",
    BADFLAGS: "EBADFLAGS",
    NONAME: "ENONAME",
    BADHINTS: "EBADHINTS",
    NOTINITIALIZED: "ENOTINITIALIZED",
    LOADIPHLPAPI: "ELOADIPHLPAPI",
    ADDRGETNETWORKPARAMS: "EADDRGETNETWORKPARAMS",
    CANCELLED: "ECANCELLED",
};

// Add promises API
dnsPolyfill.promises = {
    lookup: () => Promise.resolve({ address: "", family: 4 }),
    lookupService: () => Promise.resolve({ hostname: "", service: "" }),
    resolve: () => Promise.resolve([]),
    resolve4: () => Promise.resolve([]),
    resolve6: () => Promise.resolve([]),
    resolveAny: () => Promise.resolve([]),
    resolveCname: () => Promise.resolve([]),
    resolveMx: () => Promise.resolve([]),
    resolveNaptr: () => Promise.resolve([]),
    resolveNs: () => Promise.resolve([]),
    resolvePtr: () => Promise.resolve([]),
    resolveSoa: () => Promise.resolve({}),
    resolveSrv: () => Promise.resolve([]),
    resolveTxt: () => Promise.resolve([]),
    reverse: () => Promise.resolve([]),
};

module.exports = dnsPolyfill;
