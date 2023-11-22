import { BgEffects } from "@/components";
import React from "react";

export async function generateMetadata({
   params,
}: {
   params: { slug: string };
}) {
   const slug = params.slug.toUpperCase();

   return {
      title: `WELBEX  | ${slug}`,
   };
}

const slug = ({ params }: { params: { slug: string } }) => {
   return (
      <div>
         <BgEffects />
         <div className="h-72 grid place-items-center">
            <h1>{params.slug}</h1>
         </div>
      </div>
   );
};

export default slug;
