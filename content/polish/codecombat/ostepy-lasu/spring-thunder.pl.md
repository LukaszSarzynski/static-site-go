---
title: "Wiosenny Grzmot"
date: 2018-12-17T22:13:41.255Z
translationKey: "spring-thunder"
slug: "wiosenny-grzmot"
order: 37
tags:
  - item.value
  - item.type
  - item.pos
---

> 

https://codecombat.com/play/level/spring-thunder

Rozwiązanie

```javascript
// Certain coins and gems attract lightning.
// The hero should only grab silver coins and blue gems.

while (true) {
    var item = hero.findNearestItem();
    // A silver coin has a value of 2.
    // Collect if item.type is equal to "coin"
    // AND item.value is equal to 2.
    if (item.type == "coin" && item.value == 2) {
        hero.moveXY(item.pos.x, item.pos.y);
    }
    // A blue gem has a value of 10.
    // Collect if item.type is equal to "gem"
    // AND item.value is equal to 10.
    if(item.type == "gem" && item.value ==10)
    {
        hero.moveXY(item.pos.x, item.pos.y);
    }
}

```

Potrzebne przedmioty z |
--- |
findNearestItem |
moveXY |


