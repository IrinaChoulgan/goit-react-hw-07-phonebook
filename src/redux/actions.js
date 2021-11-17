import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/add', (name, number) => ({
  payload: {
    name,
    number,
    id: uuidv4(),
  },
}));
const deleteContact = createAction('contacts/delete');
const changeFilter = createAction('contacts/changeFilter');

export default { addContact, deleteContact, changeFilter };

//=====REDUX=====
// const deleteContact = id => ({
//   type: types.DELETE,
//   payload: id,
// });

// const changeFilter = contacts => ({
//   type: types.CHANGE_FILTER,
//   payload: contacts,
// });

// const addContact = (name, number) => ({
//   type: types.ADD,
//   payload: {
//     name,
//     number,
//     id: uuidv4(),
//   },
// });
