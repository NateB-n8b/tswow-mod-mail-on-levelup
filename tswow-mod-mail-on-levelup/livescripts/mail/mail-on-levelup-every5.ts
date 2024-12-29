/*
Mail on Every 5th Level Up: A TSwow Mod by NateB-n8b

This will send the player mail with money, a bag, and 20 cloth at levels 5, 10, 15, and 20. 
The cloth is just to showcase what is possible. 
The money is coded in each mail item as PlayerLevel * 1000 Copper (10 Silver). Total is 5 Gold and is enough to learn the apprentice riding skill and get a mount.

Files Needed
livescripts/mail/mail-on-levelup-every5.ts
Register the livescript path and events in livescripts/livescripts.ts

Use
1. Update the Mail subject, body, Item IDs and Counts for each 5 levels in the livescript file
2. Run "build livescripts"

Credit to Suprsokr for the base code (mail with every level up) and null checks!
https://github.com/suprsokr/tswow-mod-mailonlevelup/blob/main/livescripts/mail/RegisterPlayerLevelUpMailEvents.ts
*/

//Mail Info and Rewards for reaching Level 5. Fill in the Item ID and Counts
const MAIL_SUBJECT_LVL5 = "Celebration Package for Reaching Level 5"
const MAIL_BODY_LVL5 = "Congratulations on making it this far! May these items help you along your way. You will get another package when you reach level 10."
const MAIL_ITEM1_LVL5_ID = 4241  //Green Woolen Bag 8 Slot
const MAIL_ITEM1_LVL5_COUNT = 1 //This is stack count. Since bags are not able to stack, it will only send 1 bag, no matter the value here. 
const MAIL_ITEM2_LVL5_ID = 2589  //Linen Cloth
const MAIL_ITEM2_LVL5_COUNT = 20 //This is stack count. Since cloth can stack, it will send the amount listed here, but only to the max stack value. 

//Mail Info and Rewards for reaching Level 10. Fill in the Item ID and Counts
const MAIL_SUBJECT_LVL10 = "Celebration Package for Reaching Level 10"
const MAIL_BODY_LVL10 = "Congratulations on making it this far! May these items help you along your way. You will get another package when you reach level 15."
const MAIL_ITEM1_LVL10_ID = 5575  //Large Green Sack 10 Slot
const MAIL_ITEM1_LVL10_COUNT = 1
const MAIL_ITEM2_LVL10_ID = 2592  //Wool Cloth
const MAIL_ITEM2_LVL10_COUNT = 20

//Mail Info and Rewards for reaching Level 15. Fill in the Item ID and Counts
const MAIL_SUBJECT_LVL15 = "Celebration Package for Reaching Level 15"
const MAIL_BODY_LVL15 = "Congratulations on making it this far! May these items help you along your way. You will get another package when you reach level 20."
const MAIL_ITEM1_LVL15_ID = 10050  //Mageweave Bag 12 Slot
const MAIL_ITEM1_LVL15_COUNT = 1
const MAIL_ITEM2_LVL15_ID = 4306  //Silk Cloth
const MAIL_ITEM2_LVL15_COUNT = 20

//Mail Info and Rewards for reaching Level 20. Fill in the Item ID and Counts
const MAIL_SUBJECT_LVL20 = "Celebration Package for Reaching Level 20"
const MAIL_BODY_LVL20 = "Congratulations on making it this far! May these items help you along your way. This is the last package."
const MAIL_ITEM1_LVL20_ID = 4500  //Traveler's Backpack 16 Slot
const MAIL_ITEM1_LVL20_COUNT = 1
const MAIL_ITEM2_LVL20_ID = 4338  //Mageweave Cloth
const MAIL_ITEM2_LVL20_COUNT = 20

