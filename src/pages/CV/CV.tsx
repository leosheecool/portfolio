import React from 'react';
import Footer from 'components/Footer/Footer';
import useScrollSmoother from 'hooks/useScrollSmoother';
import { PDFDisplayer } from 'components';
import utilsStyles from 'styles/utils.module.scss';
import { useTranslation } from 'react-i18next';

const CV = () => {
  useScrollSmoother();
  const { t } = useTranslation();

  return (
    <div className={utilsStyles.legalPageContainer}>
      <PDFDisplayer
        title={t('navigation.resume_full')}
        pdfPath="/assets/documents/CV.pdf"
      />
      <Footer />
    </div>
  );
};

export default CV;
