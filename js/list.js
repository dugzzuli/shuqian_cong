/*
 *        0 - 通用学习
 *        1 - 个人博客
 *        2 - 前端学习
 *        3 - java学习
 *        4 - 视频直播
 *        5 - 我的笔记
 *///  链接信息数组 /favicon.ico
var webs = [
        // 通用学习 0 /favicon.ico
        "0@百度一下@images/baidu.ico@http://www.baidu.com/",
        "0@runoob@images/runoob.ico@http://www.runoob.com/",
        "0@w3cschool@images/w3cschool.ico@https://www.w3cschool.cn",
        "0@牛客网@images/nowcoder.png@https://www.nowcoder.com/",
        "0@简书@images/jianshu.ico@https://www.jianshu.com/",
        "0@博客园@images/cnblogs.ico@https://www.cnblogs.com/",
        "0@CSDN@images/csdn.ico@https://www.csdn.net/",
        "0@51CTO@images/51cto.ico@http://www.51cto.com/",
        "0@GitHub@images/github.png@https://github.com/",
        "0@知乎@images/zhihu.ico@https://www.zhihu.com/",
        "0@新浪微博@images/weibo.ico@https://weibo.com/",
        // 学习练习 1 /favicon.ico
        "1@FreeCoCa@images/freecode.ico@https://www.freecodecamp.cn/",
        "1@ProcessOn@images/processon.ico@https://www.processon.com/",
        "1@CODEPEN@images/codepen.ico@https://codepen.io/",
        "1@阿里云大学@images/aliyun.ico@https://edu.aliyun.com/",
        "1@LeetCode@images/leetcode.ico@https://leetcode-cn.com/",
        "1@GITTER@images/gitter.ico@https://gitter.im/",
        "1@CCF CSP@images/ccfcsp.ico@https://www.cspro.org/",
        // 个人博客 2 /favicon.ico
        "2@杨青青@images/yangqq.ico@https://www.yangqq.com/",
        "2@廖雪峰@images/liaoxuefeng.ico@https://www.liaoxuefeng.com/",
        "2@卢松松@images/lusongsong.ico@https://lusongsong.com/",
        "2@张鑫旭@images/zhangxinxu.ico@https://www.zhangxinxu.com/",
        "2@志文工作室@images/lzw.ico@https://lzw.me/",
        "2@杨陈伟@images/chengweiyang.png@http://www.chengweiyang.cn/",
        "2@简单之美@images/shiyanjun.ico@http://shiyanjun.cn/",
        "2@西部牛仔@images/zhenganwen.png@http://zhenganwen.top/",

        // 前端学习 3 /favicon.ico
        "3@ZCOOL站酷@images/zcool.ico@https://www.zcool.com.cn/",
        "3@SSYER素材@images/ssyer.ico@https://www.ssyer.com/",
        "3@在线工具@images/oschina.ico@http://tool.oschina.net/",
        "3@node中文网@images/nodejs.png@http://nodejs.cn/",
        "3@Vue.js@images/vuejs.png@https://cn.vuejs.org/v2/guide/",
        "3@TypeScript@images/tslang.png@https://www.tslang.cn/",
        // 后端学习 4 /favicon.ico
        "4@Linux私房菜@images/vbird.ico@http://linux.vbird.org/",
        "4@TensorFlow@images/tensorfly.ico@http://www.tensorfly.cn/",
        "4@scikit-learn@images/scikit.ico@https://scikit-learn.org/",
        "4@git@images/git-scm.ico@https://git-scm.com/book/zh/v2",
        // 视频直播 5 /favicon.ico
        "5@网易公开课@images/open163.ico@https://open.163.com/",
        "5@网易云课堂@images/study163.ico@https://study.163.com/",
        "5@极客时间@images/geekbang.png@https://time.geekbang.org/",
        "5@腾讯课堂@images/keqq.ico@https://ke.qq.com/",
        "5@学堂在线@images/xuetangx.ico@http://www.xuetangx.com/",
        "5@Coursera@images/coursera.ico@https://www.coursera.org/",
        "5@MOOC中国@images/moocn.ico@http://www.mooc.cn/",
        "5@华文慕课@images/chinesemooc.ico@http://www.chinesemooc.org/",
        "5@中国大学@images/icourse163.png@https://www.icourse163.org/",
        "5@传智播客@images/chuanzhiboke.ico@http://stu.ityxb.com",
        "5@博学谷@images/boxuegu.ico@https://www.boxuegu.com/",
        "5@潭州课堂@images/tanzhou.ico@https://www.shiguangkey.com/",
        "5@万门大学@images/wanmen.png@https://www.wanmen.org/",
        "5@我要自学网@images/51zxw.ico@https://www.51zxw.net/",
        "5@极客学院@images/jikexueyuan.ico@http://www.jikexueyuan.com/",
        "5@汇智网@images/hubwiz.ico@http://www.hubwiz.com/",
        "5@慕课网@images/imooc.ico@https://www.imooc.com/",
        "5@北京尚学堂@images/bjsxt.ico@http://www.bjsxt.com/",
        "5@51CTO学院@images/edu51cto.ico@https://edu.51cto.com/",


        // 放松娱乐 6 /favicon.ico
        "6@AcFun@images/acfun.ico@http://www.acfun.cn/",
        "6@哔哩哔哩@images/bilibili.ico@https://www.bilibili.com/",
        "6@美拍视频@images/meipai.ico@https://www.meipai.com/",
        "6@斗鱼直播@images/douyu.ico@https://www.douyu.com/member/cp/getFansBadgeList",
        "6@嘀哩嘀哩@images/dilidili.ico@http://www.dilidili.name/",
        "6@古诗文网@images/gushiwen.ico@https://www.gushiwen.org/",
        "6@诗词名句@images/shicimingju.ico@http://www.shicimingju.com/",
        "6@句子控@images/juzikong.ico@https://www.juzikong.com/",
        "6@句子迷@images/juzimi.ico@https://www.juzimi.com/",
        "6@经典语录@images/weiweiqi.ico@https://www.weiweiqi.com/",
        "6@自律人生@images/zilvrs.ico@https://www.zilvrs.com/",
        "6@人生意义@images/rsdyy.ico@https://www.rsdyy.com/",
        "6@豆瓣官网@images/douban.ico@https://www.douban.com/",
        "6@电影天堂@images/dytt8.ico@https://www.dytt8.net/",
        "6@美剧天堂@images/meijutt.ico@https://www.meijutt.com/",
        "6@爱奇艺@images/iqiyi.ico@http://www.iqiyi.com/",
        "6@优酷视频@images/youku.ico@https://movie.youku.com/",
        "6@暴风视频@images/baofeng.ico@http://www.baofeng.com/",
        "6@腾讯视频@images/siqq.ico@https://v.qq.com/",

        // 日常用品 7 /favicon.ico
        "7@淘宝网@images/taobao.ico@https://www.taobao.com/",
        "7@当当网@images/dangdang.ico@http://www.dangdang.com/",
        "7@京东网@images/jd.ico@https://www.jd.com/",
        "7@孔夫子网@images/kongfz.ico@http://www.kongfz.com/",
        "7@亚马逊网@images/amazon.ico@https://www.amazon.cn/",
        ];
