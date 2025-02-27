import { evalite } from "evalite";
import { Levenshtein } from "autoevals";
import { setTimeout } from "node:timers/promises";

evalite("Multiple 2", {
  data: () => {
    return [
      {
        input: "abc",
        expected: "abcdef",
      },
    ];
  },
  task: async (input) => {
    // To test whether duration is calculated properly
    await setTimeout(10);
    return input + "def";
  },
  scorers: [Levenshtein],
});
