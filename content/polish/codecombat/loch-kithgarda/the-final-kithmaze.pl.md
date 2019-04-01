---
title: "Ostatni Kithbirynt"
date: 2019-04-01T21:33:41.298Z
translationKey: "the-final-kithmaze"
slug: "ostatni-kithbirynt"
order: 34
tags:
  - hero.attack
  - hero.findNearestEnemy
---

> Aby uciec musisz  odnaleźć drogę wiodcą przez prastary labitynt Kith'a.


https://codecombat.com/play/level/the-final-kithmaze

Rozwiązanie

```javascript
// Use a while-true loop to both move and attack.

while(true) {
    hero.moveRight();
    hero.moveUp();
    hero.moveRight();
    var en = hero.findNearestEnemy();
    hero.attack(en);
    hero.attack(en);
    hero.moveDown(2);
    hero.moveUp();
}

```

Potrzebne przedmioty z |
--- |
moveRight |
findNearestEnemy |
attack |


