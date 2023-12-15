const fs = require("fs");

function readWriteSync() {
  console.log("Reading and writing the file synchronously...");
  let data = fs.readFileSync("./AFM-source/input.txt", {
    encoding: "utf-8", //convert buffer data to human readable form
    flag: "r", //specify which mode u r opening a file in i.e in our case read mode
  });
  console.log(`Reading the file Sync is completed : ${data}`);

  fs.writeFileSync("./AFM-destination/output.txt", data, {
    encoding: "utf-8",
    flag: "w",
  });
  console.log(`writing the file in completed`);
}

function readSyncWriteAsync() {
  console.log(`Reading synchronously and writing the file synchronously...`);
  let data = fs.readFileSync("./AFM-source/input.txt", {
    encoding: "utf-8",
    flag: "r",
  });
  console.log(`Reading the file Sync is completed : ${data}`);
  fs.writeFile(
    "./AFM-destination/output.txt",
    data,
    { encoding: "utf-8", flag: "w" },
    function (err, data) {
      if (err) {
        console.log(`Writing the file has failed`);
      } else {
        console.log(`writing the file has completed`);
      }
    }
  );
  console.log(`Writing the file Asynchronously is completed...`);
}

function readAsyncWriteSync() {
  console.log(`Reading file Async and writing file Sync...`);
  fs.readFile(
    "./AFM-source/input.txt",
    { encoding: "utf-8", flag: "r" },
    (err, data) => {
      if (err) {
        console.log(`Something is Wrong...`);
      } else {
        console.log(data);
        fs.writeFileSync("./AFM-destination/output.txt", data, {
          encoding: "utf-8",
          flag: "w",
        });
        console.log(
          `Reading the file async and writing the file sync ha completed`
        );
      }
    }
  );
  console.log(`Reading the file is processing...`);
}

function readAsyncWriteAsync() {
  console.log(`Reading and writing file Async...`);
  for (let i = 0; i < 10000000000; i++) {}
  fs.readFile(
    "./AFM-source/input.txt",
    { encoding: "utf-8", flag: "r" },
    (err, data) => {
      console.log(`Reading file async has done...`);
      if (err) {
        console.log(`Reading file async has failed...`);
      } else {
        fs.writeFile(
          "./AFM-destination/output.txt",
          data,
          { encoding: "utf-8", flag: "w" },
          (err, data) => {
            console.log(`Writing the file asyn is done.`);
          }
        );
        console.log(`Writing the file in async is in progress...`);
      }
    }
  );
  console.log(`Reading the file in async is in progress...`);
}

let now = Date.now();
console.log(now);

setTimeout(() => {
  console.log("setTimeout is running...");
  console.log(`${Date.now() - now}`);
}, 0);

//readWriteSync();
readSyncWriteAsync();
//readAsyncWriteSync();
//readAsyncWriteAsync();
