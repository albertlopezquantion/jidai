import { DebugElement } from '@angular/core';

export const BUTTON_CLICKS_EVENTS = {
  left:  { button: 0 },
  right: { button: 2 }
};

export class ComponentEmulator {
  public static click(element: DebugElement | HTMLElement,
                  eventObj: any = BUTTON_CLICKS_EVENTS.left): void {
    if (element instanceof HTMLElement) {
      element.click();
    } else {
      element.triggerEventHandler('click', eventObj);
    }
  }
}
