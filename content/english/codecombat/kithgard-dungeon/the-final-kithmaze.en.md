---
title: "The Final Kithmaze"
date: 2019-04-01T21:33:41.295Z
translationKey: "the-final-kithmaze"
slug: "the-final-kithmaze"
order: 34
tags:
  - hero.attack
  - hero.findNearestEnemy
---

> To escape you must find your way through an elder Kithman's maze.

https://codecombat.com/play/level/the-final-kithmaze

Solution

```javascript
// Use a while-true loop to both move and attack.

while(true) {
    hero.moveRight();
    hero.moveUp();
    hero.moveRight();
    var en = hero.findNearestEnemy();
    hero.attack(en);
    hero.attack(en);
    hero.moveDown(2);
    hero.moveUp();
}

```

Points for |
--- |
time |
damage-dealt |

Needed items with |
--- |
moveRight |
findNearestEnemy |
attack |


