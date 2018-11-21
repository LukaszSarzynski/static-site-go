---
title: "Peasant Protection"
date: 2018-11-21T21:13:13.926Z
translationKey: "peasant-protection"
slug: "peasant-protection"
order: 25
tags:
  - distanceTo
---

> Stay close to Victor.

https://codecombat.com/play/level/peasant-protection

Solution

```javascript
while(true) {
    var enemy = hero.findNearestEnemy();
    var distance = hero.distanceTo(enemy);
    if (distance < 10) {
        // Attack if they get too close to the peasant.
        hero.attack(enemy);
    }
    else {
        // Else, stay close to the peasant! Use else.
        hero.moveXY(40, 38);
    }    
    
}

```

Points for |
--- |
damage-dealt |

Needed items with |
--- |
moveXY |
attack |
distanceTo |
findNearestEnemy |


