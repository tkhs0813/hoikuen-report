import { describe, it } from "vitest";
import { mount } from "@vue/test-utils";
import BaseCheckbox from "./BaseCheckbox.vue";
import vuetify, { components } from "@/plugins/vuetify";

describe("BaseCheckbox", () => {
  it("mount component", async () => {
    expect(BaseCheckbox).toBeTruthy();

    const wrapper = mount(BaseCheckbox as any, {
      global: {
        plugins: [vuetify],
      },
    });

    const checkbox = wrapper.findComponent(components.VCheckbox);
    expect(checkbox).toBeTruthy();
  });
});
