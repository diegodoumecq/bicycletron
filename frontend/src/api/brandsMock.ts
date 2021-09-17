import { sample } from 'lodash/fp';

const uniqueId = (() => {
  let count = 1;
  return () => count++;
})();

const baseBrands = [
  { name: '3T Bikes', id: uniqueId() },
  { name: 'Alchemy Bicycles', id: uniqueId() },
  { name: 'All-City Cycles', id: uniqueId() },
  { name: 'Ancheer Bikes', id: uniqueId() },
  { name: 'Bianchi Bicycles', id: uniqueId() },
  { name: 'Brompton Bikes', id: uniqueId() },
  { name: 'Cannondale Bikes', id: uniqueId() },
  { name: 'Canyon Bicycles', id: uniqueId() },
  { name: 'Colnago Bikes', id: uniqueId() },
  { name: 'Co-op Cycles', id: uniqueId() },
  {
    name: 'Critical / Retrospec Cycles',
    id: uniqueId(),
  },
  { name: 'Cube Bikes', id: uniqueId() },
  { name: 'Devinci Cycles', id: uniqueId() },
  { name: 'Diamondback Bikes', id: uniqueId() },
  { name: 'Electra Bikes', id: uniqueId() },
  { name: 'Evil Bikes', id: uniqueId() },
  { name: 'Felt Bikes', id: uniqueId() },
  { name: 'Firmstrong Bikes', id: uniqueId() },
  { name: 'Fuji Bikes', id: uniqueId() },
  { name: 'Ghost Cycles', id: uniqueId() },
  { name: 'Giant Bikes', id: uniqueId() },
  { name: 'GT Bikes', id: uniqueId() },
  { name: 'Ibis Bikes', id: uniqueId() },
  { name: 'Intense Cycles', id: uniqueId() },
  { name: 'Jamis Bikes', id: uniqueId() },
  { name: 'Juliana Bicycles', id: uniqueId() },
  { name: 'Kestrel Bikes', id: uniqueId() },
  { name: 'Niner Bikes', id: uniqueId() },
  { name: 'Norco Bicycles', id: uniqueId() },
  {
    name: 'Orange Mountain Bikes',
    id: uniqueId(),
  },
  { name: 'Orbea Bikes', id: uniqueId() },
  { name: 'Pivot Bikes', id: uniqueId() },
  { name: 'Prevelo Bikes', id: uniqueId() },
  { name: 'Priority Bicycles', id: uniqueId() },
  { name: 'Pure ‘Fix’ Cycles', id: uniqueId() },
  { name: 'QuietKat Bikes', id: uniqueId() },
  { name: 'Rad Power Bikes', id: uniqueId() },
  { name: 'Raleigh Bikes', id: uniqueId() },
  { name: 'Ride1UP Bikes', id: uniqueId() },
  {
    name: 'Rocky Mountain Bikes',
    id: uniqueId(),
  },
  {
    name: 'Sage Titanium Bicycles',
    id: uniqueId(),
  },
  { name: 'Salsa Cycles', id: uniqueId() },
  {
    name: 'Santa Cruz Bicycles',
    id: uniqueId(),
  },
  { name: 'Schwinn Bikes', id: uniqueId() },
  { name: 'Scott Bikes', id: uniqueId() },
  { name: 'sixthreezero Bikes', id: uniqueId() },
  {
    name: 'Specialized Bikes Overview',
    id: uniqueId(),
  },
  { name: 'State Bicycles', id: uniqueId() },
  { name: 'Surly Bikes', id: uniqueId() },
  { name: 'Tern Bicycles', id: uniqueId() },
  { name: 'Transition Bikes', id: uniqueId() },
  { name: 'Tommaso Bikes', id: uniqueId() },
  { name: 'Trek Bikes', id: uniqueId() },
  { name: 'Wilier Bikes', id: uniqueId() },
  { name: 'woom bikes', id: uniqueId() },
  { name: 'Yeti Cycles', id: uniqueId() },
  { name: 'Yuba Bicycles', id: uniqueId() },
];

