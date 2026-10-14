# Fugle-fanger

En mobilvenlig fugleapp: fotografér fugle i det fri, saml forskellige arter, og vis dine fund frem. Hver ny art tæller ét point.

Hjemmesiden ligger i `sites/fugle`.

```sh
cd sites/fugle
npm run install:ci
npm run dev
```

Åbn adressen, som udviklingsserveren viser. Kameraet kræver HTTPS eller localhost. Den lokale udviklingsserver tilbyder en testbruger via “Log ind”.

Projektet bruger React/Vinext og Cloudflare D1/R2. Se [opsætning og begrænsninger](sites/fugle/README.md) for database, AI og hosting. AI-genkendelse kræver en serverkonfigureret API-nøgle; demoen kan prøves uden den. API-nøgler og lokale brugerdata er udeladt fra Git.
