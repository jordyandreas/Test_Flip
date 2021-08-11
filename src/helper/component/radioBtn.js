import React from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import { colorGlobal, styleGlobal } from '../globalStyle';

const RadioButton = ({ onPress, selected, children }) => {
    return (
        <TouchableOpacity style={styleGlobal.viewContRBtn}
            onPress={onPress}>
            <View style={styleGlobal.viewOuterRBtn}>
                <View style={[styleGlobal.viewInnerRBtn, { backgroundColor: selected === true ? colorGlobal.orange : 'transparent' }]} />
            </View>
            <Text style={styleGlobal.txtRBtn}>{children}</Text>
        </TouchableOpacity>
    )
}

export default RadioButton;