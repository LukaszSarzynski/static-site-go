---
title: "If-stravaganza"
date: 2018-11-16T19:40:39.500Z
translationKey: "if-stravaganza"
slug: "if-stravaganza"
order: 11
tags:
  - HelloWord
---

> Otoczony z wszystkich stron przez nadbiegające ogry! Poczekaj na czas do ataku i wtedy uderz!

https://codecombat.com/play/level/if-stravaganza

Rozwiązanie

```javascript
// Defeat the ogres from within their own camp!

while(true) {
    var enemy = hero.findNearestEnemy();
    // Use an if-statement to check if an enemy exists:
    if(enemy){
        // Attack the enemy if it exists:
        hero.attack(enemy);
    }  
}

```

Potrzebne przedmioty z |
--- |
attack |
findNearestEnemy |


