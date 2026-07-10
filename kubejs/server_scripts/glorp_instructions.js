ItemEvents.modifyTooltips(event=>{
	event.modify("kubejs:ancient_scroll",tooltip=>{
		tooltip.insert(1,Text.gold("Ancient scroll containing sacred knowledge"))
		tooltip.insert(2,Text.gold("[Right Click] to uncover."))
			})
	event.modify(/kubejs:ancient_manuscript/,{shift:false},tooltip=>{tooltip.insert(1,Text.gold("Look closer... [Shift]"))})
	event.add("kubejs:ancient_manuscript_top_left",{shift:true},[Text.gold("Ancient manuscript depicting process of obtaining lime wool"),Text.gold("█░"),Text.gold("░░")])
	event.add("kubejs:ancient_manuscript_top_right",{shift:true},[Text.gold("Ancient manuscript depicting crafting of lightning rod"),Text.gold("░█"),Text.gold("░░")])
	event.add("kubejs:ancient_manuscript_bot_left",{shift:true},[Text.gold("Ancient manuscript depicting button and lever"),Text.gold("░░"),Text.gold("█░")])
	event.add("kubejs:ancient_manuscript_bot_right",{shift:true},[Text.gold("Ancient manuscript depicting curious contraption"),Text.gold("░░"),Text.gold("░█")])
})

ItemEvents.firstRightClicked(event => {
	if (event.item.id != "kubejs:ancient_scroll") return
	event.server.runCommandSilent("execute at "+event.player.uuid+" run playsound minecraft:ui.cartography_table.take_result player @a[distance=..5] " + event.player.position().x + " " + event.player.position().y + " " + event.player.position().z + " 0.5")
	if (event.player.persistentData.contains("glorpInstructions")) {
		switch (event.player.persistentData.getInt("glorpInstructions")) {
			default:
			event.item.shrink(1)
			event.player.give("kubejs:ancient_manuscript_top_left")
			event.player.persistentData.put("glorpInstructions",1)
			return
			case 1:
			event.item.shrink(1)
			event.player.give("kubejs:ancient_manuscript_top_right")
			event.player.persistentData.put("glorpInstructions",2)
			return
			case 2:
			event.item.shrink(1)
			event.player.give("kubejs:ancient_manuscript_bot_left")
			event.player.persistentData.put("glorpInstructions",3)
			return
			case 3:
			event.item.shrink(1)
			event.player.give("kubejs:ancient_manuscript_bot_right")
			event.player.persistentData.put("glorpInstructions",0)
			return
		}
	} else {
		event.item.shrink(1)
		event.player.give("kubejs:ancient_manuscript_top_left")
		event.player.persistentData.put("glorpInstructions",1)
	}
})