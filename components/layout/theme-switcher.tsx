"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/providers/theme-provider"
import { DesignServicesIcon, TelegramLogotypeMonoIcon, VKLogotypeMonoIcon } from "../icons"

export function ThemeSwitcher() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="tonal-card" size="icon-small">
          <TelegramLogotypeMonoIcon className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <VKLogotypeMonoIcon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Поменять тему</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <TelegramLogotypeMonoIcon className="mr-2 h-4 w-4" /> Светлая
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <VKLogotypeMonoIcon className="mr-2 h-4 w-4" /> Тёмная
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <DesignServicesIcon className="mr-2 h-4 w-4" /> Системная
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
