class TLSSocket {
    constructor() {}
    address() {}
    connect() {}
    destroy() {}
    end() {}
    getPeerCertificate() {}
    getProtocol() {}
    getSession() {}
    getTLSTicket() {}
    pause() {}
    ref() {}
    resume() {}
    setEncoding() {}
    setKeepAlive() {}
    setNoDelay() {}
    setTimeout() {}
    unref() {}
    write() {}
}
class Server {
    constructor() {}
    address() {}
    close() {}
    getTicketKeys() {}
    listen() {}
    setSecureContext() {}
    setTicketKeys() {}
}
const tlsPolyfill = {
    TLSSocket,

    Server,

    // Functions
    connect: () => new tlsPolyfill.TLSSocket(),
    createServer: () => new tlsPolyfill.Server(),
    createSecureContext: () => ({}),
    getCiphers: () => [],
    DEFAULT_ECDH_CURVE: "auto",

    // Constants (sample, not exhaustive)
    SLAB_BUFFER_SIZE: 10 * 1024 * 1024,
    CLIENT_RENEG_LIMIT: 3,
    CLIENT_RENEG_WINDOW: 600,
};

// Add tls.rootCertificates as a non-functional property
Object.defineProperty(tlsPolyfill, "rootCertificates", {
    enumerable: true,
    get: () => [],
});

module.exports = tlsPolyfill;
