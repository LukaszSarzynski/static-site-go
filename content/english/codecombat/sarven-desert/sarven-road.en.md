---
title: "Sarven Road"
date: 2019-04-04T20:01:38.456Z
translationKey: "sarven-road"
slug: "sarven-road"
order: 48
tags:
  - findNearestEnemy
  - moveXY
  - attack
---

> Watch out for ogre scouts on the road as you search for water.

https://codecombat.com/play/level/sarven-road

Solution

```javascript
// Get to the oasis. Watch out for new enemies: ogre scouts!
// Go up and right by adding to the current X and Y position.

while(true) {
    // If there's an enemy, attack.
    if(hero.findNearestEnemy())
    hero.attack(hero.findNearestEnemy());
    
    // Else, keep moving up and to the right. 
    hero.moveXY(hero.pos.x+3, hero.pos.y+3);
}

```

Points for |
--- |
time |
damage-taken |

Needed items with |
--- |
findNearestEnemy |
attack |
pos |
moveXY |


