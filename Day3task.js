// 1.How to compare two json have the same properties without order

var obj1 = {"name":"Person1","age":"5"};
var obj2 = {"age":"5","name":"Person1"};

var flag=true;

if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(key in obj1) { 
        if(obj1[key] == obj2[key]) {
            continue;
        }
        else {
            flag=false;
            break;
        }
    }
}
else {
    flag=false;
}
console.log("Both objects are equal " +flag);

// 2.Declare four variables without assigning values and print them in console
var a,b,c,d;
console.log(a)
console.log(b)
console.log(c)
console.log(d) 
// These will give undefined as output since values are unassigned.

// 3.How to get value of the variable myvar as output
const myvar=11;
console.log(myvar);

// 4. Declare variables to store your first name, last name, marital status, country and age in multiple lines
var firstname="Shafeera";
var lastname="Zahur";
var maritalstatus="Married";
var country="India";
var age="22";
console.log(firstname)
console.log(lastname)
console.log(maritalstatus)
console.log(country)
console.log(age)

// 5.Declare variables to store your first name, last name, marital status, country and age in a single line
var firstname="Shafeera";
var lastname="Zahur";
var maritalstatus="Married";
var country="India";
var age=22;
let fullstring=`${firstname},${lastname},${maritalstatus},${country},${age}`
console.log(fullstring)

// 6.Declare variables and assign string, boolean, undefined and null data types
var str="FullStack Development"
var bool=false;
var undefined;
var Null=null;
console.log(`${str},${bool},${undef},${Null}`)

// 7.Convert the string to integer
var str="100"
console.log(typeof(str))
//string data type
var num=parseInt(str)
console.log(typeof(num))
//Number data type
var Integer=Number(str)
console.log(typeof(Integer))
//Number data type
var plusSign=+str;
console.log(typeof(plusSign))
//Number data type





