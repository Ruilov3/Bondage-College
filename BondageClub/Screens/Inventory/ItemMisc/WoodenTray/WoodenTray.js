"use strict";
var InventoryItemMiscWoodenTrayOptions = [
	{
        Name: "Empty",
		Property: {
			Type: null,
        },
    },
    {
        Name: "Cookies",
		Property: {
            Type: "Cookies",
        },
    },
    {
         Name: "Cake",
         Property: {
            Type: "Cake",
        },
    },
    {
        Name: "Drinks",
        Property: {
            Type: "Drinks",
        },
    },
    {
        Name: "SpankingToys",
        Property: {
            Type: "SpankingToys",
        },
    },
    ];

    // Loads the item extension properties
function InventoryItemMiscWoodenTrayLoad() {
	ExtendedItemLoad(InventoryItemMiscWoodenTrayOptions, "SelectWoodenTrayType");
}

// Draw the item extension screen
function InventoryItemMiscWoodenTrayDraw() {
	ExtendedItemDraw(InventoryItemMiscWoodenTrayOptions, "WoodenTrayType");
}

// Catches the item extension clicks
function InventoryItemMiscWoodenTrayClick() {
	ExtendedItemClick(InventoryItemMiscWoodenTrayOptions);
}
function InventoryItemMiscWoodenTrayPublishAction(C, Option) {
	var msg = "WoodenTraySet" + Option.Name;
	var Dictionary = [
		{ Tag: "SourceCharacter", Text: Player.Name, MemberNumber: Player.MemberNumber },
		{ Tag: "DestinationCharacter", Text: C.Name, MemberNumber: C.MemberNumber },
	];
	ChatRoomPublishCustomAction(msg, true, Dictionary);
}
function InventoryItemMiscWoodenTrayNpcDialog(C, Option) {
	C.CurrentDialog = DialogFind(C, "WoodenTray" + Option.Name, "ItemMisc");
}