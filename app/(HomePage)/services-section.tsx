import { DiamondIcon, PublicIcon, StylusNoteIcon } from "@/components/icons";
import { servicesIconsStyles, ShowcaseCard } from "@/components/layout/showcase-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function ServicesSection() {
  const tags = [
    { label: "UI/UX", count: 7 },
    { label: "Motion-дизайн", count: 2 },
    { label: "3D", count: 2 },
    { label: "Видео", count: 1 },
    { label: "Логотипы и айдентика", count: 3 },
  ];

  const services = [
    {
      count: '7',
      title: "UX/UI для сайтов и приложений",
      id: '7',
      icon: <PublicIcon className={servicesIconsStyles} />
    },
    {
      count: '5',
      title: `Motion-дизайн и 3D`,
      id: '2',
      icon: <DiamondIcon className={servicesIconsStyles} />
    },
    {
      count: '3',
      title: "Логотипы и айдентика",
      id: '3',
      icon: <StylusNoteIcon className={servicesIconsStyles} />
    },
  ];

  return (
    <Container className="items-center grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-[40px] py-16 sm:h-[450px]">
      <div>
        <h2 className="text-display-2">
          Дизайн любого уровня <br /> сложности
        </h2>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, key) => (
            <Button
              size={'chip-medium'}
              variant={'tonal-card'}
              shape={'round'}
              key={key}
            >
              {tag.label}
              <Badge size={'chip-small'} variant={'text-static'} className="text-primary">{tag.count}</Badge>
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 sm:w-full sm:h-full">
        {services.map((item, key) => {
          return (
            <ShowcaseCard id={item.id} key={key} count={item.count} icon={item.icon} title={item.title} />
          )
        })}
      </div>
    </Container>
  );
}