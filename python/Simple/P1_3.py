name = '' #3🔴

def start():#3🔴
  global name#3🔴
  print('Привет! Как тебя зовут?')
  name = input('Введите ваше имя: ')
  game()#3🔴

def game():#3🔴
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
      repeat()
      break#2
    
    if secret_number > int(user_number):
      print('Секретное число больше чем ' + user_number)
      attemps-=1 #2
      
    if secret_number < int(user_number):
      print('Секретное число меньше чем ' + user_number)
      attemps-=1 #2
      
    if attemps == 0: #2
      print('Вы истратили все попытки! Секретное число было ' + str(secret_number))#2
      repeat()
      break #2
      
    
def repeat():#3🔴
  repeat_answer = input(name + ', хотите повторить игру? (да/нет): ')#3🔴
  if repeat_answer == 'да' or repeat_answer == 'lf':#3🔴
    print('')
    game()
  elif repeat_answer == 'нет' or repeat_answer == 'ytn':#3🔴
    print('Хорошо ' + name + ', тогда пока!')
  else:#3🔴
    print('Простите ' + name + ', не понял вас.')
    print('')
    repeat()
    
start()#3🔴