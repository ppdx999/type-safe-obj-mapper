import { assertEquals } from "https://deno.land/std@0.200.0/assert/mod.ts";
import { stringifyByKeyName } from "./obj-mapper.ts";

const test = Deno.test;

test("stringifyByKeyName", () => {
  const obj = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3,
      },
    },
  };

  const actual = stringifyByKeyName(obj, "c", "e");
  const expected = {
    a: 1,
    b: {
      c: "2",
      d: {
        e: "3",
      },
    },
  };

  assertEquals(actual, expected);
});
