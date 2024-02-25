import css from './Contact.module.css';
import { FaPhoneAlt, FaUser } from 'react-icons/fa';

export default function Contact({ name, number, onDelete }) {
  return (
    <li className={css.contact}>
      <div className={css.contactTitle}>
        <p className={css.contactName}>
          <FaUser className={css.icon} />
          {name}
        </p>
        <p className={css.contactNumber}>
          <FaPhoneAlt className={css.icon} />
          {number}
        </p>
      </div>
      <button className={css.btnContact} type="submit" onClick={onDelete}>
        Delete
      </button>
    </li>
  );
}
