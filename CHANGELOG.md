# Changelog


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
  