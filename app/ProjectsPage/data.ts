export interface Project {
  id: number;
  title: string;
  image: string;
  category: string;
  gridSize: 'half' | 'small' | 'full'; 
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Сайт the Paddel Collective",
    image: "/images/paddel.png",
    category: "Проекты",
    gridSize: "half", 
  },
  {
    id: 2,
    title: "Vanguard: интернет-магазин электроники",
    image: "/images/vanguard.png",
    category: "Проекты",
    gridSize: "half", 
  },
  {
    id: 3,
    title: "Underwear store | Flirty Girl",
    image: "/images/flirtygirl.png",
    category: "Проекты",
    gridSize: "small",
  },
  {
    id: 4,
    title: "Тепляков — иллюзионист | Айдентика",
    image: "/images/teplyakov.png",
    category: "Проекты",
    gridSize: "small",
  },
  {
    id: 5,
    title: "Чужой | ALX-9 - ИИ выставка",
    image: "/images/alien.png",
    category: "Проекты",
    gridSize: "small",
  },
  {
    id: 6,
    title: "Чужой | ALX-9 - ИИ выставка",
    image: "/images/alien.png", 
    category: "Проекты",
    gridSize: "full", 
  },
];
