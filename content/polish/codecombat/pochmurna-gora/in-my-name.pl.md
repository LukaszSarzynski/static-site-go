---
title: "W moim imieniu"
date: 2019-02-28T21:02:35.588Z
translationKey: "in-my-name"
slug: "w-moim-imieniu"
order: 11
tags:
  - findByType
---

> Tylko jedna skrzynia , tylko jedna szansa . Imię Thoktar's trzyma klucz.

https://codecombat.com/play/level/in-my-name

Rozwiązanie

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

Potrzebne przedmioty z |
--- |
findByType |
moveXY |


