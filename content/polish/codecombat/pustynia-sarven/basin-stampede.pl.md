---
title: "Dorzecze Paniki "
date: 2019-04-03T21:39:06.305Z
translationKey: "basin-stampede"
slug: "dorzecze-paniki"
order: 3
tags:
  - hero.findNearestEnemy
  - hero.pos
  - enemy.pos
  - hero.moveXY
---

> Coś wystraszyło Yaksy , Uciekaj,uciekaj jeśli ci życie miłe !

https://codecombat.com/play/level/basin-stampede

Rozwiązanie

```javascript
// Keep moving right, but adjust up and down as you go.

while(true) {
    var enemy = hero.findNearestEnemy();
    var xPos = hero.pos.x + 5;
    var yPos = 17;
    if(enemy) {
        // Adjust y up or down to get away from yaks.
        if(enemy.pos.y > hero.pos.y) {
            // If the Yak is above you, subtract 3 from yPos.
            yPos-=3;
        } else if (enemy.pos.y < hero.pos.y) {
            // If the Yak is below you, add 3 to yPos.
            yPos+=3;
        }
    }
    hero.moveXY(xPos, yPos);
}

```

Potrzebne przedmioty z |
--- |
findNearestEnemy |
pos |
moveXY |


