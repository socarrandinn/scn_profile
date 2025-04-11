import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ITimeLine } from "@/definitions/resumen";
import { ChevronRight } from "lucide-react";
import React from "react";
import TimeLineDot from "./time-line-dot";
import DateValue from "../values/date-value";
import TransTypography from "../trans-typography";

const TimeLineItem = ({
  dateRange,
  jobTitle,
  companyName,
  description,
  buttonText = "RECOMMENDATION",
  className = "",
  isButtonVisible = true,
  isFirst,
}: ITimeLine) => {
  return (
    <div className={`relative group ${className}`}>
      <TimeLineDot bg={isFirst ? "bg-primary" : ""} />
      <TimeLineDot isFirst={isFirst} />

      <div className="flex flex-col md:flex-row md:items-center md:justify-between -mt-0.5">
        <div className="flex flex-col flex-1 gap-2 justify-start">
          <Badge
            variant={"outline"}
            className="leading-normal  border-primary "
          >
            <DateValue value={dateRange?.from} format="MM-yyyy" /> -{" "}
            <DateValue value={dateRange?.to} format="MM-yyyy" />
          </Badge>
          <div className="flex flex-col gap-1 w-full">
            <p className="text-sm text-primary">{companyName}</p>
            <h3 className="text-color-secondary text-md lg:text-lg font-semibold ">
              {jobTitle}
            </h3>
            <TransTypography
              className="  text-md sm:text-sm mt-2"
              message={description}
            />
          </div>

          {isButtonVisible && (
            <Button variant={"outline"} className="group mr-auto" size={"sm"}>
              {buttonText}
              <span className="material-symbols-outlined ml-2 text-md group-hover:translate-x-1 transition-transform duration-300">
                <ChevronRight />
              </span>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimeLineItem;
