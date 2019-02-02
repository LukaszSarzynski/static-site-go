---
title: "Bone Dance"
date: 2019-02-02T21:50:38.253Z
translationKey: "bone-dance"
slug: "bone-dance"
order: 90
tags:
  - circle
  - radius
  - skeleton
---

> You better keep up their song.

https://codecombat.com/play/level/bone-dance

Solution

```javascript
// Soothe the skeletons when they get too close.

// This function is useful to compare float numbers.
function almostEqual(a, b) {
    return Math.abs(a - b) < 1;
}

while(true) {
    var skeleton = hero.findNearestEnemy();
    // Find the radius of the skeleton circle.
    var radius = hero.distanceTo(skeleton);
    // If the circumference is almost equal 100:
    if(almostEqual(2 * radius * Math.PI,100)) {
        // Say, sing, or shout anything once.
        hero.say("eh,");
    }
}

```

Points for |
--- |
damage-dealt |

Needed items with |
--- |
distanceTo |


