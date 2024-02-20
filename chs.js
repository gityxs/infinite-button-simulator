/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Default Save": "默认存档",
    "Delete": "删除",
    "No": "否",
    "Saves": "存档",
    "Options": "选项",
    "Yes": "是",
    "Are you sure?": "你确定吗？",
    "Edit Name": "编辑名称",
    "Info": "信息",
    "Currently:": "当前:",
    "Appearance": "外观",
    "How the game looks.": "游戏看起来如何。",
    "Theme": "主题",
    "Show milestones": "显示里程碑",
    "Show TPS meter at the bottom-left corner of the page.": "在页面左下角显示 TPS。",
    "Show TPS": "显示 TPS",
    "None": "无",
    "Align modifier units": "对齐概览单位",
    "Align numbers to the beginning of the unit in modifier view.": "在概览视图中将数字与单元的开头对齐。",
    "Select which milestones to display based on criterias.": "根据标准选择要显示的里程碑。",
    "All": "全部",
    "Classic": "经典",
    "Configurable": "可配置",
    "Duplicate": "复制",
    "Mute": "静音",
    "Unmute": "播放",
    "Automation": "自动化",
    "Buttons": "按钮",
    "Runes": "符文",
    "Money": "金钱",
    "Sigils": "印记",
    "Tokens": "代币",
    "Collapse": "折叠",
    "About": "关于",
    "Aesthetics": "美学",
    "all those button simulator games on Roblox": "Roblox 上所有这些按钮模拟器游戏",
    "Alternatively, paste your save data into the box for the \"Import Save\" option to appear.": "或者，将保存的数据粘贴到框中以显示“导入保存”选项。",
    "Always use scientific notation even on supported numbers.": "即使对于支持的数字也始终使用科学记数法。",
    "as well as": "也",
    "Auto-Save": "自动保存",
    "Bought Unlocks": "购买解锁",
    "Check out my homepage!": "看看我的主页！",
    "Copy summary": "复制摘要",
    "Data Manipulation": "数据处理",
    "Delete Save": "删除 保存",
    "Display": "展示",
    "Export to Clipboard": "导出到剪贴板",
    "Export to File": "导出到文件",
    "Force Scientific Notation": "强制科学计数法",
    "Formatting": "格式化",
    "Game Saved": "游戏已保存",
    "Gameplay": "游戏玩法",
    "Hard Reset": "硬重置",
    "How often the game logic updates. Larger values may cause performance issues. \"Auto\" uses your browser's preferred update rate.": "游戏逻辑更新的频率。 较大的值可能会导致性能问题。 “自动”使用浏览器的首选更新率。",
    "If you're feeling extremely donatey, feel free to send money to": "如果您非常愿意捐款，请随时汇款至",
    "Import / Export Save": "导入/导出保存",
    "Import from Clipboard": "从剪贴板导入",
    "Import from File": "从文件导入",
    "Import Save": "导入保存",
    "Infinite Button Simulator": "无限按钮模拟器",
    "Inspired by": "灵感来自",
    "It is now safe to power off this tab.": "现在可以安全地关闭此选项卡的电源。",
    "Made by ducdat0507": "由 ducdat0507 制作",
    "Manual button presses:": "手动按钮按下：",
    "Manual Save": "手动保存",
    "Manually save the game.": "手动保存游戏。",
    "Naruyoko's OmegaNum.js": "Naruyoko 的 OmegaNum.js",
    "Ok": "好的",
    "Perform backup actions with your save file.": "使用您的保存文件执行备份操作。",
    "Persistent Storage": "持久存储",
    "Pixelated Text": "像素化文本",
    "Reinhardt's True Infinity": "莱因哈特的真实无限",
    "Save Game": "保存游戏",
    "Show Changelog": "显示变更日志",
    "Skill level:": "技能等级：",
    "Start all over from the beginning.": "一切从头开始。",
    "Storage": "存储",
    "Storage actions": "存储操作",
    "Storage options": "存储选项",
    "Summary": "概览",
    "The game will save itself every once in a while or when you close this page.": "游戏会每隔一段时间或当您关闭此页面时进行自我保存。",
    "This game uses": "本游戏使用",
    "this PayPal account": "此 PayPal 帐户",
    "This text box below contains your save file. Keep it somewhere safe.": "下面的文本框包含您的保存文件。 将其存放在安全的地方。",
    "Tick Rate": "Tick速率",
    "Time played:": "游玩时间：",
    "to help me make more ambitious projects.": "帮助我制定更雄心勃勃的项目。",
    "Unlock completion:": "解锁完成：",
    "Use pixelated fonts for in-game text. Note: Some text might become blurry due to implementation limitations.": "对游戏内文本使用像素化字体。 注意：由于实现限制，某些文本可能会变得模糊。",
    "Use the browser's persistent storage, which is less prune to browser data eviction. May require additional user confirmation.": "使用浏览器的持久存储，这样可以减少浏览器数据驱逐的影响。 可能需要额外的用户确认。",
    "Unlock Multi": "解锁乘数",
    "Unlock Resets": "解锁重置",
    "Multi": "乘数",
    "Resets": "重置",
    "Unlock X-axis expansion": "解锁 X轴 扩展",
    "Unlock Y-axis expansion": "解锁 Y轴 扩展",
    "Prestige": "声望",
    "Unlock Runes": "解锁符文",
    "Game Exported": "游戏存档已导出",
    "Save exported to clipboard!": "存档已导出到剪贴板！",
    "Mark button numbers": "标记按钮编号",
    "Power": "力量",
    "Buy one": "购买一个",
    "Empty slot": "空槽",
    "Equipped": "已装备",
    "gem generators": "宝石生成器",
    "Gems": "宝石",
    "No rune selected": "未选择符文",
    "Total equipped effects:": "总装备效果：",
    "Unlock Rune merging": "解锁符文合并",
    "Unlock Milestones": "解锁里程碑",
    "Upgrade": "升级",
    "Runes bought:": "购买的符文：",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Scientific": "科学计数法",
    "Standard": "标准",
    "Blind": "盲文",
    "Letters": "字母",
    "Mixed Engineering": "混合工程",
    "Mixed Scientific": "混合科学",
    "Chemistry": "化学",
    "Engineering": "工程符号",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    'i': 'i',
    'I': 'I',
    'II': 'I',
    'III': 'III',
    'IV': 'IV',
    'V': 'V',
    'VI': 'VI',
    'VII': 'VII',
    'VIII': 'VIII',
    'X': 'X',
    'XI': 'XI',
    'XII': 'XII',
    'XIII': 'XIII',
    'XIV': 'XIV',
    'XV': 'XV',
    'XVI': 'XVI',
    'A': 'A',
    'B': 'B',
    'C': 'C',
    'D': 'D',
    'E': 'E',
    'F': 'F',
    'G': 'G',
    'H': 'H',
    'I': 'I',
    'J': 'J',
    'K': 'K',
    'L': 'L',
    'M': 'M',
    'N': 'N',
    'O': 'O',
    'P': 'P',
    'Q': 'Q',
    'R': 'R',
    'S': 'S',
    'T': 'T',
    'U': 'U',
    'V': 'V',
    'W': 'W',
    'X': 'X',
    'Y': 'Y',
    'Z': 'Z',
    '<': '<',
    '<<': '<<',
    '>': '>',
    '>>': '>>',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀，此处可以截取语句开头部分的内容进行汉化
