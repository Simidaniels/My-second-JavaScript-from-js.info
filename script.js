         // THE ALERT FUNCTION //

// alert('Hello Daniel'); alert('Your gaming system is up an running');
// alert(3 + 5 + 2); // console output will be 10.
// [1,5].forEach(alert); // the forEach here would make the alert here display 1 by 1.
// ['Hello Daniel', 'your gaming system is up and running'].forEach(alert); // we can also do it this way for instead of doing it in line 1.

// 'use strict'; // this would work in modern way(using strict must be at the top of the javascript page). only comments can appear above the modern way.

/*
    The question may sound obvious, but it’s not so.
    One could recommend to start scripts with "use strict"… But you know what’s cool?
    Modern JavaScript supports “classes” and “modules” – advanced language structures (we’ll surely get to them), that enable use strict automatically. So we don’t need to add the "use strict" directive, if we use them.
    So, for now "use strict"; is a welcome guest at the top of your scripts. Later, when your code is all in classes and modules, you may omit it.
    As of now, we’ve got to know about use strict in general.
    In the next chapters, as we learn language features, we’ll see the differences between the strict and old modes. Luckily, there aren’t many and they actually make our lives better.
A   ll examples in this tutorial assume strict mode unless (very rarely) specified otherwise.
*/

                                    // VARIABLES //
            /*
                The var keyword is almost the same as let. It also declares a variable, but in a slightly different, “old-school” way.
                    There are subtle differences between let and var, but they do not matter for us yet. We’ll cover them in detail in the chapter The old "var".
            */

// Most of the time, a JavaScript application needs to work with information.
let message;    // the word 'message has been assigned to the variable.

message = 'hello';  // define the variable and assign the value.

console.log(message);

            // we can also assign values too //

let amount;

amount = 2 + 3 + 5;

console.log(amount);

            // we can also declare multiple variables //

let name = 'Daniel', 
    age = 20,
    text = 'I love coding';

console.log(text);


         // Declaring variable twice //
/*
        Declaring twice triggers an error
        A variable should be declared only once.s
    A repeated declaration of the same variable is an error:
        let message = "This";
    repeated 'let' leads to an error
        let message = "That";   // SyntaxError: 'message' has already been declared.
    So, we should declare a variable once and then refer to it without let.
*/

            // Variable Naming //
        /*
            There are two limitations on variable names in JavaScript:
                1. The name must contain only letters, digits, or the symbols $ and _.
                2. The first character must not be a digit.

            Examples of valid names:
                1. let userName;
                2. let test123;
        */
        /*
            When the name contains multiple words, camelCase is commonly used. 
            That is: words go one after another, each word except first starting with a capital letter: myVeryLongName.
            What’s interesting – the dollar sign '$' and the underscore '_' can also be used in names. 
            They are regular symbols, just like letters, without any special meaning.
        */
                        // These names are valid:
let $ = 1;              // declared a variable with the name "$"
let _ = 2;              // and now a variable with the name "_"
console.log($ + _);     //output would be added = 3.
        /*
            Examples of incorrect variable names:
                let 1a;             // cannot start with a digit
                let my-name;        // hyphens '-' aren't allowed in the name.
        */

            // Case matters; Variables named 'apple' and 'APPLE' are two different variables.

         /*
            Reserved names;
                There is a list of reserved words, which cannot be used as variable names because they are used by the language itself.
                For example: 'let', 'class', 'return', and 'function' are reserved.
                The code below gives a syntax error:
                    let let = 5;               // can't name a variable "let", error!
                    let return = 5;            // also can't name it "return", error!
         */



                    // An assignment without 'use strict'
         /*
            Normally, we need to define a variable before using it.
            But in the old times, it was technically possible to create a 
            variable by a mere assignment of the value without using let. 
            This still works now if we don’t put use strict in our scripts 
            to maintain compatibility with old scripts.
         */
num = 15;           // My 'use strict' has been deactivated while the variable 'num' is created if it didn't exist. 
console.log(num);
        

                    // Constants //
         /*
            To declare a constant (unchanging) variable, use const instead of let:
                    const myBirthYear = '2002';
            Variables declared using const are called “constants”. 
            They cannot be reassigned. An attempt to do so would cause an error:
                    const myBirthYear = '2002';
                    myBirthYear = '2002';       // This cannot be reassigned it will cause an error.
            When a programmer is sure that a variable will never change, they can 
            declare it with const to guarantee and clearly communicate that fact to everyone.
         */


                    // Uppercase Constants //
         /*
            There is a widespread practice to use constants as aliases for difficult-to-remember values that are known prior to execution.
            Such constants are named using capital letters and underscores.
                For instance, let’s make constants for colors in so-called “web” (hexadecimal) format:
         */
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";
// ...when we need to pick a color
let color = COLOR_ORANGE;
console.log(color); // #FF7F00 will display in the console.

         //BENEFITS:
    // 1. COLOR_ORANGE is much easier to remember than "#FF7F00".
    // 2. It is much easier to mistype "#FF7F00" than COLOR_ORANGE.
    // 3. When reading the code, COLOR_ORANGE is much more meaningful than #FF7F00.

