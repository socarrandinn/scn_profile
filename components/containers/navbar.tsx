"use client";

import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ModeToggle } from "../ui/mode-toggle";
import { usePathname } from "next/navigation";
import { useCallback } from "react";
import { menu_links } from "@/constants/menu";

// Configuración de enlaces
const NavLinks = () => {
  const pathName = usePathname()
  const isActive = useCallback((path: string) => path === pathName, [pathName])
  return menu_links.map((link) => (
    <NavigationMenuItem key={link.name} className="w-full relative">
      <Link href={link.href} legacyBehavior passHref  >
        <NavigationMenuLink
          className={cn(
            "flex items-center gap-1 md:gap-2 p-2 uppercase rounded-md transition-colors text-color",
            isActive(link.href) && 'text-primary [&>svg]:stroke-primary ring-1',


          )}
        >
          {link.icon}
          <span className="text-sm">{link.name}</span>
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  ));
};



// Componente Principal
export function VerticalNav() {
  return (
    <header className="flex flex-col gap-4">
      <VerticalHomeNav />
      <nav className="h-auto md:h-auto w-full md:w-18 p-2 md:mr-4 bg-card rounded-md">
        {/* Lista de Enlaces */}
        <NavigationMenu orientation="horizontal" className="w-full">
          <NavigationMenuList className="grid grid-cols-4 md:grid-cols-1 gap-2 md:gap-4 mx-auto">
            <NavLinks />
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </header>
  );
}
export function VerticalHomeNav() {
  return (
    <nav className="h-auto md:h-auto w-18 p-6 bg-card rounded-md">
      <NavigationMenu >
        <NavigationMenuList className="flex flex-row gap-1 items-start">
          <ModeToggle />
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}