//例如：Coin: 13、Coin: 14、Coin: 15... 这种有相同开头的语句
//可以在这里汉化开头："Coin: ":"金币: "
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": " ",
    " ": " ",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Notation: ": "符号: ",
    "Toggle Music: ": "切换声音: ",
    "Version ": "版本 ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀，此处可以截取语句结尾部分的内容进行汉化
//例如：13 Coin、14 Coin、15 Coin... 这种有相同结尾的语句
//可以在这里汉化结尾：" Coin":" 金币"
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "/sec)": "/秒)",
    "/s": "/秒",
    " Prestige)": " 声望)",
    " Multi)": " 参数)",
    " Money)": " 金钱)",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)y ([\d\.]+)d ([\d\.]+)h$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\$([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^([\d\.]+)\/([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.,]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^\+([\d\.]+) B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+) T$/,
    /^([\d\.]+) Qi$/,
    /^([\d\.]+) Qa$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\$([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+) \/ ([\d\.]+)e([\d\.,]+)$/,
    /^\$([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e\+([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^Gain (.+) Money per second$/, '每秒获得 $1 代币'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) Glyphs$/, '$1 铭文'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^Day ([\d\.,]+)$/, '天数 $1'],
    [/^([\d\.,]+) Multi$/, '$1 乘数'],
    [/^\≥([\d\.,]+) Resets$/, '\≥$1 重置'],
    [/^\≥([\d\.,]+) Multi$/, '\≥$1 乘数'],
    [/^\≥([\d\.,]+) Prestige$/, '\≥$1 声望'],
    [/^\-([\d\.]+) (.+) Gems$/, '\-$1 $2 宝石'],
    [/^\-([\d\.]+) (.+) Multi$/, '\-$1 $2 乘数'],
    [/^\+([\d\.]+) (.+) Multi$/, '\+$1 $2 乘数'],
    [/^\≥([\d\.]+) (.+) Prestige$/, '\≥$1 $2 声望'],
    [/^\≥([\d\.]+) (.+) Resets$/, '\≥$1 $2 重置'],
    [/^\≥([\d\.]+) (.+) Multi$/, '\≥$1 $2 乘数'],
    [/^\≥([\d\.]+) (.+) Prestige$/, '\≥$1 $2 声望'],
    [/^\+([\d\.,]+) Power$/, '\+$1 力量'],
    [/^\+([\d\.,]+) Multi$/, '\+$1 乘数'],
    [/^\+([\d\.,]+) Prestige$/, '\+$1 声望'],
    [/^\+([\d\.,]+) Resets$/, '\+$1 重置'],
    [/^\+Tier ([\d\.,]+) Rune$/, '\+层级 $1 符文'],
    [/^\−([\d\.,]+) Power$/, '\-$1 力量'],
    [/^\−([\d\.,]+) Glyphs$/, '\-$1 铭文'],
    [/^\−([\d\.,]+) Prestige$/, '\-$1 声望'],
    [/^\−([\d\.,]+) Gems$/, '\-$1 宝石'],
    [/^\−([\d\.,]+) Money$/, '\-$1 金钱'],
    [/^\−([\d\.,]+) (.+) Money$/, '\-$1 $2 金钱'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);