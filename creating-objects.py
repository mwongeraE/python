class Egg:   #class definition
    def __init__(self, kind = "fried"): #reference to the class itself
        self.kind = kind #object variable

    def whatkind (self):
        return self.kind



def main():
	fried = Egg()
	scrambled = Egg("scrambled")
	print (scrambled.whatkind())

if __name__ == '__main__':main()
