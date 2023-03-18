require('date-utils');

const EXPORT_DIR = '../export';

const getExportPath = (date) => {
    const filename = date.toFormat('YYYYMMDDHH24MISS');
    return EXPORT_DIR + "/" + filename + ".md";
}

module.exports.getExportPath = getExportPath