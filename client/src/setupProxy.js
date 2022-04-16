const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/cats",
    createProxyMiddleware({
      target: `http://localhost:${process.env.PROXY_PORT}`,
      changeOrigin: true,
    })
  );
};
