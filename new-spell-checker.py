file = open("words.txt", "r")#opens the file
word = str(input("type your word for spell checking:"))
word = word.lower()#changes the variable word to lower case
success = False
i = 1
for i in range(1,53751):#checks is i is btwn 1 & 53751
    line = str(file.readline(i))#sets line to line(i)
    i = i + 1
    if word == line:#if line is = to word it prints success and breaks out of loop
        print("your word is spelt correctly!")
        success = True
        break
if success == False:#if word is never equal to line it prints unsuccessful
    print("The word is spelt wrong")
