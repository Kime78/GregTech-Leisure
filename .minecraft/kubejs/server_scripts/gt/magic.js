ServerEvents.recipes(event => {
    const gtr = event.recipes.gtceu

    gtr.magic_manufacturer("gtlcore:mana_0")
        .notConsumable("gtceu:uev_field_generator")
        .circuit(1)
        .outputFluids("gtceu:mana 100")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(20)

    gtr.magic_manufacturer("gtlcore:mana_1")
        .notConsumable("gtceu:uiv_field_generator")
        .circuit(1)
        .outputFluids("gtceu:mana 1000")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(20)

    gtr.magic_manufacturer("gtlcore:mana_2")
        .notConsumable("gtceu:uxv_field_generator")
        .circuit(1)
        .outputFluids("gtceu:mana 10000")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(20)

    gtr.magic_manufacturer("gtlcore:mana_3")
        .notConsumable("gtceu:opv_field_generator")
        .circuit(1)
        .outputFluids("gtceu:mana 100000")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(20)

    gtr.magic_manufacturer("gtlcore:mana_4")
        .notConsumable("4x gtceu:uev_field_generator")
        .circuit(2)
        .outputFluids("gtceu:mana 400")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(40)

    gtr.magic_manufacturer("gtlcore:mana_5")
        .notConsumable("4x gtceu:uiv_field_generator")
        .circuit(2)
        .outputFluids("gtceu:mana 4000")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(40)

    gtr.magic_manufacturer("gtlcore:mana_6")
        .notConsumable("4x gtceu:uxv_field_generator")
        .circuit(2)
        .outputFluids("gtceu:mana 40000")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(40)

    gtr.magic_manufacturer("gtlcore:mana_7")
        .notConsumable("4x gtceu:opv_field_generator")
        .circuit(2)
        .outputFluids("gtceu:mana 400000")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(40)

    gtr.magic_manufacturer("gtlcore:mana_8")
        .notConsumable("16x gtceu:uev_field_generator")
        .circuit(3)
        .outputFluids("gtceu:mana 1600")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(80)

    gtr.magic_manufacturer("gtlcore:mana_9")
        .notConsumable("16x gtceu:uiv_field_generator")
        .circuit(3)
        .outputFluids("gtceu:mana 16000")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(80)

    gtr.magic_manufacturer("gtlcore:mana_10")
        .notConsumable("16x gtceu:uxv_field_generator")
        .circuit(3)
        .outputFluids("gtceu:mana 160000")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(80)

    gtr.magic_manufacturer("gtlcore:mana_11")
        .notConsumable("16x gtceu:opv_field_generator")
        .circuit(3)
        .outputFluids("gtceu:mana 1600000")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(80)

    gtr.magic_manufacturer("gtlcore:mana_12")
        .notConsumable("64x gtceu:uev_field_generator")
        .circuit(4)
        .outputFluids("gtceu:mana 6400")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(160)

    gtr.magic_manufacturer("gtlcore:mana_13")
        .notConsumable("64x gtceu:uiv_field_generator")
        .circuit(4)
        .outputFluids("gtceu:mana 64000")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(160)

    gtr.magic_manufacturer("gtlcore:mana_14")
        .notConsumable("64x gtceu:uxv_field_generator")
        .circuit(4)
        .outputFluids("gtceu:mana 640000")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(160)

    gtr.magic_manufacturer("gtlcore:mana_15")
        .notConsumable("64x gtceu:opv_field_generator")
        .circuit(4)
        .outputFluids("gtceu:mana 6400000")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(160)

    gtr.sps_crafting("gtlcore:echoite_plasma")
        .itemInputs("16x gtceu:exquisite_echo_shard_gem", "gtlcore:rhenium_plasma_containment_cell")
        .inputFluids("gtceu:mana 16000", "gtceu:enderium 1152", "gtceu:infuscolium 1152")
        .outputFluids("gtceu:echoite_plasma 2304")
        .itemOutputs("gtlcore:plasma_containment_cell")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(400)

    gtr.sps_crafting("gtlcore:bedrock_dust")
        .itemInputs("64x gtceu:compressed_stone_dust", "64x gtceu:compressed_stone_dust")
        .inputFluids("gtceu:mana 100000", "gtceu:thulium 9216", "gtceu:copernicium 9216")
        .itemOutputs("gtceu:bedrock_dust")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1200)

    gtr.sps_crafting("minecraft:dragon_breath")
        .itemInputs("minecraft:glass_bottle", "minecraft:dragon_egg")
        .inputFluids("gtceu:mana 1000", "gtceu:dragon_blood 10")
        .itemOutputs("minecraft:dragon_breath")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(80)

    gtr.sps_crafting("gtlcore:dragon_stem_cells")
        .itemInputs("gtceu:stem_cells")
        .inputFluids("gtceu:mana 1000", "gtceu:mutagen 100", "gtceu:enriched_dragon_breath 100")
        .itemOutputs("gtlcore:dragon_stem_cells")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(400)

    gtr.sps_crafting("gtlcore:liquid_starlight")
        .inputFluids("gtceu:mana 10000", "gtceu:starlight 10000")
        .itemInputs("64x minecraft:blue_ice", "64x minecraft:blue_ice")
        .outputFluids("gtceu:liquid_starlight 10000")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(9600)

    gtr.sps_crafting("gtlcore:cosmic_fabric")
        .notConsumable("gtceu:cosmicneutronium_nanoswarm")
        .inputFluids("gtceu:mana 1000", "gtceu:enriched_xenoxene 1000", "gtceu:liquid_cosmic_mesh 100")
        .itemInputs("gtceu:rubber_foil", "gtlcore:amorphous_matter")
        .itemOutputs("gtlcore:cosmic_fabric")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(200)

    gtr.sps_crafting("gtlcore:photocoated_hassium_boule")
        .itemInputs("gtceu:silicon_boule", "2x gtceu:hassium_ingot", "gtlcore:hassium_seed_crystal")
        .inputFluids("gtceu:mana 10000", "gtceu:woods_glass 2304", "gtceu:photopolymer 2000")
        .itemOutputs("gtlcore:photocoated_hassium_boule")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(1000)

    const mcsms = [["ingot", 144], ["dust", 144], ["nugget", 16], ["rod", 72], ["plate", 144], ["foil", 36], ["block", 1296], ["frame", 288]]
    mcsms.forEach((mcsm) => {
        gtr.sps_crafting("gtlcore:magnetohydrodynamicallyconstrainedstarmatter" + mcsm[0])
            .itemInputs("gtceu:eternity_" + mcsm[0], "gtlcore:solar_light_splitter")
            .inputFluids("gtceu:mana 10000", "gtceu:magnetohydrodynamicallyconstrainedstarmatter " + mcsm[1], "gtceu:dimensionallytranscendentresidue 1000")
            .itemOutputs("gtceu:magnetohydrodynamicallyconstrainedstarmatter_" + mcsm[0])
            .EUt(4 * GTValues.VA[GTValues.MAX])
            .duration(200)
    })

    gtr.sps_crafting("gtlcore:double_magnetohydrodynamicallyconstrainedstarmatter_plate")
        .itemInputs("gtceu:double_eternity_plate", "gtlcore:solar_light_splitter")
        .inputFluids("gtceu:mana 10000", "gtceu:magnetohydrodynamicallyconstrainedstarmatter 288", "gtceu:dimensionallytranscendentresidue 1000")
        .itemOutputs("gtceu:double_magnetohydrodynamicallyconstrainedstarmatter_plate")
        .EUt(4 * GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.sps_crafting("gtlcore:tiny_magnetohydrodynamicallyconstrainedstarmatter_dust")
        .itemInputs("gtceu:tiny_eternity_dust", "gtlcore:solar_light_splitter")
        .inputFluids("gtceu:mana 10000", "gtceu:magnetohydrodynamicallyconstrainedstarmatter 16", "gtceu:dimensionallytranscendentresidue 1000")
        .itemOutputs("gtceu:tiny_magnetohydrodynamicallyconstrainedstarmatter_dust")
        .EUt(4 * GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.sps_crafting("gtlcore:small_magnetohydrodynamicallyconstrainedstarmatter_dust")
        .itemInputs("gtceu:small_eternity_dust", "gtlcore:solar_light_splitter")
        .inputFluids("gtceu:mana 10000", "gtceu:magnetohydrodynamicallyconstrainedstarmatter 36", "gtceu:dimensionallytranscendentresidue 1000")
        .itemOutputs("gtceu:small_magnetohydrodynamicallyconstrainedstarmatter_dust")
        .EUt(4 * GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.sps_crafting("gtlcore:draconium_dust")
        .itemInputs("gtceu:netherrack_dust", "gtceu:endstone_dust")
        .inputFluids("gtceu:mana 1000", "gtceu:dragon_breath 10")
        .itemOutputs("gtlcore:draconium_dust")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(400)

    gtr.sps_crafting("gtlcore:attuned_tengam_ingot")
        .notConsumable("kubejs:ingot_field_shape")
        .itemInputs("gtceu:attuned_tengam_dust")
        .inputFluids("gtceu:mana 1000")
        .itemOutputs("gtceu:attuned_tengam_ingot")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(400)

    gtr.sps_crafting("gtlcore:dust_blizz")
        .itemInputs("minecraft:blaze_powder", "gtceu:aluminium_sulfite_dust", "16x minecraft:snowball")
        .inputFluids("gtceu:mana 1000", "gtceu:ice 1000")
        .itemOutputs("2x gtlcore:dust_blizz")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(200)

    gtr.sps_crafting("gtlcore:magmatter_ingot")
        .notConsumable("kubejs:ingot_field_shape")
        .inputFluids("gtceu:mana 100000", "gtceu:magmatter 100")
        .itemInputs("minecraft:netherite_ingot")
        .itemOutputs("gtceu:magmatter_ingot")
        .EUt(4 * GTValues.VA[GTValues.MAX])
        .duration(400)

    gtr.sps_crafting("gtlcore:magmatter_ingot_d")
        .inputFluids("gtceu:mana 10000", "gtceu:magmatter 10")
        .notConsumable("kubejs:ingot_field_shape")
        .itemInputs("gtceu:magmatter_dust", "minecraft:netherite_ingot")
        .itemOutputs("gtceu:magmatter_ingot")
        .EUt(4 * GTValues.VA[GTValues.MAX])
        .duration(200)
})