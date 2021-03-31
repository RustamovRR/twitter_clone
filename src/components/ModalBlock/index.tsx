import { useState } from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from "@material-ui/core";

import CloseIcon from "@material-ui/icons/Close";
import { useStylesSignIn } from "../../pages/SignIn/useSignInStyles";

interface ModalBlockProps {
  title: string;
  children: React.ReactNode;
  classes?: ReturnType<typeof useStylesSignIn>;
  visible: boolean;
  onClose: () => void;
}

const ModalBlock: React.FC<ModalBlockProps> = ({
  title,
  children,
  onClose,
  visible = false,
}): React.ReactElement => {
  // const classes = useStyles();

  return (
    <Dialog maxWidth="md" open={visible} onClose={onClose} aria-labelledby="signup-modal">
      <DialogTitle id="form-dialog-title">
        <IconButton onClick={onClose} color="secondary" aria-label="close">
          <CloseIcon style={{ fontSize: 26 }} color="secondary" />
        </IconButton>
        {title}
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default ModalBlock;
