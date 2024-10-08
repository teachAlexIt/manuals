print('Привет! Как тебя зовут?')
name = input('Введите ваше имя: ')

import random
secret_number = random.randint(1, 10)
print(name + ', я загадала число от 1 до 10. \nПопробуй его отгадать.')

while True:
  user_number= input('Введите ваше число: ')
  if secret_number == int(user_number):
    print('Вы угадали!')
  if secret_number > int(user_number):
    print('Секретное число больше чем ' + user_number)
  if secret_number < int(user_number):
    print('Секретное число меньше чем ' + user_number)