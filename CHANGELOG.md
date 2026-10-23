# Changelog

## [2.0.0]

### Changed
- **Breaking:** peer dependency `react-native` is now `>=0.71.0` (0.64 never worked: the component relies on the `gap` style and `Pressable` hover events). `react` peer range widened to `>=18.2.0`, so React 19 is supported.
- Requires Node.js >= 22.13 (`engines` field and `.nvmrc`). Node 18 and 20 are end-of-life.
- Removed the deprecated `@types/react-native` dev dependency; `react-native` ships its own types.
- Dev dependencies updated: `@types/react` 19, `react` 19, `react-native` 0.88, `typescript` 5.9 (declared explicitly, it was missing). `npm audit` reports 0 vulnerabilities.
- `tsconfig.json` updated to `moduleResolution: bundler` / `jsx: react-jsx` so the bundled `react-native` types resolve. Build is now type-check only (`tsc --noEmit`).
- `src/interface.d.ts` renamed to `src/interface.ts` with explicit imports; previously `StyleProp`, `TextStyle`, etc. were unresolved and silently typed as `any`.
- Removed stale compiled `.js` files from `src/`; `main` already pointed at `src/index.ts` so consumers transpile the `.tsx` sources.
- Added GitHub Actions CI (type-check + `npm audit` on Node 22 and 24), Dependabot for npm and actions, and a committed `package-lock.json`.

### Fixed
- `CountrySelector` now reloads the country list when the `lng` prop changes (the effect depended on the imported JSON constants instead of `lng`).


## [1.0.31]

### Fixed
- data in `FlatList` data={filteredCountries?.length > 0 ? filteredCountries : countrys} to render in mount component.

## [1.0.30]

### Added
- Array dependencies of use effect in  `CountrySelector`.
- Screenshot to readme


## [1.0.29]

### Fixed
- Change search propierty of `iso2` for `e164_code`.

## [1.0.27]

### Fixed
- Change name of `countrycode_es.json` for `countryCodeEs.json`.
- Change name of `countrycode_en.json` for `countryCodeEn.json`.
  

## [1.0.26]

### Added
- `countrycode_es.json` and `countrycode_en.json` Default lenguaje is `es`.
- Added useEffect to get data based on language.
- Added `listEmptyComponent` 

### Fixed
- Scroll in compoente `CountrySelector`.
- max height in container of `CountrySelector`.
- suport seach with `iso2`
  