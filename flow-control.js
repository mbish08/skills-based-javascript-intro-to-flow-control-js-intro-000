function basicTeenager(age) {if (age >= 13 && age <= 19) return 'You are a teenager!';}

function teenager(age) {let result; if (age >= 13 && age <=19) {result = "You are a teenager!"} else {result = "You are not a teenager"} return result;}

function ageChecker(age) {let result; if (age >= 13 && age <=19) {result = "You are a teenager!"} else if (age <=12) {result = "You are a kid"} else {result = "You are a grownup"} return result;}

function ternaryTeenager(age) {return age >= 13 && age <= 19 ? 'You are a teenager' : 'You are not a teenager';}

function switchAge(age) {switch(age) {
  case 13:return 'You are a teenager';
  case 14:return "You are a teenager";
  case 15:return 'You are a teenager';
  case 16:console.log("You are a teenager"); break; case 17:console.log("You are a teenager"); break; case 18:console.log("You are a teenager"); break; case 19:console.log("You are a teenager"); break; case(age >19):console.log('You have an age'); break; case (age <13):console.log('You have an age'); break; default:console.log('You have an age today');}}
