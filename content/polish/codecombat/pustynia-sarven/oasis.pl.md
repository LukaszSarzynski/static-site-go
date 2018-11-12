---
title: "Oaza"
date: 2018-11-12T20:09:04.241Z
translationKey: "oasis"
slug: "oaza"
order: 47
tags:
  - HelloWord
---

> Przebiegnij korytarz piaskowych jaków, aby dotrzeć do oazy i ugasić swoje pragnienie!

https://codecombat.com/play/level/oasis

Rozwiązanie

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

Potrzebne przedmioty z |
--- |
pos |
findNearestEnemy |
distanceTo |
moveXY |


