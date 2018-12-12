---
title: "Endangered Burl"
date: 2018-12-12T22:21:06.299Z
translationKey: "endangered-burl"
slug: "endangered-burl"
order: 15
tags:
  - findNearestEnemy
  - enemy.type
---

> Hunt ogres in the woods, but watch out for lumbering beasts.

https://codecombat.com/play/level/endangered-burl

Solution

```javascript
// Only attack enemies of type "munchkin" and "thrower".
// Don't attack a "burl". Run away from an "ogre"!
while(true) {
    var enemy = hero.findNearestEnemy();
    
    // Remember: don't attack type "burl"!
    if (enemy.type == "burl") {
        hero.say("I'm not attacking that Burl!");
    }
    
    // The "type" property tells you what kind of creature it is.
    if (enemy.type == "munchkin") {
        hero.attack(enemy);
    }
    
    // Use "if" to attack a "thrower".
    if(enemy.type == "thrower")
    {
        hero.attack(enemy);
    }    
    
    // If it's an "ogre", use moveXY to run away to the village gate!
    if(enemy.type == "ogre")
    {
        hero.moveXY(41, 47);
    }    
    
}

```

Points for |
--- |
time |
damage-dealt |

Needed items with |
--- |
attack |
findNearestEnemy |
moveXY |


