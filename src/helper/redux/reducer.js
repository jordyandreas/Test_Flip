const initialState = {
    Id: "",
    SenderName: "",
    B_Bank: "",
    B_Name: "",
    AccountNumber: "",
    Amount: "",
    Remark: "",
    U_Code: "",
    Created_At: "",
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "ID":
            return {
                ...state,
                Id: action.payload
            }

        case "SENDERNAME":
            return {
                ...state,
                SenderName: action.payload
            }

        case "B_BANK":
            return {
                ...state,
                B_Bank: action.payload
            }

        case "B_NAME":
            return {
                ...state,
                B_Name: action.payload
            }

        case "ACCOUNTNUMBER":
            return {
                ...state,
                AccountNumber: action.payload
            }

        case "AMOUNT":
            return {
                ...state,
                Amount: action.payload
            }

        case "REMARK":
            return {
                ...state,
                Remark: action.payload
            }

        case "U_CODE":
            return {
                ...state,
                U_Code: action.payload
            }

        case "CREATED_AT":
            return {
                ...state,
                Created_At: action.payload
            }

        default:
            return state
    }
}