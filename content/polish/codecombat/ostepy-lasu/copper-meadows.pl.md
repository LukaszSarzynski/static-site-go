---
title: "Miedziane Łąki"
date: 2018-12-29T22:14:16.260Z
translationKey: "copper-meadows"
slug: "miedziane-laki"
order: 15
tags:
  - pickUpFlag
  - findFlag
---

> 

https://codecombat.com/play/level/copper-meadows

Rozwiązanie

```javascript
// Collect all the coins in each meadow.
// Use flags to move between meadows.
// Press Submit when you are ready to place flags.

while(true) {
    var flag = hero.findFlag();
    if (flag) {
        // Pick up the flag.
        hero.pickUpFlag(flag);
    } else {
        // Automatically move to the nearest item you see.
        var item = hero.findNearestItem();
        if (item) {
            var position = item.pos;
            var x = position.x;
            var y = position.y;
            hero.moveXY(x, y);
        }
    }
}

```

Potrzebne przedmioty z |
--- |
pickUpFlag |
findNearestItem |


