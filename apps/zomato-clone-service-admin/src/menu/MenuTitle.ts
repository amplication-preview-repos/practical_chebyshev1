import { Menu as TMenu } from "../api/menu/Menu";

export const MENU_TITLE_FIELD = "itemName";

export const MenuTitle = (record: TMenu): string => {
  return record.itemName?.toString() || String(record.id);
};
