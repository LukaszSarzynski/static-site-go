---
title: "Nie biegaj, bądź cicho"
date: 2019-04-27T20:17:32.436Z
translationKey: "dont-rush-be-quiet"
slug: "nie-biegaj-badz-cicho"
order: 22
tags:
  - moveXY
  - gem
---

> Omijaj grad pocisków wystrzelonych z dział poruszając się powoli i ostrożnie.

https://codecombat.com/play/level/dont-rush-be-quiet

Rozwiązanie

```javascript
// Dodge the cannons and collect 8 gems.
// Watch out, cannons are ready to fire!
// Move slow along a special pattern to confuse them.

// This function returns a value from 0 to 30 (0 <= n < 30)
function mod30(n) {
    if (n >= 30) {
        return n - 30;
    } else {
        return n;
    }
}

// This function should return a value from 0 to 40 (0 <= n < 40)
function mod40(n) {
    // Use an if-statement to return the correct value.
    if(n>=40)
    return n-40;
    return n;
}

// You don't need to change the following code:
while (true) {
    var time = hero.time;
    var x = mod30(time) + 25;
    var y = mod40(time) + 10;
    hero.moveXY(x, y);
}

```

Potrzebne przedmioty z |
--- |
time |
moveXY |


