# mapSwitch

A JavaScript function that provides a map-based alternative to switch statements.

## Installation

You can install mapSwitch via npm:
```
npm install map-switch
```

## Usage

`switchMap` allows you to define a mapping between input values and functions to be executed when those values are matched. Here's an example usage:

```
const mapSwitch = require('map-switch');

const myMap = {
  "case1": function() { console.log("Case 1"); },
  "case2": function() { console.log("Case 2"); },
  "default": function() { console.log("Default case"); }
};

const mySwitchMap = mapSwitch(myMap);
mySwitchMap("case1"); // Output: "Case 1"
mySwitchMap("case3"); // Output: "Default case"
```

In this example, we're creating a myMap object that maps string keys to functions. We're then passing this myMap object to mapSwitch to create a mySwitchMap function. We can then call mySwitchMap with a key to execute the corresponding function.

If the key matches one of the keys in the myMap object, the corresponding function will be executed. If the key does not match any of the keys in the myMap object, the default case will be executed.

## API
### mapSwitch(map)


## Limitations

While `switchMap` can handle many of the same use cases as a traditional switch statement, there are some scenarios where a switch statement may be more appropriate or easier to use. For example, switch statements can handle complex conditions, fall-through cases, and default cases with additional behavior.

## Contributing

If you find a bug or would like to suggest a new feature, please open an issue on the `switchMap` GitHub repository. Pull requests are also welcome!

## License

`switchMap` is released under the MIT License. See `LICENSE` for details.