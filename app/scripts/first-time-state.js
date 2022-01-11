/**
 * @typedef {Object} FirstTimeState
 * @property {Object} config Initial configuration parameters
 * @property {Object} NetworkController Network controller state
 */

/**
 * @type {FirstTimeState}
 */
const initialState = {
  config: {},
  PreferencesController: {
    frequentRpcListDetail: [
      {
        rpcUrl: 'http://18.139.114.143:5006',
        chainId: '0x1a8a',
        ticker: 'ETH',
        nickname: 'XRUN 메인 넷',
        rpcPrefs: {},
      },
    ],
  },
};

export default initialState;
