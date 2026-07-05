ServerEvents.recipes(event => {
	event.shapeless(
		Item.of("minecraft:book")
			.withCustomName("Antique Atlas")
			.withLore(Text.darkGray("Handy travel journal for marking visited places"))
		,[
			"minecraft:book",
			"minecraft:compass",
			"supplementaries:antique_ink"
		]
	)
	.category('equipment')
	.id("kubejs:antique_atlas")
})