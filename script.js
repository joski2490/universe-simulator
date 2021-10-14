/*
require(['require', 'js-big-decimal'], function (require) {
    var bigDecimal = require('./node_modules/js-big-decimal')
});
*/
var consoleData = new Array(5)
var consoleInfo = document.getElementById('console_data')
var multiAtomsCost
var energyCount

//Reset
function reset() {
    if (confirm("Are you sure you want to reset?")) {
        atomCount = 0
        updateAtomCount()
        energyCount = new bigDecimal("0.00000000000")
        updateEnergyCount()
        autoAtomGenerators = 0
        autoAtomsCost = new bigDecimal("0.00000003200")
        clearInterval(atom_timer)
        updateAutoAtoms()
        multiAtoms = 0
        multiAtomsCost = new bigDecimal("0.00000001200")
        updateMultiAtoms() 
        expoAtoms = 0
        expoAtomsCost = new bigDecimal("0.00010000000")
        window.localStorage.setItem("expo_atom", String(expoAtoms))
        window.localStorage.setItem("display_multi", String(displayMulti))
        updateExpoAtoms()
        displayCollagen = true
        displayFlu = true
        displayMulti = true
        displayAuto = true
        displayExpo = true
        displayHair = true
        displayGenome = true
        displayBlood = true
        displayWater = true
        displayMid = true
        displayHuman = true
        displayVoid = true
        displayPlanet = true
        displayMillion = true
        displayBillion = true
        displayTrillion = true
        updateBooleans()
        freeAtoms = 0
        updateFreeAtoms()
        solarCount = 0
        solarCost = 0
        updateSolar()
        nebulaCount = 0
        nebulaCost = 0
        updateNebulas()
        singularityCount = 0
        singularityCost = randomIntFromInterval(10**45, 10**51)
        updateSingularities()
        twinCount = 0
        twinCost = 0
        updateTwins()
        supermassiveCount = 0
        supermassiveCost = 0
        clearInterval(super_timer)
        clearInterval(solar_timer)
        clearInterval(nebula_timer)
        updateSupermassives()
        planetCount = 0
        starCount = 0
        updatePlanets()
        updateStars()
        clearInterval(game_timer)
        totalSeconds = 0
        window.localStorage.setItem("total_seconds", "0")
        entropy = 0
        window.localStorage.setItem("entropy", "0")
        var elem = document.getElementById("myBar");
        elem.style.width = entropy + "%";
        
        hideLevel2()
        
        for (var i = 0; i < consoleData.length - 1; i++) {
            consoleData[i] = "."
        }
        consoleData[4] = "Welcome to your empty universe.  Go ahead and start creating."
        updateConsole()
    }
  
}

function level2reset() {
    if (confirm("Are you sure you want to reset?")) {
        atomCount = 10**99
        updateAtomCount()
        energyCount = new bigDecimal(10**100)
        updateEnergyCount()
        autoAtomGenerators = 120
        autoAtomsCost = new bigDecimal(10**41)
        clearInterval(atom_timer)
        updateAutoAtoms()
        multiAtoms = 120
        multiAtomsCost = new bigDecimal(10**41)
        updateMultiAtoms() 
        expoAtoms = 20
        expoAtomsCost = new bigDecimal(10**41)
        window.localStorage.setItem("expo_atom", String(expoAtoms))
        window.localStorage.setItem("display_multi", String(displayMulti))
        updateExpoAtoms()
        displayCollagen = true
        displayFlu = true
        displayMulti = true
        displayAuto = true
        displayExpo = true
        displayHair = true
        displayGenome = true
        displayBlood = true
        displayWater = true
        displayMid = true
        displayHuman = true
        displayVoid = true
        displayPlanet = true
        updateBooleans()
        freeAtoms = 10**99
        updateFreeAtoms()
        solarCount = 0
        solarCost = randomIntFromInterval(10**51, 10**56)
        updateSolar()
        nebulaCount = 0
        nebulaCost = randomIntFromInterval(10**51, 10**56)
        updateNebulas()
        singularityCount = 0
        singularityCost = randomIntFromInterval(10**45, 10**51)
        singularityCost = 10**35
        updateSingularities()
        twinCount = 0
        twinCost = randomIntFromInterval(10**47, 10**53)
        updateTwins()
        supermassiveCount = 0
        supermassiveCost = randomIntFromInterval(10**52, 10**60)
        clearInterval(super_timer)
        clearInterval(solar_timer)
        clearInterval(nebula_timer)
        updateSupermassives()
        planetCount = 0
        starCount = 0
        updatePlanets()
        updateStars()
        clearInterval(game_timer)
        totalSeconds = 0
        
        for (var i = 0; i < consoleData.length - 1; i++) {
            consoleData[i] = "."
        }
        consoleData[4] = "Welcome to your empty universe.  Go ahead and start creating."
        updateConsole()
    }
  
}

//Persistence /////////////////////////////////////////////////////////////////////////////////////

//Boolean Persistence
if (window.localStorage.getItem("display_planet") != null ) {
    displayMulti = (window.localStorage.getItem("display_multi") === 'true')
    displayAuto = (window.localStorage.getItem("display_auto") === 'true')
    displayExpo = (window.localStorage.getItem("display_expo") === 'true')
    displayFlu = (window.localStorage.getItem("display_flu") === 'true')
    displayCollagen = (window.localStorage.getItem("display_collagen") === 'true')
    displayHair = (window.localStorage.getItem("display_hair") === 'true')
    displayGenome = (window.localStorage.getItem("display_genome") === 'true')
    displayBlood = (window.localStorage.getItem("display_blood") === 'true')
    displayWater = (window.localStorage.getItem("display_water") === 'true')
    displayMid = (window.localStorage.getItem("display_mid") === 'true')
    displayHuman = (window.localStorage.getItem("display_human") === 'true')
    displayVoid = (window.localStorage.getItem("display_void") === 'true')
    displayPlanet = (window.localStorage.getItem("display_planet") === 'true')
    displayMillion = (window.localStorage.getItem("display_million") === 'true')
    displayBillion = (window.localStorage.getItem("display_billion") === 'true')
    displayTrillion = (window.localStorage.getItem("display_trillion") === 'true')

} else {
    var displayMulti = true
    var displayAuto = true
    var displayExpo = true
    var displayCollagen = true
    var displayFlu = true
    var displayHair = true
    var displayGenome = true
    var displayBlood = true
    var displayWater = true
    var displayMid = true
    var displayHuman = true
    var displayVoid = true
    var displayPlanet = true
    var displayMillion = true
    var displayBillion = true
    var displayTrillion = true
}
//Atom Count Persistence
if (window.localStorage.getItem("atom_count") != null) {
    atomCount = window.localStorage.getItem("atom_count")
    atomCount = Number(atomCount)
    if (atomCount > 10**15) {
        atomCount = atomCount.toExponential(6)
    } 
    document.getElementById('atom_label').innerHTML = "Atoms: " + atomCount
} else {
    var atomCount = 0
    updateAtomCount()
}

