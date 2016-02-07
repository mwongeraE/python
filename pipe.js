function pipeFix(numbers){
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] !== numbers[i+1]-1 && i < numbers.length-1 ) {
      numbers.splice(i+1,0,numbers[i]+1);
    }
  }
  return numbers;
}

// insert dashes between two odd numbers
function insertDashes(num) {
  var inStr = String(num);
  var outStr = inStr[0], ii;

  for (ii = 1; ii < inStr.length; ii++) {
    if (inStr[ii-1] % 2 !== 0 && inStr[ii] % 2 !== 0) {
      outStr += '-';
    }

    outStr += inStr[ii];
  }

  return outStr;
}

function insertDash(num) {
   return num.toString().split('').reduce((acc, c, i, arr) => {
     if (i > 0 && Number(arr[i]) % 2 !== 0 && Number(arr[i - 1]) % 2 !== 0)
       acc = acc + '-';

     return acc + c;
   }, '');
}

function insertDash(num) {
   return (num+'').replace(/([13579])(?=[13579])/g, "$1-");
}

function insertDash(num) {
    return (num + '').replace(/([13579]){2,}/gi, function (m) { return m.split('').join('-'); });
}


/*A number is self-descriptive when the n'th digit describes the amount n appears in the number.

E.g. 21200:

There are two 0's in the number, so the first digit is 2.

There is one 1 in the number, so the second digit is 1.

There are two 2's in the number, so the third digit is 2.

There are no 3's in the number, so the fourth digit is 0.

There are no 4's in the number, so the fifth digit is 0
*/

function is_self_describing(n) {
    var digits = Number(n).toString().split("").map(function(elem) {return Number(elem)});
    var len = digits.length;
    var count = digits.map(function(x){return 0});

    digits.forEach(function(digit, idx, ary) {
        if (digit >= count.length)
            return false
        count[digit] ++;
    });

    return digits.equals(count);
}

Array.prototype.equals = function(other) {
    if (this === other)
        return true;  // same object
    if (this.length != other.length)
        return false;
    for (idx in this)
        if (this[idx] !== other[idx])
            return false;
    return true;
}

function selfDescriptive(num) {
  var str = '' + num;

  var counts = str.split('').reduce(function(counts, digit) {
    counts[digit] = (counts[digit] || 0) + 1;
    return counts;
  }, []);

  for (var i = 0; i < str.length; i++)
    if ((counts[i] || 0) != str[i])
      return false;

  return true;
}

function countChars(str, char) {
  return (str.match(new RegExp(char, 'g')) || []).length;
}

function selfDescriptive(num) {
  var str = String(num);
  return Array.prototype.every.call(str, function(digit, index) {
    return digit == countChars(str, index);
  });
}

function selfDescriptive(num) {
  var digits = num.toString().split('').map( n => parseInt(n) )
  return digits.every(function(e,i) {
    return digits.filter( d => d === i ).length === e;
  })
}


function selfDescriptive(num) {
  var digits = String(num).split("").map(d => parseInt(d, 10));
  return digits.every((digit, index) => digits.filter(d => d === index).length === digit);
}

function selfDescriptive(num) {
 var arrStats = [0,0,0,0,0,0,0,0,0];

 var sNum = String(num).split('');
 sNum.map(function(cv,ind){
    arrStats[cv] ++;
  });

 for (a=0;a<=sNum.length-1;a++){
   if ( Number(sNum[a]) !== Number(arrStats[a]) ) {return false;}
}

 return true;

}

function countChars(str, char) {
  return (str.match(new RegExp('[' + char + ']', 'g')) || []).length;
}

function selfDescriptive(num) {
  var str = String(num);
  return Array.prototype.every.call(str, function(digit, index) {
    return digit == countChars(str, index);
  });
}

function selfDescriptive(num) {
  //You can do it!!
  var map=[];
  var snum=''+num;
  for(var i=0;i<snum.length;i++){
    map[i]=0;
  }
  for(var i=0;i<snum.length;i++){
    map[snum[i]]=map[snum[i]]+1
  }
  for(var i=0;i<snum.length;i++){
    if(snum[i]!=map[i])return false;
  }
  return true;
}

//hangman game


var guesses = -2;

var words = [

    ['a','c','t','o','r'],
    ['h','e','x','a','g','o','n'],
    ['g','l','o','b','e'],
    ['c','o','m','p','u','t','e','r'],
    ['a','p','p','l','e'],
    ['h','a','n','g','m','a','n'],
    ['p','u','p','p','y'],
    ['s','u','p','p','l','i','e','s'],
    ['m','o','n','e','y'],
    ['c','h','a','i','r'],
    ['w','i','n','n','e','r'],
    ['s','o','l','v','e']

    ];


var wordChooser = floor(random(words.length));
var gameFont= createFont ("Impact", 20);
var mainFont= createFont ("ELLIS", 20);

var startScreen = function() //This is the main screen (background, text at the top)
{
    background(178, 217, 21);
    fill(0,0,0);
    textFont(mainFont, 58);
    fill(0, 0, 0);
    text("Hangman!", 69,51);
    guesses = 0;
};

var drawLines = function()
{
    for ( var h = 0; h < words[wordChooser].length; h++ )
    {
        fill(0, 0, 0);
        line( h*40 + 38, 337, h*40 + 63, 337 );
    }
};

