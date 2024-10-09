print('Привет! Как тебя зовут?')
name = input('Введите ваше имя: ')

import random
secret_number = random.randint(1, 10)
print(name + ', я загадала число от 1 до 10. \nПопробуй его отгадать.')
attemps = 3 #2

while True:
  print('')#2
  print('Осталось попыток: ' + str(attemps))#2
  user_number= input('Введите ваше число: ')
  
  if secret_number == int(user_number):
    print('Вы угадали!')
    break#2
  
  if secret_number > int(user_number):
    print('Секретное число больше чем ' + user_number)
    attemps-=1 #2
    
  if secret_number < int(user_number):
    print('Секретное число меньше чем ' + user_number)
    attemps-=1 #2
    
  if attemps == 0: #2
    print('Вы истратили все попытки! Секретное число было ' + str(secret_number))#2
    break#2