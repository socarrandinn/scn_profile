"use client";
import React, { useCallback } from "react";
import { CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { CloudDownloadIcon, Send } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { downloadCV } from "@/app/actions/download-cv";
import useToggle from "@/hooks/use-toggle";
import { Loading } from "../ui/loading";

const ProfileActions = () => {
  const { push } = useRouter();
  const { isOpen, onClose, onOpen } = useToggle(false);
  const { t } = useTranslation("common");
  const goToContact = useCallback(
    (to: string) => {
      push(to);
    },
    [push],
  );

  const handleDownload = async () => {
    onOpen();
    await downloadCV();
    onClose();
  };

  return (
    <CardFooter className="mt-auto w-full !px-2 m-0 grid grid-cols-2 justify-between fade-line-top">
      <Button
        onClick={handleDownload}
        variant="ghost"
        className="w-full button-rectangle flex items-center group uppercase"
        disabled={isOpen}
      >
        {isOpen ? (
          <Loading size="md" />
        ) : (
          <>
            {t("downloadCV")}
            <CloudDownloadIcon className="group-hover:animate-bounce" />
          </>
        )}
      </Button>

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
