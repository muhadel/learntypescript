"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendBadReq = function send400(httpRes) {
    httpRes.sendStatus(400);
    httpRes.end();
};
exports.sendNotFound = function send404(httpRes) {
    httpRes.writeHead(404);
    httpRes.end();
};
