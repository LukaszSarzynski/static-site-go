---
title: "Woodland Cleaver"
date: 2018-11-18T19:30:15.543Z
translationKey: "woodland-cleaver"
slug: "woodland-cleaver"
order: 15
tags:
  - cleave
---

> Use your new cleave ability to fend off munchkins.

https://codecombat.com/play/level/woodland-cleaver

Solution

```javascript
// Use your new "cleave" skill as often as you can.

hero.moveXY(23, 23);
while(true) {
    var enemy = hero.findNearestEnemy();
    if (hero.isReady("cleave")) {
        // Cleave the enemy!
        hero.cleave(enemy);
    }
    else {
        // Else (if cleave isn't ready), do your normal attack.
        hero.attack(enemy);
    }
}

```

Points for |
--- |
damage-taken |
damage-dealt |

Needed items with |
--- |
attack |
cleave |
moveXY |
isReady |
findNearestEnemy |


