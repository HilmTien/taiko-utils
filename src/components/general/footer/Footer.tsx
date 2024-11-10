import { Separator } from "@/components/ui/atoms/Separator";
import Image from "next/image";
import Link from "next/link";
import github from "public/footer/github.png";
import vercel from "public/footer/vercel-powered.png";

export default function Footer() {
  return (
    <footer className="flex mt-52 mb-10">
      <div className="flex flex-col mx-auto w-[900px] px-5">
        <div className="flex justify-between gap-2 items-center">
          <Link href="https://vercel.com" target="_blank">
            <Image src={vercel} alt="vercel" className="w-32 sm:w-40"/>
          </Link>
          <p className="text-ellipsis mt-1 text-right text-xs sm:text-base whitespace-nowrap">
            Made by Defectum & TonyWorep.</p>
        </div>

        <Separator className="mx-auto my-3"/>  
        <div className="flex justify-between items-center">
          <span className="flex place-items-baseline gap-2 sm:flex-row sm:gap-2 text-center sm:text-left">
            <h1 className="font-mono font-extrabold text-xl sm:text-3xl whitespace-nowrap">
              TAIKO UTILS
            </h1>
            <p className="font-mono font-extralight text-violet-200 text-nowrap text-xs sm:text-base">
              Copyright &copy; {new Date().getFullYear()}
            </p>
          </span>
          <Link href="https://github.com/HilmTien/taiko-utils" target="_blank">
            <Image src={github} alt="github" className="w-8 sm:w-10" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
