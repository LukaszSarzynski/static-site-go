---
title: "Ogrowy Oszukańczy Wąwóz"
date: 2019-03-14T21:33:57.623Z
translationKey: "ogre-gorge-gouger"
slug: "ogrowy-oszukanczy-wawoz"
order: 28
tags:
  - hero.buildXY
  - fence
  - hero.findNearestItem
---

> Wśród wzgórz jest złoto.....złoto i ogry.

https://codecombat.com/play/level/ogre-gorge-gouger

Rozwiązanie

```javascript
// You only have 20 seconds until the ogre horde arrives!
// Grab as much gold as you can, then retreat to your base and wall it off!
while(hero.time < 20) {
    // Collect coins
    //hero.say("I should pick up a coin");
    var item = hero.findNearestItem();
    hero.move(item.pos);    
}

while(hero.pos.x > 16) {
    // Retreat behind the fence
    //hero.say("I should retreat");
    hero.moveXY(13, 37);
}

// Build a fence to keep the ogres out.
hero.buildXY("fence", 21, 37);

```

Potrzebne przedmioty z |
--- |
time |
findNearest |
findItems |
move |
pos |
buildXY |


