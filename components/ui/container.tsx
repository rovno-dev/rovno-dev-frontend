import { cn } from "@/lib/utils"

export function Container({ variant = 'default', className, ...props }: React.ComponentProps<"div"> & { variant?: 'default' | 'full-width' }) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-0",
        variant === 'default' && "sm:max-w-[750px] md:max-w-[900px] lg:max-w-[1200px] xl:max-w-[1500px]",
        variant === 'full-width' && "lg:px-8 xl:px-12",
        className
      )}
      {...props}
    />
  )
}
