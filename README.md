# azure-b2c-oidc-ts

OIDC integration with Azure B2C in Typescript. Uses Express to serve content via API & Preact as a simple virtual DOM for the page.

## Run

```bash
mv .env.example .env && source .env
yarn build                              # Must build once before `yarn dev` will work
yarn dev
```

Now visit `https://localhost:$PORT` (`PORT` set in `.env`) to see the app running.

## Local Development certificate

For `Same-Site` cookies to work correctly with express & Azure B2C, we need to serve the app over `https`. To do this locally, we configure the app with a self signed certificate so our browser trusts `https://localhost`. Command used to generate the certificate from the request configuration `localhost.cnf`:

```bash
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout localhost.key -out localhost.pem -config localhost.cnf -sha256
```