//Energy Count Persistence
if (window.localStorage.getItem("energy_count") != null) {
    energyCount = new bigDecimal(window.localStorage.getItem("energy_count"))
    if (energyCount.getValue() > 10**15) {
        document.getElementById('energy_label').innerHTML = "Energy: " + Number(energyCount.getValue().toExponential(5)) + " J"
    } else {
        document.getElementById('energy_label').innerHTML = "Energy: " + bigDecimal.getPrettyValue(energyCount.getValue()) + " J"
    }
} else {
    var energyCount = new bigDecimal("0.00000000000")
    updateEnergyCount()
}

//Multi Atoms Persistence
if (window.localStorage.getItem("multi_atoms_count") != null) {
    multiAtoms = Number(window.localStorage.getItem("multi_atoms_count"))
    multiAtomsCost = new bigDecimal(window.localStorage.getItem("multi_atoms_cost"))
    if (multiAtomsCost.getValue() > 10**15) {
        document.getElementById('multi_atoms_cost').innerHTML = "Cost: \u00A0 \u00A0 " + " " + Number(multiAtomsCost.getValue()).toExponential(5) + " J"
    } else {
        document.getElementById('multi_atoms_cost').innerHTML = "Cost: \u00A0 \u00A0 " + " " + bigDecimal.getPrettyValue(multiAtomsCost.getValue()) + " J"
    }
    document.getElementById('multi_atoms_count').innerHTML = multiAtoms
    
} else {
    var multiAtoms = 0
    var multiAtomsCost = new bigDecimal("0.00000001200")
    updateMultiAtoms()
}
//Expo Atoms Persistence
if (window.localStorage.getItem("expo_atoms_count") != null) {
    expoAtoms = Number(window.localStorage.getItem("expo_atoms_count"))
    expoAtomsCost = new bigDecimal((window.localStorage.getItem("expo_atoms_cost")))
    if (expoAtomsCost.getValue() > 10**15) {
        document.getElementById('expo_atoms_cost').innerHTML = "Cost: \u00A0 \u00A0 " + " " + Number(expoAtomsCost.getValue()).toExponential(5) + " J"
    } else {
        document.getElementById('expo_atoms_cost').innerHTML = "Cost: \u00A0 \u00A0 " + " " + bigDecimal.getPrettyValue(expoAtomsCost.getValue()) + " J"
    }
    document.getElementById('expo_atoms_count').innerHTML = expoAtoms
    
} else {
    var expoAtoms = 0
    var expoAtomsCost = new bigDecimal("0.0001")
    updateExpoAtoms()
}

//Auto Atoms Persistence
if (window.localStorage.getItem("auto_atom_generators") != null) {
    autoAtomGenerators = Number(window.localStorage.getItem("auto_atom_generators"))
    autoAtomsCost = new bigDecimal(window.localStorage.getItem("auto_atoms_cost"))
    if (autoAtomsCost.getValue() > 10**15) {
        document.getElementById('auto_atoms_label').innerHTML = "Cost: \u00A0 \u00A0 " + " " + Number(autoAtomsCost.getValue()).toExponential(5) + " J"
    } else {
        document.getElementById('auto_atoms_label').innerHTML = "Cost: \u00A0 \u00A0 " + " " + bigDecimal.getPrettyValue(autoAtomsCost.getValue()) + " J"
    }
    document.getElementById('auto_atoms_count').innerHTML = autoAtomGenerators
    
    if (autoAtomGenerators > 0) {
        autoAtomsCounter()
    }
} else {
    var autoAtomGenerators = 0
    var autoAtomsCost = new bigDecimal("0.00000003200")
    updateAutoAtoms()
}

//Free Atoms Persistence
if (window.localStorage.getItem("free_atoms_count") != null) {
    freeAtoms = window.localStorage.getItem("free_atoms_count")
    freeAtoms = Number(freeAtoms).toExponential(6)
    document.getElementById("free_atoms_count").innerHTML = "Free Atoms: " + freeAtoms
} else {
    var freeAtoms = 0
    updateFreeAtoms()
}

//Solar Persistence
if (window.localStorage.getItem("solar_count") != null) {
    solarCount = window.localStorage.getItem("solar_count")
    solarCost = window.localStorage.getItem("solar_cost")
    solarCount = Number(solarCount)
    solarCost = Number(solarCost).toExponential(6)
    document.getElementById("solar_count").innerHTML = solarCount
    document.getElementById("solar_cost").innerHTML = "Cost: \u00A0 \u00A0 " + " " + solarCost + " atoms"
    if (solarCount > 0) {
        solarCounter()
    }
} else {
    var solarCount = 0
    var solarCost = randomIntFromInterval(10**49, 10**51)
    updateSolar()
}

//Nebula Persistence
if (window.localStorage.getItem("nebula_count") != null) {
    nebulaCount = window.localStorage.getItem("nebula_count")
    nebulaCost = window.localStorage.getItem("nebula_cost")
    nebulaCount = Number(nebulaCount)
    nebulaCost = Number(nebulaCost).toExponential(6)
    document.getElementById("nebula_count").innerHTML = nebulaCount
    document.getElementById('nebula_cost').innerHTML = "Cost: \u00A0 \u00A0 " + " " + nebulaCost + " atoms"
    if (nebulaCount > 0) {
        nebulaCounter()
    }
} else {
    var nebulaCount = 0
    var nebulaCost = randomIntFromInterval(10**53, 10**56)
    updateNebulas()
}

