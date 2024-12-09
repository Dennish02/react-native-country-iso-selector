import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { SelectedCountryDisplayProps } from './interface';



const SelectedCountryDisplay: React.FC<SelectedCountryDisplayProps> = ({ country , styleContainer, styleInnerContainer, styleFlag, iconSize=16, iconColor, iconRight}) => {
  if (!country) return null;

  return (
    <View style={[styles.container, styleContainer]}>
      <View style={[styles.innerContainer,styleInnerContainer]}>
        <Image
          source={{ uri: `https://flagcdn.com/w40/${country.iso2.toLowerCase()}.png` }}
          style={[styles.flag,styleFlag]}
        />
      </View>
        {iconRight}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap:4
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flag: {
    width: 20,
    height: 15,
  },
});

export default SelectedCountryDisplay;