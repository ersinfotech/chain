export default function chain(obj) {
  return {
    tap: function tap(interceptor, ...args) {
      interceptor(obj, ...args);
      return this;
    },
    thru: function thru(interceptor, ...args) {
      obj = interceptor(obj, ...args);
      return this;
    },
    value: function value() {
      return obj;
    },
  };
}