//Singularity Persistence
if (window.localStorage.getItem("singularity_count") != null) {
    singularityCount = window.localStorage.getItem("singularity_count")
    singularityCost = window.localStorage.getItem("singularity_cost")
    singularityCount = Number(singularityCount)
    singularityCost = Number(singularityCost)
    document.getElementById("singularity_count").innerHTML = "Galaxies: " + singularityCount
    document.getElementById("singularity_cost").innerHTML = "Cost: \u00A0 \u00A0 " + " " + singularityCost.toExponential(6) + " J"
} else {
    var singularityCount = 0
    var singularityCost = randomIntFromInterval(10**45, 10**51)
    updateSingularities()
}

//Twin Persistence
if (window.localStorage.getItem("twin_count") != null) {
    twinCount = window.localStorage.getItem("twin_count")
    twinCost = window.localStorage.getItem("twin_cost")
    twinCount = Number(twinCount)
    twinCost = Number(twinCost)
    document.getElementById('twin_count').innerHTML = twinCount
    document.getElementById('twin_cost').innerHTML = "Cost: \u00A0 \u00A0 " + " " + twinCost.toExponential(6) + " J"
} else {
    var twinCount = 0
    var twinCost = randomIntFromInterval(10**47, 10**53)
    updateTwins()
}

//Supermassive Persistence
if (window.localStorage.getItem("supermassive_count") != null) {
    supermassiveCount = window.localStorage.getItem("supermassive_count")
    supermassiveCost = window.localStorage.getItem("supermassive_cost")
    supermassiveCount = Number(supermassiveCount)
    supermassiveCost = Number(supermassiveCost)
    document.getElementById('supermassive_count').innerHTML = supermassiveCount
    document.getElementById('supermassive_cost').innerHTML = "Cost: \u00A0 \u00A0 " + " " + supermassiveCost.toExponential(6) + " J"
    if (supermassiveCount > 0) {
        supermassiveCounter()
    }
} else {
    var supermassiveCount = 0
    var supermassiveCost = randomIntFromInterval(10**52, 10**60)
    updateSupermassives()
}

//Planet Persistence
if (window.localStorage.getItem("planet_count") != null) {
    planetCount = window.localStorage.getItem("planet_count")
    planetCount = Number(planetCount)
    document.getElementById("planet_count").innerHTML = "Planets: " + planetCount
} else {
    var planetCount = 0
    updatePlanets()
}

//Star Persistence
if (window.localStorage.getItem("star_count") != null) {
    starCount = window.localStorage.getItem("star_count")
    starCount = Number(starCount)
    document.getElementById("star_count").innerHTML = "Stars: " + starCount
} else {
    var starCount = 0
    updateStars()
}


//Habitable Persistence
if (window.localStorage.getItem("habitable_count") != null) {
    habitableCount = window.localStorage.getItem("habitable_count")
    habitableCount = Number(habitableCount)
    document.getElementById("habitable_count").innerHTML = "Habitable Planets: " + habitableCount
} else {
    var habitableCount = 0
    updateHabitable()
}

//Inhabited Persistence
if (window.localStorage.getItem("inhabited_count") != null) {
    inhabitedCount = window.localStorage.getItem("inhabited_count")
    inhabitedCount = Number(inhabitedCount)
    document.getElementById("inhabited_count").innerHTML = "Inhabited Worlds: " + inhabitedCount
} else {
    var inhabitedCount = 0
    updateInhabited()
}

//Intelligent Persistence
if (window.localStorage.getItem("intelligent_count") != null) {
    intelligentCount = window.localStorage.getItem("intelligent_count")
    intelligentCount = Number(intelligentCount)
    document.getElementById("intelligent_count").innerHTML = "Intelligent Civilizations: " + intelligentCount
} else {
    var intelligentCount = 0
    updateIntelligent()
}

//Interstellar Persistence
if (window.localStorage.getItem("interstellar_count") != null) {
    interstellarCount = window.localStorage.getItem("interstellar_count")
    interstellarCount = Number(interstellarCount)
    document.getElementById("interstellar_count").innerHTML = "Interstellar Empires: " + interstellarCount
} else {
    var interstellarCount = 0
    updateInterstellar()
}


//Multidimensional Persistence
if (window.localStorage.getItem("multidimensional_count") != null) {
    multidimensionalCount = window.localStorage.getItem("multidimensional_count")
    multidimensionalCount = Number(multidimensionalCount)
    document.getElementById("multidimensional_count").innerHTML = "Multidimensional Species: " + multidimensionalCount
} else {
    var multidimensionalCount = 0
    updateMultidimensional()
}

//Game time Persistence
if (window.localStorage.getItem("total_seconds") != null) {
    totalSeconds = window.localStorage.getItem("total_seconds")
    totalSeconds = Number(totalSeconds)
    if (atomCount != 0) {
        startGame()
    }
} else {
    var totalSeconds = 0
}

//Console Persistence
if (window.localStorage.getItem("console_data_4") != null) {
    consoleData[0] =  window.localStorage.getItem("console_data_0")
    consoleData[1] =  window.localStorage.getItem("console_data_1")
    consoleData[2] =  window.localStorage.getItem("console_data_2")
    consoleData[3] =  window.localStorage.getItem("console_data_3")
    consoleData[4] =  window.localStorage.getItem("console_data_4")
    updateConsole()
} else {
    consoleData = new Array(5)
    for (var i = 0; i < consoleData.length - 1; i++) {
        consoleData[i] = "."
    }
    consoleData[4] = "Welcome to your empty universe.  Go ahead and start creating."
    consoleInfo = document.getElementById('console_data')
    updateConsole()
}

//Visibility Persistence
if (window.localStorage.getItem("level_2_visibility") == "true") {
    showLevel2()
} else {
    hideLevel2()
}

//Entropy Persistence
if (window.localStorage.getItem("entropy") != "null") {
    var i = 0;
    entropy = Number(window.localStorage.getItem("entropy"))
    var elem = document.getElementById("myBar");
    elem.style.width = entropy + "%";
    move(entropy)
} else {
    var entropy = 0
}

//Console Functions///////////////////////////////////////////////////////////////////////

