---
title: "Lurkers"
date: 2019-05-04T20:35:22.888Z
translationKey: "lurkers"
slug: "lurkers"
order: 15
tags:
  - findEnemies
  - enemy.type
  - shaman
---

> Hunt down ogres as they hide among the yaks.

https://codecombat.com/play/level/lurkers

Solution

```javascript
// findEnemies returns a list of all your enemies.
// Only attack shamans. Don't attack yaks!

var enemies = hero.findEnemies();
var enemyIndex = 0;

// Wrap this section in a while loop to iterate all enemies.
// While the enemyIndex is less than the length of enemies
while (enemyIndex < enemies.length) {
    var enemy = enemies[enemyIndex];
    if (enemy.type == 'shaman') {
        while (enemy.health > 0) {
            hero.attack(enemy);
        }
    }
    // Remember to increment enemyIndex
    enemyIndex++;
}



```

Points for |
--- |
damage-dealt |
time |


