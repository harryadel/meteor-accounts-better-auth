Package.describe({
  summary: "meteor-accounts-better-auth local package for Better Auth integration",
  version: "0.1.0",
});

Package.onUse((api) => {
  api.versionsFrom(["3.0"]);

  api.use("ecmascript");
  api.use("accounts-base", ["client", "server"]);
  api.imply("accounts-base", ["client", "server"]);
  api.use("check", "server");
  api.use("routepolicy", "server");
  api.use("webapp", "server");

  api.mainModule("server/index.js", "server");
  api.mainModule("client/index.js", "client");
});
