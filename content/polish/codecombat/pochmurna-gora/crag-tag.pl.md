---
title: "Znacznik Turni"
date: 2019-03-16T21:42:30.608Z
translationKey: "crag-tag"
slug: "znacznik-turni"
order: 26
tags:
  - hero.findNearest
  - hero.move
  - podążać
---

> Użyj swoich najlepszych butów by dogonić Pender'a Spellbane'a

https://codecombat.com/play/level/crag-tag

Rozwiązanie

```javascript
// Catch up to Pender Spellbane to learn her secrets.

while(true) {
    // Pender is the only friend here, so she's always the nearest.
    var pender = hero.findNearest(hero.findFriends());

    if (pender) {
        // moveXY() will move to where Pender is,
        // but she'll have moved away by the time you get there.
        //hero.moveXY(pender.pos.x, pender.pos.y);
        
        // move() only moves one step at a time,
        // so you can use it to track your target.
        hero.move(pender.pos);
    }
}

```

Potrzebne przedmioty z |
--- |
findNearest |
findFriends |
moveXY |
move |


