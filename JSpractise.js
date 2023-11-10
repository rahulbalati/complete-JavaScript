/**  Values and variables **/
//var myname=false
//console.log(myname)
/*these are case Sensistive
first must be $,_ no other character
no spaces between variable name
no special characters
can't use reseved variable name */

/*======================================================================================================== */

/* DATA TYPES IN JAVASCRIPT */

/*1.undefined
  2.Boolean
  3.Number
  4.String
  5.BigInt
  6.Symbol */
  //console.log(typeof(myname))

  /* Question 1.null vs undefined */
  /* Question 2.NAN-It is property a global object is defines as not a number*/

 // console.log(NaN===NaN)
  //console.log(isNaN(NaN))

  /*=======================================================================================================*/

/*  IMPORTant OPERATIONS */
//var x=5;
//var y=5;
//basic operations +,-,*,/ called arithematic operations
//>,<,== called comparison operators
//logical operators && if both values are true return true ,|| quite oposite any one true returns true
//console.log("this "+x==y);  //returns false
//console.log(x==y) //returns  true


//correct way
//console.log(`check +${x==y}`)
//var num=5;
//var newNum=num++ +5;         //post increment first value prints lateer increments original value incremented last
//console.log(newNum)
//var anNum=++num+5;           //pre increment first value incremented later prints original value incremented first
//console.log(anNum);

//var a=1;
//var b=a==5?true:false;         //ternanry operator
//console.log(b)
  
/*Question 3: difference b/w == and === */
//var a=5;
//var b='5';
//console.log(a==b)
//console.log(a===b)      //checks both value as well as data type

/*=====================================================================================================*/ 

/*CONTROL STATEMENT AND LOOPS */
//0,"",undefined,null,NAN,false** is falsy
// var score=5;

// if(score=6){            //if used assignment operator no mistake & no matter except falsy values then only if condition runs
//     console.log("yes")
// }else{
//     console.log("no")
// }
//switch same as JAVA switch
// var num=0;
// while(num<=10){
     
//     console.log(num)
//    num++;
// }
// for(var num=0;num<=5;num++){
//     debugger;
//     console.log(num)
// }

/*==================================================================================================== */
/*FUNCTONS IN JAVASCRIPT */
// function  sum() {
//     var a=10,b=20
//     console.log(a+b)         
    
// }
// sum();

/*Difference between function parameter and function arguement
function parameter=a values passed in function defination
function arguement=actual value passed while calling the function */
// function sum(a,b){         //in js we cannot pass datatype in parameter
//     console.log(a+b)
// }
// sum(10,2)

/*Why FUNCTIONS */ 

/*anonymous function*/
// var funExp=function(a,b){
//     return a+b;
// }
// console.log(funExp(5,5))

/*======================================================================================================= */

/*ES6==EcmaScript 6 -2015 */
/*New Features are */

//Question.1- LET VS CONST VS VAR
// var name="rahul";       //we can re-declare  and reassign in var
// var name="balati";
// console.log(name)


// let name="rahul";       //we cannot re-declare  but we can  reassign in let
//  name="balati";
// console.log(name)

// const name="rahul";       //we cannot re-declare  and reassign in const Similar to Final Keyword in java
//  name="balati";
// console.log(name)

//var => functional Scope
//let and const => Block Scope

/* 2.TEMPLATE LITERALS  or STRING LITERALS*/

//in case to make easy in place of normal concatenation we can use string literals

// var firstName="rahul"
// var secondName="balati"
// var age=10;
// console.log("my full name is "+firstName+" "+secondName+ " age is"+age)
// console.groupCollapsed(`my full name is ${firstName} ${secondName} age is ${age}`) //using sting literal

/*3.Default Parameters*/

// function mul(a=2,b=1){         //in case if user forgets to give paramters
//     return a*b;
// }
// console.log(mul(5,3))

/* 4. ARROW FUNCTIONS */

// const sum=()=>{
//     let a=10
//     let b=20
//     return a+b
// }
// console.log(sum())
//before defining can't use it i.e u can't call first
// const sum=()=>5+6; //if one line no need to write return
// console.log(sum())

/* Introduction of (for in) and (for of) loop*/
//details refer below in array part



/*=============================================================== */

/*ARRAYS  */
// var myData=[10,20,30]       //in js array is object can store all kinds of data   
// console.log(typeof(myData))

//1.Traversing of array
// var myData=[10,20,30]
// var num=10;
// for(var  i=0;i<myData.length;i++){
//     if(num==myData[i]){
//          console.log("yes")
         
