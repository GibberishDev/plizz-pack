ItemEvents.firstRightClicked(event=>{
	if (!event.item.id.includes("kubejs:dice")) return
	rollDice(event.player, event.item.id.replace("kubejs:dice_",""), event)
})
var playerDice = {}
console.log()
const DICE_TEXT = "⚀⚁⚂⚃⚄⚅"
function rollDice(player, die, event) {
	playerDice[player.uuid] = {
		uuid: player.uuid,
		ticksLeft: 120,
		name: player.username,
		color: Color[die.toUpperCase() + "_DYE"].toHexString()
	}
	event.server.runCommandSilent("execute as "+player.getName().getString()+" run title @s times 0t 1s 0t")
}

ServerEvents.tick(event => {
	for (const plr in playerDice) {
		let obj = playerDice[plr]
		playerDice[plr].ticksLeft = obj.ticksLeft-1
		let diceText = DICE_TEXT[Math.floor(Math.random()*6.0)]
		if ((obj.ticksLeft > 80) || (obj.ticksLeft > 40 && obj.ticksLeft%2 ==0) ||(obj.ticksLeft%4 ==0)) {
			event.server.runCommandSilent('title '+ obj.name +' title {"text":"'+ diceText +'","color":"'+ obj.color +'"}')
			event.server.runCommandSilent('execute at '+ obj.uuid +' run playsound minecraft:block.note_block.hat player @a[distance=..20] ~ ~ ~ 0.2')
		}
		if (playerDice[plr].ticksLeft <= 0) {
			delete playerDice[plr]
			event.server.runCommandSilent('execute at '+ obj.uuid +' run playsound minecraft:block.note_block.bell player @a[distance=..20] ~ ~ ~ 0.2')
			event.server.runCommandSilent('title '+ obj.uuid +' title {"text":"'+ diceText +'"}')
			event.server.runCommandSilent('execute at '+ obj.uuid +' run tellraw @a[distance=..20] [{"text":"'+ obj.name +' rolled a "},{"text":"'+diceText+'","color":"'+obj.color+'"},{"text":" ('+String(DICE_TEXT.search(diceText)+1)+')"}]')
			event.server.runCommandSilent('title '+ obj.uuid +' reset')
		}
	}
	// for (const plr in Object.keys(playerDice)) {
	// }
})

ServerEvents.tags('item',event=>{
	event.add("c:dyed",/kubejs:dice*/)
	event.add("kubejs:dice",/kubejs:dice*/)
	event.remove("c:dyed","kubejs:dice_white")
})

ServerEvents.recipes(event => {
	event.shapeless(Item.of("kubejs:dice_black"),["#kubejs:dice","#c:dyes/black"]).id("kubejs:dice_black").group("kubejs:dice_coloring")
	event.shapeless(Item.of("kubejs:dice_blue"),["#kubejs:dice","#c:dyes/blue"]).id("kubejs:dice_blue").group("kubejs:dice_coloring")
	event.shapeless(Item.of("kubejs:dice_brown"),["#kubejs:dice","#c:dyes/brown"]).id("kubejs:dice_brown").group("kubejs:dice_coloring")
	event.shapeless(Item.of("kubejs:dice_cyan"),["#kubejs:dice","#c:dyes/cyan"]).id("kubejs:dice_cyan").group("kubejs:dice_coloring")
	event.shapeless(Item.of("kubejs:dice_gray"),["#kubejs:dice","#c:dyes/gray"]).id("kubejs:dice_gray").group("kubejs:dice_coloring")
	event.shapeless(Item.of("kubejs:dice_green"),["#kubejs:dice","#c:dyes/green"]).id("kubejs:dice_green").group("kubejs:dice_coloring")
	event.shapeless(Item.of("kubejs:dice_light_blue"),["#kubejs:dice","#c:dyes/light_blue"]).id("kubejs:dice_light_blue").group("kubejs:dice_coloring")
	event.shapeless(Item.of("kubejs:dice_light_gray"),["#kubejs:dice","#c:dyes/light_gray"]).id("kubejs:dice_light_gray").group("kubejs:dice_coloring")
	event.shapeless(Item.of("kubejs:dice_lime"),["#kubejs:dice","#c:dyes/lime"]).id("kubejs:dice_lime").group("kubejs:dice_coloring")
	event.shapeless(Item.of("kubejs:dice_magenta"),["#kubejs:dice","#c:dyes/magenta"]).id("kubejs:dice_magenta").group("kubejs:dice_coloring")
	event.shapeless(Item.of("kubejs:dice_orange"),["#kubejs:dice","#c:dyes/orange"]).id("kubejs:dice_orange").group("kubejs:dice_coloring")
	event.shapeless(Item.of("kubejs:dice_pink"),["#kubejs:dice","#c:dyes/pink"]).id("kubejs:dice_pink").group("kubejs:dice_coloring")
	event.shapeless(Item.of("kubejs:dice_purple"),["#kubejs:dice","#c:dyes/purple"]).id("kubejs:dice_purple").group("kubejs:dice_coloring")
	event.shapeless(Item.of("kubejs:dice_red"),["#kubejs:dice","#c:dyes/red"]).id("kubejs:dice_red").group("kubejs:dice_coloring")
	event.shapeless(Item.of("kubejs:dice_white"),["#kubejs:dice","#c:dyes/white"]).id("kubejs:dice_white").group("kubejs:dice_coloring")
	event.shapeless(Item.of("kubejs:dice_yellow"),["#kubejs:dice","#c:dyes/yellow"]).id("kubejs:dice_yellow").group("kubejs:dice_coloring")
	event.shapeless(Item.of("kubejs:dice_white"),["#c:stones","#c:dyes/white"]).id("kubejs:dice_white_raw")
})