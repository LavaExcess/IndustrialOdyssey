kill @e[type=born_in_chaos_v1:krampus]
kill @e[type=born_in_chaos_v1:krampus_henchman]

kill @e[type=item,nbt={Item:{id:"born_in_chaos_v1:pieceofdarkmetal"}}]
kill @e[type=item,nbt={Item:{id:"born_in_chaos_v1:krampuss_bag"}}]
kill @e[type=item,nbt={Item:{id:"born_in_chaos_v1:birch_branches"}}]
kill @e[type=item,nbt={Item:{id:"born_in_chaos_v1:permafrost_shard"}}]
kill @e[type=item,nbt={Item:{id:"born_in_chaos_v1:monster_flesh"}}]
kill @e[type=item,nbt={Item:{id:"born_in_chaos_v1:krampus_horn"}}]
kill @e[type=item,nbt={Item:{id:"minecraft:coal"}}]

tellraw @a {"text":"§c❄ §4Ледяное проклятие §cрассеялось§f, но эхо наказания остаётся в душах грешников...","color":"aqua"}

execute as @a at @s run playsound minecraft:block.powder_snow.fall master @s ~ ~ ~ 1.0 0.5
execute as @e[type=born_in_chaos_v1:krampus] at @s run particle minecraft:snowflake ~ ~1 ~ 0.5 1 0.5 0 50