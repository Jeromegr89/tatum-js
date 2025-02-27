// @TODO OPENAPI - should be replaced with generated

export enum Currency {
  BTC = 'BTC',
  BCH = 'BCH',
  LTC = 'LTC',
  KLAY = 'KLAY',
  CELO = 'CELO',
  SOL = 'SOL',
  ONE = 'ONE',
  CUSD = 'CUSD',
  CEUR = 'CEUR',
  ETH = 'ETH',
  FABRIC = 'FABRIC',
  QUORUM = 'QUORUM',
  XRP = 'XRP',
  XLM = 'XLM',
  DOGE = 'DOGE',
  VET = 'VET',
  NEO = 'NEO',
  BNB = 'BNB',
  BSC = 'BSC',
  CAKE = 'CAKE',
  BUSD_BSC = 'BUSD_BSC',
  B2U_BSC = 'B2U_BSC',
  BETH = 'BETH',
  GAMEE = 'GAMEE',
  BBTC = 'BBTC',
  BADA = 'BADA',
  RMD = 'RMD',
  WBNB = 'WBNB',
  BDOT = 'BDOT',
  BXRP = 'BXRP',
  BLTC = 'BLTC',
  BBCH = 'BBCH',
  MATIC = 'MATIC',
  USDC_MATIC = 'USDC_MATIC',
  USDC_BSC = 'USDC_BSC',
  USDT = 'USDT',
  GMC = 'GMC',
  GMC_BSC = 'GMC_BSC',
  FLOW = 'FLOW',
  FUSD = 'FUSD',
  USDT_TRON = 'USDT_TRON',
  INRT_TRON = 'INRT_TRON',
  TRON = 'TRON',
  LEO = 'LEO',
  LINK = 'LINK',
  WBTC = 'WBTC',
  UNI = 'UNI',
  FREE = 'FREE',
  MKR = 'MKR',
  USDC = 'USDC',
  MATIC_ETH = 'MATIC_ETH',
  BAT = 'BAT',
  TUSD = 'TUSD',
  BUSD = 'BUSD',
  PAX = 'PAX',
  PLTC = 'PLTC',
  XCON = 'XCON',
  REVV = 'REVV',
  SAND = 'SAND',
  MMY = 'MMY',
  PAXG = 'PAXG',
  HAG = 'HAG',
  LYRA = 'LYRA',
  ADA = 'ADA',
  XDC = 'XDC',
  LATOKEN = 'LATOKEN',
  USDT_MATIC = 'USDT_MATIC',
  QTUM = 'QTUM',
  EGLD = 'EGLD',
  ALGO = 'ALGO',
  KCS = 'KCS',
  COIIN = 'COIIN',
  TTT = 'TTT',
}

export const ERC20_CURRENCIES = [
  Currency.USDT,
  Currency.LATOKEN,
  Currency.LEO,
  Currency.LINK,
  Currency.UNI,
  Currency.FREE,
  Currency.MKR,
  Currency.BUSD,
  Currency.USDC,
  Currency.MATIC_ETH,
  Currency.BAT,
  Currency.WBTC,
  Currency.TUSD,
  Currency.PAX,
  Currency.PAXG,
  Currency.PLTC,
  Currency.XCON,
  Currency.MMY,
  Currency.COIIN,
  Currency.REVV,
  Currency.SAND,
  Currency.GMC,
]

export const BEP20_CURRENCIES = [
  Currency.BETH,
  Currency.BBTC,
  Currency.RMD,
  Currency.USDC_BSC,
  Currency.B2U_BSC,
  Currency.BADA,
  Currency.WBNB,
  Currency.GMC_BSC,
  Currency.BDOT,
  Currency.BXRP,
  Currency.BLTC,
  Currency.BBCH,
  Currency.HAG,
  Currency.CAKE,
  Currency.BUSD_BSC,
]

export const NATIVE_CURRENCIES = [
  Currency.BTC,
  Currency.ONE,
  Currency.ADA,
  Currency.BNB,
  Currency.FLOW,
  Currency.BSC,
  Currency.XDC,
  Currency.LTC,
  Currency.DOGE,
  Currency.TRON,
  Currency.BCH,
  Currency.ETH,
  Currency.XRP,
  Currency.XLM,
  Currency.CELO,
  Currency.MATIC,
  Currency.VET,
  Currency.EGLD,
  Currency.ALGO,
  Currency.SOL,
  Currency.KCS,
  Currency.KLAY,
]

export const TRON_CURRENCIES = [Currency.TRON, Currency.USDT_TRON, Currency.INRT_TRON]
export const FLOW_CURRENCIES = [Currency.FLOW, Currency.FUSD]
export const CELO_CURRENCIES = [Currency.CELO, Currency.CEUR, Currency.CUSD]

export const MATIC20_CURRENCIES = [Currency.USDC_MATIC, Currency.GAMEE, Currency.USDT_MATIC]

export const ETH_BASED_CURRENCIES = [Currency.ETH, ...ERC20_CURRENCIES]

export const MATIC_BASED_CURRENCIES = [Currency.MATIC, ...MATIC20_CURRENCIES]

export const BSC_BASED_CURRENCIES = [Currency.BSC, ...BEP20_CURRENCIES]

export const NFT_SUPPORTED_CURRENCIES = [
  Currency.ETH,
  Currency.MATIC,
  Currency.KCS,
  Currency.ONE,
  Currency.CELO,
  Currency.TRON,
  Currency.FLOW,
  Currency.BSC,
  Currency.KLAY,
]

export type NftSupportedCurrencies = typeof NFT_SUPPORTED_CURRENCIES[number]
export type NativeCurrency = typeof NATIVE_CURRENCIES[number]
