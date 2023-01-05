interface IMonster {
    [Name: string]: IParameter
}
interface IParameter {
    hp: number
    attack: number
    defence: number
    special: number
}

interface ILongMonster {
    [Name: string]: ILongParameter
}

interface ILongParameter {
    hp: number
    attack: number
    defence: number
    longSpecial: number
    special: number
}

window.addEventListener('load', init)

function init() {
    var tbList = document.querySelectorAll('td')
    var monsterList: IMonster = require('./data/monster.json');
    var longMonsterList: ILongMonster = require('./data/monsterLong.json')

    tbList.forEach(elem => {
        if (monsterList[elem.innerText] != undefined) {
            let valMonster = monsterList[elem.innerText]
            valueSet(elem, valMonster)
        } else if (longMonsterList[elem.innerText] != undefined) {
            let valMonster = longMonsterList[elem.innerText]
            valueSetLong(elem, valMonster)
        }
    });
}

function valueSet(tbCell: HTMLTableCellElement, monsterParameter: IParameter) {
    tbCell.appendChild(setAttribute('data-category', 'Rate', '出現率:' + 0))
    tbCell.appendChild(setAttribute('data-category', 'Hp', 'HP:' + monsterParameter.hp))
    tbCell.appendChild(setAttribute('data-category', 'Attack', 'Atk:' + monsterParameter.attack))
    tbCell.appendChild(setAttribute('data-category', 'Defence', 'Def:' + monsterParameter.defence))
    if (monsterParameter.special != 0) {
        tbCell.appendChild(setAttribute('data-category', 'Special', '特技率:' + monsterParameter.special))
    }
}

function valueSetLong(tbCell: HTMLTableCellElement, monsterParameter: ILongParameter) {
    tbCell.appendChild(setAttribute('data-category', 'Rate', '出現率:' + 0))
    tbCell.appendChild(setAttribute('data-category', 'Hp', 'HP:' + monsterParameter.hp))
    tbCell.appendChild(setAttribute('data-category', 'Attack', 'Atk:' + monsterParameter.attack))
    tbCell.appendChild(setAttribute('data-category', 'Defence', 'Def:' + monsterParameter.defence))
    tbCell.appendChild(setAttribute('data-category', 'Special', '特技率(隣接時):' + monsterParameter.special))
    tbCell.appendChild(setAttribute('data-category', 'Special', '特技率(非隣接時):' + monsterParameter.longSpecial))
}

function setAttribute(attrName: string, attrValue: string, textValue: string): HTMLDivElement {
    var celldata = document.createElement('div')
    celldata.setAttribute(attrName, attrValue)
    celldata.innerHTML = textValue
    return celldata
}