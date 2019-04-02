---
title: "Bramy Kithgardu"
date: 2019-04-02T21:35:56.205Z
translationKey: "kithgard-gates"
slug: "bramy-kithgardu"
order: 36
tags:
  - hero.buildXY
  - fence
---

> Opuść Lochy Kithgardu, tak aby strażnicy Cię nie złapali.

https://codecombat.com/play/level/kithgard-gates

Rozwiązanie

```javascript
// Build 3 fences to keep the ogres at bay!

hero.moveDown();
var y = 34;
while(y > 25) {
    hero.buildXY("fence", 36, y);
    y -= 4;
}
hero.moveRight(3);

```

Potrzebne przedmioty z |
--- |
buildXY |
moveRight |


