export interface INavBar {
  activeKey: string;
  mainMenu: IMainMenu[];
}

interface IMainMenu {
  navText: string;
  navLink: string;
}