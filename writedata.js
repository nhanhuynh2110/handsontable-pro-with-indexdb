var fs = require('fs')
var faker = require('faker')


fs.writeFile('/dist/data.json', JSON.stringify(faker.name), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});
