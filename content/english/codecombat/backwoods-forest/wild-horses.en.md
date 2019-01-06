---
title: "Wild Horses"
date: 2019-01-06T19:52:31.408Z
translationKey: "wild-horses"
slug: "wild-horses"
order: 51
tags:
  - findFriends
  - distanceTo
  - friend.pos
---

> Horses have escaped from the farm. Tame all of the wild horses and return them.

https://codecombat.com/play/level/wild-horses

Solution

```javascript
while(true) {
    // How do you find the nearest friendly unit?
    // horse = ?
    var horse = hero.findNearest(hero.findFriends());
    if (horse) {
        var x1 = horse.pos.x - 7;
        var x2 = horse.pos.x + 7;
        if (x1 >= 1) {
            // Move to the horse's y position but use x1 for the x position.
            hero.moveXY(x1, horse.pos.y);
        } else if (x2 <= 79) {
            // Move to the horse's y position but use x2 for the x position.
             hero.moveXY(x2, horse.pos.y);
        }
        var distance = hero.distanceTo(horse);
        if (distance <= 10) {
            hero.say("Whoa");
            // Move to the red x to return the horse to the farm.
             hero.moveXY(27, 54);
            // Move back out into the pasture to begin looking for the next horse.
            //hero.moveXY(41, 18);
        }
    }
}

```

Points for |
--- |
time |

Needed items with |
--- |
distanceTo |
moveXY |
findFriends |
findNearest |


