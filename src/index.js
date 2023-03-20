const fs = require('fs');
const utils = require('./utils');

function main() {
    let argvIndex = 2;
    const srcHome = process.argv[argvIndex++];
    const markdownIndex = process.argv[argvIndex++];

    const exportPath = utils.getExportPath();

    // 書き込み
    utils.getFileList(srcHome)
        .map(srcPath => {
            const sourceText = utils.getSourceText(srcPath, srcHome, markdownIndex);
            fs.appendFileSync(exportPath, sourceText);
        });
}

if (require.main === module) {
    main();
}
