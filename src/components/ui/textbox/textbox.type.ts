import { TEXTBOX_TYPE } from "./textbox.constant";

export type TextBoxType = (typeof TEXTBOX_TYPE)[keyof typeof TEXTBOX_TYPE];
