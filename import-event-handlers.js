const fs = require('fs');
const extension = '.js';

module.exports = (client) => {
  fs.readdir('./event-handlers', (error, files) => {
    if (error) {
      console.log(error);
      return;
    }

    files.forEach((file) => {
      if (file.endsWith(extension)) {
        let func = require(`./event-handlers`);

        if(func &&
          typeof func === 'function' &&
          func.length === 1) {
          func(client);
        }
      }
    });
  });
};