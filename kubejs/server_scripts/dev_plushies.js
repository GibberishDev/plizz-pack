var dev_plushie_click_timeout = 0;

BlockEvents.rightClicked(event=>{
	
	if (event.block.id.startsWith("kubejs:dev_plushie_") && dev_plushie_click_timeout == 0) {
		if (event.player.isCrouching()) {
			dev_plushie_click_timeout = 1
			setTimeout(()=>{dev_plushie_click_timeout = 0},1)
			event.block.setBlockState(event.block.id+"[facing="+event.block.getProperties().get("facing")+",pose="+((parseInt(event.block.getProperties().get("pose"))+1)%7)+",waterlogged="+event.block.getProperties().get("waterlogged")+"]")
			var pose_name = ""
			switch (event.block.getProperties().get("pose")) {
				case "0":
					pose_name = "Standing"
					break;
				case "1":
					pose_name = "Sitting"
					break;
				case "2":
					pose_name = "Relaxing"
					break;
				case "3":
					pose_name = "Jumpie"
					break;
				case "4":
					pose_name = "Head stand"
					break;
				case "5":
					pose_name = "Bigfoot"
					break;
				case "6":
					pose_name = "Zombie"
					break;
			}
			event.player.displayClientMessage(Text.white("Set pose: ").append(Text.gold(pose_name)), true)
		}

	}
})