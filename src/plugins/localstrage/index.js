const SETTING_KEY = 'UserSetting';

const updateSetting = () => {
  const SETTING_JSON = localStorage.getItem(SETTING_KEY);
  const SETTING = JSON.parse(SETTING_JSON);
  return SETTING;
};

const saveSetting = setting => {
  localStorage.setItem(SETTING_KEY, JSON.stringify(setting));
};

const initSetting = setting => {
  localStorage.setItem(SETTING_KEY, JSON.stringify(setting));
};

export default { updateSetting, saveSetting, initSetting };
