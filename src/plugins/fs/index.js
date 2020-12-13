const _fs = require('fs');
const fs = require('fs').promises;
import { FILE_MARKDOWN } from '@/constants/index.js';
import {
  msgSavefileResult,
  msgInitfileResult,
  msgReadfaile
} from '@/plugins/dialog/fileIo.js';

/**
 * !!! alertはコチラに書き込まない
 */

// 初期フォルダ、初期ファイルの生成
const createInitFolder = async (FOLDER_PATH, FILE_PATH) => {
  if (!_fs.existsSync(FOLDER_PATH)) {
    await _fs.mkdirSync(FOLDER_PATH);
    try {
      await fs.writeFile(FILE_PATH, FILE_MARKDOWN);
      msgInitfileResult(FILE_PATH, true);
    } catch (e) {
      console.error(e);
      msgInitfileResult(FILE_PATH, false);
    }
  }
};

// ファイル一覧の読み込み
const readFiles = async PATH => {
  let fileList = [];
  if (_fs.existsSync(PATH)) {
    const files = await _fs.readdirSync(PATH);
    fileList = files.filter(file => /.*\.md$/.test(file));
  } else {
    msgReadfaile();
  }
  return fileList;
};

const readFile = async FILE_PATH => {
  // ファイルの読み込み
  try {
    const text = await fs.readFile(FILE_PATH, 'utf-8');
    return { text: text, error: null };
  } catch (e) {
    return { text: '', error: e };
  }
};

const saveFile = async (FILE_PATH, text) => {
  try {
    await fs.writeFile(FILE_PATH, text);
    msgSavefileResult(true);
  } catch (e) {
    console.error(e);
    msgSavefileResult(false);
  }
};

export default {
  createInitFolder,
  readFiles,
  readFile,
  saveFile
};
