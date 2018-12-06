---
title: "The Wizard's Door"
date: 2018-12-06T22:49:39.669Z
translationKey: "the-wizards-door"
slug: "the-wizards-door"
order: 4
tags:
  - HelloWord
---

> Use mathematical programming to find the door to the wizards' secret lair.

https://codecombat.com/play/level/the-wizards-door

Solution

```javascript
// Move to 'Laszlo' and get his secret number.
hero.moveXY(30, 13);
var las = hero.findNearestFriend().getSecret();

// Add 7 to 'Laszlo's number to get 'Erzsebet's number.
// Move to 'Erzsebet' and say her magic number.
var erz = las + 7;
hero.moveXY(17, 26);
hero.say(erz);

// Divide 'Erzsebet's number by 4 to get 'Simonyi's number.
// Go to 'Simonyi' and tell him his number.
hero.moveXY(30, 40);
var sim = erz/4;
hero.say(sim);

// Multiply 'Simonyi's number by 'Laszlo's to get 'Agata's number
// Go to 'Agata' and tell her her number.
hero.moveXY(43, 25);
hero.say(sim*las);

```

Points for |
--- |
time |

Needed items with |
--- |
moveXY |


