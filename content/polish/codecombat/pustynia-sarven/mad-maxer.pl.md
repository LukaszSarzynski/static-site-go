---
title: "Mad Maxer"
date: 2019-05-09T20:45:50.219Z
translationKey: "mad-maxer"
slug: "mad-maxer"
order: 22
tags:
  - hero.distanceTo
  - hero.attack
---

> Napisz kod, który pozwoli Ci określić najbardziej oddalonego wroga.

https://codecombat.com/play/level/mad-maxer

Rozwiązanie

```javascript
// Attack the enemy that's farthest away first.

while(true) {
    var farthest = null;
    var maxDistance = 0;
    var enemyIndex = 0;
    var enemies = hero.findEnemies();

    // Look at all the enemies to figure out which one is farthest away.
    while (enemyIndex < enemies.length) {
        var target = enemies[enemyIndex];
        enemyIndex += 1;

        // Is this enemy farther than the farthest we've seen so far?
        var distance = hero.distanceTo(target);
        if (distance > maxDistance) {
            maxDistance = distance;
            farthest = target;
        }
    }

    if (farthest) {
        // Take out the farthest enemy!
        // Keep attacking the enemy while its health is greater than 0.
        while(farthest.health > 0)
        {
            hero.attack(farthest);
        }
    }
}

```

Potrzebne przedmioty z |
--- |
attack |
distanceTo |
findEnemies |


