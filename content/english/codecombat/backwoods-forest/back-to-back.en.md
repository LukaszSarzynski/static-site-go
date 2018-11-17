---
title: "Back to Back"
date: 2018-11-17T22:23:37.010Z
translationKey: "back-to-back"
slug: "back-to-back"
order: 13
tags:
  - HelloWord
---

> Patrol the village entrances, but stay defensive.

https://codecombat.com/play/level/back-to-back

Solution

```javascript
// Stay in the middle and defend!

while(true) {
    var enemy = hero.findNearestEnemy();
    if (enemy) {
        // Either attack the enemy...
        hero.attack(enemy);
    }
    else {
        // ... or move back to your defensive position.
        hero.moveXY(40, 34);
    }
}

```

Points for |
--- |
damage-dealt |

Needed items with |
--- |
moveXY |
attack |
findNearestEnemy |


