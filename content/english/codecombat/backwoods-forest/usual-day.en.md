---
title: "Usual Day"
date: 2018-12-18T20:06:36.379Z
translationKey: "usual-day"
slug: "usual-day"
order: 41
tags:
  - enemy.type
  - iteam.type
  - coins
---

> Ogres, coins, booleans... I've seen it a hundred times. Let's make it shorter at least.

https://codecombat.com/play/level/usual-day

Solution

```javascript
// Defeat munchkins, collect coins. Everything as usual.
// Use AND to check existence and type in one statement.

while (true) {
    var enemy = hero.findNearestEnemy();
    // With AND, the type is only checked if enemy exists.
    if (enemy && enemy.type == "munchkin") {
        hero.attack(enemy);
    }
    // Find the nearest item.
    var iteam = hero.findNearestItem();
    // Collect item if it exists and its type is "coin".
    if(iteam && iteam.type =="coin")
    {
        hero.moveXY(iteam.pos.x, iteam.pos.y);
    }
}

```

Points for |
--- |
damage-dealt |

Needed items with |
--- |
findNearestEnemy |
findNearestItem |
attack |
moveXY |


