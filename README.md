# react-native-country-iso-selector

`react-native-country-iso-selector` is a React Native component library that provides a country selector with ISO codes and flags.

## Requirements

- Node.js >= 22.13 (see `.nvmrc`)
- React >= 18.2
- React Native >= 0.71 (the component uses the `gap` style property and `Pressable` hover events)

## Installation

To install the library, use npm or yarn:

```bash
npm install react-native-country-iso-selector
```

or

```bash
yarn add react-native-country-iso-selector
```

## ScreenShots

Example using in popover component

![alt text](https://github.com/Dennish02/react-native-country-iso-selector/raw/main/screenshots/image.png)


## Usage

Here is an example of how to use the `CountrySelector` and `SelectedCountryDisplay` components:

```tsx
import React, { useState } from 'react';
import { View } from 'react-native';
import { CountrySelector, SelectedCountryDisplay } from 'react-native-country-iso-selector';

const App = () => {
    const [selectedCountry, setSelectedCountry] = useState(null);

    return (
        <View>
            <CountrySelector
                setCountry={setSelectedCountry}
                placeholder="Select a country"
                leftComponent={<YourCustomComponent />}
            />
            <SelectedCountryDisplay
                country={selectedCountry}
                iconSize={20}
                iconColor="blue"
            />
        </View>
    );
};

export default App;
```

## Props

### CountrySelector

- `setCountry`: Function to set the selected country.
- `placeholder`: Placeholder text for the search input.
- `leftComponent`: Custom component to display on the left side of the search input.
- `stylesText`: Custom style for the input and item text.
- `placeholderColor`: Placeholder text color.
- `callbackOnSelect`: Called with the selected country after `setCountry`.
- `hoverColor`: Background color for pressed/hovered items.
- `itemStyle`: Custom style for each list item.
- `listEmptyComponent`: Component rendered when the list is empty.
- `lng`: Language of the country names, `'es'` (default) or `'en'`.

### SelectedCountryDisplay

- `country`: The selected country object.
- `styleContainer`: Custom style for the container.
- `styleInnerContainer`: Custom style for the inner container.
- `styleFlag`: Custom style for the flag image.
- `iconSize`: Size of the chevron icon.
- `iconColor`: Color of the chevron icon.
- `iconRight`: Component rendered to the right of the flag (e.g. a chevron icon).

## Interfaces

### Country

```ts
interface Country {
    country_name: string;
    iso2: string;
    e164_code: number;
}
```

### CountrySelectorProps

```ts
interface CountrySelectorProps {
    setCountry: (country: Country) => void;
    placeholder: string;
    leftComponent: React.ReactNode;
    stylesText?: StyleProp<TextStyle>;
    placeholderColor?: string;
    callbackOnSelect?: (country?: Country) => void;
    hoverColor?: string;
    itemStyle?: StyleProp<ViewStyle>;
    listEmptyComponent?: React.ReactElement;
    lng?: 'es' | 'en';
}
```

### SelectedCountryDisplayProps

```ts
interface SelectedCountryDisplayProps {
    country: Country | null;
    styleContainer?: StyleProp<ViewStyle>;
    styleInnerContainer?: StyleProp<ViewStyle>;
    styleFlag?: StyleProp<ImageStyle>;
    iconSize?: number;
    iconColor?: string;
    iconRight: React.ReactNode;
}
```

## Development

```bash
npm ci
npm run typecheck   # type-check the sources
npm run audit       # fail on high/critical vulnerabilities
```

## License

This project is licensed under the ISC License.

## Author

Hesler Dennis