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
  // Меркурий
  event.custom({
    type: 'forestry:centrifuge',
    time: 20,
    input: { item: 'lexlav:mercury_comb' },
    products: [
      { item: 'forestry:beeswax', chance: 1.0 },
      { item: 'industrialupgrade:itemspace/mercury_pebble', chance: 1.0 },
      { item: 'industrialupgrade:itemspace/mercury_boulder', chance: 1.0 },
      { item: 'industrialupgrade:spacecobblestone/mercury_cobblestone', chance: 0.75 },
      { item: 'industrialupgrade:spacestone/mercury_stone', chance: 0.5 }
    ]
  }).id('lexlav:centrifuge_mercury_comb');
  // Венера 
  event.custom({
    type: 'forestry:centrifuge',
    time: 20,
    input: { item: 'lexlav:venusian_comb' },
    products: [
      { item: 'forestry:beeswax', chance: 1.0 },
      { item: 'ad_astra:calorite_nugget', chance: 1.0 },
      { item: 'industrialupgrade:itemspace/venus_pebble', chance: 1.0 },
      { item: 'ad_astra:raw_calorite', chance: 0.15 },
      { item: 'industrialupgrade:itemspace/venus_boulder', chance: 1.0 },
      { item: 'industrialupgrade:spacecobblestone1/venus_cobblestone', chance: 0.75 },
      { item: 'industrialupgrade:spacestone1/venus_stone', chance: 0.5 }
    ]
  }).id('lexlav:centrifuge_venus_comb');
  // Луна 
  event.custom({
    type: 'forestry:centrifuge',
    time: 20,
    input: { item: 'lexlav:lunar_comb' },
    products: [
      { item: 'forestry:beeswax', chance: 1.0 },
      { item: 'industrialupgrade:itemspace/moon_pebble', chance: 1.0 },
      { item: 'ad_astra:desh_nugget', chance: 1.0 },
      { item: 'ad_astra:raw_desh', chance: 0.15 },
      { item: 'industrialupgrade:itemspace/moon_boulder', chance: 1.0 },
      { item: 'industrialupgrade:spacecobblestone1/moon_cobblestone', chance: 0.75 },
      { item: 'industrialupgrade:spacestone1/moon_stone', chance: 0.5 },
    ]
  }).id('lexlav:centrifuge_lunar_comb');
  // Марс (второй рецепт, теперь с воском)
  event.custom({
    type: 'forestry:centrifuge',
    time: 20,
    input: { item: 'lexlav:martian_comb' },
    products: [
      { item: 'forestry:beeswax', chance: 1.0 },
      { item: 'ad_astra:ostrum_nugget', chance: 1.0 },
      { item: 'industrialupgrade:itemspace/mars_pebble', chance: 1.0 },
      { item: 'ad_astra:raw_ostrum', chance: 0.15 },
      { item: 'industrialupgrade:itemspace/mars_boulder', chance: 1.0 },
      { item: 'industrialupgrade:spacecobblestone/mars_cobblestone', chance: 0.75 },
      { item: 'industrialupgrade:spacestone/mars_stone', chance: 0.5 }
    ]
  }).id('lexlav:centrifuge_martian_comb');
  // Фобос
  event.custom({
    type: 'forestry:centrifuge',
    time: 20,
    input: { item: 'lexlav:phobos_comb' },
    products: [
      { item: 'forestry:beeswax', chance: 1.0 },
      { item: 'industrialupgrade:itemspace/phobos_pebble', chance: 1.0 },
      { item: 'industrialupgrade:itemspace/phobos_boulder', chance: 1.0 },
      { item: 'industrialupgrade:spacecobblestone1/phobos_cobblestone', chance: 0.75 },
      { item: 'industrialupgrade:spacestone1/phobos_stone', chance: 0.5 }
    ]
  }).id('lexlav:centrifuge_phobos_comb');
  // Деймос
  event.custom({
    type: 'forestry:centrifuge',
    time: 20,
    input: { item: 'lexlav:deimos_comb' },
    products: [
      { item: 'forestry:beeswax', chance: 1.0 },
      { item: 'industrialupgrade:itemspace/deimos_pebble', chance: 1.0 },
      { item: 'industrialupgrade:itemspace/deimos_boulder', chance: 1.0 },
      { item: 'industrialupgrade:spacecobblestone/deimos_cobblestone', chance: 0.75 },
      { item: 'industrialupgrade:spacestone/deimos_stone', chance: 0.5 }
    ]
  }).id('lexlav:centrifuge_deimos_comb');
  // Астероиды
  event.custom({
    type: 'forestry:centrifuge',
    time: 20,
    input: { item: 'lexlav:asteroids_comb' },
    products: [
      { item: 'forestry:beeswax', chance: 1.0 },
      { item: 'industrialupgrade:itemspace/asteroids_pebble', chance: 1.0 },
      { item: 'industrialupgrade:itemspace/asteroids_boulder', chance: 1.0 },
      { item: 'industrialupgrade:spacecobblestone/asteroids_cobblestone', chance: 0.75 },
      { item: 'industrialupgrade:spacestone/asteroids_stone', chance: 0.5 }
    ]
  }).id('lexlav:centrifuge_asteroids_comb');
  // Церера
  event.custom({
    type: 'forestry:centrifuge',
    time: 20,
    input: { item: 'lexlav:ceres_comb' },
    products: [
      { item: 'forestry:beeswax', chance: 1.0 },
      { item: 'industrialupgrade:itemspace/ceres_pebble', chance: 1.0 },
      { item: 'industrialupgrade:itemspace/ceres_boulder', chance: 1.0 },
      { item: 'industrialupgrade:spacecobblestone/ceres_cobblestone', chance: 0.75 },
      { item: 'industrialupgrade:spacestone/ceres_stone', chance: 0.5 }
    ]
  }).id('lexlav:centrifuge_ceres_comb');
  // Ио
  event.custom({
    type: 'forestry:centrifuge',
    time: 20,
    input: { item: 'lexlav:io_comb' },
    products: [
      { item: 'forestry:beeswax', chance: 1.0 },
      { item: 'industrialupgrade:itemspace/io_pebble', chance: 1.0 },
      { item: 'industrialupgrade:itemspace/io_boulder', chance: 1.0 },
      { item: 'industrialupgrade:spacecobblestone/io_cobblestone', chance: 0.75 },
      { item: 'industrialupgrade:spacestone/io_stone', chance: 0.5 }
    ]
  }).id('lexlav:centrifuge_io_comb');
  // Европа
  event.custom({
    type: 'forestry:centrifuge',
    time: 20,
    input: { item: 'lexlav:europe_comb' },
    products: [
      { item: 'forestry:beeswax', chance: 1.0 },
      { item: 'industrialupgrade:itemspace/europe_pebble', chance: 1.0 },
      { item: 'industrialupgrade:itemspace/europe_boulder', chance: 1.0 },
      { item: 'industrialupgrade:spacecobblestone/europe_cobblestone', chance: 0.75 },
      { item: 'industrialupgrade:spacestone/europe_stone', chance: 0.5 }
    ]
  }).id('lexlav:centrifuge_europe_comb');
  // Ганимед
  event.custom({
    type: 'forestry:centrifuge',
    time: 20,
    input: { item: 'lexlav:ganymede_comb' },
    products: [
      { item: 'forestry:beeswax', chance: 1.0 },
      { item: 'industrialupgrade:itemspace/ganymede_pebble', chance: 1.0 },
      { item: 'industrialupgrade:itemspace/ganymede_boulder', chance: 1.0 },
      { item: 'industrialupgrade:spacecobblestone/ganymede_cobblestone', chance: 0.75 },
      { item: 'industrialupgrade:spacestone/ganymede_stone', chance: 0.5 }
    ]
  }).id('lexlav:centrifuge_ganymede_comb');
  // Каллисто
  event.custom({
    type: 'forestry:centrifuge',
    time: 20,
    input: { item: 'lexlav:callisto_comb' },
    products: [
      { item: 'forestry:beeswax', chance: 1.0 },
      { item: 'industrialupgrade:itemspace/callisto_pebble', chance: 1.0 },
      { item: 'industrialupgrade:itemspace/callisto_boulder', chance: 1.0 },
      { item: 'industrialupgrade:spacecobblestone/callisto_cobblestone', chance: 0.75 },
      { item: 'industrialupgrade:spacestone/callisto_stone', chance: 0.5 }
    ]
  }).id('lexlav:centrifuge_callisto_comb');
  // Мимас
  event.custom({
    type: 'forestry:centrifuge',
    time: 20,
    input: { item: 'lexlav:mimas_comb' },
    products: [
      { item: 'forestry:beeswax', chance: 1.0 },
      { item: 'industrialupgrade:itemspace/mimas_pebble', chance: 1.0 },
      { item: 'industrialupgrade:itemspace/mimas_boulder', chance: 1.0 },
      { item: 'industrialupgrade:spacecobblestone1/mimas_cobblestone', chance: 0.75 },
      { item: 'industrialupgrade:spacestone1/mimas_stone', chance: 0.5 }
    ]
  }).id('lexlav:centrifuge_mimas_comb');
  // Энцелад
  event.custom({
    type: 'forestry:centrifuge',
    time: 20,
    input: { item: 'lexlav:enceladus_comb' },
    products: [
      { item: 'forestry:beeswax', chance: 1.0 },
      { item: 'industrialupgrade:itemspace/enceladus_pebble', chance: 1.0 },
      { item: 'industrialupgrade:itemspace/enceladus_boulder', chance: 1.0 },
      { item: 'industrialupgrade:spacecobblestone/enceladus_cobblestone', chance: 0.75 },
      { item: 'industrialupgrade:spacestone/enceladus_stone', chance: 0.5 }
    ]
  }).id('lexlav:centrifuge_enceladus_comb');
  // Тефия
  event.custom({
    type: 'forestry:centrifuge',
    time: 20,
    input: { item: 'lexlav:tethys_comb' },
    products: [
      { item: 'forestry:beeswax', chance: 1.0 },
      { item: 'industrialupgrade:itemspace/tethys_pebble', chance: 1.0 },
      { item: 'industrialupgrade:itemspace/tethys_boulder', chance: 1.0 },
      { item: 'industrialupgrade:spacecobblestone1/tethys_cobblestone', chance: 0.75 },
      { item: 'industrialupgrade:spacestone1/tethys_stone', chance: 0.5 }
    ]
  }).id('lexlav:centrifuge_tethys_comb');
  // Диона
  event.custom({
    type: 'forestry:centrifuge',
    time: 20,
    input: { item: 'lexlav:dione_comb' },
    products: [
      { item: 'forestry:beeswax', chance: 1.0 },
      { item: 'industrialupgrade:itemspace/dione_pebble', chance: 1.0 },
      { item: 'industrialupgrade:itemspace/dione_boulder', chance: 1.0 },
      { item: 'industrialupgrade:spacecobblestone/dione_cobblestone', chance: 0.75 },
      { item: 'industrialupgrade:spacestone/dione_stone', chance: 0.5 }
    ]
  }).id('lexlav:centrifuge_dione_comb');
  // Рея
  event.custom({
    type: 'forestry:centrifuge',
    time: 20,
    input: { item: 'lexlav:rhea_comb' },
    products: [
      { item: 'forestry:beeswax', chance: 1.0 },
      { item: 'industrialupgrade:itemspace/rhea_pebble', chance: 1.0 },
      { item: 'industrialupgrade:itemspace/rhea_boulder', chance: 1.0 },
      { item: 'industrialupgrade:spacecobblestone1/rhea_cobblestone', chance: 0.75 },
      { item: 'industrialupgrade:spacestone1/rhea_stone', chance: 0.5 }
    ]
  }).id('lexlav:centrifuge_rhea_comb');
  // Титан
  event.custom({
    type: 'forestry:centrifuge',
    time: 20,
    input: { item: 'lexlav:titan_comb' },
    products: [
      { item: 'forestry:beeswax', chance: 1.0 },
      { item: 'industrialupgrade:itemspace/titan_pebble', chance: 1.0 },
      { item: 'industrialupgrade:itemspace/titan_boulder', chance: 1.0 },
      { item: 'industrialupgrade:spacecobblestone1/titan_cobblestone', chance: 0.75 },
      { item: 'industrialupgrade:spacestone1/titan_stone', chance: 0.5 }
    ]
  }).id('lexlav:centrifuge_titan_comb');
  // Миранда
  event.custom({
    type: 'forestry:centrifuge',
    time: 20,
    input: { item: 'lexlav:miranda_comb' },
    products: [
      { item: 'forestry:beeswax', chance: 1.0 },
      { item: 'industrialupgrade:itemspace/miranda_pebble', chance: 1.0 },
      { item: 'industrialupgrade:itemspace/miranda_boulder', chance: 1.0 },
      { item: 'industrialupgrade:spacecobblestone1/miranda_cobblestone', chance: 0.75 },
      { item: 'industrialupgrade:spacestone1/miranda_stone', chance: 0.5 }
    ]
  }).id('lexlav:centrifuge_miranda_comb');
  // Ариэль
  event.custom({
    type: 'forestry:centrifuge',
    time: 20,
    input: { item: 'lexlav:ariel_comb' },
    products: [
      { item: 'forestry:beeswax', chance: 1.0 },
      { item: 'industrialupgrade:itemspace/ariel_pebble', chance: 1.0 },
      { item: 'industrialupgrade:itemspace/ariel_boulder', chance: 1.0 },
      { item: 'industrialupgrade:spacecobblestone/ariel_cobblestone', chance: 0.75 },
      { item: 'industrialupgrade:spacestone/ariel_stone', chance: 0.5 }
    ]
  }).id('lexlav:centrifuge_ariel_comb');
  // Умбриэль
  event.custom({
    type: 'forestry:centrifuge',
    time: 20,
    input: { item: 'lexlav:umbriel_comb' },
    products: [
      { item: 'forestry:beeswax', chance: 1.0 },
      { item: 'industrialupgrade:itemspace/umbriel_pebble', chance: 1.0 },
      { item: 'industrialupgrade:itemspace/umbriel_boulder', chance: 1.0 },
      { item: 'industrialupgrade:spacecobblestone1/umbriel_cobblestone', chance: 0.75 },
      { item: 'industrialupgrade:spacestone1/umbriel_stone', chance: 0.5 }
    ]
  }).id('lexlav:centrifuge_umbriel_comb');
  // Титания
  event.custom({
    type: 'forestry:centrifuge',
    time: 20,
    input: { item: 'lexlav:titania_comb' },
    products: [
      { item: 'forestry:beeswax', chance: 1.0 },
      { item: 'industrialupgrade:itemspace/titania_pebble', chance: 1.0 },
      { item: 'industrialupgrade:itemspace/titania_boulder', chance: 1.0 },
      { item: 'industrialupgrade:spacecobblestone1/titania_cobblestone', chance: 0.75 },
      { item: 'industrialupgrade:spacestone1/titania_stone', chance: 0.5 }
    ]
  }).id('lexlav:centrifuge_titania_comb');
  // Оберон
  event.custom({
    type: 'forestry:centrifuge',
    time: 20,
    input: { item: 'lexlav:oberon_comb' },
    products: [
      { item: 'forestry:beeswax', chance: 1.0 },
      { item: 'industrialupgrade:itemspace/oberon_pebble', chance: 1.0 },
      { item: 'industrialupgrade:itemspace/oberon_boulder', chance: 1.0 },
      { item: 'industrialupgrade:spacecobblestone1/oberon_cobblestone', chance: 0.75 },
      { item: 'industrialupgrade:spacestone1/oberon_stone', chance: 0.5 }
    ]
  }).id('lexlav:centrifuge_oberon_comb');
  // Тритон
  event.custom({
    type: 'forestry:centrifuge',
    time: 20,
    input: { item: 'lexlav:triton_comb' },
    products: [
      { item: 'forestry:beeswax', chance: 1.0 },
      { item: 'industrialupgrade:itemspace/triton_pebble', chance: 1.0 },
      { item: 'industrialupgrade:itemspace/triton_boulder', chance: 1.0 },
      { item: 'industrialupgrade:spacecobblestone1/triton_cobblestone', chance: 0.75 },
      { item: 'industrialupgrade:spacestone1/triton_stone', chance: 0.5 }
    ]
  }).id('lexlav:centrifuge_triton_comb');
  // Протей
  event.custom({
    type: 'forestry:centrifuge',
    time: 20,
    input: { item: 'lexlav:proteus_comb' },
    products: [
      { item: 'forestry:beeswax', chance: 1.0 },
      { item: 'industrialupgrade:itemspace/proteus_pebble', chance: 1.0 },
      { item: 'industrialupgrade:itemspace/proteus_boulder', chance: 1.0 },
      { item: 'industrialupgrade:spacecobblestone1/proteus_cobblestone', chance: 0.75 },
      { item: 'industrialupgrade:spacestone1/proteus_stone', chance: 0.5 }
    ]
  }).id('lexlav:centrifuge_proteus_comb');
  // Плутон
  event.custom({
    type: 'forestry:centrifuge',
    time: 20,
    input: { item: 'lexlav:pluto_comb' },
    products: [
      { item: 'forestry:beeswax', chance: 1.0 },
      { item: 'industrialupgrade:itemspace/pluto_pebble', chance: 1.0 },
      { item: 'industrialupgrade:itemspace/pluto_boulder', chance: 1.0 },
      { item: 'industrialupgrade:spacecobblestone1/pluto_cobblestone', chance: 0.75 },
      { item: 'industrialupgrade:spacestone1/pluto_stone', chance: 0.5 }
    ]
  }).id('lexlav:centrifuge_pluto_comb');
  // Харон
  event.custom({
    type: 'forestry:centrifuge',
    time: 20,
    input: { item: 'lexlav:charon_comb' },
    products: [
      { item: 'forestry:beeswax', chance: 1.0 },
      { item: 'industrialupgrade:itemspace/charon_pebble', chance: 1.0 },
      { item: 'industrialupgrade:itemspace/charon_boulder', chance: 1.0 },
      { item: 'industrialupgrade:spacecobblestone/charon_cobblestone', chance: 0.75 },
      { item: 'industrialupgrade:spacestone/charon_stone', chance: 0.5 }
    ]
  }).id('lexlav:centrifuge_charon_comb');
  // Макемаке
  event.custom({
    type: 'forestry:centrifuge',
    time: 20,
    input: { item: 'lexlav:makemake_comb' },
    products: [
      { item: 'forestry:beeswax', chance: 1.0 },
      { item: 'industrialupgrade:itemspace/makemake_pebble', chance: 1.0 },
      { item: 'industrialupgrade:itemspace/makemake_boulder', chance: 1.0 },
      { item: 'industrialupgrade:spacecobblestone/makemake_cobblestone', chance: 0.75 },
      { item: 'industrialupgrade:spacestone/makemake_stone', chance: 0.5 }
    ]
  }).id('lexlav:centrifuge_makemake_comb');
  // Хаумеа
  event.custom({
    type: 'forestry:centrifuge',
    time: 20,
    input: { item: 'lexlav:haumea_comb' },
    products: [
      { item: 'forestry:beeswax', chance: 1.0 },
      { item: 'industrialupgrade:itemspace/haumea_pebble', chance: 1.0 },
      { item: 'industrialupgrade:itemspace/haumea_boulder', chance: 1.0 },
      { item: 'industrialupgrade:spacecobblestone/haumea_cobblestone', chance: 0.75 },
      { item: 'industrialupgrade:spacestone/haumea_stone', chance: 0.5 }
    ]
  }).id('lexlav:centrifuge_haumea_comb');
  // Эрида
  event.custom({
    type: 'forestry:centrifuge',
    time: 20,
    input: { item: 'lexlav:eris_comb' },
    products: [
      { item: 'forestry:beeswax', chance: 1.0 },
      { item: 'industrialupgrade:itemspace/eris_pebble', chance: 1.0 },
      { item: 'industrialupgrade:itemspace/eris_boulder', chance: 1.0 },
      { item: 'industrialupgrade:spacecobblestone/eris_cobblestone', chance: 0.75 },
      { item: 'industrialupgrade:spacestone/eris_stone', chance: 0.5 }
    ]
  }).id('lexlav:centrifuge_eris_comb');
});