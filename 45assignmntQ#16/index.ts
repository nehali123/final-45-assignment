/*You just found a bigger dinner table, so now more space is available. Think of three more guests 
to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing 
people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.*/
let guest_list: string[]= ["ali","neha","hina"]

import { log } from "console";
let not_present : string = "ali";
let new_guest: string[]= ["hania"];

for (let i = 0; i < guest_list[1].length; i++){
    console.log('Respected Sir/Madam ' + guest_list[i] + ',\nwe invited you on dinner tomorrow.\n\nThank You');
    }

//add at first


//add at middle

  guest_list.unshift('umar','alaya',"eshal");


   for (let i = 0; i < guest_list.length; i++){
    console.log('Respected Sir/Madam'+ guest_list[i] + ',\nwe invited you on dinner tomorrow.\n\nThank You');
    }



