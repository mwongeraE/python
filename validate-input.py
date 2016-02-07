#Validating user input as number (Integer)
def inputNumber(message):
    while True:
        try:
            userInput  = int(input(message))
        except ValueError :
            print("Not an integer! Try again.")
            continue
        else:
            return userInput
            break

#MAIN PROGRAM
age = inputNumber("How old are you?")

if (age>=18):
    print("You are old enough to vote")
else:
    print("You will be able to vote in " + str(18-AGE) + " year(s)")