//Making the paramters of the function easier to visualize. 
interface Mail {
    senderType: uint8, // https://trinitycore.atlassian.net/wiki/spaces/tc/pages/2130254/mail#mail-messageType
    from: uint64, // https://trinitycore.atlassian.net/wiki/spaces/tc/pages/2130254/mail#mail-stationery
    subject: string,
    body: string,
    money?: uint32, // the ? operator here marks these parameters as optional. More info: https://www.typescripttutorial.net/typescript-tutorial/typescript-optional-parameters/ 
    cod? : uint32,
    delay? : uint32,
    items? : TSArray<TSItem>
    itemEntries? : TSArray<TSItemEntry>
}

//Making the paramters of the function easier to visualize. 
interface CreateItemInput {
    itemTemplateEntry: uint32,
    count: uint32
}

export function RegisterPlayerLevelUpMailEvents(events: TSEvents) {
    events.Player.OnLevelChanged((player) => {
        //Check if player is level 5. 
        if (player.GetLevel() == 5) {
            //Create the items
            const itemDetails1 : CreateItemInput = {
                itemTemplateEntry: MAIL_ITEM1_LVL5_ID,
                count: MAIL_ITEM1_LVL5_COUNT
            }
            const itemInstance1 : TSItem | undefined = CreateItem(itemDetails1.itemTemplateEntry, itemDetails1.count)
            if (itemInstance1 == undefined) return;

            const itemDetails2 : CreateItemInput = {
                itemTemplateEntry: MAIL_ITEM2_LVL5_ID,
                count: MAIL_ITEM2_LVL5_COUNT
            }
            const itemInstance2 : TSItem | undefined = CreateItem(itemDetails2.itemTemplateEntry, itemDetails2.count)
            if (itemInstance2 == undefined) return;

            //Add Items to the mail
            const congratsPackageItems5 : TSArray<TSItem> = [itemInstance1,itemInstance2]
            
            //Build the mail
            const congratsMail : Mail = {
                senderType: 0, // MAIL_NORMAL
                from: 1, // TEST
                subject: MAIL_SUBJECT_LVL5,
                body: MAIL_BODY_LVL5,
                money: player.GetLevel() * 1000, //In Copper = 50 Silver
                cod: 0,
                delay: 0,
                items: congratsPackageItems5
            }

            //Send the mail
            player.SendMail(
                congratsMail.senderType,
                congratsMail.from,
                congratsMail.subject,
                congratsMail.body,
                congratsMail.money,
                congratsMail.cod,
                congratsMail.delay,
                congratsMail.items
            )

            //Log in the console that the mail was sent
            console.log(`Mail sent to ${player.GetName()} for reaching level ${player.GetLevel()}.`);
        }
        
        //Check if player is level 10. 
        if (player.GetLevel() == 10) {
            //Create the items
            const itemDetails1 : CreateItemInput = {
                itemTemplateEntry: MAIL_ITEM1_LVL10_ID,
                count: MAIL_ITEM1_LVL10_COUNT
            }
            const itemInstance1 : TSItem | undefined = CreateItem(itemDetails1.itemTemplateEntry, itemDetails1.count)
            if (itemInstance1 == undefined) return;

            const itemDetails2 : CreateItemInput = {
                itemTemplateEntry: MAIL_ITEM2_LVL10_ID,
                count: MAIL_ITEM2_LVL10_COUNT
            }
            const itemInstance2 : TSItem | undefined = CreateItem(itemDetails2.itemTemplateEntry, itemDetails2.count)
            if (itemInstance2 == undefined) return;

            //Add Items to the mail
            const congratsPackageItems10 : TSArray<TSItem> = [itemInstance1,itemInstance2]
            
            //Build the mail
            const congratsMail : Mail = {
                senderType: 0, // MAIL_NORMAL
                from: 1, // TEST
                subject: MAIL_SUBJECT_LVL10,
                body: MAIL_BODY_LVL10,
                money: player.GetLevel() * 1000, //In Copper = 1 Gold
                cod: 0,
                delay: 0,
                items: congratsPackageItems10
            }

            //Send the mail
            player.SendMail(
                congratsMail.senderType,
                congratsMail.from,
                congratsMail.subject,
                congratsMail.body,
                congratsMail.money,
                congratsMail.cod,
                congratsMail.delay,
                congratsMail.items
            )

            //Log in the console that the mail was sent
            console.log(`Mail sent to ${player.GetName()} for reaching level ${player.GetLevel()}.`);
        }

        //Check if player is level 15. 
        if (player.GetLevel() == 15) {
            //Create the items
            const itemDetails1 : CreateItemInput = {
                itemTemplateEntry: MAIL_ITEM1_LVL15_ID,
                count: MAIL_ITEM1_LVL15_COUNT
            }
            const itemInstance1 : TSItem | undefined = CreateItem(itemDetails1.itemTemplateEntry, itemDetails1.count)
            if (itemInstance1 == undefined) return;

            const itemDetails2 : CreateItemInput = {
                itemTemplateEntry: MAIL_ITEM2_LVL15_ID,
                count: MAIL_ITEM2_LVL15_COUNT
            }
            const itemInstance2 : TSItem | undefined = CreateItem(itemDetails2.itemTemplateEntry, itemDetails2.count)
            if (itemInstance2 == undefined) return;

            //Add Items to the mail
            const congratsPackageItems15 : TSArray<TSItem> = [itemInstance1,itemInstance2]
            
            //Build the mail
            const congratsMail : Mail = {
                senderType: 0, // MAIL_NORMAL
                from: 1, // TEST
                subject: MAIL_SUBJECT_LVL15,
                body: MAIL_BODY_LVL15,
                money: player.GetLevel() * 1000, //In Copper = 1 Gold 50 Silver
                cod: 0,
                delay: 0,
                items: congratsPackageItems15
            }

            //Send the mail
            player.SendMail(
                congratsMail.senderType,
                congratsMail.from,
                congratsMail.subject,
                congratsMail.body,
                congratsMail.money,
                congratsMail.cod,
                congratsMail.delay,
                congratsMail.items
            )

            //Log in the console that the mail was sent
            console.log(`Mail sent to ${player.GetName()} for reaching level ${player.GetLevel()}.`);
        }

        //Check if player is level 20. 
        if (player.GetLevel() == 20) {
            //Create the items
            const itemDetails1 : CreateItemInput = {
                itemTemplateEntry: MAIL_ITEM1_LVL20_ID,
                count: MAIL_ITEM1_LVL20_COUNT
            }
            const itemInstance1 : TSItem | undefined = CreateItem(itemDetails1.itemTemplateEntry, itemDetails1.count)
            if (itemInstance1 == undefined) return;

            const itemDetails2 : CreateItemInput = {
                itemTemplateEntry: MAIL_ITEM2_LVL20_ID,
                count: MAIL_ITEM2_LVL20_COUNT
            }
            const itemInstance2 : TSItem | undefined = CreateItem(itemDetails2.itemTemplateEntry, itemDetails2.count)
            if (itemInstance2 == undefined) return;

            //Add Items to the mail
            const congratsPackageItems20 : TSArray<TSItem> = [itemInstance1,itemInstance2]
            
            //Build the mail
            const congratsMail : Mail = {
                senderType: 0, // MAIL_NORMAL
                from: 1, // TEST
                subject: MAIL_SUBJECT_LVL20,
                body: MAIL_BODY_LVL20,
                money: player.GetLevel() * 1000, //In Copper = 2 Gold
                cod: 0,
                delay: 0,
                items: congratsPackageItems20
            }

            //Send the mail
            player.SendMail(
                congratsMail.senderType,
                congratsMail.from,
                congratsMail.subject,
                congratsMail.body,
                congratsMail.money,
                congratsMail.cod,
                congratsMail.delay,
                congratsMail.items
            )

            //Log in the console that the mail was sent
            console.log(`Mail sent to ${player.GetName()} for reaching level ${player.GetLevel()}.`);
        }
    })
}