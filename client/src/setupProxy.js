const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api/cats",
    createProxyMiddleware({
      target: process.env.REACT_APP_PROXY_URL + "/api/cats",
      changeOrigin: true,
    })
  );
};
