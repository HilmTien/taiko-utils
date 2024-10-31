"use client";

import { fetcher, getData } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { UserExtended } from "osu-web.js";
import React from "react";
import useSWRImmutable from "swr/immutable";
import { Button } from "../ui/atoms/Button";
import { Checkbox } from "../ui/atoms/Checkbox";
import InputField from "../ui/molecules/InputField";

export default function ProfileAdjustmentIndex() {
  const router = useRouter();

  const [userID, setUserID] = React.useState(0);
  const [useUserID, setUseUserID] = React.useState(true);
  const [userName, setUserName] = React.useState("");

  const resSelf = useSWRImmutable<UserExtended>("/api/osu/get-self", fetcher);

  React.useEffect(() => {
    if (!resSelf.isLoading) {
      if (Object.keys(resSelf.data!).length !== 0) {
        setUserID(resSelf.data!.id);
      }
    }
  }, [resSelf.data]);

  const onUserIDChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserID(
      e.target.value
        ? parseInt(e.target.value) > 0
          ? parseInt(e.target.value)
          : 0
        : 0
    );
  };

  const setSelf = (selfId: number) => {
    setUseUserID(true);
    setUserID(selfId);
  };

  const onUserIDSubmit = async () => {
    if (!Number.isNaN(userID)) {
      router.push(`profile-adjustment/${userID.toString()}`);
    }
  };

  const onUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const onUserNameSubmit = async () => {
    const userSearch = (await getData(
      `/api/osu/get-player?id=${userName}&key=username`
    )) as UserExtended;
    router.push(`profile-adjustment/${userSearch.id}`);
  };

  return (
    <div>
      {resSelf.data !== undefined && Object.keys(resSelf.data).length !== 0 ? (
        <div className="mb-4 flex items-center gap-4">
          <Button
            variant={"outline"}
            size={"default"}
            onClick={() => setSelf(resSelf.data!.id)}
          >
            Use own profile
          </Button>
          <label className="flex items-center gap-4">
            Use user ID
            <Checkbox
              checked={useUserID}
              onCheckedChange={(next: boolean) => setUseUserID(next)}
            />
          </label>
        </div>
      ) : (
        <></>
      )}
      {useUserID ? (
        <>
          <InputField
            label={"User ID:"}
            type="number"
            step={1}
            value={userID}
            onChange={onUserIDChange}
          />
          <Button
            className="mt-2"
            variant="default"
            size="default"
            onClick={onUserIDSubmit}
          >
            Submit
          </Button>
        </>
      ) : (
        <>
          <InputField
            label={"Username:"}
            type="text"
            step={1}
            value={userName}
            onChange={onUserNameChange}
          />
          <Button
            className="mt-2"
            variant="default"
            size="default"
            onClick={onUserNameSubmit}
          >
            Submit
          </Button>
        </>
      )}
    </div>
  );
}
