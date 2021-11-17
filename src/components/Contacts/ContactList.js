import React from 'react';
import styles from './ContactList.module.css';
import PropTypes from 'prop-types';
import { connect, useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/actions';
import { getVisibleContacts } from '../../redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const deleteContact = id => dispatch(actions.deleteContact(id));
  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.item}>
          <p className={styles.text}>
            {name} : {number}
          </p>
          <button className={styles.btn} onClick={() => deleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.any.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onClick: PropTypes.func.isRequired,
};

// const visibleContacts = (contacts, filter) => {
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase()),
//   );
// };
// const mapStateToProps = ({ contacts: { items, filter } }) => ({
//   contacts: visibleContacts(items, filter),
// });
// const mapDispatchToProps = dispatch => ({
//   deleteContact: id => dispatch(actions.deleteContact(id)),
// });

//export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

export default ContactList;
