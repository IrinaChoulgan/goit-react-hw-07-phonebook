import React from 'react';
import styles from './ContactList.module.css';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import operations from '../../redux/operations';
import { getVisibleContacts } from '../../redux/selectors';
import { connect } from 'react-redux';
import { useEffect } from 'react';

const ContactList = fetchContacts => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  // fetchContacts();

  useEffect(() => dispatch(operations.fetchContacts()), [dispatch]);

  const deleteContact = id => dispatch(operations.deleteContact(id));
  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, phone }) => (
        <li key={id} className={styles.item}>
          <p className={styles.text}>
            {name} : {phone}
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

// const mapDispatchToProps = dispatch => ({
//   fetchContacts: () => dispatch(operations.fetchContacts()),
// });

// export default connect(null, mapDispatchToProps)(ContactList);
export default ContactList;
