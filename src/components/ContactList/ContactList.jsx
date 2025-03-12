import Contact from '../Contact/Contact'

export default function ContactList({contacts, onDelete}) {
    
    return (
        <ul>
            {contacts.map((contact) => (
                <li key={contact.id}>
                    <Contact
                        name={contact.name}
                        number={contact.number}
                        onDelete={onDelete}
                        id={contact.id}
                    />
                </li>
            ))}
        </ul>
    )
}