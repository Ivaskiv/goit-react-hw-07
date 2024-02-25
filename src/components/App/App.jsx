import ContactForm from '../ContactForm/ContactForm.jsx';
import ContactList from '../ContactList/ContactList.jsx';
import SearchBox from '../SearchBox/SearchBox.jsx';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useEffect } from 'react';
import { selectVisibleContacts } from '../../redux/selectors.js';
import { fetchContacts } from '../../redux/contactsOperations.js';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />
      <p className="searchText">Find contacts by name</p>
      <SearchBox />
      {visibleContacts.length !== 0 ? (
        <ContactList />
      ) : (
        <p className="searchText">There are no contacts in your phonebook!</p>
      )}
    </div>
  );
};

export default App;
