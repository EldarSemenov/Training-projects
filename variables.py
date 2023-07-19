""" drawing with loops """

import turtle
t = turtle.Pen()

t.color('blue', 'lightblue') #color is func()
t.begin_fill() #is also a func()

count = 0 #variable initialization

#draw a star

for x in range(1, 9):
    t.forward(300)
    t.left(225)
    count = count + 1
    print("Count is: " +str(count))

    #stop drawing after 8 loops
    #if count > 7 and count < 9:
    if count > 7:
        print("The star pattern is completed!")
        #break
t.end_fill()
print("A star is born")




