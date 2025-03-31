"use client";
import React, { useCallback } from "react";
import { CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { CloudDownloadIcon, Send } from "lucide-react";
import { useRouter } from "next/navigation";

const ProfileActions = () => {
  const { push } = useRouter();

  const goToContact = useCallback(
    (to: string) => {
      push(to);
    },
    [push],
  );

  return (
    <CardFooter className="mt-auto w-full p-0 m-0 grid grid-cols-2 justify-between fade-line-top">
      <Button
        variant="ghost"
        className="w-full button-rectangle flex items-center group "
      >
        Download CV
        <CloudDownloadIcon className="group-hover:animate-bounce" />
      </Button>
      <Button
        variant="ghost"
        className="w-full button-rectangle flex items-center group fade-line-left"
        onClick={() => goToContact("/contact#form")}
      >
        CONTACT ME
        <Send className="group-hover:animate-bounce" />
      </Button>
    </CardFooter>
  );
};

export default ProfileActions;
