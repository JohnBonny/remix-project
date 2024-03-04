const fs = require('fs');
exports.default = async function afterbuild(context) {

  // do not run when not on macOS
  if (process.platform !== 'darwin') {
    return;
  }

  console.log('AFTER BUILD', context);

  const artifactPaths = context.artifactPaths
  const dmgs = artifactPaths.filter((dmg) => dmg.endsWith('.dmg')).map((dmg) => `'${dmg}'`)
  fs.writeFileSync('dmgs.json', JSON.stringify({ dmgs }, null, 2))
  


}
