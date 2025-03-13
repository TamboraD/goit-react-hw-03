import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import css from '../ContactForm/ContactForm.module.css'

const UserSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too short').max(50, 'Too long').required('Required'),
    number: Yup.string().min(9, 'Too short').max(9, 'Too long').required('Required')
})

export default function ContactForm({ onAdd }) {
    const handleSubmit = (values, actions) => {
        const newContact = {
            id: nanoid(),
            name: values.name,
            number: values.number
        };
        onAdd(newContact)
        actions.resetForm()
    }

    return (
        <Formik
            initialValues={{name: '', number: ''} }
            onSubmit={handleSubmit}
            validationSchema={UserSchema}
        >
            <Form className={css.form}>
                <label htmlFor="name">Name</label>
                <Field name='name' id="name"/>
                <ErrorMessage
                    className={css.error}
                    name="name"
                    component='span'
                    
                />

                <label htmlFor="number"> Number</label>
                <Field name="number" id="number"/>
                <ErrorMessage
                    className={css.error}
                    name="number"
                    component='span'
                />
                <button className={css.btn} type="submit">Add contact</button>
            </Form>
        </Formik>
    )
}