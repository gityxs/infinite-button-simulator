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
    "Collapse": "坍缩",
    "About": "关于",
    "Aesthetics": "美学",
    "all those button simulator games on Roblox": "Roblox 上所有这些按钮模拟器游戏",
    "Alternatively, paste your save data into the box for the \"Import Save\" option to appear.": "或者，将保存的数据粘贴到框中以显示“导入存档”选项。",
    "Always use scientific notation even on supported numbers.": "即使对于支持的数字也始终使用科学记数法。",
    "as well as": "也",
    "Auto-Save": "自动保存",
    "Bought Unlocks": "购买解锁",
    "Check out my homepage!": "看看我的主页！",
    "Copy summary": "复制概览",
    "Data Manipulation": "数据处理",
    "Delete Save": "删除 保存",
    "Display": "显示",
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
    "Import Save": "导入存档",
    "Infinite Button Simulator": "无限按钮模拟器",
    "Inspired by": "灵感来自",
    "It is now safe to power off this tab.": "现在可以安全地关闭此选项卡的电源。",
    "Made by ducdat0507": "由 ducdat0507 制作",
    "Manual button presses:": "手动按钮点击：",
    "Manual Save": "手动保存",
    "Manually save the game.": "手动保存游戏。",
    "Naruyoko's OmegaNum.js": "Naruyoko 的 OmegaNum.js",
    "Ok": "好的",
    "Perform backup actions with your save file.": "使用您的保存文件执行备份操作。",
    "Persistent Storage": "持久存储",
    "Pixelated Text": "像素化文本",
    "Reinhardt's True Infinity": "莱因哈特的真实无限",
    "Save Game": "保存游戏",
    "Show Changelog": "显示更新日志",
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
    "Common": "普通",
    "Uncommon": "罕见",
    "Back": "返回",
    "Equip": "装备",
    "Scrap": "销毁",
    "Unequip": "取下",
    "Rune equipped effects:": "符文装备效果：",
    "Max equipped": "装备已达上限",
    "Rare": "稀有",
    "Epic": "史诗",
    "Unlock Automation": "解锁自动化",
    "Legendary": "传说",
    "Ascension": "转生",
    "Unlock Tokens": "解锁代币",
    "Reach": "达到",
    "Reach level": "达到等级",
    "Ascension button for": "转生按钮获得",
    "Multi button for": "乘数按钮获得",
    "Transcension button for": "超越按钮获得",
    "Power button for": "力量按钮获得",
    "Rebirths button for": "重生按钮获得",
    "Divinity button for": "神性按钮获得",
    "Hyperity button for": "超性按钮获得",
    "Supremity button for": "至高无上按钮获得",
    "Resets button for": "重置按钮获得",
    "milestones for": "里程碑获得",
    "times for": "次获得",
    "Prestige button for": "声望按钮获得",
    "Press Hyperity buttons": "点击 超性 按钮",
    "Press Supremity buttons": "点击 至高无上 按钮",
    "Press Divinity buttons": "点击 神性 按钮",
    "Press Transcension buttons": "点击 超越 按钮",
    "Press Rebirths buttons": "点击 重生 按钮",
    "Press Ascension buttons": "点击 转生 按钮",
    "Press Multi buttons": "点击 乘数 按钮",
    "Press Power buttons": "点击 力量 按钮",
    "Press Prestige buttons": "点击 声望 按钮",
    "Press Resets buttons": "点击 重置 按钮",
    "manual button presses for": "手动按钮点击获得",
    "Make": "达成",
    "hours of playtime for": "小时游戏时长获得",
    "Complete": "完成",
    "all Power gains": "所有 力量 增益",
    "all Ascension gains": "所有 转生 增益",
    "all Money gains": "所有 金钱 增益",
    "all Collapse Point gains": "所有 坍缩点数 增益",
    "all Gem gains": "所有 宝石 增益",
    "all Gems gains": "所有 宝石 增益",
    "all Glyph gains": "所有 铭文 增益",
    "all Rebirths gains": "所有 重生 增益",
    "all Supremity gains": "所有 至高无上 增益",
    "all Transcension gains": "所有 超越 增益",
    "all Token gains": "所有 代币 增益",
    "all Hyperity gains": "所有 超性 增益",
    "all Divinity gains": "所有 神性 增益",
    "all Charge gains": "所有 充能 增益",
    "all Multi gains": "所有 乘数 增益",
    "all Prestige gains": "所有 声望 增益",
    "all Resets gains": "所有 重置 增益",
    "above milestone's effect": "之前的里程碑效果",
    "above milestones' effect": "之前的里程碑效果",
    "all above milestones' effect": "所有之前的里程碑效果",
    "Merge": "合并",
    "Cancel": "取消",
    "Unlock Bulk scraping": "解锁批量销毁",
    "Rune merging": "符文合并",
    "Select 5 runes of the same tier, rarity and strength to merge into a new similar tier and rarity rune of higher strength.": "选择5个等级、稀有度和强度相同的符文，合并为一个新的类似等级和稀有度更高强度的符文。",
    "Select runes to scrap, then press the \"Scrap\" button to scrap them all at once.": "选择要销毁的符文，然后按“销毁”按钮一次全部销毁。",
    "Also override options with those from imported save": "还使用导入存档中的选项覆盖选项",
    "Import Save?": "导入存档？",
    "Do you want to import this save? This will overwrite the current save!": "是否要导入此存档？这将覆盖当前进度！",
    "+ base Glyph gain": "+ 基础 铭文 增益",
    "+ base Token gain": "+ 基础 代币 增益",
    "+ base Gem gain": "+ 基础 宝石 增益",
    "+ base Charge gain": "+ 基础 充能 增益",
    "Supreme": "至尊",
    "Supremity": "至高无上",
    "Token Doublers": "代币倍增器",
    "Total sigil effects": "总计印记效果",
    "Token gain from charges": "来自充能的代币增益",
    "Transcension": "超越",
    "Uncommon Sigil": "罕见印记",
    "Unlock Abstract": "解锁大充能",
    "Unlock Collapse": "解锁坍缩",
    "Unlock Sigil": "解锁印记",
    "Unlock Sigil Automator": "解锁印记自动器",
    "Unlock Rune effect shop": "解锁符文效果商店",
    "Unlock Rune upgrades": "解锁符文升级",
    "Unlock Charger odometer": "解锁充电器里程表",
    "Unlock Reset Automator": "解锁重置自动器",
    "Unlock Wide Charges": "解锁宽充能",
    "Unlock Big Charges": "解锁大充能",
    "Unlock Automator controller": "解锁自动器控制器",
    "Unlock Automator configs": "解锁自动器配置",
    "Automators": "自动器",
    "Automators inactive": "自动器非活跃",
    "average charge distance": "平均充能距离",
    "Charge": "充能",
    "button tier to Token multi": "按钮层级到代币乘数",
    "button Token chance": "按钮代币几率",
    "Charge blocks collected:": "收集的充能块",
    "Charge/automator upgrades": "充能/自动器升级",
    "Charge/charge in charger": "充能/在充能器中充能",
    "Legendary Sigil": "传说印记",
    "Rare Sigil": "稀有印记",
    "Common Sigil": "普通印记",
    "Epic Sigil": "史诗印记",
    "Forge a sigil": "重铸一个印记",
    "Inactive": "非激活",
    "Keep Automation": "保留自动化",
    "Keep Tokens": "保留代币",
    "Keep Sigils": "保留印记",
    "Keep Runes": "保留符文",
    "max charge block height": "最大充能块高度",
    "Mythical": "神话",
    "on Collapse resets": "当坍缩重置时",
    "Rebirths": "重生",
    "Rune Upgrades": "符文升级",
    "Rune Effects": "符文效果",
    "Sigil Automator": "印记自动器",
    "Sigil Points": "印记点数",
    "Sigils forged:": "重铸的印记：",
    "Collapsium": "坍缩币",
    "Collapse Points": "坍缩点数",
    "Charges give Tokens": "充能给予代币",
    "Charger distance travelled:": "充电器行驶距离：",
    "Unlock Sigils": "解锁印记",
    "Glyphs": "铭文",
    "effective gem generators": "有效的宝石生成器",
    "effective generator upgrades": "有效的生成器升级",
    "Multiplier Automator": "乘数自动器",
    "Reset Automator": "重置自动器",
    "Divinity": "神性",
    "Hyperity": "超性",
    "Confirmations": "确认",
    "Show a confirmation dialog whenever I do the following things:": "每当我执行以下操作时都会显示确认对话框：",
    "Unique": "独特",
    "Bought": "已购买",
    "Hypothetical Sigil": "假设印记",
    "Unique Sigil": "独特印记",
    "Supreme Sigil": "至尊印记",
    "Mythical Sigil": "神话印记",
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
    "Mpx": "Mpx",
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
    "(Skill level ": "(技能等级 ",
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
    " Gems)": " 宝石)",
    " Power)": " 力量)",
    " Sigil Points)": " 印记点数)",
    " Charge)": " 充能)",
    " Glyphs)": " 铭文)",
    " Tokens)": " 代币)",
    " Ascension)": " 转生)",
    " Multi)": " 乘数)",
    " Money)": " 金钱)",
    " | Plus": " | +",
    " | Big": " | 大",
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
    /^(.+)力量$/,
    /^(.+)重生$/,
    /^(.+)超越$/,
    /^(.+)至高无上$/,
    /^(.+)超性$/,
    /^(.+)神性$/,
    /^(.+)宝石$/,
    /^(.+)金钱$/,
    /^(.+)充能$/,
    /^(.+)重置$/,
    /^(.+)乘数$/,
    /^(.+)转生$/,
    /^(.+)代币$/,
    /^(.+)声望$/,
    /^(.+)符文$/,
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
    /^([\d\.]+) Sp$/,
    /^([\d\.]+) DT$/,
    /^([\d\.]+) Oc$/,
    /^([\d\.]+) UD$/,
    /^([\d\.]+) No$/,
    /^([\d\.]+) De$/,
    /^([\d\.]+) QaD$/,
    /^([\d\.]+) SxD$/,
    /^([\d\.]+) Tg$/,
    /^([\d\.]+) SxV$/,
    /^\+([\d\.]+) QaD$/,
    /^\+([\d\.]+) DT$/,
    /^\+([\d\.]+) UD$/,
    /^([\d\.]+) TD$/,
    /^([\d\.]+) DD$/,
    /^([\d\.]+) Sx$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^×([\d\.]+) NoD$/,
    /^×([\d\.]+) B$/,
    /^×([\d\.]+) T$/,
    /^×([\d\.]+) Qi$/,
    /^×([\d\.]+) UD$/,
    /^×([\d\.]+) UT$/,
    /^([\d\.,]+)$/,
    /^×([\d\.,]+)$/,
    /^\$([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^×([\d\.]+)e([\d\.,]+)$/,
    /^\+([\d\.]+)e([\d\.,]+)$/,
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
    [/^(.+) chance → (.+) chance$/, '$1 几率 → $2 几率'],
    [/^(.+) until no charge$/, '$1 直到不充能'],
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
    [/^\−([\d\.]+)e([\d\.,]+) Money$/, '\−$1e$2 金钱'],
    [/^\−([\d\.]+)e([\d\.,]+) Gems$/, '\−$1e$2 宝石'],
    [/^\−([\d\.]+)e([\d\.,]+) Collapse Pts.$/, '\−$1e$2 坍缩点数'],
    [/^\+([\d\.]+)e([\d\.,]+) Supremity$/, '\+$1e$2 至高无上'],
    [/^\+([\d\.]+)e([\d\.,]+) Rebirths$/, '\+$1e$2 重生'],
    [/^\+([\d\.]+)e([\d\.,]+) Power$/, '\+$1e$2 力量'],
    [/^\+([\d\.]+)e([\d\.,]+) Divinity$/, '\+$1e$2 神性'],
    [/^\+([\d\.]+)e([\d\.,]+) Transcension$/, '\+$1e$2 超越'],
    [/^\+([\d\.]+)e([\d\.,]+) Prestige$/, '\+$1e$2 声望'],
    [/^\+([\d\.]+)e([\d\.,]+) Ascension$/, '\+$1e$2 转生'],
    [/^\+([\d\.]+)e([\d\.,]+) Money$/, '\+$1e$2 金钱'],
    [/^\+([\d\.]+)e([\d\.,]+) Multi$/, '\+$1e$2 乘数'],
    [/^\+([\d\.]+)e([\d\.,]+) Resets$/, '\+$1e$2 重置'],
    [/^\≥([\d\.]+)e([\d\.,]+) Rebirths$/, '\≥$1e$2 重生'],
    [/^\≥([\d\.]+)e([\d\.,]+) Supremity$/, '\≥$1e$2 至高无上'],
    [/^\≥([\d\.]+)e([\d\.,]+) Transcension$/, '\≥$1e$2 超越'],
    [/^\≥([\d\.]+)e([\d\.,]+) Divinity$/, '\≥$1e$2 神性'],
    [/^\≥([\d\.]+)e([\d\.,]+) Ascension$/, '\≥$1e$2 转生'],
    [/^\≥([\d\.]+)e([\d\.,]+) Power$/, '\≥$1e$2 力量'],
    [/^\≥([\d\.]+)e([\d\.,]+) Money$/, '\≥$1e$2 金钱'],
    [/^\≥([\d\.]+)e([\d\.,]+) Prestige$/, '\≥$1e$2 声望'],
    [/^\≥([\d\.]+)e([\d\.,]+) Multi$/, '\≥$1e$2 乘数'],
    [/^\≥([\d\.]+)e([\d\.,]+) Resets$/, '\≥$1e$2 重置'],
    [/^([\d\.,]+) Glyphs$/, '$1 铭文'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^Requires Skill level ([\d\.,]+)$/, '需要技能等级 $1'],
    [/^Skill level ([\d\.,]+)$/, '技能等级 $1'],
    [/^Skill level \≥([\d\.,]+)$/, '技能等级 \≥$1'],
    [/^Day ([\d\.,]+)$/, '天数 $1'],
    [/^([\d\.,]+) Multi$/, '$1 乘数'],
    [/^\≥([\d\.,]+) Resets$/, '\≥$1 重置'],
    [/^\≥([\d\.,]+) Multi$/, '\≥$1 乘数'],
    [/^\≥([\d\.,]+) Power$/, '\≥$1 力量'],
    [/^\≥([\d\.,]+) Prestige$/, '\≥$1 声望'],
    [/^\≥([\d\.,]+) Ascension$/, '\≥$1 转生'],
    [/^\≥([\d\.,]+) Divinity$/, '\≥$1 神性'],
    [/^\≥([\d\.,]+) Hyperity$/, '\≥$1 超性'],
    [/^\≥([\d\.,]+) Supremity$/, '\≥$1 至高无上'],
    [/^×(.+) consumption factor$/, '×$1 消耗系数'],
    [/^×(.+) Money gain$/, '×$1 金钱增益'],
    [/^×(.+) all Transcension gains$/, '×$1 所有 超越 增益'],
    [/^×(.+) all Divinity gains$/, '×$1 所有 神性 增益'],
    [/^×(.+) all Rebirths gains$/, '×$1 所有 重生 增益'],
    [/^×(.+) all Prestige gains$/, '×$1 所有 声望 增益'],
    [/^×(.+) all Power gains$/, '×$1 所有 力量 增益'],
    [/^×(.+) all Multi gains$/, '×$1 所有 乘数 增益'],
    [/^×(.+) all Ascension gains$/, '×$1 所有 转生 增益'],
    [/^×(.+) all Resets gains$/, '×$1 所有 重置 增益'],
    [/^\−([\d\.]+) (.+) Gems$/, '\−$1 $2 宝石'],
    [/^\-([\d\.]+) (.+) Collapse Pts.$/, '\-$1 $2 坍缩点数'],
    [/^\-([\d\.]+) (.+) Charge$/, '\-$1 $2 充能'],
    [/^\-([\d\.]+) (.+) Multi$/, '\-$1 $2 乘数'],
    [/^\+([\d\.]+) (.+) Multi$/, '\+$1 $2 乘数'],
    [/^\+([\d\.]+) (.+) Resets$/, '\+$1 $2 重置'],
    [/^\+([\d\.]+) (.+) Transcension$/, '\+$1 $2 超越'],
    [/^\+([\d\.]+) (.+) Divinity$/, '\+$1 $2 神性'],
    [/^\+([\d\.]+) (.+) Prestige$/, '\+$1 $2 声望'],
    [/^\+([\d\.]+) (.+) Power$/, '\+$1 $2 力量'],
    [/^\+([\d\.]+) base Token gain$/, '\+$1 基础 代币 增益'],
    [/^\+([\d\.]+) base Charge gain$/, '\+$1 基础 充能 增益'],
    [/^\+([\d\.]+) base Gem gain$/, '\+$1 基础 宝石 增益'],
    [/^\+([\d\.]+) base Glyph gain$/, '\+$1 基础 铭文 增益'],
    [/^\+([\d\.]+) in ([\d\.]+)s$/, '\+$1 剩余 $2秒'],
    [/^\+([\d\.]+) (.+) Rebirths$/, '\+$1 $2 重生'],
    [/^\+([\d\.]+) (.+) Supremity$/, '\+$1 $2 至高无上'],
    [/^\+([\d\.]+) (.+) Ascension$/, '\+$1 $2 转生'],
    [/^\≥([\d\.]+) (.+) Power$/, '\≥$1 $2 力量'],
    [/^\≥([\d\.]+) (.+) Prestige$/, '\≥$1 $2 声望'],
    [/^\≥([\d\.]+) (.+) Divinity$/, '\≥$1 $2 神性'],
    [/^\≥([\d\.]+) (.+) Ascension$/, '\≥$1 $2 转生'],
    [/^\≥([\d\.]+) (.+) Rebirths$/, '\≥$1 $2 重生'],
    [/^\≥([\d\.]+) (.+) Supremity$/, '\≥$1 $2 至高无上'],
    [/^\≥([\d\.]+) (.+) Transcension$/, '\≥$1 $2 超越'],
    [/^\≥([\d\.]+) (.+) Resets$/, '\≥$1 $2 重置'],
    [/^\≥([\d\.]+) (.+) Multi$/, '\≥$1 $2 乘数'],
    [/^\≥([\d\.]+) (.+) Prestige$/, '\≥$1 $2 声望'],
    [/^\+([\d\.,]+) Scraps$/, '\+$1 销毁'],
    [/^\+([\d\.,]+) Rebirths$/, '\+$1 重生'],
    [/^\+([\d\.,]+) Power$/, '\+$1 力量'],
    [/^\+([\d\.,]+) Ascension$/, '\+$1 转生'],
    [/^\+([\d\.,]+) Transcension$/, '\+$1 超越'],
    [/^\+([\d\.,]+) Multi$/, '\+$1 乘数'],
    [/^\+([\d\.,]+) Hyperity$/, '\+$1 超性'],
    [/^\+([\d\.,]+) Collapsium$/, '\+$1 坍缩币'],
    [/^\+([\d\.,]+) Prestige$/, '\+$1 声望'],
    [/^\+([\d\.,]+) Divinity$/, '\+$1 神性'],
    [/^\+([\d\.,]+) Glyphs$/, '\+$1 铭文'],
    [/^\+([\d\.,]+) Resets$/, '\+$1 重置'],
    [/^Tier ([\d\.,]+) Rune$/, '层级 $1 符文'],
    [/^\+Tier ([\d\.,]+) Rune$/, '\+层级 $1 符文'],
    [/^\−([\d\.,]+) Ascension$/, '\-$1 转生'],
    [/^\−([\d\.,]+) Collapse Pts.$/, '\-$1 坍缩点数'],
    [/^\−([\d\.,]+) Tokens$/, '\-$1 代币'],
    [/^\−([\d\.,]+) Charge$/, '\-$1 充能'],
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