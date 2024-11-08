import { Separator } from "@/components/ui/atoms/Separator";
import Image from "next/image";
import Link from "next/link";
import github from "public/github.png";
import vercel from "public/vercel-powered.png";

export default function Footer() {
  return (
    <footer className="flex mt-52 mb-10">
      <div className="flex flex-col mx-auto">
        <div className="flex mx-auto gap-[750px]">
          <Link href="https://vercel.com" target="_blank">
            <Image src={vercel} alt="vercel" className="w-40" />
          </Link>
          <Link href="https://github.com/HilmTien/taiko-utils" target="_blank">
            <Image src={github} alt="github" className="w-10" />
          </Link>
        </div>
        <Separator className="mx-auto my-5" />
        <div className="flex gap-[650px] mx-auto place-items-center">
          <span className="flex place-items-baseline gap-2">
            <h1 className="font-mono font-extrabold text-3xl">TAIKO UTILS</h1>
            <p className="font-mono font-extralight text-violet-200">
              {new Date().getFullYear()}
            </p>
          </span>
          <p>Hall of Fame</p>
        </div>
      </div>
    </footer>
  );
}
