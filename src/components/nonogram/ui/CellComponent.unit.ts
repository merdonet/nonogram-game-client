import { mount } from "@vue/test-utils";
import CellComponent from "./CellComponent.vue";

describe("CellComponent", () => {
  test("should mount component", () => {
    const wrapper = mount(CellComponent);

    expect(wrapper).toBeDefined();
    expect(1 == 1).toBe(true);
  });
});
