---
title: "Sarven Road #Poziom d_48"
date: 2019-04-04T20:01:38.458Z
translationKey: "sarven-road"
slug: "sarven-road-poziom-d_48"
order: 48
tags:
  - findNearestEnemy
  - moveXY
  - attack
---

> 

https://codecombat.com/play/level/sarven-road

Rozwiązanie

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

Potrzebne przedmioty z |
--- |
findNearestEnemy |
attack |
pos |
moveXY |


