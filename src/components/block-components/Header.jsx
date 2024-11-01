import React, { useContext } from 'react';
import logo from '../../assets/images/gerb.svg';
import { Link } from 'react-router-dom';
import moonLight from '../../assets/images/moon-solid.svg';
import sun from '../../assets/images/sun-icon.svg';
import { ThemeContext } from '../../App';

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  
  function setLightTheme() {
    setTheme('light');
    localStorage.setItem('theme', 'light')
  }

  function setDarkTheme() {
    setTheme('dark');
    localStorage.setItem('theme', 'dark')
  }

  return (
    <div className='py-10 dark:bg-dark-background dark:text-white'>
      <div className='container mx-auto flex items-center justify-between'>
        <div className='logo'>
          <Link to='/' className='w-[214px] text-[14px] leading-[16,8px] block'>
            <img className='w-[214] block mx-auto mb-2' src={logo} alt='Logo' />
            <p className='text-center'>Давлат хизматининг ягона электрон ахборот-таҳлил тизими</p>
          </Link>
        </div>

        <div className='company-name w-[644px]'>
          <h2 className='font-rubik text-2xl font-semibold leading-[38.4px] text-center text-custom-black dark:text-white'>
            Республика Ассессмент маркази онлайн платформаси
          </h2>
        </div>

        <div className='font-size-pointer'>
          {theme == 'light' && (
            <button onClick={() => {setDarkTheme()}}  className='border rounded py-3 px-5 border-custom-blue text-custom-blue flex gap-3 items-center transition duration-300'>
              <img className='w-[18px]' src={moonLight} alt='Moon icon' />
            </button>
          )}

          {theme == 'dark' && (
            <button onClick={() => {setLightTheme()}} className='border rounded py-3 px-5 border-custom-blue text-custom-blue flex gap-3 items-center transition duration-300 dark:border-white dark:hover:bg-transparent'>
              <img className='w-[18px]' src={sun} alt='Moon icon' />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default React.memo(Header);
