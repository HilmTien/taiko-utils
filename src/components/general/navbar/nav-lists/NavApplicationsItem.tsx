import { NavigationMenuLink } from "@/components/ui/atoms/NavigationMenu";
import Link from "next/link";

type IconProps = {
  className: string;
};

interface NavApplicationsItemProps {
  href: string;
  title: string;
  desc: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export default function NavApplicationsItem({
  href,
  title,
  desc,
  Icon,
}: NavApplicationsItemProps) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link href={href} className="hover:no-underline">
          <div className="group w-64 p-3 duration-200 rounded-sm flex gap-3 place-items-center">
            {
              <Icon className="h-6 rounded-sm group-hover:text-black group-hover:bg-white duration-300" />
            }
            <div className="flex flex-col">
              <p className="font-bold text-sm">{title}</p>
              <p className="text-xs opacity-50 group-hover:opacity-100 duration-300">
                {desc}
              </p>
            </div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
