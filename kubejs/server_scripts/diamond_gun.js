ItemEvents.dropped(event=>{
	let player = event.player
	let item = event.item
	if (item.id == "kubejs:diamond_gun") {
		item.resetComponents()
	}
})
ItemEvents.firstLeftClicked(event=>{
	let player = event.player
	let item = event.item
	let hand = event.hand
	if (item.id=="kubejs:diamond_gun" && item.getCustomData()["custom:gun_jammed"]==true && player.isCrouching()) {
		item.shrink(1)
		event.server.runCommandSilent("playsound kubejs:item.diamond_gun.fart player @a[distance=..20] "+event.player.pos.x + " "+event.player.pos.y + " "+event.player.pos.z+" 1.0")
		event.server.runCommandSilent("playsound kubejs:item.diamond_gun.explode player @a[distance=..20] "+event.player.pos.x + " "+event.player.pos.y + " "+event.player.pos.z+" 0.25")
		event.server.runCommandSilent("particle minecraft:explosion_emitter "+event.player.pos.x + " "+event.player.pos.y + " "+event.player.pos.z)
		event.server.runCommandSilent("particle minecraft:explosion_emitter "+event.player.pos.x + " "+event.player.pos.y + " "+event.player.pos.z)
		event.server.runCommandSilent("tp "+player.getName().getString()+" ~ ~0.5 ~")
		player.give(Items.DIAMOND)
		player.give(Items.DIAMOND)
		player.give(Items.REDSTONE)
		player.give(Items.IRON_INGOT)
		player.give(Items.IRON_INGOT)
		player.give(Items.GUNPOWDER)
	}
	if (item.id == "kubejs:diamond_gun") {
		event.server.runCommandSilent("playsound kubejs:item.diamond_gun.click player @a[distance=..5] "+event.player.pos.x + " "+event.player.pos.y + " "+event.player.pos.z+" 1.0")
		item.setLore([
			Text.red("JAMMED! [Crouch] and [Left Click] to fix").italic(false).bold(true)
		])
		event.server.runCommandSilent('title '+player.getName().getString()+' actionbar {"text":"JAMMED! Crouch and Click to fix!","color":"red"}')
		item.setCustomData({"custom:gun_jammed":true})
	}
})

ItemEvents.firstRightClicked(event=>{
	let item = event.item
	if (item.id == "kubejs:diamond_gun") {
		if (item.components.get("minecraft:custom_model_data")) {
			if (item.components.get("minecraft:custom_model_data").value() == 100000){
				item.setCustomModelData(0)
			} else {
				item.setCustomModelData(100000)
			}
		} else {
			item.setCustomModelData(100000)
		}
	}
})

ServerEvents.recipes(event => {
	event.shaped(
		Item.of("kubejs:diamond_gun",1),
		["DDG"," RI","  I"],
		{
			"D":"minecraft:diamond",
			"R":"minecraft:redstone",
			"I":"minecraft:iron_ingot",
			"G":"minecraft:gunpowder"
		}
	)
	.category('equipment')
	.id("kubejs:diamond_gun")
})