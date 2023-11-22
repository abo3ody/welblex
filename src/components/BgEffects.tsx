const BgEffects = () => {
   return (
      <>
         <div className="absolute left-blur top-1/4 -left-10"></div>
         <div
            className="absolute w-10 h-10 md:w-[60px] md:h-[60px] -right-8 top-40 md:-top-40 md:right-96 -z-10"
            style={{
               background:
                  "radial-gradient(60.75% 60.75% at 41.90% 73.13%, rgba(236.22, 208.24, 255, 0.64) 0%, rgba(161.49, 93.27, 207.28, 0.24) 60%, rgba(117.69, 49.11, 163.72, 0.21) 79%, rgba(85.95, 23.92, 127.59, 0.23) 100%)",
               boxShadow: "3px 6px 27px -10px rgba(177, 118, 217, 0.25)",
               borderRadius: 9999,
               filter: "blur(10px)",
               backdropFilter: "blur(4px)",
            }}
         />
         <div
            className="absolute bottom-0 left-5 md:-top-24 md:left-96 -z-10 w-[43px] h-[43px] md:w-[83px] md:h-[83px]"
            style={{
               background:
                  "radial-gradient(60.75% 60.75% at 41.90% 73.13%, rgba(255, 208.24, 208.24, 0.54) 0%, rgba(211.52, 93.41, 93.41, 0.26) 60%, rgba(166.90, 49.36, 49.36, 0.25) 79%, rgba(129.71, 24.85, 24.85, 0.25) 100%)",
               boxShadow: "3px 6px 27px -10px rgba(223, 125, 125, 0.25)",
               borderRadius: 9999,
               backdropFilter: "blur(4px)",
            }}
         />
      </>
   );
};

export default BgEffects;
