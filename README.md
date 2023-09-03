# Type Safe Object Mapper

# Install

```sh
$ npm i type-safe-obj-mapper 
```

# Usage

```ts
import {stringifyByKeyName, StringifyByKeyName} from 'type-safe-obj-mapper'

const before = {
 a: 1,
 b: {
   c: 2,
   d: {
     e: 3,
   },
 },
};

const after = {
  a: 1,
  b: {
    c: "2",
    d: {
      e: "3",
    },
  },
};

stringifyByKeyName(before, "c", "e") == after
// This method is typsafe. It means the expression below is satisfied
// type StringifyByKeyName<typeof obj, "c" | "e"> == typeof after
```