const iconNames = [
  'AccountBookFilled',
  'AlertFilled',
  'AlipaySquareFilled',
  'AmazonCircleFilled',
  'AmazonSquareFilled',
  'ApiFilled',
  'AppstoreFilled',
  'AudioFilled',
  'BankFilled',
  'BehanceCircleFilled',
  'BellFilled',
  'BookFilled',
  'BugFilled',
  'BuildFilled',
  'BulbFilled',
  'CalculatorFilled',
  'CalendarFilled',
  'CameraFilled',
  'CarFilled',
  'CarryOutFilled',
  'CiCircleFilled',
  'CloudFilled',
  'CodeFilled',
  'CodeSandboxSquareFilled',
  'CodepenSquareFilled',
  'CompassFilled',
  'ContactsFilled',
  'ContainerFilled',
  'ControlFilled',
  'CreditCardFilled',
  'CrownFilled',
  'CustomerServiceFilled',
  'DashboardFilled',
  'DatabaseFilled',
  'DingtalkCircleFilled',
  'DingtalkSquareFilled',
  'DislikeFilled',
  'DollarCircleFilled',
  'DribbbleCircleFilled',
  'DropboxCircleFilled',
  'DropboxSquareFilled',
  'EnvironmentFilled',
  'EuroCircleFilled',
  'ExperimentFilled',
  'EyeFilled',
  'EyeInvisibleFilled',
  'FileAddFilled',
  'FileExcelFilled',
  'FileExclamationFilled',
  'FileFilled',
  'FileImageFilled',
  'FileMarkdownFilled',
  'FilePdfFilled',
  'FilePptFilled',
  'FileTextFilled',
  'FileUnknownFilled',
  'FileWordFilled',
  'FileZipFilled',
  'FilterFilled',
  'FireFilled',
  'FlagFilled',
  'FolderAddFilled',
  'FolderFilled',
  'FolderOpenFilled',
  'FormatPainterFilled',
  'FrownFilled',
  'FunnelPlotFilled',
  'GiftFilled',
  'GoldFilled',
  'GoldenFilled',
  'GoogleCircleFilled',
  'GooglePlusCircleFilled',
  'GooglePlusSquareFilled',
  'GoogleSquareFilled',
  'HddFilled',
  'HeartFilled',
  'HomeFilled',
  'HourglassFilled',
  'IdcardFilled',
  'IeCircleFilled',
  'IeSquareFilled',
  'InsuranceFilled',
  'InteractionFilled',
  'LayoutFilled',
  'LikeFilled',
  'LockFilled',
  'MacCommandFilled',
  'MailFilled',
  'MedicineBoxFilled',
  'MediumCircleFilled',
  'MediumSquareFilled',
  'MehFilled',
  'MessageFilled',
  'MobileFilled',
  'MoneyCollectFilled',
  'NotificationFilled',
  'PayCircleFilled',
  'PhoneFilled',
  'PictureFilled',
  'PlaySquareFilled',
  'PoundCircleFilled',
  'PrinterFilled',
  'ProfileFilled',
  'ProjectFilled',
  'PropertySafetyFilled',
  'PushpinFilled',
  'QqCircleFilled',
  'QqSquareFilled',
  'ReadFilled',
  'ReconciliationFilled',
  'RedEnvelopeFilled',
  'RedditCircleFilled',
  'RedditSquareFilled',
  'RestFilled',
  'RobotFilled',
  'RocketFilled',
  'SafetyCertificateFilled',
  'SaveFilled',
  'ScheduleFilled',
  'SecurityScanFilled',
  'SettingFilled',
  'ShopFilled',
  'ShoppingFilled',
  'SignalFilled',
  'SketchCircleFilled',
  'SketchSquareFilled',
  'SkinFilled',
  'SlackCircleFilled',
  'SmileFilled',
  'SoundFilled',
  'StarFilled',
  'SwitcherFilled',
  'TabletFilled',
  'TagFilled',
  'TagsFilled',
  'TaobaoSquareFilled',
  'ThunderboltFilled',
  'ToolFilled',
  'TrademarkCircleFilled',
  'TrophyFilled',
  'TwitterCircleFilled',
  'TwitterSquareFilled',
  'UnlockFilled',
  'UsbFilled',
  'VideoCameraFilled',
  'WalletFilled',
  'ZhihuCircleFilled',
  'ZhihuSquareFilled',
];

export const brands = baseBrands.map((b) => ({
  ...b,
  icon: sample(iconNames)!,
}));
