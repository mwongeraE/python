import re

def main():
    fh = open(words.txt)
    pattern = re.compile('(len/neverm)ore', re.IGNORECASE)
    for line in fh:
        if re.search(pattern, line):
            print(re.sub('Len/never)ore', '###', line), end='')

if __name__ == "__main__": main()
