---
title: "Rectangle Formation"
date: 2018-11-10T15:29:44.238Z
translationKey: "rectangle-formation"
slug: "Rectangle-Formation"
order: 100
tags:
  - formation
  - rectangle
---

> Let's start preparations for the parade.

https://codecombat.com/play/level/rectangle-formation

Solution

```javascript
// Form up soldiers and archers in rectangle formations.

// The distance between units.
var step = 8;

// First form up soldiers.
var sergeant = hero.findNearest(hero.findByType("soldier"));
// The coordinates of the bottom left corner.
var soldierX = 8;
var soldierY = 8;
// The width and height of the formation.
var width = sergeant.rectWidth;
var height = sergeant.rectHeight;

for (var x = soldierX; x <= soldierX + width; x += 8) {
    for (var y = soldierY; y <= soldierY + height; y += 8) {
        hero.summon("soldier");
        var lastUnit = hero.built[hero.built.length-1];
        // Command the last built unit by using the  x/y variables:
        hero.command(lastUnit, "move", {'x':x,'y':y});
    }
}

// Next form up archers.
var sniper = hero.findNearest(hero.findByType("archer"));
// The coordinates of the bottom left corner.
var archerX1 = 48;
var archerY1 = 8;
// The coordinates of the top right corner.
var archerX2 = sniper.archerX2;
var archerY2 = sniper.archerY2;

for (var x = archerX1; x <= archerX2; x += 8) {
    for (var y = archerY1; y <= archerY2; y += 8) {
        // Summon an archer.
        hero.summon("archer");
        // Find the last built unit.
        var lastUnit = hero.built[hero.built.length -1];
        // Command the last built unit by using the  x/y variables:
        hero.command(lastUnit, "move", {'x':x,'y':y});
    }
}

```

Points for |
--- |
gold-collected |

Needed items with |
--- |
findNearest |
findByType |


