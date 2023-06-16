import { useEffect, useState } from 'react';
import { Card, TextField } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
  createTaskAsyncThunk,
  getTaskAsyncThunk,
} from '../store/modules/userSlice';

export function Home() {
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user.id) {
      dispatch(getTaskAsyncThunk(user.token));
    }
  }, []);

  const [title, setTitle] = useState('');

  const handleSubmit = () => {
    dispatch(
      createTaskAsyncThunk({
        data: {
          title,
          date: new Date(),
          hour: '02:20',
        },
        token: user.token,
      }),
    );
  };

  return (
    <div className="flex flex-col flex-1 ">
      <form className="flex flex-col w-5/6 mt-4 gap-4 self-center items-center">
        <TextField
          type="text"
          name="title"
          placeholder="titulo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="button" onClick={handleSubmit}>
          Enviar
        </button>
      </form>

      <hr />

      {user?.tasks
          && user.tasks.map((task) => (
            <Card>
              <h1>{task.title}</h1>
              <p>{task.date}</p>
              <p>{task.hour}</p>
              <p>{task.done ? 'concluida' : 'a fazer'}</p>
              <p>{task.hidden ? 'Oculta' : 'visivel'}</p>
            </Card>
          ))}
    </div>
  );
}
