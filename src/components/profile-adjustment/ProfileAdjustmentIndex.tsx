"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "../ui/atoms/Button";
import InputField from "../ui/molecules/InputField";

export default function ProfileAdjustmentIndex() {
  const router = useRouter();

  const [userID, setUserID] = React.useState(0);

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
      <InputField
        label={"User ID:"}
        type="number"
        step={1}
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
