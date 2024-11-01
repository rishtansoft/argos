import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { http } from '../axios';
import { useNavigate } from 'react-router-dom';

function Login({ setToken }) {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  function notify(message) {
    toast.error(message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  }

  function validate() {
    if (username.length < 3 || password.length < 3) {
      notify('Фойдаланувчи номи ёки парол нотўғри киритилди');
      return false;
    }

    return true;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const isValid = validate();

    if (!isValid) {
      return;
    }

    const user = {
      username,
      password,
    };

    setLoading(true);
    http
      .post('/login', user)
      .then((response) => {
        if (
          response.data.message == 'Foydalanuvchi topilmadi' ||
          response.data.message == "Parol noto'g'ri"
        ) {
          notify('Фойдаланувчи номи ёки парол нотўғри киритилди');
        }

        if (response.data.token) {
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('user', JSON.stringify(response.data.user));
          navigate('/');
          setToken(response.data.token);
        }
      })
      .catch((err) => {
        notify('Фойдаланувчи номи ёки парол нотўғри киритилди');
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className='bg-gray-50'>
      <div className='min-h-screen flex flex-col items-center justify-center py-6 px-4'>
        <div className='max-w-md w-full'>
          <div className='p-8 rounded-2xl bg-white shadow'>
            <h2 className='text-gray-800 text-center text-2xl font-bold'>
              Кириш
            </h2>
            <form className='mt-8 space-y-4'>
              <div>
                <label className='text-gray-800 text-sm mb-2 block'>
                  Логин
                </label>
                <div className='relative flex items-center'>
                  <input
                    name='username'
                    type='text'
                    required
                    className='w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600'
                    placeholder='Логинни киритинг...'
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='#bbb'
                    stroke='#bbb'
                    className='w-4 h-4 absolute right-4'
                    viewBox='0 0 24 24'
                  >
                    <circle
                      cx='10'
                      cy='7'
                      r='6'
                      data-original='#000000'
                    ></circle>
                    <path
                      d='M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z'
                      data-original='#000000'
                    ></path>
                  </svg>
                </div>
              </div>

              <div>
                <label className='text-gray-800 text-sm mb-2 block'>
                  Парол
                </label>
                <div className='relative flex items-center'>
                  <input
                    name='password'
                    type='password'
                    required
                    className='w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600'
                    placeholder='Паролни киритинг...'
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='#bbb'
                    stroke='#bbb'
                    className='w-4 h-4 absolute right-4 cursor-pointer'
                    viewBox='0 0 128 128'
                  >
                    <path
                      d='M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z'
                      data-original='#000000'
                    ></path>
                  </svg>
                </div>
              </div>

              <div className='flex flex-wrap items-center justify-between gap-4'>
                <div className='flex items-center'>
                  <input
                    id='remember-me'
                    name='remember-me'
                    type='checkbox'
                    className='h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'
                  />
                  <label
                    htmlFor='remember-me'
                    className='ml-3 block text-sm text-gray-800'
                  >
                    Мени эслаб қол
                  </label>
                </div>
                <div className='text-sm'>
                  <a
                    href='#'
                    className='text-blue-600 hover:underline font-semibold'
                  >
                    Паролни унутдингизми
                  </a>
                </div>
              </div>

              <div className='!mt-8'>
                <button
                  type='button'
                  className='w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none'
                  onClick={handleSubmit}
                  disabled={loading}
                >
                  {loading ? 'Кутилмоқда...' : 'Кириш'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}

export default Login;
