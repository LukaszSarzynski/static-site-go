---
title: "The Bane of Soldiers"
date: 2019-03-11T21:11:56.506Z
translationKey: "the-bane-of-soldiers"
slug: "the-bane-of-soldiers"
order: 17
tags:
  - hero.command
  - friend-move
---

> There are two kinds of soldiers in your army: those who touch strange new robots, and those who dig the graves.

https://codecombat.com/play/level/the-bane-of-soldiers

Solution

```javascript
// Robobombs explode when they are destroyed or touch an enemy.
// Split up your soldiers so that they don't all get exploded together.

while(true) {
    var enemies = hero.findEnemies();
    var enemy = hero.findNearest(enemies);
    var friends = hero.findFriends();
    // Send the first soldier of the friends array towards the enemy.
 
    hero.command( friends[0], "move", enemies[0].pos);
    hero.command( friends[1], "move", enemies[1].pos);
    hero.command( friends[2], "move", enemies[2].pos);
    
    // i = 1 starts the index at the second element!
    for(var i = 3; i < friends.length; i++) {
        var friend = friends[i];
        // Command the remaining soldiers to run away!
        hero.command(friend, "move", hero.pos);
    }
}

```

Points for |
--- |
damage-taken |

Needed items with |
--- |
findFriends |
findNearest |
findEnemies |


