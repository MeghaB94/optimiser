import Axios from 'axios'

const USER_END_POINT = process.env.LOGIN_API_ENDPOINT + '/user'
const USER_API = {
  LOGIN: USER_END_POINT + '/login',
  LOGOUT: USER_END_POINT + '/logout',
  SIGNUP: USER_END_POINT + '/signup',
  GET_USER_DATA: USER_END_POINT + '/',
  UPDATE_PROFILE: USER_END_POINT + '/updateProfile'
}

export const optimiserAPI = {

  login (credentials) {
    return { data: { token: 'psadadj', message: 'Logged In Successfully' } }
    // const Authorization = `Basic ${credentials}`
    // return Axios.get(USER_API.LOGIN, { headers: { Authorization } })
  },

  getStrategyData () {
    return Axios.get(USER_API.SIGNUP, { headers: { setBearerAuth: true } })
  },

  getSummaryList () {
    return { data: summaryList }
    // return Axios.get(USER_API.SIGNUP, { headers: { setBearerAuth: true } })
  },

  getStrategyRollUpSummary () {
    return { data: strategyRollUpSummaryList }
    // return Axios.get(USER_API.SIGNUP, { headers: { setBearerAuth: true } })
  },

  updateStrategy (data) {
    const newSummary = {
      strategyInput: {
        strategyName: 'Strategy001',
        WOS: 8,
        maxDisc: '50%',
        stepDisc: '5%',
        minDisc: '5%'
      },
      forecastResults: {
        WOS: 5,
        erosion: 751549.67,
        EOH: 273007.98,
        EOHUnits: 3,
        avgOBDisc: '10%',
        salesUnits: 6754,
        COGS: 5738389.5,
        recoveryRate: 0.72
      }
    }
    summaryList.push(newSummary)
    return { data: { message: 'Saved Successfully' } }
    // return Axios.post(USER_API.UPDATE_PROFILE, userData, { headers: { setBearerAuth: true } })
  },

  logout () {
    return { data: { message: 'Logged Out Successfully' } }
    // return Axios.get(USER_API.LOGOUT, { headers: { setBearerAuth: true } })
  }
}

const strategyRollUpSummaryList = [{
  classLevelSummary: {
    className: '140 - className',
    classDesc: 'Samsung TV\'s',
    avgOBDisc: '50%',
    erosion: 1075395.51,
    WOS: 10,
    EOH: 28897705.1,
    EOHUnits: 324,
    salesUnits: 6218,
    COGS: 5780894.5,
    recoveryRate: 0.82
  },
  skuLevelSummary: [{
    SKU: 786789,
    SKUDesc: 'Samsung - 43" Class-LED',
    avgOBDisc: '40%',
    erosion: 751549.6,
    WOS: 7,
    EOH: 273007.7,
    EOHUnits: 324,
    salesUnits: 3450,
    COGS: 4699407.4,
    recoveryRate: 0.8250
  }, {
    SKU: 786790,
    SKUDesc: 'Samsung - 42" Class-LED',
    avgOBDisc: '50%',
    erosion: 341549.4,
    WOS: 6,
    EOH: 273117.7,
    EOHUnits: 315,
    salesUnits: 8953,
    COGS: 3599407.3,
    recoveryRate: 0.4270
  },
  {
    SKU: 786791,
    SKUDesc: 'Samsung - 40" Class-LED',
    avgOBDisc: '30%',
    erosion: 851549.5,
    WOS: 8,
    EOH: 272317.7,
    EOHUnits: 310,
    salesUnits: 7868,
    COGS: 2344407.9,
    recoveryRate: 0.5420
  }]
}]

const summaryList = [{
  strategyInput: {
    strategyName: 'Strategy001',
    WOS: 8,
    maxDisc: '50%',
    stepDisc: '5%',
    minDisc: '5%'
  },
  forecastResults: {
    WOS: 5,
    erosion: 751549.67,
    EOH: 273007.98,
    EOHUnits: 3,
    avgOBDisc: '10%',
    salesUnits: 6754,
    COGS: 5738389.5,
    recoveryRate: 0.72
  }
}]
