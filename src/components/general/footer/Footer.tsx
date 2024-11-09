import { Separator } from "@/components/ui/atoms/Separator";
import Image from "next/image";
import Link from "next/link";
import github from "public/footer/github.png";
import vercel from "public/footer/vercel-powered.png";

export default function Footer() {
  return (
    <footer className="flex mt-52 mb-10 ">
      <div className="flex flex-col mx-auto place-items-center">
        <div className="flex mx-auto gap-64">
          <Link href="https://vercel.com" target="_blank">
            <Image src={vercel} alt="vercel" className="w-40" />
          </Link>
          <p className="text-nowrap whitespace-nowrap text-ellipsis">
            Made with tears and joy by Defectum & TonyWorep
          </p>
        </div>
        <Separator className="mx-auto my-3" />
        <div className="flex gap-[450px] mx-auto place-items-center">
          <span className="flex place-items-baseline gap-2">
            <h1 className="font-mono font-extrabold text-3xl text-nowrap whitespace-nowrap text-ellipsis">
              TAIKO UTILS
            </h1>
            <p className="font-mono font-extralight text-violet-200 text-nowrap whitespace-nowrap text-ellipsis">
              Copyright &copy; {new Date().getFullYear()}
            </p>
          </span>
          <Link href="https://github.com/HilmTien/taiko-utils" target="_blank">
            <Image src={github} alt="github" className="w-10" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
