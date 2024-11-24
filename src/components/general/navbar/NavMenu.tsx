import { Separator } from "@/components/ui/atoms/Separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/atoms/Sheet";
import {
  Bars3Icon,
  CalculatorIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import NavMenuItem from "./nav-items/NavMenuItem";
import ProfileHandler from "./profile/ProfileHandler";

export default function NavMenu() {
  const [open, setOpen] = React.useState(false);

  const apps = [
    {
      href: "/",
      title: "Home",
      Icon: HomeIcon,
    },
    {
      href: "/od",
      title: "OD App",
      Icon: PresentationChartLineIcon,
    },
    {
      href: "/profile-adjustment",
      title: "Profile Adjustment",
      Icon: MagnifyingGlassIcon,
    },
    {
      href: "/pp",
      title: "PP App",
      Icon: CalculatorIcon,
    },
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Bars3Icon className="w-8 cursor-pointer rounded-full hover:bg-background duration-150 sm:hidden" />
      </SheetTrigger>
      <SheetContent side={"top"}>
        <div>
          <ProfileHandler isMobile={true} />
        </div>
        <Separator className="my-3" />
        <div className="flex flex-col">
          {apps.map((app) => (
            <NavMenuItem {...app} setOpen={setOpen} key={app.href} />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
