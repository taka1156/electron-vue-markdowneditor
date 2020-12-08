const { app, dialog } = require('electron').remote;
import FsWrapper from '@/plugins/fs/index.js';

const state = {
  folderPath: `${app.getPath('documents')}/md`, // 選択中のフォルダのパス
  filePath: '', // ファイルまでのフルパス
  files: [], // ファイル一覧
  fileIndex: -1, //現在参照中のファイル
  preText: '' // 保存済みテキスト
};

const getters = {
  files(state) {
    return state.files;
  },
  fileIndex(state) {
    return state.fileIndex;
  },
  preText(state) {
    return state.preText;
  }
};

const mutations = {
  // フォルダのパスを取得
  setFolderPath(state, folderPath) {
    state.folderPath = folderPath;
  },
  // ファイル一覧設定
  setFiles(state, files) {
    state.files = files;
  },
  // ファイルのパス情報を取得
  setFilePath(state, filePath) {
    state.filePath = filePath;
  },
  // 最後に保存したテキストの内容
  setPreText(state, preText) {
    state.preText = preText;
  }
};

const actions = {
  initFolder() {
    const FOLDER_PATH = `${app.getPath('documents')}/md`;
    const FILE_PATH = `${FOLDER_PATH}/sample.md`;
    // 初期フォルダ、ファイルの生成
    FsWrapper.createInitFolder(FOLDER_PATH, FILE_PATH);
  },
  readFiles(context) {
    const PATH = context.getters.folderPath;
    const FILES = FsWrapper.readFiles(PATH);
    if (!FILES.length === 0) {
      // 読み込み失敗(フォルダ、もしくはファイルがない)
      context.commit('setFiles', []);
    } else {
      // 読み込み成功
      context.commit('setFiles', FILES);
    }
  },
  readFile(context, index) {
    const FILE_PATH = `${context.getters.folderPath}/${context.getters.files[index]}`;
    if (context.getters.filePath === FILE_PATH) {
      alert('すでに開いています。');
      return;
    }
    // ファイルの読み込み
    const text = FsWrapper.readFile(FILE_PATH);
    context.commit('setPreText', text);
    context.commit('setFilePath', FILE_PATH);
  },
  saveFile(context) {
    // 新規保存
    const DEFAULT = `${app.getPath('documents')}/md`;
    const FILE_PATH = dialog.showSaveDialog({
      title: 'Save as',
      defaultPath: DEFAULT,
      filters: [
        {
          name: 'markdown',
          extensions: ['md']
        }
      ]
    });
    if (FILE_PATH) {
      FsWrapper.saveFile(FILE_PATH, context.getters.preText);
      context.commit('setFilePath', FILE_PATH);
      context.commit('setPreText', context.getters.preText);
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
