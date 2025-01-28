const zlibPolyfill = {
    // Compression/decompression methods
    deflate: (buffer, callback) => {
        if (callback) callback(null, Buffer.from([]));
    },
    deflateSync: (buffer) => Buffer.from([]),
    inflate: (buffer, callback) => {
        if (callback) callback(null, Buffer.from([]));
    },
    inflateSync: (buffer) => Buffer.from([]),
    gzip: (buffer, callback) => {
        if (callback) callback(null, Buffer.from([]));
    },
    gzipSync: (buffer) => Buffer.from([]),
    gunzip: (buffer, callback) => {
        if (callback) callback(null, Buffer.from([]));
    },
    gunzipSync: (buffer) => Buffer.from([]),
    unzip: (buffer, callback) => {
        if (callback) callback(null, Buffer.from([]));
    },
    unzipSync: (buffer) => Buffer.from([]),
    deflateRaw: (buffer, callback) => {
        if (callback) callback(null, Buffer.from([]));
    },
    deflateRawSync: (buffer) => Buffer.from([]),
    inflateRaw: (buffer, callback) => {
        if (callback) callback(null, Buffer.from([]));
    },
    inflateRawSync: (buffer) => Buffer.from([]),
    brotliCompress: (buffer, callback) => {
        if (callback) callback(null, Buffer.from([]));
    },
    brotliCompressSync: (buffer) => Buffer.from([]),
    brotliDecompress: (buffer, callback) => {
        if (callback) callback(null, Buffer.from([]));
    },
    brotliDecompressSync: (buffer) => Buffer.from([]),

    createInflate: () => ({
        _handle: {},
    }),

    // Classes
    Deflate: class Deflate {},
    Inflate: class Inflate {},
    Gzip: class Gzip {},
    Gunzip: class Gunzip {},
    DeflateRaw: class DeflateRaw {},
    InflateRaw: class InflateRaw {},
    Unzip: class Unzip {},
    BrotliCompress: class BrotliCompress {},
    BrotliDecompress: class BrotliDecompress {},

    // Constants
    Z_NO_FLUSH: 0,
    Z_PARTIAL_FLUSH: 1,
    Z_SYNC_FLUSH: 2,
    Z_FULL_FLUSH: 3,
    Z_FINISH: 4,
    Z_BLOCK: 5,
    Z_TREES: 6,
    Z_OK: 0,
    Z_STREAM_END: 1,
    Z_NEED_DICT: 2,
    Z_ERRNO: -1,
    Z_STREAM_ERROR: -2,
    Z_DATA_ERROR: -3,
    Z_MEM_ERROR: -4,
    Z_BUF_ERROR: -5,
    Z_VERSION_ERROR: -6,
    Z_NO_COMPRESSION: 0,
    Z_BEST_SPEED: 1,
    Z_BEST_COMPRESSION: 9,
    Z_DEFAULT_COMPRESSION: -1,
    Z_FILTERED: 1,
    Z_HUFFMAN_ONLY: 2,
    Z_RLE: 3,
    Z_FIXED: 4,
    Z_DEFAULT_STRATEGY: 0,
    BROTLI_DECODE: 0,
    BROTLI_ENCODE: 1,
    BROTLI_OPERATION_FINISH: 2,
    BROTLI_OPERATION_FLUSH: 1,
    BROTLI_OPERATION_PROCESS: 0,

    constants: {
        Z_NO_FLUSH: 0,
        Z_PARTIAL_FLUSH: 1,
        Z_SYNC_FLUSH: 2,
        Z_FULL_FLUSH: 3,
        Z_FINISH: 4,
        Z_BLOCK: 5,
        Z_TREES: 6,
        Z_OK: 0,
        Z_STREAM_END: 1,
        Z_NEED_DICT: 2,
        Z_ERRNO: -1,
        Z_STREAM_ERROR: -2,
        Z_DATA_ERROR: -3,
        Z_MEM_ERROR: -4,
        Z_BUF_ERROR: -5,
        Z_VERSION_ERROR: -6,
        Z_NO_COMPRESSION: 0,
        Z_BEST_SPEED: 1,
        Z_BEST_COMPRESSION: 9,
        Z_DEFAULT_COMPRESSION: -1,
        Z_FILTERED: 1,
        Z_HUFFMAN_ONLY: 2,
        Z_RLE: 3,
        Z_FIXED: 4,
        Z_DEFAULT_STRATEGY: 0,
        BROTLI_DECODE: 0,
        BROTLI_ENCODE: 1,
        BROTLI_OPERATION_FINISH: 2,
        BROTLI_OPERATION_FLUSH: 1,
        BROTLI_OPERATION_PROCESS: 0,
    },
};

// Add promises API
zlibPolyfill.promises = {
    deflate: (buffer) => Promise.resolve(Buffer.from([])),
    inflate: (buffer) => Promise.resolve(Buffer.from([])),
    gzip: (buffer) => Promise.resolve(Buffer.from([])),
    gunzip: (buffer) => Promise.resolve(Buffer.from([])),
    unzip: (buffer) => Promise.resolve(Buffer.from([])),
    deflateRaw: (buffer) => Promise.resolve(Buffer.from([])),
    inflateRaw: (buffer) => Promise.resolve(Buffer.from([])),
    brotliCompress: (buffer) => Promise.resolve(Buffer.from([])),
    brotliDecompress: (buffer) => Promise.resolve(Buffer.from([])),
};

module.exports = zlibPolyfill;
