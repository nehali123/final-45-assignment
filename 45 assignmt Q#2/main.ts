//store a personname in a variable

let personname :any= "nazish ali";

// lowercase 

console.log("lowercase:",personname.toLowerCase())

//UPPERCASE

console.log("uppercase:",personname.toUpperCase())

//TITLEcase 
//step 1
let words: string[]=personname.split(" ");

//step 2
let titlecaseName:string= " "
//step 3
 
for (let i= 0; i < words.length; i++)  {
    titlecaseName +=words[i].charAt(0).toUpperCase()+words[i].slice(1).toLowerCase() +" ";
    
}

console.log("Titlecase:" ,titlecaseName)