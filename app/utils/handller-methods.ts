export const sendBadReq = function send400(httpRes: any) {
  httpRes.sendStatus(400);
  httpRes.end();
};
export const forbiddenReq = function send403(httpRes: any) {
  httpRes.sendStatus(403);
  httpRes.end();
};

export const sendNotFound = function send404(httpRes: any) {
  httpRes.sendStatus(404);
  httpRes.end();
};

export const sendInternalError = function send500(httpRes: any) {
  httpRes.sendStatus(500);
  httpRes.end();
};
