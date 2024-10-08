import React, { ReactNode } from 'react';
import { FormikHelpers, Formik } from 'formik';

interface Props<T>
{
    initialValues: any;
    validationSchema: any;
    onSubmit: (values: T, formikHelpers: FormikHelpers<T>) => void;
    children: ReactNode;
}

const Form = <T extends object>(props: Props<T>) =>
{
    return (
        <Formik initialValues={props.initialValues}
            onSubmit={props.onSubmit}
            validationSchema={props.validationSchema}>
            {props.children}
        </Formik>
    );
};

export default Form;
