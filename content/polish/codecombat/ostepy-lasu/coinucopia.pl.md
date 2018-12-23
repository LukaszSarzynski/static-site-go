---
title: "Kopiowanie monet"
date: 2018-12-23T19:32:40.161Z
translationKey: "coinucopia"
slug: "kopiowanie-monet"
order: 14
tags:
  - HelloWord
  - flag
---

> Zaczynamy zabawę w czasie rzeczywistym z umieszczaniem flag do zebrania złotych monet!

https://codecombat.com/play/level/coinucopia

Rozwiązanie

```javascript
// Press Submit when you are ready to place flags.
// Flag buttons appear in the lower left after pressing Submit.
while(true) {
    var flag = hero.findFlag();
    if (flag) {
        hero.pickUpFlag(flag);
    }
    else {
        hero.say("Place a flag for me to go to.");
    }
}
```

Potrzebne przedmioty z |
--- |
findFlag |
moveXY |
pickUpFlag |