//     }else{
//         console.log("no")
//     }
   
// }

//for-in loop gives index number within loop
// for(let elements in myData){
//     console.log(elements)
// }

//for-of gives element i.e values 
// for(let elements of myData){
//     console.log(elements)
// }


//for-each  
// myData.forEach(function (element,index) {      //this keyword not works
//     console.log(element+" "+index+" ")
    
// })
// myData.forEach((element,index)=>{             //this works here
//     console.log(index)
// })

//2.searching and filter 

// console.log(myData.indexOf(100))//returns the first occurence
// console.log(myData.lastIndexOf(10))    //returns last pccurence if duplicate values present
// console.log(myData.includes(10))     //checks wheather the data is present or not

//find gives only first vaklue for satisfied condition
// const ele=myData.find((value)=>{
//  return value>40                  //if condition fails gives undefined
// })
// console.log(ele)


//filter gives an array whose values satisfies the given condition
// const newTag=myData.filter((element,index,array)=>{
//     return element<=20
// }) 
// console.log(newTag)

/*3.sorting */
//sort method converts number to strings and then sorts it based on ascending alphabet order

// var newData2=[100,20,40,25]
// console.log(newData2)

/*4.Perform CRUD*/

// var newData=["cow","dog","monkey"]
// newData.push("chicken")                    //PUSH==used to add elements at the end of the array
// console.log(newData)

// newData.unshift("chicken")
// console.log(newData)                         //UNSHIFT = used to add elements at the begining of the array

// newData.pop()                                   //pop = used to delete at the end of the array
// console.log(newData)

// newData.shift()                                //shift = used to delete the begining of the array 
// console.log(newData)

//SPLICE METHOD

// newData.splice(newData.length-2,1,'chicken')      //to perform all crud operations
// console.log(newData)

// var index=newData.indexOf('dog')                  //if index is unknown 
// newData.splice(index,1)
// console.log(newData)

//5.MAP AND REDUCE

//similar to forEach but difference is we can chain map and it returns new Array but forEach returns undefined and can't be chained

// var myData=[1,3,5,9,12]
// let newMapData=myData.map((curr,index,arr)=>{       
//   return `${curr} ${index} ${arr}`
// })
// console.log(myData)
// console.log(newMapData)            //map returns new boolean array satifing condition and forEach returns undefined

// let arr=[2,3,4,6,8]
// let newArr=arr.map((curr)=>{
//   return curr*2;
// }).filter((curr)=>{
//   return curr>10;
// }).reduce((accu,ele)=>{            //used  to covert 2d-3d to 1-d also performs add,mult,div to filtered 
//   return accu+=ele;
// })
// console.log(newArr)

//reduce method is used to fatten the 2d,3d to 1d but it fails for nested array but after ES2020 it is not used 

// let arr=[["zone1","zone2"],["zone3","zone4"]
//          ];
// let flattenArr=arr.reduce((accu,elem)=>{
//   return accu.concat(elem)
// })
// console.log(flattenArr)


/* STRINGS IN JS */

//var myBio="my name is rahul";       
// const newBio=myBio.indexOf("rahul")                 //search based on index
// console.log(newBio)

// const newBio=myBio.search("rahul")                    
// console.log(newBio)

//Extracting String part
// let res=myBio.slice(0,10)
// console.log(res)

//difference between slice and substring slice can take negative value but substring cannot if we give negative to substring it counts the character from 0 index

// let res=myBio.replace('rahul','Rahul')    replaces only first occurence
// console.log(res)

//Extracting each character in string

//  let Data="RAHUL BALATI"
// // let Extrchar=Data.charAt(0)             //returns character at given index
// // let ExtractChar=Data.charCodeAt(0)      //returns unicode i.e UTF-18
// // console.log(Extrchar)
// // console.log(ExtractChar)
// console.log(Data[2])                       //property access 
// let UseSpilt="this is rahul balati the future billionare"
// console.log(UseSpilt.split("h"))

/*timeand object */

// let currDate=new Date();
// console.log(currDate)
// console.log(new Date().toLocaleString())              //represents in way as we represents

// console.log(Date.now())              //total milliseconds from jan 1, 1970
// 7 parameters specify year,month,day,hour,minute,second and millisecond

// var d=new Date(2027,5,10,15,25,1300)
// console.log(d)

// //only date
// console.log(new Date().toDateString())
// //only time
// console.log(new Date().toLocaleTimeString())

// //both time and date
// console.log(new Date().toLocaleString())


