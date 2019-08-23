As arrow function can not be re binded, value of `this` depends where the `arrow function` is defined.

Similar way value of `argumnets` is distinguishing case in arrow function.

```
const fun1 = () => arguments
fun1("hello")
```

Above code will result in

```
 ReferenceError: arguments is not defined
```

However we can get value of arguments passed to function in below way

```
const fun1 = (...args) => args
```
