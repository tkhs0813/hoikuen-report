import { describe, it } from "vitest";
import { mount } from "@vue/test-utils";
import BaseForm from "./BaseForm.vue";
import vuetify, { components } from "@/plugins/vuetify";

describe("BaseForm", () => {
  it("mount component", async () => {
    expect(BaseForm).toBeTruthy();

    const wrapper = mount(BaseForm as any, {
      global: {
        plugins: [vuetify],
      },
      slots: {
        default: "テキスト",
      },
    });

    const form = wrapper.findComponent(components.VForm);
    expect(form).toBeTruthy();

    expect(wrapper.text()).toContain("テキスト");
  });
});
