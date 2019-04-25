---
title: "Kurz "
date: 2019-04-25T20:11:15.245Z
translationKey: "dust"
slug: "kurz"
order: 0
tags:
  - cleave
  - hero.isReady
  - hero.attack
---


https://codecombat.com/play/level/dust

Rozwiązanie

```javascript
 // Use a while to loop until you have counted 10 attacks.
 function cleaveAttackIfCan()
 {
     var enemy = hero.findNearestEnemy();
     if(enemy && hero.isReady("cleave"))
     {
         hero.cleave(enemy);
     }
     else if(enemy)
     {
         hero.attack(enemy);
     }
 }

var attacks = 0;
while (attacks < 10) {
    // Attack the nearest enemy!
    cleaveAttackIfCan();    
    // Incrementing means to increase by 1.
    // Increment the `attacks` variable.
    attacks += 1;
}
// When you're done, retreat to the ambush point.
hero.moveXY(79, 33);
cleaveAttackIfCan(); 
//hero.say("I should retreat!"); //∆ Don't just stand there blabbering!

```

Potrzebne przedmioty z |
--- |
findNearestEnemy |
attack |
moveXY |


