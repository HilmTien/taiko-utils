import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/atoms/Dialog";
import { Separator } from "@/components/ui/atoms/Separator";
import Link from "next/link";

export default function HallofFame() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <p className="text-ellipsis mt-1 text-right text-xs sm:text-base whitespace-nowrap cursor-pointer opacity-50 hover:opacity-100 duration-300">
          Hall of Fame
        </p>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Hall of Fame</DialogTitle>
          <DialogDescription>
            Contributed with tears and joy by:
          </DialogDescription>
        </DialogHeader>
        <h1>Developers</h1>
        <div className="grid grid-cols-3 text-sm gap-5">
          <Link href="https://osu.ppy.sh/users/8631719" target="_blank">
            <p>Defectum</p>
          </Link>
          <Link href="https://osu.ppy.sh/users/16204122" target="_blank">
            <p>TonyWorep</p>
          </Link>
          <Link href="https://osu.ppy.sh/users/12513942" target="_blank">
            <p>mrv</p>
          </Link>
        </div>
        <Separator />
        <h1>Supporters of Norwegian Industry</h1>
        <div className="grid grid-cols-3 text-sm gap-5">
          <Link href="https://osu.ppy.sh/users/18382591/" target="_blank">
            <p>Chrisse</p>
          </Link>
          <Link href="https://osu.ppy.sh/users/7234023/" target="_blank">
            <p>Mills</p>
          </Link>
          <Link href="https://osu.ppy.sh/users/18916920/" target="_blank">
            <p>Mist31</p>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}
