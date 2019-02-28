---
title: "In My Name"
date: 2019-02-28T21:02:35.585Z
translationKey: "in-my-name"
slug: "in-my-name"
order: 11
tags:
  - findByType
---

> Only one chest, only one chance. Thoktar's name holds the key.

https://codecombat.com/play/level/in-my-name

Solution

```javascript
// You must to find the treasure.
// This function should return the index of a letter:
function letterIndex(word, letter) {
    // Step through each letter as an index of the word.
    for (var i = 0; i < word.length; ++i) {
        // Store a character from the word with the current index.
        // If it is the required letter:
        // Then return the current index (number).
        if (word[i] == letter)
            return i;    // If it is the required letter:
                         // Then return the current index (number).
    }
    // If nothing, return a default value
    return -1;
}
var ogreLetter = "z";
var shaman = hero.findByType("thoktar")[0];
// Find the index and use it for finding the treasure.
var chestIndex = letterIndex(shaman.id, ogreLetter);
hero.moveXY(16 + chestIndex * 8, 36);

```

Points for |
--- |
damage-dealt |

Needed items with |
--- |
findByType |
moveXY |


