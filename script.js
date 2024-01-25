const fs = require(`fs`)

const dir = fs.readdirSync("./node_modules")
console.log(dir)


fs.mkdirSync("./carpeta")