var keyPressed = function()
{
    var temp = 0;

    if ( guesses >= 0 )
    {
      for ( var h = 0; h < words[wordChooser].length; h++ )
      {
        if ( key.toString() === words[wordChooser][h]  &&
             keyCode !== 187 && keyCode !==16 )
        {
            fill(12, 56, 10);
            textSize(20);
            text(words[wordChooser][h], h*40 + 45, 334);
            words[wordChooser][h] = '=';
            temp++;
        }
      }

      if ( temp === 0 && keyCode !== 187 && keyCode !== 16 )
      {
        guesses++;   // wrong guess
        fill(143, 55, 7);
        textSize(20);
        text(key, 300, 69 + guesses*30);
      }
    }
};

var drawHangman = function()
{
    stroke(0, 0, 0);
    noFill();
    strokeWeight(6);
    line(102,80,102,264); //main post
    line(198,80,102,80); // top bar
    line(200,80,200,100); // rope above head
    line(131,83,102,117); // top diagonal bar
    line(147,264,103,203); // lower right diagonal bar
    line(66,264,102,198); // lower left diagonal bar
    line(251,266,61,266); // ground
    strokeWeight(2);

    if ( guesses > 0 )   // Draw the head after first incorrect guess
    {
        ellipse( 200, 124, 40, 40 );
    }
    if ( guesses > 1 )   // Draw body after second incorrect guess
    {
        line( 200, 199, 200, 143 );
    }
    if ( guesses > 2 )   // Draw left leg after third incorrect guess
    {
        line( 200, 199, 170, 242 );
    }
    if ( guesses > 3 )   // Draw right leg after fourth incorret guess
    {
        line( 200, 199, 230, 242 );
    }
    if ( guesses > 4 )   // Draw left arm after fifth incorrect guess
    {
        line( 200, 163, 160, 173 );
    }
    if ( guesses > 5 )
    // Draw right arm, "X" eyes and say "Game over!" after sixth     incorrect guesss
    {
        line( 200, 163, 240, 173 );
        text("x  x",185,129);
        fill(219, 45, 33);
        textSize(32);
        text("Game Over !!", 108, 377 );

        fill(255, 0, 0);
        textSize(21);

        for ( var h = 0; h < words[wordChooser].length; h++ )
        {
           if ( words[wordChooser][h] !== '=' )
           {
             text(words[wordChooser][h], h*40 + 44, 333);
           }
        }

        fill(102, 33, 158);
        textSize(16);
        text("Want to try again? Press Restart!", 163, 397 );
        guesses = -1;
    }
};

var playerWin = function()
{
    var temp = 0;

    for ( var h = 0; h < words[wordChooser].length; h++ )
    {
        if ( words[wordChooser][h] === '=' )
        {
            temp++;
        }
    }

    if ( temp===words[wordChooser].length && guesses>=0)
    {
        fill(255, 0, 255);
        textSize(24);
        if (guesses < 1 )
        {
            text("Sweet !!", 140, 380 );
        }
        else if (guesses < 3 )
        {
            text("Good Job !!", 140, 380 );
        }
        else
        {
            text("Not Bad !!", 140, 380 );
        }
        fill(255, 0, 0);
        textSize(12);
        text("Press Restart", 310, 397 );
        guesses = -1;
    }
};

var draw = function()
{
    if ( guesses === -2 )
    {
        startScreen();
    }
    drawLines();
    drawHangman();
    playerWin();
};


class Hangman {
  constructor(word) {
    this.word = word;
  }

  guess(letter) {
    return 'You got hung!';
  }
}

// reverse a linked list
var reverseLinkedList = function(linkedlist) {
  var node = linkedlist;
  var previous = null;

  while(node) {
    // save next or you lose it!!!
    var save = node.next;
    // reverse pointer
    node.next = previous;
    // increment previous to current node
    previous = node;
    // increment node to next node or null at end of list
    node = save;
  }
  return previous;   // Change the list head !!!
}
linkedlist = reverseLinkedList(linkedlist);


function reverseLinkedList(list, previous){

  //We need to use the the current setting of
  //list.next before we change it. We could save it in a temp variable,
  //or, we could call reverseLinkedList recursively
  if(list.next !== null){
    reverseLinkedList(list.next, list);
  }

  //Everything after 'list' is now reversed, so we don't need list.next anymore.
  //We passed previous in as an argument, so we can go ahead and set next to that.
  list.next = previous;
}

reverseLinkedList(list, null);

var list = function(linkedlist)

console.log('FORWARD');

var node = linkedlist;

while (node) {
  node = node.next;
}


console.log('BACKWARD');

node = linkedlist;

// recursive descent

reverse(node);

function reverse(node) {
  if (node.next) {
    reverse(node.next);
  } else {
    console.log(node);
  }
}

function checkPalindrom(str) {
    return str == str.split('').reverse().join('');
}


var longestPalindrome = function (string) {
  var longest = '';
  var length = longest.length;
  for (var i = 0; i < string.length; i++) {
    // quick reference to the current letter in the string
    var currentLetter = string[i];
    // find the last occurance of the letter in the string
    var firstOccurance;
    for (var j = i + 1; j < string.length; j++) {
      if (currentLetter === string[j]) {
        // we found an occurance that matches the current letter
        firstOccurance = j;
        // generate the substring to match
        var subString = string.slice(i, firstOccurance + 1);
        // check if the substring is a palindrom and if it is longer then longest
        if (subString.length > longest.length &&
            subString.toLowerCase() === subString.split('').reverse().join('').toLowerCase()) {
              longest = subString;
        }
      }
    }
  }
  // return the longest palindrome
  return longest;
};

 var myString = 'sample String';   var length = myString.length ;

 var index = 0;
var value = temp[0];
for (var i = 1; i < temp.length; i++) {
  if (temp[i] < value) {
    value = temp[i];
    index = i;
  }
}
