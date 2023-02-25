import { TEXTBOX_TYPE } from "./BaseTextbox.constant";

export type TextBoxType = (typeof TEXTBOX_TYPE)[keyof typeof TEXTBOX_TYPE];
