import css from './Contact.module.css';
import { FaPhoneAlt, FaUser } from 'react-icons/fa';

export default function Contact({ name, phone, onDelete }) {
  return (
    <li className={css.contact}>
      <div className={css.contactTitle}>
        <p className={css.contactName}>
          <FaUser className={css.icon} />
          {name}
        </p>
        <p className={css.contactphone}>
          <FaPhoneAlt className={css.icon} />
          {phone}
        </p>
      </div>
      <button className={css.btnContact} type="submit" onClick={onDelete}>
        Delete
      </button>
    </li>
  );
}
