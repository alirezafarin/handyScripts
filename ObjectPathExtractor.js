import { set } from "lodash";

const en = {
  test1: "1",
  test2: "2",
  test3: {
    test4: "4",
    test5: "5",
    test6: {
      test7: "7",
      test8: "8",
      test9: {
        test10: "10",
        test11: "11",
        test12: {
          test13: "13",
          test14: "14",
        },
      },
    },
  },
};

const extractStringValues = (enteries, path = "") => {
  enteries.forEach((entry) => {
    const key = entry[0];
    const value = entry[1];

    const typeOfValue = typeof value;
    if (typeOfValue === "string") {
      // update the object with new value
      set(en, `${path}${key}`, value + 10);
      // add . to the end of the path, if it doesn't already have it.
      if (path.length > 0 && path[path.length - 1] !== ".") {
        path = `${path}.`;
      }
      return;
    } else if (typeOfValue === "object") {
      const newEnteries = Object.entries(value);
      extractStringValues(newEnteries, `${path}${key}.`);
    }
  });
};

export default function execution() {
  const enteries = Object.entries(en);

  extractStringValues(enteries);
}
