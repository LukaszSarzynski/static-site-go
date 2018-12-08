---
title: "Okruchy monet."
date: 2018-12-08T21:03:15.978Z
translationKey: "coincrumbs"
slug: "okruchy-monet"
order: 8
tags:
  - item.pos
  - pozycja
  - findNearestItem
---

> Magazyn jest pełny skarbów,pułapek i szybkich ogrzych strażników.

https://codecombat.com/play/level/coincrumbs

Rozwiązanie

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

Potrzebne przedmioty z |
--- |
findNearestItem |
moveXY |


