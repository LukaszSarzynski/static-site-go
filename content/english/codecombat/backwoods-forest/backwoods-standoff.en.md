---
title: "Backwoods Standoff"
date: 2018-11-19T20:22:25.462Z
translationKey: "backwoods-standoff"
slug: "backwoods-standoff"
order: 17
tags:
  - cleave
  - isReady
---

> Yell and cleave your way to victory, like a real barbarian.

https://codecombat.com/play/level/backwoods-standoff

Solution

```javascript
// Munchkins are attacking!
// The swarms will come at regular intervals.
// Whenever you can, cleave to clear the mass of enemies.

while (true) {
    var enemy = hero.findNearestEnemy();
    // Use an if-statement with isReady to check "cleave":
    if (hero.isReady("cleave")) {
        // Cleave!
        hero.cleave(enemy);
    }
    // Else, if cleave is not ready:
    else {
        // Attack the nearest ogre!
        hero.attack(enemy);
    }
}

```

Points for |
--- |
damage-dealt |

Needed items with |
--- |
cleave |
isReady |
findNearestEnemy |


