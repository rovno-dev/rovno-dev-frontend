"use client"

import { useCurrentBreakpoint } from "@/utils/hooks/useCurrentBreakpoint";
import { Breakpoint, CSSProperties } from "@mui/material";
import React from "react";

type ContainerVariants = 'full-width' | 'default'


export interface ContainerProps extends React.HTMLProps<HTMLDivElement> {
  variant?: ContainerVariants
}

type ContainerVariantStylesType = Record<
  ContainerVariants,
  Partial<Record<Breakpoint, CSSProperties>>
>;

export const ContainerVariantStyles: ContainerVariantStylesType = {
  'full-width': {
    xs: {
      paddingInline: '16px',
    },
    sm: {
      paddingInline: '1rem',
    },
    md: {
      paddingInline: '1rem',
    },
    lg: {
      paddingInline: '2rem',
    },
    xl: {
      paddingInline: '3rem',
    }
  },
  'default': {
    xs: {
      paddingInline: '16px',
    },
    sm: {
      maxWidth: '750px',
    },
    md: {
      maxWidth: '900px',
    },
    lg: {
      maxWidth: "1200px"
    },
    xl: {
      maxWidth: '1500px',
    }
  },
}

function Container({ variant = 'default', style, children, ...other }: ContainerProps) {
  const currentSize = useCurrentBreakpoint();

  return (
    <div
      {...other}
      style={{
        ...style,
        margin: '0 auto',
        width: '100%',
        ...ContainerVariantStyles[variant][currentSize]
      }}
    >
      {children}
    </div >
  );
}

export { Container }