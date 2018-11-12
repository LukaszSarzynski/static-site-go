---
title: "Oasis"
date: 2018-11-12T20:09:04.238Z
translationKey: "oasis"
slug: "oasis"
order: 47
tags:
  - HelloWord
---

> Run a gauntlet of sand yaks to reach the oasis and quench your thirst.

https://codecombat.com/play/level/oasis

Solution

```javascript
// Move right to reach the oasis,
// Move left to avoid nearby yaks.
while(true) {
    var x = hero.pos.x;
    var y = hero.pos.y;
    var enemy = hero.findNearestEnemy();
    if (enemy && hero.distanceTo(enemy) < 10) {
        // Subtract 10 from x to move left.
        x-=10;
        // Use moveXY to move to the new x, y position.
        hero.moveXY(x, y);
    } else {
        // Add 10 to x to move right.
        x+=10;
        // Use moveXY to move to the new x, y position.
        hero.moveXY(x, y);
    }
    
}

```

Points for |
--- |
time |

Needed items with |
--- |
pos |
findNearestEnemy |
distanceTo |
moveXY |


