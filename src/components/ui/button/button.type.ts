import { BUTTON_COLOR, BUTTON_TYPE } from "./button.constant";

export type ButtonType = (typeof BUTTON_TYPE)[keyof typeof BUTTON_TYPE];

export type ButtonColor = (typeof BUTTON_COLOR)[keyof typeof BUTTON_COLOR];
