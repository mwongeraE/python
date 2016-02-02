#Variables, Objects and values
everything in python is an object

every object has an ID,Type and Value

#MUTABLE AND IMMUTABLE OBJECTS

mutable objects may change value, immutable objects may not
 
Most fundamental types in python are immutable, numbers, strings, tuples

mutable objects include:

lists, dictionaries, other objects depending upon implementation


#variables
Creating web apps,games and search engines all involve storing and working with different types of data. They do so using variables. A variable stores a place of data, and gives it a specific name.

my_variable = 10

#boolean
A boolean is like a light switch. It can only have two values. Just like a light switch can only be on or off, a boolean can only be True or False.

my_int = 7

my_float = 1.23

my_bool = True

#reassigning
You can change the value of a variable by "reassigning" it, like this:

my_int = 7

-Change the value of my_int to 3

my_int =3

# Here's some code that will print my_int to the console:

print my_int

#Whitespace

In Python, whitespace is used to structure code. Whitespace is important, so you have to be careful with how you use it.

def spam():
    eggs = 12
    return eggs
        
print spam()

#commenting
The # sign is for comments. A comment is a line of text that Python won't try to run as code. It's just for humans to read.

multiline commenting 

"""Sipping from your cup 'til it runneth over,
Holy Grail.
"""

#Math

You can add, subtract, multiply, divide numbers like this

addition = 72 + 23

subtraction = 108 - 204

multiplication = 108 * 0.5

division = 108 / 9

#Exponentiation

you can combine math with other data types (e.g. booleans) and commands to create useful programs. Calculators just stick to numbers.

Now let's work with exponents.

eight = 2 ** 3

#Modulo

Modulo returns the remainder from a division.

So, if you type 3 % 2, it will return 1, because 2 goes into 3 evenly once, with 1 left over.

#Strings

Another useful data type is the string. A string can contain letters, numbers, and symbols.

name = "Ryan"
age = "19"
food = "cheese"

Strings need to be within quotes.

#Escaping characters

There are some characters that cause problems. For example:

'There's a snake in my boot!'

This code breaks because Python thinks the apostrophe in 'There's' ends the string. We can use the backslash to fix the problem, like this:

'There\'s a snake in my boot!'

#Access by Index
Great work!

Each character in a string is assigned a number. This number is called the index. Check out the diagram in the editor.

c = "cats"[0]

n = "Ryan"[3]

In the above example, we create a new variable called c and set it to "c", the character at index zero of the string "cats".

Next, we create a new variable called n and set it to "n", the character at index three of the string "Ryan".

In Python, we start counting the index from zero instead of one.

#String methods

String methods let you perform specific tasks for strings.

We'll focus on four string methods:

len()

lower()

upper()

str()

 use the lower() method to get rid of all the capitalization in your strings.
 
 The str() method turns non-strings into strings! 
 
 #concatenation.
 
 print "Life " + "of " + "Brian"
 
#Explicit String Conversion

Sometimes you need to combine a string with something that isn't a string. In order to do that, you have to convert the non-string into a string.

print "I have " + str(2) + " coconuts!"

This will print I have 2 coconuts!.

#string formatting
1.When you want to print a variable with a string, there is a better method than concatenating strings together.

name = "Mike"
print "Hello %s" % (name)

#The datetime Library

A lot of times you want to keep track of when something happened. We can do so in Python using datetime.

#Getting the Current Date and Time
We can use a function called datetime.now() to retrieve the current date and time.

from datetime import datetime

print datetime.now()
The first line imports the datetime library so that we can use it.

#Extracting Information
from datetime import datetime
now = datetime.now()

current_year = now.year
current_month = now.month
current_day = now.day
print now.year
print now.month
print now.day

#control flow and conditionals

def clinic():
    print "You've just entered the clinic!"
    print "Do you take the door on the left or the right?"
    answer = raw_input("Type left or right and hit 'Enter'.").lower()
    if answer == "left" or answer == "l":
        print "This is the Verbal Abuse Room, you heap of parrot droppings!"
    elif answer == "right" or answer == "r":
        print "Of course this is the Argument Room, I've told you that already!"
    else:
        print "You didn't pick left or right! Try again."
        clinic()

clinic()

Let's start with the simplest aspect of control flow: comparators. There are six:

Equal to (==)

Not equal to (!=)

Less than (<)

Less than or equal to (<=)

Greater than (>)

Greater than or equal to (>=)

#To Be and/or Not to Be
Boolean operators compare statements and result in boolean values. There are three boolean operators:

and, which checks if both the statements are True;
or, which checks if at least one of the statements is True;
not, which gives the opposite of the statement.

#Conditional Statement Syntax

if is a conditional statement that executes some specified code after checking if its expression is True.

Here's an example of if statement syntax:

if 8 < 9:

    print "Eight is less than nine!"
    
In this example, 8 < 9 is the checked expression and print "Eight is less than nine!" is the specified code.

#2

def using_control_once():

    if 3 < 6:
        return "Success #1"

def using_control_again():

    if "Alpha" == "Alpha":
    
        return "Success #2"

print using_control_once()

print using_control_again()

#Elif

"Elif" is short for "else if." It means exactly what it sounds like: "otherwise, if the following expression is true, do this!"

if 8 > 9:
    print "I don't get printed!"
elif 8 < 9:
    print "I get printed!"
else:
    print "I also don't get printed!"
    
    
#LYNDA PYTHON INTRODUCTION
a, b = 0,1
while b < 50:
   print(b)
   a, b = b, a+b
   print ("Done. ")
   

   
fh =open('lines.txt')
for line in fh.readlines():
    print(line, end='')
    
    
#REUSING CODE

def isprime (n):
    if n == 1:
        print("1 is special")
        return False
    for x in range (2, n):
        if n % x == 0:
            print("{}equals {} x {}".format(n, x, n // x))
            return False
            
     else:
         print (n, "is a prime number")
         return True
         
for n in range(1, 20):
      isprime(n)
      
      
#Generators
def isprime (n):
    if n == 1:
        return False
    for x in range (2, n):
        if n % x == 0:
            return False
            
    else:
        return True
        
def primes(n = 1):
    while (True):
        if isprime(n): yield n
        n+=1
        
for n in primes(n = 1):
    if n > 100: break
    print(n)

    
 #Reusability of code   
 class Fibonacci():
    def __init__(self, a, b):
        self.a = a
        self.b = b
    
    def series(self):
        while(True):
            yield(self.b)
            self.a, self.b = self.b, self.a + self.b
            
f = Fibonacci(0,1) //instantiated
for r in f.series():
    if r > 100: break
    print(r, end='')
    
 #Handling errors with exceptions
 
 try:
     fh open('xlines.txt')
     for line in fh.readlines():
         print(line)
except IOError as e:
    print("something bad happened ({})".format(e))
    
 print ("after badness")   
    
    