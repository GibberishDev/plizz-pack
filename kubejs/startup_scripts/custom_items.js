StartupEvents.registry('item', event => {
	event.create('wine_recipe_scroll_cider')
	.maxStackSize(1)
	.texture("minecraft:item/map")
	.tooltip("\u00A78Use to discover \u00A77[\u00A76Cider\u00A77] \u00A78recipe")
	.use((level, player,hand)=>true)
	.finishUsing((itemstack, level, entity) => {
		let slot = itemstack.getEquipmentSlot()
		itemstack.remove()

	})
	.displayName('Wine Recipe Scroll')

	event.create('wine_recipe_cider')
	.maxStackSize(1)
	.textures({
		layer0: 'minecraft:item/map',
		layer1: 'minecraft:item/filled_map_markings'
	})
	.color((itemstack, tintIndex) => tintIndex == 1 ? Color.GREEN : -1)
	.tooltip("\u00A77[\u00A76Cider\u00A77] \u00A78recipe:")
	.tooltip("\u00A77 - Apple Juice 20%")
	.tooltip("\u00A77 - Sugar")
	.displayName('Cider recipe')
})