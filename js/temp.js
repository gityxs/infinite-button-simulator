let temp = {
    moneySpeed: D(0),
    totalMilestones: D(0),
    milestoneMultis: {},
    
    gemSpeed: D(0),

    maxRunes: 50,
    maxRuneEquip: 3,
    runeStats: {},

    tokenUpgEffects: {},
    
    chargerUpgEffects: {},
    chargeConsumption: D(0),
    automatorSpeeds: {},
    totalAutomatorUpgs: D(0),

    sigilPoints: D(0),
    sigilEffects: {},

    skillLevel: D(0),

    colPointGain: D(0),
    colUpgEffects: {},
}

function updateTemp() {
    temp.moneySpeed = D.add(getRowAmount(0), game.unlocks["btn1"] ? 1 : 0)
        .mul(temp.runeStats.money ?? 1)
        .mul(temp.milestoneMultis.money ?? 1)
        .mul(temp.tokenUpgEffects.double.money);

    temp.gemSpeed = D.add(game.gemUpgs, 1).mul(D.add(temp.runeStats.gem ?? 0, 1))
    .mul(D.pow(game.gemGens, temp.tokenUpgEffects.rune.genEff))
      .mul(D.pow(temp.tokenUpgEffects.double.gems, temp.tokenUpgEffects.rune.upgEff))
      .mul(temp.colUpgEffects[12]);

    temp.skillLevel = game.ladder.reduce((a, b) => D.add(a, b.level), 0);
}

function updateRuneStats() {
    temp.runeStats = {}
    for (let rune of game.runeEquip) {
        let quality = getRuneQuality(rune);
        for (let stat of rune.stats) {
            let sdata = runeStats[stat];
            temp.runeStats[stat] = D[sdata.stack](temp.runeStats[stat] ?? (sdata.stack == "add" ? 0 : 1), sdata.get(quality));
        }
    }
}

function updateMilestoneStats() {
    temp.totalMilestones = D.add(Object.values(game.milestones).reduce((a, b) => D.add(a, b), 0), 
        game.ladder.reduce((a, b) => D.add(a, b.milestones ? Object.values(b.milestones).reduce((x, y) => D.add(x, y), 0) : 0), 0))

    temp.milestoneMultis = {};
    function multiply(target, amount) {
        temp.milestoneMultis[target] = D.mul(temp.milestoneMultis[target] ?? 1, amount);
    } 

    let glevels = game.milestones;
    if (glevels.presses) multiply("money", milestones.global.presses.rewardAmount(glevels.presses));
    if (glevels.playtime) multiply("money", milestones.global.playtime.rewardAmount(glevels.playtime));

    for (let row in game.ladder) {
        let mlevels = game.ladder[row].milestones;
        if (mlevels) {
            if (mlevels.presses) multiply(row, milestones.rows.presses.rewardAmount(mlevels.presses, row));
        }
    }
}

function updateAllChargerUpgEffects() {
    for (let upg in chargerUpgrades) {
        temp.chargerUpgEffects[upg] = chargerUpgrades[upg].effectAmount(game.chargerUpg[upg] ?? 0);
    }
}

function updateAutomationStats() {
    temp.chargeConsumption = D(1);
    temp.totalAutomatorUpgs = D(0);
    temp.automatorSpeeds = {};
    for (let id in automators) {
        let data = game.automators[id] ?? {};
        temp.totalAutomatorUpgs = D.add(temp.totalAutomatorUpgs, data.level ?? 0);
        if (game.autoActive) if (D.gte(data.active ?? -1, 0)) {
            temp.chargeConsumption = D.mul(temp.chargeConsumption, automators[id].consumption(data.active));
            temp.automatorSpeeds[id] = automators[id].speed(data.active);
        }
    }
    temp.chargeConsumption = D.sub(temp.chargeConsumption, 1);
    temp.totalAutomatorUpgs = D.add(temp.totalAutomatorUpgs, game.automators.reset?.maxDepth ?? 0);
}

function updateTokenStats() {
    temp.tokenUpgEffects = {};
    for (let cat in tokenUpgrades) {
        temp.tokenUpgEffects[cat] = {};
        for (let id in tokenUpgrades[cat]) {
            let level = game.tokenUpg[cat]?.[id] ?? 0;
            temp.tokenUpgEffects[cat][id] = tokenUpgrades[cat][id].effectAmount(level);
        }
    }
}

function updateSigilEffects() {
    let multi = D(1);
    temp.sigilPoints = D(0);
    temp.sigilEffects = {};
    for (let a = game.sigils.length - 1; a >= 0; a--) {
        temp.sigilEffects[a] = multi = D.mul(game.sigils[a], 0.05).mul(a + 1).add(1).mul(multi);
        temp.sigilPoints = D.pow(2, a).mul(game.sigils[a]).add(temp.sigilPoints);
    }
}

function updateCollapseStats() {
    temp.colUpgEffects = {};
    for (let id in collapseUpgrades) {
        let level = game.colUpg[id] ?? 0;
        temp.colUpgEffects[id] = collapseUpgrades[id].effectAmount?.(level);
    }
    temp.colPointGain = D(game.collapsium ?? 0).mul(temp.colUpgEffects[14])
}
