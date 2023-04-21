'use strict';
// Using Srict Mode-1
/*'use strict';
let hasDrive=false;
const passTest= true;
if(passTest) hasDrive=true;
if(hasDrive) console.log('You can Drive')
*/
/*******Function Declartion************ */

function logger() {
  console.log('Function is Workng');
}
logger();
logger();
logger();
//Usng functions Return Value And Printing It
// function juiceProcessor(apples,oranges){
//     return `juice with ${apples} Apples And ${oranges} Oranges `;
// }
// const appleJuice=juiceProcessor(4,0);
// console.log(appleJuice);
// console.log(juiceProcessor(5,0));
// //Function Expression
// const appleOrangeJuice=function(apples,oranges){
//     return `juice with ${apples} Apples And ${oranges} Oranges `;

// }
// console.log(appleOrangeJuice(5,9));
//CalAge
// function calAge(birthYear,birthMonth){

//     let year= 2023-birthYear;
//     let month = 12-birthMonth;
//     return `You are ${year} Year and ${month} Month old`;
// }

// const age = calAge(2002);
// console.log(age);
// const yourAge=calAge(2002,7);
// console.log(yourAge);

//Arrow Function
// const calAge3=birthYear=> 2023-birthYear;
// console.log(calAge3(2002));
// const calAge4=(birthYear,calname)=>{
//     const age= 2023-birthYear;
//     const retirement= 65-age;
//     const retirementleft=`${calname} retire in ${retirement} years`;
//     return retirementleft;
// }
// console.log(calAge4(2002,'Ajay'));
//calling Function in function
// const cutPieces=fruit=> fruit*4;

// const fruitProcessor=(apples,oranges)=>{
//     const appleCutPieces= cutPieces(apples);
//     const orangeCutPieces=cutPieces(oranges);
//     const juice=`Juice With ${appleCutPieces} pieces of apple and ${orangeCutPieces} Pieces of Oranges`;
//     return juice;
// }
// console.log(fruitProcessor(2,3));
//Function Challenges
//Coding Challenge-1
// const calcAverage=(testValue1,testValue2,testValue3)=>{
//    const teamAvg= (testValue1+testValue2+testValue3)/3;
//    return teamAvg;
// }
// console.log(calcAverage(44,23,71));
// console.log(calcAverage(65,54,49));
// const team1Avg=calcAverage(44,23,71);
// const team2Avg=calcAverage(65,54,49);

// const checkWinner=(t1Avg,t2Avg)=>{
//     if(t1Avg>=2*t2Avg){
//         return `T1 win(${t1Avg} VS. ${t2Avg})`;
//     }
//     else if(t2Avg>=2*t1Avg){
//         return `T2 win(${t2Avg} VS. ${t1Avg})`;
//     }
//     else{
//         return'checkout No One Wins the match';
//     }
// }
// console.log(checkWinner(team1Avg,team2Avg));
// console.log(checkWinner(500,100));
//Coding Challenge 2

// const calTip=bill=>{
//     if(bill>=50 && bill<=300){
//         return bill*0.15;
//     }
//     else{
//         return bill*0.20;
//     }

// }
// console.log(calTip(100));
// const bills= new Array(125,555,44);
// let tip_1=calTip(bills[0]);
// let tip_2=calTip(bills[1]);
// let tip_3=calTip(bills[bills.length-1]);
// const allTips= [tip_1,tip_2,tip_3];
// console.log(allTips);
// const total=[allTips[0]+bills[0],allTips[1]+bills[1],allTips[2]+bills[2]];
// console.log(total);
//Method 2
// const calTips=bill=>bill>=50 && bill<=300 ? bill*0.15 : bill*0.20;
// console.log(calTips(100));
// const bills=[125,555,44];
// const tips=[calTips(bills[0]),calTips(bills[1]),calTips(bills[2])];
// console.log(bills,tips);
// const totals=[tips[0]+bills[0],tips[1]+bills[1],tips[2]+bills[2]];
// console.log(totals);
// const atest=['ajay',0,0.5,true];
// console.log(atest);

//Objects
// const ajay={
//     fistName:'Ajay',
//     lastName:'Rajput',
//     birthYeah:1991,
//     job:'Coder',
//     friends:['Saurabh','Aadi','Peter'],
//     hasDriverLicense:true,
//     calcAge: function(){
//         this.age=2037-this.birthYeah;
//         return this.age;
//     },
//     getSummary:function(){
//         return `${this.fistName} is a ${this.calcAge()}-year old ${this.job}, And He has ${this.hasDriverLicense ? 'a':'No'} driver's license`;
//     }
// }
// console.log(ajay.getSummary());
// console.log(`${ajay.fistName} is a ${ajay.calcAge()}-year old ${ajay.job}, And He has ${ajay.hasDriverLicense ? 'a':'No'} driver's license`);
//Coding Challenge #3

// const john={
//     fullName:'john Smith',
//     mass:78,
//     height:1.69,
//     calcBMI: function(){
//         this.BMI=this.mass/this.height**2;
//         return this.BMI;
//     }
// }
// const mark={
//     fullName:'Mark Miller',
//     mass:92,
//     height:1.95,
//     calcBMI: function(){
//         this.BMI=this.mass/this.height**2;
//         return this.BMI;
//     }
// }
// john.calcBMI();
// mark.calcBMI();
// console.log(john.BMI,mark.BMI);
// if(john.BMI>mark.BMI){
//     console.log(`${john.fullName}'s ${john.BMI}BMI is higher than ${mark.fullName}'s ${mark.BMI}!`);
// }
// else if(mark.BMI>john.BMI){
//     console.log(`${mark.fullName}'s ${mark.BMI}BMI is higher than ${john.fullName}'s ${john.BMI}!`);
// }

// for(let exercise=1;exercise<4;exercise++){
//     console.log(`--------------Exercise-------- ${exercise}`);
//     for(let rep=1;rep<6;rep++){
//         if(exercise===1){
//             console.log(`Lifting weight rep-${rep}`);
//         }
//         else if(exercise==2){
//             console.log(`Push Ups-${rep}`);

//         }
//         else{
//             console.log(`chest rep-${rep}`);
//         }
//     }

// }
// const tip=[];
// console.log(bills.length);
// for(let i=0;i<bills.length;i++){
//     console.log(bills[i]);

// }
// for(let i=0;i<bills.length;i++){
//     tip.push(calTips(bills[i]));

// }
// console.log(tip);
// console.log(bills);
// for(let j=bills.length-1;j>=0;j--){
//     console.log(bills[j]);
// }

//Coding Challenge-4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
const calcTip = bill => (bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2);
for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}
console.log(tips);
console.log(totals);

//Bonas
const calcAverage = arr => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(bills));
console.log(calcAverage(tips));
console.log(calcAverage(totals));
let x;
if ((x = true)) console.log('true');
