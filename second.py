a, b = 0,1
while b < 50:
   print(b)
   a, b = b, a+b
   print ("Done. ")



fh =open('lines.txt')
for line in fh.readlines():
    print(line)
