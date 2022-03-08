export interface INavMenuItem {
  title: string;
  link: string;
}

export const navMenu: INavMenuItem[] = [
  { title: 'Лиги', link: '/leagues' },
  { title: 'Команды', link: '/teams' },
];
