---
title: "Coincrumbs"
date: 2018-12-08T21:03:15.974Z
translationKey: "coincrumbs"
slug: "coincrumbs"
order: 8
tags:
  - item.pos
  - position
  - findNearestItem
---

> The storeroom is full of treasures, traps, and a speedy ogre guard.

https://codecombat.com/play/level/coincrumbs

Solution

```javascript
// Follow the trail of coins to the red X at the exit.

while (true) {
    // This finds the nearest item.
    var item = hero.findNearestItem();
    if (item) {
        // This stores the item's pos, or position in a variable.
        var itemPosition = item.pos;
        // Put the X and Y coordinates of the item into variables.
        var itemX = itemPosition.x;
        var itemY = itemPosition.y;
        // Now, use moveXY to move to itemX and itemY:
        hero.moveXY(itemX, itemY);
    }
}

```

Points for |
--- |
gold-collected |
time |

Needed items with |
--- |
findNearestItem |
moveXY |


