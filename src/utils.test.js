const utils = require('./utils');
const path = require('path');

test('getExportPathが引数から年月日時分秒のパスを返すこと', () => {
    // 2023年3月18日 23時45分01秒 -> 20230318234501
    const testDate = new Date(
        2023, 2, 18, 23, 45, 1
    );
    const projectRoot = path.join(__dirname, "..");
    const expectDir = path.join(projectRoot, 'export', '20230318234501.md');
    expect(utils.getExportPath(testDate)).toBe(expectDir);
});