import React from "react";
import { FooterOne } from "./FooterOne";
import { FooterTwo } from "./FooterTwo";

export const FooterSequence: React.FC = () => {
  return (
    <div id="footer-sequence" className="flex flex-col w-full">
      <FooterOne />
      <FooterTwo />
    </div>
  );
};

export default FooterSequence;
