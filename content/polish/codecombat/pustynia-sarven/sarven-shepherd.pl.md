---
title: "Pasterz z Sarven"
date: 2019-05-06T20:38:57.900Z
translationKey: "sarven-shepherd"
slug: "pasterz-z-sarven"
order: 17
tags:
  - enemy.type
  - sand-yak
  - enemy.health
  - hero.attack
---

> Ocal oazę przed hordą ogrów!

https://codecombat.com/play/level/sarven-shepherd

Rozwiązanie

```javascript
// Use while loops to pick out the ogre

while (true) {
    var enemies = hero.findEnemies();
    var enemyIndex = 0;
    while (enemyIndex < enemies.length) {
        // Wrap this logic in a while loop to attack all enemies.
        // Find the array's length with:  enemies.length

        var enemy = enemies[enemyIndex];
        // "!=" means "not equal to."
        if (enemy.type != "sand-yak" && enemy.health > 0) {
            // While the enemy's health is greater than 0, attack it!
            hero.attack(enemy);
        }
        enemyIndex++;
    }
    // Between waves, move back to the center.
    hero.moveXY(39, 33);
}

```

Potrzebne przedmioty z |
--- |
findEnemies |
moveXY |


