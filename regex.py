import re

def main():
    fh = open(words.txt)
    for line in fh:
            if re.search('(len/Neverm)ore', line):
                print(line, end='')

if __name__ == "__main__": main()
