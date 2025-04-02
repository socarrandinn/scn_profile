import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { IAboutMePaymentPlan } from "@/definitions/about-me";
import React, { ReactNode } from "react";
import { useTranslation } from "react-i18next";

const PaymentPlanItem = ({
  plan,
  icon,
}: {
  plan: IAboutMePaymentPlan;
  icon: ReactNode;
}) => {
  const { t } = useTranslation("common");
  return (
    <article className="flex flex-col gap-1 items-center text-center ">
      <Avatar className="w-12 h-12">
        <AvatarFallback className="bg-transparent border-[1px] border-primary border-solid text-primary">
          {icon || plan?.icon}
        </AvatarFallback>
      </Avatar>
      <h1 className="font-bold text-2xl">{plan?.title}</h1>
      {/* pricing */}
      <div className="flex justify-end items-end gap-1">
        <h1 className="text-4xl font-bold">{plan?.price}</h1>
        <p className="text-sm font-italic mb-1">{t("hour")}</p>
      </div>
      {/*   <p className='font-normal '>{plan?.description}</p> */}
      <ul className="mt-1 md:mt-2 text-color-secondary">
        {plan?.services?.map((feature) => (
          <li className="py-0.5 " key={feature}>
            {" "}
            {feature}
          </li>
        ))}
      </ul>

      {/* action to contact */}
      {/* <Button variant={'secondary'} size={'sm'}>
        {t('orderNow')}
      </Button> */}
    </article>
  );
};

export default PaymentPlanItem;
