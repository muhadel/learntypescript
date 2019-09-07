export const sendBadReq = function send400(httpRes: any) {
  httpRes.sendStatus(400);
  httpRes.end();
};

export const sendNotFound = function send404(httpRes: any) {
  httpRes.writeHead(404);
  httpRes.end();
};

export const sendInternalError = function send500(httpRes: any) {
  httpRes.writeHead(500);
  httpRes.end();
};
