import type { ReactElement, ReactNode } from 'react';
import type { ImageStyle, StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface Country {
  country_name: string;
  iso2: string;
  e164_code: number;
}

export interface CountrySelectorProps {
  /* Callback function to set the selected country */
  setCountry: (country: Country) => void;
  /* Placeholder text for the input */
  placeholder: string;
  /* Component to render left of input ex: A search Icon */
  leftComponent: ReactNode;
  /* Style for the text input */
  stylesText?: StyleProp<TextStyle>;
  /* Placeholder color */
  placeholderColor?: string;
  /* Callback function when a country is selected */
  callbackOnSelect?: (country?: Country) => void;
  /* Color to change when an item is hovered */
  hoverColor?: string;
  /* Style for the item */
  itemStyle?: StyleProp<ViewStyle>;
  /* Component to render when the list is empty */
  listEmptyComponent?: ReactElement;
  /* Language to fetch the country data
   * Default is 'es'
   */
  lng?: 'es' | 'en';
}

export interface SelectedCountryDisplayProps {
  country: Country | null;
  styleContainer?: StyleProp<ViewStyle>;
  styleInnerContainer?: StyleProp<ViewStyle>;
  styleFlag?: StyleProp<ImageStyle>;
  iconSize?: number | undefined;
  iconColor?: string | undefined;
  iconRight: ReactNode;
}
