import { EntityApiService } from '@dfl/react-security';

export enum StepsGroup {
  mainLayout = 'mainLayout',
  menu_inventory = 'menu_inventory',
}

class TourService extends EntityApiService<any> {
  async getSeenStepsfromLocalStorage (stepsGroup: StepsGroup): Promise<number[]> {
    const steps = localStorage.getItem(stepsGroup);
    return steps ? JSON.parse(steps) : [];
  }

  async saveSeenStep (step: number, stepsGroup: StepsGroup): Promise<void> {
    const seenSteps = await this.getSeenStepsfromLocalStorage(stepsGroup);
    if (!seenSteps.includes(step)) {
      const updatedSteps = [...seenSteps, step];
      localStorage.setItem(stepsGroup, JSON.stringify(updatedSteps));
    }
  }

  // async clearSeenSteps(stepsGroup: StepsGroup): Promise<void> {
  //   localStorage.removeItem(stepsGroup);
  // }

  async sendSeenSteps (stepsGroup: StepsGroup): Promise<void> {
    const seenSteps = await this.getSeenStepsfromLocalStorage(stepsGroup);
  }
}

export default new TourService('');
