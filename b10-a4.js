function calculateTax(income, expense) {

if (income<=0 || expense<=0 || income<expense){

return "Invalid Input";

}

const profit = income - expense;

const tax = profit * 0.20;

return tax;

}

function sendNotification(email) {

if(email.includes("@")){

const separate = email.split('@');

return separate[0]+" sent you an email from "+separate[1];

}

return "Invalid Email";

}

function checkDigitsInName(name) {

if(typeof name === 'string'){

const separateName = name.split('');

for(let i=0; i<separateName.length; i++){

if(!isNaN(separateName[i])){

return true;

}

}

return false;

}

return 'Invalid Input';

}

function calculateFinalScore(obj) {

if(typeof obj==='object' &&

typeof obj.name ==='string' &&

typeof obj.testScore==='number' &&

obj.testScore<=50 &&

typeof obj.schoolGrade==='number' &&

obj.schoolGrade<=30 &&

typeof obj.isFFamily==='boolean')

{

let score=0;

if(obj.isFFamily===true)

{

score = 20;

}

score+=(obj.testScore + obj.schoolGrade);

if(score>=80)

{

return 'true';

}

return 'false';

}

return 'Invalid Input';

}

function waitingTime(waitingTimes , serialNumber) {

if(Array.isArray(waitingTimes) && typeof serialNumber==='number' && waitingTimes.length<serialNumber){

let totalTime=0;

for(let i=0; i<waitingTimes.length; i++){

totalTime+= waitingTimes[i];

}

let avgTime =Math.floor(totalTime/(waitingTimes.length));

let timeNeeded= (serialNumber - waitingTimes.length - 1) * avgTime;

return timeNeeded;

}

return 'Invalid Input';

}