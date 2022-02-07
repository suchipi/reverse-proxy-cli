#!/usr/bin/env node
const httpProxy = require("http-proxy");
const arg = require("arg");

const args = arg({
  "--target-url": String,
  "--local-port": String,

  "-t": "--target-url",
  "-p": "--local-port",
});

if (!args["--target-url"] || !args["--local-port"]) {
  console.log(
    `Please specify a --target-url (the thing that you're proxying to) and a --local-port (the port to run the proxy server on).\n` +
      `For example:\n` +
      `  reverse-proxy-cli --target-url "http://google.com/" --local-port 8080\n` +
      `\n` +
      `You can also use -t for --target-url and/or -p for --local-port.`
  );
  process.exit(1);
}

const targetUrl = args["--target-url"];
const localPort = args["--local-port"];

const proxyServer = httpProxy.createProxyServer({ target: targetUrl });
proxyServer.listen(localPort, () => {
  console.log(
    `Proxy server started; sending traffic from ${JSON.stringify(
      `http://localhost:${localPort}`
    )} to ${JSON.stringify(targetUrl)}`
  );
});