// QUESTION: When should we use capitals for a constant and when should we name it normally? Let’s make that clear.
// ANSWER: Being a “constant” just means that a variable’s value never changes. 
        // But there are constants that are known prior to execution (like a hexadecimal value for red) 
        // and there are constants that are calculated in run-time, during the execution, 
        // but do not change after their initial assignment.
// for instance:
        const pageLoadTime = '3000'; // Time taken by a webpage to load.
    /*
        The value of pageLoadTime is not known prior to the page load, 
        so it’s named normally. But it’s still a constant because it doesn’t change after assignment.
        In other words, capital-named constants are only used as aliases for “hard-coded” values.
    */

            // NAME THINGS RIGHT //
        /*
            Talking about variables, there’s one more extremely important thing.
            A variable name should have a clean, obvious meaning, describing the data that it stores.
            Variable naming is one of the most important and complex skills in programming.
            A quick glance at variable names can reveal which code was written by a beginner versus an experienced developer.
            In a real project, most of the time is spent modifying and extending an existing code base rather than writing 
            something completely separate from scratch. When we return to some code after doing something else for a while, 
            it’s much easier to find information that is well-labeled. Or, in other words, when the variables have good names.
            Please spend time thinking about the right name for a variable before declaring it. Doing so will repay you handsomely.
        
            Some good-to-follow rules are:
                1. Use human-readable names like 'userName' or 'shoppingCart'.
                2. Stay away from abbreviations or short names like 'a', 'b', 'c', unless you really know what you’re doing.
                3. Make names maximally descriptive and concise. Examples of bad names are 'data' and 'value'.
                    Such names say nothing. It’s only okay to use them if the context of the code makes it 
                    exceptionally obvious which data or value the variable is referencing.
                4. Agree on terms within your team and in your own mind. If a site visitor is called a “user” then we should name
                    related variables 'currentUser' or 'newUser' instead of 'currentVisitor' or 'newManInTown'.

                    Modern JavaScript minifies and browsers optimize code well enough, so it won’t create performance issues. Using 
                    different variables for different values can even help the engine optimize your code.
        */





                    // DATA TYPES //
        /*
            A value in JavaScript is always of a certain type. For example, a string or a number.
            There are eight basic data types in JavaScript. 
            Here, we’ll cover them in general and in the next chapters we’ll talk about each of them in detail.
            We can put any type in a variable. For example, a variable can at one moment be a string and then store a number:

                    let message = "hello";      
                    message = 123456;           // No error in the console.
            
            Programming languages that allow such things, such as JavaScript, are called “dynamically typed”, 
            meaning that there exist data types, but variables are not bound to any of them.
        */

                        // Number //
        /*
                    let n = 123;
                    n = 12.345;
            The number type represents both integer and floating point numbers.
            There are many operations for numbers, e.g. multiplication '*', 
            division'/', addition'+', subtraction'-', and so on.
            Besides regular numbers, there are so-called “special
            numeric values” which also belong to this data type: Infinity, -Infinity and NaN(Not a Number).

            Infinity represents the mathematical Infinity ∞. It is a special value that’s greater than any number.
            We can get it as a result of division by zero:
                        console.log( 1 / 0);        // infinity.
                OR we could just reference it directly;
                        console.log(infinity);

            'NaN' is sticky. Any further mathematical operation on 'NaN' returns 'NaN':
                    console.log( NaN + 1 );                   // NaN
                    console.log( 3 * NaN );                   // NaN
                    console.log( "not a number" / 2 - 1 );    // NaN

                OR we can also reference it as;
                    console.log(0 / 0);  // NaN

                So, if there’s a NaN somewhere in a mathematical expression, 
                it propagates to the whole result (there’s only one exception to that: NaN ** 0 is 1).
        
            NB: Mathematical operations are safe
                Doing maths is “safe” in JavaScript. 
                We can do anything: divide by zero, treat non-numeric strings as numbers, etc.
                The script will never stop with a fatal error (“die”). At worst, we’ll get NaN as the result.
        */

                        // BigInt //
        /*
            In JavaScript, the “number” type cannot safely represent integer values larger than (253-1) 
            (that’s 9007199254740991), or less than -(253-1) for negatives.
            To be really precise, the “number” type can store larger integers 
            (up to 1.7976931348623157 * 10308), but outside of the safe integer range ±(253-1) 
            there’ll be a precision error, because not all digits fit into the fixed 64-bit storage. 
            So an “approximate” value may be stored.

                For example, these two numbers (right above the safe range) are the same:
                    1. console.log(9007199254740991 + 1);    // 9007199254740992
                    2. console.log(9007199254740991 + 2);   // 9007199254740992

            So to say, all odd integers greater than (253-1) can’t be stored at all in the “number” type.
            For most purposes ±(253-1) range is quite enough, but sometimes we need the entire range of 
            really big integers, e.g. for cryptography or microsecond-precision timestamps.
            BigInt type was recently added to the language to represent integers of arbitrary length.
            A BigInt value is created by appending n to the end of an integer:
                    // the "n" at the end means it's a BigInt
                        const bigInt = 1234567890123456789012345678901234567890n;
        */

                        // String //
            // A string in JavaScript must be surrounded by quotes.//
        /* 
            let str = "Hello";
            let str2 = 'Single quotes are ok too';      //preferably single quotes
            let phrase = `can embed another ${str}`;

            In JavaScript, there are 3 types of quotes.
                    1. Double quotes: "Hello".
                    2. Single quotes: 'Hello'.
                    3. Backticks: `Hello`.

                Double and single quotes are “simple” quotes. There’s practically no difference between them in JavaScript.
                        Backticks are “extended functionality” quotes. 
                        They allow us to EMBED variables and expressions into a string by wrapping them in ${…}, for example:
        */
