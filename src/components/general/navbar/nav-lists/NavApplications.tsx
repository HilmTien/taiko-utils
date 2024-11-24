import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/atoms/NavigationMenu";
import {
  CalculatorIcon,
  MagnifyingGlassIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/24/outline";
import NavApplicationsItem from "./NavApplicationsItem";

export default function NavApplications() {
  const apps = [
    {
      href: "/od",
      title: "OD App",
      desc: "Check OD after mod change",
      Icon: PresentationChartLineIcon,
    },
    {
      href: "/profile-adjustment",
      title: "Profile Adjustment",
      desc: "Explore players' profile",
      Icon: MagnifyingGlassIcon,
    },
    {
      href: "/pp",
      title: "PP App",
      desc: "Calculate the PP on a map",
      Icon: CalculatorIcon,
    },
  ];

  return (
    <NavigationMenuList className="hidden sm:block">
      <NavigationMenuItem>
        <NavigationMenuTrigger>Applications</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="flex flex-col p-3">
            {apps.map((app) => (
              <NavApplicationsItem {...app} key={app.href} />
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  );
}
