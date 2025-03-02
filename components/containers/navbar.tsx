"use client";

import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Settings, User, Book, Mail } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ModeToggle } from "../ui/mode-toggle";
import { usePathname } from "next/navigation";
import { useCallback } from "react";

// Configuración de enlaces
const NavLinks = () => {
  const pathName = usePathname()
  const links = [
    { name: "Perfil", href: "/profile", icon: <User className="h-20 w-20" /> },
    { name: "Blog", href: "/blog", icon: <Book className="h-20 w-20" /> },
    { name: "Contacto", href: "/contact", icon: <Mail className="h-20 w-20" /> },
    { name: "Ajustes", href: "/settings", icon: <Settings className="h-20 w-20" /> },
  ];

  const isActive = useCallback((path: string) => path === pathName, [pathName])


  return links.map((link) => (
    <NavigationMenuItem key={link.name} className="w-full relative">
      <Link href={link.href} legacyBehavior passHref  >
        <NavigationMenuLink
          className={cn(
            "flex items-center gap-3 p-2 uppercase  rounded-md transition-colors text-color",        
            isActive(link.href) && 'text-primary [&>svg]:stroke-primary ring-1 ',

          )}
        >
          {link.icon}
          <span className="text-sm ">{link.name}</span>
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  ));
};



// Componente Principal
export function VerticalNav() {
  return (
    <div className="flex flex-col gap-4">
      <VerticalHomeNav />
      <nav className="h-auto w-18 p-6 mr-4 bg-card rounded-md">
        {/* Lista de Enlaces */}
        <NavigationMenu orientation="vertical">
          <NavigationMenuList className="flex flex-col gap-1 items-start">
            <NavLinks />
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </div>
  );
}
export function VerticalHomeNav() {
  return (
    <header>
      <nav className="h-auto w-18 p-6 bg-card rounded-md">
        <NavigationMenu orientation="vertical">
          <NavigationMenuList className="flex flex-col gap-1 items-start">
            <ModeToggle />
          </NavigationMenuList>
        </NavigationMenu>

      </nav>
    </header>
  );
}