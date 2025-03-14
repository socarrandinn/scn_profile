import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ITimeLine } from '@/definitions/resumen';
import { ChevronRight } from 'lucide-react';
import React from 'react';
import TimeLineDot from './time-line-dot';

const TimeLineItem = ({
  dateRange,
  jobTitle,
  companyName,
  description,
  buttonText = 'RECOMMENDATION',
  icon,
  className = '',
  isButtonVisible = true,
  isFirst
}: ITimeLine) => {
  return (
    <div className={`relative group ${className}`}>
      <TimeLineDot bg={isFirst ? 'bg-primary' : ''} />
      <TimeLineDot isFirst={isFirst} />

      <div className="flex flex-col md:flex-row md:items-center md:justify-between -mt-0.5">
        <div className="flex flex-col flex-1 gap-2 justify-start">
          <Badge className='text-primary' variant={'outline'}> {dateRange}</Badge>
          <div>
            <h3 className="text-color-secondary text-xl font-semibold mb-1">{jobTitle}</h3>
            <p className="text-color text-sm mb-2">{companyName}</p>
            <p className="text-color mb-2 text-sm">{description}</p>
          </div>

          {isButtonVisible && (
            <Button variant={'outline'} className="group mr-auto" size={'sm'}>
              {buttonText}
              <span className="material-symbols-outlined ml-2 text-sm group-hover:translate-x-1 transition-transform duration-300">
                <ChevronRight />
              </span>
            </Button>
          )}
        </div>

        <div className="mt-4 md:mt-0 md:ml-6 opacity-30 hover:opacity-100 transition-opacity duration-300">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default TimeLineItem;