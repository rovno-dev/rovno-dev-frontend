"use client"

import { Text } from "@/components/core/data-display/typography/Text";
import { colorStyles } from '@/utils/styles/colors';
import CloseIcon from '@mui/icons-material/Close';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import { CSSProperties, Dispatch, MouseEventHandler, ReactNode, SetStateAction } from 'react';
import { Heading, HeadingProps } from "./typography/Heading";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export interface RDDialogProps extends DialogProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
  size?: "sm" | "md" | "lg";
}

function RDDialog({ size = 'md', sx, setOpen, onClose, open, title, children, ...other }: RDDialogProps) {
  return (
    <Dialog
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: "1.25rem",
        },
        '& .MuiPaper-root': {
          background: colorStyles.dark.background.globe.default,
          border: `1px solid ${colorStyles.dark.background.border.default}`,
        },
        ...sx,
      }}
      onClose={onClose}
      aria-labelledby={title}
      open={open}
      {...other}
    >
      {title ?
        (
          <RDDialogTitle title={title} />
        ) : null
      }
      <IconButton
        aria-label="close"
        onClick={() => setOpen(false)}
        sx={{
          position: 'absolute',
          zIndex: 1000,
          right: "0.25rem",
          top: "0.25rem",
          color: colorStyles.dark.text.muted.default,
        }}
      >
        <CloseIcon />
      </IconButton>
      {children}
    </Dialog>
  );
}

export interface RDDialogTitleProps extends HeadingProps {
  children?: ReactNode;
}

const RDDialogTitle = ({ children, style, className }: RDDialogTitleProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <DialogTitle component={'div'} sx={{ m: 0, p: 0, mb: '1.25rem' }} className={className}>
      <Heading
        variant={isMobile ? 'h3' : 'h2'}
        order="h2"
        style={style}
      >
        {children}
      </Heading>
    </DialogTitle>

  )
}

export { RDDialog as Dialog, RDDialogTitle as DialogTitle };
