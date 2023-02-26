import { describe, it } from "vitest";
import { mount } from "@vue/test-utils";
import BaseButton from "./BaseButton.vue";
import vuetify, { components } from "@/plugins/vuetify";
import { BUTTON_COLOR } from "./BaseButton.constant";

describe("BaseButton", () => {
  it("mount component", async () => {
    expect(BaseButton).toBeTruthy();

    const wrapper = mount(BaseButton as any, {
      global: {
        plugins: [vuetify],
      },
      props: {
        color: BUTTON_COLOR.PRIMARY,
      },
      slots: {
        default: "テキスト",
      },
    });

    const button = wrapper.findComponent(components.VBtn);
    expect(button).toBeTruthy();

    expect(wrapper.text()).toContain("テキスト");
  });
});
