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
   pass_letter = False

   for i in range(len(string)):
       # with current_letter and next_letter the rest is easier  
       curent_letter = dictionary[string[i]]
       try:
           next_letter = dictionary[string[i+1]]
       except IndexError:
           next_letter = 0
       # decides what to append based on roman numeral rules
       if pass_letter == True:
           pass_letter = False
           continue
       elif curent_letter > next_letter:
           array.append(curent_letter)
       elif curent_letter == next_letter:
           array.append(curent_letter)
       elif curent_letter < next_letter:
           array.append(next_letter - curent_letter)
           pass_letter = True
           i+1    
   
       total = 0
       for number in array:
           total += number

   return total






















if __name__ == '__main__':
    print("expect: 4")
    print(roman_numeral_converter("IV"))
    print()
    print("expect: 223")
    print(roman_numeral_converter("CCXXIII"))
    print()
    print("expect: 574")
    print(roman_numeral_converter("DLXXIV"))
    print()
    print("expect: 1999")
    print(roman_numeral_converter("MCMXCIX"))
    print()
    print("expect: 3848")
    print(roman_numeral_converter("MMMDCCCXLVIII"))