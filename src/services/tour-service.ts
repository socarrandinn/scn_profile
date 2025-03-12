import { EntityApiService } from '@dfl/react-security';

export enum StepsGroup {
  mainLayout = 'mainLayout',
  menu_inventory = 'menu_inventory',
}

class TourService extends EntityApiService<any> {
  async getSeenSteps(stepsGroup: StepsGroup): Promise<number[]> {
    const steps = localStorage.getItem(stepsGroup);
    return steps ? JSON.parse(steps) : [];
  }

  async saveSeenStep(step: number, stepsGroup: StepsGroup): Promise<void> {
    const seenSteps = await this.getSeenSteps(stepsGroup);
    if (!seenSteps.includes(step)) {
      const updatedSteps = [...seenSteps, step];
      localStorage.setItem(stepsGroup, JSON.stringify(updatedSteps));
    }
  }

  async clearSeenSteps(stepsGroup: StepsGroup): Promise<void> {
    localStorage.removeItem(stepsGroup);
  }
}

export default new TourService('');
