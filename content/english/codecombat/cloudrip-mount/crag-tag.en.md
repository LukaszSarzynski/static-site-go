---
title: "Crag Tag"
date: 2019-03-16T21:42:30.604Z
translationKey: "crag-tag"
slug: "crag-tag"
order: 26
tags:
  - hero.findNearest
  - hero.move
  - follow
---

> Use your best boots to catch up to Pender Spellbane.

https://codecombat.com/play/level/crag-tag

Solution

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

Points for |
--- |
time |

Needed items with |
--- |
findNearest |
findFriends |
moveXY |
move |


