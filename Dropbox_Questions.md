You are attempting to solve a puzzle in an Escape Room with your team where you need to open a door to get to the next stage. There are several doors, each with a different keypad on it. The keypads each have 7 keys, containing 7 distinct letters.

The instructor state that one of the keypads will open the correct door leading to the next stage of the game. Your job is to find a word that unlocks the correct keypad.

After struggling for some time, the Escape Room instructor gave you a clue, that the first letter of the keypad is guaranteed to be in the word that opens the door. We will call this letter the 'key' letter.

The goal of this exercise is to come up with as many words as possible that your team can test out on the keypads and find the correct combination to go to the next stage of the game.

What you know: - The correct combination will be a valid English word; - The words are at least 5 letters long, with no maximum length; - the 'key' letter will be in the correct answer; - the words do no contain any letters outside the seven letters on the keypad; - Letters may be reused, including the 'key' letter'

Four our purposes, we'll express each set of keypad letters as a string of length 7 where the first letter is the 'key' letter.

Constraints: - BOth the wordlist and the keypad letters will be supplied in all capital letters; - All words in the wordlist will be of length 5 or greater; - Every sequence of keypad letters will be of exactly length 7

Example:

wordlist ='APPLE, 'PLEAS', 'PLEASE'
keypads: ['AELWXYZ', 'AELPXYZ', 'AELPSXY', 'SAELPRT', 'XAEBKSY']

expected output: [0,1,3,2,0]

---

Design an LRU cache. It's a data structure with a capacity. Beyond this capacity the least recently used item is removed. You should be able to insert an element, access an element given its key, and delete an element, in constant time. Note that when you access an element, even if it's just for a read, it becomes the most recently used.
