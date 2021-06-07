import React, { useState, useCallback } from "react";
import DialogContext from "hooks/useDialog/DialogContext";
import Dialog from "hooks/useDialog/Dialog";

const _defaultOptions = {
  titleText: "",
  componentName: "",
  content: "",
  onCancel: null,
  onConfirm: null,
  useForm: false,
  dialogProps: {},
  contentProps: {},
  styles: {},
};

const DialogProvider = ({ children, defaultOptions = {} }) => {
  const [options, setOptions] = useState({
    confirmationText: "OK",
    cancellationText: "Cancel",
    ..._defaultOptions,
    ...defaultOptions,
  });
  const [resolveReject, setResolveReject] = useState([]);

  const dialog = useCallback(
    (opts = {}) =>
      new Promise((resolve, reject) => {
        setOptions({ ..._defaultOptions, ...defaultOptions, ...opts });
        setResolveReject([resolve, reject]);
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const handleClose = useCallback(() => {
    setResolveReject([]);
  }, []);

  const handleCancel = useCallback(() => {
    if (options.onCancel) {
      options.onCancel();
    }
    handleClose();
  }, [options, handleClose]);

  const handleConfirm = useCallback(() => {
    if (options.onConfirm) {
      options.onConfirm();
    }
    handleClose();
  }, [options, handleClose]);

  return (
    <>
      <DialogContext.Provider value={dialog}>{children}</DialogContext.Provider>
      <Dialog
        open={resolveReject.length === 2}
        options={options}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    </>
  );
};

export default DialogProvider;
