const { app, dialog } = require('electron').remote;
import FsWrapper from '@/plugins/fs/index.js';

/**
 * !!! alertはコチラに書き込まない
 */

const state = {
  folderPath: `${app.getPath('documents')}/md`, // 選択中のフォルダのパス
  filePath: '', // ファイルまでのフルパス
  files: [], // ファイル一覧
  fileIndex: -1, //現在参照中のファイル
  preText: '' // 保存済みテキスト
};

const getters = {
  folderPath(state) {
    return state.folderPath;
  },
  filePath(state) {
    return state.filePath;
  },
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
  setFileIndex(state, fileIndex) {
    state.fileIndex = fileIndex;
  },
  // 最後に保存したテキストの内容
  setPreText(state, preText) {
    state.preText = preText;
  }
};

const actions = {
  initFileInfo(context) {
    context.commit('setPreText', '');
    context.commit('setFileIndex', -1);
    context.commit('setFilePath', '');
  },
  async initFolder() {
    const FOLDER_PATH = `${app.getPath('documents')}/md`;
    const FILE_PATH = `${FOLDER_PATH}/sample.md`;
    // 初期フォルダ、ファイルの生成
    await FsWrapper.createInitFolder(FOLDER_PATH, FILE_PATH);
  },
  async readFiles(context) {
    const PATH = context.getters.folderPath;
    const files = await FsWrapper.readFiles(PATH);
    if (files.length === 0) {
      context.commit('setFiles', []);
    } else {
      // 読み込み成功
      context.commit('setFiles', files);
    }
  },
  async readFile(context, index) {
    const FILE_PATH = `${context.getters.folderPath}/${context.getters.files[index]}`;
    // ファイルの読み込み
    const { text, error } = await FsWrapper.readFile(FILE_PATH);
    console.log(text);
    console.log(error);
    if (error == null) {
      context.commit('setPreText', text);
      context.commit('setFileIndex', index);
      context.commit('setFilePath', FILE_PATH);
      return true;
    } else {
      return false;
    }
  },
  async saveFile(context, text) {
    // 新規保存
    const DEFAULT = `${app.getPath('documents')}/md`;
    const { canceled, filePath } = await dialog.showSaveDialog({
      title: 'Save as',
      defaultPath: DEFAULT,
      filters: [
        {
          name: 'markdown',
          extensions: ['md']
        }
      ]
    });
    if (!canceled) {
      console.log(text);
      await FsWrapper.saveFile(filePath, text);
      context.commit('setFilePath', filePath);
      context.commit('setPreText', text);
    }
  },
  async overwriteFile(context, text) {
    const FILE_PATH = context.getters.filePath;
    if (FILE_PATH) {
      await FsWrapper.saveFile(FILE_PATH, text);
      context.commit('setFilePath', FILE_PATH);
      context.commit('setPreText', text);
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