//Helper function to clear the current console
function clearConsole() {
    while(consoleInfo.firstChild) {
        consoleInfo.removeChild(consoleInfo.lastChild)
    }
}
//Function to update the information in console
function updateConsole() {
    clearConsole()
    for (var i = 0; i < consoleData.length; i++) {
        var anchor = document.createElement('p')
        var value = consoleData[i]
        anchor.href = value
        anchor.innerHTML = value
        consoleInfo.appendChild(anchor)
        localStorage.setItem("console_data_0", String(consoleData[0]))
        localStorage.setItem("console_data_1", String(consoleData[1]))
        localStorage.setItem("console_data_2", String(consoleData[2]))
        localStorage.setItem("console_data_3", String(consoleData[3]))
        localStorage.setItem("console_data_4", String(consoleData[4]))
    }
}

/////Update Functions /////////////////////////////////////////////////////////////////////////

//Atom Counters
function updateAtomCount() {
    atomCount = Number(atomCount)
    if (atomCount > 10**15) {
        atomCount = atomCount.toExponential(6)
    } 
    
    document.getElementById('atom_label').innerHTML = "Atoms: " + atomCount
    localStorage.setItem("atom_count", String(atomCount))

}


//Energy Counter
function updateEnergyCount() {
    if (atomCount > 0) {
        if (energyCount.getValue() > 10**30) {
            energyCount = Number(energyCount.getValue() + (((1 + multiAtoms)**(1 + expoAtoms)) * 0.00000000016))
        } else {
            energyCount = bigDecimal.add(energyCount.getValue(), String((((1 + multiAtoms)**(1 + expoAtoms)) * 0.00000000016)))
        }
        if (energyCount >= 1 && energyCount < 10**5) {
            energyCount = bigDecimal.round(energyCount, 4)
        }
        if (energyCount >= 10**5 && energyCount < 10**15) {
            energyCount = bigDecimal.round(energyCount)
        } 
        if (energyCount < 1) {
            energyCount = Number(energyCount).toFixed(11)
        }
        if (energyCount >= 10**15) {
            energyCount = Number(energyCount).toExponential(5)
            document.getElementById('energy_label').innerHTML = "Energy: " + energyCount + " J"
        } else {
            document.getElementById('energy_label').innerHTML = "Energy: " + bigDecimal.getPrettyValue(energyCount) + " J"
        }
        localStorage.setItem("energy_count", energyCount)
        energyCount = new bigDecimal(Number(energyCount))
    } else {
        document.getElementById('energy_label').innerHTML = "Energy: " + energyCount.getValue() + " J"
        localStorage.setItem("energy_count", String(energyCount.getValue()))
    }
}

//AutoAtoms Initialization
function updateAutoAtoms() {
    document.getElementById('auto_atoms_count').innerHTML = autoAtomGenerators
    if (autoAtomsCost.getValue() < 10**15) {
        document.getElementById('auto_atoms_label').innerHTML = "Cost: \u00A0 \u00A0 " + " " + bigDecimal.getPrettyValue(autoAtomsCost.getValue()) + " J"
    } else {
        document.getElementById('auto_atoms_label').innerHTML = "Cost: \u00A0 \u00A0 " + " " + Number(autoAtomsCost.getValue()).toExponential(5) + " J"
    }
    window.localStorage.setItem("auto_atom_generators", String(autoAtomGenerators))
    window.localStorage.setItem("auto_atoms_cost", String(autoAtomsCost.getValue()))
}

function updateMultiAtoms() {
    document.getElementById('multi_atoms_count').innerHTML = multiAtoms
    if (multiAtomsCost.getValue() < 10**15) {
        document.getElementById('multi_atoms_cost').innerHTML = "Cost: \u00A0 \u00A0 " + " " + bigDecimal.getPrettyValue(multiAtomsCost.getValue()) + " J"
    } else {
        document.getElementById('multi_atoms_cost').innerHTML = "Cost: \u00A0 \u00A0 " + " " + Number(multiAtomsCost.getValue()).toExponential(5) + " J"
    }
    window.localStorage.setItem("multi_atoms_count", String(multiAtoms))
    window.localStorage.setItem("multi_atoms_cost", String(multiAtomsCost.getValue())) 
}

function updateExpoAtoms() {
    document.getElementById('expo_atoms_count').innerHTML = expoAtoms
    if (expoAtomsCost.getValue() < 10**15) {
        document.getElementById('expo_atoms_cost').innerHTML = "Cost: \u00A0 \u00A0 " + " " + bigDecimal.getPrettyValue(expoAtomsCost.getValue()) + " J"
    } else {
        document.getElementById('expo_atoms_cost').innerHTML = "Cost: \u00A0 \u00A0 " + " " + Number(expoAtomsCost.getValue()).toExponential(5) + " J"
    }
    window.localStorage.setItem("expo_atoms_count", String(expoAtoms))
    window.localStorage.setItem("expo_atoms_cost", String(expoAtomsCost.getValue()))
}

//Free Atom Counter
function updateFreeAtoms() {
    window.localStorage.setItem("free_atoms_count", String(freeAtoms))
    document.getElementById("free_atoms_count").innerHTML = "Free Atoms: " + freeAtoms.toExponential(6)
}

function updateSolar() {
    window.localStorage.setItem("solar_count", String(solarCount))
    window.localStorage.setItem("solar_cost", String(solarCost))
    document.getElementById("solar_count").innerHTML = solarCount
    document.getElementById("solar_cost").innerHTML = "Cost: \u00A0 \u00A0 " + " " + solarCost.toExponential(6) + " atoms"
}

function updateNebulas() {
    window.localStorage.setItem("nebula_count", String(nebulaCount))
    window.localStorage.setItem("nebula_cost", String(nebulaCost))
    document.getElementById("nebula_count").innerHTML = nebulaCount
    document.getElementById("nebula_cost").innerHTML = "Cost: \u00A0 \u00A0 " + " " + nebulaCost.toExponential(6) + " atoms"
}

function updateSingularities() {
    window.localStorage.setItem("singularity_count", String(singularityCount))
    window.localStorage.setItem("singularity_cost", String(singularityCost))
    document.getElementById('singularity_count').innerHTML =  "Galaxies: " + singularityCount
    document.getElementById('singularity_cost').innerHTML = "Cost: \u00A0 \u00A0 " + " " + singularityCost.toExponential(6) + " J"
}

