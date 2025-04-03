"use client";
import { CardContent } from "@/components/ui/card";
import dynamic from "next/dynamic";

const ContactMap = dynamic(() => import("./contact-map"), {
  ssr: false,
  loading: () => <div className="h-[400px] w-full bg-gray-100" />,
});

const ContactMapContainer = () => {
  return (
    <CardContent>
      <div className="h-[24rem] md:h-[16rem] w-full">
        <ContactMap posix={[23.1136, -82.3666]} zoom={18} />
      </div>
    </CardContent>
  );
};

export default ContactMapContainer;
