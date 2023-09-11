import React, { useContext, useMemo } from 'react';

export const ToastContext = React.createContext<
  | undefined
  | {
      isDisplayed: boolean;
      text: string;
      displayToast: (text: string) => void;
    }
>(undefined);

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toast, setToast] = React.useState({
    isDisplayed: false,
    text: '',
  });

  const handleDisplayToast = (text: string) => {
    setToast({
      isDisplayed: true,
      text,
    });
    setTimeout(() => {
      setToast((prev) => ({
        ...prev,
        isDisplayed: false,
      }));
    }, 2500);
  };

  const value = useMemo(
    () => ({ ...toast, displayToast: handleDisplayToast }),
    [toast]
  );

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
};
