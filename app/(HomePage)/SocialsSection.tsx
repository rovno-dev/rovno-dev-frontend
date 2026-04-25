import { Container } from "@/components/ui/container";

export default function SocialsSection() {
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
          <h2>
            Скоро здесь добавится <br /> много интересного,
          </h2>
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