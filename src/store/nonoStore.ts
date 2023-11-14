import { defineStore } from "pinia";

export const useNonoStore = defineStore("nono", {
  state: () => {
    return {
      puzzle: [1, 1, 0, 1, 0, 0, 1, 1, 1, 1],
    };
  },
});
