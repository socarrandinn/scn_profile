export enum TimeOffStatusEnum {
  IN_PROGRESS = 'IN_PROGRESS',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
  PENDING = 'PENDING',
}

export const TimeOffStatusEnumValues = Object.values(TimeOffStatusEnum);

export const getStatusColor = (status: TimeOffStatusEnum) => {
  if (status === TimeOffStatusEnum.IN_PROGRESS) {
    return '#0000CC';
  } else if (status === TimeOffStatusEnum.ACCEPTED) {
    return '#00CC00';
  } else if (status === TimeOffStatusEnum.REJECTED) {
    return '#00CC00';
  } else {
    return '#CCC';
  }
}
