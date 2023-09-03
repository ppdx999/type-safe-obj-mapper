const isPrimitive = (obj: unknown) => obj === null || typeof obj !== "object";

const isArray = (obj: unknown) => Array.isArray(obj);

export type StringifyByKeyName<T extends object, K extends string> = {
  [P in keyof T]: P extends K ? string
    : T[P] extends object ? StringifyByKeyName<T[P], K>
    : T[P];
};

export const stringifyByKeyName = <T extends object, K extends string>(
  obj: T,
  ...keys: K[]
): StringifyByKeyName<T, K> => {
  // deno-lint-ignore no-explicit-any
  const recurse = (obj: any) => {
    if (isPrimitive(obj)) {
      return obj;
    }

    if (isArray(obj)) {
      return obj.map(recurse);
    }

    // deno-lint-ignore no-explicit-any
    const result: any = {};
    for (const [k, v] of Object.entries(obj)) {
      if (!keys.includes(k as K)) {
        result[k] = recurse(v);
      } else {
        result[k] = JSON.stringify(v);
      }
    }
    return result;
  };

  return recurse(obj);
};
