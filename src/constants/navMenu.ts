import { ROUTES } from './routes';

export interface INavMenuItem {
  title: string;
  link: string;
}

export const navMenu: INavMenuItem[] = [
  { title: 'Лиги', link: `${ROUTES[0].path}` },
  { title: 'Команды', link: `${ROUTES[2].path}` },
];
