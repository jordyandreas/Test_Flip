import { StyleSheet, Dimensions } from 'react-native';
const ww = Dimensions.get('window').width;
const wh = Dimensions.get('window').height;

export const colorGlobal = {
    midGrey: '#A7A5A5',
    grey: '#F5F9F8',
    white: '#FFF',
    orange: '#F17C54',
    midOrange: '#F26543',
    green: '#54B584',
    black: '#020202',

    rgba90: 'rgba(0,0,0,0.90)',
    rgba75: 'rgba(0,0,0,0.75)',
    rgba50: 'rgba(0,0,0,0.5)',
    rgba25: 'rgba(0,0,0,0.25)',
    rgba20: 'rgba(0,0,0,0.20)',
    rgba15: 'rgba(0,0,0,0.15)',
    rgba05: 'rgba(0,0,0,0.05)',
    rgba00: 'rgba(0,0,0,0.0)',

    rgba_90: 'rgba(255,255,255,0.9)',
    rgba_75: 'rgba(255,255,255,0.75)',
    rgba_50: 'rgba(255,255,255,0.5)',
    rgba_20: 'rgba(255,255,255,0.20)',
};

export const styleGlobal = StyleSheet.create({
    flexContainer: {
        flex: 1,
        backgroundColor: colorGlobal.grey
    },

    loading: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    modalSort: {
        backgroundColor: colorGlobal.white,
        width: ww * 0.9,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },

    //listTrans
    viewContListTrans: {
        flexDirection: 'row',
        width: ww * 0.98,
        height: wh * 0.12,
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 10
    },

    viewListTransDet: {
        width: ww * 0.96,
        height: wh * 0.12,
        borderTopEndRadius: 7,
        borderBottomEndRadius: 7,
        backgroundColor: colorGlobal.white
    },

    viewSubListTransDet: {
        flexDirection: 'row',
        alignSelf: 'center',
    },

    viewListTrans: {
        width: ww * 0.58,
        height: wh * 0.12,
        flexDirection: 'column',
        alignSelf: 'center',
    },

    viewSubListTrans: {
        height: wh * 0.12,
        justifyContent: 'center',
        alignItems: 'center'
    },

    viewListTransSender: {
        alignSelf: 'flex-start',
        justifyContent: 'center',
        alignItems: 'center'
    },

    txtListTransSender: {
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: 'center',
    },

    txtListTransName: {
        fontSize: 18, alignSelf: 'flex-start'
    },

    viewListAmoDate: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        justifyContent: 'center',
        alignItems: 'center'
    },

    txtListAmoDate: {
        fontSize: 16, alignSelf: 'center'
    },

    viewBoxStatus: {
        width: ww * 0.3,
        height: wh * 0.12,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'flex-end',
    },

    platformStatus: {
        width: ww * 0.02,
        height: wh * 0.12,
        borderTopStartRadius: 7,
        borderBottomStartRadius: 7,
        backgroundColor: colorGlobal.midOrange
    },

    platformStatus_: {
        width: ww * 0.02,
        height: wh * 0.12,
        borderTopStartRadius: 7,
        borderBottomStartRadius: 7,
        backgroundColor: colorGlobal.green
    },

    boxStatus: {
        width: ww * 0.25,
        backgroundColor: colorGlobal.white,
        borderWidth: 1.5,
        borderColor: colorGlobal.orange,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },

    boxStatus_: {
        width: ww * 0.2,
        backgroundColor: colorGlobal.green,
        borderWidth: 1.5,
        borderColor: colorGlobal.green,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },

    fontStatus: {
        fontSize: 16,
        color: colorGlobal.black,
        fontWeight: 'bold',
        alignSelf: 'center',
        margin: 3
    },

    fontStatus_: {
        fontSize: 16,
        color: colorGlobal.white,
        fontWeight: '700',
        alignSelf: 'center',
        margin: 3
    },

    //view sort
    margin20: {
        margin: 20
    },

    //search comp
    viewInputBoxText_: {
        width: ww * 0.98,
        height: wh * 0.08,
        backgroundColor: colorGlobal.white,
        margin: ww * 0.025,
        borderRadius: 5,
        flexDirection: 'row',
        paddingHorizontal: ww * 0.01,
        paddingVertical: 3,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center'
    },

    inputBoxText: {
        width: ww * 0.65,
        height: wh * 0.08,
        color: colorGlobal.black,
        borderRadius: 2,
        fontSize: 16,
        textAlignVertical: 'center',
        marginVertical: -3,
        paddingVertical: 1,
    },
    viewIconSearch: {
        width: ww * 0.08,
        justifyContent: 'center',
    },

    imgIconSearch: {
        width: ww * 0.065,
        height: ww * 0.065,
        justifyContent: 'center',
        alignSelf: 'center',
    },

    viewSortText: {
        flexDirection: 'row',
        width: ww * 0.25,
        alignItems: 'center',
        justifyContent: 'center',
    },

    txtSortText: {
        color: colorGlobal.orange,
        fontWeight: 'bold',
        fontSize: 15,
    },

    imgDropDown: {
        width: ww * 0.05,
        height: ww * 0.05,
        marginLeft: ww * 0.005,
    },

    //modal comp
    viewBgModalTrans: {
        height: wh,
        backgroundColor: colorGlobal.rgba50,
        alignItems: 'center',
        justifyContent: 'center'
    },

    //radio btn
    viewContRBtn: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10
    },

    viewOuterRBtn: {
        width: ww * 0.05,
        height: ww * 0.05,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colorGlobal.orange,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },

    viewInnerRBtn: {
        width: ww * 0.03,
        height: ww * 0.03,
        borderRadius: 10,
    },

    txtRBtn: {
        fontSize: 16, color: '#000'
    },

    //header
    viewHeader: {
        width: ww,
        height: ww * 0.17,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },

    viewMainHeader: {
        width: ww * 0.95,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    viewHeaderBack: {
        width: ww * 0.10,
    },

    textHeader: {
        fontSize: ww * 0.0425,
        fontWeight: 'bold',
        color: colorGlobal.black,
    },

    viewRightHeader: {
        width: ww * 0.85,
    },

    imgIconBack: {
        width: ww * 0.05,
        height: ww * 0.05,
        justifyContent: 'center',
        alignSelf: 'center',
    },

    //detilTrans
    viewContainerDetil: {
        width: ww, justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colorGlobal.white
    },

    viewIDTransDetil: {
        width: ww * 0.9,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },

    txtDetilBold: {
        fontSize: 15,
        fontWeight: 'bold'
    },

    imgCopyClipboard: {
        width: ww * 0.05,
        height: ww * 0.05,
        justifyContent: 'center',
        alignSelf: 'center',
        marginLeft: 5
    },

    viewDivide: {
        borderWidth: 0.5,
        borderColor: colorGlobal.rgba05,
        width: ww,
        height: 1
    },

    viewDetilTrans: {
        flexDirection: 'row',
        width: ww * 0.9,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 20,
    },

    txtShowDetil: {
        fontSize: 15,
        fontWeight: '600',
        color: colorGlobal.orange
    },

    viewDivide_: {
        borderWidth: 0.5,
        borderColor: colorGlobal.rgba15,
        width: ww,
        height: 1
    },

    viewContDetilShow: {
        width: ww,
        justifyContent: 'center',
        alignItems: 'center',
    },

    viewSenderDetil: {
        width: ww * 0.9,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
    },

    txtSenderDetil: {
        fontSize: 22,
        fontWeight: 'bold'
    },

    viewContColumnDetil: {
        flexDirection: 'row',
        width: ww * 0.9,
        alignItems: 'flex-start',
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'space-evenly'
    },

    viewSubColumnDetil: {
        width: ww * 0.525,
        flexDirection: 'column'
    },

    txtSubColumDetil: {
        fontSize: 16,
        fontWeight: 'bold',
    },

    txtSubColumDetil_: {
        fontSize: 16,
    },

    viewSubColumnDetil_: {
        width: ww * 0.375,
        flexDirection: 'column',
    },

    txtSubColumnDetil1: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
    },

    txtSubColumnDetil1_: {
        fontSize: 16,
        marginLeft: 10,
    },

    viewCreatedDet: {
        width: ww * 0.9,
        flexDirection: 'column',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 25,
    }



})