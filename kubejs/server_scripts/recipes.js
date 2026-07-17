ServerEvents.recipes(event => {
	event.shaped(
		Item.of("minecraft:bundle",1),
		["S","L"],
		{"S":"minecraft:string","L":"minecraft:leather"}
	).category('equipment').id("kubejs:bundle")

	event.shapeless(
		Item.of("farmersdelight:rope"),
		["supplementaries:rope"]
	).category("equipment").id("kubejs:compat_rope_farmers")

	event.shapeless(
		Item.of("supplementaries:rope"),
		["farmersdelight:rope"]
	).category("equipment").id("kubejs:compat_rope_supplementaries")
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