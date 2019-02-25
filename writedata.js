var fs = require('fs')
var faker = require('faker')
var data = []
for (var i = 0; i < 10000; i++) {
    let n = i + 1
  data.push({ fistName: faker.name.firstName(), lastName: faker.name.lastName()})
}

fs.writeFile('./dist/data.json', JSON.stringify(data), function(err) {
    if(err) {
        return console.log(err)
    }
    console.log("The file was saved!")
})
