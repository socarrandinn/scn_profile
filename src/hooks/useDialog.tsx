/**
 * @author: Angel Labrada Massó
 * @version: v0.0.1
 * @date: 16/11/2022
 */
import { createContext, useCallback, useContext, useState } from 'react';

interface DialogContextInterface {
  isOpen?: boolean;
  dialog: string;
  payload?: any;
  openDialog: (dialog: any, payload?: any) => void;
  closeDialog: () => void;
}

const DialogContext = createContext<DialogContextInterface>({
  dialog: 'dialogId',
  openDialog: (dialog: string, payload?: any) => null,
  closeDialog: () => null,
});

const useDialog = () => {
  const context = useContext(DialogContext);
  if (context === undefined) {
    throw new Error('useDialog must be used within a DialogProvider');
  }

  return context;
};

const DialogProvider = ({ ...props }) => {
  const [dialog, setDialog] = useState<any>({ isOpen: false });

  const openDialog = useCallback((dialog: string, payload: any) => {
    setDialog({ isOpen: true, dialog, payload });
  }, []);

  const closeDialog = useCallback(() => {
    setDialog({ isOpen: false, dialog: null });
  }, []);

  return <DialogContext.Provider value={{ ...dialog, openDialog, closeDialog }} {...props} />;
};

export { useDialog, DialogProvider };
