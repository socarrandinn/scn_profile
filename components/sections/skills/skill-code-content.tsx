"use client";
import SectionHeader from "@/components/core/section-header";
import SkillChip from "@/components/core/skill-chip";
import { Button } from "@/components/ui/button";
import { SkillProps, SkillType } from "@/constants/skill";
import { cn } from "@/lib/utils";
import { CodeXml } from "lucide-react";
import { ReactNode, useCallback, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useTranslation } from "react-i18next";

type Props = {
  skills: SkillProps[];
  types: string[];
  title: string;
  icon: ReactNode;
};
export const SkillCodeContent = ({ skills, types, title, icon }: Props) => {
  const { t } = useTranslation("resumen");
  const [check, setCheck] = useState<string>(SkillType.All);

  const filter = (type: string) => {
    if (check === SkillType.All) return true;
    return type === check;
  };

  const handleCheck = useCallback((type: string) => {
    setCheck(type);
  }, []);

  return (
    <article className="col-span-2 flex flex-col gap-4">
      <SectionHeader
        icon={icon || <CodeXml />}
        title={title}
        className="mb-4"
      />
      <div className="gap-2 flex flex-wrap">
        {types.map((type) => (
          <motion.span
            key={type}
            initial={{ scale: 1 }}
            whileTap={{ scale: 0.8 }}
            exit={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button
              onClick={() => handleCheck(type)}
              className={cn("", check === type ? "bg-primary" : "")}
              variant={"ghost"}
              size={"sm"}
            >
              {t(`types.${type}`)}
            </Button>
          </motion.span>
        ))}
      </div>
      <div className="flex flex-row flex-wrap gap-3 w-full transition duration-200">
        <AnimatePresence>
          {skills
            ?.filter((skill) => filter(skill?.type))
            ?.map((skill) => (
              <motion.div
                key={skill?.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
              >
                <SkillChip skill={skill} />
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </article>
  );
};
