 export interface Site {
   slug: string;
   name: string;
   nameZh: string;
   yearsAgo: number;
   era: string;
   culture: string;
   unesco: boolean;
   unescoYear?: number;
   city: string;
   province: string;
   ticketLow: number;
   ticketHigh: number;
   hours: string;
   visitTime: string;
   image: string;
 }

 export const sites: Site[] = [
   {
     slug: 'dawenkou-site',
     name: 'Dawenkou Site',
     nameZh: '大汶口遗址',
     yearsAgo: 6300,
     era: 'Neolithic',
     culture: 'Dawenkou Culture',
     unesco: false,
     city: 'Tai\'an',
     province: 'Shandong',
     ticketLow: 0,
     ticketHigh: 0,
     hours: 'Open access (museum: 9:00-17:00, closed Mon)',
     visitTime: '2-3 hours',
     image: '/dawenkou-card.webp',
   },
   {
     slug: 'liangzhu-ancient-city',
     name: 'Liangzhu Ancient City',
     nameZh: '良渚古城',
     yearsAgo: 5300,
     era: 'Neolithic',
     culture: 'Liangzhu Culture',
     unesco: true,
     unescoYear: 2019,
     city: 'Hangzhou',
     province: 'Zhejiang',
     ticketLow: 60,
     ticketHigh: 80,
     hours: '9:00-17:00 (last entry 16:00)',
     visitTime: '3-4 hours',
     image: '/liangzhu-card.webp',
   },
   {
     slug: 'sanxingdui',
     name: 'Sanxingdui',
     nameZh: '三星堆',
     yearsAgo: 4800,
     era: 'Bronze Age',
     culture: 'Ancient Shu Civilization',
     unesco: false,
     city: 'Guanghan / Chengdu',
     province: 'Sichuan',
     ticketLow: 72,
     ticketHigh: 72,
     hours: '8:30-18:00 (last entry 17:00)',
     visitTime: '3-4 hours',
     image: '/sanxingdui-card.webp',
   },
   {
     slug: 'yin-xu-anyang',
     name: 'Yin Xu',
     nameZh: '殷墟',
     yearsAgo: 3300,
     era: 'Bronze Age',
     culture: 'Shang Dynasty',
     unesco: true,
     unescoYear: 2006,
     city: 'Anyang',
     province: 'Henan',
     ticketLow: 90,
     ticketHigh: 90,
     hours: '8:00-18:30 (summer) / 8:00-17:30 (winter)',
     visitTime: '3-4 hours',
     image: '/yinxu-card.webp',
   },
   {
     slug: 'terracotta-warriors',
     name: 'Terracotta Warriors',
     nameZh: '兵马俑',
     yearsAgo: 2200,
     era: 'Imperial',
     culture: 'Qin Dynasty',
     unesco: true,
     unescoYear: 1987,
     city: 'Xi\'an',
     province: 'Shaanxi',
     ticketLow: 120,
     ticketHigh: 120,
     hours: '8:30-17:00',
     visitTime: '3-4 hours',
     image: '/terracotta-card.webp',
   },
   {
     slug: 'han-yangling-mausoleum',
     name: 'Han Yangling Mausoleum',
     nameZh: '汉阳陵',
     yearsAgo: 2100,
     era: 'Imperial',
     culture: 'Han Dynasty',
     unesco: false,
     city: 'Xi\'an',
     province: 'Shaanxi',
     ticketLow: 70,
     ticketHigh: 70,
     hours: '8:30-17:30',
     visitTime: '2-3 hours',
     image: '/hanyangling-card.webp',
   },
   {
     slug: 'mawangdui-han-tombs',
     name: 'Mawangdui Han Tombs',
     nameZh: '马王堆汉墓',
     yearsAgo: 2100,
     era: 'Imperial',
     culture: 'Han Dynasty',
     unesco: false,
     city: 'Changsha',
     province: 'Hunan',
     ticketLow: 0,
     ticketHigh: 0,
     hours: 'Relics at Hunan Museum: 9:00-17:00, closed Mon',
     visitTime: '2-3 hours',
     image: '/mawangdui-card.webp',
   },
   {
     slug: 'qianling-mausoleum',
     name: 'Qianling Mausoleum',
     nameZh: '乾陵',
     yearsAgo: 1300,
     era: 'Imperial',
     culture: 'Tang Dynasty',
     unesco: false,
     city: 'Xi\'an / Xianyang',
     province: 'Shaanxi',
     ticketLow: 100,
     ticketHigh: 100,
     hours: '8:00-18:00 (Mar-Nov) / 8:30-17:30 (Dec-Feb)',
     visitTime: '3-4 hours',
     image: '/qianling-card.webp',
   },
 ];

 export const highlightedSites = sites.filter(s =>
   ['liangzhu-ancient-city', 'sanxingdui', 'yin-xu-anyang', 'dawenkou-site', 'han-yangling-mausoleum'].includes(s.slug)
 );

 export const routes = [
   {
     name: 'Ancient China in 10 Days',
     slug: 'ancient-china-10-day-itinerary',
     sites: ['Liangzhu', 'Sanxingdui', 'Terracotta Warriors', 'Yin Xu'],
     days: 10,
     cities: 4,
     costLow: 8000,
     costHigh: 12000,
   },
   {
     name: 'Xi\'an & Chengdu Ancient Sites',
     slug: 'xian-chengdu-ancient-sites',
     sites: ['Terracotta Warriors', 'Han Yangling', 'Qianling', 'Sanxingdui'],
     days: 7,
     cities: 2,
     costLow: 5000,
     costHigh: 8000,
   },
   {
     name: 'Henan Archaeology Tour',
     slug: 'henan-archaeology-tour',
     sites: ['Yin Xu', 'Wangzhuang (drive-by)', 'Longmen Grottoes'],
     days: 5,
     cities: 3,
     costLow: 3500,
     costHigh: 6000,
   },
 ];


