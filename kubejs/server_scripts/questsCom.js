//Еда
const foodItems = [
    "aquamirae:cooked_spinefish",
    "aquamirae:esca",
    "aquamirae:poseidons_breakfast",
    "aquamirae:sea_stew",
    "aquamirae:sea_casserole",
    "minecraft:cooked_porkchop",
    "minecraft:cooked_beef",
    "minecraft:baked_potato",
    "minecraft:golden_carrot",
    "minecraft:chorus_fruit",
    "minecraft:glow_berries",
    "minecraft:melon_slice",
    "minecraft:enchanted_golden_apple",
    "minecraft:apple",
    "quark:cooked_crab_leg",
    "upgrade_aquatic:cooked_perch",
    "upgrade_aquatic:cooked_lionfish",
    "upgrade_aquatic:cooked_pike",
    "minecraft:cooked_salmon",
    "minecraft:cooked_cod",
    "minecraft:cooked_rabbit",
    "minecraft:cooked_chicken",
    "minecraft:cooked_mutton",
    "alexsmobs:cooked_catfish",
    "alexsmobs:flying_fish",
    "alexsmobs:gongylidia",
    "alexsmobs:kangaroo_burger",
    "alexsmobs:cooked_moose_ribs",
    "alexsmobs:cooked_lobster_tail",
    "minecraft:honey_bottle",
    "minecraft:spider_eye",
    "minecraft:cookie",
    "deeperdarker:bloom_berries",
    "forestry:honeyed_slice",
    "forestry:ambrosia",
    "forestry:fruit_cherry",
    "forestry:fruit_walnut",
    "forestry:fruit_chestnut",
    "forestry:fruit_lemon",
    "forestry:fruit_plum",
    "forestry:fruit_dates",
    "biomeswevegone:white_puffball_stew",
    "biomeswevegone:allium_oddion_soup",
    "biomeswevegone:blueberry_pie",
    "biomeswevegone:blueberries",
    "biomeswevegone:green_apple_pie",
    "biomeswevegone:green_apple",
    "biomeswevegone:cooked_yucca_fruit",
    "biomeswevegone:blooming_oddion",
    "biomeswevegone:baobab_fruit",
    "born_in_chaos_v1:caramel_pepper",
    "born_in_chaos_v1:chocolate_heart",
    "born_in_chaos_v1:mint_ice_cream",
    "born_in_chaos_v1:smoked_monster_flesh",
    "born_in_chaos_v1:smoked_fish",
    "born_in_chaos_v1:smoked_flesh",
    "born_in_chaos_v1:coffee_candy",
    "born_in_chaos_v1:gummy_vampire_teeth",
    "born_in_chaos_v1:fried_maggot",
    "born_in_chaos_v1:transforming_easter_cake",
    "born_in_chaos_v1:spiritual_gingerbread",
    "born_in_chaos_v1:creepy_cookies_with_milk",
    "born_in_chaos_v1:eternal_candy",
    "born_in_chaos_v1:magical_holiday_candy",
    "born_in_chaos_v1:holiday_candy",
    "industrialupgrade:raspberry",
    "industrialupgrade:corn",
    "industrialupgrade:hops",
    "alexscaves:sweetish_fish_red",
    "alexscaves:sweetish_fish_green",
    "alexscaves:sweetish_fish_yellow",
    "alexscaves:sweetish_fish_blue",
    "alexscaves:sweetish_fish_pink",
    "alexscaves:caramel_apple",
    "alexscaves:caramel",
    "alexscaves:gumball_pile",
    "alexscaves:sharpened_candy_cane",
    "alexscaves:dinosaur_nugget",
    "alexscaves:pine_nuts",
    "alexscaves:cooked_trilocaris_tail",
    "forestry:fruit_feijoa",
    "forestry:fruit_olive",
    "forestry:fruit_coconut",
    "forestry:fruit_orange",
    "forestry:fruit_pear",
    "forestry:fruit_papaya",
    "alexscaves:lanternfish",
    "alexscaves:cooked_lanternfish",
    "alexscaves:green_soylent",
    "alexscaves:slam",
    "alexscaves:spelunkie",
    "alexscaves:cooked_radgill",
    "alexscaves:primordial_soup",
    "alexscaves:seething_stew",
    "alexscaves:serene_salad",
    "alexscaves:sundae",
    "alexscaves:hot_chocolate_bottle",
    "alexscaves:purple_soda_bottle",
    "alexscaves:vesper_wing",
    "alexscaves:vesper_stew",
    "alexscaves:deep_sea_sushi_roll",
    "alexscaves:cooked_mussel",
    "alexscaves:sea_pig",
    "alexscaves:cooked_tripodfish",
    "alexscaves:gingerbread_crumbs",
    "alexscaves:peppermint_powder",
    "alexscaves:gelatin_pink",
    "alexscaves:gelatin_blue",
    "alexscaves:gelatin_yellow",
    "alexscaves:gelatin_green",
    "alexscaves:lollipop_bunch",
    "alexscaves:candy_cane",
    "alexscaves:giant_sweetberry",
    "alexscaves:licoroot",
    "minecraft:rabbit_stew",
    "minecraft:mushroom_stew",
    "minecraft:beetroot_soup",
    "minecraft:pufferfish",
    "alexscaves:licoroot_vine",
    "alexscaves:licoroot_sprout",
    "upgrade_aquatic:mulberry_pie",
    "alexscaves:darkened_apple"
];

