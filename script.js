function click1() {
    let house1 = parseInt(document.getElementById('input1').value)
    let house2 = parseInt(document.getElementById('input2').value)
    let house3 = parseInt(document.getElementById('input3').value)

    console.log('Будинок 1: ', house1)
    console.log('Будинок 2: ', house2)
    console.log('Будинок 3: ', house3)

    let sum = house1 + house2 + house3
    console.log('Усього: ', sum)

    let min = Math.min(house1, house2, house3)
    let minNum
    if(min == house1) minNum = 1
    if(min == house2) minNum = 2
    if(min == house3) minNum = 3

    console.log('Пожартувати над власником будинку №', minNum)

    console.log('Відрахувати: ', Math.floor(sum * 0.13))
}
