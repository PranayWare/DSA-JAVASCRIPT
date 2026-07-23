const prompt = require("prompt-sync")();

//Problem 1 (Merge sort arrays) // (Use two pointer technique) (correct answer)
/*const mergesortarrays = (a, m, b, n) => {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;
  while (i >= 0 && j >= 0) {
    if (a[i] > b[j]) {
      a[k--] = a[i--];
    } else {
      a[k--] = b[j--];
    }
  }
  while (j >= 0) {
    a[k--] = b[j--];
  }
};
let a = [1, 2, 3, 0, 0, 0];
let m = 3;
let b = [2, 5, 6];
let n = 3;
mergesortarrays(a, m, b, n);
console.log("The sorted and merged array is :", a);*/

//Pattern 1
//{ Two-Pointer method }

//Problem 1 (valid palindrome or not)
/*const palindromeornot = (x) => {
  x = x.replace(/[^\da-zA-Z0-9]/gi, '').toLowerCase(); // Remove non-alphanumeric characters and convert to lowercase // if used w then it considers everything
  let s = 0;
  let e = x.length-1;
  while (s < e){
    (if (x[s]!==x[e]){
           return false;
        }
        s++;
        e--;
      }
      return true;
    })
    if (x[s]===x[e]){
        s++;
        e--;
    }
    else {
      return false;
    }
  }
  return true;
}
//let a = prompt("Enter a string:");
let a = "A man ,a plan ,a canal: Panama";
console.log("The string is palindrome :",palindromeornot(a));*/

//Problem 2 (string is a subsequence or not )
/*const isSubsequence = (x, y) => {
  if (typeof x !== "string" || typeof y !== "string") {
    return "Both inputs must be strings"; 
  }
  let m = 0;
  for (let i = 0; i < y.length; i++) {
    if (x[m] === y[i]) {
      m++;
    }
     if (m === x.length) {  // To confirm that 1st string is fully checked 
      return true;
    }
  }
  return false;
}
//let s = prompt("Enter a string:");
//let t = prompt("Enter a string:");
let s = "ace";
let t = "abcde";
console.log("The string subsequence is :", isSubsequence(s, t));*/

// Alternate method and easy also (using index)
/*const issubsequence = (x, y) => {
  if (typeof x !== 'string' || typeof y !== 'string') {
    throw new Error('Both inputs must be strings');
  }
  let index = 0; // Index will be used to keep track of the current position in the string y where we are searching for the next character of x.
  for (let i = 0; i < x.length; i++) {
    index = y.indexOf(x[i], index); //  it checks if the ith charracter of x is available in y
    if (index === -1) { // index returns -1 if the character is not found in the whole string
      return false;
    }
    index++; // if the character is available then index moves one character forward
  }
  return true;
}
let s = prompt("Enter a string:");
let t = prompt("Enter a string:");
console.log ("The string subsequence is :", issubsequence(s, t));*/

//Problem 3 ( two sum array)
/*const twosumarray = (x,y) => {
  let start = 0
  let end = x.length - 1
  for (let i = 0 ; i < x.length ; i++) {
    if (x[start] + x[end] === y) {
      return [ start , end ];
    }
    else if (x[start] + x[end] < y){
      start++;
    }
      else {
        end--;
    }
  }
  return "No solution found"
}
let a = [1,2,3,4,5,6,7,8,9]
let b = 17
console.log ("The indice are :",twosumarray(a,b));*/

//Problem 4 (3sums) (Tough nut to crack)
/*const Threesums = (x) => {
  let result = [];
  let a = x.sort((a, b) => a - b)
  for (let i = 0 ; i < a.length - 2 ;i++) { // If we were to iterate till a.length - 1, we would encounter cases where left and right pointers would cross each other, leading to incorrect results or infinite loops.
    if (i > 0 && a[i] === a[i - 1]) continue; // To solve duplicate error
    let m = i+1;
    let n = x.length - 1;
    let target = a[i];

    while (m<n) {
      let sum = a[m] + a[n] + target;
    if (sum === 0 ) {
      result.push([a[m], a[n], a[i]]) ;
      while (m < n && a[m] === a[m + 1]) m++; // To solve duplicate error
      while (m < n && a[n] === a[n - 1]) n--; // To solve duplicate error
      m++;
      n--;
    }
      else if (sum < 0) { 
        m++;
      }
      else {
        n--;
      }
    }
  }  
  return result;
} 
let b = [-1,0,1,2,-1,-4]
console.log ("The pairs are :",Threesums(b));*/

