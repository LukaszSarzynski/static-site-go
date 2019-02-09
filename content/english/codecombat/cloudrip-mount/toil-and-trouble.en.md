---
title: "Toil and Trouble"
date: 2019-02-09T22:25:21.300Z
translationKey: "toil-and-trouble"
slug: "toil-and-trouble"
order: 4
tags:
  - hero.command
  - findByType
  - archer
  - soldier
---

> Ogre witches: double the trouble.

https://codecombat.com/play/level/toil-and-trouble

Solution

```javascript
// Ogre Witches have some unpleasant surprises ready for you.

// Define a chooseTarget function which takes a friend argument
// Returns the a target to attack, depending on the type of friend.
// Soldiers should attack the witches, archers should attack nearest enemy.

var ar = hero.findByType("archer");
var so = hero.findByType("soldier");

    var witch = hero.findNearest(hero.findByType("witch"));
    for(var i =0; i< 5 ; ++i)
    {
        hero.command(so[i], "attack", witch);
    }

```

Points for |
--- |
damage-dealt |

Needed items with |
--- |
findEnemies |
findByType |
findFriends |


