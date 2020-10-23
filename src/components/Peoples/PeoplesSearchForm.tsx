import React from 'react';
import { Field, Form, Formik } from 'formik';
import { filterType } from '../../redux/peoples-reducer';


const peoplesSearchFormValidate = (values: any) => {
    const errors = {};
    return errors;
}
type PeoplesSearchFormType = {
    onFilterChanged: (filter: filterType) => void
}


export const PeoplesSearchForm: React.FC<PeoplesSearchFormType> = React.memo((props) => {
    const submit = (values: filterType, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
        props.onFilterChanged(values)
        setSubmitting(false);
    }

    return (
        <Formik
            initialValues={{ term: '', friend: null }}
            validate={peoplesSearchFormValidate}
            onSubmit={submit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <Field type="text" name="term" />
                    <Field name="friend" as="select" >
                        <option value="null">All</option>
                        <option value="true">Only followed</option>
                        <option value="false">Only unfollowed</option>
                    </Field >
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    );
})
