const fs = require("fs");

const getParticipantsInterests = () => {
  const dir = "./participants/";
  fs.readdir(dir, (err, files) => {
    if (err) {
      throw err;
    }

    files.forEach((file) => {
      const fileDir = dir + file;
      fs.readFile(fileDir, (err, data) => {
        if (err) {
          throw err;
        }
        console.log(data.toString());
      });
    });
  });
};

getParticipantsInterests()