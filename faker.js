const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

let storyText = ['今天气温 35 摄氏度，:insertx:出门散步。当走到:inserty:门前时，突然就:insertz:。人们都惊呆了，谷子哥全程目睹但并没有慌，因为:insertx:是一个 140 公斤的帅哥，天气又辣么热。',
    '在一个月黑风高的夜晚，谷子哥在:inserty:上，一个:insertx:占着两个位置还让谷子哥一边去，谷子哥回他：“你之所以占着两个位置，是不是因为你太胖了，怕一张凳子不够坐？”周围的人:insertz:了。',
   '你知道吗？谷子哥在:inserty:工作，有一天他听到牢大对一个呆滞的:insertx:大喊：“你看着像白痴一样，你知道吗？” 谷子哥走到那个:insertx:面前说：“我不知道，但他可知道,于是牢大:insertz:”'
];
let insertX = ['怪兽威利', '大老爹', '圣诞老人','月饼', '恐龙', '机器人', '外星人', '超级英雄', '独角兽', '海盗','谷子哥','牢大'];
let insertY = ['肯德基', '迪士尼乐园', '白宫', '杭电', '埃菲尔铁塔', '长城', '金字塔', '自由女神像', '悉尼歌剧院', '伦敦眼', '罗马斗兽场', '比萨斜塔', '东京塔', '莫斯科红场', '故宫博物院', '卢浮宫', '大英博物馆', '泰姬陵', '白金汉宫', '国会大厦', '五角大楼', '联合国总部', '梵蒂冈城国', '耶路撒冷老城', '麦加朝圣地', '开罗吉萨金字塔群', '雅典卫城', '布达拉宫', '颐和园', '圆明园遗址公园', '天坛公园', '长城脚下的公社', '798艺术区', '上海外滩', '南京路步行街', '北京王府井大街', '香港维多利亚港', '澳门大三巴牌坊', '台北101大楼', '新加坡滨海湾金沙酒店', '吉隆坡双子塔', '曼谷大皇宫', '河内老城区', '胡志明市范五老街', '雅加达国家纪念碑', '马尼拉黎刹公园', '仰光大金塔', '科伦坡独立广场', '新德里印度门', '孟买印度门', '班加罗尔科技园', '伊斯兰堡费萨尔清真寺', '利雅得王国中心大厦', '迪拜帆船酒店', '阿布扎比大清真寺', '多哈珍珠人工岛', '安卡拉城堡', '伊斯坦布尔蓝色清真寺', '第比利斯欧洲广场', '塔什干电视塔和电视塔公园', '阿拉木图升天大教堂', '阿斯塔纳拜特尔克观景塔', '巴黎凯旋门', '柏林勃兰登堡门', '马德里普拉多博物馆', '巴塞罗那圣家族大教堂', '里斯本贝伦塔', '波尔图音乐厅', '罗马许愿池', '佛罗伦萨乌菲齐美术馆', '威尼斯圣马可广场', '米兰大教堂', '都灵埃及博物馆', '维也纳美泉宫动物园', '布拉格查理大桥', '克拉科夫市场广场', '华沙老城广场', '布加勒斯特议会宫', '索非亚亚历山大涅夫斯基大教堂', '斯德哥尔摩市政厅', '奥斯陆市政厅广场', '赫尔辛基参议院广场', '雷克雅未克哈尔格林姆斯教堂', '塔林托姆比亚城堡', '里加自由纪念碑', '维尔纽斯门', '布拉迪斯拉发老城广场', '卢布尔雅那三重桥', '萨拉热窝拉丁桥', '斯科普里马其顿广场', '地拉那斯卡达尔山', '瓦莱塔大港口', '拉巴特哈桑二世清真寺', '卡萨布兰卡哈桑二世清真寺', '阿尔及尔凯鲁万清真寺', '突尼斯迦太基遗址', '开罗解放广场'];
let insertZ = ['自燃了', '在人行道化成了一坨泥', '变成一只鼻涕虫爬走了','在春天里破土而出，长出新芽', '在时间的长河里化为尘埃','在海底变成了一块珊瑚礁','在秋风中变成一堆落叶','看见了自己的内脏','无法扑灭火焰'];

randomize.addEventListener('click', result);

function result() {
  let newStory =randomValueFromArray(storyText);

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);
  newStory = newStory.replace(':insertx:', xItem);
  newStory = newStory.replace(':insertx:', xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('谷子哥', name);
  }

  if(document.getElementById("american").checked) {
    const weight = Math.round(140 * 2.20462) + ' 磅';
    const temperature =  Math.round(35 * 9 / 5 + 32) + ' 华氏度';
    newStory = newStory.replace('35 摄氏度', temperature);
    newStory = newStory.replace('140 公斤', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}