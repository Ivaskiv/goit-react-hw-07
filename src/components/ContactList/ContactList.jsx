import { useDispatch, useSelector } from 'react-redux';
import Contact from '../Contact/Contact.jsx';
import css from '../ContactList/ContactList.module.css';
import { deleteContact } from '../../redux/contactsOperations.js';
import { selectVisibleContacts } from '../../redux/selectors.js';

const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };
  return (
    <ul className={css.contactList}>
      {visibleContacts.map(({ id, name, number }) => (
        <Contact
          key={id + name}
          id={id}
          name={name}
          number={number}
          onDelete={() => handleDeleteContact(id)}
        />
      ))}
    </ul>
  );
};
export default ContactList;
