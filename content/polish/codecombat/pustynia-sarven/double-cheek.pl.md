---
title: "Podwójna Bezczelność"
date: 2019-04-22T20:00:05.479Z
translationKey: "double-cheek"
slug: "podwojna-bezczelnosc"
order: 1
tags:
  - hero.gold
  - item.pos
  - hero.attack
  - findNearestItem
---

> Jesteś wystarczająco  podstępny by zebrać złoto spod nosa ogra i dać się złapać?

https://codecombat.com/play/level/double-cheek

Rozwiązanie

```javascript
// First, defeat 6 ogres.
// Then collect coins until you have 30 gold.

// This variable is used for counting ogres.
var defeatedOgres = 0;

// This loop is executed while defeatedOgres is less than 6.
while (defeatedOgres < 6) {
    var enemy = hero.findNearestEnemy();
    if (enemy) {
        hero.attack(enemy);
        defeatedOgres += 1;
    } else {
        hero.say("Ogres!");
    }
}

// Move to the right side of the map.
hero.moveXY(54, 51);

// This loop is executed while you have less than 30 gold.
while (hero.gold < 30) {
    // Find and collect coins.
    var item = hero.findNearestItem();
    if(item)
    hero.moveXY(item.pos.x, item.pos.y);    
    // Remove this say() message.
    //hero.say("I should gather coins!");
}

// Move to the exit.
hero.moveXY(76, 32);

```

Potrzebne przedmioty z |
--- |
findNearestEnemy |
attack |
moveXY |
gold |
findNearestItem |


