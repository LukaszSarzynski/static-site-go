---
title: "Reindeer Wakeup #Poziom m_27"
date: 2019-02-18T20:17:58.264Z
translationKey: "reindeer-wakeup"
slug: "reindeer-wakeup-poziom-m_27"
order: 27
tags:
  - hero.say
  - findFriends
---

> 

https://codecombat.com/play/level/reindeer-wakeup

Rozwiązanie

```javascript
// This array contains the status for each reindeer.
var deerStatus = [ "asleep", "asleep", "asleep", "asleep", "asleep" ];

// And this array contains our reindeer.
var friends = hero.findFriends();

// Loop through the reindeer and find the awake ones:
for (var deerIndex = 0; deerIndex < friends.length; deerIndex++) {
    var reindeer = friends[deerIndex];

    // Reindeer with y position > 30 aren't in a pen.
    // If so, set the reindeer's entry to "awake".
   if(reindeer.pos.y>30)
   deerStatus[deerIndex] = "awake";
}

// Loop through statuses and report to Merek.
for (var statusIndex = 0; statusIndex < deerStatus.length; statusIndex++) {
    // Tell Merek the reindeer index and its status.
    // Say something like "Reindeer 2 is asleep".

hero.say("Reinder " + statusIndex + " is " + deerStatus[statusIndex]);
}

```

Potrzebne przedmioty z |
--- |
findFriends |


