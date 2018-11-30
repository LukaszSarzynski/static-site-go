---
title: "Friend and Foe"
date: 2018-11-30T21:51:03.144Z
translationKey: "friend-and-foe"
slug: "friend-and-foe"
order: 0
tags:
  - findNearestFriend
---

> A brawl in the woods! Pick out friend from foe and prepare for a battle.

https://codecombat.com/play/level/friend-and-foe

Solution

```javascript
// Peasants and peons are gathering in the forest.
// Command the peasants to battle and the peons to go away!

while(true) {
    var friend = hero.findNearestFriend();
    if(friend) {
        hero.say("To battle, " + friend.id + "!");
    }
    // Now find the nearest enemy and tell them to go away.
    var enemy = hero.findNearestEnemy();
    if(enemy)
    {
        hero.say("go away, " + enemy.id + "!");
    }    
}
```

Points for |
--- |
damage-dealt |

Needed items with |
--- |
findNearestEnemy |


