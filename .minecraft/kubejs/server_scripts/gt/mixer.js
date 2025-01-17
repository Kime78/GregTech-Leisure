ServerEvents.recipes(event => {
    const gtr = event.recipes.gtceu

    gtr.dimensionally_transcendent_mixer("gtlcore:not_found")
        .itemInputs("1x gtceu:carbon_dust", "1x gtceu:phosphorus_dust", "1x gtceu:sulfur_dust", "1x gtceu:selenium_dust", "1x gtceu:iodine_dust")
        .inputFluids("gtceu:hydrogen 1000", "gtceu:nitrogen 1000", "gtceu:oxygen 1000", "gtceu:fluorine 1000", "gtceu:chlorine 1000", "gtceu:bromine 1000")
        .outputFluids("gtceu:not_found 11000")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(2200)

    gtr.dimensionally_transcendent_mixer("gtlcore:noble_gas")
        .inputFluids("gtceu:helium 1000", "gtceu:neon 1000", "gtceu:argon 1000", "gtceu:krypton 1000", "gtceu:xenon 1000", "gtceu:radon 1000")
        .outputFluids("gtceu:noble_gas 6000")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1200)

    gtr.dimensionally_transcendent_mixer("gtlcore:metalloid_dust")
        .itemInputs("1x gtceu:boron_dust", "1x gtceu:silicon_dust", "1x gtceu:germanium_dust", "1x gtceu:arsenic_dust", "1x gtceu:antimony_dust", "1x gtceu:tellurium_dust", "1x gtceu:astatine_dust")
        .itemOutputs("7x gtceu:metalloid_dust")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1400)

    gtr.dimensionally_transcendent_mixer("gtlcore:poor_dust")
        .itemInputs("1x gtceu:aluminium_dust", "1x gtceu:gallium_dust", "1x gtceu:indium_dust", "1x enderio:powdered_tin", "1x gtceu:thallium_dust", "1x gtceu:lead_dust", "1x gtceu:bismuth_dust", "1x gtceu:polonium_dust")
        .itemOutputs("8x gtceu:poor_dust")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1600)

    gtr.dimensionally_transcendent_mixer("gtlcore:transition_1_dust")
        .itemInputs("1x gtceu:titanium_dust", "1x gtceu:vanadium_dust", "1x gtceu:chromium_dust", "1x gtceu:manganese_dust", "1x enderio:powdered_iron", "1x enderio:powdered_cobalt", "1x gtceu:nickel_dust", "1x enderio:powdered_copper", "1x gtceu:zinc_dust")
        .itemOutputs("9x gtceu:transition_1_dust")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1800)

    gtr.dimensionally_transcendent_mixer("gtlcore:transition_2_dust")
        .itemInputs("1x gtceu:zirconium_dust", "1x gtceu:niobium_dust", "1x gtceu:molybdenum_dust", "1x gtceu:technetium_dust", "1x gtceu:ruthenium_dust", "1x gtceu:rhodium_dust", "1x gtceu:palladium_dust", "1x gtceu:silver_dust", "1x gtceu:cadmium_dust")
        .itemOutputs("9x gtceu:transition_2_dust")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1800)

    gtr.dimensionally_transcendent_mixer("gtlcore:transition_3_dust")
        .itemInputs("1x gtceu:hafnium_dust", "1x gtceu:tantalum_dust", "1x gtceu:tungsten_dust", "1x gtceu:rhenium_dust", "1x gtceu:osmium_dust", "1x gtceu:iridium_dust", "1x gtceu:platinum_dust", "1x enderio:powdered_gold")
        .inputFluids("gtceu:mercury 1000")
        .itemOutputs("9x gtceu:transition_3_dust")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1800)

    gtr.dimensionally_transcendent_mixer("gtlcore:alkaline_earth_dust")
        .itemInputs("1x gtceu:beryllium_dust", "1x gtceu:magnesium_dust", "1x gtceu:calcium_dust", "1x gtceu:strontium_dust", "1x gtceu:barium_dust", "1x gtceu:radium_dust")
        .itemOutputs("6x gtceu:alkaline_earth_dust")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1200)

    gtr.dimensionally_transcendent_mixer("gtlcore:alkaline_dust")
        .itemInputs("1x gtceu:lithium_dust", "1x gtceu:sodium_dust", "1x gtceu:potassium_dust", "1x gtceu:rubidium_dust", "1x gtceu:caesium_dust", "1x gtceu:francium_dust")
        .itemOutputs("6x gtceu:alkaline_dust")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1200)

    gtr.dimensionally_transcendent_mixer("gtlcore:actinoids_1_dust")
        .itemInputs("1x gtceu:actinium_dust", "1x gtceu:thorium_dust", "1x gtceu:protactinium_dust", "1x gtceu:uranium_dust", "1x gtceu:neptunium_dust", "1x gtceu:plutonium_dust", "1x gtceu:americium_dust", "1x gtceu:curium_dust")
        .itemOutputs("8x gtceu:actinoids_1_dust")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1600)

    gtr.dimensionally_transcendent_mixer("gtlcore:actinoids_2_dust")
        .itemInputs("1x gtceu:berkelium_dust", "1x gtceu:californium_dust", "1x gtceu:einsteinium_dust", "1x gtceu:fermium_dust", "1x gtceu:mendelevium_dust", "1x gtceu:nobelium_dust", "1x gtceu:lawrencium_dust")
        .itemOutputs("7x gtceu:actinoids_2_dust")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1400)

    gtr.dimensionally_transcendent_mixer("gtlcore:lanthanoids_1_dust")
        .itemInputs("1x gtceu:lanthanum_dust", "1x gtceu:cerium_dust", "1x gtceu:praseodymium_dust", "1x gtceu:neodymium_dust", "1x gtceu:promethium_dust", "1x gtceu:samarium_dust", "1x gtceu:europium_dust", "1x gtceu:gadolinium_dust")
        .itemOutputs("8x gtceu:lanthanoids_1_dust")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1600)

    gtr.dimensionally_transcendent_mixer("gtlcore:lanthanoids_2_dust")
        .itemInputs("1x gtceu:terbium_dust", "1x gtceu:dysprosium_dust", "1x gtceu:holmium_dust", "1x gtceu:erbium_dust", "1x gtceu:thulium_dust", "1x gtceu:ytterbium_dust", "1x gtceu:lutetium_dust")
        .itemOutputs("7x gtceu:lanthanoids_2_dust")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1400)

    gtr.dimensionally_transcendent_mixer("gtlcore:dimensionallytranscendentprosaiccatalyst")
        .inputFluids("gtceu:dimensionallytranscendentcrudecatalyst 1000", "gtceu:heavy_quark_enriched_mixture 1000", "gtceu:oxygen_plasma 1000", "gtceu:argon_plasma 1000", "gtceu:iron_plasma 1000", "gtceu:nickel_plasma 1000")
        .outputFluids("gtceu:dimensionallytranscendentprosaiccatalyst 1000")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(400)

    gtr.dimensionally_transcendent_mixer("gtlcore:dimensionallytranscendentresplendentcatalyst")
        .inputFluids("gtceu:dimensionallytranscendentprosaiccatalyst 1000", "gtceu:heavy_quark_enriched_mixture 1000", "gtceu:mithril_plasma 1000", "gtceu:orichalcum_plasma 1000", "gtceu:enderium_plasma 1000", "gtceu:infuscolium_plasma 1000")
        .outputFluids("gtceu:dimensionallytranscendentresplendentcatalyst 1000")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(800)

    gtr.dimensionally_transcendent_mixer("gtlcore:dimensionallytranscendentexoticcatalyst")
        .inputFluids("gtceu:dimensionallytranscendentresplendentcatalyst 1000", "gtceu:heavy_quark_enriched_mixture 1000", "gtceu:echoite_plasma 1000", "gtceu:adamantium_plasma 1000", "gtceu:vibranium_plasma 1000", "gtceu:starmetal_plasma 1000")
        .outputFluids("gtceu:dimensionallytranscendentexoticcatalyst 1000")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(1600)

    gtr.dimensionally_transcendent_mixer("gtlcore:dimensionallytranscendentstellarcatalyst")
        .inputFluids("gtceu:dimensionallytranscendentexoticcatalyst 1000", "gtceu:heavy_quark_enriched_mixture 1000", "gtceu:legendarium_plasma 1000", "gtceu:crystalmatrix_plasma 1000", "gtceu:draconiumawakened_plasma 1000", "gtceu:raw_star_matter_plasma 1000")
        .outputFluids("gtceu:dimensionallytranscendentstellarcatalyst 1000")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(3200)

    gtr.dimensionally_transcendent_mixer("gtlcore:exciteddtsc")
        .inputFluids("gtceu:dimensionallytranscendentstellarcatalyst 10000", "gtceu:concentration_mixing_hyper_fuel_2 1000", "gtceu:high_energy_quark_gluon_plasma 1000")
        .outputFluids("gtceu:exciteddtsc 10000")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(12000)

    gtr.dimensionally_transcendent_mixer("gtlcore:primordialmatter")
        .inputFluids("gtceu:raw_star_matter_plasma 1000", "gtceu:spacetime 1000", "gtceu:spatialfluid 1000", "gtceu:dimensionallytranscendentresidue 1000")
        .outputFluids("gtceu:primordialmatter 1000")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(1200)

    gtr.dimensionally_transcendent_mixer("gtlcore:chaos_plasma")
        .itemInputs("gtlcore:chaos_shard")
        .inputFluids("gtceu:uu_matter 4000", "gtceu:cosmicneutronium 2000", "gtceu:cosmic_mesh_plasma 2000", "gtceu:raw_star_matter_plasma 1000", "gtceu:dimensionallytranscendentexoticcatalyst 1000")
        .outputFluids("gtceu:chaos_plasma 10000")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(1200)

    gtr.mixer("gtlcore:fertilizer_")
        .itemInputs("gtceu:fertilizer", "2x gtlcore:scrap")
        .itemOutputs("2x gtceu:fertilizer")
        .EUt(480)
        .duration(40)

    gtr.mixer("gtlcore:dimensionallytranscendentcrudecatalyst")
        .itemInputs("gtlcore:resonating_gem")
        .inputFluids("gtceu:nitrogen_plasma 1000", "gtceu:helium_plasma 1000")
        .outputFluids("gtceu:dimensionallytranscendentcrudecatalyst 1000")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(200)

    gtr.mixer("gtlcore:concentration_mixing_hyper_fuel_1")
        .itemInputs("gtceu:hassium_dust", "gtceu:oganesson_dust")
        .inputFluids("gtceu:hyper_fuel_4 1000", "gtceu:dimensionallytranscendentcrudecatalyst 1000")
        .outputFluids("gtceu:concentration_mixing_hyper_fuel_1 1000")
        .EUt(GTValues.V[GTValues.UXV])
        .duration(800)

    gtr.mixer("gtlcore:concentration_mixing_hyper_fuel_2")
        .itemInputs("gtceu:starmetal_dust", "gtceu:draconium_dust")
        .inputFluids("gtceu:concentration_mixing_hyper_fuel_1 1000", "gtceu:dimensionallytranscendentprosaiccatalyst 1000")
        .outputFluids("gtceu:concentration_mixing_hyper_fuel_2 1000")
        .EUt(GTValues.V[GTValues.OpV])
        .duration(800)

    gtr.mixer("gtlcore:sodium_nitrate_solution")
        .itemInputs("5x gtceu:sodium_nitrate_dust")
        .inputFluids("minecraft:water 1000")
        .outputFluids("gtceu:sodium_nitrate_solution 1000")
        .EUt(120)
        .duration(80)

    gtr.mixer("gtlcore:znfealcl_catalyst_dust")
        .itemInputs("gtceu:zinc_dust", "enderio:powdered_iron", "gtceu:aluminium_dust")
        .inputFluids("gtceu:chlorine 1000")
        .itemOutputs("4x gtceu:znfealcl_catalyst_dust")
        .EUt(15360)
        .duration(250)

    gtr.mixer("gtlcore:kelp_slurry")
        .itemInputs("8x minecraft:dried_kelp")
        .inputFluids("minecraft:water 1000")
        .outputFluids("gtceu:kelp_slurry 1000")
        .EUt(30)
        .duration(600)

    gtr.mixer("gtlcore:germanium_containing_precipitate_dust")
        .inputFluids("gtceu:ash_leaching_solution 1000", "gtceu:tannic 1000")
        .itemOutputs("gtceu:germanium_containing_precipitate_dust")
        .EUt(120)
        .duration(200)

    gtr.mixer("gtlcore:silica_gel_base")
        .itemInputs("3x gtceu:silicon_dioxide_dust", "3x gtceu:sodium_hydroxide_dust")
        .inputFluids("gtceu:distilled_water 1000")
        .outputFluids("gtceu:silica_gel_base 1000")
        .EUt(120)
        .duration(80)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.mixer("gtlcore:xenoxene_mixture")
        .itemInputs("gtceu:tiny_radox_dust", "gtceu:antimony_dust", "gtceu:osmium_dust", "gtceu:ender_eye_dust")
        .inputFluids("gtceu:xenoxene 1000", "gtceu:xenon 9000")
        .outputFluids("gtceu:xenoxene_mixture 10000")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(800)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.mixer("gtlcore:enriched_xenoxene")
        .itemInputs("gtceu:taranium_dust")
        .inputFluids("gtceu:purified_xenoxene 10000", "gtceu:radox_gas 100")
        .outputFluids("gtceu:enriched_xenoxene 10000")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(600)

    gtr.mixer("gtlcore:perlite_dust")
        .itemInputs("2x enderio:powdered_obsidian")
        .inputFluids("minecraft:water 1000")
        .itemOutputs("3x gtceu:perlite_dust")
        .EUt(480)
        .duration(300)

    gtr.mixer("gtlcore:turbid_dragon_blood")
        .inputFluids("gtceu:dragon_blood 1000", "gtceu:gelatin_mixture 1000")
        .itemInputs("gtceu:silica_gel_dust")
        .outputFluids("gtceu:turbid_dragon_blood 1000")
        .EUt(1920)
        .duration(800)
        .cleanroom(GTLCleanroomType.LAW_CLEANROOM)

    gtr.mixer("gtlcore:oganesson_breeding_base")
        .inputFluids("gtceu:titanium_50 1440", "gtceu:californium 576")
        .outputFluids("gtceu:oganesson_breeding_base 2016")
        .EUt(7680)
        .duration(480)

    gtr.mixer("gtlcore:scandium_titanium_50_mixture")
        .inputFluids("gtceu:titanium_50 144", "gtceu:scandium 144")
        .outputFluids("gtceu:scandium_titanium_50_mixture 288")
        .EUt(7680)
        .duration(120)

    gtr.mixer("gtlcore:silica_alumina_gel_dust")
        .itemInputs("5x gtceu:alumina_dust", "3x gtceu:silica_gel_dust")
        .itemOutputs("gtceu:silica_alumina_gel_dust")
        .EUt(120)
        .duration(60)

    gtr.mixer("gtlcore:naquadah_solution")
        .itemInputs("2x gtceu:naquadah_dust")
        .inputFluids("gtceu:ammonium_nitrate_solution 1000")
        .outputFluids("gtceu:naquadah_solution 1000")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(400)

    gtr.mixer("gtlcore:iridium_trichloride_solution")
        .itemInputs("4x gtceu:iridium_chloride_dust")
        .inputFluids("gtceu:hypochlorous_acid 1000", "gtceu:nitric_acid 1000")
        .outputFluids("gtceu:iridium_trichloride_solution 1000")
        .EUt(1920)
        .duration(360)

    gtr.mixer("gtlcore:heavy_quark_enriched_mixture")
        .inputFluids("gtceu:heavy_quarks 750", "gtceu:light_quarks 250")
        .outputFluids("gtceu:heavy_quark_enriched_mixture 1000")
        .EUt(32500000)
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.mixer("gtlcore:essence_seed")
        .itemInputs("16x #forge:seeds", "gtlcore:essence")
        .inputFluids("gtceu:distilled_water 1000", "gtceu:carbon_dioxide 1000")
        .itemOutputs("16x gtlcore:essence_seed")
        .EUt(120)
        .duration(400)

    gtr.mixer("gtlcore:eglin_steel_dust")
        .itemInputs("4x enderio:powdered_iron", "1x gtceu:kanthal_dust", "5x gtceu:invar_dust", "1x gtceu:sulfur_dust", "1x gtceu:silicon_dust", "1x gtceu:carbon_dust")
        .itemOutputs("13x gtceu:eglin_steel_dust")
        .EUt(120)
        .duration(600)

    gtr.mixer("gtlcore:aluminium_bronze_dust")
        .itemInputs("gtceu:aluminium_dust", "6x gtceu:bronze_dust")
        .itemOutputs("7x gtceu:aluminium_bronze_dust")
        .EUt(30)
        .circuit(1)
        .duration(400)

    gtr.mixer("gtlcore:hastelloy_n_dust")
        .itemInputs("2x gtceu:iridium_dust", "4x gtceu:molybdenum_dust", "2x gtceu:chromium_dust", "2x gtceu:titanium_dust", "15x gtceu:nickel_dust")
        .circuit(5)
        .itemOutputs("25x gtceu:hastelloy_n_dust")
        .duration(1000)
        .EUt(GTValues.VA[GTValues.EV])

    gtr.mixer("gtlcore:magneto_resonatic_dust")
        .itemInputs("3x gtceu:prasiolite_dust", "6x gtceu:bismuth_tellurite_dust", "1x gtceu:cubic_zirconia_dust", "1x gtceu:magnetic_steel_dust")
        .itemOutputs("9x gtceu:magneto_resonatic_dust")
        .EUt(30)
        .duration(80)
        .addCondition(new GravityCondition(true))

    gtr.mixer("gtlcore:circuit_compound_dust")
        .itemInputs("3x gtceu:dibismuthhydroborat_dust", "2x gtceu:bismuth_tellurite_dust", "gtceu:indium_gallium_phosphide_dust")
        .itemOutputs("6x gtceu:circuit_compound_dust")
        .EUt(15)
        .duration(890)

    gtr.mixer("gtlcore:euv_photoresist")
        .inputFluids("gtceu:photoresist 1000", "gtceu:polyurethaneresin 1000")
        .itemInputs("31x gtceu:bisethylenedithiotetraselenafulvalene_perrhenate_dust")
        .outputFluids("gtceu:euv_photoresist")
        .EUt(524288)
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.mixer("gtlcore:gamma_rays_photoresist")
        .itemInputs("29x gtceu:borocarbide_dust", "4x gtceu:lanthanum_embedded_fullerene_dust")
        .inputFluids("gtceu:euv_photoresist 1000", "gtceu:trichloroflerane")
        .outputFluids("gtceu:gamma_rays_photoresist 1000")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(800)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.mixer("gtlcore:astatide_solution")
        .inputFluids("gtceu:sulfuric_acid 1000")
        .itemInputs("1x gtceu:astatine_dust")
        .outputFluids("gtceu:astatide_solution 1000")
        .EUt(1920)
        .duration(200)

    gtr.mixer("gtlcore:mixed_astatide_salts_dust")
        .itemInputs("gtceu:holmium_dust", "gtceu:thulium_dust", "gtceu:copernicium_dust", "gtceu:flerovium_dust")
        .inputFluids("gtceu:astatide_solution 3000", "gtceu:distilled_water 3000")
        .itemOutputs("7x gtceu:mixed_astatide_salts_dust")
        .outputFluids("gtceu:diluted_sulfuric_acid 6000")
        .EUt(122880)
        .duration(400)

    gtr.mixer("gtlcore:lanthanum_fullerene_mix_dust")
        .itemInputs("gtceu:lanthanum_dust", "gtceu:unfolded_fullerene_dust")
        .itemOutputs("2x gtceu:lanthanum_fullerene_mix_dust")
        .EUt(30720)
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.mixer("gtlcore:actinoids_dust")
        .itemInputs("1x gtceu:actinoids_1_dust", "1x gtceu:actinoids_2_dust")
        .itemOutputs("2x gtceu:actinoids_dust")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(400)

    gtr.mixer("gtlcore:rhodium_rhenium_naquadah_catalyst_dust")
        .itemInputs("gtceu:rhenium_dust", "gtceu:rhodium_dust", "gtceu:naquadah_dust")
        .itemOutputs("gtceu:rhodium_rhenium_naquadah_catalyst_dust")
        .EUt(84500)
        .duration(260)

    gtr.mixer("gtlcore:polycyclic_aromatic_mixture_dust")
        .itemInputs("2x gtceu:tetracene_dust")
        .inputFluids("gtceu:naphthalene 1000")
        .itemOutputs("3x gtceu:polycyclic_aromatic_mixture_dust")
        .EUt(7680)
        .duration(240)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.mixer("gtlcore:charged_caesium_cerium_cobalt_indium_dust")
        .itemInputs("10x gtceu:indium_dust", "2x enderio:powdered_cobalt", "1x gtceu:cerium_dust", "1x gtceu:caesium_dust")
        .inputFluids("gtceu:cosmic_computing_mixture 1000")
        .itemOutputs("14x gtceu:charged_caesium_cerium_cobalt_indium_dust")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.mixer("gtlcore:viscoelastic_polyurethane")
        .itemInputs("5x gtceu:calcite_dust")
        .inputFluids("gtceu:polyurethane 1000", "gtceu:ethyleneglycol 1000")
        .outputFluids("gtceu:viscoelastic_polyurethane 2000")
        .EUt(120)
        .duration(110)

    gtr.mixer("gtlcore:viscoelastic_polyurethane_foam")
        .inputFluids("gtceu:viscoelastic_polyurethane 1000", "gtceu:air 1000")
        .outputFluids("gtceu:viscoelastic_polyurethane_foam 2000")
        .EUt(120)
        .duration(150)

    gtr.mixer("gtlcore:glucose_iron_solution")
        .itemInputs("24x gtceu:glucose_dust")
        .inputFluids("gtceu:iron_iii_chloride 1000")
        .outputFluids("gtceu:glucose_iron_solution 1000")
        .EUt(30)
        .duration(80)

    gtr.mixer("gtlcore:graphene_gel_suspension_dust")
        .itemInputs("3x gtceu:graphene_oxide_dust")
        .inputFluids("gtceu:resorcinol 1000", "gtceu:formaldehyde 1000")
        .itemOutputs("gtceu:graphene_gel_suspension_dust")
        .EUt(120)
        .duration(100)

    gtr.mixer("gtlcore:grade_9_purified_water")
        .inputFluids("gtceu:grade_8_purified_water 1000", "gtceu:liquid_oxygen 1000")
        .itemInputs("minecraft:blaze_powder")
        .outputFluids("gtceu:grade_9_purified_water 900")
        .itemOutputs("gtceu:dark_ash_dust")
        .EUt(524288)
        .duration(600)

    gtr.mixer("gtlcore:antihydrogen")
        .inputFluids("gtceu:positive_electron 200", "gtceu:antiproton 200")
        .notConsumable("gtceu:uv_field_generator")
        .outputFluids("gtceu:antihydrogen 200")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(400)

    gtr.mixer("gtlcore:rocket_fuel_rp_1")
        .inputFluids("gtceu:rp_1 1000", "gtceu:liquid_oxygen 1000")
        .outputFluids("gtceu:rocket_fuel_rp_1 1000")
        .EUt(1920)
        .duration(16)

    gtr.mixer("gtlcore:dense_hydrazine_fuel_mixture")
        .inputFluids("gtceu:hydrazine 1000", "gtceu:methanol 1000")
        .outputFluids("gtceu:dense_hydrazine_fuel_mixture 1000")
        .EUt(240)
        .duration(320)

    gtr.mixer("gtlcore:rocket_fuel_h8n4c2o4")
        .inputFluids("gtceu:dimethylhydrazine 1000", "gtceu:dinitrogen_tetroxide 1000")
        .outputFluids("gtceu:rocket_fuel_h8n4c2o4 1000")
        .EUt(1920)
        .duration(480)

    gtr.mixer("gtlcore:rocket_fuel_cn3h7o3")
        .inputFluids("gtceu:monomethylhydrazine 1000", "gtceu:nitric_acid 1000")
        .outputFluids("gtceu:rocket_fuel_cn3h7o3 1000")
        .EUt(1920)
        .duration(200)

    gtr.mixer("ad_astra:cryo_fuel")
        .itemInputs("16x ad_astra:ice_shard")
        .inputFluids("gtceu:cetane_boosted_diesel 1000", "gtceu:explosivehydrazine 1000")
        .outputFluids("ad_astra:cryo_fuel 1000")
        .EUt(7680)
        .duration(320)

    gtr.mixer("gtlcore:explosivehydrazine")
        .inputFluids("gtceu:glyceryl_trinitrate 1000", "gtceu:dense_hydrazine_fuel_mixture 3000")
        .notConsumable("gtceu:luv_field_generator")
        .itemInputs("16x gtceu:gelled_toluene", "8x minecraft:fire_charge")
        .outputFluids("gtceu:explosivehydrazine 4000")
        .EUt(1920)
        .duration(480)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.mixer("gtlcore:potassium_pyrosulfate_dust")
        .itemInputs("2x gtceu:potassium_dust", "2x gtceu:sulfur_dust")
        .inputFluids("gtceu:oxygen 7000")
        .itemOutputs("11x gtceu:potassium_pyrosulfate_dust")
        .EUt(120)
        .duration(120)

    gtr.mixer("gtlcore:astral_silver_dust")
        .itemInputs("2x gtceu:silver_dust", "gtceu:thaumium_dust")
        .itemOutputs("3x gtceu:astral_silver_dust")
        .EUt(1920)
        .duration(400)

    gtr.mixer("gtlcore:highenergymixture_dust")
        .itemInputs("4x minecraft:glowstone_dust", "2x minecraft:redstone", "1x gtceu:aluminium_dust")
        .circuit(3)
        .itemOutputs("4x gtceu:highenergymixture_dust")
        .EUt(480)
        .duration(600)

    gtr.mixer("gtlcore:sunnarium")
        .notConsumable("gtceu:uxv_field_generator")
        .inputFluids("gtceu:helium_plasma 1000", "gtceu:glowstone 1000")
        .outputFluids("gtceu:sunnarium 1000")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(400)

    gtr.mixer("gtlcore:sodium_ethylate_dust")
        .itemInputs("1x gtceu:sodium_dust")
        .inputFluids("gtceu:ethanol 1000")
        .itemOutputs("9x gtceu:sodium_ethylate_dust")
        .outputFluids("gtceu:hydrogen 1000")
        .EUt(GTValues.VA[GTValues.MV])
        .duration(100)

    gtr.mixer("gtlcore:actinium_trinium_hydroxides_dust")
        .itemInputs("58x gtceu:actinium_trinium_hydroxides_dust", "6x gtceu:radium_dust", "1x gtlcore:protonated_fullerene_sieving_matrix")
        .inputFluids("minecraft:water 2000")
        .itemOutputs("1x gtlcore:saturated_fullerene_sieving_matrix")
        .outputFluids("gtceu:actinium_radium_hydroxide_solution 2000")
        .EUt(GTValues.VA[GTValues.ZPM] * 2)
        .duration(210)

    gtr.mixer("gtlcore:molten_calcium_salts")
        .itemInputs("1x gtceu:calcium_dust")
        .inputFluids("gtceu:fluorite 432")
        .outputFluids("gtceu:molten_calcium_salts 1000")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(160)

    gtr.mixer("gtlcore:boron_trifluoride_acetate")
        .inputFluids("gtceu:diethyl_ether 1000", "gtceu:boron_fluoride 1000")
        .outputFluids("gtceu:boron_trifluoride_acetate 1000")
        .EUt(125)
        .duration(150)

    gtr.mixer("gtlcore:sodium_aluminium_hydride_dust")
        .itemInputs("4x gtceu:aluminium_hydride_dust", "2x gtceu:sodium_hydride_dust")
        .itemOutputs("6x gtceu:sodium_aluminium_hydride_dust")
        .EUt(30)
        .duration(190)
})