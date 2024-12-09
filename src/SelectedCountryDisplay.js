"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const SelectedCountryDisplay = ({ country, styleContainer, styleInnerContainer, styleFlag, iconSize = 16, iconColor, iconRight }) => {
    if (!country)
        return null;
    return (react_1.default.createElement(react_native_1.View, { style: [styles.container, styleContainer] },
        react_1.default.createElement(react_native_1.View, { style: [styles.innerContainer, styleInnerContainer] },
            react_1.default.createElement(react_native_1.Image, { source: { uri: `https://flagcdn.com/w40/${country.iso2.toLowerCase()}.png` }, style: [styles.flag, styleFlag] })),
        iconRight));
};
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 4
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
exports.default = SelectedCountryDisplay;
