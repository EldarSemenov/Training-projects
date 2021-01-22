

import time


import random


my_list = ["Now you see the dark cave. Inside of the cave you have\n "
           "noticed the chest. When you opened it - the shiny SWORD\n "
           "have lightened all the cave.\n", "Now you see the dark cave\n "
           "Inside of the cave you have noticed the chest. When you\n "
           "opened it - the shiny STICK have lightened all the cave.\n",
           "Now you see the dark cave. Inside of the cave you have\n "
           "noticed the chest. When you opend it - the shiny DAGGER\n "
           "have lightened all the cave.\n"]


def print_pause(message):
    print(message)
    time.sleep(3)


def field():
    print_pause("You find yourself standing in an open field,\n "
                "filled with grass and yellow wildflowers.")
    print_pause("Rumor has it that a wicked fairy is somewhere\n "
                "around here, and has been terrifying the nearby\n "
                "village.")


def begining():
    print_pause("You have seen two spots from where you can start\n "
                "your adventure: the strangely old looking house and\n "
                "dark cave. What's the choice will you make:")
    choice = input("1. Enter '1' to knock on the door of the house\n"
                   "2. Enter '2' to go and to peer into the cave\n")
    if choice == '1':
        house()
    elif choice == '2':
        cave()
    else:
        print_pause("You've maken a typo. Try again\n")
        begining()


def house():
    print_pause("You have knoked the door and have heard the loud\n "
                "coming steps. The door has opened and you have seen\n "
                "the creature with red eyes and big teeth but who having\n "
                "human body. You made a couple of steps back unsheathing\n "
                "your small knife.")
    choice = input("What is your decision in this situation?\n "
                   "If you decided to attack the monster press '1',\n "
                   "or press '2' if you want to run away to find the\n "
                   "other way how to cope with this problem.\n ")
    if choice == '1':
        print_pause("You have maken a choice, but the creature\n "
                    "is much stronger than you and your pocket knife\n "
                    "is too small for your enemy.\n"
                    "GAME OVER\n")
        responce = input("Would you like to try again?\n "
                         "Enter 'yes' or 'no'\n")
        if "yes" in responce:
            play_game()
        elif "no" in responce:
            print_pause("Thank you for palying! See you later!")
        else:
            print_pause("You've maken a typo. Try again\n")
            house()
    elif choice == '2':
        cave()
    else:
        print_pause("Try again\n")
        house()


def cave():
    print_pause("You have run away. Your heart is beating intensely.\n "
                "Luckily a nobody is chasing you and you.\n "
                "have some time to think waht to do next.\n ")
    print_pause(random.choice(my_list))
    choice = input("Now you have the meaning against the fairy.\n "
                   "You have to go to the old house again or you\n "
                   "can escape from the deal and steal the item.\n "
                   "Press '1' if you want to free your folks from the evil\n "
                   "Press '2' if decided to steal the magic item and\n "
                   "abandon your people\n")
    if choice == '1':
        final()
    elif choice == '2':
        print_pause("You have acted immorally. You forsook\n "
                    "the inhabitants of the Kingdom. You diserved\n "
                    "an exile.\n"
                    "GAME OVER\n")
        responce = input("Would you like to try again this episode?\n "
                         "Enter 'yes' or 'no'\n")
        if "yes" in responce:
            cave()
        elif "no" in responce:
            print_pause("Thank you for playing! See you later!")
        else:
            print_pause("You've maken a typo. Try again\n")
            cave()


def final():
    print_pause("You have knocked on the door again. Suddenly\n "
                "you heard the terrifying scream behind your back\n "
                "and because of fear your body solidified.\n ")
    print_pause("Coming steps. You need to act quickly.\n")
    choice = input("Enter '1' to slash the monster by turning\n "
                   "your body immediately towards it.\n "
                   "Enter '2' to turn to have a look what is\n "
                   "behind you.\n")
    if choice == '1':
        print_pause("You beheaded the monster. You made lucky\n "
                    "motion. You magic item helped you a lot.\n "
                    "You became a hero not just for this vilidge\n "
                    "but also for the whole Kindom. The King offered\n "
                    "to you to get married on his doughter.\n "
                    "Congratulations! You won the episode of your\n "
                    "adventure.\n")
        responce = input("Would you like to play again?\n "
                         "Enter 'yes' if you wnat\n "
                         "Enter 'no' if you don't want\n ")
        if "yes" in responce:
            play_game()
        elif "no" in responce:
            print_pause("Thank you! Let's play next time!")
        else:
            print_pause("You've maken a typo. Try again\n")
            final()
    elif choice == '2':
        print_pause("Your fright tied down you too much. You was\n "
                    "slow. The consciousness have lost. You died.\n"
                    "GAME OVER\n")
        responce = input("Would you like to try again the last episode?\n "
                         "Enter 'yes' or 'no'\n")
        if "yes" in responce:
            final()
        elif "no" in responce:
            print_pause("Thank you for playing! See you later!")
        else:
            print_pause("You've maken a typo. Try again\n")
            final()


def play_game():
    field()
    begining()


play_game()
