import React from 'react';
import { useTranslation } from 'react-i18next';

function Language() {
    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language)
    }

    return (
        <>
            <button type="button" className="btn btn-primary" onClick={() => changeLanguage("en")}>EN</button>
            <button type="button" className="btn btn-secondary" onClick={() => changeLanguage("vi")} > VN</button>
            <div className="App">
                <p>{t('title')}</p>
                <p>{t('description.part1')}</p>
            </div>
        </>
    );
}

export default Language;