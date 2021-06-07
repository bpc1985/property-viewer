import React, { Suspense, lazy, useState, useEffect } from "react";
import { isEmpty } from "lodash";
import {
  Button,
  Dialog,
  DialogContent,
  DialogActions,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DialogTitle from "components/DialogTitle";
import Loading from "components/Loading";

const importContent = (componentName) =>
  lazy(() =>
    import(`../../dialogs/${componentName}`).catch(() =>
      import("../../dialogs/NotAvailable")
    )
  );

const MyContent = ({ componentName, content, view, styles }) => {
  const useStyles = makeStyles(() => ({ ...styles }));
  const classes = useStyles();
  if (componentName) {
    return (
      <DialogContent classes={{ root: classes.dialogContent }}>
        <Suspense fallback={<Loading />}>{view}</Suspense>
      </DialogContent>
    );
  }
  if (content) {
    return (
      <DialogContent classes={{ root: classes.dialogContent }}>
        {view}
      </DialogContent>
    );
  }
};

const MyDialog = ({ open, options, onCancel, onConfirm }) => {
  const {
    titleText,
    componentName,
    content,
    confirmationText,
    cancellationText,
    useForm,
    dialogProps,
    contentProps,
    styles,
  } = options;

  const [view, setView] = useState();

  useEffect(() => {
    async function loadContent() {
      if (!isEmpty(componentName)) {
        const Content = await importContent(componentName);
        const contentView = (
          <Content
            {...contentProps}
            onCancel={onCancel}
            onConfirm={onConfirm}
          />
        );
        setView(contentView);
      } else if (!isEmpty(content)) {
        const contentView = <div>{content}</div>;
        setView(contentView);
      }
    }
    loadContent();
  }, [componentName, content, contentProps, onCancel, onConfirm]);

  if (useForm) {
    return (
      <Dialog
        maxWidth={dialogProps.maxWidth || "sm"}
        open={open}
        onClose={onCancel}
      >
        <Suspense fallback={<Loading />}>{view}</Suspense>
      </Dialog>
    );
  }

  return (
    <Dialog
      maxWidth={dialogProps.maxWidth || "sm"}
      open={open}
      onClose={onCancel}
    >
      <DialogTitle onClose={onCancel}>{titleText}</DialogTitle>
      <div>
        <MyContent
          componentName={componentName}
          styles={styles}
          content={content}
          view={view}
        />
      </div>
      {dialogProps.showDialogAction && (
        <DialogActions>
          <Button onClick={onCancel}>{cancellationText}</Button>
          <Button onClick={onConfirm} color="primary">
            {confirmationText}
          </Button>
        </DialogActions>
      )}
    </Dialog>
  );
};

export default MyDialog;
