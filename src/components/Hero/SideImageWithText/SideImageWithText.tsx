import React from 'react';
import styles from './SideImageWithText.module.scss';

type Props = React.ComponentPropsWithRef<'div'> & {
  text: React.ReactNode;
  image: React.ReactNode;
};

const SideImageWithText = React.forwardRef<HTMLDivElement, Props>(
  ({ text, image }, ref) => {
    return (
      <div className={styles.container} ref={ref}>
        {text}
        {image}
      </div>
    );
  }
);

export default SideImageWithText;
