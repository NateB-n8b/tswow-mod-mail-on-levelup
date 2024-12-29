# Mail on Every 5th Level Up: A TSwow Mod by NateB-n8b
This will send the player mail with money, a bag, and 20 cloth at levels 5, 10, 15, and 20. 
The cloth is just to showcase what is possible. 
The money is coded in each mail item as PlayerLevel * 1000 Copper (10 Silver). Total is 5 Gold and is enough to learn the apprentice riding skill and get a mount.

## Files Needed
* livescripts/mail/mail-on-levelup-every5.ts
* Register the livescript path and events in livescripts/livescripts.ts

## Notes: 
* Update the Mail subject, body, Item IDs and Counts for each 5 levels in the livescript file
* Run "build livescripts"
* Credit to Suprsokr for the base code (mail with every level up) and null checks! https://github.com/suprsokr/tswow-mod-mailonlevelup/blob/main/livescripts/mail/RegisterPlayerLevelUpMailEvents.ts

## For More Info on TSwow
Refer to the Wiki: https://tswow.github.io/tswow-wiki/
