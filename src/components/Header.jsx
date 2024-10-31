import React from 'react';
import logo from '../assets/images/Logo.svg';
import { Link } from 'react-router-dom';
import moonLight from '../assets/images/moon-solid.svg';
function Header() {
  return (
    <div className='py-10'>
      <div className='container mx-auto flex items-center justify-between'>
        <div className='logo'>
          <Link to='/'>
            <img className='w-[214]' src={logo} alt='Logo' />
          </Link>
        </div>

        <div className='company-name w-[644px]'>
          <h2 className='font-rubik text-2xl font-semibold leading-[38.4px] text-center text-custom-black'>
            Республика Ассессмент маркази онлайн платформаси
          </h2>
        </div>

        <div className='font-size-pointer'>
          <img className='w-12 cursor-pointer' src={moonLight} alt='' />
        </div>
      </div>
    </div>
  );
}

export default React.memo(Header);
