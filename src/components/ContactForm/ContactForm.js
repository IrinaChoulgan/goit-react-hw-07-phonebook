import { useState } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import styles from './ContactForm.module.css';
import actions from '../../redux/actions';
import { getContacts } from '../../redux/selectors';

const ContactForm = ({ onAdd }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const prodIdName = uuid();
  const prodIdNumber = uuid();

  const [contact, setContact] = useState(null);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    // const contact = {
    //   name,
    //   number,
    //   id: uuid(),
    // };
    // addNewContact(contact);
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      alert(`${name} contact is already on your list`);
    } else dispatch(actions.addContact(name, number));

    setContact(contact);
    resetForm();
    // onAdd(name, number);
    console.log('ADD ACTIONS', onAdd);
  };
  const resetForm = () => {
    setName('');
    setNumber('');
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor={prodIdName}>Name</label>
      <input
        id={prodIdName}
        type="text"
        name="name"
        value={name}
        placeholder="enter name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        onChange={handleChange}
      />
      <br />
      <label htmlFor={prodIdNumber}>Number</label>
      <input
        id={prodIdNumber}
        type="tel"
        name="number"
        value={number}
        placeholder="enter phone number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
        onChange={handleChange}
      />
      <button type="submit" className={styles.submit}>
        Add contact
      </button>
    </form>
  );
};

// const mapStateToProps = state => {
//   return {
//     contactList: state.items,
//   };
// };
// const mapDispatchToProps = dispatch => {
//   return {
//     onAdd: (name, number) => dispatch(actions.addContact(name, number)),
//   };
// };

// export default connect(null, mapDispatchToProps)(ContactForm);
export default ContactForm;
