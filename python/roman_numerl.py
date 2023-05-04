def roman_numeral_converter(string):
   
   dictionary = {
      'I': 1,
      "V": 5,
      "X": 10,
      "L": 50,
      "C": 100,
      "D": 500,
      "M": 1000
   }

   array = []

   for i in range(len(string)):
       # with current_letter and next_letter the rest is easier  
       curent_letter = dictionary[string[i]]
       print("current =>", curent_letter)
       try:
           next_letter = dictionary[string[i+1]]
       except IndexError:
           next_letter = 0
       # decides what to append based on roman numeral rules
       if curent_letter > next_letter:
           array.append(curent_letter)
       elif curent_letter == next_letter:
           array.append(curent_letter)
       elif curent_letter < next_letter:
           array.append(next_letter - curent_letter)
           i+1    
   
       print("array=>", array)    
       total = 0
       for number in array:
           total += number

   return total



if __name__ == '__main__':
    print(roman_numeral_converter("IV"))