ItemEvents.rightClicked(event => {
    const { player, item } = event
	if (item.id.indexOf("kubejs:wine_recipe_scroll_") != -1) {
		let scrollId = item.id.replace("kubejs:wine_recipe_scroll_","")
		player.setHeldItem(event.hand, Item.of("kubejs:wine_recipe_" + scrollId))
		event.level.runCommandSilent("playsound minecraft:ui.cartography_table.take_result player @s ~ ~ ~ 2.0")
	}
})