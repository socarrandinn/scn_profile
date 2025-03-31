import React from "react";
import { DrawerDemo } from "./drawer-menu";
import { ModeToggle } from "../ui/mode-toggle";
import LanguageChanger from "../core/language-changer/language-changer";

const NavarMobile = async ({ locale }: { locale: string }) => {
  return (
    <div className="flex lg:hidden justify-between items-center">
      <h1> </h1>
      <div className="flex flex-row gap-1">
        <LanguageChanger locale={locale} />
        <ModeToggle />
        <DrawerDemo />
      </div>
    </div>
  );
};

export default NavarMobile;
