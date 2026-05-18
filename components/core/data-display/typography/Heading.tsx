import { Oswald } from "@/app/connectFonts";
import { colorStyles } from "@/utils/styles/colors";
import React, { forwardRef } from "react";
import { TextProps } from "./Text";
import { HeadingVariantsType } from "@/utils/types/typogtaphy";

export interface HeadingProps extends Omit<Omit<TextProps, 'variant'>, 'style'>, React.HTMLAttributes<HTMLHeadingElement> {
  variant?: HeadingVariantsType;
  order?: HeadingVariantsType;
}

const textStyles = {
  h1: {
    fontSize: "3rem",
    fontWeight: "600",
    fontFamily: Oswald.style.fontFamily,
  },
  h2: {
    fontSize: "2.25rem",
    fontWeight: "600",
    fontFamily: Oswald.style.fontFamily,
  },
  h3: {
    fontSize: "2rem",
    fontWeight: "600",
    fontFamily: Oswald.style.fontFamily,
  },
  h4: {
    fontSize: "1.5rem",
    fontWeight: "500",
    fontFamily: Oswald.style.fontFamily,
  },
  h5: {
    fontSize: "1.25rem",
    fontWeight: "500",
    fontFamily: Oswald.style.fontFamily,
  },
  h6: {
    fontSize: "1.12rem",
    fontWeight: "500",
    fontFamily: Oswald.style.fontFamily,
  },
};

const Heading = forwardRef<HTMLElement, HeadingProps>(({
  variant = 'h1',
  order = 'h1',
  color = colorStyles['dark'].text.primary.default,
  children,
  className,
  style, // Capture incoming style prop from MUI/DialogTitle
  ...rest
}, ref) => {
  return React.createElement(
    order,
    {
      ref,
      ...rest,
      className: className,
      style: {
        ...textStyles[variant],
        color,
        ...style,
      },
    },
    children,
  );
});

export { Heading };
