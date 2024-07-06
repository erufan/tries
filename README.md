---

# Trie Data Structure in TypeScript

This repository contains an implementation of a Trie (prefix tree) data structure in TypeScript. The Trie supports insertion, search, and deletion of words, as well as finding all words with a given prefix.

## Features

- **Insert**: Add a new word to the Trie.
- **Contains**: Check if a word exists in the Trie.
- **Remove**: Delete a word from the Trie.
- **Find Words**: Retrieve all words that start with a given prefix.

### Example

Here's an example of how to use the `Tries` class:

```typescript
import Tries from "./Tries";

const tries = new Tries();

tries.insert("car");
tries.insert("care");
tries.insert("careful");

console.log(tries.contains("car")); // Output: true
console.log(tries.contains("care")); // Output: true
console.log(tries.contains("careful")); // Output: true
console.log(tries.contains("cat")); // Output: false

console.log(tries.findWord("car")); // Output: ["car", "care", "careful"]

tries.remove("care");
console.log(tries.contains("care")); // Output: false
console.log(tries.findWord("car")); // Output: ["car", "careful"]
```


