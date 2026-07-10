ItemEvents.rightClicked(event => {
    const { player, item } = event
	if (item.id.indexOf("kubejs:wine_recipe_scroll_") != -1) {
		let scrollId = item.id.replace("kubejs:wine_recipe_scroll_","")
		player.setHeldItem(event.hand, Item.of("kubejs:wine_recipe_" + scrollId))
		event.server.runCommandSilent("execute at "+event.player.uuid+" run playsound minecraft:ui.cartography_table.take_result player @a[distance=..5] " + event.player.position().x + " " + event.player.position().y + " " + event.player.position().z + " 2.0")
	}
})