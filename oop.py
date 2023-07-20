import time
class Car():
    '''A simple class that describes a car'''

    def __init__(self, model, cost):
        '''Initialize the object'''
        self.model = model
        self.cost = cost

    def start(self):
        '''starts the car'''
        print(self.model.title() + " is now starting.\n")

myCar = Car("audi", "$98k")
myCar.start()

print("Creating new car...\n")

time.sleep(2)

my2ndCar = Car("ford", "$28k")
my2ndCar.start()
        
