ItemEvents.modification(event=>{
	event.modify("minecraft:brick", item=>{
		item.modifyFood(food=>{
			food.alwaysEdible(true)
			food.eatSeconds(5)
			food.effect("minecraft:slowness",200,2,1)
			food.effect("minecraft:nausea", 200, 1,1)
			food.nutrition(-2)
			food.saturation(0)
		})
	})
})