import re

def main():
    fh = open(words.txt)
    for line in fh:
            match = re.search('(len/Never)ore', line):
            if match:
            print(match.group())

if __name__ == "__main__": main()