function updateTwins() {
    window.localStorage.setItem("twin_count", String(twinCount))
    window.localStorage.setItem("twin_cost", String(twinCost))
    document.getElementById('twin_count').innerHTML =  twinCount
    document.getElementById('twin_cost').innerHTML = "Cost: \u00A0 \u00A0 " + " " + twinCost.toExponential(6) + " J"
}

function updateSupermassives() {
    window.localStorage.setItem("supermassive_count", String(supermassiveCount))
    window.localStorage.setItem("supermassive_cost", String(supermassiveCost))
    document.getElementById('supermassive_count').innerHTML =  supermassiveCount
    document.getElementById('supermassive_cost').innerHTML = "Cost: \u00A0 \u00A0 " + " " + supermassiveCost.toExponential(6) + " J"
}

function updatePlanets() {
    window.localStorage.setItem("planet_count", String(planetCount))
    document.getElementById('planet_count').innerHTML = "Planets: " + planetCount
}

function updateStars() {
    window.localStorage.setItem("star_count", String(starCount))
    document.getElementById('star_count').innerHTML = "Stars: " + starCount
}

function updateHabitable() {
    window.localStorage.setItem("habitable_count", String(habitableCount))
    document.getElementById("habitable_count").innerHTML = "Habitable Planets: " + habitableCount
}

function updateInhabited() {
    window.localStorage.setItem("inhabited_count", String(inhabitedCount))
    document.getElementById("inhabited_count").innerHTML = "Inhabited Worlds: " + inhabitedCount
}

function updateIntelligent() {
    window.localStorage.setItem("intelligent_count", String(intelligentCount))
    document.getElementById("intelligent_count").innerHTML = "Intelligent Civilizations: " + intelligentCount
}

function updateInterstellar() {
    window.localStorage.setItem("interstellar_count", String(interstellarCount))
    document.getElementById("interstellar_count").innerHTML = "Interstellar Empires: " + interstellarCount
}

function updateMultidimensional() {
    window.localStorage.setItem("multidimensional_count", String(multidimensionalCount))
    document.getElementById("multidimensional_count").innerHTML = "Multidimensional Species: " + multidimensionalCount
}

function updateBooleans() {
    window.localStorage.setItem("display_multi", String(displayMulti))
    window.localStorage.setItem("display_auto", String(displayAuto))
    window.localStorage.setItem("display_collagen", String(displayCollagen))
    window.localStorage.setItem("display_flu", String(displayFlu))
    window.localStorage.setItem("display_auto", String(displayAuto))
    window.localStorage.setItem("display_hair", String(displayHair))
    window.localStorage.setItem("display_genome", String(displayGenome))
    window.localStorage.setItem("display_blood", String(displayBlood))
    window.localStorage.setItem("display_water", String(displayWater))
    window.localStorage.setItem("display_mid", String(displayMid))
    window.localStorage.setItem("display_human", String(displayHuman))
    window.localStorage.setItem("display_void", String(displayVoid))
    window.localStorage.setItem("display_planet", String(displayPlanet))
    window.localStorage.setItem("display_million", String(displayMillion))
    window.localStorage.setItem("display_billion", String(displayBillion))
    window.localStorage.setItem("display_trillion", String(displayTrillion))
}

////TIMERS////////////////////////////////////////////////////////////////////

//AutoAtoms Implementation
var atom_timer
//Increments Atoms and Updates Label
function autoAtomsGenerationLoop() {
        createAtom()
        updateAtomCount()
        updateEnergyCount()
        checkAtomCount()
}
//Timer for AutoAtoms
function autoAtomsCounter() {
    clearInterval(atom_timer)
    atom_timer = setInterval(autoAtomsGenerationLoop, 1000 / (2**((autoAtomGenerators)**(1+expoAtoms))))
}

var super_timer
function supermassiveGenerationLoop() {
        createAutoSingularity()
        updateSingularities()
        checkCelestialObjects()
}
function supermassiveCounter() {
    clearInterval(super_timer)
    super_timer = setInterval(supermassiveGenerationLoop, 1000 / (2**(supermassiveCount*(1+(twinCount / 2)))))
}

var solar_timer
function solarLoop () {
    createPlanet()
    checkCelestialObjects()
}
function solarCounter() {
    clearInterval(solar_timer)
    solar_timer = setInterval(solarLoop, 1000 / (2**(solarCount * singularityCount * (1 + (twinCount / 2)))))
}

var nebula_timer
function nebulaLoop () {
    createStar()
    checkCelestialObjects()
}
function nebulaCounter() {
    clearInterval(nebula_timer)
    nebula_timer = setInterval(nebulaLoop, 1000 / (2**(nebulaCount * singularityCount * (1 + (twinCount / 2)))))
}

var game_timer
//Game Time Count
function startGame() {
    game_timer = setInterval(setTime, 1000);
}

function setTime() {
    totalSeconds++
    window.localStorage.setItem("total_seconds", String(totalSeconds))
}
//////Creation Functions ////////////////////////////////////////////////////////////////////
//AutoAtom Generator Creation
function autoAtomGeneratorCreation() {
    if (typeof(energyCount) == "string") {
        energyCount = new bigDecimal(Number(energyCount))
    }
    if (bigDecimal.compareTo(energyCount.getValue(), autoAtomsCost.getValue()) != -1) {
        ++autoAtomGenerators
        energyCount = bigDecimal.subtract(energyCount.getValue(), autoAtomsCost.getValue())
        energyCount = new bigDecimal(Number(energyCount))
        autoAtomsCost = bigDecimal.multiply(String(autoAtomsCost.getValue()), "2")
        if (autoAtomsCost > 1 && autoAtomsCost < 10**5) {
            autoAtomsCost = bigDecimal.round(autoAtomsCost, 4)
        }
        if (autoAtomsCost > 10**5) {
            autoAtomsCost = bigDecimal.round(autoAtomsCost)
        }
        if (autoAtomsCost < 1) {
            autoAtomsCost = Number(autoAtomsCost).toFixed(11)
        }
        autoAtomsCost = new bigDecimal(autoAtomsCost)
        updateEnergyCount()
        updateAutoAtoms()
        autoAtomsCounter()
    }
}

