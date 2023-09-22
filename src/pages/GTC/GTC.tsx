import React from 'react';
import Footer from 'components/Footer/Footer';
import useScrollSmoother from 'hooks/useScrollSmoother';
import { PDFDisplayer } from 'components';
import utilsStyles from 'styles/utils.module.scss';
import { useTranslation } from 'react-i18next';

const GTC = () => {
  useScrollSmoother();
  const { t } = useTranslation();

  return (
    <div className={utilsStyles.legalPageContainer}>
      <PDFDisplayer
        title={t('navigation.GTC_full')}
        pdfPath="/assets/documents/CGV.pdf"
      />
      <Footer />
    </div>
  );
};

export default GTC;
