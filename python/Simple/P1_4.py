name = '' 
current_symbol = ['0', '1','2','3','4','5','6','7','8','9']#🔴

def start():
  global name
  print('Привет! Как тебя зовут?')
  name = input('Введите ваше имя: ')
  if name:  #🔴
    game()
  else: #🔴
    start()

def game():
  import random
  secret_number = random.randint(1, 10)
  print(name + ', я загадала число от 1 до 10. \nПопробуй его отгадать.')
  attemps = 3 

  while True:
    print('')
    print('Осталось попыток: ' + str(attemps))
    user_number= input('Введите ваше число: ')
    if user_number: #🔴
      for symbol in user_number:#🔴
        if symbol not in current_symbol:#🔴
          print('Вы ввели не число')#🔴
          break
      else:#🔴
        if secret_number == int(user_number):
          print('Вы угадали!')
          repeat()
          break
        
        if secret_number > int(user_number):
          print('Секретное число больше чем ' + user_number)
          attemps-=1 
          
        if secret_number < int(user_number):
          print('Секретное число меньше чем ' + user_number)
          attemps-=1 
          
        if attemps == 0: 
          print('Вы истратили все попытки! Секретное число было ' + str(secret_number))
          repeat()
          break 
    else: #🔴
      print('Вы ничего не ввели')  
    
def repeat():
  repeat_answer = input(name + ', хотите повторить игру? (да/нет): ')
  if repeat_answer == 'да' or repeat_answer == 'lf':
    print('')
    game()
  elif repeat_answer == 'нет' or repeat_answer == 'ytn':
    print('Хорошо ' + name + ', тогда пока!')
  else:
    print('Простите ' + name + ', не понял вас.')
    print('')
    repeat()
    
start()