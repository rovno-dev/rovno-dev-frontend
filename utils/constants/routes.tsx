import { ReactNode } from "react";

export interface RouteLinkProps {
  id?: string,
  href: string,
  title?: string | ReactNode,
}

export const ROUTES = {
  home: {
    id: 'home',
    href: "/",
    title: 'Главная',
  },
  projects: {
    id: 'projects',
    href: "/projects",
    title: 'Проекты'
  },
  about: {
    id: 'about',
    href: "/about",
    title: 'Агентство',
  },
  journal: {
    id: 'journal',
    href: "/rovnya",
    title: "Журнал Ровня",
  },
  job: {
    id: 'job',
    href: "/job",
    title: "Вакансии",
  },
}
