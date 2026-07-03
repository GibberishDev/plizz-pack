ItemEvents.modifyTooltips(event => {
	event.add("minecraft:ender_eye",Text.darkGray("The eye looks towards the end..."))
})

ItemEvents.rightClicked(event => {
    const { player, item } = event
	if (item.id == "kubejs:wine_recipe_scroll_cider") {
		player.setHeldItem(event.hand, Item.of("kubejs:wine_recipe_cider"))
		event.level.runCommandSilent("playsound minecraft:ui.cartography_table.take_result player @s ~ ~ ~ 2.0")
	}
})