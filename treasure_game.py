#Python Treasure Hunt Game
import random, time

def display_game_intro():
    print('''
Welcome to the 'Python Treasure Hunt Game'
... the most amazing gave ever made!

After the long jorney you find yourself in the front
of 2 caves. One cave leads to a treasure, the other
a spike filled pit. Being brave, and a little greedy
for treasure, you've decided to go for it!
''' )

def choose_cave():
    cave= ''
    while cave != '1' and cave != '2':
        print("Which cave do you want to enter? (1 or 2)")
        cave = input()
    return cave

def enter_cave(choosen_cave):
    print("\nYou have entered a cave ... ")
    time.sleep(1)

    random_cave = random.randint(1, 2)
    if random_cave == int(choosen_cave):
        print("---> Lucky you! You found the chest!")
    else:
        print("---> You expected to find a chest\n...and all you found was death!")
    


def main_loop():
    '''The main_loop() function controls the flow of the game by
calling functions and using conditionals'''
    playGameAgain = "yes"

    while playGameAgain == "yes" or playGameAgain == "y":

        display_game_intro()
        chosen_cave = choose_cave()
        enter_cave(chosen_cave)

        print("\n\nDo you want to try again? (yes or no)")
        playGameAgain = input()
        print("You said: " + playGameAgain)
        time.sleep(1)

    if playGameAgain == "yes" or playGameAgain == "y":
        print("\nLet's try again!")
    else:
        print("\nOk, see you later!")
    

main_loop()




  
  
