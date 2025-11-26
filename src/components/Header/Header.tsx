import './Header.css';
import Logo from '@assets/logo.svg?react';

export function Header() {
  return (
    <>
      <header>
        <a className={'box-logo'} href="">
          <Logo className="logo-icon" />
          Weather
        </a>
      </header>
    </>
  );
}
