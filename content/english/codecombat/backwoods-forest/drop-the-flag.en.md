---
title: "Drop the Flag"
date: 2019-01-01T20:24:43.166Z
translationKey: "drop-the-flag"
slug: "drop-the-flag"
order: 16
tags:
  - buildXY
  - fire-trap
  - findFlag
  - pickUpFlag
  - item.pos
---

> Use flags to position traps interactively.

https://codecombat.com/play/level/drop-the-flag

Solution

```javascript
// Put flags where you want to build traps.
// When you're not building traps, pick up coins!

while(true) {
    var flag = hero.findFlag();
    if (flag) {
        // How do we get flagX and flagY from the flag's pos?
        // (Look below at how to get x and y from items.)
        var flagX = flag.pos.x;
        var flagY = flag.pos.y;        
        
        hero.buildXY("fire-trap", flagX, flagY);
        hero.pickUpFlag(flag);
    }
    else {
        var item = hero.findNearestItem();
        if (item) {
            var itemPos = item.pos;
            var itemX = itemPos.x;
            var itemY = itemPos.y;
            hero.moveXY(itemX, itemY);
        }
    }
}

```

Points for |
--- |
damage-dealt |

Needed items with |
--- |
moveXY |
findNearestItem |
findFlag |


