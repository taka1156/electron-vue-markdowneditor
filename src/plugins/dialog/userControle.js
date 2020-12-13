// alert

const msgInitSetting = () => {
  alert('初期スタイルを生成したので開き直します。');
};

const msgAlreadyOpenFile = () => {
  alert('すでに開いています。');
};

const msgCancel = () => {
  alert('キャンセルされました');
};

// confirm
const isNewFileEdit = () => {
  return confirm('現在の入力内容を破棄してよろしいですか?');
};

const isOverWrite = () => {
  return confirm('上書きしてもよろしいですか?');
};

const isNotSaveChangeFile = () => {
  return confirm('現在のファイルを保存していませんが、よろしいですか?');
};

const isReaload = () => {
  return confirm('設定を適用するために再読み込みを行います。\nよろしいですか?');
};

export {
  msgInitSetting,
  msgAlreadyOpenFile,
  msgCancel,
  isNewFileEdit,
  isOverWrite,
  isNotSaveChangeFile,
  isReaload
};
