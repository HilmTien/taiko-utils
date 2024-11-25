import { Button } from "@/components/ui/atoms/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/atoms/DropdownMenu";
import useSession from "@/lib/hooks/useSession";
import { fetcher } from "@/lib/utils";
import { Loader2, LogOutIcon } from "lucide-react";
import Image from "next/image";
import { UserExtended } from "osu-web.js";
import useSWR from "swr";
import LoginButton from "./LoginButton";

interface ProfileHandlerProps {
  isMobile: boolean;
}

export default function ProfileHandler({ isMobile }: ProfileHandlerProps) {
  const res = useSWR<UserExtended>("/api/osu/get-self", fetcher);
  const data = res.data;

  const { logout } = useSession();

  const onLogout = async () => {
    await logout();
    location.reload();
  };

  return data === undefined ? (
    <Button disabled>
      <Loader2 className="h-4 w-4 animate-spin" />
      <span className="ml-4">Loading</span>
    </Button>
  ) : Object.keys(data).length !== 0 ? (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className={isMobile ? "h-12" : "h-12 hidden sm:inline-flex"}
            variant={"ghost"}
            size={"default"}
          >
            <>
              <Image
                src={data.avatar_url}
                width={35}
                height={35}
                alt={"profile picture"}
                className="rounded-3xl"
              />
              <span className="ml-4 text-nowrap">{`${data.username}`}</span>
            </>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={onLogout}>
            <LogOutIcon />
            <span className="ml-2">Log Out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  ) : (
    <LoginButton isMobile={isMobile} />
  );
}
