import Image from "next/image";
import Link from "next/link";

type LinksType = {
   id: number;
   text: string;
   url: string;
};

const socialMedia: LinksType[] = [
   {
      id: 1,
      text: "telegram",
      url: "#",
   },

   {
      id: 2,
      text: "viber",
      url: "#",
   },

   {
      id: 3,
      text: "whatsapp",
      url: "#",
   },
];

const SocialMedia = () => {
   return (
      <>
         <p>+7 555 555-55-55</p>
         <div className="flex items-start md:ml-auto gap-x-7">
            {socialMedia.map((link) => (
               <Link href={link.url} key={link.id}>
                  <Image
                     key={link.id}
                     src={`/${link.text}.svg`}
                     width={20}
                     height={20}
                     alt="social-media-icon"
                     className="hover:scale-110 transition-transform duration-200"
                  />
               </Link>
            ))}
         </div>
      </>
   );
};

export default SocialMedia;
