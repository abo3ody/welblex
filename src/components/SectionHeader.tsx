import React from "react";

type Props = {
   text: string;
};

const SectionHeader = ({ text }: Props) => {
   return <h3 className={"text-xs text-dark-gray md:text-sm mb-5 "}>{text}</h3>;
};

export default SectionHeader;
