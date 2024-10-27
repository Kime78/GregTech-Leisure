ServerEvents.recipes(event => {
    const gtr = event.recipes.gtceu

    gtr.vacuum_freezer("gtlcore:liquid_hydrogen")
        .inputFluids("gtceu:hydrogen 1000")
        .outputFluids("gtceu:liquid_hydrogen 1000")
        .EUt(7680)
        .duration(240)

    gtr.vacuum_freezer("gtlcore:draconium_ingot")
        .itemInputs("gtceu:hot_draconium_ingot")
        .inputFluids("gtceu:liquid_helium 1000")
        .itemOutputs("gtceu:draconium_ingot")
        .outputFluids("gtceu:helium 500")
        .duration(100)
        .EUt(GTValues.VA[GTValues.UXV])

    gtr.vacuum_freezer("gtlcore:fuming_nitric_acid")
        .inputFluids("gtceu:fuming_nitric_acid 1000")
        .itemOutputs("5x gtceu:crystalline_nitric_acid_dust")
        .EUt(GTValues.VA[GTValues.MV])
        .duration(180)

    gtr.vacuum_freezer("gtlcore:metastable_oganesson")
        .inputFluids("gtceu:hot_oganesson 1000", "kubejs:gelid_cryotheum 144")
        .outputFluids("gtceu:metastable_oganesson 144")
        .itemOutputs("2x gtceu:small_enderium_dust")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(280)

    gtr.vacuum_freezer("gtlcore:cold_ice_casing")
        .itemInputs("gtceu:frostproof_machine_casing")
        .inputFluids("gtceu:ice 10000", "gtceu:vanadium_gallium 576")
        .itemOutputs("gtlcore:cold_ice_casing")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(200)

    gtr.vacuum_freezer("gtlcore:fullerene_polymer_matrix_fine_tubing")
        .itemInputs("gtlcore:fullerene_polymer_matrix_soft_tubing")
        .itemOutputs("gtlcore:fullerene_polymer_matrix_fine_tubing")
        .EUt(500)
        .duration(240)

    gtr.plasma_condenser("gtlcore:cosmic_mesh")
        .itemInputs("gtlcore:cosmic_mesh_containment_unit")
        .inputFluids("gtceu:liquid_helium 100000")
        .itemOutputs("gtlcore:time_dilation_containment_unit")
        .outputFluids("gtceu:liquid_cosmic_mesh 1000")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(800)

    const fluids = ["argon", "helium", "nickel", "iron", "nitrogen", "oxygen", "mithril", "orichalcum", "enderium", "adamantium", "infuscolium", "echoite", "vibranium", "taranium_rich_liquid_helium_4", "legendarium", "heavy_quark_degenerate_matter", "starmetal", "quantumchromodynamically_confined_matter", "astraltitanium", "celestialtungsten"]
    fluids.forEach((fluid) => {
        gtr.plasma_condenser("gtlcore:" + fluid + "_condenser")
            .inputFluids("gtceu:" + fluid + "_plasma 1000", "gtceu:liquid_helium 100000")
            .outputFluids("gtceu:" + fluid + " 1000", "gtceu:helium 100000")
            .circuit(1)
            .EUt(GTValues.VA[GTValues.UHV])
            .duration(600)
    })

    gtr.plasma_condenser("minecraft:iron_ingot")
        .notConsumable("kubejs:ingot_field_shape")
        .inputFluids("gtceu:iron_plasma 144", "gtceu:liquid_helium 14400")
        .outputFluids("gtceu:helium 14400")
        .itemOutputs("minecraft:iron_ingot")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(50)

    gtr.plasma_condenser("gtlcore:nickel_ingot")
        .notConsumable("kubejs:ingot_field_shape")
        .inputFluids("gtceu:nickel_plasma 144", "gtceu:liquid_helium 14400")
        .outputFluids("gtceu:helium 14400")
        .itemOutputs("gtceu:nickel_ingot")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(50)

    const ingots = ["mithril", "orichalcum", "enderium", "adamantium", "infuscolium", "echoite", "vibranium", "legendarium", "heavy_quark_degenerate_matter", "starmetal", "quantumchromodynamically_confined_matter"]
    ingots.forEach((ingot) => {
        gtr.plasma_condenser("gtlcore:" + ingot + "_ingot_condenser")
            .notConsumable("kubejs:ingot_field_shape")
            .inputFluids("gtceu:" + ingot + "_plasma 144", "gtceu:liquid_helium 14400")
            .outputFluids("gtceu:helium 14400")
            .itemOutputs("gtceu:hot_" + ingot + "_ingot")
            .EUt(GTValues.VA[GTValues.UHV])
            .duration(60)
    })

    gtr.plasma_condenser("gtlcore:degenerate_rhenium")
        .itemInputs("gtlcore:rhenium_plasma_containment_cell")
        .inputFluids("gtceu:liquid_helium 100000")
        .outputFluids("gtceu:helium 100000", "gtceu:liquid_degenerate_rhenium 1000")
        .itemOutputs("gtlcore:plasma_containment_cell")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(1200)

    gtr.plasma_condenser("gtlcore:draconiumawakened")
        .itemInputs("gtlcore:draconiumawakened_plasma_containment_cell")
        .inputFluids("gtceu:liquid_helium 100000")
        .outputFluids("gtceu:helium 100000", "gtceu:draconiumawakened 1000")
        .itemOutputs("gtlcore:plasma_containment_cell")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(1200)

    gtr.plasma_condenser("gtlcore:neutronium_sphere")
        .notConsumable("kubejs:ball_field_shape")
        .inputFluids("gtceu:liquid_helium 32000")
        .outputFluids("gtceu:helium 32000")
        .itemInputs("gtlcore:neutron_plasma_containment_cell")
        .itemOutputs("4x gtlcore:neutronium_sphere", "gtlcore:plasma_containment_cell")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(800)

    gtr.plasma_condenser("gtlcore:quantumchromodynamic_protective_plating")
        .notConsumable("gtceu:vibranium_nanoswarm")
        .notConsumable("gtceu:infuscolium_nanoswarm")
        .inputFluids("gtceu:liquid_helium 10000", "gtceu:high_energy_quark_gluon_plasma 100")
        .outputFluids("gtceu:helium 10000")
        .itemOutputs("gtlcore:quantumchromodynamic_protective_plating")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(300)

    gtr.plasma_condenser("gtlcore:cosmicneutronium")
        .itemInputs("gtlcore:cosmic_neutron_plasma_cell")
        .inputFluids("gtceu:liquid_helium 100000")
        .outputFluids("gtceu:helium 100000", "gtceu:cosmicneutronium 1000")
        .itemOutputs("gtlcore:extremely_durable_plasma_cell")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(1200)

    gtr.plasma_condenser("gtlcore:crystalmatrix")
        .itemInputs("gtlcore:crystalmatrix_plasma_containment_cell")
        .inputFluids("gtceu:liquid_helium 100000")
        .outputFluids("gtceu:helium 100000", "gtceu:crystalmatrix 1000")
        .itemOutputs("gtlcore:plasma_containment_cell")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(1000)

    gtr.plasma_condenser("gtlcore:chaos")
        .itemInputs("gtlcore:chaos_containment_unit")
        .inputFluids("gtceu:liquid_helium 100000")
        .outputFluids("gtceu:helium 100000", "gtceu:chaos 1000")
        .itemOutputs("gtlcore:time_dilation_containment_unit")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(1600)

    gtr.plasma_condenser("gtlcore:hassium")
        .inputFluids("gtceu:metastable_hassium_plasma 1000", "gtceu:liquid_helium 100000")
        .outputFluids("gtceu:helium 100000", "gtceu:liquid_metastable_hassium 1000")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(1200)

    gtr.plasma_condenser("gtlcore:actinium_superhydride_dust")
        .itemInputs("gtlcore:actinium_superhydride_plasma_containment_cell")
        .inputFluids("gtceu:liquid_helium 24000")
        .itemOutputs("13x gtceu:actinium_superhydride_dust", "gtlcore:plasma_containment_cell")
        .outputFluids("gtceu:helium 24000")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(340)

    gtr.plasma_condenser("gtlcore:grade_14_purified_water")
        .notConsumable("gtceu:uhv_fluid_regulator")
        .inputFluids("gtceu:grade_13_purified_water 10000", "gtceu:mithril_plasma 1000")
        .itemOutputs("60x gtceu:tiny_mithril_dust")
        .outputFluids("gtceu:grade_14_purified_water 9900")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(800)

    gtr.plasma_condenser("gtlcore:grade_15_purified_water")
        .notConsumable("gtceu:uev_fluid_regulator")
        .inputFluids("gtceu:grade_14_purified_water 10000", "gtceu:enderium_plasma 1000")
        .itemOutputs("61x gtceu:tiny_enderium_dust")
        .outputFluids("gtceu:grade_15_purified_water 9990")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(800)

    gtr.plasma_condenser("gtlcore:grade_16_purified_water")
        .notConsumable("gtceu:uiv_fluid_regulator")
        .inputFluids("gtceu:grade_15_purified_water 10000", "gtceu:echoite_plasma 1000")
        .itemOutputs("62x gtceu:tiny_echoite_dust")
        .outputFluids("gtceu:grade_16_purified_water 9999")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(800)
})