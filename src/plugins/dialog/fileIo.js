const msgInitfileResult = (filePath = '未定義', isSucess = false) => {
  if (isSucess) {
    alert(`${filePath}に初期フォルダ、及びサンプルを作成しました。`);
  } else {
    alert(`${filePath}に初期フォルダ、及びサンプルの作成に失敗しました。`);
  }
};

const msgSavefileResult = (isSucess = false) => {
  if (isSucess) {
    alert('保存しました。');
  } else {
    alert('保存に失敗しました。');
  }
};

const msgReadfaile = () => {
  alert('フォルダが存在しません');
};

export { msgInitfileResult, msgSavefileResult, msgReadfaile };
