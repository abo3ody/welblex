import React from "react";
import { SectionHeader, SectionList, SocialMedia } from ".";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400"] });

const footerLinks = {
   aboutCompany: ["Партнёрская программа", "Вакансии"],
   menu: [
      "Расчёт стоимости",
      "Кейсы",
      "Услуги",
      "Благодарственные письма",
      "Виджеты",
      "Сертификаты",
      "Интеграции",
      "Блог на Youtube",
      "Наши клиенты",
      "Вопрос / Ответ",
   ],
};

const Footer = () => {
   return (
      <footer>
         <div className="">
            <div className="flex flex-col justify-between w-11/12 mx-auto md:w-10/12 gap-y-8 md:gap-y-0 md:flex-row py-11">
               <div className="">
                  <SectionHeader text="О компании" />
                  <SectionList list={footerLinks.aboutCompany} col={1} />
               </div>
               <div className="">
                  <SectionHeader text="Меню" />
                  <SectionList list={footerLinks.menu} col={2} />
               </div>
               <div className="md:text-right">
                  <SectionHeader text="Контакты" />
                  <div className="flex flex-col gap-y-5">
                     <SocialMedia />
                     <p className="text-sm md:text-base">
                        Москва, Путевой проезд 3с1, к 902
                     </p>
                  </div>
               </div>
            </div>
            <div
               className={`py-10 md:py-7 md:text-right text-xs w-11/12 mx-auto md:w-10/12 ${montserrat.className}`}
            >
               <p>©WELBEX 2022. Все права защищены.</p>
               <p className={" underline cursor-pointer"}>
                  Политика конфиденциальности
               </p>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
