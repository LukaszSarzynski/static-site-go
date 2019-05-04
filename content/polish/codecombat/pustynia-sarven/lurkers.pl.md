---
title: "Przyczajeni"
date: 2019-05-04T20:35:22.892Z
translationKey: "lurkers"
slug: "przyczajeni"
order: 15
tags:
  - findEnemies
  - enemy.type
  - shaman
---

>  Upoluj ogry dopóki będą chować się pośród jaków.

https://codecombat.com/play/level/lurkers

Rozwiązanie

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


