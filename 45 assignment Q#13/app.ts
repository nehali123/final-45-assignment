/*Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list 
that stores several examples. Use your list to print a series of statements about these items, such as 
“I would like to own a Honda motorcycle.”*/

 let modeofTransport : string []= ["jeep","car","bus","motorbyic"] ;
let statements : string = "I would like to own a"

 for (let i = 0; i < modeofTransport.length; i++) {
     console.log(statements + " " + modeofTransport[i])
 }
   