//Atom Creation
function createAtom() {
    if (atomCount == 0) {
        startGame()
        move(0)
    } 
    atomCount = Number(atomCount)
    freeAtoms = Number(freeAtoms)
    atomCount = atomCount + ((multiAtoms + 1)**(1+expoAtoms))
    freeAtoms = freeAtoms + ((multiAtoms + 1)**(1+expoAtoms))
    updateAtomCount()
    updateFreeAtoms()
    updateEnergyCount()
    checkAtomCount()
    
}

//MultiAtom Creation
function createMultiAtom() {
    if (typeof(energyCount) == "string") {
        energyCount = new bigDecimal(Number(energyCount))
    }
    if (bigDecimal.compareTo(energyCount.getValue(), multiAtomsCost.getValue()) != -1) {
        multiAtoms++
        energyCount = bigDecimal.subtract(energyCount.getValue(), multiAtomsCost.getValue())
        energyCount = new bigDecimal(Number(energyCount))
        multiAtomsCost = bigDecimal.multiply(String(multiAtomsCost.getValue()), "2")
        if (multiAtomsCost > 1 && multiAtomsCost < 10**5) {
            multiAtomsCost = bigDecimal.round(multiAtomsCost, 4)
        }
        if (multiAtomsCost > 10**5) {
            multiAtomsCost = bigDecimal.round(multiAtomsCost)
        }
        if (multiAtomsCost < 1) {
            multiAtomsCost = Number(multiAtomsCost).toFixed(11)
        }
        multiAtomsCost = new bigDecimal(multiAtomsCost)
        updateMultiAtoms()
        updateEnergyCount()
    }
    
}

function createExpoAtom() {
    if (typeof(energyCount) == "string") {
        energyCount = new bigDecimal(Number(energyCount))
    }
    if (bigDecimal.compareTo(energyCount.getValue(), expoAtomsCost.getValue()) != -1) {
        expoAtoms++
        energyCount = bigDecimal.subtract(energyCount.getValue(), expoAtomsCost.getValue())
        energyCount = new bigDecimal(Number(energyCount))
        expoAtomsCost = bigDecimal.multiply(String(expoAtomsCost.getValue()), String(((2*multiAtoms) + (expoAtoms**2))))
        if (expoAtomsCost > 1 && expoAtomsCost < 10**5) {
            expoAtomsCost = bigDecimal.round(expoAtomsCost, 4)
        }
        if (expoAtomsCost > 10**5) {
            expoAtomsCost = bigDecimal.round(expoAtomsCost)
        }
        if (expoAtomsCost < 1) {
            expoAtomsCost = Number(expoAtomsCost).toFixed(11)
        }
        expoAtomsCost = new bigDecimal(expoAtomsCost)
        updateExpoAtoms()
        updateEnergyCount()
    }
}

function createSolar() {
    if (freeAtoms >= solarCost) {
        solarCount++
        freeAtoms = freeAtoms - solarCost
        solarCost = randomIntFromInterval(10**49, 10**52)
        updateSolar()
        updateFreeAtoms()
        updateEnergyCount()
        solarCounter()
    }
}

function createNebula() {
    if (freeAtoms >= nebulaCost) {
        nebulaCount++
        freeAtoms = freeAtoms - nebulaCost
        nebulaCost = randomIntFromInterval(10**51, 10**56)
        updateNebulas()
        updateFreeAtoms()
        updateEnergyCount()
        nebulaCounter()
    }
}

function createSingularity() {
    if (energyCount.getValue() >= singularityCost) {
        singularityCount = singularityCount + (1 + twinCount)
        energyCount = bigDecimal.subtract(energyCount.getValue(), String(singularityCost))
        energyCount = new bigDecimal(energyCount)
        singularityCost = randomIntFromInterval(10**31, 10**35)
        updateEnergyCount()
        updateSingularities()
    }
}

function createAutoSingularity() {
    singularityCount = singularityCount + (1 + twinCount)
    updateSingularities()
}

function createTwin() {
    if (energyCount.getValue() >= twinCost) {
        twinCount++
        energyCount = bigDecimal.subtract(energyCount.getValue(), String(twinCost))
        energyCount = new bigDecimal(energyCount)
        twinCost = randomIntFromInterval(10**32, 10**36)
        updateEnergyCount()
        updateTwins()
    }
}

function createSupermassive() {
    if (energyCount.getValue() >= supermassiveCost) {
        supermassiveCount++
        energyCount = bigDecimal.subtract(energyCount.getValue(), String(supermassiveCost))
        energyCount = new bigDecimal(energyCount)
        supermassiveCost = randomIntFromInterval(10**34, 10**40)
        updateEnergyCount()
        updateSupermassives()
        supermassiveCounter()
    }
}

function createPlanet() {
    planetCount++
    // cost condition
    runProbabilities()
    freeAtoms = freeAtoms - randomIntFromInterval(10**47, 10**50)
    updatePlanets()
}

function createStar() {
    starCount++
    //cost condition
    freeAtoms = freeAtoms - randomIntFromInterval(10**47, 10**53)
    updateStars()
}

////Level 3 Functionality /////////////////////////////////////////////////////////////////////
function runProbabilities() {
    if (createHabitable(starCount)) {
        habitableCount++
        if (habitableCount == 1) {
            document.getElementById("habitable_count").style.visibility = "visible"
            document.getElementById("level_3_hr_1").style.visibility = "visible"
        }
        updateHabitable()  
    }
    if (createInhabited(habitableCount)) {
        inhabitedCount++
        if (inhabitedCount == 1) {
            document.getElementById("inhabited_count").style.visibility = "visible"
            document.getElementById("level_3_hr_2").style.visibility = "visible"
        }
        updateInhabited()  
    }
    if (createIntelligent(inhabitedCount)) {
        intelligentCount++
        if (intelligentCount == 1) {
            document.getElementById("intelligent_count").style.visibility = "visible"
            document.getElementById("level_3_hr_3").style.visibility = "visible"
        }
        updateIntelligent()  
    }
    if (createInterstellar(intelligentCount)) {
        interstellarCount++
        if (interstellarCount == 1) {
            document.getElementById("interstellar_count").style.visibility = "visible"
            document.getElementById("level_3_hr_4").style.visibility = "visible"
        }
        updateInterstellar()  
    }
    if (createMultidimensional(interstellarCount)) {
        multidimensionalCount++
        if (multidimensionalCount == 1) {
            document.getElementById("multidimensional_count").style.visibility = "visible"
            document.getElementById("level_3_hr_5").style.visibility = "visible"
            consoleData.shift()
            var time = totalSeconds
            var hours = Math.floor(time / 3600);
            time = time - hours * 3600;
            var minutes = Math.floor(time / 60)
            var seconds = time - minutes * 60;
            consoleData.push("A species in your universe has transcended dimensions.  You win in : " + hours + ":" + minutes + ":" + seconds)
            //Trigger scoreboard code
        }
        updateMultidimensional()  
    }
}

