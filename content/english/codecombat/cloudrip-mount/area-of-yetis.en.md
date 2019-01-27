---
title: "Area of Yetis"
date: 2019-01-27T22:20:45.402Z
translationKey: "area-of-yetis"
slug: "area-of-yetis"
order: 32
tags:
  - circle
---

> The best weapon against yetis is the Yetiborn!

https://codecombat.com/play/level/area-of-yetis

Solution

```javascript
// Defeat Yetis.

// The chosen one can stun yetis with a Shout.
var chosen = hero.findFriends()[0];

// The power of the Shout is equal to the area of a circle.
var radius = chosen.distanceTo(chosen.findNearestEnemy());
// The area of a circle can be calculated with the formula:
var area = radius * radius * Math.PI;
// Tell the area to the chosen one.
hero.say(area);
// Don't just stand there! Fight!
while(hero.findNearest(hero.findByType("yeti"))) {
    hero.attack(hero.findNearest(hero.findByType("yeti")));
}


```

Points for |
--- |
damage-dealt |

Needed items with |
--- |
findFriends |
distanceTo |
attack |


