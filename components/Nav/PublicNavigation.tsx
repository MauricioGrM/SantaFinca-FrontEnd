import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ThemeModeToggle from "../Buttons/ThemeModeToggle";
import Image from "next/image";
import NavLogo from "./NavLogo";

export default function PublicNavigation() {
  return (
    <header className="border-b bg-background">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold">
          <NavLogo />
        </Link>

        {/* Desktop Menu */}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink className="px-4 py-2">
                Producto
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="px-4 py-2">
                Precios
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="px-4 py-2">
                Contacto
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="px-4 py-2">
                Acerca
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop Actions */}
        <div className="hidden md:flex gap-2">
          <Button variant="outline" asChild>
            <Link href="/auth/register">Register</Link>
          </Button>
          <Button asChild>
            <Link href="/auth/login">Login</Link>
          </Button>
          <ThemeModeToggle />
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-4">
            <nav className="flex flex-col gap-4">
              <Link href="/" className="text-lg" passHref>
                Home
              </Link>
              <Link href="/about" className="text-lg" passHref>
                About
              </Link>
              <Link href="/contact" className="text-lg" passHref>
                Contact
              </Link>
              <div className="flex gap-2 mt-4">
                <Button variant="outline" className="flex-1">
                  Sign Up
                </Button>
                <Button className="flex-1">Login</Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
