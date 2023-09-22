import React from 'react';
import Footer from 'components/Footer/Footer';
import useScrollSmoother from 'hooks/useScrollSmoother';
import { PDFDisplayer } from 'components';
import utilsStyles from 'styles/utils.module.scss';
import { useTranslation } from 'react-i18next';

const Terms = () => {
  useScrollSmoother();
  const { t } = useTranslation();
  return (
    <div className={utilsStyles.legalPageContainer}>
      <PDFDisplayer
        title={t('navigation.terms_full')}
        pdfPath="/assets/documents/Charte de données.pdf"
      />
      <Footer />
    </div>
  );
};

export default Terms;
