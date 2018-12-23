---
title: "Coinucopia"
date: 2018-12-23T19:32:40.159Z
translationKey: "coinucopia"
slug: "coinucopia"
order: 14
tags:
  - HelloWord
  - flag
---

> Start playing in real-time with input flags as you collect gold coins!

https://codecombat.com/play/level/coinucopia

Solution

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

Points for |
--- |
gold-collected |

Needed items with |
--- |
findFlag |
moveXY |
pickUpFlag |


