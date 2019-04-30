---
title: "Pustynna Delta"
date: 2019-04-30T20:24:57.700Z
translationKey: "desert-delta"
slug: "pustynna-delta"
order: 79
tags:
  - hero.attack
---

> Nawiguj do równiny zalewowej Sarven, aby zebrać trzy klucze posiadane przez  Munchkina z imieniem.

https://codecombat.com/play/level/desert-delta

Rozwiązanie

```javascript
// Only attack the enemies in the enemyNames array.
// Be sure to attack in order! 0 -> 1 -> 2 -> 3
var enemyNames = ["Kog", "Godel", "Vorobun", "Rexxar"];

hero.attack(enemyNames[0]);
hero.attack(enemyNames[1]);
// Attack enemyNames[2]:
hero.attack(enemyNames[2]);
// Attack the last element:
hero.attack(enemyNames[3]);

```

Potrzebne przedmioty z |
--- |
attack |


