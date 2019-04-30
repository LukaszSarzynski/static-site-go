---
title: "Desert Delta"
date: 2019-04-30T20:24:57.697Z
translationKey: "desert-delta"
slug: "desert-delta"
order: 79
tags:
  - hero.attack
---

> Navigate the Sarven flood plains to gather the three keys held by named Munchkins.

https://codecombat.com/play/level/desert-delta

Solution

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

Points for |
--- |
time |
damage-dealt |

Needed items with |
--- |
attack |


