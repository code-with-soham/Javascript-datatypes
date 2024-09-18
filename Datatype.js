"use strict"; // treat all JS code as a newer version..

// alert("Hello") not support in Node.JS, Support Browser

//              ✅ Data Type ...

let my_string = "Hello Soham";      // 1. String
let my_Number = 10;                 // 2. Number
let is_red = true;                  // 3. Boolean (true/false)
let undefined_number;               // 4. Undefined
let temperature = null;             // 5. Null(Standalone Value)
let Cache_memory = 1023478879894;   // 6. BigInt (64-bit integer)
                                    // 7. Symbol(Unique)
                                    // 8. Object
let my_arrray = [1,2,3];            // 9. Array


//              ✅ Find datatype......

console.log(typeof(my_string));
console.log(typeof(my_Number));
console.log(typeof(is_red));
console.log(typeof(undefined_number));
console.log(typeof(Cache_memory));
console.log(typeof(my_arrray));


//              ✅ Interview question....

console.log(typeof(undefined))    // output: undefined
console.log(typeof(null))         // output: object  
