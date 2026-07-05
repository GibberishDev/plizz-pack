ItemEvents.modifyTooltips(event => {
	event.add("minecraft:ender_eye",Text.gray("The eye looks towards the end..."))
	event.add("starcatcher:clam",Text.gray("I think if it is left alone on the sand it might open up"))
	event.add("vinery:apple_mash",Text.gray("Can be bottled in apple press using wine bottles"))
	event.add("minecraft:bone_meal",Text.gray("Can be used to lure out worms out of framland"))
	event.add("supplementaries:soap",Text.gray("Color'b'Gone!"))
	event.modify(/_knife/, tooltip=>{tooltip.insert(1,Text.gray("Slaughtering animals and cutting grass may provide unique drops"))})
	event.modify(/tackle_box_/, tooltip=>{tooltip.insert(1,Text.gray("Can be used to modify your fishing rod. Also can store LOTS of fish!"))})
})
