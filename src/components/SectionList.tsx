import Link from "next/link";

type Props = {
   list: string[];
   col: number;
};

const SectionList = ({ list, col }: Props) => {
   return (
      <ul className={`grid  gap-2 grid-cols-${col} `}>
         {list.map((link) => (
            <Link
               href="#"
               key={link}
               className="text-sm font-normal md:text-base"
            >
               {link}
            </Link>
         ))}
      </ul>
   );
};

export default SectionList;
