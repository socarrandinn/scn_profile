import { BookMarked, Eye, FlaskRound, LaptopMinimal, Send, User } from "lucide-react";

export const menu_links = [
  { name: "About", href: "/about-me", icon: <User className="h-20 w-20" /> },
  { name: "Resumen", href: "/resumen", icon: <FlaskRound className="h-20 w-20" /> },
  { name: "Works", href: "/works", icon: <Eye className="h-20 w-20" /> },
  { name: "Blog", href: "/blog", icon: <BookMarked className="h-20 w-20" /> },
  { name: "Contact", href: "/contact", icon: <Send className="h-20 w-20" /> },
  { name: "Products", href: "/products", icon: <LaptopMinimal className="h-20 w-20" /> },
];