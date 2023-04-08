const fs = require('fs');
const utils = require('./utils');

const DEFAULT_DEPTH = 3;

function main() {
    let argvIndex = 2;
    const srcHome = process.argv[argvIndex++];
    const markdownIndex = process.argv.length >= 4 ? process.argv[argvIndex++] : DEFAULT_DEPTH;

    const exportPath = utils.getExportPath();

    // 書き込み
    utils.getFileList(srcHome)
        .map(srcPath => {
            const sourceText = utils.getSourceText(srcPath, srcHome, markdownIndex);
            fs.appendFileSync(exportPath, sourceText);
    });

    utils.printToClipboard(exportPath);

}

if (require.main === module) {
    main();
}
