import { Dimensions } from 'react-native';
const {width} = Dimensions.get('screen')

export const PADDING_HORIZONTAL = 15
export const CATEGORY_ITEM_WIDTH = (width - PADDING_HORIZONTAL) / 4 - 8

export const FONTSIZE_BIG = 20;
export const FONTSIZE_MIDDLE = 18;
export const FONTSIZE_SMALL = 16;