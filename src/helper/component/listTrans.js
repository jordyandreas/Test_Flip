import React from 'react';
import {
    Text,
    View,
    TouchableWithoutFeedback,
} from 'react-native';

import { styleGlobal } from '../globalStyle';

const ListTrans = ({ onPress, status, senderBank, b_Name, amountDate, }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styleGlobal.viewContListTrans}>
                <View style={status === 'SUCCESS' ? styleGlobal.platformStatus_ : styleGlobal.platformStatus} />
                <View style={styleGlobal.viewListTransDet} >
                    <View style={styleGlobal.viewSubListTransDet}>
                        <View style={styleGlobal.viewListTrans}>
                            <View style={styleGlobal.viewSubListTrans}>
                                <View style={styleGlobal.viewListTransSender}>
                                    <Text style={styleGlobal.txtListTransSender}>{senderBank}</Text>
                                </View>
                                <Text style={styleGlobal.txtListTransName}>{b_Name}</Text>
                                <View style={styleGlobal.viewListAmoDate}>
                                    <Text style={styleGlobal.txtListAmoDate}>Rp{amountDate}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styleGlobal.viewBoxStatus}>
                            <View style={status === 'SUCCESS' ? styleGlobal.boxStatus_ : styleGlobal.boxStatus}>
                                <Text style={status === 'SUCCESS' ? styleGlobal.fontStatus_ : styleGlobal.fontStatus}>{status === 'SUCCESS' ? 'Berhasil' : 'Pengecekan'}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default ListTrans;