import * as React from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { NavigationMenu, NavigationMenuList } from "../ui/navigation-menu";
import { NavLinks } from "./navbar/navbar-link";

export function DrawerDemo() {
  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button variant="link" className="p-0">
          <Menu className="h-6 w-6" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="!max-w-[100px] bg-card  border-none shadow-none p-4">
        <header id="menu" className={"flex-col gap-4 flex"}>
          <nav className="h-auto w-full md:w-18 p-2 md:mr-4 lg:bg-card rounded-md">
            {/* Lista de Enlaces */}
            <NavigationMenu orientation="horizontal" className="w-full">
              <NavigationMenuList className="grid grid-cols-1 gap-2 md:gap-4 mx-auto isZoom">
                <NavLinks />
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </header>
      </DrawerContent>
    </Drawer>
  );
}
