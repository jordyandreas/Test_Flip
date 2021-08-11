import React from 'react';
import {
    View,
    Modal as ModalRN,
} from 'react-native';

import { styleGlobal } from '../globalStyle';

const ModalComp = ({ isVisible, onPress, children }) => {
    return (
        <ModalRN visible={isVisible} animationType={'fade'} transparent={true} onRequestClose={onPress}>
            <View style={styleGlobal.viewBgModalTrans}>
                {children}
            </View>
        </ModalRN>
    )

}

export default ModalComp;