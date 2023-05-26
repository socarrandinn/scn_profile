export enum TimeOffStatusEnum {
  IN_PROGRESS = 'IN_PROGRESS',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
  PENDING = 'PENDING',
  CANCELED = 'CANCELED',
}

export const TimeOffStatusEnumValues = Object.values(TimeOffStatusEnum);

export const getStatusColor = (status: TimeOffStatusEnum) => {
  if (status === TimeOffStatusEnum.IN_PROGRESS) {
    return '#000080';
  } else if (status === TimeOffStatusEnum.ACCEPTED) {
    return '#008000';
  } else if (status === TimeOffStatusEnum.REJECTED) {
    return '#800000';
  } else if (status === TimeOffStatusEnum.CANCELED) {
    return '#800000';
  } else {
    return '#808080';
  }
};
