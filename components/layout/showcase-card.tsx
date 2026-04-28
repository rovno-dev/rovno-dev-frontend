import { ReactNode } from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export const servicesIconsStyles = 'size-[85px]! [&_*]:fill-(--on-bg-low)';

export interface ShowcaseCardProps {
  id?: string,
  count?: string,
  icon?: ReactNode,
  title: string,
}

export function ShowcaseCard({ id, count, icon, title }: ShowcaseCardProps) {
  return (
    <Button
      id={id}
      variant={'tonal-card'}
      className="relative flex flex-col w-full! h-full! rounded-4xl border-(--primary-glass)! py-6"
    >
      {count && (
        <Badge variant={'glass-static'} className="absolute top-3 right-3">
          {count}
        </Badge>
      )}

      {icon}

      <p className="text-(--on-bg-high) text-heading-5 sm:text-heading-3 whitespace-normal">
        {title}
      </p>
    </Button>
  )
}