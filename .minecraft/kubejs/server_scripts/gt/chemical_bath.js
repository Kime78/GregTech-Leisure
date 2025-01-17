ServerEvents.recipes(event => {
    const gtr = event.recipes.gtceu

    gtr.chemical_bath("gtlcore:high_strength_concrete")
        .itemInputs("#forge:concretes")
        .inputFluids("gtceu:concrete 1152")
        .itemOutputs("gtlcore:high_strength_concrete")
        .EUt(480)
        .duration(200)

    gtr.chemical_bath("gtlcore:ash_leaching_solution")
        .itemInputs("12x #forge:dusts/ash")
        .inputFluids("gtceu:sulfuric_acid 1000")
        .outputFluids("gtceu:ash_leaching_solution 1000")
        .EUt(120)
        .duration(400)

    gtr.chemical_bath("gtlcore:metal_residue_dust")
        .inputFluids("gtceu:bedrock_gas 100")
        .itemInputs("gtceu:partially_oxidized_residues_dust")
        .itemOutputs("gtceu:metal_residue_dust")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(200)

    gtr.chemical_bath("gtlcore:kevlar_plate")
        .itemInputs("gtlcore:woven_kevlar")
        .inputFluids("gtceu:polyurethaneresin 1000")
        .itemOutputs("gtceu:kevlar_plate")
        .EUt(480)
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.chemical_bath("gtlcore:fullerene_polymer_matrix_pulp_dust")
        .itemInputs("gtceu:palladium_fullerene_matrix_dust")
        .inputFluids("gtceu:pcbs 1000")
        .itemOutputs("2x gtceu:fullerene_polymer_matrix_pulp_dust")
        .EUt(8000000)
        .duration(40)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.chemical_bath("gtlcore:resonating_gem")
        .itemInputs("gtceu:exquisite_sapphire_gem")
        .inputFluids("gtceu:liquid_starlight 1000")
        .itemOutputs("gtlcore:resonating_gem")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.chemical_bath("gtlcore:eternity_catalyst")
        .itemInputs("gtlcore:spacetime_catalyst")
        .inputFluids("gtceu:eternity 1000")
        .itemOutputs("gtlcore:eternity_catalyst")
        .EUt(4 * GTValues.VA[GTValues.MAX])
        .duration(1600)

    gtr.chemical_bath("gtlcore:photon_carrying_wafer")
        .itemInputs("gtlcore:raw_photon_carrying_wafer")
        .inputFluids("gtceu:blaze 288")
        .itemOutputs("gtlcore:photon_carrying_wafer")
        .EUt(1920)
        .duration(800)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.chemical_bath("gtlcore:x_ray_mirror_plate")
        .itemInputs("gtceu:graphene_plate")
        .inputFluids("gtceu:iridium_trichloride_solution 100")
        .itemOutputs("gtlcore:x_ray_mirror_plate")
        .EUt(2000000)
        .duration(240)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.chemical_bath("gtlcore:x_ray_waveguide")
        .itemInputs("gtlcore:fullerene_polymer_matrix_fine_tubing")
        .inputFluids("gtceu:iridium_trichloride_solution 100")
        .itemOutputs("gtlcore:x_ray_waveguide")
        .EUt(8000000)
        .duration(240)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.chemical_bath("gtlcore:highly_insulating_foil")
        .itemInputs("gtceu:polyetheretherketone_foil")
        .inputFluids("gtceu:azafullerene 10")
        .itemOutputs("gtlcore:highly_insulating_foil")
        .EUt(7680)
        .duration(70)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.chemical_bath("gtlcore:cosmic_soc_wafer")
        .itemInputs("gtlcore:prepared_cosmic_soc_wafer")
        .inputFluids("gtceu:argon_plasma 1000")
        .itemOutputs("gtlcore:cosmic_soc_wafer")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(600)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.chemical_bath("gtlcore:fullerene_polymer_matrix_soft_tubing")
        .itemInputs("gtceu:fine_polyetheretherketone_wire")
        .inputFluids("gtceu:fullerene_polymer_matrix_pulp 18")
        .itemOutputs("gtlcore:fullerene_polymer_matrix_soft_tubing")
        .EUt(100)
        .duration(80)

    gtr.chemical_bath("gtlcore:glucose")
        .itemInputs("2x gtceu:sugar_gem")
        .inputFluids("minecraft:water 1000")
        .itemOutputs("24x gtceu:glucose_dust")
        .EUt(480)
        .duration(300)

    gtr.chemical_bath("gtlcore:naquadria_sulfate_dust")
        .itemInputs("6x gtceu:sodium_dust")
        .inputFluids("gtceu:acidic_naquadria_caesiumfluoride 3000")
        .itemOutputs("6x gtceu:naquadria_sulfate_dust", "2x gtceu:trinium_sulfide_dust", "8x gtceu:sodium_fluoride_dust", "7x gtceu:sodium_sulfate_dust")
        .chancedOutput("gtceu:caesium_dust", 8000, 500)
        .EUt(120)
        .duration(200)

    gtr.chemical_bath("gtlcore:grade_4_purified_water")
        .itemInputs("64x gtceu:activated_carbon_dust")
        .inputFluids("gtceu:grade_3_purified_water 1000")
        .itemOutputs("64x gtceu:carbon_dust")
        .outputFluids("gtceu:grade_4_purified_water 950")
        .EUt(480)
        .duration(600)

    gtr.chemical_bath("gtlcore:damascus_steel_dust")
        .itemInputs("gtceu:steel_dust")
        .inputFluids("gtceu:lubricant 100")
        .itemOutputs("gtceu:damascus_steel_dust")
        .EUt(120)
        .duration(200)
        .dimension("kubejs:ancient_world")

    gtr.chemical_bath("gtlcore:leached_turpentine")
        .itemInputs("#minecraft:logs")
        .inputFluids("gtceu:naphtha 1000")
        .outputFluids("gtceu:leached_turpentine 1000")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(80)

    gtr.chemical_bath("gtlcore:caesium_hydroxide_dust")
        .itemInputs("2x gtceu:caesium_dust")
        .inputFluids("gtceu:hydrogen_peroxide 1000")
        .itemOutputs("6x gtceu:caesium_hydroxide_dust")
        .EUt(GTValues.VA[GTValues.MV])
        .duration(180)

    gtr.chemical_bath("gtlcore:ender_obsidian")
        .itemInputs("gtlcore:shining_obsidian")
        .inputFluids("gtceu:ender_eye 1152")
        .itemOutputs("gtlcore:ender_obsidian")
        .EUt(480)
        .duration(200)
})