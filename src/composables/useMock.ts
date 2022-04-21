import type { AxiosInstance } from 'axios';
import MockAdapter from 'axios-mock-adapter';

export function useMock(axiosInstance: AxiosInstance) {

  const mock = new MockAdapter(axiosInstance);

  mock.onGet('/kon/api/Categories').reply(() => {
    return [200, {"status":200,"data":[{"categoryId":1,"categoryName":"男性上衣"},{"categoryId":2,"categoryName":"男性機能外套"},{"categoryId":3,"categoryName":"男性褲子"},{"categoryId":4,"categoryName":"女性上衣"},{"categoryId":5,"categoryName":"女性機能外套"},{"categoryId":6,"categoryName":"女性褲子"},{"categoryId":7,"categoryName":"衣著配件"},{"categoryId":8,"categoryName":"背負系統"},{"categoryId":9,"categoryName":"足部系統"},{"categoryId":10,"categoryName":"帳篷"},{"categoryId":11,"categoryName":"睡袋與睡墊"},{"categoryId":12,"categoryName":"登山配件"}],"message":null}]
  })

  mock.onGet('/kon/api/CategoryDetails').reply(() => {
    return [200, {"status":200,"data":[{"categoryId":1,"categoryDetailId":1,"categoryDetailName":"短袖上衣"},{"categoryId":1,"categoryDetailId":2,"categoryDetailName":"長袖上衣"},{"categoryId":1,"categoryDetailId":3,"categoryDetailName":"中層保暖衣"},{"categoryId":2,"categoryDetailId":4,"categoryDetailName":"防風雨外套"},{"categoryId":2,"categoryDetailId":5,"categoryDetailName":"羽絨外套"},{"categoryId":2,"categoryDetailId":6,"categoryDetailName":"化纖外套"},{"categoryId":2,"categoryDetailId":7,"categoryDetailName":"軟殼外套"},{"categoryId":2,"categoryDetailId":8,"categoryDetailName":"刷毛外套"},{"categoryId":2,"categoryDetailId":9,"categoryDetailName":"風衣外套"},{"categoryId":3,"categoryDetailId":10,"categoryDetailName":"短褲"},{"categoryId":3,"categoryDetailId":11,"categoryDetailName":"長褲"},{"categoryId":3,"categoryDetailId":12,"categoryDetailName":"運動機能褲"},{"categoryId":3,"categoryDetailId":13,"categoryDetailName":"防風雨褲"},{"categoryId":4,"categoryDetailId":14,"categoryDetailName":"短袖上衣"},{"categoryId":4,"categoryDetailId":15,"categoryDetailName":"長袖上衣"},{"categoryId":4,"categoryDetailId":16,"categoryDetailName":"中層保暖衣"},{"categoryId":4,"categoryDetailId":17,"categoryDetailName":"運動內衣"},{"categoryId":5,"categoryDetailId":18,"categoryDetailName":"防風雨外套"},{"categoryId":5,"categoryDetailId":19,"categoryDetailName":"羽絨外套"},{"categoryId":5,"categoryDetailId":20,"categoryDetailName":"化纖外套"},{"categoryId":5,"categoryDetailId":21,"categoryDetailName":"軟殼外套"},{"categoryId":5,"categoryDetailId":22,"categoryDetailName":"刷毛外套"},{"categoryId":5,"categoryDetailId":23,"categoryDetailName":"風衣外套"},{"categoryId":6,"categoryDetailId":24,"categoryDetailName":"短褲"},{"categoryId":6,"categoryDetailId":25,"categoryDetailName":"長褲"},{"categoryId":6,"categoryDetailId":26,"categoryDetailName":"運動機能褲"},{"categoryId":6,"categoryDetailId":27,"categoryDetailName":"防風雨褲"},{"categoryId":7,"categoryDetailId":28,"categoryDetailName":"頭巾"},{"categoryId":7,"categoryDetailId":29,"categoryDetailName":"遮陽帽"},{"categoryId":7,"categoryDetailId":30,"categoryDetailName":"毛帽"},{"categoryId":7,"categoryDetailId":31,"categoryDetailName":"登山手套"},{"categoryId":7,"categoryDetailId":32,"categoryDetailName":"登山襪"},{"categoryId":8,"categoryDetailId":33,"categoryDetailName":"55 公升以上大背包"},{"categoryId":8,"categoryDetailId":34,"categoryDetailName":"30 - 55 公升以上中背包"},{"categoryId":8,"categoryDetailId":35,"categoryDetailName":"5 - 30 公升小背包"},{"categoryId":8,"categoryDetailId":36,"categoryDetailName":"攻頂包"},{"categoryId":9,"categoryDetailId":37,"categoryDetailName":"中高筒登山鞋"},{"categoryId":9,"categoryDetailId":38,"categoryDetailName":"低筒登山鞋"},{"categoryId":9,"categoryDetailId":39,"categoryDetailName":"越野跑鞋"},{"categoryId":9,"categoryDetailId":40,"categoryDetailName":"綁腿"},{"categoryId":10,"categoryDetailId":41,"categoryDetailName":"三季單人帳篷"},{"categoryId":10,"categoryDetailId":42,"categoryDetailName":"三季雙人帳篷"},{"categoryId":10,"categoryDetailId":43,"categoryDetailName":"三季三人帳篷"},{"categoryId":10,"categoryDetailId":44,"categoryDetailName":"三季四人帳篷"},{"categoryId":10,"categoryDetailId":45,"categoryDetailName":"四季單人帳篷"},{"categoryId":10,"categoryDetailId":46,"categoryDetailName":"四季雙人帳篷"},{"categoryId":10,"categoryDetailId":47,"categoryDetailName":"四季三人帳篷"},{"categoryId":10,"categoryDetailId":48,"categoryDetailName":"四季四人帳篷"},{"categoryId":11,"categoryDetailId":49,"categoryDetailName":"三季化纖睡袋"},{"categoryId":11,"categoryDetailId":50,"categoryDetailName":"三季羽絨睡袋"},{"categoryId":11,"categoryDetailId":51,"categoryDetailName":"四季化纖睡袋"},{"categoryId":11,"categoryDetailId":52,"categoryDetailName":"四季羽絨睡袋"},{"categoryId":11,"categoryDetailId":53,"categoryDetailName":"蛋殼式睡墊"},{"categoryId":11,"categoryDetailId":54,"categoryDetailName":"充氣式睡墊"},{"categoryId":12,"categoryDetailId":55,"categoryDetailName":"頭燈"},{"categoryId":12,"categoryDetailId":56,"categoryDetailName":"水袋"},{"categoryId":12,"categoryDetailId":57,"categoryDetailName":"濾水器"},{"categoryId":12,"categoryDetailId":58,"categoryDetailName":"登山杖"},{"categoryId":12,"categoryDetailId":59,"categoryDetailName":"防水壓縮袋"}],"message":null}]
  })

  mock.onGet('/kon/api/Brands').reply(() => {
    return [200, {"status":200,"data":[{"brandId":1,"name":"Arc'teryx"},{"brandId":2,"name":"adidas"},{"brandId":3,"name":"Aku"},{"brandId":4,"name":"Asolo"},{"brandId":5,"name":"Altra"},{"brandId":6,"name":"ATUNAS 歐都納"},{"brandId":7,"name":"Andes Mountain 安地斯"},{"brandId":8,"name":"adisi"},{"brandId":9,"name":"Black Diamond"},{"brandId":10,"name":"Buff"},{"brandId":11,"name":"Berghaus"},{"brandId":12,"name":"Boreal"},{"brandId":13,"name":"Bridgedale"},{"brandId":14,"name":"Brooks"},{"brandId":15,"name":"Big Agnes"},{"brandId":16,"name":"Balega"},{"brandId":17,"name":"Blue Ice"},{"brandId":18,"name":"Blackcrag 黑岩"},{"brandId":19,"name":"Black Ice 黑冰"},{"brandId":20,"name":"BIGPACK"},{"brandId":21,"name":"Boreas"},{"brandId":22,"name":"Columbia"},{"brandId":23,"name":"CARAVAN"},{"brandId":24,"name":"CMP"},{"brandId":25,"name":"Craghoppers"},{"brandId":26,"name":"Craft"},{"brandId":27,"name":"CamelBak"},{"brandId":28,"name":"Chaco"},{"brandId":29,"name":"Coleman"},{"brandId":30,"name":"CRISPI"},{"brandId":31,"name":"Chinook"},{"brandId":32,"name":"Dynafit"},{"brandId":33,"name":"Dare2B"},{"brandId":34,"name":"Dakine"},{"brandId":35,"name":"Damartsport"},{"brandId":36,"name":"Dolomite"},{"brandId":37,"name":"Deuter"},{"brandId":38,"name":"Darn Tough"},{"brandId":39,"name":"Danner"},{"brandId":40,"name":"Decathlon 迪卡儂"},{"brandId":41,"name":"DANA DESIGN"},{"brandId":42,"name":"Enforma"},{"brandId":43,"name":"Eider"},{"brandId":44,"name":"Eisbar"},{"brandId":45,"name":"Exped"},{"brandId":46,"name":"ENO"},{"brandId":47,"name":"ECCO"},{"brandId":48,"name":"Equinox"},{"brandId":49,"name":"E9"},{"brandId":50,"name":"Evolv"},{"brandId":51,"name":"Ferrino"},{"brandId":52,"name":"Fjallraven Five Ten"},{"brandId":53,"name":"Flylow"},{"brandId":54,"name":"Gill"},{"brandId":55,"name":"GripGrab"},{"brandId":56,"name":"Garmont"},{"brandId":57,"name":"GoLite"},{"brandId":58,"name":"Gordini"},{"brandId":59,"name":"GORE BIKE WEAR"},{"brandId":60,"name":"Granite Gear"},{"brandId":61,"name":"Gregory"},{"brandId":62,"name":"GSI"},{"brandId":63,"name":"Haglöfs"},{"brandId":64,"name":"Helly Hansen"},{"brandId":65,"name":"HI-TEC"},{"brandId":66,"name":"Hyperlite Mountain Gear"},{"brandId":67,"name":"HOKA ONE ONE"},{"brandId":68,"name":"HydraPak"},{"brandId":69,"name":"Hilleberg"},{"brandId":70,"name":"Hunter"},{"brandId":71,"name":"Hanwag"},{"brandId":72,"name":"Helinox"},{"brandId":73,"name":"Hestra"},{"brandId":74,"name":"HANCHOR"},{"brandId":75,"name":"HIGHROCK 天石"},{"brandId":76,"name":"Icebreaker"},{"brandId":77,"name":"Izas"},{"brandId":78,"name":"Icebug"},{"brandId":79,"name":"Inov8"},{"brandId":80,"name":"Injinji"},{"brandId":81,"name":"IceMule"},{"brandId":82,"name":"Jack Wolfskin"},{"brandId":83,"name":"Joluvi"},{"brandId":84,"name":"Janji"},{"brandId":85,"name":"Karpos"},{"brandId":86,"name":"Katadyn"},{"brandId":87,"name":"Kilpi"},{"brandId":88,"name":"Keen"},{"brandId":89,"name":"Kayland"},{"brandId":90,"name":"KUHL"},{"brandId":91,"name":"KAVU"},{"brandId":92,"name":"Kelty"},{"brandId":93,"name":"Klymit"},{"brandId":94,"name":"Kahtoola"},{"brandId":95,"name":"Kathmandu"},{"brandId":96,"name":"Klean Kanteen"},{"brandId":97,"name":"Klattermusen"},{"brandId":98,"name":"Kailas 凱樂石"},{"brandId":99,"name":"karrimor"},{"brandId":100,"name":"K2"},{"brandId":101,"name":"KOMPERDELL"},{"brandId":102,"name":"La Sportiva"},{"brandId":103,"name":"Lafuma"},{"brandId":104,"name":"Lorpen"},{"brandId":105,"name":"Loeffler"},{"brandId":106,"name":"Level"},{"brandId":107,"name":"Lowa"},{"brandId":108,"name":"Leki"},{"brandId":109,"name":"Lowe Alpine"},{"brandId":110,"name":"Lems"},{"brandId":111,"name":"Luna Sandals"},{"brandId":112,"name":"Mammut"},{"brandId":113,"name":"Millet"},{"brandId":114,"name":"Mountain Hardwear"},{"brandId":115,"name":"Mountainsmith"},{"brandId":116,"name":"Marmot"},{"brandId":117,"name":"Montane"},{"brandId":118,"name":"Montura"},{"brandId":119,"name":"Mund Socks"},{"brandId":120,"name":"Montbell"},{"brandId":121,"name":"Mountain Equipment"},{"brandId":122,"name":"Matt"},{"brandId":123,"name":"Merrell"},{"brandId":124,"name":"MSR"},{"brandId":125,"name":"Mystery Ranch"},{"brandId":126,"name":"Meridian Line"},{"brandId":127,"name":"Milestone"},{"brandId":128,"name":"MOBIGARDEN 牧高笛"},{"brandId":129,"name":"Norrona"},{"brandId":130,"name":"NEMO"},{"brandId":131,"name":"NRS"},{"brandId":132,"name":"Nalgene"},{"brandId":133,"name":"New Balance"},{"brandId":134,"name":"NANGA"},{"brandId":135,"name":"nozzle quiz 後研"},{"brandId":136,"name":"Nuturehike"},{"brandId":137,"name":"Odlo"},{"brandId":138,"name":"Oboz"},{"brandId":139,"name":"Ocun"},{"brandId":140,"name":"Outdoor Research"},{"brandId":141,"name":"Oriocx"},{"brandId":142,"name":"Osprey"},{"brandId":143,"name":"Ortovox"},{"brandId":144,"name":"Optimus"},{"brandId":145,"name":"OUNCE 遨游仕"},{"brandId":146,"name":"OZARK 奧索卡"},{"brandId":147,"name":"OverBoard"},{"brandId":148,"name":"Petzl"},{"brandId":149,"name":"Peak Performance"},{"brandId":150,"name":"Patagonia"},{"brandId":151,"name":"Prana"},{"brandId":152,"name":"Platypus"},{"brandId":153,"name":"PaaGo WORKS"},{"brandId":154,"name":"PackTowl"},{"brandId":155,"name":"Phenix"},{"brandId":156,"name":"Regatta"},{"brandId":157,"name":"Raidlight"},{"brandId":158,"name":"Rab"},{"brandId":159,"name":"REI"},{"brandId":160,"name":"Royal Robbins"},{"brandId":161,"name":"ROCKLAND"},{"brandId":162,"name":"RHINO 犀牛"},{"brandId":163,"name":"Salomon"},{"brandId":164,"name":"Salewa"},{"brandId":165,"name":"Sea To Summit"},{"brandId":166,"name":"Smartwool"},{"brandId":167,"name":"Sphere-pro"},{"brandId":168,"name":"Scarpa"},{"brandId":169,"name":"Snow Peak"},{"brandId":170,"name":"SealLine"},{"brandId":171,"name":"Sierra Designs"},{"brandId":172,"name":"Sealskinz"},{"brandId":173,"name":"Saucony"},{"brandId":174,"name":"Sockwell"},{"brandId":175,"name":"Sherpa Adventure Gear"},{"brandId":176,"name":"Showers Pass"},{"brandId":177,"name":"SUNREI 山力士"},{"brandId":178,"name":"三峰"},{"brandId":179,"name":"Stanley"},{"brandId":180,"name":"STRONG OXYGEN"},{"brandId":181,"name":"The North Face"},{"brandId":182,"name":"Trangoworld"},{"brandId":183,"name":"Ternua"},{"brandId":184,"name":"Trespass"},{"brandId":185,"name":"Tatonka"},{"brandId":186,"name":"Therm-ic"},{"brandId":187,"name":"Teva"},{"brandId":188,"name":"Trezeta"},{"brandId":189,"name":"Treksta"},{"brandId":190,"name":"Tecnica"},{"brandId":191,"name":"Therm-a-Rest"},{"brandId":192,"name":"Tierra"},{"brandId":193,"name":"台灣 100MOUNTAIN"},{"brandId":194,"name":"TOREAD 探路者"},{"brandId":195,"name":"THE FREE SPIRITS 自由之魂"},{"brandId":196,"name":"UYN"},{"brandId":197,"name":"Ultimate Direction"},{"brandId":198,"name":"Under Armour"},{"brandId":199,"name":"VAUDE"},{"brandId":200,"name":"Vasque"},{"brandId":201,"name":"Wildcountry"},{"brandId":202,"name":"Western Mountaineering"},{"brandId":203,"name":"X-BIONIC"},{"brandId":204,"name":"X-SOCKS"},{"brandId":205,"name":"Zamberlan"}],"message":null}]
  })

  mock.onGet('/kon/api/PublishedEqpt').reply(() => {
    return [200, {"status":200,"data":{"count":13,"eqptList":[{"publishedEqptId":13,"brandName":"adidas","publishedEqptName":"發布發布","pictureUrls":[],"characteristics":["輕量化","CP 值高"],"reviewCount":1,"averageRate":3,"averageScores":0,"minPrice":3000,"maxPrice":3000,"averagePrice":3000,"createDate":"2022-04-14T03:12:47Z"},{"publishedEqptId":12,"brandName":"Altra","publishedEqptName":"ＲＤ測試上傳一張照片","pictureUrls":[],"characteristics":["輕量化","CP 值高"],"reviewCount":1,"averageRate":4,"averageScores":0,"minPrice":200,"maxPrice":200,"averagePrice":200,"createDate":"2022-04-05T14:57:17Z"},{"publishedEqptId":11,"brandName":"Aku","publishedEqptName":"here","pictureUrls":[],"characteristics":["輕量化"],"reviewCount":1,"averageRate":5,"averageScores":0,"minPrice":100,"maxPrice":100,"averagePrice":100,"createDate":"2022-04-05T14:56:00Z"},{"publishedEqptId":10,"brandName":"adidas","publishedEqptName":"etest","pictureUrls":[],"characteristics":["輕量化","CP 值高"],"reviewCount":1,"averageRate":4,"averageScores":0,"minPrice":100,"maxPrice":100,"averagePrice":100,"createDate":"2022-04-05T14:52:19Z"},{"publishedEqptId":9,"brandName":"adidas","publishedEqptName":"123test","pictureUrls":[],"characteristics":[],"reviewCount":1,"averageRate":5,"averageScores":0,"minPrice":11000,"maxPrice":11000,"averagePrice":11000,"createDate":"2022-04-05T14:51:28Z"},{"publishedEqptId":8,"brandName":"Arc'teryx","publishedEqptName":"1","pictureUrls":["/meqpt-assets/2022-2/82930465-657d-4464-ba3c-57cd38d12729.png"],"characteristics":[],"reviewCount":1,"averageRate":3,"averageScores":0,"minPrice":1,"maxPrice":1,"averagePrice":1,"createDate":"2022-02-10T14:03:03Z"},{"publishedEqptId":7,"brandName":"Rab","publishedEqptName":"輕量保暖化纖連帽外套","pictureUrls":["/meqpt-assets/2022-2/b612be46-b4e5-4865-9711-d8f4f5f5b94e.jpeg"],"characteristics":["輕量化","百岳適用","防寒保暖"],"reviewCount":1,"averageRate":4,"averageScores":0,"minPrice":6000,"maxPrice":6000,"averagePrice":6000,"createDate":"2022-02-06T09:13:06Z"},{"publishedEqptId":6,"brandName":"HANCHOR","publishedEqptName":"Hanchor Marl 51L","pictureUrls":["/meqpt-assets/2022-1/90c9569c-e904-4955-a721-a7ea9e843470.jpeg"],"characteristics":["輕量化","百岳適用","郊山適用","易收納壓縮","耐磨性好"],"reviewCount":1,"averageRate":4,"averageScores":0,"minPrice":7990,"maxPrice":7990,"averagePrice":7990,"createDate":"2022-01-30T04:25:07Z"},{"publishedEqptId":5,"brandName":"Salomon","publishedEqptName":"Salomon X ULTRA 4 GTX 輕量防水登山鞋","pictureUrls":["/meqpt-assets/2022-1/72fafdda-7859-4481-8707-9517ca026fef.jpeg"],"characteristics":["百岳適用","郊山適用","耐磨性好","抓地力強"],"reviewCount":1,"averageRate":4,"averageScores":0,"minPrice":5980,"maxPrice":5980,"averagePrice":5980,"createDate":"2022-01-30T04:15:48Z"},{"publishedEqptId":4,"brandName":"Mountain Hardwear","publishedEqptName":"Mountain Hardwear DynoStryke 防風雨衣","pictureUrls":["/meqpt-assets/2022-1/c4bf7b35-53b4-4319-ae87-cf32fbd8a2c4.jpeg"],"characteristics":["百岳適用","耐磨性好","透氣易乾","防風防水","阻絕性好"],"reviewCount":1,"averageRate":4,"averageScores":0,"minPrice":2400,"maxPrice":2400,"averagePrice":2400,"createDate":"2022-01-30T04:07:58Z"},{"publishedEqptId":3,"brandName":"Decathlon 迪卡儂","publishedEqptName":"QUECHUA 男款登山健行 2000mm 防水透氣外套","pictureUrls":["/meqpt-assets/2022-1/2d571654-49be-4466-aac6-a1b73a395df7.jpeg"],"characteristics":["CP 值高","百岳適用","郊山適用","耐磨性好","防風防水"],"reviewCount":1,"averageRate":4,"averageScores":0,"minPrice":499,"maxPrice":499,"averagePrice":499,"createDate":"2022-01-30T03:51:14Z"},{"publishedEqptId":2,"brandName":"Chinook","publishedEqptName":"Chinook STRETCH S500","pictureUrls":["/meqpt-assets/2022-1/3c3f51d9-17b3-4a68-b628-c26540c42543.jpeg"],"characteristics":["CP 值高","百岳適用","易收納壓縮","防寒保暖","延展性好"],"reviewCount":1,"averageRate":5,"averageScores":0,"minPrice":7650,"maxPrice":7650,"averagePrice":7650,"createDate":"2022-01-30T03:41:30Z"},{"publishedEqptId":1,"brandName":"Mountain Hardwear","publishedEqptName":"Mountain Hardwear 防潑水連帽化纖外套","pictureUrls":["/meqpt-assets/2022-1/0a9960c9-0cc2-418a-9361-43284916e574.jpeg"],"characteristics":["百岳適用","易收納壓縮","防寒保暖","防風防水","阻絕性好"],"reviewCount":1,"averageRate":5,"averageScores":0,"minPrice":6480,"maxPrice":6480,"averagePrice":6480,"createDate":"2022-01-30T03:14:11Z"}]},"message":null}]
  })

  // mock.onAny().passThrough();

  return {
    mock
  }
}