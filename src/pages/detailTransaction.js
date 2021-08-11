import React, { useState, useEffect } from 'react';
import {
    View,
    ToastAndroid,
    Clipboard
} from 'react-native';
import { store } from '../helper/redux/store';
import { styleGlobal } from '../helper/globalStyle';

import Header from '../helper/component/header';
import DetilTrans from '../helper/component/detilTrans';

const detailTransaction = ({ navigation }) => {
    const [detailTrans] = useState({
        id: store.getState().Id,
        sender_Name: store.getState().SenderName,
        b_Bank: store.getState().B_Bank,
        b_Name: store.getState().B_Name,
        acc_Num: store.getState().AccountNumber,
        amount: store.getState().Amount,
        remark: store.getState().Remark,
        u_Code: store.getState().U_Code,
        created_At: store.getState().Created_At,
    });
    const [isDataDetail, setIsDataDetail] = useState(false);
    const showDetail = () => setIsDataDetail(!isDataDetail);

    const backBtn = () => {
        navigation.popToTop();
    };

    const copyToClipboard = () => {
        Clipboard.setString(detailTrans.id);
        ToastAndroid.show('ID Transaksi copied to clipboard', ToastAndroid.SHORT);
    };

    return (
        <View style={styleGlobal.flexContainer}>
            <Header
                onPress={() => backBtn()}
                titleTxt={'Detail Transaction'}
            />
            <DetilTrans
                onPressCopy={() => copyToClipboard()}
                onPressShow={() => showDetail()}
                isShowDetail={isDataDetail}
                detailTrans={detailTrans}
            />
        </View>
    )
}

export default detailTransaction;