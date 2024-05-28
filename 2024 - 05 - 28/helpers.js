import fs from "fs";

const fileName = "data.txt";

export function writeToFileSystem(string) {
  try {
    fs.writeFileSync(fileName, string);
    console.log(`Data written to ${fileName}`);
  } catch (error) {
    console.error("Error writing file (did you pass the correct data?)");
    console.error(error.message);
  }
}

export function readFromFileSystem() {
  try {
    return fs.readFileSync(fileName, { encoding: "utf8", flag: "r" });
  } catch (error) {
    console.error("Error reading file (does it exist?)");
    console.error(error.message);
  }
}
