import { ARROW_COLOR_SPACE, KEYBOARD_KEY } from "../constants/event";

export function matchIsArrowKey(
  key: string
): key is keyof typeof ARROW_COLOR_SPACE {
  return (
    key === KEYBOARD_KEY.up ||
    key === KEYBOARD_KEY.down ||
    key === KEYBOARD_KEY.left ||
    key === KEYBOARD_KEY.right
  );
}
