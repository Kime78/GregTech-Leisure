ServerEvents.recipes(event => {
    const gtr = event.recipes.gtceu

    function assemble_fuel(name, isnq) {
        let rod = isnq ? "4x gtceu:tungsten_carbide_rod" : "4x gtceu:steel_rod"
        gtr.assembler("gtlcore:reactor_" + name + "_dual")
            .itemInputs("2x gtlcore:reactor_" + name + "_simple", rod)
            .itemOutputs("gtlcore:reactor_" + name + "_dual")
            .EUt(30)
            .duration(40)

        gtr.assembler("gtlcore:reactor_" + name + "_quad")
            .itemInputs("2x gtlcore:reactor_" + name + "_dual", rod)
            .itemOutputs("gtlcore:reactor_" + name + "_quad")
            .EUt(30)
            .duration(80)
    }

    assemble_fuel("uranium", false)
    assemble_fuel("thorium", false)
    assemble_fuel("mox", false)
    assemble_fuel("naquadah", true)

    function centrifuge_fuel(name, isnq, product, output, chance, extra) {
        let rod = isnq ? "gtceu:tungsten_carbide_rod" : "gtceu:steel_rod"
        let fuel_rod = isnq ? "gtlcore:tungsten_carbide_reactor_fuel_rod" : "gtlcore:reactor_fuel_rod"
        gtr.centrifuge("gtlcore:depleted_reactor_" + name + "_simple")
            .itemInputs("gtlcore:depleted_reactor_" + name + "_simple")
            .itemOutputs(fuel_rod)
            .chancedOutput(output + "x " + product, chance, extra)
            .chancedOutput("2x gtlcore:nuclear_waste", 1600, 500)
            .EUt(480)
            .duration(40)

        gtr.centrifuge("gtlcore:depleted_reactor_" + name + "_dual")
            .itemInputs("gtlcore:depleted_reactor_" + name + "_dual")
            .itemOutputs("2x " + fuel_rod, "4x " + rod)
            .chancedOutput(2 * output + "x " + product, chance, extra)
            .chancedOutput("4x gtlcore:nuclear_waste", 3600, 500)
            .EUt(480)
            .duration(80)

        gtr.centrifuge("gtlcore:depleted_reactor_" + name + "_quad")
            .itemInputs("gtlcore:depleted_reactor_" + name + "_quad")
            .itemOutputs("4x " + fuel_rod, "12x " + rod)
            .chancedOutput(4 * output + "x " + product, chance, extra)
            .chancedOutput("8x gtlcore:nuclear_waste", 8000, 500)
            .EUt(480)
            .duration(160)
    }

    centrifuge_fuel("uranium", false, "gtceu:plutonium_dust", 6, 2500, 100)
    centrifuge_fuel("thorium", false, "gtceu:uranium_dust", 4, 4000, 500)
    centrifuge_fuel("mox", false, "gtlcore:nuclear_waste", 8, 2000, 1000)
    centrifuge_fuel("naquadah", true, "gtceu:plutonium_dust", 2, 8000, 200)

    gtr.fission_reactor("gtlcore:reactor_thorium_simple")
        .itemInputs("gtlcore:reactor_thorium_simple")
        .itemOutputs("gtlcore:depleted_reactor_thorium_simple")
        .EUt(6)
        .duration(134400)
        .addData("FRheat", 1)

    gtr.fission_reactor("gtlcore:reactor_thorium_dual")
        .itemInputs("gtlcore:reactor_thorium_dual")
        .itemOutputs("gtlcore:depleted_reactor_thorium_dual")
        .EUt(8)
        .duration(172800)
        .addData("FRheat", 2)

    gtr.fission_reactor("gtlcore:reactor_thorium_quad")
        .itemInputs("gtlcore:reactor_thorium_quad")
        .itemOutputs("gtlcore:depleted_reactor_thorium_quad")
        .EUt(10)
        .duration(216000)
        .addData("FRheat", 3)

    gtr.fission_reactor("gtlcore:reactor_uranium_simple")
        .itemInputs("gtlcore:reactor_uranium_simple")
        .itemOutputs("gtlcore:depleted_reactor_uranium_simple")
        .EUt(3)
        .duration(112000)
        .addData("FRheat", 4)

    gtr.fission_reactor("gtlcore:reactor_uranium_dual")
        .itemInputs("gtlcore:reactor_uranium_dual")
        .itemOutputs("gtlcore:depleted_reactor_uranium_dual")
        .EUt(4)
        .duration(144000)
        .addData("FRheat", 5)

    gtr.fission_reactor("gtlcore:reactor_uranium_quad")
        .itemInputs("gtlcore:reactor_uranium_quad")
        .itemOutputs("gtlcore:depleted_reactor_uranium_quad")
        .EUt(5)
        .duration(180000)
        .addData("FRheat", 6)

    gtr.fission_reactor("gtlcore:reactor_mox_simple")
        .itemInputs("gtlcore:reactor_mox_simple")
        .itemOutputs("gtlcore:depleted_reactor_mox_simple")
        .EUt(1)
        .duration(78400)
        .addData("FRheat", 6)

    gtr.fission_reactor("gtlcore:reactor_mox_dual")
        .itemInputs("gtlcore:reactor_mox_dual")
        .itemOutputs("gtlcore:depleted_reactor_mox_dual")
        .EUt(2)
        .duration(100800)
        .addData("FRheat", 7)

    gtr.fission_reactor("gtlcore:reactor_mox_quad")
        .itemInputs("gtlcore:reactor_mox_quad")
        .itemOutputs("gtlcore:depleted_reactor_mox_quad")
        .EUt(3)
        .duration(128000)
        .addData("FRheat", 8)

    gtr.fission_reactor("gtlcore:reactor_naquadah_simple")
        .itemInputs("gtlcore:reactor_naquadah_simple")
        .itemOutputs("gtlcore:depleted_reactor_naquadah_simple")
        .EUt(3)
        .duration(160000)
        .addData("FRheat", 7)

    gtr.fission_reactor("gtlcore:reactor_naquadah_dual")
        .itemInputs("gtlcore:reactor_naquadah_dual")
        .itemOutputs("gtlcore:depleted_reactor_naquadah_dual")
        .EUt(5)
        .duration(240000)
        .addData("FRheat", 8)

    gtr.fission_reactor("gtlcore:reactor_naquadah_quad")
        .itemInputs("gtlcore:reactor_naquadah_quad")
        .itemOutputs("gtlcore:depleted_reactor_naquadah_quad")
        .EUt(7)
        .duration(360000)
        .addData("FRheat", 9)
})