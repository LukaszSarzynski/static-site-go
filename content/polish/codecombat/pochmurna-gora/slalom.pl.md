---
title: "Slalom"
date: 2019-03-15T21:37:42.930Z
translationKey: "slalom"
slug: "slalom"
order: 27
tags:
  - hero.findItems
  - hero.move
---

> Idź uważnie, aby zebrać klejnoty, unikając pułapek.

https://codecombat.com/play/level/slalom

Rozwiązanie

```javascript
// Use object literals to walk the safe path and collect the gems.
// You cannot use moveXY() on this level! Use move() to get around.
var gems = hero.findItems();
var moveX = 20;
for (var i = 0; i < gems.length; ++i) {
    while (hero.pos.x < moveX) {
        // move() takes objects with x and y properties, not just numbers.
        hero.move({
            'x': moveX,
            'y': 35
        });
    }
    moveX += 5;
    while (hero.pos.x < moveX) {
        // A gem's position is an object with x and y properties.
        var gem0 = gems[i];
        hero.move(gem0.pos);
    }
    moveX += 5;
}

```

Potrzebne przedmioty z |
--- |
findItems |
pos |
move |


