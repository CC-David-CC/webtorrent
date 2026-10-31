import WebTorrent from 'webtorrent';
export const library=WebTorrent;
export function mount(){throw Error('WebTorrent is a shared library, not a window.');}
