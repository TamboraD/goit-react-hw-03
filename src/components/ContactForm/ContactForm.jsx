import { Formik, Form, Field } from "formik";
import { nanoid } from "nanoid";

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
            onSubmit={ handleSubmit}
        >
            <Form>
                <label htmlFor="">Name</label>
                <Field name='name'/>

                <label htmlFor=""> Number</label>
                <Field name="number" />
                <button type="submit">Add contact</button>
            </Form>
        </Formik>
    )
}