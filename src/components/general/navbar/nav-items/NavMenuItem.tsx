import Link from "next/link";
import React from "react";

interface NavMenuItemProps {
  href: string;
  title: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NavMenuItem({
  href,
  title,
  Icon,
  setOpen,
}: NavMenuItemProps) {
  return (
    <Link
      href={href}
      className="flex gap-3 p-3 rounded-md opacity-75 hover:no-underline hover:bg-secondary hover:opacity-100 duration-150 place-items-center"
      onClick={() => setOpen(false)}
    >
      <Icon className="h-7" />
      <p className="text-xl">{title}</p>
    </Link>
  );
}
