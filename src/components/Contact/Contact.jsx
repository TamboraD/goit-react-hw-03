import css from '../Contact/Contact.module.css'

export default function Contact({name, number, onDelete, id}) {
    
    return (
        <div className={css.container}>
            <div className={css.box}>
            <p>{name }</p>
                <p>{number}</p>
                </div>
            <button className={css.btn} onClick={() => onDelete(id)}>Delete</button>
</div>
    )
}