/*MATH OBJECT */
// console.log(Math.PI)
// var d=88.5
// console.log(Math.round(d))            //if 0.5 and > rounds to next opposite vice-versa
// console.log(Math.pow(2,5))               //exponent
// console.log(Math.ceil(-44.1))              //returns the next integer no. 
 //console.log(Math.floor(-44.9))            //returns the previous integer no.
// console.log(Math.max(0,99,270))             //finds maximum in java takes only two arguements
// console.log(Math.sqrt(99))
// console.log(Math.abs(2-4))                   //after result if negative value neglects the sign
// console.log(Math.trunc(-23.5))                 //returns only integer  part neglects the decimal point

//if arguement is positive then Math.trunc() works like floor and if negative works like ceil


/***** DOCUMENT OBJECT MODEL (DOM) *******/

//Document is the object of the window(global object)
//innerheight and innerwidth aare some properties of window 

//BOM(BROWSER OBJECT MODEL):it deals with navigator,screen,location,frames,history etc 
//alert,confirm,prompt are also part of BOm

// alert(location.href);
// if(confirm("want to visit youtube")){               //paste it in console log
//   location.href="https://www.youtube.com";
// }

//DOM
/*************************NOTE:-BELOW COMMANDS RUN IN CONSOLE OF ANY SITE ******************************/
  //html -- root element
  // document.documentElement      //to find root element
 // later comes head and body
// head contains title,link as child and body contains a href,p,h1 as childs

//to find child nodes 
// document.body.childNodes
//it also includes text which basically contains enter,tab,etc

//to get actual elements leaving the text use-
//document.children

//To check wheather an element has child nodes for not use-
// document.hasChildNodes()

// const first=document.body.firstElementChild               //Note: click inspect andrun in console of any site
//const first=document.body.firstChild                      //selects the text as it is also included as child
// first.style.backgroundColor="red"


//preferred way
// const something=document.querySelector('.central-textlogo')
// something.style.backgroundColor="green"

//siblings
//next-siblings and previous siblings next of head is body

//####################### NOTE-if use nextSibling,nextNode etc if no element in method then it considers 
//text as also a child  so use such methods containing element in it to get desired output
// const headSibling=document.head.nextElementSibling
// headSibling.style.backgroundColor="grey"
// document.getElementsByClassName()                   //using class name we can fetch


/*EVENT HANDLERS */
//anything what browser does or any changes are called events

//4 ways of writing events
//1.using inline events alert();
//2.by calling a function
//3.using inline events(HTML onClick="")
//4.using event listener i.e add eventlistner

///to get a detail we build many projects

//difference between onclick and eventListener
//1.onclick ovverides but eventlistener cannot
//2.addEventlistener doesnot work in internet explorer


//mouse events and kewyboard events are some other  we will see in project implementation

/********* JS TIMING EVENTS ************ */

//setTimeout();
// setInterval();
// clearTimeout();
// clearInterval();


//this refers to current object
// console.log(this)
//it refers to current contenst that is window object

/******************************* Some More features ECMASCRIPT 2015 ************************************************/

// let myData=['rahul','balati','meena']          
//before we use to describe like this
// let myname=myData[0];
// let mylast=myData[1];
// let mygf=myData[2];
// console.log(myname)

//now
// let[myname,mylast,mygf]=myData;
// console.log(mylast)
// let[myname,mylast,mygf="dkjh"]=myData;       //can't redeclare 
// console.log(mygf)

// const myBiodata={
//   myFname:'vinod',
//   myLname:'balati',
//   myAge:26

// }
// let{myFname,myLname,age}=myBiodata;               //if you give athor name it will not work
// console.log(age)
// let{myFname,myLname,myAge}=myBiodata
// console.log(myAge)

/*********************** Object Properties *********************************************************************/

//we can use dynamic properties
// let myName="rahul";
// const myBio={ 
  
//   [myName]:"how are you",
//    26:"is my age ",
// }
// console.log(myBio)

// no need to write key and value if both has same names
// let myname="rahul balati";
// let age=26;
// const myBio={myname,age}
// console.log(myBio)

/************************* Spread Operators *********************************************/

// const colors=['red','black','green','white'];
// const newColors=['red','black','green','white','blue','grey'] //normal way to add all colors

// const MyFav=[...colors,'blue','grey']       //using spread operator
// console.log(MyFav)

/************  ECMAScript 2017/ES7  ****************************************************/

//Array.prototype.includes
//Exponentiation Operator

//1.Array Includes
//  const colors=['red','black','green','white'];
//  const isPresent=colors.includes('red')
//  console.log(isPresent)

