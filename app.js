//===============(1)===========================
function reverse_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(Number(reverse_number(98765)));

//======================(2)===========================
function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("tuwaiq academy"));
//===================(3)========================
function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
console.log(vowel_count("Javascript is awesome"));

//=====================(4)============================
function test_prime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(test_prime(37));
//=====================(5)=========================
function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
console.log(find_longest_word('Kingdom of Saudi arabia'));

//=====================(6)==========================
function alphabet_order(str)
  {
return str.split('').sort().join('');
  }
console.log(alphabet_order("webmaster"));

//=====================(7)============================
const num1 = 5;
const num2 = 3;

// add two numbers
const sum = num1 + num2;

// display the sum
console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);

//======================(8)========================
function convertAgeToDays(age) {
    return age * 365;
    }
    console.log(convertAgeToDays(1))
//====================(9)==========================
function howManySeconds(hours) {
	let seconds = (hours * 60) * 60;
	return seconds;
}
console.log(howManySeconds(2))

//=====================(10)=======================
function LessThanOrEqualToZero(a) 
{
    return (a<=0) ? true: false;
}
console.log(LessThanOrEqualToZero(5))
//======================(11)=========================
function countDigit(n)
{
    let count = 0;
    while (n != 0) 
    {
        n = Math.floor(n / 10);
        ++count;
    }
    return count;
}

console.log(countDigit(12))
//=======================(12)=========================
const toArray = (obj) => {
  let a = [];
  a = Object.entries(obj);
  return a;
};

console.log(toArray({ a: 1, b: 2 }));
console.log(toArray({ shrimp: 15, tots: 12 }));
//=========================(13)============================
//13//

//============================(14)==========================
function hasConsecutiveIdenticalLetters(word){
  for (let i = 1; i < word.length; i++) {
      if (word[i-1] === word[i]) {
          return true;
      }
  }
  return false;
}
console.log(hasConsecutiveIdenticalLetters("loop"))
//==========================(15)===============================
var curday = function(sp){
  today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //As January is 0.
  var yyyy = today.getFullYear();
  
  if(dd<10) dd='0'+dd;
  if(mm<10) mm='0'+mm;
  return (mm+sp+dd+sp+yyyy);
  };
  console.log(curday('/'));
  console.log(curday('-'));
//==========================(16)==================================
let date_1 = new Date('10/25/2021');
let date_2 = new Date('5/1/2023');

const days = (date_1, date_2) =>{
    let difference = date_1.getTime() - date_2.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return TotalDays;
}
console.log(days(date_1, date_2));
//==========================(17)====================================
//17
//==============================================================

