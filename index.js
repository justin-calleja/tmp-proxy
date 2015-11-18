var Hapi = require("hapi");

var server = new Hapi.Server();
server.connection({ host: "0.0.0.0", port: 8989 });

server.start(function () {
  console.log("Server running at:", server.info.uri);
});

server.route({
  method: "*",
  path: "/{p*}",
  handler: function (request, reply) {
    console.log("request.method: ", request.method);
    console.log("-------");
    console.log("request.headers: ", request.headers);
    console.log("-------");
    console.log("request.payload: ", request.payload);
    console.log("=======");
    reply("I have printed out your request in my logs...\n");
  }
});

// Object.keys(request) =
// [ "domain",
//   "_events",
//   "_maxListeners",
//   "_bench",
//   "connection",
//   "server",
//   "url",
//   "query",
//   "path",
//   "method",
//   "mime",
//   "setUrl",
//   "setMethod",
//   "headers",
//   "id",
//   "app",
//   "plugins",
//   "_route",
//   "route",
//   "auth",
//   "session",
//   "pre",
//   "preResponses",
//   "info",
//   "_allowInternals",
//   "orig",
//   "params",
//   "paramsArray",
//   "payload",
//   "state",
//   "jsonp",
//   "response",
//   "raw",
//   "addTail",
//   "tail",
//   "_states",
//   "_logger",
//   "_isPayloadPending",
//   "_isBailed",
//   "_isReplied",
//   "_isFinalized",
//   "_tails",
//   "_tailIds",
//   "_protect",
//   "_onEnd",
//   "_onClose",
//   "_onError" ]
