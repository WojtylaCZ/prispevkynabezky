# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn start        # Dev server (opens in Brave browser)
yarn build        # Production build (also runs react-snap post-build)
yarn test         # Run tests
yarn deploy       # Build + deploy to GitHub Pages (prispevkynabezky.cz)

yarn qr:generate  # Regenerate QR code PNGs from data-new.ts
yarn qr:validate  # Validate existing QR codes
```

## Architecture

This is a Create React App (TypeScript) site for [PrispevkyNaBezky.cz](https://prispevkynabezky.cz) — a Czech directory of cross-country ski trail operators with bank account/QR payment info so visitors can donate to trail maintenance.

**Routing:** `/:locale?` and `/:locale?/oblast/:trailparkSlug` both render `<Main>`. Locale is detected from the URL path (`cs` or `en`). Invalid locales/slugs redirect to `/`.

**Data flow:**
- `src/assets/data/data-new.ts` is the **active** data source — an array of `District` objects, each containing `Trailpark[]`
- `src/assets/data/data.ts` is the **old/unused** data source (kept for reference)
- `Trailpark` type is defined in `src/app/trailpark.tsx` and includes: id, name, slug, bankAccountNumber, variableSymbol, transparentBankAccountUrl, url, facebookPageUrl, operator, checkedAt, qrImage
- QR PNG images live in `src/assets/data/qr-codes-new/` and are named `Id{id}_{accountNumber}_{bankCode}.png`

**i18n:** Czech (`cs`) and English (`en`) via i18next. Translations in `src/assets/locales/{cs,en}/translation.json`. Language detection reads from URL path.

**QR codes:** Generated using the SPAYD payment standard (`src/tooling/spayd-generator.ts`). Running `yarn qr:generate` regenerates all QR PNGs from the data in `data-new.ts` and prints import statements to copy into the data file. Each QR encodes: IBAN (derived from CZ bank account + code), amount 100 CZK, and optional variable symbol.

**Deployment:** `yarn deploy` uses `gh-pages`. Before deploy, `react-snap` pre-renders `/en` and `/cs` routes to static HTML for SEO.

## Adding a new trailpark

1. Add entry to `data-new.ts` (assign a unique numeric `id`, choose a unique `slug`)
2. Run `yarn qr:generate` — it prints the import statement and writes the PNG
3. Copy the printed import into `data-new.ts`
4. Set `qrImage` field to the imported constant
5. Update `checkedAt` to today's date
