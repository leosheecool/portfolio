import React from 'react';
import styles from './PDFDisplayer.module.scss';
import utilsStyles from 'styles/utils.module.scss';

type Props = {
  title: string;
  pdfPath: string;
};

const PDFDisplayer = ({ title, pdfPath }: Props) => {
  return (
    <div className={styles.container}>
      <h1 className={utilsStyles.title}>{title}</h1>
      <object
        data={pdfPath}
        type="application/pdf"
        width={'100%'}
        className={styles.pdf}
      >
        <p>
          Unable to display PDF file. <a href={pdfPath}>Download it</a> instead
        </p>
      </object>
    </div>
  );
};

export default PDFDisplayer;