//2.Exponent operator
// let a=2**3    //2 power 3
// console.log(a)

/*********************** ES8 features *************************************************/
//String padding
//object.values()
//Object.entries()
//flat


//String padding
// let name="rahul".padStart(10).padEnd(5);          //includes characters also so starting 5 spaces
// console.log(name)

// const person={name:"Fred",age:57};
// console.log(Object.values(person))
// console.log(Object.entries(person))

//ES2019
//Array.prototype.{flat,flatMap}
// Object.fromEntries()           //array to object

//  let oldNum=Number.MAX_SAFE_INTEGER;
// console.log(oldNum+12)                          //slowy breaks tries giving incorrect

//append n just to convert to bigint
//console.log(999999999999999999999999999999999n+12n)

//nulllish coalescing
// const foo=null??'default something';
// console.log(foo)


//2014 update


// x=3.14
// console.log(x)    runs without anyerror

// "use strict"; 
// x=3.14              gives error as x is not defined
// console.log(x)  


/*#################################### ADVANCE JAVASCRIPT #################################################*/

//Topics 
//1.Event Propagation(Event Bubbling and Event capturing)
//2.Higher Order Function
//3.CallBack function
//4.Function Currying
//5.CallBack hell
//6.Ajax call using XMLHttprequest
//7.JSON
//8.Fetch API
//9.Promises
//10. Async-Await
//11.Error Handling in JS


//1.event bubbling occurs where parent alerts first later child i.e event call occuring from top to bottom  OPP is event capturing 

//detail explaination see eventPropogation.html

//2.CALL BACK AND HIGHER ORDER FUNCTION

//call back :- those functions which we pass them as a arguement to other function
//higher order function:-those functions which accepts other function as an arguement

// const add=(a,b)=>{    //call back functions
//   return a+b; 

// }
// const sub=(a,b)=>{   //call back functions
//   return a-b;
// }

// const calculator=(a,b,operator)=>{     //higher order
//   return operator(a,b);
// }
// console.log(calculator(5,2,add));

//Function currings

//sum(1,2,3) sum(1)(2)(3) both  are different

// function sum(num1){
//  return  function(num2){
//   return function(num3){
//     console.log(num1+num2+num3)
//   }

//   }
// }
// sum(1)(2)(3)

//Callback hell :-each time a function calls another function after certain interval of time

//JSON.stringify turns a js object into json text and stores that JSON text ina string,eg:

// var my_object={key_1:"some text",key_2:1,key_3:true};
// var useingStringfy=JSON.stringify(my_object)
// typeof(useingStringfy)


/**************************** ASYNC JAVASCRIPT *******************************8 */ 

//1.Hoisting  in JS
//2.Scope Chain
//3.Lexical Scoping in JS
//4.Use Strict Mode
//5.This keyword
//6.Closures in JS
//7.what is Asynchronous JS programming
//8.What is Event Loop


//Hoisting ;- It is a mechanism where variables and function i.e declaration  are moved to the top of their scope

// console.log(name);   //prints undefined
// var name;
// name="rahul"

//two phases creation and execution phase
// steps how undefined prints

//step 1: var name;
//step 2:console.log(name)
//step 3:name="rahul";

//therefore let and const came it gives error

//In ES6 hoisting is avoided by using let keyword instead of var

//Scope Chain and Lexical Scoping in JS

//lexical scoping means inner functions can access the outer function variables but vice-versa not allowed


//CLOSURES 
//Closures are functions that have access to variables in their outer function scope, even after the outer function has returned. 
// function createCounter(){
//   let count=0;
//   return function(){
//     count++;
//     console.log(count);
//   }

// }
// const counter1=createCounter();
// counter1();
// counter1();

//Difference between synchronous and asynchrous

//synchronous waits until the 1st function completes it execution 
//disadvantage if !st function 10min
//2nd 5sec
// function  someFun1(){
//   console.log("fun1 executes")
// }

// function someFun2(){
//   console.log("function 2 executes")
//   someFun1();
//     console.log("function 2 executes again")       //lines waits until above function executes
// }
// someFun2()

// function  someFun1(){
//   setTimeout(()=>{
//      console.log("fun1 executes")

//   },2000)
 
// }

// function someFun2(){
//   console.log("function 2 executes")
//   someFun1();
//     console.log("function 2 executes again")       //lines don't waits until above function executes
// }
// someFun2()

//to solve it we use asynchrous


//Event loop in above program the setTimeOut is hold by web api for that particular time later it gives it to message queue then event loop sends to execution stack it then executes

