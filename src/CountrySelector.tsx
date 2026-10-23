import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, Image, StyleSheet, TextInput, Platform, Pressable } from 'react-native';
import countryCodeEn from './countrycode_en.json';
import countryCodeEs from './countrycode_es.json';

import { Country, CountrySelectorProps } from './interface';


const CountrySelector: React.FC<CountrySelectorProps> = ({ setCountry, placeholder, leftComponent, stylesText,placeholderColor, callbackOnSelect, hoverColor, itemStyle, listEmptyComponent, lng= 'es' }) => {
  const [countrys, setCountrys] = useState<Country[]>(countryCodeEs);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const [query, setQuery] = useState<string>('');

   useEffect(()=>{
    const countryData = lng === 'es' ? countryCodeEs : countryCodeEn;
    /* Fetch data from the countrycode.json file */
    setCountrys(countryData);

   },[lng])

  const handleSelectCountry = (selectedCountry: Country) => {
    setCountry(selectedCountry);
    callbackOnSelect && callbackOnSelect(selectedCountry);
  };

  const handleSearch = (text: string) => {
    setQuery(text);
    if (text.length > 0) {
      const filtered = countrys.filter((country) =>
        country.country_name.toLowerCase().includes(text.toLowerCase()) ||
        country.e164_code.toString().includes(text)
      );
      setFilteredCountries(filtered);
    } else {
      setFilteredCountries(countrys);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
      {leftComponent}
        <TextInput
          style={[styles.input, stylesText]}
          placeholder={placeholder}
          onChangeText={(text) => handleSearch(text)}
          value={query}
          placeholderTextColor={placeholderColor}
        />
      </View>

      <FlatList
        data={filteredCountries?.length > 0 ? filteredCountries : countrys}
        keyExtractor={(item: Country) => item.iso2}
        ListEmptyComponent={listEmptyComponent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }:{item:Country}) => (
          <Pressable style={({pressed})=>[
              styles.item,
              itemStyle,
              pressed && { backgroundColor: hoverColor ?? '', opacity: 0.7 },
              hoveredCountry === item.iso2 && Platform.OS === 'web' ? { backgroundColor: hoverColor ?? ''} : {},
          ]} onPress={() => handleSelectCountry(item)} 
          onHoverIn={() => Platform.OS === 'web' && setHoveredCountry(item.iso2)}
          onHoverOut={() => Platform.OS === 'web' && setHoveredCountry(null)}
          >
            <Image
              source={{ uri: `https://flagcdn.com/w40/${item.iso2.toLowerCase()}.png` }}
              style={styles.flag}
            />
            <Text style={[styles.text, stylesText ]} ellipsizeMode="clip">
              {`${item.country_name?.slice(0, 20)} (+${item.e164_code})`}
            </Text>
          </Pressable>
        )}
      />
    </View>

  );
};

const styles = StyleSheet.create({
  container:{
    maxHeight: 300,
    height: '100%',
    overflow: 'hidden',
  },
    item: {
      flexDirection: 'row',
      alignItems: 'center',
      padding:8,
      gap: 8,
      borderRadius: 8
    },
    flag: {
      width: 20,
      height: 15,
    },
    text: {
      fontSize: 16,
    },
    containerInput: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 5,
      gap: 8
    },
    input: {
      alignItems: 'center',
      width: '100%',
      padding: 8
    }
  });
  
  export default CountrySelector;