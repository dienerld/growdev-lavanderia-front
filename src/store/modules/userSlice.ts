import { createSlice } from '@reduxjs/toolkit';

// type TLogin = {
//   email: string;
//   password: string;
// };

type TUser = {
  id: string;
  email: string;
  name: string;
  token: string;
};

// type TCreateUser = {
//   name: string;
//   email: string;
//   password: string;
//   passwordConfirm: string
// }

const slice = createSlice({
  name: 'user',
  initialState: {
    id: '1',
    email: '',
    name: 'Diener',
    token: '',
  } as TUser,
  reducers: {},
  /**
   *   reducers retornando o objeto invés de alterar o state (conceito de imutabilidade)
   * https://redux-toolkit.js.org/usage/immer-reducers
   */
});

export const userReducer = slice.reducer;
