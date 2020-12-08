const _fs = require('fs');
const fs = require('fs').promises;
import { md } from '@/constants/index.js';

/**
 * ファイルの保存、読み込み可否に関するalertのみ記載
 */

// 初期フォルダ、初期ファイルの生成
const createInitFolder = async (FOLDER_PATH, FILE_PATH) => {
  if (!_fs.existsSync(FOLDER_PATH)) {
    await fs.mkdirSync(FOLDER_PATH);
    await fs.writeFile(FILE_PATH, md, err => {
      if (err) {
        throw err;
      } else {
        alert(`${FILE_PATH}に初期フォルダ、及びサンプルを作成しました。`);
      }
    });
  }
};

// ファイル一覧の読み込み
const readFiles = async PATH => {
  let fileList = [];
  if (_fs.existsSync(PATH)) {
    const files = await _fs.readdirSync(PATH);
    fileList = files.filter(file => /.*\.md$/.test(file));
  } else {
    alert('フォルダが存在しません');
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
  console.log(text);
  if (FILE_PATH) {
    await fs.writeFile(FILE_PATH, text, err => {
      if (err) throw err;
    });
    alert('保存しました。');
  }
};

export default {
  createInitFolder,
  readFiles,
  readFile,
  saveFile
};
