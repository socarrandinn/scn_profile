"use client";
import React, { useCallback } from "react";
import { CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { CloudDownloadIcon, Send } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const ProfileActions = () => {
  const { push } = useRouter();
  const { t } = useTranslation("common");
  const goToContact = useCallback(
    (to: string) => {
      push(to);
    },
    [push],
  );

  return (
    <CardFooter className="mt-auto w-full !px-2 m-0 grid grid-cols-2 justify-between fade-line-top">
      <Link href={"/api/generate-cv-pdf"}>
        <Button
          variant="ghost"
          className="w-full button-rectangle flex items-center group uppercase"
        >
          {t("downloadCV")}
          <CloudDownloadIcon className="group-hover:animate-bounce" />
        </Button>
      </Link>
      <Button
        variant="ghost"
        className="w-full button-rectangle flex items-center group fade-line-left uppercase"
        onClick={() => goToContact("/contact#form")}
      >
        {t("contactMe")}
        <Send className="group-hover:animate-bounce" />
      </Button>
    </CardFooter>
  );
};

export default ProfileActions;