// Problem 5 (containing water)
/*const maxarea = (x) => {
  let left = 0;
  let right = x.length - 1;
  let maxwater = 0;

  while (left < right) {
    let width = right - left;
    let height = Math.min(x[left], x[right]);
    let water = width * height;
    maxwater = Math.max(maxwater, water); // ( In this case, we're passing maxwater and water as arguments .maxwater is the current maximum area we've found so far. water is the newly calculated area in the current iteration. The Math.max() function compares the two values and returns the larger one. The result is then assigned back to the maxwater variable.)

    if (x[left] < x[right]) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return maxwater;
}
let a = [1, 3, 4, 8, 21, 41];
console.log("The max water can be filled is :", maxarea(a));*/

//Pattern 2
//{Hashmap}

//Problem 1 (Ransom note)
/*const ransomenote = (x,y) => {
  const xfrequency = {};
  for (let char of x) {
    if (xfrequency[char]) {
      xfrequency[char]++;
    }
    else {
      xfrequency[char] = 1;
    }
  }
  for (let char of y) {
    if (!xfrequency[char] || xfrequency[char] === 0 ) { 
      return false;
    }
    xfrequency[char]--;
  }
  return true;
}
let magazine = prompt("Enter the first string :");
let ransome =  prompt("Enter the second string :");
console.log ("The ransome note is present:",ransomenote(magazine,ransome));*/

//Problem 2 (Isomorphic)
/*const isomorphic = (x, y) => {
  const xhashmap = {};
  const yhashmap = {};
  for (let i = 0; i < y.length; i++) {
    const charx = x[i];
    const chary = y[i];
    if (xhashmap[charx] && xhashmap[charx] !== chary) { // If charx is already a key in xhashmap, and its associated value is not equal to chary, then the function returns "Is not isomorphic".
      return "is not isomorphic";
    } else {
      xhashmap[charx] = chary; // If charx is not a key in xhashmap, or its associated value is equal to chary, then a new entry is added to xhashmap with charx as the key and chary as the value.
    }
    if (yhashmap[chary] && yhashmap[chary] !== charx) {
      return "is not isomorphic";
    } else {
      yhashmap[chary] = charx;
    }
  }
  return "is isomorphic";
};
let s = prompt("Enter the first string :");
let t = prompt("Enter the second string :");
console.log("The string", isomorphic(s, t));*/

//Problem 3 (WordPattern)
/*const wordpattern = (x, y) => {
  x = x.toLowerCase();
  y = y.toLowerCase();
  const word = y.split(/\s+/);
  if (x.length !== word.length) {
    return false;
  }
  const xhashmap = {};
  const yhashmap = {};
  for (let i = 0; i < x.length; i++) {
      const charx = x[i];
      const wordy = word[i];
      if (xhashmap[charx] && xhashmap[charx] !== wordy) {
        return "is not a word pattern";
      } else {
        xhashmap[charx] = wordy;
      }
      if (yhashmap[wordy] && yhashmap[wordy] !== charx) {
        return "is not a word pattern";
      } else {
        yhashmap[wordy] = charx;
      }
    }
  return "is a word pattern"
};
//let pattern = prompt("Enter the pattern string :");
//let s = prompt("Enter the letter string :");
//let pattern = "abba";
//let s = "dog cat cat dog";
let pattern = "abc";
let s = "dog cat horse"
console.log("The string", wordpattern(pattern,s));*/

