# WebTorrent

WebTorrent is a lazy browser peer-to-peer transfer library. No app uses it or
starts a client, tracker, peer connection or file transfer by default. A future
consumer must explicitly select trackers and connection policy, manage storage,
and destroy its client when finished. Browser peers can connect only to
WebRTC-capable peers; TURN availability does not replace tracker signaling.
The current site policy has not been configured for public trackers.

Run `npm ci --prefix apps/system/webtorrent --ignore-scripts` before building.
WebTorrent is MIT-licensed; dependency notices are retained in the bundle.
