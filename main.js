alert('Hi essence');

//Compilation error:if the code has some characters or etc.
//@

//Runtime error:since test is not defined
//console.log(test)

//Logical error:if people don't write a number!

let number = prompt('Please give me a number')
console.log(parseInt(number) * 5);

const test = (arrayParam) => {
   //The debugger statement invokes any available debugging functionality,
   //such as setting a breakpoint.
   //If no debugging functionality is available,this statement has no effect.
    //debugger;
   if (Array.isArray(arrayParam)) {
    const testResult = arrayParam.map(item => item.toUpperCase())
    return testResult;
   } else {
       console.error('Test function only accepts array type of data.');
   }
   
}

console.log(test(['Hello Essence','hhhh','we rae learning error']));
console.log(test(123)); //Uncaught TypeError: arrayParam.map is not a function

/////////////
/*Debugger is a tool and below 3 has own debuggers:
   1.Browsers
   2.Vs Code or most of the developer editors
   3.Node JS itself (node inspect)
   */


   //try and catch
   //Syntax

   try {
     //Code goes here to be executed
   } catch (error) {
     // If there'd be error with the code in the try then code on here will be executed
   }

   //  alert(Anne) ;app crashes and the rest of the code will not be executed
   //ReferenceError: Anne is not defined 
   try {
       alert(Anne)
   } catch (error) {
       alert('Something went wrong!')
       console.log(error);
   } finally { // Does not matter try or catch worked but finally always works!
       console.log(`'finally' is done`);
   }

    //Don't stop the application
    console.error(`Whoops! Something went wrong`);
    console.warn(`Heyyy! Are you there`);
   
    //throw 'App is stopped'; // Throw the error and stop the application

    const err = new Error('Testing a new object!')

    //Console.error(err); // App continues

    //throw err; // App crashes

   alert('Application is over!');


