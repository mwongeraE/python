def spellcheck(inputfile):

    filebeingchecked=open(inputfile,'r')
    spellcheckfile=open("words.txt",'r')

    dictionary=spellcheckfile.read().split()
    checkedwords=filebeingchecked.read().split()

    for word in checkedwords:

        low = 0;
        high=len(dictionary)-1

        while low <= high:
            mid=(low+high)//2
            item=dictionary[mid]

            if word == item:
                break

            elif word < item:
                high=mid-1

            else:
                low=mid+1
        else:
            yield word

def main():

    print("This program accepts a file as an input file and uses a spell check function to \nidentify any problematic words that are not found in a common dictionary.")
    inputfile=input("Enter the name of the desired .txt file you wish to spellcheck:")
    for word in spellcheck(inputfile):
        print(word)
main()
