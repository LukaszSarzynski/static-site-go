---
title: "Przejazdem"
date: 2018-12-19T20:14:54.183Z
translationKey: "passing-through"
slug: "przejazdem"
order: 26
tags:
  - item.type
  - item.pos
  - pet.pos
---

> Znalazłeś wioskę przyjaznych ogrów .Nie obrażaj  ich !

https://codecombat.com/play/level/passing-through

Rozwiązanie

```javascript
// Don't insult this tribe of peaceful ogres.

while(true) {
    var item = hero.findNearestItem();
    if(item) {
        // If item.type IS NOT EQUAL TO "gem"
        if(item.type != "gem") {
            // Then follow your pet wolf.
            hero.moveXY(pet.pos.x, pet.pos.y);
        }
        // Else:
        else {
            // Move to the gem's position.
            hero.moveXY(item.pos.x, item.pos.y);
        }        
        
    }
}

```

Potrzebne przedmioty z |
--- |
moveXY |
findNearestItem |


