---
title: "Taniec kości"
date: 2019-02-02T21:50:38.255Z
translationKey: "bone-dance"
slug: "taniec-kosci"
order: 90
tags:
  - koło 
  - promień
  - skeleton
---

> Lepiej podtrzymuj   ich piosenkę.

https://codecombat.com/play/level/bone-dance

Rozwiązanie

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

Potrzebne przedmioty z |
--- |
distanceTo |


