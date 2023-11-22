import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { SocialMedia } from ".";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["300"] });
type LinksType = {
   id: number;
   text: string;
   url: string;
};
const navLinks: LinksType[] = [
   {
      id: 1,
      text: "Услуги",
      url: "/services",
   },

   {
      id: 2,
      text: "Виджеты",
      url: "/widgets",
   },

   {
      id: 3,
      text: "Интеграции",
      url: "/integrations",
   },

   {
      id: 4,
      text: "Кейсы",
      url: "/cases",
   },
];

const Navbar = () => {
   return (
      <nav className="">
         <div className="flex justify-center w-11/12 py-5 mx-auto md:w-10/12 md:justify-between md:py-4 md:my-11">
            <div className="flex-col hidden md:flex">
               <Link href={"/"} className="flex gap-2">
                  <Image src="/part1.svg" width={35} height={24} alt="logo" />
                  <Image src="/part2.svg" width={79} height={15} alt="logo" />
               </Link>
               <p className={`${montserrat.className} text-xs w-44 mt-3`}>
                  крупный интегратор CRM в Росcии и ещё 8 странах
               </p>
            </div>

            <ul className="flex justify-between w-full text-xs md:w-auto md:gap-x-7 md:text-base">
               {navLinks.map((link) => (
                  <Link href={link.url} key={link.id}>
                     <li className="hover:text-white">{link.text}</li>
                  </Link>
               ))}
               <Link href={"/certificates"} className={`hidden md:flex`}>
                  <li className="hover:text-white">Сертификаты</li>
               </Link>
            </ul>

            <div className="hidden md:flex gap-x-12">
               <SocialMedia />
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
