import css from '../Contact/Contact.module.css'
import { FaPhoneAlt, FaUserAlt } from "react-icons/fa";

export default function Contact({name, number, onDelete, id}) {
    
    return (
        <div className={css.container}>
            <div className={css.box}>
                <p className={css.text}> <FaUserAlt className={ css.icon} />{name }</p>
                <p> <FaPhoneAlt className={ css.icon}/>{number}</p>
                </div>
            <button className={css.btn} onClick={() => onDelete(id)}>Delete</button>
</div>
    )
}