# chain

Chaining lodash individual method

## Usage

```js
import chain from 'chain';
import flatten from 'lodash/array/flatten';
import compact from 'lodash/array/compact';
import map from 'lodash/collection/map';

var list = [
  [1, null, 2],
  null,
  3
];

var result = chain(list)
  .thru(flatten)
  .thru(compact)
  .tap(d => console.log(d)) // [1, 2, 3]
  .thru(map, d => d + 1)
  .value() // [2, 3, 4]
```

## License

MIT
