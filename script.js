const net = new brain.NeuralNetwork({
    hiddenLayers: [4]
})

const data = [
    {
        input: { r: 0, g: 0, b: 0 },
        output: [1]
    },
    {
        input: { r: 1, g: 1, b: 1 },
        output: [0]
    },
    {
        input: { r: .7, g: .7, b: .7 },
        output: [.3]
    },
    {
        input: { r: .3, g: .3, b: .3 },
        output: [.7]
    }
    
    // g: 255 - color.g,
    // {
        //     input: [1,1],
        //     output: [0]
        // }
    ];
    console.log(data)

net.train(data)

const colorElement = document.getElementById("color")
const guessElement = document.getElementById("guess")
const complementaryElement = document.getElementById("complementary")
const complementaryButton = document.getElementById("complementary-button")
const whiteButton = document.getElementById("white-button")
const blackButton = document.getElementById("black-button")
const printButton = document.getElementById("print-button")
// let color
setRandomColor()

whiteButton.addEventListener(`click`, () => {
    chooseColor(1)
})
blackButton.addEventListener(`click`, () => {
    chooseColor(0)
})
// complementaryButton.addEventListener(`click`, () => {
//     chooseColor(0)
// })
printButton.addEventListener(`click`, () => {
    print()
})

function chooseColor(value) {
    data.push({
        input: color,
        output: [value]
    })
    setRandomColor()
    // net.train(data)
    // console.log(results)
}
function print(){
    console.log(JSON.stringify(data))
    // net.train(data)
    // console.log(results)
}
function setRandomColor() {
    color = {
        r: Math.random(),
        b: Math.random(),
        g: Math.random()
    }
    console.log(color)
    complementary = {
        r: 1 - color.r,
        b: 1 - color.b,
        g: 1 - color.g,
    }
    console.log(complementary)
    // const complementary = net.run(complementary)[0]
    const guess = net.run(color)[0]
    // complementaryElement.style.complementary = complementary > .5 ? `#FFF` : `2000` 
    guessElement.style.color = guess > .5 ? `#FFF` : `2000` 
    complementaryElement.style.color =
    `rgba(${complementary.r * 255}, ${complementary.g * 255}, ${complementary.b * 255})`
    colorElement.style.backgroundColor =
    `rgba(${color.r * 255}, ${color.g * 255}, ${color.b * 255})`
}