let nom = 'Daniel';
// Embed a variable
console.log(`Hello, ${nom}!`);  // The variable has been embedded
// Embed an expression
console.log(`the result is ${5 + 5}`); // 'the result is 10' displaying in the console.
        /*
            The expression inside ${…} is evaluated and the result becomes a part of the string. 
            We can put anything in there: a variable like name or an arithmetical expression like 1 + 2 or something more complex.
            NOTE: that this can only be done in backticks. Other quotes don’t have this embedding functionality!
        */


                    // Boolean (logical type) //
                // The boolean type has only two values: TRUE and FALSE.
        /*
            This type is commonly used to store yes/no values: true means “yes, correct”, and false means “no, incorrect”.
            For instance:
        */
let nameFieldChecked = true;    // yes, nae field is checked.
let ageFieldChecked = false;    // no, age field is not checked.

         //Boolean values also come as a result of comparisons:

let isGreater = 5 > 2;
console.log(isGreater); // Definitely 5 is greater than 2. TRUE output

let isSmaller = 2 > 6;
console.log(isSmaller); // 2 is not greater than 6. FALSE output.


                        // The “null” value
            // The special null value does not belong to any of the types described above.
            // It forms a separate type of its own which contains only the null value:
let adultHood = null;
console.log(adultHood);
        /*
            In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages
            It’s just a special value which represents “nothing”, “empty” or “value unknown”.
            The code above states that age is unknown.
        */

                               // The “undefined” value
            /*
                The special value undefined also stands apart. It makes a type of its own, just like null.
                The meaning of undefined is “value is not assigned”.
                If a variable is declared, but not assigned, then its value is undefined:
            */
let ago;                 // No assigned value
console.log(ago);       // Console output undefined because 'value isn't assigned to the variable'.

            // Technically, it is possible to explicitly assign undefined to a variable:

let span = 100;     // value was assigned to the variable.
span = undefined;   // Undefined has been assigned explicitly 
console.log(span);

                /* …But we don’t recommend doing that.
                    Normally, one uses null to assign an “empty” or “unknown” value to a variable, 
                    while undefined is reserved as a default initial value for unassigned things.
                */

                        // Objects and Symbols //
                /*
                    The object type is special.

                    All other types are called “primitive” because their values can contain 
                    only a single thing (be it a string or a number or whatever). In contrast, 
                    objects are used to store collections of data and more complex entities.
        
                    Being that important, objects deserve a special treatment. 
                    We’ll deal with them later in the chapter Objects, after we learn more about primitives.

                    The symbol type is used to create unique identifiers for objects. 
                    We have to mention it here for the sake of completeness, but also postpone the details till we know objects.
                */

                        // The typeof operator //
                /*
                    The 'typeof' operator returns the type of the argument. it's useful when we want to process values
                    of different types differently or just want to do a quick check.

                    A call to typeof x returns a string with the type name:
                */
typeof undefined // 'undefined'
typeof 0 // 'number'
typeof 10n // 'bigint'
typeof true // 'boolean'
typeof foo // 'string'
typeof Symbol('id') // 'symbol'

