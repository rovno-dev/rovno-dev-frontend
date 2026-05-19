"use client";

import { Container } from "@/components/ui/container";
import React, { useState } from "react";


const tabs = ["Проекты", "Будни", "Речи", "События", "Награды", "Мысли вслух"];

const projects = [
  { title: "Vanguard: интернет-магазин электроники", image: "/images/vanguard.png", category: "Проекты" },
  { title: "Чужой | ALX-9 - ИИ выставка", image: "/images/alien.png", category: "Проекты" },
  { title: "Тепляков - иллюзионист | Айдентика", image: "/images/teplyakov.png", category: "Проекты" },
  { title: "Underwear store | Flirty Girl", image: "/images/flirtygirl.png", category: "Проекты" },
  { title: "Vanguard: интернет-магазин электроники", image: "/images/vanguard.png", category: "Проекты" },
  { title: "Vanguard: интернет-магазин электроники", image: "/images/vanguard.png", category: "Проекты" }
];

const IconSVG = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://w3.org">
    <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2" />
    <path d="M7 4V10M4 7H10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

function ExpertHeroSection() {
  const expertTags = [
    { label: "Со-основатель и Техдир", dot: false, icon: <IconSVG /> },
    { label: "Автор тех самых стихов", dot: false, icon: null },
    { label: "Создатель Unidoka UI", dot: false, icon: <IconSVG /> },
    { label: "Основатель Вершин", dot: false, icon: <IconSVG /> },
  ];

  return (
    <Container variant="full-width" className="pt-10">
      <div className="relative w-full max-w-[1200px] mx-auto h-[480px] rounded-[2.5rem] overflow-hidden bg-[#141414] border border-white/5 group">
        <div className="absolute inset-0">
          <img src="/images/niyaz_gimmadiev.png" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
        <div className="absolute inset-0 z-20 flex flex-col justify-end items-center p-10 md:p-14 text-center">
          <div className="flex items-center justify-center gap-3 mb-4 w-full">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Нияз Гимадиев</h1>
            <div className="w-7 h-7 bg-[#FF3B30] rounded-full flex items-center justify-center border border-white/10 shrink-0">
              <span className="text-[10px] font-bold text-white">RT</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-2.5 max-w-[950px]">
            {expertTags.map((tag, index) => (
              <div key={index} className="flex items-center gap-2 bg-white/5 backdrop-blur-xl px-4 py-2 rounded-full border border-white/10 text-[12px] font-medium">
                {tag.icon && <span className="text-white/60">{tag.icon}</span>}
                <span className="text-white/90">{tag.label}</span>
              </div>
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
    <>
      <div className="pt-[70px]">
        <ExpertHeroSection />
      </div>

      <Container variant="full-width" className="py-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex justify-center items-center gap-8 border-b border-white/5 mb-10 overflow-x-auto pb-4 no-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-[15px] font-medium transition-all whitespace-nowrap relative ${activeTab === tab ? "text-white" : "text-gray-500 hover:text-gray-300"
                  }`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute -bottom-[17px] left-0 right-0 h-[2px] bg-[#4A77FF]" />
                )}
              </button>
            ))}
          </div>

          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[12px]">
              {filteredProjects.map((project, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <div
                    className="relative overflow-hidden rounded-[2rem] bg-[#141414] border border-white/5"
                    style={{ width: '100%', aspectRatio: '594/395' }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-8">
                      <h3 className="text-xl font-semibold leading-snug max-w-[85%]">{project.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center text-gray-600">
              <p>В разделе «{activeTab}» пока нет опубликованных материалов.</p>
            </div>
          )}
        </div>
      </Container>
    </>
  );
}
