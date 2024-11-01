import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import { createContext, useEffect, useState } from 'react';
import MainLayout from './layouts/MainLayout';
import ErrorPage from './pages/ErrorPage';

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');
  const [token, setToken] = useState(localStorage.getItem('token'));

  const navigate = useNavigate();

  function PrivateRoute({ isAuth, children }) {
    if (!isAuth) {
      navigate('/login');
    }

    return children;
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'));
    } else {
      navigate('/login');
    }
  }, [navigate]);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  useEffect(() => {
    if (localStorage.getItem('theme')) {
      setTheme(localStorage.getItem('theme'));
    } else {
      setTheme('light');
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Routes>
        <Route
          path='/'
          element={
            <PrivateRoute isAuth={!!token}>
              <MainLayout>
                <Home></Home>
              </MainLayout>
            </PrivateRoute>
          }
        ></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </ThemeContext.Provider>
  );
}

export default App;
