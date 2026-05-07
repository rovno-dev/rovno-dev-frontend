"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ShowcaseCard } from "@/components/layout/showcase-card";
import {
  DiamondIcon,
  PublicIcon
} from "@/components/icons";

const tabsData = [
  { id: "Проекты", label: "Проекты" },
  { id: "Будни", label: "Будни" },
  { id: "Речи", label: "Речи" },
  { id: "События", label: "События" },
  { id: "Награды", label: "Награды" },
  { id: "Мысли вслух", label: "Мысли вслух" }
];

const projects = [
  { title: "Vanguard: интернет-магазин электроники", image: "/expert-bg.svg", category: "Проекты" },
  { title: "Чужой | ALX-9 - ИИ выставка", image: "/expert-bg.svg", category: "Проекты" },
  { title: "Тепляков - иллюзионист | Айдентика", image: "/expert-bg.svg", category: "Проекты" },
  { title: "Underwear store | Flirty Girl", image: "/expert-bg.svg", category: "Проекты" },
  { title: "Vanguard: интернет-магазин электроники", image: "/expert-bg.svg", category: "Проекты" },
  { title: "Vanguard: интернет-магазин электроники", image: "/expert-bg.svg", category: "Проекты" }
];

function ExpertHeroSection() {
  const expertTags = [
    { label: "Со-основатель и Техдир", icon: <DiamondIcon className="size-3" /> },
    { label: "Автор тех самых стихов", icon: <DiamondIcon className="size-3" /> },
    { label: "Создатель Unideka UI", icon: <DiamondIcon className="size-3" /> },
    { label: "Основатель Вершин", icon: <DiamondIcon className="size-3" /> },
  ];

  return (
    <Container variant="full-width" className="pt-10">
      <div className="relative w-full max-w-[1200px] mx-auto h-[480px] rounded-8xl overflow-hidden bg-card border border-outline group">
        <div className="absolute inset-0">
          <img src="/expert-bg.svg" className="w-full h-full object-cover opacity-50" alt="" />
        </div>
        {/* Градиент в стиле проекта */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10" />

        <div className="absolute inset-0 z-20 flex flex-col justify-end items-center p-10 md:p-14 text-center">
          <div className="flex items-center justify-center gap-3 mb-4 w-full">
            <h1 className="text-display-3 md:text-display-2 text-(--on-bg-high)">Нияз Гимадиев</h1>
            {/* Статусный бейдж */}
            <div className="size-7 bg-destructive rounded-full flex items-center justify-center border border-white/10 shrink-0">
              <span className="text-[10px] font-bold text-white uppercase">RT</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2 max-w-[950px]">
            {expertTags.map((tag, index) => (
              <Badge
                key={index}
                variant="glass-static"
                size="chip-medium"
                className="backdrop-blur-glass"
              >
                {tag.icon}
                {tag.label}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default function ExpertPage() {
  const [activeTab, setActiveTab] = useState("Проекты");

  const filteredProjects = activeTab === "Проекты" ? projects : [];

  return (
    <div className="pb-20">
      <ExpertHeroSection />

      <Container variant="full-width" className="py-12">
        <div className="max-w-[1200px] mx-auto">

          {/* Используем системный компонент Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-10">
            <TabsList variant="line" className="w-full justify-center overflow-x-auto no-scrollbar pb-4 border-b border-outline rounded-none">
              {tabsData.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="text-body-3 md:text-body-2"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {filteredProjects.map((project, idx) => (
                <div key={idx} className="group cursor-pointer relative overflow-hidden rounded-4xl border border-outline aspect-[594/395]">
                  {project.image ? (
                    <Image
                      fill
                      src={project.image}
                      alt={project.title}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-muted flex items-center justify-center">
                      <PublicIcon className="size-10 opacity-20" />
                    </div>
                  )}

                  {/* Оверлей заголовка */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                    <h3 className="text-heading-3 text-white leading-snug max-w-[85%] transition-transform group-hover:-translate-y-1">
                      {project.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center text-(--on-bg-low)">
              <p className="text-body-2">В разделе «{activeTab}» пока нет опубликованных материалов.</p>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}