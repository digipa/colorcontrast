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
    // {
    //     input: [1,0],
    //     output: [1]
    // },
    // {
    //     input: [1,1],
    //     output: [0]
    // }
];

net.train(data)

const colorElement = document.getElementById("color")
const guessElement = document.getElementById("guess")
const whiteButton = document.getElementById("white-button")
const blackButton = document.getElementById("black-button")
let color
setRandomColor()

function setRandomColor() {
    color = {
        r: Math.random(),
        b: Math.random(),
        g: Math.random()
    }
    colorElement.style.backgroundColor =
    `rgba(${color.r * 255}, ${color.g * 255}, ${color.b * 255})`

}