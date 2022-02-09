const fs = require("fs");
const args = process.argv.slice(-1);

/* 
    Lectura
*/
let productos = {};

const archivoCsv = fs
  .readFileSync(__dirname + "/BrowsingEvents.csv", "utf-8")
  .split(/\r?\n/);

archivoCsv.forEach((line, i) => {
  if (i) {
    const [_, entityId, _2, eventType] = line.split(",");
    productos[entityId] = {
      clicks: productos[entityId]?.clicks || 0,
      impressions: productos[entityId]?.impressions || 0,
    };

    if (eventType === "impression") productos[entityId].impressions++;
    if (eventType === "click") productos[entityId].clicks++;
  }
});


/* 
    Escritura
*/
var output = fs.createWriteStream("output.csv", { flags: "w" });

output.write("productId,clicks,impressions,ctr\n");

for (let id in productos) {
  let producto = productos[id];
  if (id  !== undefined) {
    output.write(
      `${id},${producto.clicks},${producto.impressions},${
        producto.impressions ? producto.clicks / producto.impressions : 0
      }\n`
    );
  }
}
