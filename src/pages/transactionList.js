import React, { useState, useEffect } from 'react';
import {
    View,
    FlatList,
    ActivityIndicator,
} from 'react-native';

import {
    setId,
    setSenderName,
    setB_Bank,
    setB_Name,
    setAccountNumber,
    setAmount,
    setRemark,
    setU_Code,
    setCreated_At,
} from '../helper/redux/action'
import { store } from '../helper/redux/store';

import { styleGlobal, colorGlobal } from '../helper/globalStyle';
import RadioButton from '../helper/component/radioBtn';
import ModalComp from '../helper/component/modalComp';
import ListTrans from '../helper/component/listTrans';
import SearchComp from '../helper/component/searchComp';

const transactionList = ({ navigation }) => {
    const [isModalShow, setIsModalShow] = useState(false);
    const showModal = () => setIsModalShow(!isModalShow);
    const [sortText, setSortText] = useState('URUTKAN');
    const [isLoading, setIsLoading] = useState(false);
    const [dataTrans, setDataTrans] = useState([]);
    const [form, setForm] = useState({
        name: "",
        senderBank: "",
        beneficiaryBank: "",
        transAmount: "",
        temp: [],
    });
    const [selectedSort, setSelectedSort] = useState([
        { id: 1, value: true, name: 'URUTKAN', selected: true },
        { id: 2, value: false, name: 'Nama A-Z', selected: false },
        { id: 3, value: false, name: 'Nama Z-A', selected: false },
        { id: 4, value: false, name: 'Tanggal Terbaru', selected: false },
        { id: 5, value: false, name: 'Tanggal Terlama', selected: false },
    ]);

    useEffect(() => {
        getDataTrans();
    }, []);

    const getDataTrans = async () => {
        const url = 'https://nextar.flip.id/frontend-test';
        setIsLoading(true);
        try {
            let response = await fetch(url);
            let json = await response.json();
            let setData = Object.values(json);

            setDataTrans(setData);
            setForm({
                temp: setData
            });
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)

        }
    };

    const updateSearch = (search) => {
        setForm({
            temp: dataTrans.filter(item =>
                item.beneficiary_name.includes(search) || item.sender_bank.includes(search) ||
                item.beneficiary_bank.includes(search) || item.amount.toString().includes(search)
            )
        });
    };

    const sortUrutkan = () => {
        setSortText('URUTKAN');
        showModal();
    };

    const sortName = (sn) => {
        let sortText_ = sn === true ? 'NAMA A-Z' : 'NAMA Z-A';
        setSortText(sortText_);
        dataTrans.sort((a, b) => {
            let sort = sn === true ? a.beneficiary_name < b.beneficiary_name : a.beneficiary_name > b.beneficiary_name;
            if (sort) {
                return -1;
            } else if (a.beneficiary_name > b.beneficiary_name) {
                return 1;
            };
            setForm({
                temp: dataTrans
            });
            showModal();
            return 0;
        });
    };

    const sortDate = (sd) => {
        let sortText_ = sd === true ? 'Tanggal Terbaru' : 'Tanggal Terlama';
        setSortText(sortText_);
        dataTrans.sort((a, b) => {
            let dA = a.created_at.split(' ').slice(0, 1);
            let dB = b.created_at.split(' ').slice(0, 1);

            let sort = sd === true ? dA > dB : dA < dB;
            if (sort) {
                return -1;
            } else if (dA > dB) {
                return 1;
            };
            setForm({
                temp: dataTrans
            });
            showModal();
            return 0;
        });
    };

    function numberFormat(n) {
        let nF = n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
        return nF;
    };

    function dateFormat(d) {
        var monthNames = ["Januari", "Febuari", "Maret", "April", "Mei", "Juni",
            "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
        let dd = d.split(' ').slice(0, 1);
        let t = new Date(dd);
        return t.getDate() + ' ' + monthNames[t.getMonth()] + ' ' + t.getFullYear();
    };

    function upperCase(uc) {
        if (uc.length > 3) {
            return uc.charAt(0).toUpperCase() + uc.slice(1);
        } else {
            return uc.toUpperCase();
        };
    };

    const goToDetail = (index) => {
        store.dispatch(setId(form.temp[index].id));
        store.dispatch(setSenderName(upperCase(form.temp[index].sender_bank)));
        store.dispatch(setB_Bank(upperCase(form.temp[index].beneficiary_bank)));
        store.dispatch(setB_Name(form.temp[index].beneficiary_name.toUpperCase()));
        store.dispatch(setAccountNumber(form.temp[index].account_number));
        store.dispatch(setAmount(numberFormat(form.temp[index].amount)));
        store.dispatch(setRemark(form.temp[index].remark));
        store.dispatch(setU_Code(form.temp[index].unique_code));
        store.dispatch(setCreated_At(dateFormat(form.temp[index].created_at)));
        navigation.navigate('DetList');
    };

    const onRadioBtnClick = (item) => {
        let updateState = selectedSort.map((selectedSortItem) =>
            selectedSortItem.id === item.id
                ? { ...selectedSortItem, value: true, selected: true }
                : { ...selectedSortItem, value: false, selected: false }
        );
        setSelectedSort(updateState);
        {
            item.id === 1
                ?
                sortUrutkan()
                : item.id === 2
                    ?
                    sortName(true)
                    : item.id === 3
                        ?
                        sortName(false)
                        : item.id === 4
                            ?
                            sortDate(true)
                            : item.id === 5
                                ?
                                sortDate(false)
                                : null
        };
    };

    const viewSort = () => {
        return (
            <ModalComp
                isVisible={isModalShow}
                onPress={() => showModal()}
            >
                <View style={styleGlobal.modalSort}>
                    <View style={styleGlobal.margin20}>
                        {selectedSort.map((item) => (
                            <RadioButton
                                onPress={() => onRadioBtnClick(item)}
                                selected={item.selected}
                                children={item.name}
                                key={item.id}
                            />
                        ))}

                    </View>
                </View>
            </ModalComp>
        );
    };

    return (
        <View style={styleGlobal.flexContainer}>
            <SearchComp
                onPressUpdate={text => updateSearch(text)}
                onPressShow={() => showModal()}
                sortText={sortText}
            />
            {isLoading === true ?
                <ActivityIndicator animating={isLoading} color={colorGlobal.black} style={styleGlobal.loading} />
                :
                <FlatList
                    data={form.temp}
                    keyExtractor={(key, index) => key + index.toString()}
                    renderItem={({ item, index }) =>
                        <ListTrans
                            onPress={() => goToDetail(index)}
                            status={item.status}
                            senderBank={upperCase(item.sender_bank) + ' \u2794 ' + upperCase(item.beneficiary_bank)}
                            b_Name={item.beneficiary_name.toUpperCase()}
                            amountDate={numberFormat(item.amount) + ' \u25CF ' + dateFormat(item.created_at)}
                        />
                    }
                />
            }
            {viewSort()}
        </View>
    );
};

export default transactionList;