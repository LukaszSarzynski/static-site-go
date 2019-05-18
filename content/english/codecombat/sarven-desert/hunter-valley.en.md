---
title: "Hunter Valley"
date: 2019-05-18T21:19:28.978Z
translationKey: "hunter-valley"
slug: "hunter-valley"
order: 4
tags:
  - hero.moveXY
---

> It's a nice place for hunting, but not when you're a bait.

https://codecombat.com/play/level/hunter-valley

Solution

```javascript
// Escape to the right side of the valley.

// The function has the hero move to down and right.
function moveDownRight(shift) {
    hero.moveXY(hero.pos.x + shift, hero.pos.y - shift);
}

// The function has the hero move to up and right.
function moveUpRight(shift) {
    // Complete this function:
    hero.moveXY(hero.pos.x + shift, hero.pos.y + shift);    
}


// The hunter is kind and will show the route.
var hunter = hero.findFriends()[0];
var route = hunter.route;
var routeIndex = 0;

while (routeIndex < route.length) {
    var direction = route[routeIndex];
    if (direction > 0) {
        moveUpRight(8);
    } 
    else  {
        // Use a function moveDownRight with the shift 8:
        moveDownRight(8);
    }
    routeIndex += 1;
}

```

Points for |
--- |
time |

Needed items with |
--- |
moveXY |
findFriends |


