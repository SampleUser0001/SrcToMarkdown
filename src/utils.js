require('date-utils');
const path = require('path');
const fs = require('fs');

const EXPORT_DIR_NAME = 'export';

const getExportPath = (date = new Date()) => {
    const filename = date.toFormat('YYYYMMDDHH24MISS') + ".md";
    const projectRoot = path.join(__dirname, "..");
    const exportRoot = path.join(projectRoot, EXPORT_DIR_NAME)
    return path.join(exportRoot, filename);
}

const getFileList = (dir) => {
    return fs.readdirSync(dir, { withFileTypes : true} )
             .filter(dirent => (dirent.isFile() || dirent.isDirectory()) && !dirent.isSymbolicLink())
             .flatMap(dirent => dirent.isFile()
                      ? [path.join(dir, dirent.name)] : getFileList(path.join(dir, dirent.name))
    );
}

const getSourceText = (filepath, srcHome, markdownIndex) => {
    const mdHeader = '#'.repeat(markdownIndex);
    const relativePath = filepath.replace(srcHome, '').substring(1);
    const src = fs.readFileSync(filepath);
    const extend = path.extname(filepath).substring(1);

    return `${mdHeader} ${relativePath}

\`\`\` ${extend}
${src}
\`\`\`

`;

}

module.exports.getExportPath = getExportPath;
module.exports.getFileList = getFileList;
module.exports.getSourceText = getSourceText;