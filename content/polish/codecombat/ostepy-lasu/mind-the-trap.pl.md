---
title: "Uważaj na pułapki"
date: 2019-01-02T22:30:06.942Z
translationKey: "mind-the-trap"
slug: "uwazaj-na-pulapki"
order: 17
tags:
  - findFlag
  - pickUpFlag
  - distanceTo
  - findNearestEnemy
---

> Nie łap przynęty!

https://codecombat.com/play/level/mind-the-trap

Rozwiązanie

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

Potrzebne przedmioty z |
--- |
findNearestEnemy |
findFlag |
distanceTo |
attack |
moveXY |


