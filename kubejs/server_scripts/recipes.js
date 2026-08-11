
ServerEvents.recipes(event => {
	event.shapeless(
		Item.of("farmersdelight:rope"),
		["supplementaries:rope"]
	).category("equipment").id("kubejs:compat_rope_farmers")

	event.shapeless(
		Item.of("supplementaries:rope"),
		["farmersdelight:rope"]
	).category("equipment").id("kubejs:compat_rope_supplementaries")

	Color.DYE.forEach(dye=>{
		event.remove(`minecraft:${dye}_concrete_powder`)
		event.shaped(
			Item.of(`minecraft:${dye}_concrete_powder`,8),
			["SSS","SDG","GGG"],
			{
				"D":`minecraft:${dye}_dye`,
				"S":"#supplementaries:hourglass_sands",
				"G":"#c:gravels"
			}
		).category('building').id(`minecraft:${dye}_concrete_powder`).group("kubejs:concrete_powders")
	})

	event.remove(`clayworks:concrete_powder`)
	event.shaped(
		Item.of(`clayworks:concrete_powder`,8),
		["SSS","S G","GGG"],
		{
			"S":"#supplementaries:hourglass_sands",
			"G":"#c:gravels"
		}
	).category('building').id(`clayworks:concrete_powder`)
	event.remove(`hybrid_aquatic:diving_boots`)
	event.shaped(
		Item.of(`hybrid_aquatic:diving_boots`,1),
		["   ","C C","I I"],
		{
			"C":"#c:ingots/copper",
			"I":"#c:ingots/iron"
		}
	).category('equipment').id(`hybrid_aquatic:diving_boots`)

	event.remove(`minecraft:chest`)
	event.shaped(
		Item.of("minecraft:chest", 4),
		["LLL","L L","LLL"],
		{"L":"#minecraft:logs"}
	).category("misc").id("kubejs:logs_to_chests").group("kubejs:logs_to_chests")
	event.shaped(
		Item.of("minecraft:chest", 1),
		["PPP","P P","PPP"],
		{"P":"#minecraft:planks"}
	).category("misc").id("kubejs:planks_to_chest").group("kubejs:planks_to_chest")
})

PlayerEvents.inventoryChanged(event=>{
	let item = event.item
	const recipeManager = event.player.getLevel().recipeManager
	for (const recipe of recipeManager.recipes) {
		for (const ingredient of recipe.getRecipe().getIngredients()) {
			if (ingredient.test(item)) {
				event.player.awardRecipes([recipe])
			}
		}
		if (recipe.getRecipe().getResultItem(recipeManager.registries).id == item.id) event.player.awardRecipes([recipe])
	}
})