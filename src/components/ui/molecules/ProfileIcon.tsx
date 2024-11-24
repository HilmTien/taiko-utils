import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "../atoms/Tooltip";

interface ProfileIconProps {
  src: StaticImageData;
  user: string;
  id: string;
  className: string;
  width: number;
}

export default function ProfileIcon({
  src,
  user,
  id,
  className,
  width,
}: ProfileIconProps) {
  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        <div className={className}>
          <Link href={`https://osu.ppy.sh/users/${id}`} target="_blank">
            <Image src={src} alt={user} width={width} />
          </Link>
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>{user}</p>
      </TooltipContent>
    </Tooltip>
  );
}
