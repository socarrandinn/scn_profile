export type Subscriber = (data: any) => void;

export class Observer {
  private subscribers: Subscriber[] = [];

  subscribe (subscriber: Subscriber) {
    if (!this.subscribers.some((sub) => sub === subscriber)) {
      this.subscribers.push(subscriber);
    }
    return () => {
      this.subscribers = this.subscribers.filter((sub) => sub !== subscriber);
    };
  }

  notify (data: any) {
    this.subscribers.forEach((subscriber) => {
      subscriber(data);
    });
  }
}
