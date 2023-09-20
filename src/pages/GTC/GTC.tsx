import React from 'react';
import styles from './GTC.module.scss';
import utilsStyles from 'styles/utils.module.scss';
import Footer from 'components/Footer/Footer';

const GTC = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={utilsStyles.title}>General terms and conditions</h1>
        <object
          data="/assets/documents/Charte de données.pdf"
          type="application/pdf"
          width={'100%'}
          className={styles.pdf}
        >
          <p>
            Unable to display PDF file.{' '}
            <a href="/assets/documents/Charte de données.pdf">Download it</a>{' '}
            instead
          </p>
        </object>
      </div>
      <Footer />
    </>
  );
};

export default GTC;
