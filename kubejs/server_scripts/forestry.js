ServerEvents.recipes(event => {
  //Сачок
  event.remove({ output: 'forestry:scoop' });
  event.shaped(
    'forestry:scoop',
    [
      'S  ',
      'WSS',
      'S  '
    ],
    {
      S: 'minecraft:stick',
      W: '#minecraft:wool'
    }
  ).id('kubejs:forestry_scoop_wool');
  // губчатые соты
  event.custom({
    type: 'forestry:centrifuge',
    time: 20,
    input: { item: 'forestry:bee_comb_sponge' },
    products: [
      { item: 'forestry:beeswax', chance: 1.0 },
      { item: 'minecraft:sponge', chance: 0.01 },
      { item: 'minecraft:wet_sponge', chance: 0.01 },
      { item: 'minecraft:prismarine_crystals', chance: 0.05 },
      { item: 'minecraft:prismarine_shard', chance: 0.05 },
      { item: 'aquamirae:poseidons_breakfast', chance: 0.0001 },
      { item: 'aquamirae:sea_casserole', chance: 0.0005 }
    ]
  }).id('lexlav:centrifuge_sponge_comb');
  //Скалк соты
  event.remove({ id: 'forestry:centrifuge/sculken_comb' });
  event.custom({
    type: 'forestry:centrifuge',
    time: 20,
    input: { item: 'forestry:bee_comb_sculken' },
    products: [
      { item: 'forestry:beeswax', chance: 1.0 },
      { item: 'deeperdarker:grime_brick', chance: 0.5 },
      { item: 'forestry:experience_drop', chance: 0.3 },
      { item: 'minecraft:sculk', chance: 0.01 },
      { item: 'minecraft:sculk_vein', chance: 0.1 },
      { item: 'minecraft:sculk_catalyst', chance: 0.1 },
      { item: 'minecraft:sculk_shrieker', chance: 0.1 },
      { item: 'minecraft:sculk_sensor', chance: 0.1 }
    ]
  }).id('lexlav:centrifuge_sculken_comb');
  //Эндер/таинственные соты
  event.remove({ id: 'forestry:centrifuge/mysterious_comb' });
  event.custom({
    type: 'forestry:centrifuge',
    time: 20,
    input: { item: 'forestry:bee_comb_mysterious' },
    products: [
      { item: 'forestry:propolis_pulsating', chance: 1.0 },
      { item: 'endermanoverhaul:ancient_pearl', chance: 0.25 },
      { item: 'minecraft:ender_pearl', chance: 0.25 },
      { item: 'ae2:ender_dust', chance: 0.25 },
      { item: 'thermal:enderium_ingot', chance: 0.05 }
    ]
  }).id('lexlav:centrifuge_mysterious_comb');
  // Лунные соты
  event.remove({ input: 'lexlav:lunar_comb' });
  event.custom({
    type: 'forestry:centrifuge',
    time: 20,
    input: { item: 'lexlav:lunar_comb' },
    products: [
      { item: 'forestry:beeswax', chance: 1.0 },
      { item: 'ad_astra:raw_desh', chance: 0.25 },
      { item: 'ad_astra:desh_nugget', chance: 1.0 }
    ]
  }).id('lexlav:centrifuge_lunar_comb');
  // Марсианские соты
  event.remove({ input: 'lexlav:martian_comb' });
  event.custom({
    type: 'forestry:centrifuge',
    time: 20,
    input: { item: 'lexlav:martian_comb' },
    products: [
      { item: 'forestry:beeswax', chance: 1.0 },
      { item: 'ad_astra:raw_ostrum', chance: 0.25 },
      { item: 'ad_astra:ostrum_nugget', chance: 1.0 }
    ]
  }).id('lexlav:centrifuge_martian_comb');
  // Венерианские соты
  event.remove({ input: 'lexlav:venusian_comb' });
  event.custom({
    type: 'forestry:centrifuge',
    time: 20,
    input: { item: 'lexlav:venusian_comb' },
    products: [
      { item: 'forestry:beeswax', chance: 1.0 },
      { item: 'ad_astra:raw_calorite', chance: 0.25 },
      { item: 'ad_astra:calorite_nugget', chance: 1.0 }
    ]
  }).id('lexlav:centrifuge_venusian_comb');
  // Дракониевая сота
  event.remove({ input: 'lexlav:dragon_comb' });
  event.custom({
    type: 'forestry:centrifuge',
    time: 20,
    input: { item: 'lexlav:dragon_comb' },
    products: [
      { item: 'iceandfire:dragonsteel_fire_ingot', chance: 0.33 },
      { item: 'iceandfire:dragonsteel_ice_ingot', chance: 0.33 },
      { item: 'iceandfire:dragonsteel_lightning_ingot', chance: 0.33 }
    ]
  }).id('lexlav:centrifuge_dragon_comb');
});