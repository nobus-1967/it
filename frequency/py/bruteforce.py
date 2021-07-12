# Count letters in a string (brute-force method).
import string
import re


def main():
    '''Run main function to count letters in a text.'''    
    text = input('Enter a text to analyze: ')
    
    letters = clear_text(text)
    
    frequency = {}

    for letter in letters:
        if letter not in frequency:
            frequency[letter] = 1
        else:
            frequency[letter] += 1
    
    print('Frequency of used letters:')
    print_results(frequency)


def clear_text(a_text):
    '''Clear an original text and convert it into a list of letters.'''
    lower_text = a_text.lower().strip(string.punctuation)
    
    pattern = '[0-9]+'
    no_digits_text = re.sub(pattern, '', lower_text)   
    
    words = no_digits_text.split()
    cleared_words = list()
    
    for word in words:
        cleared_words.append(word.strip(string.punctuation).replace('\'', ''))
    
    list_letters = list(''.join(cleared_words))
    
    return list_letters


def print_results(a_dict):
    '''Print a dictionary of frequency.'''
    for key, value in a_dict.items():
        print(f'{key}: {value:3d} time(s)')


if __name__ == '__main__':
    main()
