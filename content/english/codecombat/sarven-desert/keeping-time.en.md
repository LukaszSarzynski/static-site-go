---
title: "Keeping Time"
date: 2019-04-15T20:31:30.015Z
translationKey: "keeping-time"
slug: "keeping-time"
order: 61
tags:
  - hero.time
  - item.pos
---

> Raise funds to support your allies in time to fight off the ogre horde!

https://codecombat.com/play/level/keeping-time

Solution

```javascript
// Use your new skill to choose what to do: hero.time

while(true) {
    var enemy = hero.findNearestEnemy();
     var item = hero.findNearestItem();

    // If it's the first 10 seconds, attack.
    if (hero.time < 10) {
        hero.attack(enemy);
    }
    // Else, if it's the first 35 seconds, collect coins.
    else if (hero.time < 35 && item) {
        hero.moveXY(item.pos.x, item.pos.y);
     }
    // After 35 seconds, attack again!
    else {
        hero.attack(enemy);
    }
}

```

Points for |
--- |
damage-dealt |

Needed items with |
--- |
time |
findNearestEnemy |
attack |
findNearestItem |
moveXY |


