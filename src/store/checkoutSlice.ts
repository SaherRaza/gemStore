import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as Yup from 'yup';

interface checkoutState
{
    firstName: string;
    lastName: string;
    country: string;
    streetName: string;
    city: string;
    state: string | undefined;
    zipCode: string;
    phoneNumber: string;
}
//name: yup.string().trim('Name is missing').min(3, 'Invalid Name!').required('Name is required'),
export const validationSchema = Yup.object().shape({
    firstName: Yup.string().trim('Name is missing').min(3, 'Invalid Name!').required('Field is required'),
    lastName: Yup.string().trim('Name is missing').min(3, 'Invalid Name!').required('Field is required'),
    country: Yup.string().trim('Country is missing').required('Field is required'),
    streetName: Yup.string().trim('Street Name is missing').required('Field is required'),
    city: Yup.string().trim('City Name is missing').required('Field is required'),
    state: Yup.string(),
    zipCode: Yup.string().trim('Zip Code is missing').required('Field is required'),
    phoneNumber: Yup.string().trim('Phone Number is missing').required('Field is required'),
});

const initialState: checkoutState = {
    firstName: '',
    lastName: '',
    country: '',
    streetName: '',
    city: '',
    state: '',
    zipCode: '',
    phoneNumber: '',
};

// Define the checkout slice
const checkoutSlice = createSlice({
    name: 'checkout',
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) =>
        {
            state.firstName = action.payload;
        },
        setLastName: (state, action: PayloadAction<string>) =>
        {
            state.lastName = action.payload;
        },
        setCountry: (state, action: PayloadAction<string>) =>
        {
            state.country = action.payload;
        },
        setStreetName: (state, action: PayloadAction<string>) =>
        {
            state.streetName = action.payload;
        },
        setCity: (state, action: PayloadAction<string>) =>
        {
            state.city = action.payload;
        },
        setState:(state, action: PayloadAction<string>) =>
        {
            state.state = action.payload;
        },
        setZipCode:(state, action: PayloadAction<string>) =>
        {
            state.zipCode = action.payload;
        },
        setPhoneNumber:(state, action: PayloadAction<string>) =>
        {
            state.phoneNumber = action.payload;
        },
        resetCheckout:()=>initialState,
  },
  

});

export const { setZipCode, setName, resetCheckout, setState,
    setCity, setLastName, setCountry, setStreetName, setPhoneNumber } = checkoutSlice.actions;

export default checkoutSlice.reducer;
