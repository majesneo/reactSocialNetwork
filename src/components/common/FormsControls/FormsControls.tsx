import React from 'react';
import { ReactNode } from 'react';
import { WrappedFieldInputProps, WrappedFieldMetaProps } from 'redux-form/lib/Field';
import s from './FormsControls.module.css';

type FormsControlType = {
    input: WrappedFieldInputProps
    meta: WrappedFieldMetaProps
    child: ReactNode
}


export const FormControl: React.FC<FormsControlType> = ({ input, meta, child, ...props }) => { //деструктуризируем: инпут, мету, чилд и оставшееся остается в остаточныхпропсах
    const hasError = meta.error && meta.touched;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            {hasError && <span className={s.error}>{meta.error}</span>}
            <div>{props.children}</div>
        </div>
    );
}

export const Textarea: React.FC<FormsControlType> = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}
export const Input: React.FC<FormsControlType> = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}
