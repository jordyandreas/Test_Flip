import React from 'react';
import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';

const searchIcon = require('../../images/search.png')
const dropDown = require('../../images/down_arrow.png')

import { styleGlobal, colorGlobal } from '../globalStyle';

const SearchComp = ({ onPressUpdate, onPressShow, sortText }) => {
    return (
        <View style={styleGlobal.viewInputBoxText_}>
            <View style={styleGlobal.viewIconSearch}>
                <Image source={searchIcon} style={styleGlobal.imgIconSearch} resizeMode={'contain'} />
            </View>
            <TextInput
                style={styleGlobal.inputBoxText}
                autoCorrect={false}
                placeholder="Cari nama, bank, atau nominal"
                placeholderTextColor={colorGlobal.rgba50}
                keyboardType="default"
                onChangeText={onPressUpdate}
            />
            <TouchableOpacity style={styleGlobal.viewSortText} onPress={onPressShow}>
                <Text style={styleGlobal.txtSortText}>{sortText}</Text>
                <Image source={dropDown} style={styleGlobal.imgDropDown} resizeMode={'contain'} />
            </TouchableOpacity>
        </View>
    )
}

export default SearchComp;