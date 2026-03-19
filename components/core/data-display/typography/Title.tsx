import { NotoSans } from "@/app/connectFonts";
import { TextProps } from "@/components/core/data-display/typography/Text";
import { colorStyles } from "@/utils/styles/colors";
import { ClassNames } from "@emotion/react";

const fontFamilies = {
  default: "Noto Sans",
};

const textStyles = {
  large: {
    fontSize: "1.5rem",
    fontWeight: "500",
    fontFamily: NotoSans.style.fontFamily,
  },
  default: {
    fontSize: "1.25rem",
    fontWeight: "500",
    fontFamily: NotoSans.style.fontFamily,
  },
  secondary: {
    fontSize: "1.12rem",
    fontWeight: "500",
    fontFamily: NotoSans.style.fontFamily,
  },
  small: {
    fontSize: "1rem",
    fontWeight: "500",
    fontFamily: NotoSans.style.fontFamily,
  },
  tiny: {
    fontSize: "0.88rem",
    fontWeight: "500",
    fontFamily: NotoSans.style.fontFamily,
  },
};

function Title({ variant = 'default', color = colorStyles['dark'].text.primary.default, children, className }: TextProps) {
  return (
    <p
      style={{
        ...textStyles[variant],
        color,
      }}
      {...{ className }}
    >
      {children}
    </p>
  );
}

export { Title }