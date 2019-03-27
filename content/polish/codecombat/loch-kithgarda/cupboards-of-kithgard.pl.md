---
title: "Szafki Kithgardu"
date: 2019-03-27T22:23:56.655Z
translationKey: "cupboards-of-kithgard"
slug: "szafki-kithgardu"
order: 26
tags:
  - HelloWord
---

> Kto wie, jakie okropności czają się w Szafkach Kithgardu?

https://codecombat.com/play/level/cupboards-of-kithgard

Rozwiązanie

```javascript
// There may be something around to help you!

// First, move to the Cupboard.
hero.moveUp();
hero.moveRight(2);
hero.moveDown(2);
// Then, attack the "Cupboard" inside a while-true loop.
while(true)
{
    hero.attack("Cupboard");
}

```

Potrzebne przedmioty z |
--- |
moveRight |
attack |