// Problem 4 (valid anagram)
/*const validanagram = (s, t) => {
  s = s.replace(/\s+/g, "").toLowerCase();
  t = t.replace(/\s+/g, "").toLowerCase();
  if (s.length !== t.length) {
    return "is not an valid anagram";
  }
  const shashmap = {};
  const thashmap = {};
  for (let i = 0; i < s.length; i++) {
    const schar = s[i];
    const tchar = t[i];
    if (!shashmap[schar]) {
      shashmap[schar] = 1;
    } else {
      shashmap[schar]++;
    }
    if (!thashmap[tchar]) {
      thashmap[tchar] = 1;
    } else {
      thashmap[tchar]++;
    } 
  }
    for (let char in shashmap) {
      if (shashmap[char] !== thashmap[char]) {
        return "is not an valid anagram";
      }
    }
  return "is not an valid anagram";
};
let s = prompt("Enter the first string :");
let t = prompt("Enter the second string :");
console.log("The string", validanagram(s, t));*/

// Problem 4 (valid anagram) (very easy it doesn't require to write functions for both strings)
/*function isValidAnagram(s, t) {
  // Step 1: Preprocessing
  s = preprocess(s);
  t = preprocess(t);

  // Step 2: Frequency Counting
  const sCounts = countFrequencies(s);
  const tCounts = countFrequencies(t);

  // Step 3: Comparison
  return compareFrequencies(sCounts, tCounts);
}

function preprocess(str) {
  return str.replace(/\s+/g, '').toLowerCase();
}

function countFrequencies(str) {
  const counts = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    counts[char] = (counts[char] || 0) + 1;
  }
  return counts;
}

function compareFrequencies(sCounts, tCounts) {
  for (let char in sCounts) {
    if (sCounts[char] !== tCounts[char]) {
      return "is not an valid anagram"; ;
    }
  }
  return "is an valid anagram";
}
let s = prompt("Enter the first string :");
let t = prompt("Enter the second string :");
console.log("The string", isValidAnagram(s,t));*/

// Problem 5 (group anagrams)
/*const groupanagrams = (x) => {
  const xhashmap = {}
  for (let i=0; i<x.length;i++) {
    let str = x[i];
    let sortedstr = str.split('').sort().join('')
    if (!xhashmap[sortedstr]) {
      xhashmap[sortedstr] = [str];
    }
    else {
      xhashmap[sortedstr].push(str);
    }
  }
  return Object.values(xhashmap);
}
let a = ["eat","tea","tan","ate","nat","bat"];
console.log(groupanagrams(a));*/

// Problem 6 (two sum)
/*const twosum = (x,y) => {
  const savednum = {} 
  for (i = 0;i<x.length ;i++) {
    let currentnum = x[i];
    let needednum  = y - currentnum;
    if (savednum[needednum] !== undefined) {
      return [savednum[needednum] , i];
    }
    else {
      savednum[currentnum] = i;
    }
  }
  return null;
}
let a = prompt("Enter the array :");
let b = JSON.parse(a);
let c = parseInt(prompt("Enter the target :"));
console.log(twosum(b,c));*/

// Problem 7 (happy number)
/*const happynumber = (x) => {
  const square = {}
  while (x!==1  && !square[x]) {
    square[x] = true
    x = sumofsquares(x)
  }
  if ( x === 1) {
    return true;
  }
  else {
    return false;
  } 
}
  const sumofsquares = (x) => {
    let sum = 0;
    while (x > 0) {
    let digit = x % 10
    sum += digit * digit
    x = Math.floor(x / 10);
  }
return sum ;
  }
let a = parseInt(prompt("Enter the number :"))
console.log ("The entered number is a happy number",happynumber(a));*/

// Problem 8 (contains duplicate)
/*const containsduplicate = (x,y) => {
  const savenum = {}
  for (let i = 0; i<x.length; i++) {
    const currentnum = x[i] ;
    if (savenum[currentnum] !== undefined && i - savenum[currentnum] <= y ) {
      return true ;
    }
    else {
      savenum[currentnum] = i;
    }
  }
  return false;
}
//let a = [1, 2, 3, 1 , 2, 3];
//let b = 2;
let a = [1, 2, 3, 1];
let b = 3;
console.log(containsduplicate(a, b));*/

