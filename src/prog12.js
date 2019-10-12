var fs=require(`fs`);
var readable=fs.createReadStream(`source.txt`);
var writable=fs.createWriteStream(`destination.txt`);
readable.pipe(writable);
