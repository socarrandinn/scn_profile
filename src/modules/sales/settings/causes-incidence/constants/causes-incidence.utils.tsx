import { IAudience } from '../interfaces';

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
