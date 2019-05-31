---
title: "Zespołowa Praca"
date: 2019-05-31T21:50:49.285Z
translationKey: "team-work"
slug: "zespolowa-praca"
order: 8
tags:
  - findItems
  - item.pos
  - hero.moveXY
---

> Trzy klejnoty, trzech ludzi i linia śmierci.

https://codecombat.com/play/level/team-work

Rozwiązanie

```javascript
// Gems will disappear soon. You'll need help!

// findItems() returns an array of items.
var items = hero.findItems();

// Get the first gem from the array.
// Don't forget that the first index is 0.
var gem0 = items[0];

// Tell Bruno to get gem0
hero.say("Bruno " + gem0);

// You can reference the gem without a variable.
hero.say("Matilda " + items[1]);

// Create a variable for the last gem, items[2]:
// Move to that gem's position using moveXY()
hero.moveXY(items[2].pos.x, items[2].pos.y);

```

Potrzebne przedmioty z |
--- |
findItems |
say |
moveXY |


