import { Menu as TMenu } from "../api/menu/Menu";

export const MENU_TITLE_FIELD = "id";

export const MenuTitle = (record: TMenu): string => {
  return record.id?.toString() || String(record.id);
};