// Problem 9 (longestConsecutive)
/*const longestConsecutive = (x) => {
  x.sort((a,b)=> a - b);
  const sortednum = {};
  let longeststreak = 0;
  let currentstreak = 0;
  for (let i = 0; i<x.length; i++) {
    const currentnum = x[i]
    if (!sortednum[currentnum]) {
      sortednum[currentnum] = i;
     
      if (currentstreak === 0 || currentnum === x[i - 1] + 1) {
            // If this is the first number or part of a consecutive sequence
            currentstreak++;
          } else {
            // If the sequence breaks, update the longest streak
            longeststreak = Math.max(longeststreak, currentstreak);
            currentstreak = 1; // Start a new streak
          }
        }
      }

    longeststreak = Math.max(longeststreak,currentstreak)
  return longeststreak ;
}
  let a = [1, 2, 3,100,200,4,6,5,7,];
  console.log(longestConsecutive(a));*/

// Pattern 3
//{Array}

//Problem 1(remove element)
/*const removeelement = (x,y) => {
let s = 0;
for(let i = 0 ; i < x.length ; i++) {
  if (y !== x[i]){
   x[s] = x[i];
   s++;
 }
}
  return s;
}
let x = [3,2,2,4,5,6,7];
let y  = 2;
let s = removeelement(x,y);
console.log("The value of k :",s);
console.log("Modified array:",x.slice(0, s));*/

//Problem 2 (remove duplicates)
/*const removeDuplicates = (x) => {
    const xhashmap = {};
    let k = 0;
    for (let i = 0; i < x.length; i++) {
        if (!xhashmap[x[i]]) {
            xhashmap[x[i]] = true;
            x[k] = x[i];
            k++;
        }
    }
    return k
;
}
let x = [1, 1, 2, 2, 3, 3, 3];
(removeDuplicates(x));
console.log(x);*/

//Problem 3 (buy and sell stock)
/*const besttime = (x) => {
  let maxprofit = 0;
   let minprice = Infinity;
  for (i = 0;i<x.length;i++) {
    if (x[i] < minprice) {
      minprice = x[i];
    }
    if (x[i] - minprice > maxprofit) {
      maxprofit =  x[i] - minprice;
    }
  }
  return maxprofit;
}
a = [7,6,4,3,1];
console.log ("The profit will be:",besttime(a));*/

// Problem 3 (another way)
/*const besttime = (x) => {
  let maxprofit = 0;
  let minprice = Infinity;
  for (let i = 0; i < x.length; i++) {
    minprice = Math.min(minprice, x[i]);
    maxprofit = Math.max(maxprofit, x[i] - minprice);
  }
  return maxprofit;
}
a = [7,6,4,3,1];
console.log ("The profit will be:",besttime(a));*/

//Problem 4 (buy and sell stock 2)
/*const besttime = (x) => {
  let maxprofit = 0;
  for (let i = 1;i < x.length; i++) {
    if (x[i] > x[i-1]) {
      maxprofit += x[i] - x[i - 1];
    }
  }
  return maxprofit;
}
a =  [7,1,5,3,6,4];
console.log ("The profit will be:",besttime(a));*/

//Problem 5 (jump game)
/*const jump = (x) => {
  let s = 0
  const e = x.length - 1
  for (let i = 0; i < x.length; i++){
    if (i > s){
      return false;
    }
    s = Math.max(s,i + x[i]);
    if (s >= e){
      return true;
    }
  }
  return false;
}
a =  [7,1,5,3,6,4];
console.log ("The jump game is ", jump(a));*/

//Problem 6 (jump game 2)
/*const jump = (x) => {
  let jumps = 0;
  let currentend = 0;
  let farthest = 0;
  for (let i = 0; i < x.length - 1; i++) {
    farthest = Math.max(farthest,i + x[i]);
    if ( i == currentend) {
    jumps++;
    currentend = farthest;
    if (currentend >= x.length - 1) {
      break;
    }
   } 
  }
  return jumps;
}
 a = [2,3,1,1,4];
console.log ("The jump game is ", jump(a));*/

