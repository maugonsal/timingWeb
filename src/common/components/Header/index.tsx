import { FC } from 'react';
import { ReactSVG } from 'react-svg';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';
import './style.css';

const Header: FC = () => {
  const { i18n } = useTranslation();
  const links = [{ url: 'https://ledog.co/coatcolor/', name: 'Coat Color' }];

  const handleLanguageChange = (e: {
    target: { value: string | undefined };
  }) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="container">
      <header className="container">
        <ReactSVG src="/resources/svg/appLogo.svg" />
        <div className="containerSelect">
          {links.map(({ url, name }) => (
            <a className="titleHeader" href={url} key={url}>
              {name}
            </a>
          ))}
          <li>
            <select
              className="containerLanguage"
              onChange={handleLanguageChange}>
              <option value="en">{t('language.en')}</option>
              <option value="es">{t('language.es')}</option>
            </select>
          </li>
        </div>
      </header>
    </div>
  );
};

export default Header;
