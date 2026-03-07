let krampusEntities = {};
let playerData = {};
const SAVE_KEY = 'krampus_data.json';

function saveData() {
    JsonIO.write('kubejs/data/' + SAVE_KEY, playerData);
}
function loadData() {
    let data = JsonIO.read('kubejs/data/' + SAVE_KEY);
    if (data) playerData = data;
}
function isOutside(player) {
    return player.y > 62; 
}
loadData();
function spawnKrampusEvent(player) {
    if (!isOutside(player)) {
        return false;
    }
    let server = Utils.getServer();
    let username = player.username;
    let pos = player.blockPosition();
    let baseX = pos.getX();
    let baseY = pos.getY();
    let baseZ = pos.getZ();
    function isAir(x, y, z) {
        return server.runCommandSilent(`execute positioned ${x} ${y} ${z} if block ~ ~ ~ minecraft:air`);
    }
    function isSolid(x, y, z) {
        return server.runCommandSilent(`execute positioned ${x} ${y} ${z} unless block ~ ~ ~ minecraft:air`);
    }
    function isAreaValid(cx, cy, cz) {
        if (!isSolid(cx, cy - 1, cz)) return false;
        if (!isAir(cx, cy, cz)) return false;
        if (!isAir(cx, cy + 1, cz)) return false;
        if (!isAir(cx, cy + 2, cz)) return false; 
        for (let dx = -1; dx <= 1; dx++) {
            for (let dz = -1; dz <= 1; dz++) {
                if (!isAir(cx + dx, cy, cz + dz)) return false;
                if (!isAir(cx + dx, cy + 1, cz + dz)) return false;
            }
        }
        return true;
    }
    const HORIZONTAL_RADIUS = Math.floor(Math.random() * (24 - 16 + 1)) + 16;
    const VERTICAL_RADIUS = 8;
    let validSpots = [];
    for (let dx = -HORIZONTAL_RADIUS; dx <= HORIZONTAL_RADIUS; dx++) {
        for (let dy = -VERTICAL_RADIUS; dy <= VERTICAL_RADIUS; dy++) {
            for (let dz = -HORIZONTAL_RADIUS; dz <= HORIZONTAL_RADIUS; dz++) {
                let checkX = baseX + dx;
                let checkY = baseY + dy;
                let checkZ = baseZ + dz;
                if (dx === 0 && dy === 0 && dz === 0) continue;
                if (isAreaValid(checkX, checkY, checkZ)) {
                    validSpots.push([checkX, checkY, checkZ]);
                }
            }
        }
    }
    let spawnX, spawnY, spawnZ;
    if (validSpots.length > 0) {
        [spawnX, spawnY, spawnZ] = validSpots[Math.floor(Math.random() * validSpots.length)];
        server.runCommandSilent(`summon born_in_chaos_v1:krampus ${spawnX} ${spawnY} ${spawnZ}`);
        server.runCommandSilent(`summon born_in_chaos_v1:krampus_henchman ${spawnX} ${spawnY + 1} ${spawnZ}`);
        server.runCommandSilent(`summon born_in_chaos_v1:krampus_henchman ${spawnX} ${spawnY + 1} ${spawnZ}`);
        server.runCommandSilent(`summon born_in_chaos_v1:krampus_henchman ${spawnX} ${spawnY + 1} ${spawnZ}`);
        server.runCommandSilent(`summon born_in_chaos_v1:krampus_henchman ${spawnX} ${spawnY + 1} ${spawnZ}`);
        server.runCommandSilent(`title ${username} times 10 40 10`);
        server.runCommandSilent(`title ${username} title {"text":"КРАМПУС","color":"dark_red","bold":true}`);
        server.runCommandSilent(`title ${username} subtitle {"text":"прибыл за ${username}","color":"red"}`);
        server.runCommandSilent(`effect give ${username} minecraft:blindness 30 0`);
        server.runCommandSilent(`effect give ${username} minecraft:slowness 30 1`);
        server.runCommandSilent(`effect give ${username} minecraft:bad_omen 30 0`);
        server.runCommandSilent(`effect give ${username} minecraft:hunger 30 1`);
        server.runCommandSilent(`effect give ${username} minecraft:nausea 10 0`);
        server.runCommandSilent(`effect give ${username} minecraft:weakness 30 1`);
        server.runCommandSilent(`tellraw @a {"text":"§4§l[КРАМПУС] §fприбыл, дабы свершить правосудие над §c${username}§f!"}`);
        server.runCommandSilent(`playsound minecraft:entity.warden.angry master @a ${spawnX} ${spawnY} ${spawnZ} 10 1.0 0.5`);
        server.runCommandSilent(`schedule function phase_reset:clear_krampus_items 12s`);
        return true;
    } else {
        return false
    }
}
// 1. ИНИЦИАЛИЗАЦИЯ
PlayerEvents.loggedIn(event => {
    let player = event.player;
    let uuid = player.uuid.toString();
    if (!playerData[uuid]) {
        playerData[uuid] = { name: player.username, sins: 0, marked: false };
        saveData();
    }
});
// 2. ПОДСЧЁТ ГРЕХОВ
let warn1 = 100
let peccato = 200
let timeout = 12000 // 10 min
EntityEvents.death(event => {
    let entity = event.entity;
    let player = event.source.player;
    if (!player || !player.player || entity.isPlayer()) return;
    let mobType = entity.type.toString();
    let peacefulMobs = [
        'minecraft:allay',
        'minecraft:armadillo',
        'minecraft:axolotl',
        'minecraft:bat',
        'minecraft:cat',
        'minecraft:chicken',
        'minecraft:cod',
        'minecraft:cow',
        'minecraft:dolphin',
        'minecraft:donkey',
        'minecraft:fox',
        'minecraft:frog',
        'minecraft:glow_squid',
        'minecraft:goat',
        'minecraft:horse',
        'minecraft:llama',
        'minecraft:mooshroom',
        'minecraft:mule',
        'minecraft:ocelot',
        'minecraft:panda',
        'minecraft:parrot',
        'minecraft:pig',
        'minecraft:pufferfish',
        'minecraft:rabbit',
        'minecraft:salmon',
        'minecraft:sheep',
        'minecraft:sniffer',
        'minecraft:squid',
        'minecraft:strider',
        'minecraft:tadpole',
        'minecraft:trader_llama',
        'minecraft:tropical_fish',
        'minecraft:turtle',
        'minecraft:villager',
        'minecraft:wandering_trader',
        'alexsmobs:elephant',
        'alexsmobs:emu',
        'alexsmobs:gazelle',
        'alexsmobs:hummingbird',
        'alexsmobs:mimic_octopus',
        'alexsmobs:raccoon',
        'alexsmobs:seal',
        'alexsmobs:shoebill',
        'alexsmobs:sugar_glider',
        'alexsmobs:tusklin',
        'ad_astra:lunarian',
        'alexscaves:deep_one',
        'born_in_chaos_v1:spirit_guide',
        'ad_astra:glacian_ram',
    ];
    if (peacefulMobs.includes(mobType)) {
        let uuid = player.uuid.toString();
        if (!playerData[uuid]) {
            playerData[uuid] = { name: player.username, sins: 0, marked: false };
        }
        playerData[uuid].sins += 1;
        saveData();
        if (playerData[uuid].sins == warn1 && !playerData[uuid].marked) {
            event.server.runCommandSilent(`tellraw ${player.username} "§f${player.username}, §cмои цепи заскрипели, услышав твоё имя."`);
            event.server.runCommandSilent(`execute as ${player.username} run playsound minecraft:entity.warden.agitated master @s`);
        }
        else if (playerData[uuid].sins >= peccato && !playerData[uuid].marked) {
            playerData[uuid].marked = true;
            saveData();
            let server = event.server;
            let username = player.username;
            server.runCommandSilent(`tellraw ${username} "§f${username}, §cты перешёл черту. Время расплаты близко."`);
            server.runCommandSilent(`execute as ${username} run playsound minecraft:entity.warden.agitated master @s`);
            server.runCommandSilent(`tellraw @a "§4§l[КРАМПУС] §fведёт охоту на §c${username}§f!"`);
        }
    }
});
let tickCounter = 0;
ServerEvents.tick(event => {
    tickCounter++;
    if (tickCounter % timeout === 0) { 
        let server = event.server;
        for (let uuid in playerData) {
            let data = playerData[uuid];
            if (data.marked && data.sins >= peccato) {
                let player = server.getPlayer(uuid);
                if (player) {
                    if (Math.random() < 0.9) {
                        let success = spawnKrampusEvent(player);
                        if (success) {
                            playerData[uuid].sins = 0;
                            playerData[uuid].marked = false;
                            saveData();
                        }
                        break;
                    }
                }
            }
        }
        if (tickCounter > 1000000) tickCounter = 0;
    }
});
ServerEvents.commandRegistry(event => {
    const { commands: Commands } = event;
    event.register(
        Commands.literal('krampus')
            .then(Commands.literal('check')
                .executes(context => {
                    let player = context.source.player;
                    if (player) {
                        let uuid = player.uuid.toString();
                        if (playerData[uuid]) {
                            let msg = `§aГрехи: §e${playerData[uuid].sins}§a, Грешник: §e${playerData[uuid].marked}`;
                            context.source.server.runCommandSilent(`tellraw ${player.username} "${msg}"`);
                        }
                    }
                    return 1;
                }))
            .then(Commands.literal('reset')
                .requires(source => source.hasPermission(2))
                .executes(context => {
                    let player = context.source.player;
                    if (player) {
                        let uuid = player.uuid.toString();
                        playerData[uuid] = { name: player.username, sins: 0, marked: false };
                        saveData();
                        context.source.server.runCommandSilent(`tellraw ${player.username} "§aГрехи сброшены"`);
                    }
                    return 1;
                }))
            .then(Commands.literal('test')
                .requires(source => source.hasPermission(2))
                .executes(context => {
                    let player = context.source.player;
                    if (player) {
                        spawnKrampusEvent(player);
                        context.source.server.runCommandSilent(`tellraw ${player.username} "§aТест ивента"`);
                    }
                    return 1;
                }))
            .then(Commands.literal('kill')
                .requires(source => source.hasPermission(2))
                .executes(context => {
                    let server = context.source.server;
                    server.runCommandSilent(`kill @e[type=born_in_chaos_v1:krampus]`);
                    server.runCommandSilent(`kill @e[type=born_in_chaos_v1:krampus_henchman]`);
                    server.scheduleInTicks(20, () => {
                        server.runCommandSilent(`kill @e[type=item,nbt={Item:{id:"born_in_chaos_v1:pieceofdarkmetal"}}]`);
                        server.runCommandSilent(`kill @e[type=item,nbt={Item:{id:"born_in_chaos_v1:krampuss_bag"}}]`);
                        server.runCommandSilent(`kill @e[type=item,nbt={Item:{id:"born_in_chaos_v1:birch_branches"}}]`);
                        server.runCommandSilent(`kill @e[type=item,nbt={Item:{id:"born_in_chaos_v1:permafrost_shard"}}]`);
                        server.runCommandSilent(`kill @e[type=item,nbt={Item:{id:"born_in_chaos_v1:monster_flesh"}}]`);
                        server.runCommandSilent(`kill @e[type=item,nbt={Item:{id:"born_in_chaos_v1:krampus_horn"}}]`);
                        server.runCommandSilent(`kill @e[type=item,nbt={Item:{id:"minecraft:coal"}}]`);
                    });
                }))
    );
});