typeof math // 'object'
typeof null // 'object'
typeof alert // 'function'

                        // The last three lines may need additional explanation:
                    /*
                        1.  Math is a built-in object that provides mathematical operations. 
                            We will learn it in the chapter Numbers. Here, it serves just as an example of an object.
                        2.  The result of typeof null is "object". 
                            That’s an officially recognized error in typeof, coming from very early days of JavaScript and kept for compatibility. 
                            Definitely, null is not an object. It is a special value with a separate type of its own. The behavior of typeof is wrong here.
                        3.  The result of typeof alert is "function", because alert is a function. 
                            We’ll study functions in the next chapters where we’ll also see that there’s no special “function” type in JavaScript. 
                            Functions belong to the object type. But typeof treats them differently, returning "function". 
                            That also comes from the early days of JavaScript. Technically, such behavior isn’t correct, but can be convenient in practice.
                    */


                                            // iNTERACTION: ALERT, PROMPT AND CONFIRM //
                        //  As we’ll be using the browser as our demo environment, let’s see a couple of functions to interact with the user: alert, prompt and confirm.


                                // ALERT      // Alert as been done from the top already. //
                    /*
                        The mini-window with the message is called a modal window. 
                        The word “modal” means that the visitor can’t interact with the rest of the page, 
                        press other buttons, etc, until they have dealt with the window. In this case – until they press “OK”.
                    */

                                // PROMPT //
                            // The function prompt accepts two arguments:
                // result = prompt(title, [default]);       //I don't know why this is not running here
                                                            //But it shows a modal window with a text message, 
                                                            //an input field for the visitor, and buttons OK/Cancel.
                    /*
                        The visitor can type something in the prompt input field and press OK. Then we get that text in the result. 
                        Or they can cancel the input by pressing Cancel or hitting the Esc key, then we get null as the result.
                        The call to prompt returns the text from the input field or null if the input was canceled.
                    */
                            // for Instance:
// let myAge = prompt('How old are you?', 20);

// console.log(`You are ${myAge} years old!`);   // You are 100 years old!   (Embedded with backticks)
    // alert('you are' + myAge + 'years old');     // Another way to run it

                    /*
                        In IE: always supply a 'default'.
                        The second parameter is optional, but if we don’t supply it, Internet Explorer will insert the text "undefined" into the prompt.
                        Run this code in Internet Explorer to see:
                    */
        // let test = prompt('Test');    

// let test = prompt('Test', '');      // <-- for IE. (Recommend putting a second parameter).
 

                            // CONFIRM //
                    // The syntax;
                // My declared example, not in the documentation.
let BTC, ETH;

BTC = 21346;           // Used Bitcoin price at that moment.
ETH = 32188            // Used Ethereum price at that moment.

// result = confirm(BTC);        // Something must be declared.
                        // All 'CONFIRM' syntax test was from me not in the documentation.
                    /*
                        The function confirm shows a modal window with a question and two buttons: OK and Cancel.
                        The result is true if OK is pressed and false otherwise.
                        For example:
                    */
// let isBoss = confirm("Are you the boss?");

// alert(isBoss);              // true if OK is pressed
                        /*
                                    Summary
                            alert: shows a message.
                            prompt: shows a message asking the user to input text. 
                                    It returns the text or, if Cancel button or Esc is clicked, null.
                            confirm: shows a message and waits for the user to press “OK” or “Cancel”. 
                                    It returns true for OK and false for Cancel/Esc.
                                    All these methods are modal: 
                                        they pause script execution and don’t allow the visitor to 
                                        interact with the rest of the page until the window has been dismissed.
                        */






                                    // TYPE CONVERSATIONS //
                        /*
                            Most of the time, operators and functions automatically convert the values given to them to the right type.
                            For example, 'alert' automatically converts any value to a string to show it.
                            Mathematical operations convert values to numbers.
                            There are also cases when we need to explicitly convert a value to the expected type.
                        */

                                    // STRING CONVERSION //
                        /*
                            String conversion happens when we need the string form of a value.
                            For example, alert(value) does it to show the value.
                            We can also call the String(value) function to convert a value to a string:
                        */
let value = true;   // Boolean.
// alert(typeof value);

value = String(value);      // now the value is a string 'true'
// alert(typeof value);  // string.
                        // String conversion is mostly obvious. A false becomes "false", null becomes "null", etc.

                                    // Numeric Conversation //
                        /*
                            Numeric conversion happens in mathematical functions and expressions automatically.
                            For example, when division / is applied to non-numbers:
                        */
console.log("16" / "2");               // 8 is displayed in the console, strings are converted to numbers.























