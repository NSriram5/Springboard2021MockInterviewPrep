//7 keys - 7 letters
// first letter - key letter

function escapeRoom(keypads, wordList) {
  let result = [];
  for (keypad of keypads) {
    let key = keypad[0];
    let hash = createHash(keypad);
    let res = keypadRes(hash, wordList, key);

    result.push(res);
  }

  function keypadRes(hash, words, key, count = 0, idx = 0) {
    if (words.length === idx) return count;

    let curWord = words[idx];

    idx++;

    curWord = new Set(curWord);

    if (!curWord.has(key)) return keypadRes(hash, words, key, count, idx);

    for (letter of curWord) {
      if (!hash[letter]) return keypadRes(hash, words, key, count, idx);
    }
    count++;
    return keypadRes(hash, words, key, count, idx);
  }

  function createHash(keypad) {
    let hash = {};
    for (let i = 0; i < keypad.length; i++) {
      let letter = keypad[i];
      hash[letter] = 1;
    }
    return hash;
  }

  return result;
}

console.log(
  escapeRoom(
    ["AELWXYZ", "AELPXYZ", "AELPSXY", "SAELPRT", "XAEBKSY"],
    ["APPLE", "PLEAS", "PLEASE"]
  )
);
