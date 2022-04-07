import { FC } from 'react';
import { ReactSVG } from 'react-svg';
import './style.css';

const Header: FC = () => {
  const links = [{ url: 'https://ledog.co/coatcolor/', name: 'Coat Color' }];

  return (
    <div className="container">
      <header className="container">
        <ReactSVG src="/resources/svg/appLogo.svg" />
        {links.map(({ url, name }) => (
          <a className="titleHeader" href={url} key={url}>
            {name}
          </a>
        ))}
      </header>
    </div>
  );
};

export default Header;
