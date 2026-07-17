// Thanks Derivoid :3
ItemEvents.modifyTooltips(event => {
  event.modifyAll({shift:true},tooltip => {
    tooltip.dynamic('kubejs:fuel_info')
  })
  event.modifyAll({shift:false},tooltip => {
    tooltip.dynamic('kubejs:fuel_info_short')
  })
})

ItemEvents.dynamicTooltips('kubejs:fuel_info', event => {
  const burnTime = event.item.getBurnTime(null)

  if (burnTime > 0) {
    const rawSmelted = burnTime / 200
    const itemsSmelted = Math.round(rawSmelted * 100) / 100

    event.add(Text.red("\ud83d\udd25 ").append(Text.gray(`Smelts ${itemsSmelted} item${itemsSmelted === 1 ? '' : 's'}`)))
  }
})
ItemEvents.dynamicTooltips('kubejs:fuel_info_short', event => {
  const burnTime = event.item.getBurnTime(null)

  if (burnTime > 0) {
    event.add(Text.red("\ud83d\udd25").append(Text.darkGray(" ↑")))
  }
})