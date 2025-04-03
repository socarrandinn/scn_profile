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
        <div className="flex flex-col flex-1 gap-4 justify-start">
          <Badge className="text-primary" variant={"outline"}>
            <DateValue value={dateRange?.from} format="MM-yyyy" /> -{" "}
            <DateValue value={dateRange?.to} format="MM-yyyy" />
          </Badge>
          <div className="flex flex-col gap-2 w-full">
            <h3 className="text-color-secondary text-lg font-semibold ">
              {jobTitle}
            </h3>
            <Badge
              variant={"outline"}
              className="py-0.5 px-2 rounded-sm !whitespace-break-spaces"
            >
              {companyName}
            </Badge>
            <TransTypography
              className="text-color text-sm"
              message={description}
            />
          </div>

          {isButtonVisible && (
            <Button variant={"outline"} className="group mr-auto" size={"sm"}>
              {buttonText}
              <span className="material-symbols-outlined ml-2 text-sm group-hover:translate-x-1 transition-transform duration-300">
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