function createHabitable(star_count) {
    p = randomIntFromInterval(1, 1000)
    if (p <= star_count * 25) {
        return true
    } else {
        return false
    }
}

function createInHabited(habitable_count) {
    p = randomIntFromInterval(1, 1000)
    if (p <= habitable_count * 2) {
        return true
    } else {
        return false
    }
}

function createIntelligent(inhabited_count) {
    p = randomIntFromInterval(1, 1000)
    if (p <= inhabited_count * 2) {
        return true
    } else {
        return false
    }
}

function createInterstellar(intelligent_count) {
    p = randomIntFromInterval(1, 10000)
    if (p <= intelligent_count * 5) {
        return true
    } else {
        return false
    }
}

function createMultidimensional(interstellar_count) {
    p = randomIntFromInterval(1, 10000)
    if (p <= interstellar_count * 5) {
        return true
    } else {
        return false
    }
}
//////Checking Functions //////////////////////////////////////////////////////////////////////////

//Atom Count Checker
function checkAtomCount() {
    if (energyCount.getValue() >= 1.2 * 10**-8 && displayMulti == true) {
        consoleData.shift()
        consoleData.push("MultiAtoms available. Increases number of atoms created. ")
        displayMulti = false
        window.localStorage.setItem("display_multi", String(displayMulti))
        updateConsole()
    }
    if (energyCount.getValue() >= 3.2 * 10**-8 && displayAuto == true) {
        consoleData.shift()
        consoleData.push("AutoAtoms available. Increases rate at which atoms are created. ")
        displayAuto = false
        window.localStorage.setItem("display_auto", String(displayAuto))
        updateConsole()
    }
    if (atomCount >= 1400 && displayCollagen == true) {
        consoleData.shift()
        consoleData.push("You have created as many atoms that are in one unit of collagen, the most abundant protein in the human body.")
        displayCollagen = false
        window.localStorage.setItem("display_collagen", String(displayCollagen))
        updateConsole()
    }
    if (atomCount >= 5 * (10**5) && displayHair == true) {
        consoleData.shift()
        consoleData.push("If you were to line up all the atoms you've created, they'd be as wide as a human hair.")
        displayHair = false
        window.localStorage.setItem("display_hair", String(displayHair))
        updateConsole()
    }
    if (atomCount >= 1.6*(10**8) && displayFlu == true) {
        consoleData.shift()
        consoleData.push("Your universe contains as many atoms as a single influenza virus.")
        displayFlu = false
        window.localStorage.setItem("display_flu", String(displayFlu))
        updateConsole()
    }
    if (energyCount.getValue() >= 10**-4 && displayExpo == true) {
        consoleData.shift()
        consoleData.push("ExpoAtoms available.  Greatly increases rate at which atoms are produced.")
        displayExpo = false
        window.localStorage.setItem("display_expo", String(displayExpo))
        updateConsole()
    }

    if (atomCount >= 2.04*(10**9) && displayGenome== true) {
        consoleData.shift()
        consoleData.push("You have made enough atoms to code the human genome.")
        displayGenome= false
        window.localStorage.setItem("display_genome", String(displayGenome))
        updateConsole()
    }

    if (atomCount >= 6.2*(10**17) && displayBlood== true) {
        consoleData.shift()
        consoleData.push("There are enough atoms in your universe for one red blood cell.")
        displayBlood = false
        window.localStorage.setItem("display_blood", String(displayBlood))
        updateConsole()
    }

    if (atomCount >= 5*(10**14) && displayMid== true) {
        consoleData.shift()
        consoleData.push("Hanging in there?")
        displayMid = false
        window.localStorage.setItem("display_mid", String(displayMid))
        updateConsole()
    }

    if (atomCount >= 2*(10**21) && displayWater== true) {
        consoleData.shift()
        consoleData.push("You have created enough atoms for a... drop of water.")
        displayWater = false
        window.localStorage.setItem("display_water", String(displayWater))
        updateConsole()
    }

    if (atomCount >= 7*(10**27) && displayHuman== true) {
        consoleData.shift()
        consoleData.push("There are finally enough atoms in your universe to create one human.  Long way to go.")
        displayHuman = false
        window.localStorage.setItem("display_human", String(displayHuman))
        updateConsole()
    }

    if (atomCount >= 7*(10**42) && displayVoid== true) {
        consoleData.shift()
        consoleData.push("Quiet out here, isn't it?")
        displayVoid = false
        window.localStorage.setItem("display_void", String(displayVoid))
        updateConsole()
    }

    if (atomCount >= (10**50) && displayPlanet== true) {
        consoleData.shift()
        var time = totalSeconds
        var hours = Math.floor(time / 3600);
        time = time - hours * 3600;
        var minutes = Math.floor(time / 60)
        var seconds = time - minutes * 60;
        consoleData.push("The energy in your universe is powerful enough to create singularities around which galaxies can form. Achieved in " + hours + ":" + minutes + ":" + seconds + ".")
        displayPlanet = false
        window.localStorage.setItem("display_planet", String(displayPlanet))
        updateConsole()
        showLevel2()
    }

    if (atomCount >= 10**6 && displayMillion == true) {
        consoleData.shift()
        var time = totalSeconds
        var hours = Math.floor(time / 3600);
        time = time - hours * 3600;
        var minutes = Math.floor(time / 60)
        var seconds = time - minutes * 60;
        consoleData.push("One million atoms created in " + minutes + ":" + seconds + ".")
        displayMillion = false
        window.localStorage.setItem("display_million", String(displayMillion))
        updateConsole()
    }
    if (atomCount >= 10**9 && displayBillion == true) {
        consoleData.shift()
        var time = totalSeconds
        var hours = Math.floor(time / 3600);
        time = time - hours * 3600;
        var minutes = Math.floor(time / 60)
        var seconds = time - minutes * 60;
        consoleData.push("One billion atoms created in " + minutes + ":" + seconds + ".")
        displayBillion = false
        window.localStorage.setItem("display_billion", String(displayBillion))
        updateConsole()
    }
    if (atomCount >= 10**12 && displayTrillion == true) {
        consoleData.shift()
        var time = totalSeconds
        var hours = Math.floor(time / 3600);
        time = time - hours * 3600;
        var minutes = Math.floor(time / 60)
        var seconds = time - minutes * 60;
        consoleData.push("One trillion atoms created in " + minutes + ":" + seconds + ".")
        displayTrillion = false
        window.localStorage.setItem("display_trillion", String(displayTrillion))
        updateConsole()
    }

    
}

