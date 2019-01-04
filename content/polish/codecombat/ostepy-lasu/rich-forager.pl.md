---
title: "Bogactwo Zbieracza"
date: 2019-01-04T20:22:30.895Z
translationKey: "rich-forager"
slug: "bogactwo-zbieracza"
order: 19
tags:
  - findFlag
  - pickUpFlag
  - findNearestItem
  - item.pos
---

> Ćwiczenia w tym poziomie : if/elif, zbieranie przedmiotów, walka 

https://codecombat.com/play/level/rich-forager

Rozwiązanie

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

Potrzebne przedmioty z |
--- |
findFlag |
findNearestEnemy |
findNearestItem |
pickUpFlag |
attack |
moveXY |


