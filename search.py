import re

def main():
    fh = open(words.txt)
    for line in fh:
        if re.search('(len/Never)ore', line): #searches for nevermore in word.txt
            print(line, end='')

if __name__ == "__main__": main()