ServerEvents.commandRegistry(event => {
    const { commands: Commands } = event;

    event.register(
        Commands.literal('givefoods')
            .requires(source => source.hasPermission(2))
            .executes(context => {
                const player = context.source.player;
                if (!player) return 0;
                foodItems.forEach(itemId => {
                    player.give(Item.of(itemId));
                });
                return 1;
            })
    );
});
//Пластинки
const disc = [
    "alexscaves:music_disc_fusion",
    "alexscaves:music_disc_tasty",
    "quark:music_disc_drips",
    "quark:music_disc_ocean",
    "quark:music_disc_rain",
    "quark:music_disc_wind",
    "quark:music_disc_fire",
    "quark:music_disc_clock",
    "quark:music_disc_crickets",
    "biomesoplenty:music_disc_wanderer",
    "minecraft:music_disc_mellohi",
    "minecraft:music_disc_mall",
    "minecraft:music_disc_far",
    "minecraft:music_disc_chirp",
    "minecraft:music_disc_blocks",
    "minecraft:music_disc_cat",
    "minecraft:music_disc_13",
    "minecraft:music_disc_relic",
    "minecraft:music_disc_pigstep",
    "minecraft:music_disc_5",
    "minecraft:music_disc_otherside",
    "minecraft:music_disc_wait",
    "minecraft:music_disc_11",
    "minecraft:music_disc_ward",
    "minecraft:music_disc_strad",
    "minecraft:music_disc_stal",
    "aquamirae:music_disc_forsaken_drownage",
    "graveyard:incarnated_evil_music_disc",
    "alexsmobs:music_disc_thime",
    "alexsmobs:music_disc_daze",
    "born_in_chaos_v1:anluka_doors",
    "born_in_chaos_v1:serpumpkinhead_m",
    "aquamirae:music_disc_horizon",
    "quark:music_disc_endermosh",
    "upgrade_aquatic:music_disc_atlantis",
    "endergetic:music_disc_kilobyte",
    "quark:music_disc_chatter",
    "mowziesmobs:music_disc_petiole",
    "biomeswevegone:music_disc_pixie_club",
    "biomeswevegone:music_disc_better_days"
]

ServerEvents.commandRegistry(event => {
    const { commands: Commands } = event;

    event.register(
        Commands.literal('givedisc')
            .requires(source => source.hasPermission(2)) // только админ 
            .executes(context => {
                const player = context.source.player;
                if (!player) return 0;
                disc.forEach(itemId => {
                    player.give(Item.of(itemId));
                });
                return 1;
            })
    );
});