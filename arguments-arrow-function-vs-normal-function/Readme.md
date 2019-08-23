
As arrow function can not be re binded, value of `this` depends where the `arrow function` is defined.

Similar way value of `argumnets` is special case in arrow function.

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


[<< Back to main page](https://github.com/Ghanshyam-K-Dobariya/JS-Quests)
