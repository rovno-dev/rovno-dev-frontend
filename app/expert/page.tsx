"use client";

import React, { useState } from "react";
import { Container } from "@/components/core/layout/Container";
import Header from "@/components/Header";
import RovnoLogotype from "@/components/core/data-display/RovnoLogotype";


const tabs = ["Проекты", "Будни", "Речи", "События", "Награды", "Мысли вслух"];

const projects = [
  { title: "Vanguard: интернет-магазин электроники", image: "/", category: "Проекты" },
  { title: "Чужой | ALX-9 - ИИ выставка", image: "/", category: "Проекты" },
  { title: "Тепляков - иллюзионист | Айдентика", image: "/", category: "Проекты" },
  { title: "Underwear store | Flirty Girl", image: "", category: "Проекты" },
  { title: "Vanguard: интернет-магазин электроники", image: "/", category: "Проекты" },
  { title: "Vanguard: интернет-магазин электроники", image: "/", category: "Проекты" }
];

const IconSVG = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://w3.org">
    <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M7 4V10M4 7H10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
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
           <img src="/expert-bg.svg" className="w-full h-full object-cover" alt="" />
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

function Footer() {
  const footerSections = [
    {
      title: <RovnoLogotype className="h-[1.2rem] w-auto" />,
      links: ["Кейсы", "Агентство", "Журнал Ровня", "Вакансии", "Вершины"]
    },
    {
      title: "Журнал Ровня",
      links: ["Статьи", "Стать редактором", "Предложить статью"]
    },
    {
      title: "Студентам",
      links: ["Пройти стажировку", "Повышение квалификации"]
    }
  ];

  const socialIcons = [
    { id: 'tg', icon: (<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://w3.org"><path d="M16.8 0C7.5264 0 0 7.5264 0 16.8C0 26.0736 7.5264 33.6 16.8 33.6C26.0736 33.6 33.6 26.0736 33.6 16.8C33.6 7.5264 26.0736 0 16.8 0ZM24.5952 11.424C24.3432 14.0784 23.2512 20.5296 22.6968 23.5032C22.4616 24.7632 21.9912 25.1832 21.5544 25.2336C20.58 25.3176 19.8408 24.5952 18.9 23.9736C17.4216 22.9992 16.5816 22.3944 15.1536 21.4536C13.4904 20.3616 14.5656 19.7568 15.5232 18.7824C15.7752 18.5304 20.076 14.616 20.16 14.2632C20.1717 14.2098 20.1701 14.1543 20.1555 14.1016C20.1408 14.0489 20.1136 14.0006 20.076 13.9608C19.9752 13.8768 19.8408 13.9104 19.7232 13.9272C19.572 13.9608 17.22 15.5232 12.6336 18.6144C11.9616 19.068 11.3568 19.3032 10.8192 19.2864C10.2144 19.2696 9.072 18.9504 8.2152 18.6648C7.1568 18.3288 6.3336 18.144 6.4008 17.556C6.4344 17.2536 6.8544 16.9512 7.644 16.632C12.5496 14.4984 15.8088 13.0872 17.4384 12.4152C22.1088 10.4664 23.0664 10.1304 23.7048 10.1304C23.8392 10.1304 24.1584 10.164 24.36 10.332C24.528 10.4664 24.5784 10.6512 24.5952 10.7856C24.5784 10.8864 24.612 11.1888 24.5952 11.424Z" fill="white" /></svg>) },
    { id: 'vk', icon: (<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://w3.org"><path fillRule="evenodd" clipRule="evenodd" d="M2.36189 2.36189C0 4.72379 0 8.52519 0 16.128V17.472C0 25.0748 0 28.8762 2.36189 31.2381C4.72379 33.6 8.52519 33.6 16.128 33.6H17.472C25.0748 33.6 28.8762 33.6 31.2381 31.2381C33.6 28.8762 33.6 25.0748 33.6 17.472V16.128C33.6 8.52519 33.6 4.72379 31.2381 2.36189C28.8762 0 25.0748 0 17.472 0H16.128C8.52519 0 4.72379 0 2.36189 2.36189ZM5.67007 10.2201C5.85204 18.9561 10.22 24.206 17.878 24.206H18.3121V19.208C21.1261 19.488 23.254 21.5461 24.1079 24.206H28.0841C26.9921 20.2301 24.1219 18.032 22.3299 17.192C24.1219 16.1561 26.6419 13.6361 27.2439 10.2201H23.6318C22.8478 12.9921 20.5241 15.512 18.3121 15.75V10.2201H14.7V19.908C12.46 19.3481 9.63204 16.6321 9.50604 10.2201H5.67007Z" fill="white" /></svg>) },
    { id: 'dp', icon: (<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://w3.org"><path d="M16.8 0C26.0783 2.15929e-05 33.6 7.52165 33.6 16.8C33.6 26.0783 26.0783 33.6 16.8 33.6C7.52165 33.6 2.15944e-05 26.0783 0 16.8C0 7.52163 7.52163 0 16.8 0ZM21.5961 7.26619C18.9468 4.61691 14.6512 4.6159 12.0019 7.26517L7.26517 12.0029C4.61591 14.6522 4.61591 18.9478 7.26517 21.5971L12.0019 26.3338C14.6512 28.9831 18.9468 28.9831 21.5961 26.3338L26.3328 21.5971C28.982 18.9478 28.982 14.6522 26.3328 12.0029L21.5961 7.26619ZM19.5596 8.44654C22.6477 8.44654 25.1512 10.9503 25.1514 14.0384V19.5606C25.1514 22.6489 22.6478 25.1524 19.5596 25.1524H14.0384C10.9502 25.1524 8.4467 22.6487 8.44654 19.5606V14.0384C8.44654 10.9507 10.9501 8.44654 14.0384 8.44654H19.5596Z" fill="white" /></svg>) },
    { id: 'pt', icon: (<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://w3.org"><path d="M16.7931 0C7.50506 0 0 7.51887 0 16.7931C0 23.9111 4.42287 29.9926 10.6702 32.439C10.5181 31.1121 10.3938 29.0666 10.7255 27.6153C11.0295 26.3022 12.6881 19.2671 12.6881 19.2671C12.6881 19.2671 12.1905 18.2582 12.1905 16.7793C12.1905 14.4434 13.545 12.7019 15.2312 12.7019C16.6687 12.7019 17.3598 13.78 17.3598 15.0654C17.3598 16.5028 16.4475 18.659 15.9638 20.6631C15.563 22.3355 16.8069 23.7038 18.4517 23.7038C21.4371 23.7038 23.7315 20.5525 23.7315 16.0191C23.7315 11.997 20.8428 9.19128 16.7102 9.19128C11.9279 9.19128 9.12216 12.771 9.12216 16.4752C9.12216 17.9126 9.67502 19.4606 10.3661 20.3037C10.5043 20.4696 10.5181 20.6216 10.4767 20.7875C10.3523 21.3127 10.062 22.4599 10.0068 22.6948C9.93764 22.9989 9.75794 23.068 9.44005 22.916C7.36683 21.9208 6.06762 18.8525 6.06762 16.3923C6.06762 11.0987 9.90998 6.23347 17.1663 6.23347C22.9851 6.23347 27.5186 10.3799 27.5186 15.9361C27.5186 21.7273 23.8697 26.3852 18.811 26.3852C17.111 26.3852 15.5077 25.5006 14.9687 24.4502C14.9687 24.4502 14.1255 27.6568 13.9182 28.4446C13.545 29.9097 12.5222 31.7341 11.8312 32.8536C13.4068 33.3374 15.0654 33.6 16.8069 33.6C26.0811 33.6 33.6 26.0811 33.6 16.8069C33.5862 7.51887 26.0673 0 16.7931 0Z" fill="white" /></svg>) }
  ];

  return (
    <footer className="bg-[#0A0A0A] py-10 md:py-20 border-t border-white/5 pb-32 md:pb-20">
      <Container variant="full-width">
        <div style={{ maxWidth: '1200px' }} className="mx-auto flex flex-col md:grid md:grid-cols-4 gap-10">

          <div className="flex md:hidden flex-col gap-6">
            <RovnoLogotype className="h-[1.2rem] w-auto self-start" />
            <div className="space-y-4">
              <h3 className="text-white font-medium text-[15px]">Мы в соц. сетях</h3>
              <div className="flex gap-3">
                {socialIcons.map((item) => (
                  <div key={item.id} className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center scale-75 origin-left">
                    {item.icon}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {footerSections.map((section, index) => (
            <div key={index} className="space-y-6">
              <div className={index === 0 ? "hidden md:block" : "block"}>
                {typeof section.title === 'string' ? (
                  <h3 className="text-white font-medium text-[15px]">{section.title}</h3>
                ) : (
                  section.title
                )}
              </div>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[#555] hover:text-white text-[13px] md:text-[14px] transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="hidden md:flex flex-col space-y-6 text-right">
            <h3 className="text-white font-medium text-[15px]">Мы в соц. сетях</h3>
            <div className="flex gap-3 justify-end">
              {socialIcons.map((item) => (
                <div key={item.id} className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#4A77FF] transition-all cursor-pointer overflow-hidden">
                  <div className="scale-[0.6]">{item.icon}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </footer>
  );
}

export default function ExpertPage() {
  const [activeTab, setActiveTab] = useState("Проекты");

  const filteredProjects = activeTab === "Проекты" ? projects : [];

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <Header />
      
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
                  className={`text-[15px] font-medium transition-all whitespace-nowrap relative ${
                    activeTab === tab ? "text-white" : "text-gray-500 hover:text-gray-300"
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

      <Footer />
    </main>
  );
}
