import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';
import { axios } from '../../service/api';

type TLogin = {
  email: string;
  password: string;
};

type TUser = {
  id: string;
  email: string;
  name: string;
  token: string;
  tasks: any[];
};

type TCreateUser = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string
}

type TTask = {
  title: string;
  date: Date;
  hour: string;
};

export const loginAsyncThunk = createAsyncThunk(
  'user/login',
  async (data: TLogin) => {
    const response = await axios.post('/users/login', data);
    return response.data;
  },
);

export const createLoginAsyncThunk = createAsyncThunk(
  'user/create',
  async (data: TCreateUser) => {
    const response = await axios.post('/users', { ...data, password_confirm: data.passwordConfirm });
    return response.data;
  },
);

export const getTaskAsyncThunk = createAsyncThunk(
  'user/getTask',
  async (token: string) => {
    const response = await axios.get('/tasks', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  },
);

export const createTaskAsyncThunk = createAsyncThunk(
  'user/createTask',
  async ({ data, token }: { data: TTask; token: string }) => {
    const response = await axios.post('/tasks', data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  },
);

const slice = createSlice({
  name: 'user',
  initialState: {
    user: {} as TUser,
  },
  reducers: {},
  /**
   *   reducers retornando o objeto invés de alterar o state (conceito de imutabilidade)
   * https://redux-toolkit.js.org/usage/immer-reducers
   */
  extraReducers: (builder) => {
    builder.addCase(loginAsyncThunk.fulfilled, (state, action) => {
      const { name, email, id } = jwtDecode(action.payload.token) as TUser;

      return {
        ...state,
        user: {
          name,
          email,
          id,
          token: action.payload.token,
          tasks: [],
        },
      };
    });

    builder.addCase(getTaskAsyncThunk.fulfilled, (state, action) => ({
      ...state,
      user: {
        ...state.user,
        tasks: action.payload.tasks,
      },
    }));

    builder.addCase(createTaskAsyncThunk.fulfilled, (state, action) => ({
      ...state,
      user: {
        ...state.user,
        tasks: [...state.user.tasks, action.payload],
      },
    }));

    builder.addCase(createLoginAsyncThunk.fulfilled, () => {
      alert('sucesso');
    });
  },
});

export const userReducer = slice.reducer;
export const userActions = slice.actions;
