require('date-utils');
const path = require('path');

const EXPORT_DIR_NAME = 'export';

const getExportPath = (date) => {
    const filename = date.toFormat('YYYYMMDDHH24MISS') + ".md";
    const projectRoot = path.join(__dirname, "..");
    const exportRoot = path.join(projectRoot, EXPORT_DIR_NAME)
    return path.join(exportRoot, filename);
}

module.exports.getExportPath = getExportPath