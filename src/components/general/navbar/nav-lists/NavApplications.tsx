import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/atoms/NavigationMenu";
import {
  CalculatorIcon,
  MagnifyingGlassIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

export default function NavApplications() {
  const [app, setApp] = React.useState(0);

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Applications</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col p-3">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/od" className="hover:no-underline">
                    <div
                      className="w-64 p-3 duration-200 rounded-sm flex gap-3 place-items-center"
                      onMouseEnter={() => setApp(1)}
                      onMouseLeave={() => setApp(0)}
                    >
                      <PresentationChartLineIcon
                        className={
                          app === 1
                            ? "h-6 rounded-sm text-black bg-white duration-300"
                            : "h-6 rounded-sm duration-300"
                        }
                      />
                      <div className="flex flex-col">
                        <p className="font-bold text-sm">OD App</p>
                        <p
                          className={
                            app === 1
                              ? "text-xs duration-300"
                              : "text-xs opacity-50 duration-300"
                          }
                        >
                          Check OD after mod change
                        </p>
                      </div>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/profile-adjustment"
                    className="hover:no-underline"
                  >
                    <div
                      className="w-64 p-3 duration-200 rounded-sm flex gap-3 place-items-center"
                      onMouseEnter={() => setApp(2)}
                      onMouseLeave={() => setApp(0)}
                    >
                      <MagnifyingGlassIcon
                        className={
                          app === 2
                            ? "h-6 rounded-sm text-black bg-white duration-300"
                            : "h-6 rounded-sm duration-300"
                        }
                      />
                      <div className="flex flex-col">
                        <p className="font-bold text-sm">Profile Adjustment</p>
                        <p
                          className={
                            app === 2
                              ? "text-xs duration-300"
                              : "text-xs opacity-50 duration-300"
                          }
                        >
                          Explore players&apos; profile
                        </p>
                      </div>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/pp" className="hover:no-underline">
                    <div
                      className="w-64 p-3 duration-200 rounded-sm flex gap-3 place-items-center"
                      onMouseEnter={() => setApp(3)}
                      onMouseLeave={() => setApp(0)}
                    >
                      <CalculatorIcon
                        className={
                          app === 3
                            ? "h-6 rounded-sm text-black bg-white duration-300"
                            : "h-6 rounded-sm duration-300"
                        }
                      />
                      <div className="flex flex-col">
                        <p className="font-bold text-sm">PP App</p>
                        <p
                          className={
                            app === 3
                              ? "text-xs duration-300"
                              : "text-xs opacity-50 duration-300"
                          }
                        >
                          Calculate the PP on a map
                        </p>
                      </div>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
