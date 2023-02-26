import { describe, it } from "vitest";
import { mount } from "@vue/test-utils";
import BaseLink from "./BaseLink.vue";
import vuetify from "@/plugins/vuetify";

describe("BaseLink", () => {
  it("mount component", async () => {
    expect(BaseLink).toBeTruthy();

    const wrapper = mount(BaseLink as any, {
      global: {
        plugins: [vuetify],
      },
      props: {
        to: "",
      },
      slots: {
        default: "リンク",
      },
    });

    expect(wrapper.text()).toContain("リンク");
  });
});
