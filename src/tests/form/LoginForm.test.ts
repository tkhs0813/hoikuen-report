import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import LoginForm from "@/components/form/LoginForm.vue";

describe("LoginForm", () => {
  it("is defined", () => {
    const wrapper = mount(LoginForm);
    expect(wrapper).toBeDefined();
  });
});
