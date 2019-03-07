---
title: "Hunting Party"
date: 2019-03-07T22:00:31.890Z
translationKey: "hunting-party"
slug: "hunting-party"
order: 34
tags:
  - findFriends
  - friend-defend
  - friend.pos
---

> Search the mountains for ogre camps.

https://codecombat.com/play/level/hunting-party

Solution

```javascript
// You can use findNearestEnemy() on your soldiers to get their nearest enemy instead of yours.

while (true) {
    hero.move({'x':hero.pos.x+3,'y':hero.pos.y});
    var friends = hero.findFriends();
    // Use for-loop and for each friend:
    for(var i=0; i < friends.length ; ++i){
       
        // If they see an enemy then command to attack.
        hero.command(friends[i], "defend", {'x': friends[i].pos.x+2,'y': friends[i].pos.y});
        
        // Command to move east by small steps.
    }
   // hero.say("easy..");
}

```

Points for |
--- |
time |
damage-dealt |

Needed items with |
--- |
findFriends |
summon |


