import { describe, it } from "vitest";
import { mount } from "@vue/test-utils";
import BaseTextbox from "./BaseTextbox.vue";
import vuetify, { components } from "@/plugins/vuetify";

describe("BaseTextbox", () => {
  it("mount component", async () => {
    expect(BaseTextbox).toBeTruthy();

    const wrapper = mount(BaseTextbox as any, {
      global: {
        plugins: [vuetify],
      },
    });

    const textField = wrapper.findComponent(components.VTextField);
    expect(textField).toBeTruthy();
  });
});
