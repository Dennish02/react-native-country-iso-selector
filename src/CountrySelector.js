"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const countrycode_en_json_1 = __importDefault(require("./countrycode_en.json"));
const countrycode_es_json_1 = __importDefault(require("./countrycode_es.json"));
const CountrySelector = ({ setCountry, placeholder, leftComponent, stylesText, placeholderColor, callbackOnSelect, hoverColor, itemStyle, listEmptyComponent, lng = 'es' }) => {
    const [countrys, setCountrys] = (0, react_1.useState)(countrycode_es_json_1.default);
    const [filteredCountries, setFilteredCountries] = (0, react_1.useState)([]);
    const [hoveredCountry, setHoveredCountry] = (0, react_1.useState)(null);
    const [query, setQuery] = (0, react_1.useState)('');
    (0, react_1.useEffect)(() => {
        const countryData = lng === 'es' ? countrycode_es_json_1.default : countrycode_en_json_1.default;
        /* Fetch data from the countrycode.json file */
        setCountrys(countryData);
    }, [countrycode_es_json_1.default, countrycode_en_json_1.default]);
    const handleSelectCountry = (selectedCountry) => {
        setCountry(selectedCountry);
        callbackOnSelect && callbackOnSelect(selectedCountry);
    };
    const handleSearch = (text) => {
        setQuery(text);
        if (text.length > 0) {
            const filtered = countrys.filter((country) => country.country_name.toLowerCase().includes(text.toLowerCase()) ||
                country.e164_code.toString().includes(text));
            setFilteredCountries(filtered);
        }
        else {
            setFilteredCountries(countrys);
        }
    };
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.View, { style: styles.containerInput },
            leftComponent,
            react_1.default.createElement(react_native_1.TextInput, { style: [styles.input, stylesText], placeholder: placeholder, onChangeText: (text) => handleSearch(text), value: query, placeholderTextColor: placeholderColor })),
        react_1.default.createElement(react_native_1.FlatList, { data: (filteredCountries === null || filteredCountries === void 0 ? void 0 : filteredCountries.length) > 0 ? filteredCountries : countrys, keyExtractor: (item) => item.iso2, ListEmptyComponent: listEmptyComponent, showsVerticalScrollIndicator: false, renderItem: ({ item }) => {
                var _a;
                return (react_1.default.createElement(react_native_1.Pressable, { style: ({ pressed }) => [
                        styles.item,
                        itemStyle,
                        pressed && { backgroundColor: hoverColor !== null && hoverColor !== void 0 ? hoverColor : '', opacity: 0.7 },
                        hoveredCountry === item.iso2 && react_native_1.Platform.OS === 'web' ? { backgroundColor: hoverColor !== null && hoverColor !== void 0 ? hoverColor : '' } : {},
                    ], onPress: () => handleSelectCountry(item), onHoverIn: () => react_native_1.Platform.OS === 'web' && setHoveredCountry(item.iso2), onHoverOut: () => react_native_1.Platform.OS === 'web' && setHoveredCountry(null) },
                    react_1.default.createElement(react_native_1.Image, { source: { uri: `https://flagcdn.com/w40/${item.iso2.toLowerCase()}.png` }, style: styles.flag }),
                    react_1.default.createElement(react_native_1.Text, { style: [styles.text, stylesText], ellipsizeMode: "clip" }, `${(_a = item.country_name) === null || _a === void 0 ? void 0 : _a.slice(0, 20)} (+${item.e164_code})`)));
            } })));
};
const styles = react_native_1.StyleSheet.create({
    container: {
        maxHeight: 300,
        height: '100%',
        overflow: 'hidden',
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
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
exports.default = CountrySelector;
