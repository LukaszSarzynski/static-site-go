---
title: "Mistrz Imion"
date: 2019-03-29T22:27:38.905Z
translationKey: "master-of-names"
slug: "mistrz-imion"
order: 3
tags:
  - HelloWord
---

> Użyj swoich nowych umiejętności w programowaniu aby namierzyć bezimiennych wrogów.

https://codecombat.com/play/level/master-of-names

Rozwiązanie

```javascript
// Your hero doesn't know the names of these enemies!
// Use the findNearestEnemy method on your new glasses.

// Assign the result of hero.findNearestEnemy() to the variable enemy1:
var en = true;
while(en)
{
    en = hero.findNearestEnemy();
    hero.attack(en);
    hero.attack(en);
}

```

Potrzebne przedmioty z |
--- |
attack |
findNearestEnemy |


