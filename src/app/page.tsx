import { BgEffects } from "@/components";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { title } from "process";

const gifts = [
   {
      id: 1,
      title: "Виджеты",
      text: "30 готовых решений",
      smTitle: "30 виджетов",
   },
   { id: 2, title: "Dashboard", text: "с показателями вашего бизнеса" },
   { id: 3, title: "Skype Аудит", text: "отдела продаж и CRM системы" },
   { id: 4, title: "35 дней", text: "использования", smTitle: "Месяц аmoCRM" },
];

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
   title: "WELBEX  | HOME",
};
export default function Home() {
   return (
      <div className="relative overflow-hidden bg-hero-noise md:bg-none md:overflow-visible">
         <BgEffects />
         <div className="flex flex-col justify-between w-11/12 py-10 mx-auto md:w-10/12 md:py-20 md:flex-row gap-y-11 md:gap-y-0 ">
            <div>
               <h1 className="text-4xl md:w-1/2 md:text-5xl">
                  Зарабатывайте больше
               </h1>
               <h2 className="text-4xl font-black text-transparent md:text-5xl bg-gradient-to-r from-gradient-yellow to-gradient-red bg-clip-text">
                  с WELBEX
               </h2>
               <p
                  className={`md:w-1/2 mt-8 text-lg ${montserrat.className} font-normal`}
               >
                  Развиваем и контролируем продажи за вас
               </p>
            </div>
            <div className="flex flex-col md:text-right md:w-1/3 gap-y-10">
               <h2 className="text-lg font-medium ">
                  Вместе с 
                  <span className="font-bold tracking-widest text-transparent bg-gradient-to-r from-gradient-red to-gradient-yellow bg-clip-text">
                     бесплатной консультацией
                  </span>{" "}
                  мы дарим:
               </h2>
               <div className="grid grid-cols-2 gap-7">
                  {gifts.map((gift) => (
                     <div key={gift.id}>
                        <h4 className="flex items-center text-xs font-medium uppercase md:justify-end md:text-lg gap-x-1 ">
                           <div className="w-[10px] h-[1px]   bg-gradient-to-r from-gradient-yellow to-gradient-red md:hidden" />
                           <span className="hidden md:block ">
                              {gift.title}{" "}
                           </span>
                           <span className="md:hidden">
                              {gift.smTitle ? gift.smTitle : gift.title}
                           </span>
                        </h4>
                        <p
                           className={`hidden text-base font-normal md:block ${montserrat.className}`}
                        >
                           {gift.text}
                        </p>
                     </div>
                  ))}
               </div>
               <button className="bg-[#4077F3] font-medium self-end py-5 px-9 hover:bg-opacity-90 hidden md:flex">
                  Получить консультацию
               </button>
            </div>
         </div>
      </div>
   );
}
