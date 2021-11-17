import React from 'react';
import styles from './Filter.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../redux/actions';
import { getFilter } from '../../redux/selectors';

const Filter = () => {
  const contacts = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <div className={styles.wrapper}>
      <label>
        Find contacts by name
        <input
          type="text"
          value={contacts}
          onChange={e => dispatch(actions.changeFilter(e.target.value))}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  contacts: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

// const mapStateToProps = state => ({
//   contacts: state.contacts.filter,
// });

// const mapDispatchToProps = dispatch => ({
//   onChange: e => dispatch(actions.changeFilter(e.target.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);

export default Filter;
