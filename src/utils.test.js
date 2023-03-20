const exp = require('constants');
const utils = require('./utils');
const path = require('path');

const projectRoot = path.join(__dirname, "..");
const testFileList = ['01/01', '02'];

test('getExportPathが引数から年月日時分秒のパスを返すこと', () => {
    // 2023年3月18日 23時45分01秒 -> 20230318234501
    const testDate = new Date(
        2023, 2, 18, 23, 45, 1
    );
    const expectDir = path.join(projectRoot, 'export', '20230318234501.md');
    expect(utils.getExportPath(testDate)).toBe(expectDir);
});

test('getExportPathは引数を省略しても動くこと。', () => {
    utils.getExportPath();
});


test('getFileListが指定したディレクトリ配下のファイルを再帰的に取得すること', () => {
    const fileListTestHome = path.join(projectRoot, 'test', 'getFileList');
    const expectList = testFileList.map(relativePath => path.join(fileListTestHome, relativePath))
    expect(utils.getFileList(fileListTestHome)).toEqual(expectList);
});

test('getSourceTextで指定したファイルパスのファイルの中身をMarkdown形式の文字列に変換できる' , () => {
    const expectSrc = `### test/getSourceText/forTest.js

\`\`\` js
console.info('Test Source');
\`\`\`

`
    const testFilePath = path.join(projectRoot, 'test', 'getSourceText', 'forTest.js');
    expect(utils.getSourceText(testFilePath, projectRoot, 3)).toBe(expectSrc);

});