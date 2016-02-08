
import re

def main():
    fh = open('raven.txt')
    for line in fh:
    	match = re.search('rare', line)
        if match:
            print(line)

if __name__ == "__main__": main()