//Problem 7 (h index)
/*const hIndex = (x) => {
  x.sort((a,b) => a-b);
  const n = x.length;
  for (let i= 0; i < n; i++){
    if (x[i] >= n - i) {
      return n - i;
    }
  }
  return 0;
}
  const citations = [3, 0, 6, 1, 5];
  console.log(hIndex(citations));*/

// Pattern 4
//{Sliding Window}

// Problem 1 (minimum size)
/*const minSubArrayLen = (target, nums) => {
  let left = 0; 
  let right = 0;
  let sum = 0;
  let minLength = Infinity; 
  while (right < nums.length) {
      sum += nums[right]; 
      while (sum >= target) {
          minLength = Math.min(minLength, right - left + 1);
          sum -= nums[left]; 
          left++;
      }
    right++;
  }
  return minLength === Infinity ? 0 : minLength;
};
const nums = [2, 3, 1, 2, 4, 3];
const target = 7;
console.log(minSubArrayLen(target, nums));*/

// Pattern 5
//{Stack}

// Problem 1 (valid Parenthesis)
/*const isValid = (x) => {
  const stack = [];
  const bracketmap = {
    ')':'(',
    '}':'{',
    ']':'['
  };
  for (let char of x) {
    if (bracketmap[char]) {
     if (stack.length === 0 || stack.pop() !== bracketmap[char]) {
       return false;
     }
    } else {
        stack.push(char);
      }
    }
  return stack.length === 0;
};
let a = "()";
console.log("The given stack is a valid parenthesis:",isValid(a));*/

// Problem 2 (simplify path)
/*const simplifyPath = (x) => {
  const components = x.split('/');
  const stack = [];
  for (const component of components) {
    if (component === '' || component === '.') {
      continue;
    }
    else if (component === '..'){
      if(stack.length > 0) {
        stack.pop();
      }
    }
    else {
      stack.push(component);
    }
  }
  const simplified = '/' + stack.join('/');
  return simplified;
}
const inputPath = "/home/user/.././documents/../file.txt";
console.log(simplifyPath(inputPath));*/

// Problem 3 (min stack) (using factory function)
/*const MinStack = () => {
  const stack = [];
  const minstack = [];
  return {
    push : function(val) {
      stack.push(val);
      if (minstack.length === 0 || val <= minstack[minstack.length - 1]) {
        minstack.push(val);
      }
    },
    pop : function() {
      if (stack.length > 0){
        const topvalue = stack.pop();
        if (topvalue ===  minstack[minstack.length - 1]) {
          minstack.pop();
        }
      }
    },
    top : function() {
      if(stack.length > 0){
        return stack[stack.length - 1]
      }
      return null;
    },
    getMin : function() {
      if(minstack.length > 0){
        return minstack[minstack.length - 1]
      }
      return null;
    }
  };
}
const minStack = MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); 
minStack.pop();
console.log(minStack.top());    
console.log(minStack.getMin());*/

// Problem 3 (min stack) (using constructor)
/*function MinStack() {
  this.stack = [];
  this.minstack = [];
}
MinStack.prototype.push = function (val) {
  this.stack.push(val);
  if (this.minstack.length === 0 || val <= this.minstack[this.minstack.length - 1]) {
      this.minstack.push(val);
  }
};
MinStack.prototype.pop = function () {
  if (this.stack.length > 0) {
      const topValue = this.stack.pop();
      if (topValue === this.minstack[this.minstack.length - 1]) {
          this.minstack.pop();
      }
  }
};
MinStack.prototype.top = function () {
  if (this.stack.length > 0) {
      return this.stack[this.stack.length - 1];
  }
  return null;
};
MinStack.prototype.getMin = function () {
  if (this.minstack.length > 0) {
      return this.minstack[this.minstack.length - 1];
  }
  return null;
};*/

// Pattern 6
//{Matrix}

// Problem 1 (valid sudoku)
/*const isValidSudoku = (x) => {
  let row = 
}*/
