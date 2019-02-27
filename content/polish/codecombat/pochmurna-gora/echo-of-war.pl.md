---
title: "Echo  Wojny"
date: 2019-02-27T20:52:39.562Z
translationKey: "echo-of-war"
slug: "echo-wojny"
order: 70
tags:
  - findFriends
  - enemy.health
---

> Musimy się pozbyć tej kupy złomu ze starych robotów.

https://codecombat.com/play/level/echo-of-war

Rozwiązanie

```javascript
// Destroy 5 robobombs. Some of them are old and safe.
// Old (safe) bombs have the certain letter in their id.

// This function checks if searchLetter is in searchWord.
function isLetterInWord(searchWord, searchLetter) {
    // Complete the function.
    for(var i=0;i<searchWord.length;++i){
        if(searchWord[i] === searchLetter)
        return true;
    }    
    return false;
}

// The engineer knows how the old robots are marked.
var engineer = hero.findFriends()[0];
var safeLetter = engineer.safeLetter;

var enemies = hero.findEnemies();
for(var enIndex = 0; enIndex < enemies.length; enIndex++) {
    var enemy = enemies[enIndex];
    if(isLetterInWord(enemy.id, safeLetter)) {
        // Destroy the enemy if it's safe.
        while (enemy.health > 0) {
            hero.attack(enemy);
        }
    }
}

```

Potrzebne przedmioty z |
--- |
findFriends |
attack |


