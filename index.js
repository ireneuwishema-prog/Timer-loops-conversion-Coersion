// // type conversion is to convert one type to another type and it done by us international by us
// console.log(Number('3'));
// console.log(parseFloat('2.9'));
// console.log(Number('name'));

// console.log(typeof String(2));
// console.log(Boolean()); // false value = 0 , undefined , null , NaN and other is true



// if(25){
//     console.log('true');
    
// }else{
//     console.log(false);
    
// }

// // type coersion  is they way we converts from one type to another  behind the scene  and it done   automatically by the language it made by js 
 
// //function 
 
// function AddNumber(a,b){ //function parameters it is like placeholder
//     return a + b ;
// }
//  console.log(AddNumber(20,30)); // function argument it is like actual value 
// for ( i = 0 ; i<= 3 ; i++){
//     console.log(i);   
// }
// // Object
//     const irene =  {
//         Name :'Irene',
//         brit : 2007,

//         calc : function (){
//             irene.age = 2026 - irene.brit;
//         },
//     }
//     console.log(irene.Name); 
//     console.log(irene.brit); 

//     irene.calc()
//     console.log(irene.age);

// //  another object
// const sabin = {
//     FirstName : 'sabin',
//     year : 2008,
//     age:function(){
//         sabin.all = 2026 - sabin.year ; 
//     }, 
// }
// console.log(sabin.FirstName);
// console.log(sabin.year);
// sabin.age()
// console.log(sabin.all);


// // how to usee bind ,call , apply

// //  this is call
// const sabi = { year: 2008 };
// const iren = { year: 2007 };

// function calculateAge(currentYear, greeting) {
//   const age = currentYear - this.year;
//   console.log(`${greeting}! You are ${age} years old.`);
// }

// // We borrow the function and tell it to use 'sabin' as 'this'
// calculateAge.call(sabi, 2026, "Hello Sabin"); // Output: Hello Sabin! You are 18 years old.
// calculateAge.call(iren, 2026, "Hi Irene");    // Output: Hi Irene! You are 19 years old.

// // this is bind
// const sain = { year: 2008 };

// function calculateAge(currentYear) {
//   return 2026 - this.year;
// }

// // This does NOT run the function. It creates a new one called 'sabinAgeCalc'.
// const sabinAgeCalc = calculateAge.bind(sain);

// // Now we can use 'sabinAgeCalc' just like a normal function anywhere we want!
// console.log(sabinAgeCalc()); // Output: 18

// setTimeout(function (){
//     console.log('run out in 3se');
// },3000);
//  const Interval =  setInterval(function (){
//     console.log(new Date().toDateString());
    
// },1000)
// clearInterval(Interval)

// // let real = 2;
// // const rel = setInterval( function(){
// // console.log(real-- || (clearInterval(rel)));

// // },2000);


// const display = document.getElementById('display')

// setInterval (function(){
//     display.textContent = new Date ().toLocaleString()
// },1000)

// let timer = 5;
// const Inerval = setInterval (function(){
//     if(timer === -1){
//          alert ('time is done')
//         clearInterval (Inerval);
//         return;
//     }
// const minutes = Math.trunc(timer/60);
// const seconds = timer % 60;
// display.textContent = `${minutes} : ${seconds}`;
// timer--

// },1000)


// let str = 'umweeeeeeeeeeeeeeeeeeeee';

// const uppercase = function(str){
//     const strii = str.toUpperCase();
//     return strii;
// }
// console.log(uppercase(str)); 

// const array = [
//     {FirstName : 'irene', age :3 ,},
//     {FirstName : 'Emmy', age :30 ,},
// ]
// array.forEach(function(){
//     console.log(array [1]);   
// })

// const add = ['1','2','3','4','5','6','7','8']
// let add1 = [];
// for (const ad of add){
//     add1.push(add**2)
// }console.log(add1);

// const money = [100,3000 ,400,500];
// money.forEach(function (value ,i) {
//     console.log(`${value}is at index ${i}`);
//     console.log(money);
// }); 
// const mm = [2000,-400,393 , 500 , 55, -6060 ,-60]
// const result = mm.filter(function(vv){
//     if(vv > 0) return vv;
// })
// console.log(result);

// array filter it will give us number without negative number if you need and positive if you need and also it can be used for comparison
const mark = [-40, 30, 20,70,80,80,90,40];

const combination = mark.filter(function(ff) {
    return ff < 50; 
});
//?
//  it will execute the mark with word improved because it add new and create new array
console.log(combination); 
const improved = mark.map(function(show){
     return `${show} improved`
})
console.log(improved);

console.log(mark.join(' better').split());

 mark.sort(function(a,b){
    if(a>b)  return -1;
    // if(a<b) return -1
})
console.log(mark);

const arr = [1,4,2,5,7];
console.log(arr.sort((a,b)=>(a-b)));
// console.log(arr.slice(0,-2,30));
console.log(arr.splice(3,3));

const FirstName = "irene"
console.log(FirstName.toLocaleUpperCase());
console.log(FirstName.replaceAll('irene','shema'));
console.log(FirstName.includes('i'));
console.log(FirstName.indexOf('i'));
console.log(FirstName.split());
console.log([1,2,3,4].join('o').split());


// error handle

try{
    gggg
}catch (error){
    console.log(error)
}finally{
    console.log('asdfghjkl');
    
}



