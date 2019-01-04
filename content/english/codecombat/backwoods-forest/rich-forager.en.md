---
title: "Rich Forager"
date: 2019-01-04T20:22:30.893Z
translationKey: "rich-forager"
slug: "rich-forager"
order: 19
tags:
  - findFlag
  - pickUpFlag
  - findNearestItem
  - item.pos
---

> This level exercises: if/elif, collection, combat.


https://codecombat.com/play/level/rich-forager

Solution

```javascript
// Use "if" and "else if" to handle any situation.
// Put it all together to defeat enemies and pick up coins!
// Make sure you bought great armor from the item shop! 400 health recommended.

while(true) {
    var flag = hero.findFlag();
    var enemy = hero.findNearestEnemy();
    var item = hero.findNearestItem();

    if (flag) {
        // What happens when I find a flag?
        hero.pickUpFlag(flag);
    }
    else if (enemy) {
        // What happens when I find an enemy?
        if(hero.isReady("cleave"))
        {
            hero.cleave(enemy);
        }
        else {
            hero.attack(enemy);
        }
    }
    else if (item) {
        // What happens when I find an item?
        hero.moveXY(item.pos.x, item.pos.y);
    }
}

```

Points for |
--- |
time |
damage-dealt |

Needed items with |
--- |
findFlag |
findNearestEnemy |
findNearestItem |
pickUpFlag |
attack |
moveXY |


