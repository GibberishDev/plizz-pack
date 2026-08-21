ItemEvents.modifyTooltips(event=>{
	event.modify("minecraft:armor_stand",{shift:false},t=>{
		t.clear()
		t.add(Text.translatable("item.minecraft.armor_stand"))
		t.add(Text.gold("[Shift]"))
	})
	event.modify("minecraft:armor_stand",{shift:true},t=>{
		t.clear()
		t.add(Text.translatable("item.minecraft.armor_stand"))
		t.add(Text.gold("You can change the armor stand pose"))
		t.add(Text.gold("To do so ").append(Text.lightPurple("[")).append(Text.green("SNEAK + RIGHT CLICK")).append(Text.lightPurple("]")).append(Text.gold(" with empty hand\nto bring up gui pose editor")))
	})
	event.modify("supplementaries:bellows",t=>{
		t.add(Text.literal("Speeds up furnace and campfire cooking recipes\nwhen powered or when manually triggered"))
	})
})