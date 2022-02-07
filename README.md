# reverse-proxy-cli

A barebones reverse-proxy CLI for forwarding requests from one place to another.

## Usage

```
npx reverse-proxy-cli --target-url "http://google.com/" --local-port 8080
```

Outputs:

```
Proxy server started; sending traffic from "http://localhost:8080" to "http://google.com/"
```

Help Text:

```
Please specify a --target-url (the thing that you're proxying to) and a --local-port (the port to run the proxy server on).
For example:
  reverse-proxy-cli --target-url "http://google.com/" --local-port 8080

You can also use -t for --target-url and/or -p for --local-port
```

## License

MIT
