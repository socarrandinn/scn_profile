interface INotificationItem {
  avatarSrc: string;
  avatarAlt?: string;
  primaryText: string;
  primaryTime: string;
  secondaryText: string;
}

export const NotificationsMock: INotificationItem[] = [1, 2, 3, 4, 5, 6].map((index) => ({
  avatarSrc: `/static/images/avatar/${index}.jpg`,
  avatarAlt: `Travis Howard ${index}`,
  primaryText: `User Name ${index}`,
  primaryTime: `${index} dias atrás`,
  secondaryText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit... ${index}`,
  handleClick: Math.random() > 0.5 ? () => {} : undefined,
}));
