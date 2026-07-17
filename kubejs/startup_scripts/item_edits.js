ItemEvents.modification(event=>{
	event.modify("*",e=>{
		if (e.burnTime > 0) {
			e.setLore(["AAAA"])
		}
	})
})