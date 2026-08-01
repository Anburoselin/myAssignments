
// 1. Find the length of the last word in a string
// 2. Check whether two strings are anagrams

function lengthOfLastWord(s) {
  // Step 1: trim to remove extra spaces
  const trimmed = s.trim();

  // Step 2: if the string is empty, return 0
  if (trimmed.length === 0) {
    return 0;
  }

  // Step 3: split string into words
  const words = trimmed.split(/\s+/);

  // Step 4: find the last word length
  return words[words.length - 1].length;
}

function isAnagram(str1, str2) {
  // Step 1: remove spaces and convert all letters to the same case
  const normalize = (value) => value.toLowerCase().replace(/\s+/g, "");

  const first = normalize(str1);
  const second = normalize(str2);

  // Step 2: if the lengths are different, they cannot be anagrams
  if (first.length !== second.length) {
    return false;
  }

  // Step 3: sort the characters
  const firstSorted = first.split("").sort().join("");
  const secondSorted = second.split("").sort().join("");

  // Step 4: compare the sorted strings and return the result
  return firstSorted === secondSorted;
}

// last word length case Output 
console.log('lengthOfLastWord("Hello World") =', lengthOfLastWord('Hello World'));
console.log('lengthOfLastWord("   fly me   to   the moon  ") =', lengthOfLastWord('   fly me   to   the moon  '));

// anagram check Case Output 
console.log('isAnagram("listen", "silent") =', isAnagram('listen', 'silent'));
console.log('isAnagram("hello", "world") =', isAnagram('hello', 'world'));
