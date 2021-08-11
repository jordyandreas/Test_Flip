import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';

import { styleGlobal } from '../globalStyle';
const copyClipboard = require('../../images/copy.png');

const DetilTrans = ({ onPressCopy, onPressShow, isShowDetail, detailTrans }) => {
    return (
        <View style={styleGlobal.viewContainerDetil}>
            <View style={styleGlobal.viewIDTransDetil}>
                <Text style={styleGlobal.txtDetilBold}>ID TRANSAKSI: #{detailTrans.id}</Text>
                <TouchableOpacity onPress={onPressCopy}>
                    <Image source={copyClipboard} style={styleGlobal.imgCopyClipboard} resizeMode={'contain'} />
                </TouchableOpacity>
            </View>

            <View style={styleGlobal.viewDivide} />

            <View style={styleGlobal.viewDetilTrans}>
                <Text style={styleGlobal.txtDetilBold}>DETAIL TRANSAKSI</Text>
                <TouchableOpacity onPress={onPressShow}>
                    <Text style={styleGlobal.txtShowDetil}>{isShowDetail ? 'Tutup' : 'Lihat'}</Text>
                </TouchableOpacity>
            </View>
            {isShowDetail ?
                <>
                    <View style={styleGlobal.viewDivide_} />

                    <View style={styleGlobal.viewContDetilShow}>
                        <View style={styleGlobal.viewSenderDetil}>
                            <Text style={styleGlobal.txtSenderDetil}>{detailTrans.sender_Name}{'\u2794'}{detailTrans.b_Bank}</Text>
                        </View>

                        <View style={styleGlobal.viewContColumnDetil}>
                            <View style={styleGlobal.viewSubColumnDetil}>
                                <Text style={styleGlobal.txtSubColumDetil}>{detailTrans.b_Name}</Text>
                                <Text style={styleGlobal.txtSubColumDetil_}>{detailTrans.acc_Num}</Text>
                            </View>

                            <View style={styleGlobal.viewSubColumnDetil_}>
                                <Text style={styleGlobal.txtSubColumnDetil1}>NOMINAL</Text>
                                <Text style={styleGlobal.txtSubColumnDetil1_}>Rp{detailTrans.amount}</Text>
                            </View>
                        </View>

                        <View style={styleGlobal.viewContColumnDetil}>
                            <View style={styleGlobal.viewSubColumnDetil}>
                                <Text style={styleGlobal.txtSubColumDetil}>BERITA TRANSFER</Text>
                                <Text style={styleGlobal.txtSubColumDetil_}>{detailTrans.remark}</Text>
                            </View>

                            <View style={styleGlobal.viewSubColumnDetil_}>
                                <Text style={styleGlobal.txtSubColumnDetil1}>KODE UNIK</Text>
                                <Text style={styleGlobal.txtSubColumnDetil1_}>{detailTrans.u_Code}</Text>
                            </View>
                        </View>

                        <View style={styleGlobal.viewCreatedDet}>
                            <Text style={styleGlobal.txtSubColumDetil}>WAKTU DIBUAT</Text>
                            <Text style={styleGlobal.txtSubColumDetil_}>{detailTrans.created_At}</Text>
                        </View>
                    </View>
                </>
                :
                null
            }

        </View>
    )
}

export default DetilTrans;