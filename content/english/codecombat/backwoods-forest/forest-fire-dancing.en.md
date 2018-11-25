---
title: "Forest Fire Dancing"
date: 2018-11-25T21:33:01.317Z
translationKey: "forest-fire-dancing"
slug: "forest-fire-dancing"
order: 30
tags:
  - HelloWord
---

> Only agile heroes can pass! Use nested if statements to dodge the fireballs.

https://codecombat.com/play/level/forest-fire-dancing

Solution

```javascript
// In this level the evilstone is bad! Avoid them, walking the other direction.
while (true) {
    var evilstone = hero.findNearestItem();
    if (evilstone) {
        var pos = evilstone.pos;
        if (pos.x == 34) {     // == means "is equal to"
            // If the evilstone is on the left, go to the right side.
            hero.moveXY(46, 22);
        } else {
            // If the evilstone is on the right, go to the left side.
            hero.moveXY(34, 22);
        }
    } else {
        // If there's no evilstone, go to the middle.
        hero.moveXY(40,22);
    }
}

```

Needed items with |
--- |
findNearestItem |
moveXY |


