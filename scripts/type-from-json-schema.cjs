const { compileFromFile } = require('json-schema-to-typescript');
const fs = require('fs');

const run = async () => {
  const ts = await compileFromFile('./scripts/json-resume.schema.json');
  fs.writeFileSync('./scripts/output.ts', ts);
};

run().catch((error) => console.error(error));
