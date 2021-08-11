import React from 'react';
import {
    View,
    TouchableOpacity,
    Image,
} from 'react-native';

const backBtn = require('../../images/left_arrow.png')
import { styleGlobal } from '../globalStyle';

const Header = ({ onPress }) => {
    return (
        <View style={styleGlobal.viewHeader}>
            <View style={styleGlobal.viewMainHeader}>
                <TouchableOpacity style={styleGlobal.viewHeaderBack} onPress={onPress}>
                    <Image source={backBtn} style={styleGlobal.imgIconBack} resizeMode={'contain'} />
                </TouchableOpacity>
                <View style={styleGlobal.viewRightHeader} />
            </View>
        </View>
    )
}

export default Header;