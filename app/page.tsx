import RovnoLogotype from "@/components/core/data-display/RovnoLogotype";
import { Heading } from "@/components/core/data-display/typography/Heading";
import { Container } from "@/components/core/layout/Container";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white" style={{
      position: 'relative',
      zIndex: 0,
    }}>

      <div style={{ height: '70px' }} />
      <ServicesSection />
      <SocialsSection />
      <Footer />
    </main>
  );
}

function ServicesSection() {
  const tags = [
    { label: "UI//UX", count: 7 },
    { label: "Motion-дизайн", count: 2 },
    { label: "3D", count: 2 },
    { label: "Видео", count: 1 },
    { label: "Логотипы и айдентика", count: 3 },
  ];

  const services = [
    {
      title: "UX/UI для сайтов и приложений",
      id: 7,
      icon: (
        <svg width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://w3.org">
          <path d="M21.6042 68.0443C17.2951 66.1849 13.5469 63.6615 10.3594 60.474C7.17188 57.2865 4.64844 53.5382 2.78906 49.2292C0.929688 44.9201 0 40.316 0 35.4167C0 30.5174 0.929688 25.9132 2.78906 21.6042C4.64844 17.2951 7.17188 13.5469 10.3594 10.3594C13.5469 7.17188 17.2951 4.64844 21.6042 2.78906C25.9132 0.929688 30.5174 0 35.4167 0C40.316 0 44.9201 0.929688 49.2292 2.78906C53.5382 4.64844 57.2865 7.17188 60.474 10.3594C63.6615 13.5469 66.1849 17.2951 68.0443 21.6042C69.9036 25.9132 70.8333 30.5174 70.8333 35.4167C70.8333 40.316 69.9036 44.9201 68.0443 49.2292C66.1849 53.5382 63.6615 57.2865 60.474 60.474C57.2865 63.6615 53.5382 66.1849 49.2292 68.0443C44.9201 69.9036 40.316 70.8333 35.4167 70.8333C30.5174 70.8333 25.9132 69.9036 21.6042 68.0443ZM31.875 63.5729V56.6667C29.9271 56.6667 28.2596 55.9731 26.8724 54.5859C25.4852 53.1988 24.7917 51.5312 24.7917 49.5833V46.0417L7.79167 29.0417C7.61458 30.1042 7.45226 31.1667 7.30469 32.2292C7.15712 33.2917 7.08333 34.3542 7.08333 35.4167C7.08333 42.559 9.42969 48.816 14.1224 54.1875C18.8151 59.559 24.7326 62.6875 31.875 63.5729ZM56.3125 54.5417C58.7326 51.8854 60.5773 48.9193 61.8464 45.6432C63.1155 42.3672 63.75 38.9583 63.75 35.4167C63.75 29.6319 62.1415 24.349 58.9245 19.5677C55.7075 14.7865 51.4132 11.3333 46.0417 9.20833V10.625C46.0417 12.5729 45.3481 14.2405 43.9609 15.6276C42.5738 17.0148 40.9062 17.7083 38.9583 17.7083H31.875V24.7917C31.875 25.7951 31.5356 26.6363 30.8568 27.3151C30.178 27.9939 29.3368 28.3333 28.3333 28.3333H21.25V35.4167H42.5C43.5035 35.4167 44.3446 35.7561 45.0234 36.4349C45.7023 37.1137 46.0417 37.9549 46.0417 38.9583V49.5833H49.5833C51.1181 49.5833 52.5052 50.0408 53.7448 50.9557C54.9844 51.8707 55.8403 53.066 56.3125 54.5417Z" fill="currentColor" />
        </svg>
      )
    },
    {
      title: "Motion-дизайн и 3D",
      id: 2,
      icon: (
        <svg width="71" height="64" viewBox="0 0 71 64" fill="none" xmlns="http://w3.org">
          <path d="M35.4167 63.75L0 21.25L10.625 0H60.2083L70.8333 21.25L35.4167 63.75ZM27.0052 17.7083H43.8281L38.5156 7.08333H32.3177L27.0052 17.7083ZM31.875 48.4323V24.7917H12.2188L31.875 48.4323ZM38.9583 48.4323L58.6146 24.7917H38.9583V48.4323ZM51.7083 17.7083H61.0938L55.7812 7.08333H46.3958L51.7083 17.7083ZM9.73958 17.7083H19.125L24.4375 7.08333H15.0521L9.73958 17.7083Z" fill="currentColor" />
        </svg>
      )
    },
    {
      title: "Логотипы и айдентика",
      id: 3,
      icon: (
        <svg width="78" height="54" viewBox="0 0 78 54" fill="none" xmlns="http://w3.org">
          <path d="M40.6406 41.8802L70.3021 12.2188L65.6979 7.61458L36.0365 37.276L40.6406 41.8802ZM17.5312 49.5833C11.6285 49.2882 7.2309 48.0486 4.33854 45.8646C1.44618 43.6806 0 40.5226 0 36.3906C0 32.5538 1.57899 29.4401 4.73698 27.0495C7.89497 24.6589 12.2778 23.2274 17.8854 22.7552C20.1875 22.5781 21.9141 22.2092 23.0651 21.6484C24.2161 21.0877 24.7917 20.3056 24.7917 19.3021C24.7917 17.7674 23.921 16.6163 22.1797 15.849C20.4384 15.0816 17.5608 14.5208 13.5469 14.1667L14.1667 7.08333C20.2465 7.55556 24.7179 8.78038 27.5807 10.7578C30.4436 12.7352 31.875 15.5833 31.875 19.3021C31.875 22.4306 30.7387 24.8802 28.4661 26.651C26.1936 28.4219 22.8438 29.4844 18.4167 29.8385C14.6389 30.1337 11.8056 30.8273 9.91667 31.9193C8.02778 33.0113 7.08333 34.5017 7.08333 36.3906C7.08333 38.4566 7.90972 39.9471 9.5625 40.862C11.2153 41.7769 13.9896 42.3229 17.8854 42.5L17.5312 49.5833ZM42.3229 50.2031L27.7135 35.5938L61.5365 1.77083C62.717 0.590278 64.1189 0 65.7422 0C67.3654 0 68.7674 0.590278 69.9479 1.77083L76.1458 7.96875C77.3264 9.14931 77.9167 10.5512 77.9167 12.1745C77.9167 13.7977 77.3264 15.1997 76.1458 16.3802L42.3229 50.2031ZM28.2448 53.125C27.2413 53.3611 26.3559 53.0955 25.5885 52.3281C24.8212 51.5608 24.5556 50.6754 24.7917 49.6719L27.7135 35.5938L42.3229 50.2031L28.2448 53.125Z" fill="currentColor" />
        </svg>
      )
    },
  ];

  return (
    <Container variant="full-width" className="py-20 md:py-32" style={{ position: 'relative', zIndex: 1 }}>
      <div
        style={{ maxWidth: '1200px' }}
        className="mx-auto flex flex-col lg:flex-row justify-between items-start gap-10"
      >

        <div className="w-full lg:max-w-[420px] space-y-6 md:space-y-10">
          <Heading variant="h1" className="text-[2.8rem] leading-[1.05] font-bold tracking-tight">
            Дизайн любого уровня <br /> сложности
          </Heading>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <div
                key={tag.label}
                className="bg-[#141414] border border-white/5 px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 cursor-default group/tag hover:border-[#4A77FF] hover:bg-[#4A77FF]/5"
              >
                <span className="text-[13px] text-gray-400 group-hover/tag:text-white transition-colors">{tag.label}</span>
                <span className="text-[10px] text-gray-600 font-mono group-hover/tag:text-[#4A77FF] transition-colors">{tag.count}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ width: '100%', maxWidth: '740px' }}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-[10px] md:gap-[14px]">
            {services.map((item) => (
              <div
                key={item.id}
                className="relative w-full h-[150px] md:h-[322px] bg-[#141414] rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 flex flex-col items-center justify-center text-center 
                   border border-white/5 transition-all duration-300 group cursor-pointer
                   hover:bg-[#161616] hover:border-[#4A77FF] hover:shadow-[0_0_25px_rgba(74,119,255,0.15)]"
              >
                <div className="absolute top-4 right-4 md:top-6 md:right-6 text-[10px] font-mono w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300
                        text-[#4A77FF] bg-[#4A77FF]/10 
                        group-hover:bg-[#4A77FF] group-hover:text-white">
                  {item.id}
                </div>

                <div className="mb-3 md:mb-8 transition-all duration-500 text-[#555] group-hover:text-[#4A77FF] scale-75 md:scale-100">
                  {item.icon}
                </div>

                <p className="text-[14px] md:text-[15px] font-medium leading-snug px-2 transition-colors duration-300
                      text-gray-400 group-hover:text-white">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </Container>
  );
}

function SocialsSection() {
  const socials = [
    {
      name: "Канал в Телеге", icon: (
        <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M34 0C15.232 0 0 15.232 0 34C0 52.768 15.232 68 34 68C52.768 68 68 52.768 68 34C68 15.232 52.768 0 34 0ZM49.776 23.12C49.266 28.492 47.056 41.548 45.934 47.566C45.458 50.116 44.506 50.966 43.622 51.068C41.65 51.238 40.154 49.776 38.25 48.518C35.258 46.546 33.558 45.322 30.668 43.418C27.302 41.208 29.478 39.984 31.416 38.012C31.926 37.502 40.63 29.58 40.8 28.866C40.8236 28.7579 40.8205 28.6456 40.7908 28.5389C40.7612 28.4323 40.706 28.3345 40.63 28.254C40.426 28.084 40.154 28.152 39.916 28.186C39.61 28.254 34.85 31.416 25.568 37.672C24.208 38.59 22.984 39.066 21.896 39.032C20.672 38.998 18.36 38.352 16.626 37.774C14.484 37.094 12.818 36.72 12.954 35.53C13.022 34.918 13.872 34.306 15.47 33.66C25.398 29.342 31.994 26.486 35.292 25.126C44.744 21.182 46.682 20.502 47.974 20.502C48.246 20.502 48.892 20.57 49.3 20.91C49.64 21.182 49.742 21.556 49.776 21.828C49.742 22.032 49.81 22.644 49.776 23.12Z" fill="currentColor" />
        </svg>

      )
    },
    {
      name: "Паблик в ВК", icon: (
        <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M4.78002 4.78002C0 9.56005 0 17.2534 0 32.64V35.36C0 50.7466 0 58.4399 4.78002 63.22C9.56005 68 17.2534 68 32.64 68H35.36C50.7466 68 58.4399 68 63.22 63.22C68 58.4399 68 50.7466 68 35.36V32.64C68 17.2534 68 9.56005 63.22 4.78002C58.4399 0 50.7466 0 35.36 0H32.64C17.2534 0 9.56005 0 4.78002 4.78002ZM11.4751 20.6835C11.8434 38.3635 20.6834 48.9884 36.1817 48.9884H37.0602V38.8734C42.7552 39.4401 47.0616 43.6051 48.7899 48.9884H56.8368C54.6268 40.9418 48.8181 36.4934 45.1915 34.7934C48.8181 32.6968 53.9182 27.5968 55.1365 20.6835H47.8263C46.2397 26.2935 41.5368 31.3934 37.0602 31.8751V20.6835H29.7499V40.2901C25.2166 39.1568 19.4934 33.6601 19.2384 20.6835H11.4751Z" fill="currentColor" />
        </svg>

      )
    },
    {
      name: "Дипрофайл", icon: (
        <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M34 0C52.7776 4.37e-05 68 15.2224 68 34C68 52.7776 52.7776 68 34 68C15.2224 68 4.37029e-05 52.7776 0 34C0 15.2224 15.2224 0 34 0ZM43.7063 14.7054C38.3447 9.34374 29.6512 9.3417 24.2896 14.7033L14.7033 24.2916C9.34172 29.6533 9.34172 38.3467 14.7033 43.7084L24.2896 53.2946C29.6512 58.6563 38.3447 58.6563 43.7063 53.2946L53.2925 43.7084C58.6541 38.3467 58.6541 29.6533 53.2925 24.2916L43.7063 14.7054ZM39.5849 17.0942C45.8345 17.0942 50.9012 22.1614 50.9017 28.411V39.587C50.9017 45.837 45.8349 50.9037 39.5849 50.9037H28.411C22.1612 50.9037 17.0945 45.8367 17.0942 39.587V28.411C17.0942 22.1621 22.161 17.0942 28.411 17.0942H39.5849Z" fill="currentColor" />
        </svg>

      )
    },
    {
      name: "Пинтерест", icon: (
        <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M33.986 0C15.1888 0 0 15.2168 0 33.986C0 48.3916 8.95104 60.6993 21.5944 65.6503C21.2867 62.965 21.035 58.8252 21.7063 55.8881C22.3217 53.2307 25.6783 38.993 25.6783 38.993C25.6783 38.993 24.6714 36.9511 24.6714 33.958C24.6714 29.2308 27.4126 25.7063 30.8251 25.7063C33.7343 25.7063 35.1329 27.8881 35.1329 30.4895C35.1329 33.3986 33.2867 37.7622 32.3077 41.8182C31.4965 45.2028 34.014 47.972 37.3427 47.972C43.3846 47.972 48.028 41.5944 48.028 32.4196C48.028 24.2797 42.1818 18.6014 33.8182 18.6014C24.1399 18.6014 18.4615 25.8461 18.4615 33.3426C18.4615 36.2518 19.5804 39.3846 20.979 41.0909C21.2588 41.4266 21.2867 41.7343 21.2028 42.0699C20.9511 43.1329 20.3636 45.4545 20.2518 45.9301C20.1119 46.5455 19.7482 46.6853 19.1049 46.3776C14.9091 44.3636 12.2797 38.1538 12.2797 33.1748C12.2797 22.4616 20.0559 12.6154 34.7413 12.6154C46.5175 12.6154 55.6923 21.007 55.6923 32.2517C55.6923 43.972 48.3077 53.3986 38.0699 53.3986C34.6293 53.3986 31.3846 51.6084 30.2937 49.4825C30.2937 49.4825 28.5874 55.972 28.1678 57.5664C27.4126 60.5315 25.3426 64.2238 23.944 66.4895C27.1329 67.4685 30.4895 68 34.014 68C52.7832 68 68 52.7832 68 34.014C67.9721 15.2168 52.7552 0 33.986 0Z" fill="currentColor" />
        </svg>

      )
    },
  ];

  return (
    <Container variant="full-width" className="py-10 md:py-20">
      <div
        style={{ maxWidth: '1200px' }}
        className="mx-auto flex flex-col-reverse lg:flex-row justify-between items-start gap-10"
      >

        <div className="w-full lg:max-w-[810px] flex justify-center lg:justify-start">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[10px] md:gap-3 w-full">
            {socials.map((social) => (
              <div
                key={social.name}
                className="w-[175px] h-[175px] md:w-full md:h-[290px] bg-[#141414] rounded-[1.5rem] md:rounded-[2rem] p-4 md:p-6 flex flex-col items-center justify-center text-center 
                 border border-white/5 transition-all duration-300 group cursor-pointer
                 hover:bg-[#161616] hover:border-[#4A77FF] hover:shadow-[0_0_25px_rgba(74,119,255,0.15)]"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 mb-4 md:mb-6 rounded-full bg-white/5 flex items-center justify-center text-xl md:text-2xl 
                      text-gray-500 transition-all duration-300
                      group-hover:bg-[#4A77FF]/10 group-hover:text-[#4A77FF] group-hover:scale-110">
                  <div className="scale-75 md:scale-100 flex items-center justify-center">
                    {social.icon}
                  </div>
                </div>
                <span className="text-[11px] md:text-[13px] text-gray-400 transition-colors duration-300
                       group-hover:text-white leading-tight">
                  {social.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:max-w-[350px] space-y-4">
          <Heading variant="h2" className="text-[1.8rem] md:text-3xl font-bold leading-[1.1] tracking-tight text-white">
            Скоро здесь добавится <br /> много интересного,
          </Heading>
          <div className="text-gray-500 text-[14px] md:text-[15px] leading-relaxed flex items-start gap-2">
            <span className="hidden lg:inline">👈</span>
            <span className="inline lg:hidden">👇</span>
            <span>
              а наши работы можно <br />
              посмотреть по ссылкам <br />
              <span className="hidden lg:inline">слева</span>
              <span className="inline lg:hidden">ниже</span>
            </span>
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