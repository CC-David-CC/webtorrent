// The WebTorrent browser build expects these browser polyfills at bundle time.
export {default as process} from 'process/browser';
export {Buffer} from 'buffer';
export const global=globalThis;
