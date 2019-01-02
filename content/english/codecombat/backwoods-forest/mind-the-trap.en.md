---
title: "Mind the Trap"
date: 2019-01-02T22:30:06.939Z
translationKey: "mind-the-trap"
slug: "mind-the-trap"
order: 17
tags:
  - findFlag
  - pickUpFlag
  - distanceTo
  - findNearestEnemy
---

> Don't take the bait!

https://codecombat.com/play/level/mind-the-trap

Solution

```javascript
// If you try to attack a distant enemy, your hero will charge toward it, ignoring all flags.
// You'll need to make sure you only attack enemies who are close to you!

while(true) {
    var flag = hero.findFlag();
    var enemy = hero.findNearestEnemy();
    
    if(flag) {
        // Pick up the flag.
        hero.pickUpFlag(flag);
        hero.say("I should pick up the flag.");
    } else if(enemy) {
        // Only attack if the enemy distance is < 10 meters
        if(hero.distanceTo(enemy) < 10)
        hero.attack(enemy);
    }
}

```

Points for |
--- |
time |

Needed items with |
--- |
findNearestEnemy |
findFlag |
distanceTo |
attack |
moveXY |


