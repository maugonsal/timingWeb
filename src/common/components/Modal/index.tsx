import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import './style.css';

const Modal: FC = () => {
  const { t } = useTranslation();

  return (
    <div>
        <input type="button" value="hola" className="btn"/>
        <div className="modal">
            <div className="modalContainer">
                <p>{t('preferences')}</p>
            </div>
        </div>
    </div>
  );
};

export default Modal;
