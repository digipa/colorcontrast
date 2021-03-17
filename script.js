const net = new brain.NeuralNetwork({
    hiddenLayers: [4]
}
)

net.train([
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
]);

const diagram = document.getElementById('diagram')
diagram.innerHTML = brain.utilities.toSVG(net)

console.log(net.run([0,1]))