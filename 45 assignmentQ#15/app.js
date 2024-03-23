"use strict";
/*You just heard that one of your guests can’t make the dinner, so you need to send out a new
set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating
the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person
you are inviting.
• Print a second set of invitation messages, one for each person who is stil in your list*/
let guest_list = ["ali", "neha", "hina"];
let not_present = "ali";
console.log(`Sir due to some personal reason ${not_present} You will not coming tomorrow dinner`);
let new_guest = ["ushna", "mona"];
for (let i = 0; i < new_guest.length; i++) {
    console.log('Respected Sir/Madam ' + new_guest[i] + ',\nwe invited you on dinner tomorrow.\n\nThank You');
}
