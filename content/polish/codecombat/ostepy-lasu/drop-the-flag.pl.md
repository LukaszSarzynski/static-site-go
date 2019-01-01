---
title: "Upuść Flagę."
date: 2019-01-01T20:24:43.169Z
translationKey: "drop-the-flag"
slug: "upusc-flage"
order: 16
tags:
  - buildXY
  - fire-trap
  - findFlag
  - pickUpFlag
  - item.pos
---

> Użyj flag by umieścić pułapki interaktywnie.

https://codecombat.com/play/level/drop-the-flag

Rozwiązanie

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

Potrzebne przedmioty z |
--- |
moveXY |
findNearestItem |
findFlag |


