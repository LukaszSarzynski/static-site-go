---
title: "Korpus sygnalizacyjny"
date: 2019-01-03T21:01:10.514Z
translationKey: "signal-corpse"
slug: "korpus-sygnalizacyjny"
order: 18
tags:
  - findFlag
  - pickUpFlag
  - isReady
  - cleave
  - distanceTo
---

> Użyj flag, aby Twój bohater stosował różne taktyki walki.

https://codecombat.com/play/level/signal-corpse

Rozwiązanie

```javascript
// You can use flags to choose different tactics.
// In this level, the green flag will mean you want to move to the flag.
// The black flag means you want to cleave at the flag.
// The doctor will heal you at the Red X

while(true) {
    var green = hero.findFlag("green");
    var black = hero.findFlag("black");
    var nearest = hero.findNearestEnemy();
    
    if (green) {
        hero.pickUpFlag(green);
    } else if (black && hero.isReady("cleave")) {
        hero.pickUpFlag(black);
        // Cleave!
        hero.cleave(nearest);
    } else if (nearest && hero.distanceTo(nearest) < 10) {
        // Attack!
        hero.attack(nearest);
    }
}
```

Potrzebne przedmioty z |
--- |
findFlag |
findNearestEnemy |
isReady |
cleave |
distanceTo |
moveXY |


