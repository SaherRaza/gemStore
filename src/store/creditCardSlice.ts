
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as Yup from 'yup';
interface cardState
{
    cardHolderName: string;
    cardNumber: string;
    expire: string;
    cvv: string;
}

export const cardValidationSchema = Yup.object().shape({
    cardHolderName: Yup.string().trim('Name is missing').min(3, 'Invalid Name!').required('Field is required'),
    cardNumber: Yup.string().trim('Number is missing').min(3, 'Invalid Number!').required('Field is required'),
   expire: Yup.string()
  .required("Expiry date is required")
        .matches(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, "Invalid expiry date (MM/YY)"),
   cvv: Yup.string()
  .required("CVV is required")
  .matches(/^[0-9]{3,4}$/, "CVV must be 3 or 4 digits"),

});

const initialState: cardState = {
    cardHolderName: "",
    cardNumber: "",
    expire: "",
    cvv: "",
};

const creditCardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: ({
         setCardHolderName: (state, action: PayloadAction<string>) =>
        {
            state.cardHolderName = action.payload;
        },
         setCardNumber: (state, action: PayloadAction<string>) =>
        {
            state.cardNumber = action.payload;
        },
          setExpire: (state, action: PayloadAction<string>) =>
        {
            state.expire = action.payload;
        },
           setCVV: (state, action: PayloadAction<string>) =>
        {
            state.cvv = action.payload;
        },
    })
});

export const {setCardHolderName,setCardNumber,setExpire,setCVV} = creditCardSlice.actions;
export default creditCardSlice.reducer