"use strict";
/*Start with the array you used in Exercise 11, but instead of just printing
each person’s name, print a message to them. The text of each message
should be the same, but each message should be
personalized with the person’s nam*/
let Names = ["ali", "umar", "hina", "neha"];
let message = " You are in our thoughts and prayers: ";
for (let i = 0; i < Names.length; i++) {
    console.log(message + Names[i]);
}
