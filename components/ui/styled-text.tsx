import * as React from "react"
import { cn } from "@/lib/utils"

const variantVariableMap = {
  "display-1": "--text-display-1",
  "display-2": "--text-display-2",
  "display-3": "--text-display-3",
  "display-4": "--text-display-4",
  "display-5": "--text-display-5",
  "display-6": "--text-display-6",
  "heading-1": "--text-heading-1",
  "heading-2": "--text-heading-2",
  "heading-3": "--text-heading-3",
  "heading-4": "--text-heading-4",
  "heading-5": "--text-heading-5",
  "heading-6": "--text-heading-6",
  "body-1": "--text-body-1",
  "body-2": "--text-body-2",
  "body-3": "--text-body-3",
  "body-4": "--text-body-4",
  "body-5": "--text-body-5",
  "body-6": "--text-body-6",
} as const

type StyledTextVariant = keyof typeof variantVariableMap

interface StyledTextProps extends React.HTMLAttributes<HTMLElement> {
  variant?: StyledTextVariant
  as?: React.ElementType
  color?: string
}

export function StyledText({
  variant = "body-1",
  as: Component = "p",
  color = "text-foreground",
  className,
  style,
  ...props
}: StyledTextProps) {
  return (
    <Component
      className={cn(color, className)}
      style={{
        font: `var(--text-${variant})`,
        ...style,
      }}
      {...props}
    />
  )
}
