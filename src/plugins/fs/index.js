const fs = require('fs');
import { md } from '@/constants/index.js';

// 初期フォルダ、初期ファイルの生成
const createInitFolder = (FOLDER_PATH, FILE_PATH) => {
  fs.access(FOLDER_PATH, function(err) {
    if (err) {
      if (err.code === 'ENOENT') {
        fs.mkdirSync(FOLDER_PATH);
        fs.writeFile(FILE_PATH, md, function(err) {
          if (err) {
            throw err;
          } else {
            alert(`${FILE_PATH}に初期フォルダ、及びサンプルを作成しました。`);
          }
        });
      }
    }
  });
};

// ファイル一覧の読み込み
const readFiles = PATH => {
  // フォルダ存在しなければ初期化
  fs.access(PATH, function(err) {
    if (err) {
      if (err.code === 'ENOENT') {
        alert('フォルダが存在しません');
        return [];
      }
    }
  });

  // ファイル一覧の取得
  fs.readdir(PATH, function(err, files) {
    if (err) {
      alert('フォルダが存在しません');
      return [];
    }
    const fileList = files.filter(function(file) {
      return /.*\.md$/.test(file);
    });
    return fileList;
  });
};

const readFile = FILE_PATH => {
  // ファイルの読み込み
  fs.readFile(FILE_PATH, 'utf8', (error, text) => {
    if (error) {
      alert(error);
      return {};
    } else {
      return text;
    }
  });
};

const saveFile = (FILE_PATH, text) => {
  if (FILE_PATH) {
    fs.writeFileSync(FILE_PATH, text);

    alert('保存しました。');
  }
};

export default {
  createInitFolder,
  readFiles,
  readFile,
  saveFile
};
