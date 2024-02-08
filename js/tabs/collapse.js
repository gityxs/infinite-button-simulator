tabs.collapse = {
    name: "Collapse",
    tier: 2,
    condition: () => game.unlocks["col1"],

    data: null,

    onStart() {
        this.data = {};

        let moneyRow = createRow();
        moneyRow.name.textContent = "Collapsium";
        this.data.money = moneyRow;
        container.append(moneyRow);
        
        {
            let collapseBtn = document.createElement("button");
            collapseBtn.classList.add("pushy-button", "milestone");
            collapseBtn.onclick = () => {
                performCollapse();
                collapseBtn.blur();
            }
            this.data.collapse = collapseBtn;
            moneyRow.append(collapseBtn);

            let titleBox = document.createElement("b");
            titleBox.textContent = "Collapse"
            collapseBtn.append(titleBox);
            collapseBtn.titleBox = titleBox;

            let gain = document.createElement("div");
            gain.style.marginTop = "4px";
            gain.textContent = "Collapse"
            collapseBtn.append(gain);
            collapseBtn.gain = gain;

            let cost = document.createElement("div");
            collapseBtn.append(cost);
            collapseBtn.cost = cost;
        }

        moneyRow.append(extraButtons);

        let upgRow = createRow();
        upgRow.classList.add("collapse-upgrades");
        upgRow.name.textContent = "Collapse Points";
        this.data.upg = upgRow;
        container.append(upgRow);
        
        container.append(upgRow.bar = createScrollbar(upgRow));

        this.onTick();
    },
    onTick() {
        this.data.money.amount.textContent = format(game.collapsium ?? 0);
        this.data.money.rate.textContent = "Skill level " + format(temp.skillLevel);

        let colGain = getCollapseGain();
        this.data.collapse.disabled = !D.gt(colGain, 0);
        this.data.collapse.gain.textContent = D.gt(colGain, 0) ? "+" + format(colGain) + " Collapsium" : "Requires Skill level 200";
        
        this.data.upg.amount.textContent = format(game.colPoints ?? 0);
        this.data.upg.rate.textContent = "+" + format(temp.colPointGain ?? 0) + " in " + format((1 - game.colTimer) * 60) + "s";

        for (let a = 0; a < game.ladder.length; a++) {
            game.ladder[a].level = getHighestButton(a, a == 0 ? game.money : game.ladder[a - 1].amount).max(game.ladder[a].level);
        }
        
        {
            let row = this.data.upg;
            let list = Object.keys(collapseUpgrades);
            while (row.items.length < list.length) {
                let button = document.createElement("button");
                button.classList.add("pushy-button", "upgrade");
                button.tabIndex = -1;
                button.onclick = ev => {
                    buyCollapseUpgrade(button.target);
                    let upgrade = collapseUpgrades[button.target];
                    let level = game.colUpg[button.target] ?? 0;
                    button.disabled = D.lt(game.charge, upgrade.costAmount(level));
                    button.blur();
                }
                row.append(button);
                row.items.push(button);

                let effect = document.createElement("div");
                button.append(effect);
                button.effect = effect;

                let cost = document.createElement("div");
                cost.style.marginTop = "4px";
                button.append(cost);
                button.cost = cost;
            }

            for (let b = 0; b < row.items.length; b++) {
                let button = row.items[b];
                button.target = list[b];
                let upgrade = collapseUpgrades[button.target];
                let level = game.colUpg[button.target] ?? 0;
                let cost = upgrade.costAmount(level);
                let isMax = D.gte(level, upgrade.cap ?? Infinity);
                button.disabled = D.lt(game.colPoints, cost) || isMax;
                button.effect.textContent = "";
                button.effect.append(
                    upgrade.effectAmount ?
                        upgrade.effectText[0].replace("{0}", format(upgrade.effectAmount(level), upgrade.effectPrecision)) + 
                        " → " + upgrade.effectText[0].replace("{0}", format(upgrade.effectAmount(D.add(1, level)), upgrade.effectPrecision))
                        : upgrade.effectText[0],
                    document.createElement("br"),
                    upgrade.effectText[1],
                );
                button.cost.textContent = isMax 
                    ? (upgrade.cap == 1 ? "Bought" : "Max reached") 
                    : "−" + format(cost) + " Collapse Pts.";
            }
        }
    },
    onEnd() {
        this.data = null;
    }
}