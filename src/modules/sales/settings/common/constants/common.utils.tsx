import { IAudience } from '../../causes-incidence/interfaces';
import { INotification } from '../../order-status/interfaces/INotification';

export const getAudienceTarget = (audience: IAudience[]) => {
  const uniqueTargets = new Set<string>();
  audience?.forEach((item) => {
    item.target?.forEach((target) => {
      uniqueTargets.add(target);
    });
  });

  const targets = Array.from(uniqueTargets);

  return targets;
};

export const getNotificationDefault = (not: INotification) => {
  const notification = {
    enabled: false,
    audience: [{ target: [], template: '' }],
  };
  if (!not) return notification;
  if (not.audience.length === 0) {
    return notification;
  }
  return not;
};
