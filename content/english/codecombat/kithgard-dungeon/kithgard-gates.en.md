---
title: "Kithgard Gates"
date: 2019-04-02T21:35:56.202Z
translationKey: "kithgard-gates"
slug: "kithgard-gates"
order: 36
tags:
  - hero.buildXY
  - fence
---

> Escape the Kithgard dungeons, and don't let the guardians get you.

https://codecombat.com/play/level/kithgard-gates

Solution

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

Points for |
--- |
time |
damage-dealt |

Needed items with |
--- |
buildXY |
moveRight |


