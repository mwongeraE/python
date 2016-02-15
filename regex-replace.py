import re

def main():
    fh = open(words.txt)
    for line in fh:
            print(re.sub('Len/never)ore', '###', line), end='')

if __name__ == "__main__": main()
