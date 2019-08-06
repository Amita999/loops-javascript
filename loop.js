for(let counter = 0; counter <= 10;counter ++)
{
    console.log(counter);
}

//Array

let myArray = 
[
"Hargovind",
"Manisha",
"Amita",
true,
false,
21,
1,
18
];

for(let count= 0;count<=myArray.length-1;count++)
{
    console.log((count)+" "+myArray[count]);
  //  console.log(count);
};

//for of loop - for value
for (let array of myArray){
    console.log(array);
}

//for in loop - for index

for(let index in myArray)
{
    console.log(index);
}


//for loop in <li> tag

document.write("<ul>");
for (let array1 of myArray)
{
    document.write(`<li>${array1}</li>`);
}
document.write("</ul>");