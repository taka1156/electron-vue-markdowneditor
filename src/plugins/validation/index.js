import { SETTING } from '@/constants/index.js';

// この関数のみバリデーションの専用のアラート処理なのでこちらに処理を記載
const msgValdateError = errors => {
  const msg = [...errors].reduce((m, e) => m + `${e}\n`, '');
  console.log(msg);
  alert(msg);
};

const validateSetting = setting => {
  const errors = [];
  if (setting.styles === '' || setting.styles === SETTING.styles) {
    errors.push('空のスタイルや初期スタイルを設定することはできません。');
  }

  if (errors.length !== 0) {
    msgValdateError(errors);
    return false;
  }

  return true;
};

export { validateSetting };
