"use client";

import Button from "@/components/Button/Button";
import Text from "@/components/Text/Text";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className=" flex flex-col w-full h-screen  gap-20 items-center justify-center">
      <Text title="Something went wrong" fontSize="text-[28px]" />
      <Button variant="filled" onClick={() => reset()}>
        Try again
      </Button>
    </div>
  );
}
