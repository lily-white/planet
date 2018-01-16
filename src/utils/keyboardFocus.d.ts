export function focusKeyPressed(pressed: boolean): boolean;
export function detectKeyboardFocus(
  instance: {
    keyboardFocusTimeout: any;
    keyboardFocusCheckTime: number;
    keyboardFocusMaxCheckTimes: number;
  },
  element: Element,
  cb: () => void,
  attempt: number,
): never;
export function listenForFocusKeys(): never;