function checkCelestialObjects() {

}

///Helper Functions ///////////////////////////////////////////////////////////////////

//Function to get random number in interval --- for cost of planets and stars
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

//Entropy Bar Function
function move(index) {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = index;
    elem.style.width = width + "%";
    var id = setInterval(frame, 54000);
    function frame() {
      if (width >= 100) {
        console.log(width)
        console.shift()
        console.push("WARNING: MAXIMUM ENTROPY REACHED.  ARROW OF TIME REVERSED.")
        updateConsole()
        setTimeout(console.log("You lose!"), 3)
        reset()
        clearInterval(id);
        i = 0;
      } else {
        width++;
        window.localStorage.setItem("entropy", String(width))
        elem.style.width = width + "%";
      }
    }
  }
}

//Hide Level 2 Features
function hideLevel2() {
    document.getElementById("singularity_count").style.visibility = "hidden"
    document.getElementById("singularity_button").style.visibility = "hidden"
    document.getElementById("singularity_cost").style.visibility = "hidden"
    document.getElementById("free_atoms_count").style.visibility = "hidden"
    document.getElementById("planet_count").style.visibility = "hidden"
    document.getElementById("twin_count").style.visibility = "hidden"
    document.getElementById("twin_button").style.visibility = "hidden"
    document.getElementById("twin_cost").style.visibility = "hidden"
    document.getElementById("supermassive_count").style.visibility = "hidden"
    document.getElementById("supermassive_button").style.visibility = "hidden"
    document.getElementById("supermassive_cost").style.visibility = "hidden"
    document.getElementById("solar_button").style.visibility = "hidden"
    document.getElementById("solar_cost").style.visibility = "hidden"
    document.getElementById("solar_count").style.visibility = "hidden"
    document.getElementById("nebula_button").style.visibility = "hidden"
    document.getElementById("nebula_cost").style.visibility = "hidden"
    document.getElementById("nebula_count").style.visibility = "hidden"
    //document.getElementById("planet_cost").style.visibility = "hidden"
    document.getElementById("star_count").style.visibility = "hidden"
    //document.getElementById("star_cost").style.visibility = "hidden"
    document.getElementById("level_2_hr").style.visibility = "hidden"
    document.getElementById("level_2_hr_2").style.visibility = "hidden"
    document.getElementById("level_2_hr_3").style.visibility = "hidden"
    document.getElementById("level_2_hr_4").style.visibility = "hidden"
    document.getElementById("level_2_hr_5").style.visibility = "hidden"
    document.getElementById("habitable_count").style.visibility = "hidden"
    document.getElementById("inhabited_count").style.visibility = "hidden"
    document.getElementById("intelligent_count").style.visibility = "hidden"
    document.getElementById("interstellar_count").style.visibility = "hidden"
    document.getElementById("multidimensional_count").style.visibility = "hidden"
    document.getElementById("level_3_hr_1").style.visibility = "hidden"
    document.getElementById("level_3_hr_2").style.visibility = "hidden"
    document.getElementById("level_3_hr_3").style.visibility = "hidden"
    document.getElementById("level_3_hr_4").style.visibility = "hidden"
    document.getElementById("level_3_hr_5").style.visibility = "hidden"
    window.localStorage.setItem("level_2_visibility", String("false"))
}

//Show Level 2 Features
function showLevel2() {
    document.getElementById("singularity_count").style.visibility = "visible"
    document.getElementById("singularity_button").style.visibility = "visible"
    document.getElementById("singularity_cost").style.visibility = "visible"
    document.getElementById("free_atoms_count").style.visibility = "visible"
    document.getElementById("planet_count").style.visibility = "visible"
    document.getElementById("twin_count").style.visibility = "visible"
    document.getElementById("twin_button").style.visibility = "visible"
    document.getElementById("twin_cost").style.visibility = "visible"
    document.getElementById("supermassive_count").style.visibility = "visible"
    document.getElementById("supermassive_button").style.visibility = "visible"
    document.getElementById("supermassive_cost").style.visibility = "visible"
    document.getElementById("solar_button").style.visibility = "visible"
    document.getElementById("solar_cost").style.visibility = "visible"
    document.getElementById("solar_count").style.visibility = "visible"
    document.getElementById("nebula_button").style.visibility = "visible"
    document.getElementById("nebula_cost").style.visibility = "visible"
    document.getElementById("nebula_count").style.visibility = "visible"
    //document.getElementById("planet_cost").style.visibility = "visible"
    document.getElementById("star_count").style.visibility = "visible"
    //document.getElementById("star_cost").style.visibility = "visible"
    document.getElementById("level_2_hr").style.visibility = "visible"
    document.getElementById("level_2_hr_2").style.visibility = "visible"
    document.getElementById("level_2_hr_3").style.visibility = "visible"
    document.getElementById("level_2_hr_4").style.visibility = "visible"
    document.getElementById("level_2_hr_5").style.visibility = "visible"
    window.localStorage.setItem("level_2_visibility", String("true"))
}

///Google Pay API

