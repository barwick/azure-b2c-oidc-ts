# azure-b2c-oidc-ts

OIDC integration with Azure B2C in Typescript. Uses Express to serve content via API & Preact as a simple virtual DOM for the page.

## Run

```bash
mv .env.example .env && source .env
brew install Caddy                      # Provides a reverse-proxy to serve localhost over https (important for Same-Site cookies)
yarn dev
```

Navigate to [https://localhost](https://localhost) to view the app. Caddy redirects `localhost:443` traffic to your local dev server.
