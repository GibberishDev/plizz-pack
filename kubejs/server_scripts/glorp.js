BlockEvents.rightClicked(event => {
	let player = event.player
	let block = event.block
	let world = event.level
	// if (event.server.persistentData.glorp) {return}
	event.level.runCommandSilent
	if (block.id.endsWith("button")) {
		let properties = block.getProperties()
		if (properties.face != "wall") return
		if (checkAltar(block, world)) {
			world.runCommandSilent('title @a title [{"text":"!!!","color":"#00ff00","obfuscated":true},{"text":"GLORP UPON YE!","color":"#00ff00","bold":true,"obfuscated":false},{"text":"!!!","color":"#00ff00","obfuscated":true}]')
			world.runCommandSilent("playsound minecraft:block.beacon.power_select master @a")
			event.server.persistentData.glorp = true
			world.runCommandSilent('summon item ' + block.pos.x + " " + block.pos.y + " " + block.pos.z + ' {"Item":{"id":"kubejs:glorp"}}')
		}
	}
})

function checkAltar(button, world) {
	switch (button.getProperties().facing) {
		case ("south") :{
			if (world.getBlock(button.pos.north()).id =="minecraft:lime_wool" &&
				world.getBlock(button.pos.north().east()).id == "minecraft:lever" &&
				world.getBlock(button.pos.north().west()).id == "minecraft:lever" &&
				world.getBlock(button.pos.north().above()).id.includes("lightning_rod")) {
					world.runCommandSilent("summon minecraft:lightning_bolt "+ button.pos.x + " " + (button.pos.y + 5) + " " + (button.pos.z-1))
					world.runCommandSilent("particle minecraft:explosion_emitter "+ button.pos.x + " " + (button.pos.y + 1) + " " + (button.pos.z-1))
					setTimeout(() => {
						world.runCommandSilent("setblock "+ button.pos.x + " " + button.pos.y + " " + (button.pos.z) +" minecraft:air")
					}, 10);
					world.runCommandSilent("setblock "+ button.pos.x + " " + (button.pos.y + 1) + " " + (button.pos.z-1) +" minecraft:air")
					world.runCommandSilent("setblock "+ (button.pos.x-1) + " " + button.pos.y + " " + (button.pos.z-1) +" minecraft:air")
					world.runCommandSilent("setblock "+ (button.pos.x+1) + " " + button.pos.y + " " + (button.pos.z-1) +" minecraft:air")
					world.runCommandSilent("setblock "+ button.pos.x + " " + button.pos.y + " " + (button.pos.z-1) +" minecraft:air")
				} else return false
				break;}
		case ("north") :{
			if (
				world.getBlock(button.pos.south()).id =="minecraft:lime_wool" &&
				world.getBlock(button.pos.south().east()).id == "minecraft:lever" &&
				world.getBlock(button.pos.south().west()).id == "minecraft:lever" &&
				world.getBlock(button.pos.south().above()).id.includes("lightning_rod")
			) {
				world.runCommandSilent("summon minecraft:lightning_bolt "+ button.pos.x + " " + (button.pos.y + 5) + " " + (button.pos.z+1))
				world.runCommandSilent("particle minecraft:explosion_emitter "+ button.pos.x + " " + (button.pos.y + 1) + " " + (button.pos.z+1))
				setTimeout(() => {
					world.runCommandSilent("setblock "+ button.pos.x + " " + button.pos.y + " " + (button.pos.z) +" minecraft:air")
				}, 10);
				world.runCommandSilent("setblock "+ button.pos.x + " " + (button.pos.y + 1) + " " + (button.pos.z+1) +" minecraft:air")
				world.runCommandSilent("setblock "+ (button.pos.x-1) + " " + button.pos.y + " " + (button.pos.z+1) +" minecraft:air")
				world.runCommandSilent("setblock "+ (button.pos.x+1) + " " + button.pos.y + " " + (button.pos.z+1) +" minecraft:air")
				world.runCommandSilent("setblock "+ button.pos.x + " " + button.pos.y + " " + (button.pos.z+1) +" minecraft:air")
			} else return false
				break;}
		case ("west") : {
			if (
				world.getBlock(button.pos.east()).id =="minecraft:lime_wool" &&
				world.getBlock(button.pos.east().north()).id == "minecraft:lever" &&
				world.getBlock(button.pos.east().south()).id == "minecraft:lever" &&
				world.getBlock(button.pos.east().above()).id.includes("lightning_rod")
			) {
				world.runCommandSilent("summon minecraft:lightning_bolt "+ (button.pos.x+1) + " " + (button.pos.y + 5) + " " + (button.pos.z))
				world.runCommandSilent("particle minecraft:explosion_emitter "+ (button.pos.x+1) + " " + (button.pos.y + 1) + " " + (button.pos.z))
				setTimeout(() => {
					world.runCommandSilent("setblock "+ button.pos.x + " " + button.pos.y + " " + (button.pos.z) +" minecraft:air")
				}, 10);
				world.runCommandSilent("setblock "+ (button.pos.x+1) + " " + (button.pos.y + 1) + " " + (button.pos.z) +" minecraft:air")
				world.runCommandSilent("setblock "+ (button.pos.x+1) + " " + button.pos.y + " " + (button.pos.z-1) +" minecraft:air")
				world.runCommandSilent("setblock "+ (button.pos.x+1) + " " + button.pos.y + " " + (button.pos.z+1) +" minecraft:air")
				world.runCommandSilent("setblock "+ (button.pos.x+1) + " " + button.pos.y + " " + (button.pos.z) +" minecraft:air")
			} else return false
			break;}
		case ("east") : {
			if (
				world.getBlock(button.pos.west()).id =="minecraft:lime_wool" &&
				world.getBlock(button.pos.west().north()).id == "minecraft:lever" &&
				world.getBlock(button.pos.west().south()).id == "minecraft:lever" &&
				world.getBlock(button.pos.west().above()).id.includes("lightning_rod")
			) {
				world.runCommandSilent("summon minecraft:lightning_bolt "+ (button.pos.x-1) + " " + (button.pos.y + 5) + " " + (button.pos.z))
				world.runCommandSilent("particle minecraft:explosion_emitter "+ (button.pos.x-1) + " " + (button.pos.y + 1) + " " + (button.pos.z))
				setTimeout(() => {
					world.runCommandSilent("setblock "+ button.pos.x + " " + button.pos.y + " " + (button.pos.z) +" minecraft:air")
				}, 10);
				world.runCommandSilent("setblock "+ (button.pos.x-1) + " " + (button.pos.y + 1) + " " + (button.pos.z) +" minecraft:air")
				world.runCommandSilent("setblock "+ (button.pos.x-1) + " " + button.pos.y + " " + (button.pos.z-1) +" minecraft:air")
				world.runCommandSilent("setblock "+ (button.pos.x-1) + " " + button.pos.y + " " + (button.pos.z+1) +" minecraft:air")
				world.runCommandSilent("setblock "+ (button.pos.x-1) + " " + button.pos.y + " " + (button.pos.z) +" minecraft:air")
			} else return false
			break;}
		default :{}
	}
	return true

}
ServerEvents.recipes(event => {
	event.shapeless(
		Item.of("kubejs:glorp_with_gun")
			.withLore(Text.green("Hands up").obfuscated(true))
		,[
			"kubejs:glorp",
			"kubejs:diamond_gun"
		]
	)
	.id("kubejs:glorp_with_gun")
})
ItemEvents.firstRightClicked(event=>{
	if (event.item.id != "kubejs:glorp" && event.item.id != "kubejs:glorp_with_gun") return
	event.player.tell({"text":"I am glorp","color":"#7bff00"}) 
})