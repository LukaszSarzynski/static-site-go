---
title: "Vision of Ogres"
date: 2019-01-12T20:48:51.713Z
translationKey: "vision-of-ogres"
slug: "vision-of-ogres"
order: 94
tags:
  - enemy.health
  - enemy.id
  - split
  - slice
---

> Ogres have the Illusion spell, but we know how it works.

https://codecombat.com/play/level/vision-of-ogres

Solution

```javascript
// Destroy a real ogre and illusions will disappear.

function findRealEnemy(enemies) {
    for (var index = 0; index < enemies.length; index++) {
        var enemy = enemies[index];
        // Convert the enemy's name (id) to lower case
        // and save it in a variable.
        var sNameEnemy = enemy.id.toLowerCase();
        // Split the name by whitespaces and save the words.
        var aNames = sNameEnemy.split(' ');
        // Store the second word in a variable.
        var sSecondName = aNames[1];
        // If the first letter of the second word equals to
        // the last letter of that word.
        if(sSecondName.slice(0,1) === sSecondName.slice(-1)) {
            // Then it's the real one. Return the enemy.
            return enemy;
        }
    }
}

// Only attack real ogres.
while(true) {
    var ogres = hero.findEnemies();
    var realOgre = findRealEnemy(ogres);
    if (realOgre) {
        while(realOgre.health > 0) {
            hero.attack(realOgre);
        }
    }
}

```

Points for |
--- |
time |

Needed items with |
--- |
findEnemies |
attack |


