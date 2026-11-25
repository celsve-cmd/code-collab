# Code Collab

En samarbeidsapp for kode og chat, bygget med **Vue 3 og TypeScript og Pinia (under utvikling)**.
Prosjektet utvikles underveis gjennom emne 3, så funksjonaliteten vokser uke for uke.

> 🚧 **Status:** under utvikling. Ting endrer seg, og ikke alt er ferdig.

## Dette virker nå

- **To views med Vue Router:** forside og editor, med dynamiske ruter (`/editor/:prosjektId`)
- **Teksteditor** med live-telling av tegn og ord
- **Assistent-chat** med stub-svar (erstattes av et ekte API senere)
- **Delt tilstand med Pinia:** brukernavn og meldinger overlever navigasjon mellom views
- **Composables** for gjenbrukbar logikk (`useLocalStorage`, `useCharCount`, `useTimer`)
- **Tester** med Vitest og Vue Test Utils

## Teknologi

| Område | Verktøy |
| --- | --- |
| Rammeverk | Vue 3 (`<script setup>`) |
| Språk | TypeScript |
| Routing | Vue Router |
| Tilstand | Pinia |
| Bygg og dev-server | Vite |
| Testing | Vitest, Vue Test Utils, jsdom |
| Kodekvalitet | oxlint, ESLint, vue-tsc |

## Kom i gang

Krever Node.js `^22.18.0` eller `>=24.12.0`.

```bash
git clone https://github.com/celsve-cmd/code-collab.git
cd code-collab
npm install
npm run dev
```

Appen kjører da på `http://localhost:5173`.

## Kommandoer

| Kommando | Hva den gjør |
| --- | --- |
| `npm run dev` | Starter utviklingsserveren |
| `npm run build` | Typesjekker og bygger for produksjon |
| `npm run preview` | Forhåndsviser produksjonsbygget |
| `npm run test:unit` | Kjører testene med Vitest |
| `npm run type-check` | Typesjekker med vue-tsc |
| `npm run lint` | Kjører oxlint og ESLint |

## Prosjektstruktur

```
src/
├── components/   # Gjenbrukbare komponenter (header, editor, chat, ...)
├── composables/  # Logikk med tilstand per instans
├── stores/       # Pinia-stores (delt tilstand)
├── views/        # Sider koblet til ruter
├── router/       # Rutedefinisjoner
└── __tests__/    # Enhetstester
```

## Veien videre

Planen er åpen, og dette er ideer, ikke løfter:

- [ ] Koble chatten mot et ekte API i stedet for stub-svar
- [ ] Lagre tilstand slik at den overlever refresh
- [ ] Flere tester for stores og komponenter

## Om prosjektet

Skoleprosjekt der jeg lærer moderne frontend-utvikling steg for steg.
Ingen lisens er valgt ennå.
