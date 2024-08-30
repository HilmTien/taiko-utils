"use client";

import { fetcher } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { UserExtended } from "osu-web.js";
import React from "react";
import useSWRImmutable from "swr/immutable";
import { Button } from "../ui/atoms/Button";
import InputField from "../ui/molecules/InputField";

export default function ProfileAdjustmentIndex() {
  const router = useRouter();

  const [userID, setUserID] = React.useState(0);

  const resSelf = useSWRImmutable<UserExtended>("/api/osu/get-self", fetcher);

  React.useEffect(() => {
    if (!resSelf.isLoading) {
      setUserID(resSelf.data!.id);
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

  const onUserIDSubmit = async () => {
    if (!Number.isNaN(userID)) {
      router.push(`profile-adjustment/${userID.toString()}`);
    }
  };

  return (
    <div>
      {resSelf.data !== undefined && Object.keys(resSelf.data).length !== 0 ? (
        <Button
          variant={"outline"}
          size={"default"}
          className="mb-4"
          onClick={() => setUserID(resSelf.data!.id)}
        >
          Use own profile
        </Button>
      ) : (
        <></>
      )}
      <InputField
        label={"User ID:"}
        type="number"
        step={1}
        value={userID.toString()}
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
    </div>
  );
}
