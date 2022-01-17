<!DOCTYPE html>
<html lang='zh-CN'>
<head>
<title>dist/ecStat.js · yyy/echarts-stat - Gitee.com</title>
<meta content='on' http-equiv='x-dns-prefetch-control'>
<link href='//e.gitee.com' rel='dns-prefetch'>
<link href='//files.gitee.com' rel='dns-prefetch'>
<link href='//toscode.gitee.com' rel='dns-prefetch'>
<link href='https://assets.gitee.com' rel='dns-prefetch'>
<link href='https://portrait.gitee.com' rel='dns-prefetch'>
<link rel="shortcut icon" type="image/vnd.microsoft.icon" href="https://assets.gitee.com/assets/favicon-9007bd527d8a7851c8330e783151df58.ico" />
<link rel="canonical" href="https://gitee.com/yyy0118/echarts-stat" />
<meta content='gitee.com/yyy0118/echarts-stat git https://gitee.com/yyy0118/echarts-stat.git' name='go-import'>
<meta charset='utf-8'>
<meta content='always' name='referrer'>
<meta content='Gitee' property='og:site_name'>
<meta content='Object' property='og:type'>
<meta content='http://gitee.com/yyy0118/echarts-stat/blob/master/dist/ecStat.js' property='og:url'>
<meta content='https://gitee.com/static/images/logo_themecolor.png' itemprop='image' property='og:image'>
<meta content='dist/ecStat.js · yyy/echarts-stat - Gitee.com' itemprop='name' property='og:title'>
<meta content='Statistics tool for ECharts' property='og:description'>
<meta content='码云,Gitee,代码托管,Git,Git@OSC,Gitee.com,开源,内源,项目管理,版本控制,开源代码,代码分享,项目协作,开源项目托管,免费代码托管,Git代码托管,Git托管服务' name='Keywords'>
<meta content='Statistics tool for ECharts' itemprop='description' name='Description'>

<meta content="IE=edge" http-equiv="X-UA-Compatible" />
<meta name="csrf-param" content="authenticity_token" />
<meta name="csrf-token" content="qNf9H7XRH5djS0p7lyy6sm6ku5PFIKdjt2YK0Pu++J3SbVAUfKgQPNFP3hffpAFJV/GK3w//9GBY50eOSr+Kjw==" />

<link rel="stylesheet" media="all" href="https://assets.gitee.com/assets/application-ad93f4f069d8c58db0ef7a0bf227b102.css" />
<script>
//<![CDATA[
window.gon = {};gon.locale="zh-CN";gon.sentry_dsn=null;gon.baidu_register_hm_push=null;gon.sensor={"server_url":"https://haveaniceday.gitee.com:3443/sa?project=production","page_type":"其他"};gon.info={"controller_path":"blob","action_name":"show","current_user":false};gon.tour_env={"current_user":null,"action_name":"show","original_url":"http://gitee.com/yyy0118/echarts-stat/blob/master/dist/ecStat.js","controller_path":"blob"};gon.http_clone="https://gitee.com/yyy0118/echarts-stat.git";gon.user_project="yyy0118/echarts-stat";gon.manage_branch="管理分支";gon.manage_tag="管理标签";gon.enterprise_id=0;gon.create_reaction_path="/yyy0118/echarts-stat/reactions";gon.ref="master";
//]]>
</script>
<script src="https://assets.gitee.com/assets/static/sensor-42ae731632c43f0efd3963709358d23f.js"></script>
<script src="https://assets.gitee.com/assets/static/sentry-5.1.0-a823fb0be1b61c5d7ca4a89f0536cb0a.js"></script>
<script src="https://assets.gitee.com/assets/application-506099ad64076719c66229613a640441.js"></script>
<script src="https://assets.gitee.com/assets/lib/jquery.timeago.zh-CN-4a4818e98c1978d2419ab19fabcba740.js"></script>

<link rel="stylesheet" media="all" href="https://assets.gitee.com/assets/projects/application-4e0cf3ff22c9fd90a6c5bbdd99cb8053.css" />
<script src="https://assets.gitee.com/assets/projects/app-5fcff388bea6d4446bd98fc558d3c7e8.js"></script>

<script src="//res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>
<script>
  var title = document.title.replace(/( - Gitee| - 码云)$/, '')
      imgUrl = '';
  
  document.addEventListener('DOMContentLoaded', function(event) {
    var imgUrlEl = document.querySelector('.readme-box .markdown-body > img, .readme-box .markdown-body :not(a) > img');
    imgUrl = imgUrlEl && imgUrlEl.getAttribute('src');
  
    if (!imgUrl) {
      imgUrlEl = document.querySelector('meta[itemprop=image]');
      imgUrl = imgUrlEl && imgUrlEl.getAttribute('content');
      imgUrl = imgUrl || "https://gitee.com/static/images/logo_themecolor.png";
    }
  
    wx.config({
      debug: false,
      appId: "wxff219d611a159737",
      timestamp: "1640316873",
      nonceStr: "a4dadb8ee6410b3ee2d0ae47786a30df",
      signature: "2202fec88694d3423e00e03abb80e45154872a05",
      jsApiList: [
        'onMenuShareTimeline',
        'onMenuShareAppMessage'
      ]
    });
  
    wx.ready(function () {
      wx.onMenuShareTimeline({
        title: title, // 分享标题
        link: "https://gitee.com/yyy0118/echarts-stat/blob/master/dist/ecStat.js", // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: imgUrl // 分享图标
      });
      wx.onMenuShareAppMessage({
        title: title, // 分享标题
        link: "https://gitee.com/yyy0118/echarts-stat/blob/master/dist/ecStat.js", // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        desc: document.querySelector('meta[name=Description]').getAttribute('content'),
        imgUrl: imgUrl // 分享图标
      });
    });
    wx.error(function(res){
      console.error('err', res)
    });
  })
</script>

<script type='text/x-mathjax-config'>
MathJax.Hub.Config({
  tex2jax: {
    inlineMath: [['$','$'], ['\\(','\\)']],
    displayMath: [["$$","$$"],["\\[","\\]"]],
    processEscapes: true,
    skipTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'],
    ignoreClass: "container|files",
    processClass: "markdown-body"
  }
});
</script>
<script src="https://assets.gitee.com/uploads/resources/MathJax-2.7.2/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>

<script>
  (function () {
    var messages = {
      'zh-CN': {
        addResult: '增加 <b>{term}</b>',
        count: '已选择 {count}',
        maxSelections: '最多 {maxCount} 个选择',
        noResults: '未找到结果',
        serverError: '连接服务器时发生错误'
      },
      'zh-TW': {
        addResult: '增加 <b>{term}</b>',
        count: '已選擇 {count}',
        maxSelections: '最多 {maxCount} 個選擇',
        noResults: '未找到結果',
        serverError: '連接服務器時發生錯誤'
      }
    }
  
    if (messages[gon.locale]) {
      $.fn.dropdown.settings.message = messages[gon.locale]
    }
  }());
</script>

<script>
  var userAgent = navigator.userAgent;
  var isLessIE11 = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1;
  if(isLessIE11){
    var can_access = ""
    if (can_access != "true"){
      window.location.href = "/incompatible.html";
    }
  }
  document.addEventListener("error", function (ev) {
    var elem = ev.target;
    if (elem.tagName.toLowerCase() === 'img') {
      elem.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAAAAACIM/FCAAACh0lEQVR4Ae3ch5W0OgyG4dt/mQJ2xgQPzJoM1m3AbALrxzrf28FzsoP0HykJEEAAAUQTBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEkKK0789+GK/I2ezfQB522PnS1qc8pGgXvr4tE4aY0XOUWlGImThWgyCk6DleixzE7qwBkg/MGiDPlVVAyp1VQGrPKiACDhFI6VkF5LmzCki+sg7IwDoglnVAil0IMkeG9CyUiwsxLFUVFzJJOQaKCjFCDN9RXMjIX7W6ztZXZDKKCyn8sWJvH+nca7WHDN9lROlAliPH9iRKCPI4cswFJQWxB46toLQgQ9jhn5QYZA9DOkoMUoQde5YapAxDWkoNYsOQR3KQd9CxUnIQF4S49CB9ENKlBxmDEKsFUgMCCCCAAHIrSF61f6153Ajy8nyiPr8L5MXnmm4CyT2fzN4DUvHZ+ntA2tOQBRBAAAEEEEAAAQQQ7ZBaC6TwSiDUaYHQ2yuB0MN+ft+43whyrs4rgVCjBUKTFshLC6TUAjGA3AxSaYFYLZBOC2RUAsk8h5qTg9QcbEoOsoQhQ2qQhsO5xCD5dgB5JQaZ+KBKGtKecvR81Ic0ZDjByKdDx0rSEDZ/djQbH+bkIdvfJFm98BfV8hD2zprfVdlu9PxVeyYAkciREohRAplJCaRSAplJCcQogTjSAdlyHRBvSAekJR0QRzogA+mADJkOiCPSAPEtqYBshlRAXC43hxix2QiOuEZkVERykGyNo9idIZKE0HO7XrG6OiMShlDWjstVzdPgXtUH9v0CEidAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQP4HgjZxTpdEii0AAAAASUVORK5CYII=";
    }
  }, true);
</script>
</head>

<body class='git-project lang-zh-CN large'>
<header class='common-header fixed noborder' id='git-header-nav'>
<div class='ui container'>
<div class='ui menu header-menu header-container'>
<div class='git-nav-expand-bar'>
<i class='iconfont icon-mode-table'></i>
</div>
<div class='gitee-nav__sidebar'>
<div class='gitee-nav__sidebar-container'>
<div class='gitee-nav__sidebar-top'>
<div class='gitee-nav__avatar-box'></div>
<div class='gitee-nav__buttons-box'>
<a class="ui button small fluid orange" href="/login">登录</a>
<a class="ui button small fluid basic is-register" href="/signup">注册</a>
</div>
</div>
<div class='gitee-nav__sidebar-middle'>
<div class='gitee-nav__sidebar-list'>
<ul>
<li class='gitee-nav__sidebar-item'>
<a href="/explore"><i class='iconfont icon-ic-discover'></i>
<span class='gitee-nav__sidebar-name'>开源软件</span>
</a></li>
<li class='gitee-nav__sidebar-item'>
<a href="/enterprises"><i class='iconfont icon-ic-enterprise'></i>
<span class='gitee-nav__sidebar-name'>企业版</span>
</a></li>
<li class='gitee-nav__sidebar-item'>
<a href="/education"><i class='iconfont icon-ic-education'></i>
<span class='gitee-nav__sidebar-name'>高校版</span>
</a></li>
<li class='gitee-nav__sidebar-item split-line'></li>
<li class='gitee-nav__sidebar-item'>
<a href="/search"><i class='iconfont icon-ic-search'></i>
<span class='gitee-nav__sidebar-name'>搜索</span>
</a></li>
<li class='gitee-nav__sidebar-item'>
<a href="/help"><i class='iconfont icon-help-circle'></i>
<span class='gitee-nav__sidebar-name'>帮助中心</span>
</a></li>
<li class='gitee-nav__sidebar-item'>
<a href="/terms"><i class='iconfont icon-file'></i>
<span class='gitee-nav__sidebar-name'>使用条款</span>
</a></li>
<li class='gitee-nav__sidebar-item'>
<a href="/about_us"><i class='iconfont icon-issuepx'></i>
<span class='gitee-nav__sidebar-name'>关于我们</span>
</a></li>
</ul>
</div>
</div>
<div class='gitee-nav__sidebar-bottom'>
<div class='gitee-nav__sidebar-close-button'>
<i class='fa fa-angle-double-left'></i>
</div>
</div>
</div>
</div>

<div class='item gitosc-logo'>
<a href="/"><img alt='Gitee — 基于 Git 的代码托管和研发协作平台' class='ui inline image' height='28' src='/static/images/logo.svg?t=158106664' title='Gitee — 基于 Git 的代码托管和研发协作平台' width='95'>
<img alt='Gitee — 基于 Git 的代码托管和研发协作平台' class='ui inline black image' height='28' src='/static/images/logo-black.svg?t=158106664' title='Gitee — 基于 Git 的代码托管和研发协作平台' width='95'>
</a></div>
<a title="开源软件" class="item " href="/explore">开源软件
</a><a title="企业版" class="item " href="/enterprises">企业版
<sup class='ui red label'>
特惠
</sup>
</a><a title="高校版" class="item " href="/education">高校版
</a><a title="私有云" class="item" target="_blank" href="https://gitee.cn?utm_source=giteecom">私有云
</a><a title="博客" class="item" id="gitee-blog" target="_blank" href="https://blog.gitee.com/?utm_sources=site_nav">博客
</a><div class='center responsive-logo'>
<a href="/"><img alt='Gitee — 基于 Git 的代码托管和研发协作平台' class='ui inline image' height='24' src='/static/images/logo.svg?t=158106664' title='Gitee — 基于 Git 的代码托管和研发协作平台' width='85'>
<img alt='Gitee — 基于 Git 的代码托管和研发协作平台' class='ui inline black image' height='24' src='/static/images/logo-black.svg?t=158106664' title='Gitee — 基于 Git 的代码托管和研发协作平台' width='85'>
</a></div>
<div class='right menu userbar right-header' id='git-nav-user-bar'>
<form class="ui item" id="navbar-search-form" data-text-require="搜索关键字不能少于1个" data-text-filter="搜索格式不正确" action="/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
<input type="hidden" name="type" id="navbar-search-type" />
<input type="hidden" name="fork_filter" id="fork_filter" value="on" />
<div class='ui search header-search'>
<input type="text" name="q" id="navbar-search-input" value="" class="prompt" placeholder="搜开源" />
</div>
</form>

<script>
  var can_search_in_repo = 1,
      repo = "VDBSTk5VNVVRWGhPUjBVelRtcE9iV0UzTmpObWE3NjNm",
      reponame = "yyy0118/echarts-stat";
  
  $(function() {
    var $search = $('#navbar-search-form .ui.search');
    $search.search({
      apiSettings: {
        url: '/search/relative_project?q={query}',
        onResponse: function (res) {
          if (res && res.status === 200 && res.data) {
            var query = htmlSafe($search.search('get value'));
  
            res.data.map(function (item) {
              item.path_ns = '/' + item.path_ns;
              item.icon = 'iconfont icon-project-public';
            });
            res.data.unshift({
              name_ns: "在全站搜索 <b class='hl'>" + query +"</b> 相关项目",
              path_ns: '/search?fork_filter=on&q=' + query,
              icon: 'iconfont icon-search'
            });
            return res;
          } else {
            return { data: [] };
          }
        }
      },
      fields: {
        results: 'data',
        description: 'name_ns',
        url: 'path_ns',
        icon: 'icon'
      },
      minCharacters: 1,
      maxResults: 10,
      searchDelay: 250,
      showNoResults: false,
      transition: 'fade'
    });
  });
</script>

<div class='ui item' id='feature-update-notice'>
<div class='notice-update-icon'>
<a class="notice-update-popup click-knowed" title="" href="javascript:void(0)"><img alt="功能更新" title="" class="bubl_icon bubl-off-icon" src="https://assets.gitee.com/assets/bulb_off-24ee940be20998aace89a3f040cbc704.svg" />
<img alt="功能更新" title="" class="bubl_icon bubl-on-icon" src="https://assets.gitee.com/assets/bulb_on-3986b1dc417285398e3d15671bd8f261.svg" />
</a></div>
<div class='feature-update-notice-panel menu'>
<div class='notice-img'>
<img alt="" title="" class="notice-img-show" src="" />
</div>
<div class='notice-update-title'></div>
<div class='notice-update-des'></div>
<div class='notice-btn-list d-flex-between'>
<button name="button" type="button" class="ui basic orange button btn-notice btn-knowed click-knowed" style="margin-right: 0">我知道了</button>
<a class="ui button orange btn-notice btn-details click-knowed" target="_blank" href="">查看详情</a>
</div>
</div>
</div>

<a class="item git-nav-user__login-item" sa_evt="login_show" sa_referrer_url="" sa_referrer_action="站导航右上角-登录按钮" sa_referrer_type="其他" href="/login">登录
</a><a class="item git-nav-user__register-item" sa_evt="register_show" sa_referrer_url="" sa_referrer_action="站导航右上角-注册按钮" sa_referrer_type="其他" href="/signup">注册
</a><script>
  $('.destroy-user-session').on('click', function() {
    $.cookie('access_token', null, { path: '/' });
  })
</script>

</div>
</div>
</div>
</header>
<script>
  Gitee.initNavbar()
  Gitee.initRepoRemoteWay()
  $.cookie('user_locale',null)
</script>

<script>
  var userAgent = navigator.userAgent;
  var isLessIE11 = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1;
  if(isLessIE11){
    var can_access = ""
    if (can_access != "true"){
      window.location.href = "/incompatible.html";
    }
  }
</script>

<div class='fixed-notice-infos'>
<div class='all-messages'>
</div>
<div class='ui container'>
<div class='flash-messages' id='messages-container'></div>
</div>
<script>
  (function() {
    $(function() {
      var $error_box, alertTip, notify_content, notify_options, template;
      template = '<div data-notify="container" class="ui {0} message" role="alert">' + '<i data-notify="dismiss" class="close icon"></i>' + '<span data-notify="message">{2}</span>' + '</div>';
      notify_content = null;
      notify_options = {};
      alertTip = '';
      $error_box = $(".flash_error.flash_error_box");
      if (notify_options.type === 'error' && $error_box.length > 0 && !$.isEmptyObject(notify_content.message)) {
        if (notify_content.message === 'captcha_fail') {
          alertTip = "验证码不正确";
        } else if (notify_content.message === 'captcha_expired') {
          alertTip = "验证码已过期，请点击刷新";
        } else if (notify_content.message === 'not_found_in_database') {
          alertTip = "帐号或者密码错误";
        } else if (notify_content.message === 'not_found_and_show_captcha') {
          alertTip = "帐号或者密码错误";
        } else if (notify_content.message === 'phone_captcha_fail') {
          alertTip = "手机验证码不通过";
        } else {
          alertTip = notify_content.message;
        }
        return $error_box.html(alertTip).show();
      } else if (notify_content) {
        if ("show" === 'third_party_binding') {
          return $('#third_party_binding-message').html(notify_content.message).addClass('ui message red');
        }
        notify_options.delay = 3000;
        notify_options.template = template;
        notify_options.offset = {
          x: 10,
          y: 30
        };
        notify_options.element = '#messages-container';
        return $.notify(notify_content, notify_options);
      }
    });
  
  }).call(this);
</script>

</div>
<script>
  (function() {
    $(function() {
      var setCookie;
      setCookie = function(name, value) {
        $.cookie(name, value, {
          path: '/',
          expires: 365
        });
      };
      $('#remove-bulletin, #remove-bulletin-dashboard').on('click', function() {
        setCookie('remove_bulletin', "gitee-maintain-1640085288");
        $('#git-bulletin').hide();
      });
      $('#remove-member-bulletin').on('click', function() {
        setCookie('remove_member_bulletin', "gitee_member_bulletin");
        $(this).parent().hide();
      });
      return $('#remove-gift-bulletin').on('click', function() {
        setCookie('remove_gift_bulletin', "gitee-gift-bulletin");
        $(this).parent().hide();
      });
    });
  
  }).call(this);
</script>
<script>
  function closeMessageBanner(pthis, type, val) {
    var json = {}
  
    val = typeof val === 'undefined' ? null : val
    $(pthis).parent().remove()
    if (type === 'out_of_enterprise_member') {
      json = {type: type, data: val}
    } else if (type === 'enterprise_overdue') {
      json = {type: type, data: val}
    }
    $.post('/profile/close_flash_tip', json)
  }
</script>

<div class='site-content'>
<div class='git-project-header'>
<div class='fixed-notice-infos'>
<div class='ui info icon floating message green' id='fetch-ok' style='display: none'>
<div class='content'>
<div class='header status-title'>
<i class='info icon status-icon'></i>
代码拉取完成，页面将自动刷新
</div>
</div>
</div>
<div class='ui info icon floating message error' id='fetch-error' style='display: none'>
<div class='content'>
<div class='header status-title'>
<i class='info icon status-icon'></i>
<span class='error_msg'></span>
</div>
</div>
</div>
</div>
<div class='ui container'>

<div class='git-project-header-details'>
<div class='git-project-header-container'>
<div class='git-project-header-actions'>
<div class='ui tiny modal project-donate-modal' id='project-donate-modal'>
<i class='iconfont icon-close close'></i>
<div class='header'>捐赠</div>
<div class='content'>
捐赠前请先登录
</div>
<div class='actions'>
<a class='ui blank button cancel'>取消</a>
<a class='ui orange ok button' href='/login'>前往登录</a>
</div>
</div>
<div class='ui small modal wepay-qrcode'>
<i class='iconfont icon-close close'></i>
<div class='header'>
扫描微信二维码支付
<span class='wepay-cash'></span>
</div>
<div class='content weqcode-center'>
<img id='wepay-qrcode' src=''>
</div>
<div class='actions'>
<div class='ui cancel blank button'>取消</div>
<div class='ui ok orange button'>支付完成</div>
</div>
</div>
<div class='ui mini modal' id='confirm-alipay-modal'>
<div class='header'>支付提示</div>
<div class='content'>
将跳转至支付宝完成支付
</div>
<div class='actions'>
<div class='ui approve orange button'>确定</div>
<div class='ui blank cancel button'>取消</div>
</div>
</div>

<span class='ui buttons basic watch-container'>
<div class='ui dropdown button js-project-watch' data-watch-type='unwatch'>
<input type='hidden' value=''>
<i class='iconfont icon-watch'></i>
<div class='text'>
Watch
</div>
<i class='dropdown icon'></i>
<div class='menu'>
<a data-value="unwatch" class="item" sa_evt="loginInform_show" sa_referrer_url="" sa_referrer_action="Watch" sa_referrer_type="其他" rel="nofollow" data-method="post" href="/yyy0118/echarts-stat/unwatch"><i class='iconfont icon-msg-read'></i>
不关注
</a><a data-value="watching" class="item" sa_evt="loginInform_show" sa_referrer_url="" sa_referrer_action="Watch" sa_referrer_type="其他" rel="nofollow" data-method="post" href="/yyy0118/echarts-stat/watch"><i class='iconfont icon-msg-read'></i>
关注所有动态
</a><a data-value="releases_only" class="disabled item" sa_evt="loginInform_show" sa_referrer_url="" sa_referrer_action="Watch" sa_referrer_type="其他" rel="nofollow" data-method="post" href="/yyy0118/echarts-stat/release_only_watch"><i class='iconfont icon-msg-read'></i>
仅关注版本发行动态
</a><a data-value="ignoring" class="item" sa_evt="loginInform_show" sa_referrer_url="" sa_referrer_action="Watch" sa_referrer_type="其他" rel="nofollow" data-method="post" href="/yyy0118/echarts-stat/ignoring_watch"><i class='iconfont icon-msg-read'></i>
关注但不提醒动态
</a></div>
</div>
<style>
  .js-project-watch .text .iconfont {
    display: none; }
  .js-project-watch a, .js-project-watch a:hover {
    color: #000; }
  .js-project-watch .item > .iconfont {
    visibility: hidden;
    margin-left: -10px; }
  .js-project-watch .selected .iconfont {
    visibility: visible; }
  .js-project-watch .menu {
    margin-top: 4px !important; }
</style>
<script>
  $('.js-project-watch').dropdown({
    action: 'select',
    onChange: function(value, text, $selectedItem) {
      var type = value === 'unwatch' ? 'Watch' : 'Watching';
      $(this).children('.text').text(type);
      $(this).dropdown('set selected', value)
    }
  });
</script>

<a class="ui button action-social-count" title="1" href="/yyy0118/echarts-stat/watchers">1
</a></span>
<span class='basic buttons star-container ui'>
<a class="ui button star" sa_evt="loginInform_show" sa_referrer_url="" sa_referrer_action="Star" sa_referrer_type="其他" href="/login"><i class='iconfont icon-star'></i>
Star
</a><a class="ui button action-social-count " title="1" href="/yyy0118/echarts-stat/stargazers">1
</a></span>
<span class='ui basic buttons fork-container' title='无权 Fork 此仓库'>
<a class="ui button fork" title="你必须登录后才可以fork一个仓库" sa_evt="loginInform_show" sa_referrer_url="" sa_referrer_action="Fork" sa_referrer_type="其他" href="/login"><i class='iconfont icon-fork'></i>
Fork
</a><a class="ui button action-social-count disabled-style" title="1" href="/yyy0118/echarts-stat/members">1
</a></span>
</div>
<h2 class='git-project-title mt-0 mb-0'>
<span class="project-title"><i class="project-icon iconfont icon-project-public" title="这是一个公开仓库"></i> <a title="yyy" class="author" href="/yyy0118">yyy</a> / <a title="echarts-stat" class="repository" target="" style="padding-bottom: 0px; margin-right: 4px" sa_evt="repoClick" sa_location="其他" sa_url="" sa_repo_id="8395014" href="/yyy0118/echarts-stat">echarts-stat</a></span><span class="project-badges"><style>
  .gitee-modal {
    width: 500px !important; }
</style>
</span>
<input type="hidden" name="project_title" id="project_title" value="yyy/echarts-stat" />
</h2>
</div>
</div>
</div>
<script>
  var title_import_url = "https://github.com/yyy0118/echarts-stat.git";
  var title_post_url = "/yyy0118/echarts-stat/update_import";
  var title_fork_url = "/yyy0118/echarts-stat/sync_fork";
  var title_project_path = "echarts-stat";
  var title_p_name = "echarts-stat";
  var title_p_id= "8395014";
  var title_description = "Statistics tool for ECharts";
  var title_form_authenticity_token = "ltbjNALnnUuIOKBlosCbmPjEyQ7P33xytL4N1YMy1BbsbE4/y56S4Do8NAnqSCBjwZH4QgUAL3FbP0CLMjOmBA==";
  var watch_type = "unwatch";
  
  $('.js-project-watch').dropdown('set selected', watch_type);
  $('.checkbox.sync-wiki').checkbox();
</script>
<style>
  i.loading {
    -webkit-animation: icon-loading 1.2s linear infinite;
    animation: icon-loading 1.2s linear infinite;
  }
  .qrcode_cs {
    float: left;
  }
  .check-sync-wiki {
    float: left;
    height: 28px;
    line-height: 28px;
  }
  .sync-wiki-warn {
    color: #e28560;
  }
</style>

<div class='git-project-nav'>
<div class='ui container'>
<div class='ui secondary pointing menu'>
<a class="item active" href="/yyy0118/echarts-stat"><i class='iconfont icon-code'></i>
代码
</a><a class="item " href="/yyy0118/echarts-stat/issues"><i class='iconfont icon-task'></i>
Issues
<span class='ui mini circular label'>
1
</span>
</a><a class="item " href="/yyy0118/echarts-stat/pulls"><i class='iconfont icon-pull-request'></i>
Pull Requests
<span class='ui mini circular label'>
0
</span>
</a><a class="item " href="/yyy0118/echarts-stat/wikis"><i class='iconfont icon-wiki'></i>
Wiki
</a><a class="item  " href="/yyy0118/echarts-stat/graph/master"><i class='iconfont icon-statistics'></i>
统计
</a><div class='item project-devops-item'>
<div class='ui pointing top right dropdown project-devops-dropdown'>
<div class='text'>
<i class='iconfont icon-devops'></i>
DevOps
</div>
<i class='dropdown icon'></i>
<div class='menu' style='display:none'>
<a class="item" href="/yyy0118/echarts-stat/gitee_go"><img src="https://assets.gitee.com/assets/giteego-7ec42270742374f05850d0d3ad09e303.png" alt="Giteego" />
<div class='item-title'>
Gitee Go
</div>
</a><a class="item" href="/yyy0118/echarts-stat/artifact_repositories"><img src="https://assets.gitee.com/assets/artifacts-eae00b503105733ce5f171de96fbb927.svg" alt="Artifacts" />
<div class='item-title'>
制品库管理
</div>
</a><a class="item" target="_blank" href="https://gitee.com/help/articles/4285"><img src="https://assets.gitee.com/assets/baidu_efficiency_cloud-81a98c2eb67fac83b1453ca3d2feb326.svg" alt="Baidu efficiency cloud" />
<div class='item-title'>
百度效率云
</div>
</a><a class="item" target="_blank" href="https://gitee.com/help/articles/4318"><img src="https://assets.gitee.com/assets/cloudbase-1197b95ea3398aff1df7fe17c65a6d42.png?20200925" alt="Cloudbase" />
<div class='item-title'>
腾讯云托管
</div>
</a><a class="item" target="_blank" href="https://gitee.com/help/articles/4330"><img src="https://assets.gitee.com/assets/cloud_serverless-686cf926ced5d6d2f1d6e606d270b81e.png" alt="Cloud serverless" />
<div class='item-title'>
腾讯云 Serverless
</div>
</a><a class="item" target="_blank" href="https://gitee.com/help/articles/4193"><img src="https://assets.gitee.com/assets/jenkins_for_gitee-554ec65c490d0f1f18de632c48acc4e7.png" alt="Jenkins for gitee" />
<div class='item-title'>
Jenkins for Gitee
</div>
</a></div>
</div>
</div>
<div class='item'>
<div class='ui pointing top right dropdown git-project-service'>
<div>
<i class='iconfont icon-service'></i>
服务
<i class='dropdown icon'></i>
</div>
<div class='menu' style='display:none'>
<a class="item" href="/yyy0118/echarts-stat/pages"><img src="/static/images/logo-en.svg" alt="Logo en" />
<div class='item-title'>
Gitee Pages
</div>
</a><a class="item" href="/yyy0118/echarts-stat/javadoc"><img src="https://assets.gitee.com/assets/maven-bd58aee84f266d64d4b8ce5b006a9fcf.png" alt="Maven" />
<div class='item-title'>
JavaDoc
</div>
</a><a class="item" href="/yyy0118/echarts-stat/phpdoc"><img src="https://assets.gitee.com/assets/phpdoc-a99f87c2feaa2fd99e5065377a39487e.png" alt="Phpdoc" />
<div class='item-title'>
PHPDoc
</div>
</a><a class="item" href="/yyy0118/echarts-stat/quality_analyses?platform=sonar_qube"><img src="https://assets.gitee.com/assets/sonar_mini-5e1b54bb9f6c951d97fb778ef623afea.png" alt="Sonar mini" />
<div class='item-title'>
质量分析
</div>
</a><a class="item" href="/yyy0118/echarts-stat/gitee_scans"><img src="https://assets.gitee.com/assets/giteescan-cd9ab4076bd751faf7e30888eb10f782.png" alt="Giteescan" />
<div class='item-title'>Gitee Scan</div>
</a><button class='ui orange basic button quit-button' id='quiting-button'>
我知道了，不再自动展开
</button>
</div>
</div>
</div>
</div>
</div>
</div>
<script>
  $('.git-project-nav .ui.dropdown').dropdown({ action: 'nothing' });
  var gitee_reward_config = JSON.parse(localStorage.getItem('gitee_reward_config') || null) || false
  var $settingText = $('.setting-text')
  // 如果没有访问过 
  if(!gitee_reward_config) $settingText.addClass('red-dot')
</script>
<style>
  .git-project-nav i.checkmark.icon {
    color: green;
  }
  #quiting-button {
    display: none;
  }
  
  .git-project-nav .dropdown .menu.hidden:after {
    visibility: hidden !important;
  }
</style>
<script>
  isSignIn = false
  isClickGuide = false
  $('#git-versions.dropdown').dropdown();
  $.ajax({
    url:"/yyy0118/echarts-stat/access/add_access_log",
    type:"GET"
  });
  $('#quiting-button').on('click',function() {
    $('.git-project-service').click();
    if (isSignIn) {
      $.post("/projects/set_service_guide")
    }
    $.cookie("Serve_State", true, { expires: 3650, path: '/'})
    $('#quiting-button').hide();
  });
  if (!(isClickGuide || $.cookie("Serve_State") == 'true')) {
    $('.git-project-service').click()
    $('#quiting-button').show()
  }
</script>

</div>
<div class='ui container'>
<div class='register-guide'>
<div class='register-container'>
<div class='regist'>
加入 Gitee
</div>
<div class='description'>
与超过 600 万 开发者一起发现、参与优秀开源项目，私有仓库也完全免费 ：）
</div>
<a class="ui orange button free-registion" sa_evt="register_show" sa_referrer_url="" sa_referrer_action="免费加入" sa_referrer_type="其他" href="/signup?from=project-guide">免费加入</a>
<div class='login'>
已有帐号？
<a href="/login?from=project-guide">立即登录</a>
</div>
</div>
</div>

<div class='git-project-content-wrapper'>
<div class='ui grid' id='project-wrapper'>
<div class='sixteen wide column'>
<div class='git-project-content' id='git-project-content'>
<div class='row'>
<div class='git-project-desc-wrapper'>
<div class='ui yellow message no-license' id='user-no-license-message'>
该仓库未指定开源许可证，未经作者的许可，此代码仅用于学习，不能用于其他用途。
<i class='help circle icon'></i>
<div class='ui popup dark'>
项目仓库所选许可证以仓库主分支所使用许可证为准
</div>
<i class='remove icon' id='remove-no-license-message'></i>
</div>
<script>
  if (false) {
    gon.project_new_blob_path = "/yyy0118/echarts-stat/new/master/dist/ecStat.js"
    bindShowModal({
      el: $('.no-license .project-license__create'),
      complete: function(data, modal) {
        if (!data.haveNoChoice && !data.data) {
          Flash.show('请选择一项开源许可证')
        } else {
          location.href = gon.project_new_blob_path + '?license=' + data.data
        }
      },
      skip: function () {
        location.href = gon.project_new_blob_path + '?license'
      }
    });
  }
  
  $('i.help.circle.icon').popup({
    popup: '.no-license .ui.popup',
    position: 'right center'
  });
  
  $('#remove-no-license-message').on('click', function() {
    $.cookie("skip_repo_no_license_message_8395014", 'hide', { expires: 365 });
    $('#user-no-license-message').hide();
    return;
  });
</script>
</div>

</div>
<div class='git-project-bread' id='git-project-bread'>
<div class='ui horizontal list mr-1'>
<div class='item git-project-branch-item'>
<input type="hidden" name="path" id="path" value="dist/ecStat.js" />
<div class='ui top left pointing dropdown gradient button dropdown-has-tabs' id='git-project-branch'>
<input type="hidden" name="ref" id="ref" value="master" />
<div class='default text'>
master
</div>
<i class='dropdown icon'></i>
<div class='menu'>
<div class='ui left icon search input'>
<i class='iconfont icon-search'></i>
<input class='search-branch' placeholder='搜索分支' type='text'>
</div>
<div class='tab-menu'>
<div class='tab-menu-action' data-tab='branches'>
<a class="ui link button" href="/yyy0118/echarts-stat/branches">管理</a>
</div>
<div class='tab-menu-action' data-tab='tags'>
<a class="ui link button" href="/yyy0118/echarts-stat/tags">管理</a>
</div>
<div class='tab-menu-item' data-placeholder='搜索分支' data-tab='branches'>
分支 (2)
</div>
<div class='tab-menu-item' data-placeholder='搜索标签' data-tab='tags'>
标签 (3)
</div>
</div>
<div class='tab scrolling menu' data-tab='branches' id='branches_panel'>
<div data-value="master" class="item"><span>master</span></div>
<div data-value="unit-test" class="item"><span>unit-test</span></div>
</div>
<div class='tab scrolling menu' data-tab='tags'>
<div class='item' data-value='1.1.1'>1.1.1</div>
<div class='item' data-value='1.1.0'>1.1.0</div>
<div class='item' data-value='v1.0'>v1.0</div>
</div>
</div>
</div>
<style>
  .iconfont.icon-shieldlock {
    color: #8c92a4;
  }
</style>
<script>
  var $branchesDropdown = $('#branches_panel');
  var $searchNameInput = $('.search-branch');
  var concurrentRequestLock = false;
  var filterXSS = window.filterXSS;
  $branchesDropdown.scroll(function() {
    var branchesPanel = document.getElementById('branches_panel');
    var numOfBranches = $branchesDropdown.children().length;
    var pageToken = $branchesDropdown.children().last().text().trim();
    if (branchesPanel.clientHeight + branchesPanel.scrollTop + 37 > branchesPanel.scrollHeight && numOfBranches < 2) {
      loadData({ page_token: pageToken });
    }
  });
  
  $searchNameInput.on('input', window.globalUtils.debouce(function (e) {
    var $currentTab = $('.tab-menu-action.active');
    var numOfBranches = $branchesDropdown.children().length;
    if($currentTab.data('tab') === 'branches' && numOfBranches < 2) {
    var searchWord = $searchNameInput.val().trim();
      if (searchWord !== "") {
        loadData({ search: searchWord });
      } else {
        loadData({});
      }
    }
  }, 500));
  
  function loadData(data) {
    if (concurrentRequestLock) { return; }
      concurrentRequestLock = true;
      $.ajax({
        url: "/yyy0118/echarts-stat/branches/load_more",
        type: 'GET',
        data: data,
        dataType: 'json',
        success: function (branches) {
          var html = '';
          var protectRule = '';
          if (data.search || !data.page_token) {
            $branchesDropdown.empty();
          }
          branches.forEach(function (branch) {
            var branchName = filterXSS(branch.name);
            if(branch.branch_type.value === 1) {
              var rule = filterXSS(branch.protection_rule.wildcard);
              protectRule = `<i
                 class="iconfont icon-shieldlock protected-branch-popup"
                 data-title="受保护分支"
                 data-content='保护规则： ${rule}'
                >
                </i>`
            }
            html += `<div data-value='${branchName}' class="item">
                      <span>${branchName}</span> ${protectRule}
                     </div>`
          });
          $branchesDropdown.append(html);
          $('.protected-branch-popup').popup()
        },
        complete: function () {
          concurrentRequestLock = false;
        }
    });
  }
</script>

<script>
  $(function () {
    Gitee.initTabsInDropdown($('#git-project-branch').dropdown({
      fullTextSearch: true,
      selectOnKeydown: true,
      action: function (text,value,el) {
        var oItemOrInitObject = el[0] || el
        var isNotSelect = oItemOrInitObject.dataset.tab && oItemOrInitObject.dataset.tab === 'branches'
        if(isNotSelect){
          console.warn("You didn't choose a branch")
          return
        } 
        var path = $('#path').val();
        var href = ['/yyy0118/echarts-stat/tree', encodeURIComponent(value), path].join('/');
        window.location.href = href;
        return true
      },
      onNoResults: function (searchTerm) {
        //未找到结果
        return true
      },
    }));
    $('.protected-branch-popup').popup()
  })
</script>

</div>
</div>
<div class='git-project-right-actions pull-right'>
<div class='ui orange button' id='btn-dl-or-clone'>
克隆/下载
<i class='dropdown icon'></i>
</div>
<div class='git-project-download-panel for-project ui bottom right popup'>
<div class='ui small secondary pointing menu'>
<a class='item active' data-text='' data-type='http' data-url='https://gitee.com/yyy0118/echarts-stat.git'>HTTPS</a>
<a class='item' data-text='' data-type='ssh' data-url='git@gitee.com:yyy0118/echarts-stat.git'>SSH</a>
<a class='item' data-text="该仓库未启用SVN访问，请仓库管理员前往【&lt;a target='_blank' href=/yyy0118/echarts-stat/settings&gt;仓库设置&lt;/a&gt;】开启。" data-type='svn' data-url=''>SVN</a>
<a class='item' data-text="该仓库未启用SVN访问，请仓库管理员前往【&lt;a target='_blank' href=/yyy0118/echarts-stat/settings&gt;仓库设置&lt;/a&gt;】开启。" data-type='svn_ssh' data-url=''>SVN+SSH</a>
</div>
<div class='ui fluid right labeled small input download-url-panel'>
<input type="text" name="project_clone_url" id="project_clone_url" value="https://gitee.com/yyy0118/echarts-stat.git" onclick="focus();select()" readonly="readonly" />
<div class='ui basic label'>
<div class='ui small basic orange button' data-clipboard-target='#project_clone_url' id='btn-copy-clone-url'>
复制
</div>
</div>
</div>
<div class='ui fluid right labeled warning-text forbid-warning-text'>

</div>
<hr>
<a class="ui fluid download link button" sa_evt="loginInform_show" sa_referrer_url="" sa_referrer_action="克隆/下载" sa_referrer_type="其他" href="javascript:void(0);"><i class='icon download'></i>
下载ZIP
</a><div class='download_repository_zip form modal tiny ui' id='unlanding-complaint-modal'>
<i class='iconfont icon-close close'></i>
<div class='header'>
登录提示
</div>
<div class='container actions'>
<div class='content'>
该操作需登录 Gitee 帐号，请先登录后再操作。
</div>
<div class='ui orange icon large button ok'>
立即登录
</div>
<div class='ui button blank cancel'>
没有帐号，去注册
</div>
</div>
</div>
<script>
  var $elm = $('.download');
  
  $elm.on('click', function() {
    var modals = $("#unlanding-complaint-modal.download_repository_zip");
    if (modals.length > 1) {
      modals.eq(0).modal('show');
    } else {
      modals.modal('show');
    }
  })
  $("#unlanding-complaint-modal.download_repository_zip").modal({
    onDeny: function() {
      window.location.href = "/signup?from=download_repository_zip";
    },
    onApprove: function() {
      window.location.href = "/login?from=download_repository_zip";
    }
  })
</script>

</div>
<script>
  (function() {
    var $btnClone, $btnCopy, $input, $panel;
  
    $btnClone = $('#btn-dl-or-clone');
  
    $panel = $('.git-project-download-panel');
  
    $input = $('#project_clone_url');
  
    $btnCopy = $('#btn-copy-clone-url');
  
    $btnClone.popup({
      on: 'click',
      hoverable: true,
      position: 'bottom center'
    });
  
    $panel.find('.menu > .item').on('click', function(e) {
      var $item, dataUrl;
      $item = $(this).addClass('active');
      $item.siblings().removeClass('active');
      dataUrl = $item.attr('data-url');
      if (dataUrl) {
        $panel.find('.download-url-panel').show();
        $input.val(dataUrl);
        $panel.find('.forbid-warning-text').html('');
      } else {
        $panel.find('.download-url-panel').hide();
        $panel.find('.forbid-warning-text').html($item.attr('data-text') || '');
      }
      return $.cookie('remote_way', $item.attr('data-type'), {
        expires: 365,
        path: '/'
      });
    }).filter('[data-type="' + ($.cookie('remote_way') || 'http') + '"]').trigger('click');
  
    new Clipboard($btnCopy[0]).on('success', function() {
      $btnCopy.popup({
        content: '已复制',
        position: 'right center',
        onHidden: function() {
          return $btnCopy.popup('destroy');
        }
      });
      return $btnCopy.popup('show');
    });
  
  }).call(this);
</script>

</div>
<div class='d-inline pull-right' id='git-project-root-actions'>
<script>
  $('.disabled-upload-readonly').popup({
    content: "只读目录不允许上传文件",
    className: {
      popup: 'ui popup',
    },
    position: 'bottom center',
  })
  $('.disabled-create-folder').popup({
    content: "只读目录不允许创建目录",
    className: {
      popup: 'ui popup',
    },
    position: 'bottom center',
  })
  $('.disabled-create-file').popup({
    content: "只读目录不允许创建文件",
    className: {
      popup: 'ui popup',
    },
    position: 'bottom center',
  })
  $('.disabled-create-submodule').popup({
    content: "只读目录不允许创建子模块",
    className: {
      popup: 'ui popup',
    },
    position: 'bottom center',
  })
  $('.disabled-upload-readonly, .disabled-create-folder, .disabled-create-file, .disabled-create-submodule').click(function() {
    return false
  })
</script>
<style>
  .disabled-upload-readonly, .disabled-create-file, .disabled-create-folder, .disabled-create-submodule {
    background-color: #dcddde !important;
    color: rgba(0, 0, 0, 0.4) !important;
    opacity: 0.3 !important;
    background-image: none !important;
    -webkit-box-shadow: none !important;
            box-shadow: none !important; }
</style>


</div>
<div class='breadcrumb_path path-breadcrumb-contrainer' id='git-project-breadcrumb'>
<div class='ui breadcrumb path project-path-breadcrumb' id='path-breadcrumb'>
<a data-direction="back" class="section repo-name" style="font-weight: bold" href="/yyy0118/echarts-stat/tree/master">echarts-stat
</a><div class='divider'>
/
</div>
<strong>
<a data-direction="back" class="section" href="/yyy0118/echarts-stat/tree/master/dist"><span class='cblue'>
dist
</span>
</a></strong>
<div class='divider'>
/
</div>
<strong>
ecStat.js
</strong>
<i class='iconfont icon-clone' data-clipboard-text='dist/ecStat.js' id='btn-copy-file-path'></i>
</div>
<style>
  #btn-copy-file-path {
    vertical-align: middle;
    cursor: pointer;
  }
</style>
<script>
  $btnCopy = $('#btn-copy-file-path')
  $btnCopy.popup({
    content: '复制路径'
  })
  
  if ($btnCopy[0]) {
    new Clipboard($btnCopy[0]).on('success', function() {
      $btnCopy.popup('destroy').popup({
        content: '已复制',
        on: 'manual'
      }).popup('show');
      setTimeout(function () {
        $btnCopy.popup('destroy').popup({
          content: '复制路径'
        });
      }, 2000)
    });
  }
</script>


</div>
<div class='ui horizontal list repo-action-list branches-tags' style='display: none;'>
<div class='item'>
<a class="ui blank button" href="/yyy0118/echarts-stat/branches"><i class='iconfont icon-branches'></i>
分支 2
</a></div>
<div class='item mr-3'>
<a class="ui blank button" href="/yyy0118/echarts-stat/tags"><i class='iconfont icon-tag'></i>
标签 3
</a></div>
</div>
</div>
<script>
  if(window.gon.locale == 'en')
    $('.branches-tags').css('margin-top', '12px')
</script>

<style>
  .ui.dropdown .menu > .header {
    text-transform: none; }
</style>
<script>
  $(function () {
    var $tip = $('#apk-download-tip');
    if (!$tip.length) {
      return;
    }
    $tip.find('.btn-close').on('click', function () {
      $tip.hide();
    });
  });
  (function(){
    function pathAutoRender() {
      var $parent = $('#git-project-bread'),
          $child = $('#git-project-bread').children('.ui.horizontal.list'),
          mainWidth = 0;
      $child.each(function (i,item) {
        mainWidth += $(item).width()
      });
      $('.breadcrumb.path.fork-path').remove();
      if (mainWidth > 995) {
        $('#path-breadcrumb').hide();
        $parent.append('<div class="ui breadcrumb path fork-path">' + $('#path-breadcrumb').html() + '<div/>')
      } else {
        $('#path-breadcrumb').show();
      }
    }
    window.pathAutoRender = pathAutoRender;
    pathAutoRender();
  })();
</script>

<div class='row column tree-holder' id='tree-holder'>
<div class='tree-content-holder' id='tree-content-holder'>
<div class='file_holder'>
<div class='file_title'>
<div class='blob-header-title'>
<div class='blob-description'>
<i class="iconfont icon-file"></i>
<span class='file_name' title='ecStat.js'>
ecStat.js
</span>
<small>42.60 KB</small>
</div>
<div class='options'><div class='ui mini buttons basic'>

<textarea name="blob_raw" id="blob_raw" style="display:none;">
(function webpackUniversalModuleDefinition(root, factory) {&#x000A;	if(typeof exports === &#39;object&#39; &amp;&amp; typeof module === &#39;object&#39;)&#x000A;		module.exports = factory();&#x000A;	else if(typeof define === &#39;function&#39; &amp;&amp; define.amd)&#x000A;		define([], factory);&#x000A;	else if(typeof exports === &#39;object&#39;)&#x000A;		exports[&quot;ecStat&quot;] = factory();&#x000A;	else&#x000A;		root[&quot;ecStat&quot;] = factory();&#x000A;})(this, function() {&#x000A;return /******/ (function(modules) { // webpackBootstrap&#x000A;/******/ 	// The module cache&#x000A;/******/ 	var installedModules = {};&#x000A;&#x000A;/******/ 	// The require function&#x000A;/******/ 	function __webpack_require__(moduleId) {&#x000A;&#x000A;/******/ 		// Check if module is in cache&#x000A;/******/ 		if(installedModules[moduleId])&#x000A;/******/ 			return installedModules[moduleId].exports;&#x000A;&#x000A;/******/ 		// Create a new module (and put it into the cache)&#x000A;/******/ 		var module = installedModules[moduleId] = {&#x000A;/******/ 			exports: {},&#x000A;/******/ 			id: moduleId,&#x000A;/******/ 			loaded: false&#x000A;/******/ 		};&#x000A;&#x000A;/******/ 		// Execute the module function&#x000A;/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);&#x000A;&#x000A;/******/ 		// Flag the module as loaded&#x000A;/******/ 		module.loaded = true;&#x000A;&#x000A;/******/ 		// Return the exports of the module&#x000A;/******/ 		return module.exports;&#x000A;/******/ 	}&#x000A;&#x000A;&#x000A;/******/ 	// expose the modules object (__webpack_modules__)&#x000A;/******/ 	__webpack_require__.m = modules;&#x000A;&#x000A;/******/ 	// expose the module cache&#x000A;/******/ 	__webpack_require__.c = installedModules;&#x000A;&#x000A;/******/ 	// __webpack_public_path__&#x000A;/******/ 	__webpack_require__.p = &quot;&quot;;&#x000A;&#x000A;/******/ 	// Load entry module and return exports&#x000A;/******/ 	return __webpack_require__(0);&#x000A;/******/ })&#x000A;/************************************************************************/&#x000A;/******/ ([&#x000A;/* 0 */&#x000A;/***/ (function(module, exports, __webpack_require__) {&#x000A;&#x000A;	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {&#x000A;&#x000A;	    return {&#x000A;&#x000A;	        clustering: __webpack_require__(1),&#x000A;	        regression: __webpack_require__(5),&#x000A;	        statistics: __webpack_require__(6),&#x000A;	        histogram: __webpack_require__(15)&#x000A;&#x000A;	    };&#x000A;&#x000A;	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &amp;&amp; (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));&#x000A;&#x000A;/***/ }),&#x000A;/* 1 */&#x000A;/***/ (function(module, exports, __webpack_require__) {&#x000A;&#x000A;	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {&#x000A;&#x000A;	    var dataProcess = __webpack_require__(2);&#x000A;	    var dataPreprocess = dataProcess.dataPreprocess;&#x000A;	    var array = __webpack_require__(3);&#x000A;	    var arraySize = array.size;&#x000A;	    var sumOfColumn = array.sumOfColumn;&#x000A;	    var arraySum = array.sum;&#x000A;	    var zeros = array.zeros;&#x000A;	    var isArray = array.isArray;&#x000A;	    var mathSqrt = Math.sqrt;&#x000A;	    var mathPow = Math.pow;&#x000A;&#x000A;	    /**&#x000A;	     * KMeans of clustering algorithm&#x000A;	     * @param  {Array.&lt;Array.&lt;number&gt;&gt;} data  two-dimension array&#x000A;	     * @param  {number} k   the number of clusters in a dataset&#x000A;	     * @return {Object}&#x000A;	     */&#x000A;	    function kMeans(data, k) {&#x000A;&#x000A;	        var size = arraySize(data);&#x000A;	        // create array to assign data points to centroids, also holds SE of each point&#x000A;	        var clusterAssigned = zeros(size[0], 2);&#x000A;	        var centroids = createRandCent(data, k);&#x000A;	        var clusterChanged = true;&#x000A;	        var minDist;&#x000A;	        var minIndex;&#x000A;	        var distIJ;&#x000A;	        var ptsInClust;&#x000A;&#x000A;	        while (clusterChanged) {&#x000A;	            clusterChanged = false;&#x000A;	            for (var i = 0; i &lt; size[0]; i++) {&#x000A;	                minDist = Infinity;&#x000A;	                minIndex = -1;&#x000A;	                for (var j = 0; j &lt; k; j++) {&#x000A;	                    distIJ = distEuclid(data[i], centroids[j]);&#x000A;	                    if (distIJ &lt; minDist) {&#x000A;	                        minDist = distIJ;&#x000A;	                        minIndex = j;&#x000A;	                    }&#x000A;	                }&#x000A;	                if (clusterAssigned[i][0] !== minIndex) {&#x000A;	                    clusterChanged = true;&#x000A;	                }&#x000A;	                clusterAssigned[i][0] = minIndex;&#x000A;	                clusterAssigned[i][1] = mathPow(minDist, 2);&#x000A;	            }&#x000A;	            //recalculate centroids&#x000A;	            for (var i = 0; i &lt; k; i++) {&#x000A;	                ptsInClust = [];&#x000A;	                for (var j = 0; j &lt; clusterAssigned.length; j++) {&#x000A;	                    if (clusterAssigned[j][0] === i) {&#x000A;	                        ptsInClust.push(data[j]);&#x000A;	                    }&#x000A;	                }&#x000A;	                centroids[i] = meanInColumns(ptsInClust);&#x000A;	            }&#x000A;	        }&#x000A;&#x000A;	        var clusterWithKmeans = {&#x000A;	            centroids: centroids,&#x000A;	            clusterAssigned: clusterAssigned&#x000A;	        };&#x000A;	        return clusterWithKmeans;&#x000A;	    }&#x000A;&#x000A;	    /**&#x000A;	     * Calculate the average of each column in a two-dimensional array&#x000A;	     *  and returns the values as an array.&#x000A;	     * @param  {Array.&lt;Array&gt;} dataList two-dimensional array&#x000A;	     * @return {Array}&#x000A;	     */&#x000A;	    function meanInColumns(dataList) {&#x000A;&#x000A;	        var size = arraySize(dataList);&#x000A;	        var meanArray = [];&#x000A;	        var sum;&#x000A;	        var mean;&#x000A;	        for (var j = 0; j &lt; size[1]; j++) {&#x000A;	            sum = 0;&#x000A;	            for (var i = 0; i &lt; size[0]; i++) {&#x000A;	                sum += dataList[i][j];&#x000A;	            }&#x000A;	            mean = sum / size[0];&#x000A;	            meanArray.push(mean);&#x000A;	        }&#x000A;	        return meanArray;&#x000A;	    }&#x000A;&#x000A;	    /**&#x000A;	     * The combine of hierarchical clustering and k-means.&#x000A;	     * @param  {Array} data   two-dimension array.&#x000A;	     * @param  {[type]} k   the number of clusters in a dataset. It has to be greater than 1.&#x000A;	     * @param  {boolean}  stepByStep&#x000A;	     * @return {}&#x000A;	     */&#x000A;	    function hierarchicalKMeans(data, k, stepByStep) {&#x000A;	        if (k &lt; 2 ) {&#x000A;	            return;&#x000A;	        }&#x000A;	        var dataSet = dataPreprocess(data);&#x000A;	        var size = arraySize(dataSet);&#x000A;	        var clusterAssment = zeros(size[0], 2);&#x000A;	        // initial center point&#x000A;	        var centroid0 = meanInColumns(dataSet);&#x000A;	        var centList = [centroid0];&#x000A;	        var squareError;&#x000A;	        for (var i = 0; i &lt; size[0]; i++) {&#x000A;	            squareError = distEuclid(dataSet[i], centroid0);&#x000A;	            clusterAssment[i][1] = mathPow(squareError, 2);&#x000A;	        }&#x000A;	        var lowestSSE;&#x000A;	        var ptsInClust;&#x000A;	        var ptsNotClust;&#x000A;	        var clusterInfo;&#x000A;	        var sseSplit;&#x000A;	        var sseNotSplit;&#x000A;	        var index = 1;&#x000A;	        var result = {&#x000A;	            isEnd: false&#x000A;	        };&#x000A;&#x000A;	        function oneStep() {&#x000A;	            //the existing clusters are continuously divided&#x000A;	            //until the number of clusters is k&#x000A;	            if (index &lt; k) {&#x000A;	                lowestSSE = Infinity;&#x000A;	                var centSplit;&#x000A;	                var newCentroid;&#x000A;	                var newClusterAss;&#x000A;&#x000A;	                for (var j = 0; j &lt; centList.length; j++) {&#x000A;	                    ptsInClust = [];&#x000A;	                    ptsNotClust = [];&#x000A;	                    for (var i = 0; i &lt; clusterAssment.length; i++) {&#x000A;	                        if (clusterAssment[i][0] === j) {&#x000A;	                            ptsInClust.push(dataSet[i]);&#x000A;	                        }&#x000A;	                        else {&#x000A;	                            ptsNotClust.push(clusterAssment[i][1]);&#x000A;	                        }&#x000A;	                    }&#x000A;	                    clusterInfo = kMeans(ptsInClust, 2);&#x000A;	                    sseSplit = sumOfColumn(clusterInfo.clusterAssigned, 1);&#x000A;	                    sseNotSplit = arraySum(ptsNotClust);&#x000A;	                    if (sseSplit + sseNotSplit &lt; lowestSSE) {&#x000A;	                        lowestSSE = sseNotSplit + sseSplit;&#x000A;	                        centSplit = j;&#x000A;	                        newCentroid = clusterInfo.centroids;&#x000A;	                        newClusterAss = clusterInfo.clusterAssigned;&#x000A;	                    }&#x000A;	                }&#x000A;&#x000A;	                for (var i = 0; i &lt; newClusterAss.length; i++) {&#x000A;	                    if (newClusterAss[i][0] === 0) {&#x000A;	                        newClusterAss[i][0] = centSplit;&#x000A;	                    }&#x000A;	                    else if (newClusterAss[i][0] === 1) {&#x000A;	                        newClusterAss[i][0] = centList.length;&#x000A;	                    }&#x000A;	                }&#x000A;&#x000A;	                centList[centSplit] = newCentroid[0];&#x000A;	                centList.push(newCentroid[1]);&#x000A;	                for ( i = 0, j = 0; i &lt; clusterAssment.length &amp;&amp; j &lt; newClusterAss.length; i++) {&#x000A;	                    if (clusterAssment[i][0] === centSplit) {&#x000A;	                        clusterAssment[i][0] = newClusterAss[j][0];&#x000A;	                        clusterAssment[i][1] = newClusterAss[j++][1];&#x000A;	                    }&#x000A;	                }&#x000A;&#x000A;	                var pointInClust = [];&#x000A;	                for (var i = 0; i &lt; centList.length; i++) {&#x000A;	                    pointInClust[i] = [];&#x000A;	                    for (var j = 0; j &lt; clusterAssment.length; j++) {&#x000A;	                        if (clusterAssment[j][0] === i) {&#x000A;	                            pointInClust[i].push(dataSet[j]);&#x000A;	                        }&#x000A;	                    }&#x000A;	                }&#x000A;&#x000A;	                result.clusterAssment = clusterAssment;&#x000A;	                result.centroids = centList;&#x000A;	                result.pointsInCluster = pointInClust;&#x000A;&#x000A;&#x000A;	                index++;&#x000A;	            }&#x000A;	            else {&#x000A;	                result.isEnd = true;&#x000A;	            }&#x000A;&#x000A;	            return result;&#x000A;	        }&#x000A;&#x000A;	        var step = {&#x000A;	            next: oneStep&#x000A;	        };&#x000A;&#x000A;	        if (!stepByStep) {&#x000A;	            var result;&#x000A;	            while (!(result = step.next()).isEnd);&#x000A;	            return result;&#x000A;	        }&#x000A;	        else {&#x000A;	            return step;&#x000A;	        }&#x000A;&#x000A;	    }&#x000A;&#x000A;	    /**&#x000A;	     * Create random centroid of kmeans.&#x000A;	     * @param  {Array.&lt;number&gt;} dataSet  two-dimension array&#x000A;	     * @param  {number} k   the number of centroids to be created&#x000A;	     * @return {Array.&lt;number&gt;}   random centroids of kmeans&#x000A;	     */&#x000A;	    function createRandCent(dataSet, k) {&#x000A;	        var size = arraySize(dataSet);&#x000A;	        //constructs a two-dimensional array with all values 0&#x000A;	        var centroids = zeros(k, size[1]);&#x000A;	        var minJ;&#x000A;	        var maxJ;&#x000A;	        var rangeJ;&#x000A;	        //create random cluster centers, within bounds of each dimension&#x000A;	        for (var j = 0; j &lt; size[1]; j++) {&#x000A;	            minJ = dataSet[0][j];&#x000A;	            maxJ = dataSet[0][j];&#x000A;	            for (var i = 1; i &lt; size[0]; i++) {&#x000A;	                if (dataSet[i][j] &lt; minJ) {&#x000A;	                    minJ = dataSet[i][j];&#x000A;	                }&#x000A;	                if (dataSet[i][j] &gt; maxJ) {&#x000A;	                    maxJ = dataSet[i][j];&#x000A;	                }&#x000A;	            }&#x000A;	            rangeJ = maxJ - minJ;&#x000A;	            for (var i = 0; i &lt; k; i++) {&#x000A;	                centroids[i][j] = minJ + rangeJ * Math.random();&#x000A;	            }&#x000A;	        }&#x000A;	        return centroids;&#x000A;	    }&#x000A;&#x000A;	    /**&#x000A;	     * Distance method for calculating similarity&#x000A;	     * @param  {Array.&lt;number&gt;}  vec1&#x000A;	     * @param  {Array.&lt;nnumber&gt;}  vec2&#x000A;	     * @return {number}&#x000A;	     */&#x000A;	    function distEuclid(vec1, vec2) {&#x000A;&#x000A;	        if (!isArray(vec1) &amp;&amp; !isArray(vec2)) {&#x000A;	            return mathSqrt(mathPow(vec1 - vec2, 2));&#x000A;	        }&#x000A;&#x000A;	        var powerSum = 0;&#x000A;	        //subtract the corresponding elements in the vectors&#x000A;	        for (var i = 0; i &lt; vec1.length; i++) {&#x000A;	            powerSum += mathPow(vec1[i] - vec2[i], 2);&#x000A;	        }&#x000A;&#x000A;	        return mathSqrt(powerSum);&#x000A;	    }&#x000A;&#x000A;	    return {&#x000A;	        kMeans: kMeans,&#x000A;	        hierarchicalKMeans: hierarchicalKMeans&#x000A;	    };&#x000A;&#x000A;	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &amp;&amp; (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));&#x000A;&#x000A;/***/ }),&#x000A;/* 2 */&#x000A;/***/ (function(module, exports, __webpack_require__) {&#x000A;&#x000A;	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {&#x000A;&#x000A;	    var array = __webpack_require__(3);&#x000A;	    var isArray = array.isArray;&#x000A;	    var size = array.size;&#x000A;	    var number = __webpack_require__(4);&#x000A;	    var isNumber = number.isNumber;&#x000A;&#x000A;	    /**&#x000A;	     * Data preprocessing, filter the wrong data object.&#x000A;	     *  for example [12,] --- missing y value&#x000A;	     *              [,12] --- missing x value&#x000A;	     *              [12, b] --- incorrect y value&#x000A;	     *              [&#39;a&#39;, 12] --- incorrect x value&#x000A;	     * @param  {Array.&lt;Array&gt;} data&#x000A;	     * @return {Array.&lt;Array.&lt;number&gt;&gt;}&#x000A;	     */&#x000A;	    function dataPreprocess(data) {&#x000A;&#x000A;	        if (!isArray(data)) {&#x000A;	            throw new Error(&#39;Invalid data type, you should input an array&#39;);&#x000A;	        }&#x000A;	        var predata = [];&#x000A;	        var arraySize = size(data);&#x000A;&#x000A;	        if (arraySize.length === 1) {&#x000A;&#x000A;	            for (var i = 0; i &lt; arraySize[0]; i++) {&#x000A;&#x000A;	                if (isNumber(data[i])) {&#x000A;	                    predata.push(data[i]);&#x000A;	                }&#x000A;	            }&#x000A;	        }&#x000A;	        else if (arraySize.length === 2) {&#x000A;&#x000A;	            for (var i = 0; i &lt; arraySize[0]; i++) {&#x000A;&#x000A;	                var isCorrect = true;&#x000A;	                for (var j = 0; j &lt; arraySize[1]; j++) {&#x000A;	                    if (!isNumber(data[i][j])) {&#x000A;	                        isCorrect = false;&#x000A;	                    }&#x000A;	                }&#x000A;	                if (isCorrect) {&#x000A;	                    predata.push(data[i]);&#x000A;	                }&#x000A;	            }&#x000A;	        }&#x000A;	        return predata;&#x000A;	    }&#x000A;&#x000A;	    /**&#x000A;	     * @param {string|number} val&#x000A;	     * @return {number}&#x000A;	     */&#x000A;	    function getPrecision(val) {&#x000A;	        var str = val.toString();&#x000A;	        // scientific notation is not considered&#x000A;	        var dotIndex = str.indexOf(&#39;.&#39;);&#x000A;	        return dotIndex &lt; 0 ? 0 : str.length - 1 - dotIndex;&#x000A;	    }&#x000A;&#x000A;	    return {&#x000A;	        dataPreprocess: dataPreprocess,&#x000A;	        getPrecision: getPrecision&#x000A;	    };&#x000A;&#x000A;	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &amp;&amp; (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));&#x000A;&#x000A;/***/ }),&#x000A;/* 3 */&#x000A;/***/ (function(module, exports, __webpack_require__) {&#x000A;&#x000A;	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {&#x000A;&#x000A;	    var objToString = Object.prototype.toString;&#x000A;	    var arrayProto = Array.prototype;&#x000A;	    var nativeMap = arrayProto.map;&#x000A;&#x000A;	    /**&#x000A;	     * Get the size of a array&#x000A;	     * @param  {Array} data&#x000A;	     * @return {Array}&#x000A;	     */&#x000A;	    function size(data) {&#x000A;	        var s = [];&#x000A;	        while (isArray(data)) {&#x000A;	            s.push(data.length);&#x000A;	            data = data[0];&#x000A;	        }&#x000A;	        return s;&#x000A;	    }&#x000A;&#x000A;	    /**&#x000A;	     * @param {*}  value&#x000A;	     * @return {boolean}&#x000A;	     */&#x000A;	    function isArray(value) {&#x000A;	        return objToString.call(value) === &#39;[object Array]&#39;;&#x000A;	    }&#x000A;&#x000A;	    /**&#x000A;	     * constructs a (m x n) array with all values 0&#x000A;	     * @param  {number} m  the row&#x000A;	     * @param  {number} n  the column&#x000A;	     * @return {Array}&#x000A;	     */&#x000A;	    function zeros(m, n) {&#x000A;	        var zeroArray = [];&#x000A;	        for (var i = 0; i &lt; m ; i++) {&#x000A;	            zeroArray[i] = [];&#x000A;	            for (var j = 0; j &lt; n; j++) {&#x000A;	                zeroArray[i][j] = 0;&#x000A;	            }&#x000A;	        }&#x000A;	        return zeroArray;&#x000A;	    }&#x000A;&#x000A;	    /**&#x000A;	     * Sums each element in the array.&#x000A;	     * Internal use, for performance considerations, to avoid&#x000A;	     * unnecessary judgments and calculations.&#x000A;	     * @param  {Array} vector&#x000A;	     * @return {number}&#x000A;	     */&#x000A;	    function sum(vector) {&#x000A;	        var sum = 0;&#x000A;	        for (var i = 0; i &lt; vector.length; i++) {&#x000A;	            sum += vector[i];&#x000A;	        }&#x000A;	        return sum;&#x000A;	    }&#x000A;&#x000A;	    /**&#x000A;	     * Computes the sum of the specified column elements in a two-dimensional array&#x000A;	     * @param  {Array.&lt;Array&gt;} dataList  two-dimensional array&#x000A;	     * @param  {number} n  the specified column, zero-based&#x000A;	     * @return {number}&#x000A;	     */&#x000A;	    function sumOfColumn(dataList, n) {&#x000A;	        var sum = 0;&#x000A;	        for (var i = 0; i &lt; dataList.length; i++) {&#x000A;	            sum += dataList[i][n];&#x000A;	        }&#x000A;	        return sum;&#x000A;	    }&#x000A;&#x000A;&#x000A;	    function ascending(a, b) {&#x000A;&#x000A;	        return a &gt; b ? 1 : a &lt; b ? -1 : a === b ? 0 : NaN;&#x000A;&#x000A;	    }&#x000A;&#x000A;	    /**&#x000A;	     * Binary search algorithm --- this bisector is specidfied to histogram, which every bin like that [a, b),&#x000A;	     * so the return value use to add 1.&#x000A;	     * @param  {Array.&lt;number&gt;} array&#x000A;	     * @param  {number} value&#x000A;	     * @param  {number} start&#x000A;	     * @param  {number} end&#x000A;	     * @return {number}&#x000A;	     */&#x000A;	    function bisect(array, value, start, end) { //移出去&#x000A;&#x000A;	        if (start == null) {&#x000A;	            start = 0;&#x000A;	        }&#x000A;	        if (end == null) {&#x000A;	            end = array.length;&#x000A;	        }&#x000A;	        while (start &lt; end) {&#x000A;	            var mid = Math.floor((start + end) / 2);&#x000A;	            var compare = ascending(array[mid], value);&#x000A;	            if (compare &gt; 0) {&#x000A;	                end = mid;&#x000A;	            }&#x000A;	            else if (compare &lt; 0) {&#x000A;	                start = mid + 1;&#x000A;	            }&#x000A;	            else {&#x000A;	                return mid + 1;&#x000A;	            }&#x000A;	        }&#x000A;	        return start;&#x000A;	    }&#x000A;&#x000A;	    /**&#x000A;	     * 数组映射&#x000A;	     * @memberOf module:zrender/core/util&#x000A;	     * @param {Array} obj&#x000A;	     * @param {Function} cb&#x000A;	     * @param {*} [context]&#x000A;	     * @return {Array}&#x000A;	     */&#x000A;	    function map(obj, cb, context) {&#x000A;	        if (!(obj &amp;&amp; cb)) {&#x000A;	            return;&#x000A;	        }&#x000A;	        if (obj.map &amp;&amp; obj.map === nativeMap) {&#x000A;	            return obj.map(cb, context);&#x000A;	        }&#x000A;	        else {&#x000A;	            var result = [];&#x000A;	            for (var i = 0, len = obj.length; i &lt; len; i++) {&#x000A;	                result.push(cb.call(context, obj[i], i, obj));&#x000A;	            }&#x000A;	            return result;&#x000A;	        }&#x000A;	    }&#x000A;&#x000A;&#x000A;	    return {&#x000A;	        size: size,&#x000A;	        isArray: isArray,&#x000A;	        zeros: zeros,&#x000A;	        sum: sum,&#x000A;	        sumOfColumn: sumOfColumn,&#x000A;	        ascending: ascending,&#x000A;	        bisect: bisect,&#x000A;	        map: map&#x000A;	    };&#x000A;&#x000A;	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &amp;&amp; (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));&#x000A;&#x000A;/***/ }),&#x000A;/* 4 */&#x000A;/***/ (function(module, exports, __webpack_require__) {&#x000A;&#x000A;	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {&#x000A;&#x000A;	    /**&#x000A;	     * Test whether value is a number.&#x000A;	     * @param  {*}  value&#x000A;	     * @return {boolean}&#x000A;	     */&#x000A;	    function isNumber(value) {&#x000A;&#x000A;	        value = value === null ? NaN : +value;&#x000A;	        return typeof value === &#39;number&#39; &amp;&amp; !isNaN(value);&#x000A;	    }&#x000A;&#x000A;	    /**&#x000A;	     * Test if a number is integer.&#x000A;	     * @param  {number}  value&#x000A;	     * @return {boolean}&#x000A;	     */&#x000A;	    function isInteger(value) {&#x000A;	        return isFinite(value) &amp;&amp; value === Math.round(value);&#x000A;	    }&#x000A;&#x000A;	    return {&#x000A;	        isNumber: isNumber,&#x000A;	        isInteger: isInteger&#x000A;	    };&#x000A;&#x000A;	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &amp;&amp; (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));&#x000A;&#x000A;/***/ }),&#x000A;/* 5 */&#x000A;/***/ (function(module, exports, __webpack_require__) {&#x000A;&#x000A;	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {&#x000A;&#x000A;	    var dataProcess = __webpack_require__(2);&#x000A;	    var dataPreprocess = dataProcess.dataPreprocess;&#x000A;&#x000A;	    var regreMethods = {&#x000A;&#x000A;	        /**&#x000A;	         * Common linear regression algorithm&#x000A;	         * @param  {Array.&lt;Array.&lt;number&gt;&gt;} data two-dimensional array&#x000A;	         * @return {Object}&#x000A;	         */&#x000A;	        linear: function (data) {&#x000A;&#x000A;	            var predata = dataPreprocess(data);&#x000A;	            var sumX = 0;&#x000A;	            var sumY = 0;&#x000A;	            var sumXY = 0;&#x000A;	            var sumXX = 0;&#x000A;	            var len = predata.length;&#x000A;&#x000A;	            for (var i = 0; i &lt; len; i++) {&#x000A;	                sumX += predata[i][0];&#x000A;	                sumY += predata[i][1];&#x000A;	                sumXY += predata[i][0] * predata[i][1];&#x000A;	                sumXX += predata[i][0] * predata[i][0];&#x000A;	            }&#x000A;&#x000A;	            var gradient = ((len * sumXY) - (sumX * sumY)) / ((len * sumXX) - (sumX * sumX));&#x000A;	            var intercept = (sumY / len) - ((gradient * sumX) / len);&#x000A;&#x000A;	            var result = [];&#x000A;	            for (var j = 0; j &lt; predata.length; j++) {&#x000A;	                var coordinate = [predata[j][0], gradient * predata[j][0] + intercept];&#x000A;	                result.push(coordinate);&#x000A;	            }&#x000A;&#x000A;	            var string = &#39;y = &#39; + Math.round(gradient * 100) / 100 + &#39;x + &#39; + Math.round(intercept * 100) / 100;&#x000A;&#x000A;	            return {&#x000A;	                points: result,&#x000A;	                parameter: {&#x000A;	                    gradient: gradient,&#x000A;	                    intercept: intercept&#x000A;	                },&#x000A;	                expression: string&#x000A;	            };&#x000A;	        },&#x000A;&#x000A;	        /**&#x000A;	         * If the raw data include [0,0] point, we should choose linearThroughOrigin&#x000A;	         *   instead of linear.&#x000A;	         * @param  {Array.&lt;Array&gt;} data  two-dimensional number array&#x000A;	         * @return {Object}&#x000A;	         */&#x000A;	        linearThroughOrigin: function (data) {&#x000A;&#x000A;	            var predata = dataPreprocess(data);&#x000A;	            var sumXX = 0;&#x000A;	            var sumXY = 0;&#x000A;&#x000A;	            for (var i = 0; i &lt; predata.length; i++) {&#x000A;	                sumXX += predata[i][0] * predata[i][0];&#x000A;	                sumXY += predata[i][0] * predata[i][1];&#x000A;	            }&#x000A;&#x000A;	            var gradient = sumXY / sumXX;&#x000A;	            var result = [];&#x000A;&#x000A;	            for (var j = 0; j &lt; predata.length; j++) {&#x000A;	                var coordinate = [predata[j][0], predata[j][0] * gradient];&#x000A;	                result.push(coordinate);&#x000A;	            }&#x000A;&#x000A;	            var string = &#39;y = &#39; + Math.round(gradient * 100) / 100 + &#39;x&#39;;&#x000A;&#x000A;	            return {&#x000A;	                points: result,&#x000A;	                parameter: {&#x000A;	                    gradient: gradient&#x000A;	                },&#x000A;	                expression: string&#x000A;	            };&#x000A;	        },&#x000A;&#x000A;	        /**&#x000A;	         * Exponential regression&#x000A;	         * @param  {Array.&lt;Array.&lt;number&gt;&gt;} data  two-dimensional number array&#x000A;	         * @return {Object}&#x000A;	         */&#x000A;	        exponential: function (data) {&#x000A;&#x000A;	            var predata = dataPreprocess(data);&#x000A;	            var sumX = 0;&#x000A;	            var sumY = 0;&#x000A;	            var sumXXY = 0;&#x000A;	            var sumYlny = 0;&#x000A;	            var sumXYlny = 0;&#x000A;	            var sumXY = 0;&#x000A;&#x000A;	            for (var i = 0; i &lt; predata.length; i++) {&#x000A;	                sumX += predata[i][0];&#x000A;	                sumY += predata[i][1];&#x000A;	                sumXY += predata[i][0] * predata[i][1];&#x000A;	                sumXXY += predata[i][0] * predata[i][0] * predata[i][1];&#x000A;	                sumYlny += predata[i][1] * Math.log(predata[i][1]);&#x000A;	                sumXYlny += predata[i][0] * predata[i][1] * Math.log(predata[i][1]);&#x000A;	            }&#x000A;&#x000A;	            var denominator = (sumY * sumXXY) - (sumXY * sumXY);&#x000A;	            var coefficient = Math.pow(Math.E, (sumXXY * sumYlny - sumXY * sumXYlny) / denominator);&#x000A;	            var index = (sumY * sumXYlny - sumXY * sumYlny) / denominator;&#x000A;	            var result = [];&#x000A;&#x000A;	            for (var j = 0; j &lt; predata.length; j++) {&#x000A;	                var coordinate = [predata[j][0], coefficient * Math.pow(Math.E, index * predata[j][0])];&#x000A;	                result.push(coordinate);&#x000A;	            }&#x000A;&#x000A;	            var string = &#39;y = &#39; + Math.round(coefficient * 100) / 100 + &#39;e^(&#39; + Math.round(index * 100) / 100 + &#39;x)&#39;;&#x000A;&#x000A;	            return {&#x000A;	                points: result,&#x000A;	                parameter: {&#x000A;	                    coefficient: coefficient,&#x000A;	                    index: index&#x000A;	                },&#x000A;	                expression: string&#x000A;	            };&#x000A;&#x000A;	        },&#x000A;&#x000A;	        /**&#x000A;	         * Logarithmic regression&#x000A;	         * @param  {Array.&lt;Array.&lt;number&gt;&gt;} data  two-dimensional number array&#x000A;	         * @return {Object}&#x000A;	         */&#x000A;	        logarithmic: function (data) {&#x000A;&#x000A;	            var predata = dataPreprocess(data);&#x000A;	            var sumlnx = 0;&#x000A;	            var sumYlnx = 0;&#x000A;	            var sumY = 0;&#x000A;	            var sumlnxlnx = 0;&#x000A;&#x000A;	            for (var i = 0; i &lt; predata.length; i++) {&#x000A;	                sumlnx += Math.log(predata[i][0]);&#x000A;	                sumYlnx += predata[i][1] * Math.log(predata[i][0]);&#x000A;	                sumY += predata[i][1];&#x000A;	                sumlnxlnx += Math.pow(Math.log(predata[i][0]), 2);&#x000A;	            }&#x000A;&#x000A;	            var gradient = (i * sumYlnx - sumY * sumlnx) / (i * sumlnxlnx - sumlnx * sumlnx);&#x000A;	            var intercept = (sumY - gradient * sumlnx) / i;&#x000A;	            var result = [];&#x000A;&#x000A;	            for (var j = 0; j &lt; predata.length; j++) {&#x000A;	                var coordinate = [predata[j][0], gradient * Math.log(predata[j][0]) + intercept];&#x000A;	                result.push(coordinate);&#x000A;	            }&#x000A;&#x000A;	            var string =&#x000A;	                &#39;y = &#39;&#x000A;	                + Math.round(intercept * 100) / 100&#x000A;	                + &#39; + &#39;&#x000A;	                + Math.round(gradient * 100) / 100 + &#39;ln(x)&#39;;&#x000A;&#x000A;	            return {&#x000A;	                points: result,&#x000A;	                parameter: {&#x000A;	                    gradient: gradient,&#x000A;	                    intercept: intercept&#x000A;	                },&#x000A;	                expression: string&#x000A;	            };&#x000A;&#x000A;	        },&#x000A;&#x000A;	        /**&#x000A;	         * Polynomial regression&#x000A;	         * @param  {Array.&lt;Array.&lt;number&gt;&gt;} data  two-dimensional number array&#x000A;	         * @param  {number} order  order of polynomials&#x000A;	         * @return {Object}&#x000A;	         */&#x000A;	        polynomial: function (data, order) {&#x000A;&#x000A;	            var predata = dataPreprocess(data);&#x000A;	            if (typeof order === &#39;undefined&#39;) {&#x000A;	                order = 2;&#x000A;	            }&#x000A;	            //coefficient matrix&#x000A;	            var coeMatrix = [];&#x000A;	            var lhs = [];&#x000A;	            var k = order + 1;&#x000A;&#x000A;	            for (var i = 0; i &lt; k; i++) {&#x000A;	                var sumA = 0;&#x000A;	                for (var n = 0; n &lt; predata.length; n++) {&#x000A;	                    sumA += predata[n][1] * Math.pow(predata[n][0], i);&#x000A;	                }&#x000A;	                lhs.push(sumA);&#x000A;&#x000A;	                var temp = [];&#x000A;	                for (var j = 0; j &lt; k; j++) {&#x000A;	                    var sumB = 0;&#x000A;	                    for (var m = 0; m &lt; predata.length; m++) {&#x000A;	                        sumB += Math.pow(predata[m][0], i + j);&#x000A;	                    }&#x000A;	                    temp.push(sumB);&#x000A;	                }&#x000A;	                coeMatrix.push(temp);&#x000A;	            }&#x000A;	            coeMatrix.push(lhs);&#x000A;&#x000A;	            var coeArray = gaussianElimination(coeMatrix, k);&#x000A;&#x000A;	            var result = [];&#x000A;&#x000A;	            for (var i = 0; i &lt; predata.length; i++) {&#x000A;	                var value = 0;&#x000A;	                for (var n = 0; n &lt; coeArray.length; n++) {&#x000A;	                    value += coeArray[n] * Math.pow(predata[i][0], n);&#x000A;	                }&#x000A;	                result.push([predata[i][0], value]);&#x000A;	            }&#x000A;&#x000A;	            var string = &#39;y = &#39;;&#x000A;	            for (var i = coeArray.length - 1; i &gt;= 0; i--) {&#x000A;	                if (i &gt; 1) {&#x000A;	                    string += Math.round(coeArray[i] * Math.pow(10, i + 1)) / Math.pow(10, i + 1) + &#39;x^&#39; + i + &#39; + &#39;;&#x000A;	                }&#x000A;	                else if (i === 1) {&#x000A;	                    string += Math.round(coeArray[i] * 100) / 100 + &#39;x&#39; + &#39; + &#39;;&#x000A;	                }&#x000A;	                else {&#x000A;	                    string += Math.round(coeArray[i] * 100) / 100;&#x000A;	                }&#x000A;	            }&#x000A;&#x000A;	            return {&#x000A;	                points: result,&#x000A;	                parameter: coeArray,&#x000A;	                expression: string&#x000A;	            };&#x000A;&#x000A;	        }&#x000A;&#x000A;	    };&#x000A;&#x000A;	    /**&#x000A;	     * Gaussian elimination&#x000A;	     * @param  {Array.&lt;Array.&lt;number&gt;&gt;} matrix   two-dimensional number array&#x000A;	     * @param  {number} number&#x000A;	     * @return {Array}&#x000A;	     */&#x000A;	    function gaussianElimination(matrix, number) {&#x000A;&#x000A;	        for (var i = 0; i &lt; matrix.length - 1; i++) {&#x000A;	            var maxColumn = i;&#x000A;	            for (var j = i + 1; j &lt; matrix.length - 1; j++) {&#x000A;	                if (Math.abs(matrix[i][j]) &gt; Math.abs(matrix[i][maxColumn])) {&#x000A;	                    maxColumn = j;&#x000A;	                }&#x000A;	            }&#x000A;	            // the matrix here is the transpose of the common Augmented matrix.&#x000A;	            //  so the can perform the primary column transform, in fact, equivalent&#x000A;	            //  to the primary line changes&#x000A;	            for (var k = i; k &lt; matrix.length; k++) {&#x000A;	                var temp = matrix[k][i];&#x000A;	                matrix[k][i] = matrix[k][maxColumn];&#x000A;	                matrix[k][maxColumn] = temp;&#x000A;	            }&#x000A;	            for (var n = i + 1; n &lt; matrix.length - 1; n++) {&#x000A;	                for (var m = matrix.length - 1; m &gt;= i; m--) {&#x000A;	                    matrix[m][n] -= matrix[m][i] / matrix[i][i] * matrix[i][n];&#x000A;	                }&#x000A;	            }&#x000A;	        }&#x000A;&#x000A;	        var data = new Array(number);&#x000A;	        var len = matrix.length - 1;&#x000A;	        for (var j = matrix.length - 2; j &gt;= 0; j--) {&#x000A;	            var temp = 0;&#x000A;	            for (var i = j + 1; i &lt; matrix.length - 1; i++) {&#x000A;	                temp += matrix[i][j] * data[i];&#x000A;	            }&#x000A;	            data[j] = (matrix[len][j] - temp) / matrix[j][j];&#x000A;&#x000A;	        }&#x000A;&#x000A;	        return data;&#x000A;	    }&#x000A;&#x000A;	    var regression = function (regreMethod, data, order) {&#x000A;&#x000A;	        return regreMethods[regreMethod](data, order);&#x000A;&#x000A;	    };&#x000A;&#x000A;	    return regression;&#x000A;&#x000A;	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &amp;&amp; (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));&#x000A;&#x000A;/***/ }),&#x000A;/* 6 */&#x000A;/***/ (function(module, exports, __webpack_require__) {&#x000A;&#x000A;	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {&#x000A;&#x000A;	    var statistics = {};&#x000A;&#x000A;	    statistics.max = __webpack_require__(7);&#x000A;	    statistics.deviation = __webpack_require__(8);&#x000A;	    statistics.mean = __webpack_require__(10);&#x000A;	    statistics.median = __webpack_require__(12);&#x000A;	    statistics.min = __webpack_require__(14);&#x000A;	    statistics.quantile = __webpack_require__(13);&#x000A;	    statistics.sampleVariance = __webpack_require__(9);&#x000A;	    statistics.sum = __webpack_require__(11);&#x000A;&#x000A;	    return statistics;&#x000A;&#x000A;	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &amp;&amp; (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));&#x000A;&#x000A;/***/ }),&#x000A;/* 7 */&#x000A;/***/ (function(module, exports, __webpack_require__) {&#x000A;&#x000A;	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {&#x000A;&#x000A;	    var number = __webpack_require__(4);&#x000A;	    var isNumber = number.isNumber;&#x000A;&#x000A;	    /**&#x000A;	     * Is a method for computing the max value of a list of numbers,&#x000A;	     * which will filter other data types.&#x000A;	     * @param  {Array.&lt;number&gt;} data&#x000A;	     * @return {number}&#x000A;	     */&#x000A;	    function max(data) {&#x000A;&#x000A;	        var maxData = -Infinity;&#x000A;	        for (var i = 0; i &lt; data.length; i++) {&#x000A;	            if (isNumber(data[i]) &amp;&amp; data[i] &gt; maxData) {&#x000A;	                maxData = data[i];&#x000A;	            }&#x000A;	        }&#x000A;	        return maxData;&#x000A;	    }&#x000A;&#x000A;	    return max;&#x000A;&#x000A;	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &amp;&amp; (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));&#x000A;&#x000A;/***/ }),&#x000A;/* 8 */&#x000A;/***/ (function(module, exports, __webpack_require__) {&#x000A;&#x000A;	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {&#x000A;&#x000A;	    var variance = __webpack_require__(9);&#x000A;&#x000A;	    /**&#x000A;	     * Computing the deviation&#x000A;	     * @param  {Array.&lt;number&gt;} data&#x000A;	     * @return {number}&#x000A;	     */&#x000A;	    return function (data) {&#x000A;&#x000A;	        var squaredDeviation = variance(data);&#x000A;&#x000A;	        return squaredDeviation ? Math.sqrt(squaredDeviation) : squaredDeviation;&#x000A;	    };&#x000A;	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &amp;&amp; (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));&#x000A;&#x000A;/***/ }),&#x000A;/* 9 */&#x000A;/***/ (function(module, exports, __webpack_require__) {&#x000A;&#x000A;	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {&#x000A;&#x000A;	    var number = __webpack_require__(4);&#x000A;	    var isNumber = number.isNumber;&#x000A;	    var mean = __webpack_require__(10);&#x000A;&#x000A;	    /**&#x000A;	     * Computing the variance of list of sample&#x000A;	     * @param  {Array.&lt;number&gt;} data&#x000A;	     * @return {number}&#x000A;	     */&#x000A;	    function sampleVariance(data) {&#x000A;&#x000A;	        var len = data.length;&#x000A;	        if (!len || len &lt; 2) {&#x000A;	            return 0;&#x000A;	        }&#x000A;	        if (data.length &gt;= 2) {&#x000A;&#x000A;	            var meanValue = mean(data);&#x000A;	            var sum = 0;&#x000A;	            var temple;&#x000A;&#x000A;	            for (var i = 0; i &lt; data.length; i++) {&#x000A;	                if (isNumber(data[i])) {&#x000A;	                    temple = data[i] - meanValue;&#x000A;	                    sum += temple * temple;&#x000A;	                }&#x000A;	            }&#x000A;	            return sum / (data.length - 1);&#x000A;	        }&#x000A;	    }&#x000A;&#x000A;	    return sampleVariance;&#x000A;&#x000A;	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &amp;&amp; (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));&#x000A;&#x000A;&#x000A;/***/ }),&#x000A;/* 10 */&#x000A;/***/ (function(module, exports, __webpack_require__) {&#x000A;&#x000A;	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {&#x000A;&#x000A;	    var sum = __webpack_require__(11);&#x000A;&#x000A;	    /**&#x000A;	     * Is a method for computing the mean value of a list of numbers,&#x000A;	     * which will filter other data types.&#x000A;	     * @param  {Array.&lt;number&gt;} data&#x000A;	     * @return {number}&#x000A;	     */&#x000A;	    function mean(data) {&#x000A;&#x000A;	        var len = data.length;&#x000A;&#x000A;	        if (!len) {&#x000A;	            return 0;&#x000A;	        }&#x000A;&#x000A;	        return sum(data) / data.length;&#x000A;&#x000A;	    }&#x000A;&#x000A;	    return mean;&#x000A;&#x000A;&#x000A;	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &amp;&amp; (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));&#x000A;&#x000A;/***/ }),&#x000A;/* 11 */&#x000A;/***/ (function(module, exports, __webpack_require__) {&#x000A;&#x000A;	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {&#x000A;&#x000A;	    var number = __webpack_require__(4);&#x000A;	    var isNumber = number.isNumber;&#x000A;&#x000A;	    /**&#x000A;	     * Is a method for computing the sum of a list of numbers,&#x000A;	     * which will filter other data types.&#x000A;	     * @param  {Array.&lt;number&gt;} data&#x000A;	     * @return {number}&#x000A;	     */&#x000A;	    function sum(data) {&#x000A;&#x000A;	        var len = data.length;&#x000A;&#x000A;	        if (!len) {&#x000A;	            return 0;&#x000A;	        }&#x000A;	        var sumData = 0;&#x000A;	        for (var i = 0; i &lt; len; i++) {&#x000A;	            if (isNumber(data[i])) {&#x000A;	                sumData += data[i];&#x000A;	            }&#x000A;	        }&#x000A;	        return sumData;&#x000A;	    }&#x000A;&#x000A;	    return sum;&#x000A;&#x000A;	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &amp;&amp; (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));&#x000A;&#x000A;/***/ }),&#x000A;/* 12 */&#x000A;/***/ (function(module, exports, __webpack_require__) {&#x000A;&#x000A;	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {&#x000A;&#x000A;	    var quantile = __webpack_require__(13);&#x000A;&#x000A;	    /**&#x000A;	     * Is a method for computing the median value of a sorted array of numbers&#x000A;	     * @param  {Array.&lt;number&gt;} data&#x000A;	     * @return {number}&#x000A;	     */&#x000A;	    function median(data) {&#x000A;&#x000A;	        return quantile(data, 0.5);&#x000A;	    }&#x000A;&#x000A;	    return median;&#x000A;&#x000A;	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &amp;&amp; (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));&#x000A;&#x000A;/***/ }),&#x000A;/* 13 */&#x000A;/***/ (function(module, exports, __webpack_require__) {&#x000A;&#x000A;	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {&#x000A;&#x000A;	    /**&#x000A;	     * Estimating quantiles from a sorted sample of numbers&#x000A;	     * @see https://en.wikipedia.org/wiki/Quantile#Estimating_quantiles_from_a_sample&#x000A;	     * R-7 method&#x000A;	     * @param  {Array.&lt;number&gt;} data  sorted array&#x000A;	     * @param  {number} p&#x000A;	     */&#x000A;	    return function (data, p) {&#x000A;&#x000A;	        var len = data.length;&#x000A;&#x000A;	        if (!len) {&#x000A;	            return 0;&#x000A;	        }&#x000A;	        if (p &lt;= 0 || len &lt; 2) {&#x000A;	            return data[0];&#x000A;	        }&#x000A;	        if (p &gt;= 1) {&#x000A;	            return data[len -1];&#x000A;	        }&#x000A;	        // in the wikipedia&#39;s R-7 method h = (N - 1)p + 1, but here array index start from 0&#x000A;	        var h = (len - 1) * p;&#x000A;	        var i = Math.floor(h);&#x000A;	        var a = data[i];&#x000A;	        var b = data[i + 1];&#x000A;	        return a + (b - a) * (h - i);&#x000A;	    };&#x000A;&#x000A;	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &amp;&amp; (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));&#x000A;&#x000A;/***/ }),&#x000A;/* 14 */&#x000A;/***/ (function(module, exports, __webpack_require__) {&#x000A;&#x000A;	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {&#x000A;&#x000A;	    var number = __webpack_require__(4);&#x000A;	    var isNumber = number.isNumber;&#x000A;&#x000A;	    /**&#x000A;	     * Is a method for computing the min value of a list of numbers,&#x000A;	     * which will filter other data types.&#x000A;	     * @param  {Array.&lt;number&gt;} data&#x000A;	     * @return {number}&#x000A;	     */&#x000A;	    function min(data) {&#x000A;&#x000A;	        var minData = Infinity;&#x000A;	        for (var i = 0; i &lt; data.length; i++) {&#x000A;	            if (isNumber(data[i]) &amp;&amp; data[i] &lt; minData) {&#x000A;	                minData = data[i];&#x000A;	            }&#x000A;	        }&#x000A;	        return minData;&#x000A;	    }&#x000A;&#x000A;	    return min;&#x000A;&#x000A;	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &amp;&amp; (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));&#x000A;&#x000A;/***/ }),&#x000A;/* 15 */&#x000A;/***/ (function(module, exports, __webpack_require__) {&#x000A;&#x000A;	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {&#x000A;&#x000A;	    var max = __webpack_require__(7);&#x000A;	    var min = __webpack_require__(14);&#x000A;	    var quantile = __webpack_require__(13);&#x000A;	    var deviation = __webpack_require__(8);&#x000A;	    var dataProcess = __webpack_require__(2);&#x000A;	    var dataPreprocess = dataProcess.dataPreprocess;&#x000A;	    var getPrecision = dataProcess.getPrecision;&#x000A;	    var array = __webpack_require__(3);&#x000A;	    var ascending = array.ascending;&#x000A;	    var map = array.map;&#x000A;	    var range = __webpack_require__(16);&#x000A;	    var bisect = array.bisect;&#x000A;	    var tickStep = __webpack_require__(17);&#x000A;&#x000A;	    /**&#x000A;	     * Compute bins for histogram&#x000A;	     * @param  {Array.&lt;number&gt;} data&#x000A;	     * @param  {string} threshold&#x000A;	     * @return {Object}&#x000A;	     */&#x000A;	    function computeBins(data, threshold) {&#x000A;&#x000A;	        if (threshold == null) {&#x000A;	            threshold = thresholdMethod.squareRoot;&#x000A;	        }&#x000A;	        else {&#x000A;	            threshold = thresholdMethod[threshold];&#x000A;	        }&#x000A;	        var values = dataPreprocess(data);&#x000A;	        var maxValue = max(values);&#x000A;	        var minValue = min(values);&#x000A;	        var binsNumber = threshold(values, minValue, maxValue);&#x000A;	        var step = tickStep(minValue, maxValue, binsNumber);&#x000A;	        var precision = -Math.floor(Math.log(Math.abs(maxValue - minValue) / binsNumber) / Math.LN10);&#x000A;	        &#x000A;	        // return the xAxis coordinate for each bins, except the end point of the value&#x000A;	        var rangeArray = range(&#x000A;	                // use function toFixed() to avoid data like &#39;0.700000001&#39;&#x000A;	                +((Math.ceil(minValue / step) * step).toFixed(precision)),&#x000A;	                +((Math.floor(maxValue / step) * step).toFixed(precision)),&#x000A;	                step,&#x000A;	                precision&#x000A;	            );&#x000A;&#x000A;	        var len = rangeArray.length;&#x000A;&#x000A;	        var bins = new Array(len + 1);&#x000A;&#x000A;	        for (var i = 0; i &lt;= len; i++) {&#x000A;	            bins[i] = {};&#x000A;	            bins[i].sample = [];&#x000A;	            bins[i].x0 = i &gt; 0 &#x000A;	                ? rangeArray[i - 1]&#x000A;	                : (rangeArray[i] - minValue) === step&#x000A;	                ? minValue&#x000A;	                : (rangeArray[i] - step);&#x000A;	            bins[i].x1 = i &lt; len&#x000A;	                ? rangeArray[i]&#x000A;	                : (maxValue - rangeArray[i-1]) === step&#x000A;	                ? maxValue&#x000A;	                : rangeArray[i - 1] + step;&#x000A;	        }&#x000A;&#x000A;	        for (var i = 0; i &lt; values.length; i++) {&#x000A;	            if (minValue &lt;= values[i] &amp;&amp; values[i] &lt;= maxValue) {&#x000A;	                bins[bisect(rangeArray, values[i], 0, len)].sample.push(values[i]);&#x000A;	            }&#x000A;	        }&#x000A;&#x000A;	        var data = map(bins, function (bin) {&#x000A;	            // use function toFixed() to avoid data like &#39;6.5666638489&#39;&#x000A;	            return [+((bin.x0 + bin.x1) / 2).toFixed(precision), bin.sample.length];&#x000A;	        });&#x000A;&#x000A;	        var customData = map(bins, function (bin) {&#x000A;	            return [bin.x0, bin.x1, bin.sample.length];&#x000A;	        });&#x000A;&#x000A;	        return {&#x000A;	            bins: bins,&#x000A;	            data: data,&#x000A;	            customData: customData&#x000A;	        };&#x000A;	    }&#x000A;&#x000A;	    /**&#x000A;	     * Four kinds of threshold methods used to&#x000A;	     * compute how much bins the histogram should be divided&#x000A;	     * @see  https://en.wikipedia.org/wiki/Histogram&#x000A;	     * @type {Object}&#x000A;	     */&#x000A;	    var thresholdMethod = {&#x000A;&#x000A;	        squareRoot: function (data) {&#x000A;&#x000A;	            var bins = Math.ceil(Math.sqrt(data.length));&#x000A;&#x000A;	            return bins &gt; 50 ? 50 : bins;&#x000A;	        },&#x000A;&#x000A;	        scott: function (data, min, max) {&#x000A;&#x000A;	            return Math.ceil((max - min) / (3.5 * deviation(data) * Math.pow(data.length, -1 / 3)));&#x000A;	        },&#x000A;&#x000A;	        freedmanDiaconis: function (data, min, max) {&#x000A;&#x000A;	            data.sort(ascending);&#x000A;&#x000A;	            return Math.ceil(&#x000A;	                (max - min) / (2 * (quantile(data, 0.75) - quantile(data, 0.25)) * Math.pow(data.length, -1 / 3))&#x000A;	            );&#x000A;	        },&#x000A;&#x000A;	        sturges: function (data) {&#x000A;&#x000A;	            return Math.ceil(Math.log(data.length) / Math.LN2) + 1;&#x000A;&#x000A;	        }&#x000A;	    };&#x000A;&#x000A;	    return computeBins;&#x000A;&#x000A;	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &amp;&amp; (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));&#x000A;&#x000A;/***/ }),&#x000A;/* 16 */&#x000A;/***/ (function(module, exports, __webpack_require__) {&#x000A;&#x000A;	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {&#x000A;&#x000A;	    var dataProcess = __webpack_require__(2);&#x000A;	    var getPrecision = dataProcess.getPrecision;&#x000A;&#x000A;	    /**&#x000A;	     * Computing range array.&#x000A;	     * Adding param precision to fix range value, avoiding range[i] = 0.7000000001.&#x000A;	     * @param  {number} start&#x000A;	     * @param  {number} end&#x000A;	     * @param  {number} step&#x000A;	     * @param  {number} precision&#x000A;	     * @return {Array.&lt;number&gt;}&#x000A;	     */&#x000A;	    return function (start, end, step, precision) {&#x000A;&#x000A;	        var len = arguments.length;&#x000A;&#x000A;	        if (len &lt; 2) {&#x000A;	            end = start;&#x000A;	            start = 0;&#x000A;	            step = 1;&#x000A;	        }&#x000A;	        else if (len &lt; 3) {&#x000A;	            step = 1;&#x000A;	        }&#x000A;	        else if (len &lt; 4) {&#x000A;	            step = +step;&#x000A;	            precision = getPrecision(step);&#x000A;	        }&#x000A;	        else {&#x000A;	            precision = +precision;&#x000A;	        }&#x000A;&#x000A;	        var n = Math.ceil(((end - start) / step).toFixed(precision));&#x000A;	        var range = new Array(n + 1);&#x000A;	        for (var i = 0; i &lt; n + 1; i++) {&#x000A;	            range[i] = +(start + i * step).toFixed(precision);&#x000A;	        }&#x000A;	        return range;&#x000A;	    };&#x000A;&#x000A;	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &amp;&amp; (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));&#x000A;&#x000A;/***/ }),&#x000A;/* 17 */&#x000A;/***/ (function(module, exports, __webpack_require__) {&#x000A;&#x000A;	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {&#x000A;&#x000A;	    /**&#x000A;	     * Computing the length of step&#x000A;	     * @see  https://github.com/d3/d3-array/blob/master/src/ticks.js&#x000A;	     * @param {number} start&#x000A;	     * @param {number} stop&#x000A;	     * @param {number} count&#x000A;	     */&#x000A;	    return function (start, stop, count) {&#x000A;&#x000A;	        var step0 = Math.abs(stop - start) / count;&#x000A;	        var precision = Math.floor(Math.log(step0) / Math.LN10);&#x000A;	        var step1 = Math.pow(10, precision);&#x000A;	        var error = step0 / step1;&#x000A;&#x000A;	        if (error &gt;= Math.sqrt(50)) {&#x000A;	            step1 *= 10;&#x000A;	        }&#x000A;	        else if (error &gt;= Math.sqrt(10)) {&#x000A;	            step1 *= 5;&#x000A;	        }&#x000A;	        else if(error &gt;= Math.sqrt(2)) {&#x000A;	            step1 *= 2;&#x000A;	        }&#x000A;	        return +((stop &gt;= start ? step1 : -step1).toFixed(-precision));&#x000A;&#x000A;	    };&#x000A;&#x000A;	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &amp;&amp; (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));&#x000A;&#x000A;&#x000A;/***/ })&#x000A;/******/ ])&#x000A;});&#x000A;;</textarea>
<a class="ui button" id="copy-text" href="#">一键复制</a>
<a class="ui button edit-blob" title="只有登陆后才可以编辑" href="/yyy0118/echarts-stat/edit/master/dist/ecStat.js">编辑</a>
<a class="ui button web-ide" target="_blank" href="/-/ide/project/yyy0118/echarts-stat/edit/master/-/dist/ecStat.js">Web IDE</a>
<a class="ui button edit-raw" target="_blank" href="/yyy0118/echarts-stat/raw/master/dist/ecStat.js">原始数据</a>
<a class="ui button edit-blame" href="/yyy0118/echarts-stat/blame/master/dist/ecStat.js">按行查看</a>
<a class="ui button edit-history" href="/yyy0118/echarts-stat/commits/master/dist/ecStat.js">历史</a>
</div>
<script>
  "use strict";
  try {
    if((gon.wait_fork!=undefined && gon.wait_fork==true) || (gon.wait_fetch!=undefined && gon.wait_fetch==true)){
      $('.edit-blob').popup({content:"当前仓库正在后台处理中,暂时无法编辑", on: 'hover', delay: { show: 200, hide: 200 }});
      $('.edit-blob').click(function(e){
        e.preventDefault();
      })
    }
  
    var setUrl = function() {
      var params = window.location.search
      if (params==undefined || $.trim(params).length==0) return;
      $('span.options').children('.basic').find('a').each(function(index,ele){
        var origin_href = $(ele).attr('href');
        if (origin_href!="#" && origin_href.indexOf('?') == -1){
          $(ele).attr('href',origin_href+params);
        }
      });
    }
  
    setUrl();
  
    var clipboard = null,
        $btncopy  = $("#copy-text");
  
    clipboard = new Clipboard("#copy-text", {
      text: function(trigger) {
        return $("#blob_raw").val();
      }
    })
  
    clipboard.on('success', function(e) {
      $btncopy.popup('hide');
      $btncopy.popup('destroy');
      $btncopy.popup({content: '已复制', position: 'bottom center'});
      $btncopy.popup('show');
    })
  
    clipboard.on('error', function(e) {
      var giteeModal = new GiteeModalHelper({okText: '确定'});
      giteeModal.alert("一键复制", '复制失败，请手动复制');
    })
  
    $(function() {
      $btncopy.popup({
        content: '点击复制',
        position: 'bottom center'
      })
    })
  
  } catch (error) {
    console.log('blob/action error:' + error);
  }
  
  $('.disabled-edit-readonly').popup({
    content: "只读文件不可编辑",
    className: {
      popup: 'ui popup',
    },
    position: 'bottom center',
  })
  $('.disabled-edit-readonly, .disabled-edit-status').click(function() {
    return false
  })
  $('.has_tooltip').popup({
    position: 'top center'
  });
</script>
<style>
  .disabled-edit-readonly, .disabled-edit-status {
    background-color: #dcddde !important;
    color: rgba(0, 0, 0, 0.4) !important;
    opacity: 0.3 !important;
    background-image: none !important;
    -webkit-box-shadow: none !important;
            box-shadow: none !important;
    cursor: default !important; }
</style>
</div>
</div>
<div class='contributor-description'><span class='recent-commit' style='margin-top: 0.7rem'>
<a class="commit-author-link  js-popover-card" data-username="null" href="mailto:annong035@gmail.com">deqingli</a>
<span>提交于</span>
<span class='timeago commit-date' title='2018-03-29 16:07:43 +0800'>
2018-03-29 16:07
</span>
.
<a href="/yyy0118/echarts-stat/commit/14cfbee310c60acd51158f64c5470eca77561388">release version 1.1.1</a>
</span>
</div>
</div>
<div class='clearfix'></div>
<div class='file_content code'>
<div class='lines white'>
<div class='line-numbers'><a href='#L1' id='L1'>1</a><a href='#L2' id='L2'>2</a><a href='#L3' id='L3'>3</a><a href='#L4' id='L4'>4</a><a href='#L5' id='L5'>5</a><a href='#L6' id='L6'>6</a><a href='#L7' id='L7'>7</a><a href='#L8' id='L8'>8</a><a href='#L9' id='L9'>9</a><a href='#L10' id='L10'>10</a><a href='#L11' id='L11'>11</a><a href='#L12' id='L12'>12</a><a href='#L13' id='L13'>13</a><a href='#L14' id='L14'>14</a><a href='#L15' id='L15'>15</a><a href='#L16' id='L16'>16</a><a href='#L17' id='L17'>17</a><a href='#L18' id='L18'>18</a><a href='#L19' id='L19'>19</a><a href='#L20' id='L20'>20</a><a href='#L21' id='L21'>21</a><a href='#L22' id='L22'>22</a><a href='#L23' id='L23'>23</a><a href='#L24' id='L24'>24</a><a href='#L25' id='L25'>25</a><a href='#L26' id='L26'>26</a><a href='#L27' id='L27'>27</a><a href='#L28' id='L28'>28</a><a href='#L29' id='L29'>29</a><a href='#L30' id='L30'>30</a><a href='#L31' id='L31'>31</a><a href='#L32' id='L32'>32</a><a href='#L33' id='L33'>33</a><a href='#L34' id='L34'>34</a><a href='#L35' id='L35'>35</a><a href='#L36' id='L36'>36</a><a href='#L37' id='L37'>37</a><a href='#L38' id='L38'>38</a><a href='#L39' id='L39'>39</a><a href='#L40' id='L40'>40</a><a href='#L41' id='L41'>41</a><a href='#L42' id='L42'>42</a><a href='#L43' id='L43'>43</a><a href='#L44' id='L44'>44</a><a href='#L45' id='L45'>45</a><a href='#L46' id='L46'>46</a><a href='#L47' id='L47'>47</a><a href='#L48' id='L48'>48</a><a href='#L49' id='L49'>49</a><a href='#L50' id='L50'>50</a><a href='#L51' id='L51'>51</a><a href='#L52' id='L52'>52</a><a href='#L53' id='L53'>53</a><a href='#L54' id='L54'>54</a><a href='#L55' id='L55'>55</a><a href='#L56' id='L56'>56</a><a href='#L57' id='L57'>57</a><a href='#L58' id='L58'>58</a><a href='#L59' id='L59'>59</a><a href='#L60' id='L60'>60</a><a href='#L61' id='L61'>61</a><a href='#L62' id='L62'>62</a><a href='#L63' id='L63'>63</a><a href='#L64' id='L64'>64</a><a href='#L65' id='L65'>65</a><a href='#L66' id='L66'>66</a><a href='#L67' id='L67'>67</a><a href='#L68' id='L68'>68</a><a href='#L69' id='L69'>69</a><a href='#L70' id='L70'>70</a><a href='#L71' id='L71'>71</a><a href='#L72' id='L72'>72</a><a href='#L73' id='L73'>73</a><a href='#L74' id='L74'>74</a><a href='#L75' id='L75'>75</a><a href='#L76' id='L76'>76</a><a href='#L77' id='L77'>77</a><a href='#L78' id='L78'>78</a><a href='#L79' id='L79'>79</a><a href='#L80' id='L80'>80</a><a href='#L81' id='L81'>81</a><a href='#L82' id='L82'>82</a><a href='#L83' id='L83'>83</a><a href='#L84' id='L84'>84</a><a href='#L85' id='L85'>85</a><a href='#L86' id='L86'>86</a><a href='#L87' id='L87'>87</a><a href='#L88' id='L88'>88</a><a href='#L89' id='L89'>89</a><a href='#L90' id='L90'>90</a><a href='#L91' id='L91'>91</a><a href='#L92' id='L92'>92</a><a href='#L93' id='L93'>93</a><a href='#L94' id='L94'>94</a><a href='#L95' id='L95'>95</a><a href='#L96' id='L96'>96</a><a href='#L97' id='L97'>97</a><a href='#L98' id='L98'>98</a><a href='#L99' id='L99'>99</a><a href='#L100' id='L100'>100</a><a href='#L101' id='L101'>101</a><a href='#L102' id='L102'>102</a><a href='#L103' id='L103'>103</a><a href='#L104' id='L104'>104</a><a href='#L105' id='L105'>105</a><a href='#L106' id='L106'>106</a><a href='#L107' id='L107'>107</a><a href='#L108' id='L108'>108</a><a href='#L109' id='L109'>109</a><a href='#L110' id='L110'>110</a><a href='#L111' id='L111'>111</a><a href='#L112' id='L112'>112</a><a href='#L113' id='L113'>113</a><a href='#L114' id='L114'>114</a><a href='#L115' id='L115'>115</a><a href='#L116' id='L116'>116</a><a href='#L117' id='L117'>117</a><a href='#L118' id='L118'>118</a><a href='#L119' id='L119'>119</a><a href='#L120' id='L120'>120</a><a href='#L121' id='L121'>121</a><a href='#L122' id='L122'>122</a><a href='#L123' id='L123'>123</a><a href='#L124' id='L124'>124</a><a href='#L125' id='L125'>125</a><a href='#L126' id='L126'>126</a><a href='#L127' id='L127'>127</a><a href='#L128' id='L128'>128</a><a href='#L129' id='L129'>129</a><a href='#L130' id='L130'>130</a><a href='#L131' id='L131'>131</a><a href='#L132' id='L132'>132</a><a href='#L133' id='L133'>133</a><a href='#L134' id='L134'>134</a><a href='#L135' id='L135'>135</a><a href='#L136' id='L136'>136</a><a href='#L137' id='L137'>137</a><a href='#L138' id='L138'>138</a><a href='#L139' id='L139'>139</a><a href='#L140' id='L140'>140</a><a href='#L141' id='L141'>141</a><a href='#L142' id='L142'>142</a><a href='#L143' id='L143'>143</a><a href='#L144' id='L144'>144</a><a href='#L145' id='L145'>145</a><a href='#L146' id='L146'>146</a><a href='#L147' id='L147'>147</a><a href='#L148' id='L148'>148</a><a href='#L149' id='L149'>149</a><a href='#L150' id='L150'>150</a><a href='#L151' id='L151'>151</a><a href='#L152' id='L152'>152</a><a href='#L153' id='L153'>153</a><a href='#L154' id='L154'>154</a><a href='#L155' id='L155'>155</a><a href='#L156' id='L156'>156</a><a href='#L157' id='L157'>157</a><a href='#L158' id='L158'>158</a><a href='#L159' id='L159'>159</a><a href='#L160' id='L160'>160</a><a href='#L161' id='L161'>161</a><a href='#L162' id='L162'>162</a><a href='#L163' id='L163'>163</a><a href='#L164' id='L164'>164</a><a href='#L165' id='L165'>165</a><a href='#L166' id='L166'>166</a><a href='#L167' id='L167'>167</a><a href='#L168' id='L168'>168</a><a href='#L169' id='L169'>169</a><a href='#L170' id='L170'>170</a><a href='#L171' id='L171'>171</a><a href='#L172' id='L172'>172</a><a href='#L173' id='L173'>173</a><a href='#L174' id='L174'>174</a><a href='#L175' id='L175'>175</a><a href='#L176' id='L176'>176</a><a href='#L177' id='L177'>177</a><a href='#L178' id='L178'>178</a><a href='#L179' id='L179'>179</a><a href='#L180' id='L180'>180</a><a href='#L181' id='L181'>181</a><a href='#L182' id='L182'>182</a><a href='#L183' id='L183'>183</a><a href='#L184' id='L184'>184</a><a href='#L185' id='L185'>185</a><a href='#L186' id='L186'>186</a><a href='#L187' id='L187'>187</a><a href='#L188' id='L188'>188</a><a href='#L189' id='L189'>189</a><a href='#L190' id='L190'>190</a><a href='#L191' id='L191'>191</a><a href='#L192' id='L192'>192</a><a href='#L193' id='L193'>193</a><a href='#L194' id='L194'>194</a><a href='#L195' id='L195'>195</a><a href='#L196' id='L196'>196</a><a href='#L197' id='L197'>197</a><a href='#L198' id='L198'>198</a><a href='#L199' id='L199'>199</a><a href='#L200' id='L200'>200</a><a href='#L201' id='L201'>201</a><a href='#L202' id='L202'>202</a><a href='#L203' id='L203'>203</a><a href='#L204' id='L204'>204</a><a href='#L205' id='L205'>205</a><a href='#L206' id='L206'>206</a><a href='#L207' id='L207'>207</a><a href='#L208' id='L208'>208</a><a href='#L209' id='L209'>209</a><a href='#L210' id='L210'>210</a><a href='#L211' id='L211'>211</a><a href='#L212' id='L212'>212</a><a href='#L213' id='L213'>213</a><a href='#L214' id='L214'>214</a><a href='#L215' id='L215'>215</a><a href='#L216' id='L216'>216</a><a href='#L217' id='L217'>217</a><a href='#L218' id='L218'>218</a><a href='#L219' id='L219'>219</a><a href='#L220' id='L220'>220</a><a href='#L221' id='L221'>221</a><a href='#L222' id='L222'>222</a><a href='#L223' id='L223'>223</a><a href='#L224' id='L224'>224</a><a href='#L225' id='L225'>225</a><a href='#L226' id='L226'>226</a><a href='#L227' id='L227'>227</a><a href='#L228' id='L228'>228</a><a href='#L229' id='L229'>229</a><a href='#L230' id='L230'>230</a><a href='#L231' id='L231'>231</a><a href='#L232' id='L232'>232</a><a href='#L233' id='L233'>233</a><a href='#L234' id='L234'>234</a><a href='#L235' id='L235'>235</a><a href='#L236' id='L236'>236</a><a href='#L237' id='L237'>237</a><a href='#L238' id='L238'>238</a><a href='#L239' id='L239'>239</a><a href='#L240' id='L240'>240</a><a href='#L241' id='L241'>241</a><a href='#L242' id='L242'>242</a><a href='#L243' id='L243'>243</a><a href='#L244' id='L244'>244</a><a href='#L245' id='L245'>245</a><a href='#L246' id='L246'>246</a><a href='#L247' id='L247'>247</a><a href='#L248' id='L248'>248</a><a href='#L249' id='L249'>249</a><a href='#L250' id='L250'>250</a><a href='#L251' id='L251'>251</a><a href='#L252' id='L252'>252</a><a href='#L253' id='L253'>253</a><a href='#L254' id='L254'>254</a><a href='#L255' id='L255'>255</a><a href='#L256' id='L256'>256</a><a href='#L257' id='L257'>257</a><a href='#L258' id='L258'>258</a><a href='#L259' id='L259'>259</a><a href='#L260' id='L260'>260</a><a href='#L261' id='L261'>261</a><a href='#L262' id='L262'>262</a><a href='#L263' id='L263'>263</a><a href='#L264' id='L264'>264</a><a href='#L265' id='L265'>265</a><a href='#L266' id='L266'>266</a><a href='#L267' id='L267'>267</a><a href='#L268' id='L268'>268</a><a href='#L269' id='L269'>269</a><a href='#L270' id='L270'>270</a><a href='#L271' id='L271'>271</a><a href='#L272' id='L272'>272</a><a href='#L273' id='L273'>273</a><a href='#L274' id='L274'>274</a><a href='#L275' id='L275'>275</a><a href='#L276' id='L276'>276</a><a href='#L277' id='L277'>277</a><a href='#L278' id='L278'>278</a><a href='#L279' id='L279'>279</a><a href='#L280' id='L280'>280</a><a href='#L281' id='L281'>281</a><a href='#L282' id='L282'>282</a><a href='#L283' id='L283'>283</a><a href='#L284' id='L284'>284</a><a href='#L285' id='L285'>285</a><a href='#L286' id='L286'>286</a><a href='#L287' id='L287'>287</a><a href='#L288' id='L288'>288</a><a href='#L289' id='L289'>289</a><a href='#L290' id='L290'>290</a><a href='#L291' id='L291'>291</a><a href='#L292' id='L292'>292</a><a href='#L293' id='L293'>293</a><a href='#L294' id='L294'>294</a><a href='#L295' id='L295'>295</a><a href='#L296' id='L296'>296</a><a href='#L297' id='L297'>297</a><a href='#L298' id='L298'>298</a><a href='#L299' id='L299'>299</a><a href='#L300' id='L300'>300</a><a href='#L301' id='L301'>301</a><a href='#L302' id='L302'>302</a><a href='#L303' id='L303'>303</a><a href='#L304' id='L304'>304</a><a href='#L305' id='L305'>305</a><a href='#L306' id='L306'>306</a><a href='#L307' id='L307'>307</a><a href='#L308' id='L308'>308</a><a href='#L309' id='L309'>309</a><a href='#L310' id='L310'>310</a><a href='#L311' id='L311'>311</a><a href='#L312' id='L312'>312</a><a href='#L313' id='L313'>313</a><a href='#L314' id='L314'>314</a><a href='#L315' id='L315'>315</a><a href='#L316' id='L316'>316</a><a href='#L317' id='L317'>317</a><a href='#L318' id='L318'>318</a><a href='#L319' id='L319'>319</a><a href='#L320' id='L320'>320</a><a href='#L321' id='L321'>321</a><a href='#L322' id='L322'>322</a><a href='#L323' id='L323'>323</a><a href='#L324' id='L324'>324</a><a href='#L325' id='L325'>325</a><a href='#L326' id='L326'>326</a><a href='#L327' id='L327'>327</a><a href='#L328' id='L328'>328</a><a href='#L329' id='L329'>329</a><a href='#L330' id='L330'>330</a><a href='#L331' id='L331'>331</a><a href='#L332' id='L332'>332</a><a href='#L333' id='L333'>333</a><a href='#L334' id='L334'>334</a><a href='#L335' id='L335'>335</a><a href='#L336' id='L336'>336</a><a href='#L337' id='L337'>337</a><a href='#L338' id='L338'>338</a><a href='#L339' id='L339'>339</a><a href='#L340' id='L340'>340</a><a href='#L341' id='L341'>341</a><a href='#L342' id='L342'>342</a><a href='#L343' id='L343'>343</a><a href='#L344' id='L344'>344</a><a href='#L345' id='L345'>345</a><a href='#L346' id='L346'>346</a><a href='#L347' id='L347'>347</a><a href='#L348' id='L348'>348</a><a href='#L349' id='L349'>349</a><a href='#L350' id='L350'>350</a><a href='#L351' id='L351'>351</a><a href='#L352' id='L352'>352</a><a href='#L353' id='L353'>353</a><a href='#L354' id='L354'>354</a><a href='#L355' id='L355'>355</a><a href='#L356' id='L356'>356</a><a href='#L357' id='L357'>357</a><a href='#L358' id='L358'>358</a><a href='#L359' id='L359'>359</a><a href='#L360' id='L360'>360</a><a href='#L361' id='L361'>361</a><a href='#L362' id='L362'>362</a><a href='#L363' id='L363'>363</a><a href='#L364' id='L364'>364</a><a href='#L365' id='L365'>365</a><a href='#L366' id='L366'>366</a><a href='#L367' id='L367'>367</a><a href='#L368' id='L368'>368</a><a href='#L369' id='L369'>369</a><a href='#L370' id='L370'>370</a><a href='#L371' id='L371'>371</a><a href='#L372' id='L372'>372</a><a href='#L373' id='L373'>373</a><a href='#L374' id='L374'>374</a><a href='#L375' id='L375'>375</a><a href='#L376' id='L376'>376</a><a href='#L377' id='L377'>377</a><a href='#L378' id='L378'>378</a><a href='#L379' id='L379'>379</a><a href='#L380' id='L380'>380</a><a href='#L381' id='L381'>381</a><a href='#L382' id='L382'>382</a><a href='#L383' id='L383'>383</a><a href='#L384' id='L384'>384</a><a href='#L385' id='L385'>385</a><a href='#L386' id='L386'>386</a><a href='#L387' id='L387'>387</a><a href='#L388' id='L388'>388</a><a href='#L389' id='L389'>389</a><a href='#L390' id='L390'>390</a><a href='#L391' id='L391'>391</a><a href='#L392' id='L392'>392</a><a href='#L393' id='L393'>393</a><a href='#L394' id='L394'>394</a><a href='#L395' id='L395'>395</a><a href='#L396' id='L396'>396</a><a href='#L397' id='L397'>397</a><a href='#L398' id='L398'>398</a><a href='#L399' id='L399'>399</a><a href='#L400' id='L400'>400</a><a href='#L401' id='L401'>401</a><a href='#L402' id='L402'>402</a><a href='#L403' id='L403'>403</a><a href='#L404' id='L404'>404</a><a href='#L405' id='L405'>405</a><a href='#L406' id='L406'>406</a><a href='#L407' id='L407'>407</a><a href='#L408' id='L408'>408</a><a href='#L409' id='L409'>409</a><a href='#L410' id='L410'>410</a><a href='#L411' id='L411'>411</a><a href='#L412' id='L412'>412</a><a href='#L413' id='L413'>413</a><a href='#L414' id='L414'>414</a><a href='#L415' id='L415'>415</a><a href='#L416' id='L416'>416</a><a href='#L417' id='L417'>417</a><a href='#L418' id='L418'>418</a><a href='#L419' id='L419'>419</a><a href='#L420' id='L420'>420</a><a href='#L421' id='L421'>421</a><a href='#L422' id='L422'>422</a><a href='#L423' id='L423'>423</a><a href='#L424' id='L424'>424</a><a href='#L425' id='L425'>425</a><a href='#L426' id='L426'>426</a><a href='#L427' id='L427'>427</a><a href='#L428' id='L428'>428</a><a href='#L429' id='L429'>429</a><a href='#L430' id='L430'>430</a><a href='#L431' id='L431'>431</a><a href='#L432' id='L432'>432</a><a href='#L433' id='L433'>433</a><a href='#L434' id='L434'>434</a><a href='#L435' id='L435'>435</a><a href='#L436' id='L436'>436</a><a href='#L437' id='L437'>437</a><a href='#L438' id='L438'>438</a><a href='#L439' id='L439'>439</a><a href='#L440' id='L440'>440</a><a href='#L441' id='L441'>441</a><a href='#L442' id='L442'>442</a><a href='#L443' id='L443'>443</a><a href='#L444' id='L444'>444</a><a href='#L445' id='L445'>445</a><a href='#L446' id='L446'>446</a><a href='#L447' id='L447'>447</a><a href='#L448' id='L448'>448</a><a href='#L449' id='L449'>449</a><a href='#L450' id='L450'>450</a><a href='#L451' id='L451'>451</a><a href='#L452' id='L452'>452</a><a href='#L453' id='L453'>453</a><a href='#L454' id='L454'>454</a><a href='#L455' id='L455'>455</a><a href='#L456' id='L456'>456</a><a href='#L457' id='L457'>457</a><a href='#L458' id='L458'>458</a><a href='#L459' id='L459'>459</a><a href='#L460' id='L460'>460</a><a href='#L461' id='L461'>461</a><a href='#L462' id='L462'>462</a><a href='#L463' id='L463'>463</a><a href='#L464' id='L464'>464</a><a href='#L465' id='L465'>465</a><a href='#L466' id='L466'>466</a><a href='#L467' id='L467'>467</a><a href='#L468' id='L468'>468</a><a href='#L469' id='L469'>469</a><a href='#L470' id='L470'>470</a><a href='#L471' id='L471'>471</a><a href='#L472' id='L472'>472</a><a href='#L473' id='L473'>473</a><a href='#L474' id='L474'>474</a><a href='#L475' id='L475'>475</a><a href='#L476' id='L476'>476</a><a href='#L477' id='L477'>477</a><a href='#L478' id='L478'>478</a><a href='#L479' id='L479'>479</a><a href='#L480' id='L480'>480</a><a href='#L481' id='L481'>481</a><a href='#L482' id='L482'>482</a><a href='#L483' id='L483'>483</a><a href='#L484' id='L484'>484</a><a href='#L485' id='L485'>485</a><a href='#L486' id='L486'>486</a><a href='#L487' id='L487'>487</a><a href='#L488' id='L488'>488</a><a href='#L489' id='L489'>489</a><a href='#L490' id='L490'>490</a><a href='#L491' id='L491'>491</a><a href='#L492' id='L492'>492</a><a href='#L493' id='L493'>493</a><a href='#L494' id='L494'>494</a><a href='#L495' id='L495'>495</a><a href='#L496' id='L496'>496</a><a href='#L497' id='L497'>497</a><a href='#L498' id='L498'>498</a><a href='#L499' id='L499'>499</a><a href='#L500' id='L500'>500</a><a href='#L501' id='L501'>501</a><a href='#L502' id='L502'>502</a><a href='#L503' id='L503'>503</a><a href='#L504' id='L504'>504</a><a href='#L505' id='L505'>505</a><a href='#L506' id='L506'>506</a><a href='#L507' id='L507'>507</a><a href='#L508' id='L508'>508</a><a href='#L509' id='L509'>509</a><a href='#L510' id='L510'>510</a><a href='#L511' id='L511'>511</a><a href='#L512' id='L512'>512</a><a href='#L513' id='L513'>513</a><a href='#L514' id='L514'>514</a><a href='#L515' id='L515'>515</a><a href='#L516' id='L516'>516</a><a href='#L517' id='L517'>517</a><a href='#L518' id='L518'>518</a><a href='#L519' id='L519'>519</a><a href='#L520' id='L520'>520</a><a href='#L521' id='L521'>521</a><a href='#L522' id='L522'>522</a><a href='#L523' id='L523'>523</a><a href='#L524' id='L524'>524</a><a href='#L525' id='L525'>525</a><a href='#L526' id='L526'>526</a><a href='#L527' id='L527'>527</a><a href='#L528' id='L528'>528</a><a href='#L529' id='L529'>529</a><a href='#L530' id='L530'>530</a><a href='#L531' id='L531'>531</a><a href='#L532' id='L532'>532</a><a href='#L533' id='L533'>533</a><a href='#L534' id='L534'>534</a><a href='#L535' id='L535'>535</a><a href='#L536' id='L536'>536</a><a href='#L537' id='L537'>537</a><a href='#L538' id='L538'>538</a><a href='#L539' id='L539'>539</a><a href='#L540' id='L540'>540</a><a href='#L541' id='L541'>541</a><a href='#L542' id='L542'>542</a><a href='#L543' id='L543'>543</a><a href='#L544' id='L544'>544</a><a href='#L545' id='L545'>545</a><a href='#L546' id='L546'>546</a><a href='#L547' id='L547'>547</a><a href='#L548' id='L548'>548</a><a href='#L549' id='L549'>549</a><a href='#L550' id='L550'>550</a><a href='#L551' id='L551'>551</a><a href='#L552' id='L552'>552</a><a href='#L553' id='L553'>553</a><a href='#L554' id='L554'>554</a><a href='#L555' id='L555'>555</a><a href='#L556' id='L556'>556</a><a href='#L557' id='L557'>557</a><a href='#L558' id='L558'>558</a><a href='#L559' id='L559'>559</a><a href='#L560' id='L560'>560</a><a href='#L561' id='L561'>561</a><a href='#L562' id='L562'>562</a><a href='#L563' id='L563'>563</a><a href='#L564' id='L564'>564</a><a href='#L565' id='L565'>565</a><a href='#L566' id='L566'>566</a><a href='#L567' id='L567'>567</a><a href='#L568' id='L568'>568</a><a href='#L569' id='L569'>569</a><a href='#L570' id='L570'>570</a><a href='#L571' id='L571'>571</a><a href='#L572' id='L572'>572</a><a href='#L573' id='L573'>573</a><a href='#L574' id='L574'>574</a><a href='#L575' id='L575'>575</a><a href='#L576' id='L576'>576</a><a href='#L577' id='L577'>577</a><a href='#L578' id='L578'>578</a><a href='#L579' id='L579'>579</a><a href='#L580' id='L580'>580</a><a href='#L581' id='L581'>581</a><a href='#L582' id='L582'>582</a><a href='#L583' id='L583'>583</a><a href='#L584' id='L584'>584</a><a href='#L585' id='L585'>585</a><a href='#L586' id='L586'>586</a><a href='#L587' id='L587'>587</a><a href='#L588' id='L588'>588</a><a href='#L589' id='L589'>589</a><a href='#L590' id='L590'>590</a><a href='#L591' id='L591'>591</a><a href='#L592' id='L592'>592</a><a href='#L593' id='L593'>593</a><a href='#L594' id='L594'>594</a><a href='#L595' id='L595'>595</a><a href='#L596' id='L596'>596</a><a href='#L597' id='L597'>597</a><a href='#L598' id='L598'>598</a><a href='#L599' id='L599'>599</a><a href='#L600' id='L600'>600</a><a href='#L601' id='L601'>601</a><a href='#L602' id='L602'>602</a><a href='#L603' id='L603'>603</a><a href='#L604' id='L604'>604</a><a href='#L605' id='L605'>605</a><a href='#L606' id='L606'>606</a><a href='#L607' id='L607'>607</a><a href='#L608' id='L608'>608</a><a href='#L609' id='L609'>609</a><a href='#L610' id='L610'>610</a><a href='#L611' id='L611'>611</a><a href='#L612' id='L612'>612</a><a href='#L613' id='L613'>613</a><a href='#L614' id='L614'>614</a><a href='#L615' id='L615'>615</a><a href='#L616' id='L616'>616</a><a href='#L617' id='L617'>617</a><a href='#L618' id='L618'>618</a><a href='#L619' id='L619'>619</a><a href='#L620' id='L620'>620</a><a href='#L621' id='L621'>621</a><a href='#L622' id='L622'>622</a><a href='#L623' id='L623'>623</a><a href='#L624' id='L624'>624</a><a href='#L625' id='L625'>625</a><a href='#L626' id='L626'>626</a><a href='#L627' id='L627'>627</a><a href='#L628' id='L628'>628</a><a href='#L629' id='L629'>629</a><a href='#L630' id='L630'>630</a><a href='#L631' id='L631'>631</a><a href='#L632' id='L632'>632</a><a href='#L633' id='L633'>633</a><a href='#L634' id='L634'>634</a><a href='#L635' id='L635'>635</a><a href='#L636' id='L636'>636</a><a href='#L637' id='L637'>637</a><a href='#L638' id='L638'>638</a><a href='#L639' id='L639'>639</a><a href='#L640' id='L640'>640</a><a href='#L641' id='L641'>641</a><a href='#L642' id='L642'>642</a><a href='#L643' id='L643'>643</a><a href='#L644' id='L644'>644</a><a href='#L645' id='L645'>645</a><a href='#L646' id='L646'>646</a><a href='#L647' id='L647'>647</a><a href='#L648' id='L648'>648</a><a href='#L649' id='L649'>649</a><a href='#L650' id='L650'>650</a><a href='#L651' id='L651'>651</a><a href='#L652' id='L652'>652</a><a href='#L653' id='L653'>653</a><a href='#L654' id='L654'>654</a><a href='#L655' id='L655'>655</a><a href='#L656' id='L656'>656</a><a href='#L657' id='L657'>657</a><a href='#L658' id='L658'>658</a><a href='#L659' id='L659'>659</a><a href='#L660' id='L660'>660</a><a href='#L661' id='L661'>661</a><a href='#L662' id='L662'>662</a><a href='#L663' id='L663'>663</a><a href='#L664' id='L664'>664</a><a href='#L665' id='L665'>665</a><a href='#L666' id='L666'>666</a><a href='#L667' id='L667'>667</a><a href='#L668' id='L668'>668</a><a href='#L669' id='L669'>669</a><a href='#L670' id='L670'>670</a><a href='#L671' id='L671'>671</a><a href='#L672' id='L672'>672</a><a href='#L673' id='L673'>673</a><a href='#L674' id='L674'>674</a><a href='#L675' id='L675'>675</a><a href='#L676' id='L676'>676</a><a href='#L677' id='L677'>677</a><a href='#L678' id='L678'>678</a><a href='#L679' id='L679'>679</a><a href='#L680' id='L680'>680</a><a href='#L681' id='L681'>681</a><a href='#L682' id='L682'>682</a><a href='#L683' id='L683'>683</a><a href='#L684' id='L684'>684</a><a href='#L685' id='L685'>685</a><a href='#L686' id='L686'>686</a><a href='#L687' id='L687'>687</a><a href='#L688' id='L688'>688</a><a href='#L689' id='L689'>689</a><a href='#L690' id='L690'>690</a><a href='#L691' id='L691'>691</a><a href='#L692' id='L692'>692</a><a href='#L693' id='L693'>693</a><a href='#L694' id='L694'>694</a><a href='#L695' id='L695'>695</a><a href='#L696' id='L696'>696</a><a href='#L697' id='L697'>697</a><a href='#L698' id='L698'>698</a><a href='#L699' id='L699'>699</a><a href='#L700' id='L700'>700</a><a href='#L701' id='L701'>701</a><a href='#L702' id='L702'>702</a><a href='#L703' id='L703'>703</a><a href='#L704' id='L704'>704</a><a href='#L705' id='L705'>705</a><a href='#L706' id='L706'>706</a><a href='#L707' id='L707'>707</a><a href='#L708' id='L708'>708</a><a href='#L709' id='L709'>709</a><a href='#L710' id='L710'>710</a><a href='#L711' id='L711'>711</a><a href='#L712' id='L712'>712</a><a href='#L713' id='L713'>713</a><a href='#L714' id='L714'>714</a><a href='#L715' id='L715'>715</a><a href='#L716' id='L716'>716</a><a href='#L717' id='L717'>717</a><a href='#L718' id='L718'>718</a><a href='#L719' id='L719'>719</a><a href='#L720' id='L720'>720</a><a href='#L721' id='L721'>721</a><a href='#L722' id='L722'>722</a><a href='#L723' id='L723'>723</a><a href='#L724' id='L724'>724</a><a href='#L725' id='L725'>725</a><a href='#L726' id='L726'>726</a><a href='#L727' id='L727'>727</a><a href='#L728' id='L728'>728</a><a href='#L729' id='L729'>729</a><a href='#L730' id='L730'>730</a><a href='#L731' id='L731'>731</a><a href='#L732' id='L732'>732</a><a href='#L733' id='L733'>733</a><a href='#L734' id='L734'>734</a><a href='#L735' id='L735'>735</a><a href='#L736' id='L736'>736</a><a href='#L737' id='L737'>737</a><a href='#L738' id='L738'>738</a><a href='#L739' id='L739'>739</a><a href='#L740' id='L740'>740</a><a href='#L741' id='L741'>741</a><a href='#L742' id='L742'>742</a><a href='#L743' id='L743'>743</a><a href='#L744' id='L744'>744</a><a href='#L745' id='L745'>745</a><a href='#L746' id='L746'>746</a><a href='#L747' id='L747'>747</a><a href='#L748' id='L748'>748</a><a href='#L749' id='L749'>749</a><a href='#L750' id='L750'>750</a><a href='#L751' id='L751'>751</a><a href='#L752' id='L752'>752</a><a href='#L753' id='L753'>753</a><a href='#L754' id='L754'>754</a><a href='#L755' id='L755'>755</a><a href='#L756' id='L756'>756</a><a href='#L757' id='L757'>757</a><a href='#L758' id='L758'>758</a><a href='#L759' id='L759'>759</a><a href='#L760' id='L760'>760</a><a href='#L761' id='L761'>761</a><a href='#L762' id='L762'>762</a><a href='#L763' id='L763'>763</a><a href='#L764' id='L764'>764</a><a href='#L765' id='L765'>765</a><a href='#L766' id='L766'>766</a><a href='#L767' id='L767'>767</a><a href='#L768' id='L768'>768</a><a href='#L769' id='L769'>769</a><a href='#L770' id='L770'>770</a><a href='#L771' id='L771'>771</a><a href='#L772' id='L772'>772</a><a href='#L773' id='L773'>773</a><a href='#L774' id='L774'>774</a><a href='#L775' id='L775'>775</a><a href='#L776' id='L776'>776</a><a href='#L777' id='L777'>777</a><a href='#L778' id='L778'>778</a><a href='#L779' id='L779'>779</a><a href='#L780' id='L780'>780</a><a href='#L781' id='L781'>781</a><a href='#L782' id='L782'>782</a><a href='#L783' id='L783'>783</a><a href='#L784' id='L784'>784</a><a href='#L785' id='L785'>785</a><a href='#L786' id='L786'>786</a><a href='#L787' id='L787'>787</a><a href='#L788' id='L788'>788</a><a href='#L789' id='L789'>789</a><a href='#L790' id='L790'>790</a><a href='#L791' id='L791'>791</a><a href='#L792' id='L792'>792</a><a href='#L793' id='L793'>793</a><a href='#L794' id='L794'>794</a><a href='#L795' id='L795'>795</a><a href='#L796' id='L796'>796</a><a href='#L797' id='L797'>797</a><a href='#L798' id='L798'>798</a><a href='#L799' id='L799'>799</a><a href='#L800' id='L800'>800</a><a href='#L801' id='L801'>801</a><a href='#L802' id='L802'>802</a><a href='#L803' id='L803'>803</a><a href='#L804' id='L804'>804</a><a href='#L805' id='L805'>805</a><a href='#L806' id='L806'>806</a><a href='#L807' id='L807'>807</a><a href='#L808' id='L808'>808</a><a href='#L809' id='L809'>809</a><a href='#L810' id='L810'>810</a><a href='#L811' id='L811'>811</a><a href='#L812' id='L812'>812</a><a href='#L813' id='L813'>813</a><a href='#L814' id='L814'>814</a><a href='#L815' id='L815'>815</a><a href='#L816' id='L816'>816</a><a href='#L817' id='L817'>817</a><a href='#L818' id='L818'>818</a><a href='#L819' id='L819'>819</a><a href='#L820' id='L820'>820</a><a href='#L821' id='L821'>821</a><a href='#L822' id='L822'>822</a><a href='#L823' id='L823'>823</a><a href='#L824' id='L824'>824</a><a href='#L825' id='L825'>825</a><a href='#L826' id='L826'>826</a><a href='#L827' id='L827'>827</a><a href='#L828' id='L828'>828</a><a href='#L829' id='L829'>829</a><a href='#L830' id='L830'>830</a><a href='#L831' id='L831'>831</a><a href='#L832' id='L832'>832</a><a href='#L833' id='L833'>833</a><a href='#L834' id='L834'>834</a><a href='#L835' id='L835'>835</a><a href='#L836' id='L836'>836</a><a href='#L837' id='L837'>837</a><a href='#L838' id='L838'>838</a><a href='#L839' id='L839'>839</a><a href='#L840' id='L840'>840</a><a href='#L841' id='L841'>841</a><a href='#L842' id='L842'>842</a><a href='#L843' id='L843'>843</a><a href='#L844' id='L844'>844</a><a href='#L845' id='L845'>845</a><a href='#L846' id='L846'>846</a><a href='#L847' id='L847'>847</a><a href='#L848' id='L848'>848</a><a href='#L849' id='L849'>849</a><a href='#L850' id='L850'>850</a><a href='#L851' id='L851'>851</a><a href='#L852' id='L852'>852</a><a href='#L853' id='L853'>853</a><a href='#L854' id='L854'>854</a><a href='#L855' id='L855'>855</a><a href='#L856' id='L856'>856</a><a href='#L857' id='L857'>857</a><a href='#L858' id='L858'>858</a><a href='#L859' id='L859'>859</a><a href='#L860' id='L860'>860</a><a href='#L861' id='L861'>861</a><a href='#L862' id='L862'>862</a><a href='#L863' id='L863'>863</a><a href='#L864' id='L864'>864</a><a href='#L865' id='L865'>865</a><a href='#L866' id='L866'>866</a><a href='#L867' id='L867'>867</a><a href='#L868' id='L868'>868</a><a href='#L869' id='L869'>869</a><a href='#L870' id='L870'>870</a><a href='#L871' id='L871'>871</a><a href='#L872' id='L872'>872</a><a href='#L873' id='L873'>873</a><a href='#L874' id='L874'>874</a><a href='#L875' id='L875'>875</a><a href='#L876' id='L876'>876</a><a href='#L877' id='L877'>877</a><a href='#L878' id='L878'>878</a><a href='#L879' id='L879'>879</a><a href='#L880' id='L880'>880</a><a href='#L881' id='L881'>881</a><a href='#L882' id='L882'>882</a><a href='#L883' id='L883'>883</a><a href='#L884' id='L884'>884</a><a href='#L885' id='L885'>885</a><a href='#L886' id='L886'>886</a><a href='#L887' id='L887'>887</a><a href='#L888' id='L888'>888</a><a href='#L889' id='L889'>889</a><a href='#L890' id='L890'>890</a><a href='#L891' id='L891'>891</a><a href='#L892' id='L892'>892</a><a href='#L893' id='L893'>893</a><a href='#L894' id='L894'>894</a><a href='#L895' id='L895'>895</a><a href='#L896' id='L896'>896</a><a href='#L897' id='L897'>897</a><a href='#L898' id='L898'>898</a><a href='#L899' id='L899'>899</a><a href='#L900' id='L900'>900</a><a href='#L901' id='L901'>901</a><a href='#L902' id='L902'>902</a><a href='#L903' id='L903'>903</a><a href='#L904' id='L904'>904</a><a href='#L905' id='L905'>905</a><a href='#L906' id='L906'>906</a><a href='#L907' id='L907'>907</a><a href='#L908' id='L908'>908</a><a href='#L909' id='L909'>909</a><a href='#L910' id='L910'>910</a><a href='#L911' id='L911'>911</a><a href='#L912' id='L912'>912</a><a href='#L913' id='L913'>913</a><a href='#L914' id='L914'>914</a><a href='#L915' id='L915'>915</a><a href='#L916' id='L916'>916</a><a href='#L917' id='L917'>917</a><a href='#L918' id='L918'>918</a><a href='#L919' id='L919'>919</a><a href='#L920' id='L920'>920</a><a href='#L921' id='L921'>921</a><a href='#L922' id='L922'>922</a><a href='#L923' id='L923'>923</a><a href='#L924' id='L924'>924</a><a href='#L925' id='L925'>925</a><a href='#L926' id='L926'>926</a><a href='#L927' id='L927'>927</a><a href='#L928' id='L928'>928</a><a href='#L929' id='L929'>929</a><a href='#L930' id='L930'>930</a><a href='#L931' id='L931'>931</a><a href='#L932' id='L932'>932</a><a href='#L933' id='L933'>933</a><a href='#L934' id='L934'>934</a><a href='#L935' id='L935'>935</a><a href='#L936' id='L936'>936</a><a href='#L937' id='L937'>937</a><a href='#L938' id='L938'>938</a><a href='#L939' id='L939'>939</a><a href='#L940' id='L940'>940</a><a href='#L941' id='L941'>941</a><a href='#L942' id='L942'>942</a><a href='#L943' id='L943'>943</a><a href='#L944' id='L944'>944</a><a href='#L945' id='L945'>945</a><a href='#L946' id='L946'>946</a><a href='#L947' id='L947'>947</a><a href='#L948' id='L948'>948</a><a href='#L949' id='L949'>949</a><a href='#L950' id='L950'>950</a><a href='#L951' id='L951'>951</a><a href='#L952' id='L952'>952</a><a href='#L953' id='L953'>953</a><a href='#L954' id='L954'>954</a><a href='#L955' id='L955'>955</a><a href='#L956' id='L956'>956</a><a href='#L957' id='L957'>957</a><a href='#L958' id='L958'>958</a><a href='#L959' id='L959'>959</a><a href='#L960' id='L960'>960</a><a href='#L961' id='L961'>961</a><a href='#L962' id='L962'>962</a><a href='#L963' id='L963'>963</a><a href='#L964' id='L964'>964</a><a href='#L965' id='L965'>965</a><a href='#L966' id='L966'>966</a><a href='#L967' id='L967'>967</a><a href='#L968' id='L968'>968</a><a href='#L969' id='L969'>969</a><a href='#L970' id='L970'>970</a><a href='#L971' id='L971'>971</a><a href='#L972' id='L972'>972</a><a href='#L973' id='L973'>973</a><a href='#L974' id='L974'>974</a><a href='#L975' id='L975'>975</a><a href='#L976' id='L976'>976</a><a href='#L977' id='L977'>977</a><a href='#L978' id='L978'>978</a><a href='#L979' id='L979'>979</a><a href='#L980' id='L980'>980</a><a href='#L981' id='L981'>981</a><a href='#L982' id='L982'>982</a><a href='#L983' id='L983'>983</a><a href='#L984' id='L984'>984</a><a href='#L985' id='L985'>985</a><a href='#L986' id='L986'>986</a><a href='#L987' id='L987'>987</a><a href='#L988' id='L988'>988</a><a href='#L989' id='L989'>989</a><a href='#L990' id='L990'>990</a><a href='#L991' id='L991'>991</a><a href='#L992' id='L992'>992</a><a href='#L993' id='L993'>993</a><a href='#L994' id='L994'>994</a><a href='#L995' id='L995'>995</a><a href='#L996' id='L996'>996</a><a href='#L997' id='L997'>997</a><a href='#L998' id='L998'>998</a><a href='#L999' id='L999'>999</a><a href='#L1000' id='L1000'>1000</a><a href='#L1001' id='L1001'>1001</a><a href='#L1002' id='L1002'>1002</a><a href='#L1003' id='L1003'>1003</a><a href='#L1004' id='L1004'>1004</a><a href='#L1005' id='L1005'>1005</a><a href='#L1006' id='L1006'>1006</a><a href='#L1007' id='L1007'>1007</a><a href='#L1008' id='L1008'>1008</a><a href='#L1009' id='L1009'>1009</a><a href='#L1010' id='L1010'>1010</a><a href='#L1011' id='L1011'>1011</a><a href='#L1012' id='L1012'>1012</a><a href='#L1013' id='L1013'>1013</a><a href='#L1014' id='L1014'>1014</a><a href='#L1015' id='L1015'>1015</a><a href='#L1016' id='L1016'>1016</a><a href='#L1017' id='L1017'>1017</a><a href='#L1018' id='L1018'>1018</a><a href='#L1019' id='L1019'>1019</a><a href='#L1020' id='L1020'>1020</a><a href='#L1021' id='L1021'>1021</a><a href='#L1022' id='L1022'>1022</a><a href='#L1023' id='L1023'>1023</a><a href='#L1024' id='L1024'>1024</a><a href='#L1025' id='L1025'>1025</a><a href='#L1026' id='L1026'>1026</a><a href='#L1027' id='L1027'>1027</a><a href='#L1028' id='L1028'>1028</a><a href='#L1029' id='L1029'>1029</a><a href='#L1030' id='L1030'>1030</a><a href='#L1031' id='L1031'>1031</a><a href='#L1032' id='L1032'>1032</a><a href='#L1033' id='L1033'>1033</a><a href='#L1034' id='L1034'>1034</a><a href='#L1035' id='L1035'>1035</a><a href='#L1036' id='L1036'>1036</a><a href='#L1037' id='L1037'>1037</a><a href='#L1038' id='L1038'>1038</a><a href='#L1039' id='L1039'>1039</a><a href='#L1040' id='L1040'>1040</a><a href='#L1041' id='L1041'>1041</a><a href='#L1042' id='L1042'>1042</a><a href='#L1043' id='L1043'>1043</a><a href='#L1044' id='L1044'>1044</a><a href='#L1045' id='L1045'>1045</a><a href='#L1046' id='L1046'>1046</a><a href='#L1047' id='L1047'>1047</a><a href='#L1048' id='L1048'>1048</a><a href='#L1049' id='L1049'>1049</a><a href='#L1050' id='L1050'>1050</a><a href='#L1051' id='L1051'>1051</a><a href='#L1052' id='L1052'>1052</a><a href='#L1053' id='L1053'>1053</a><a href='#L1054' id='L1054'>1054</a><a href='#L1055' id='L1055'>1055</a><a href='#L1056' id='L1056'>1056</a><a href='#L1057' id='L1057'>1057</a><a href='#L1058' id='L1058'>1058</a><a href='#L1059' id='L1059'>1059</a><a href='#L1060' id='L1060'>1060</a><a href='#L1061' id='L1061'>1061</a><a href='#L1062' id='L1062'>1062</a><a href='#L1063' id='L1063'>1063</a><a href='#L1064' id='L1064'>1064</a><a href='#L1065' id='L1065'>1065</a><a href='#L1066' id='L1066'>1066</a><a href='#L1067' id='L1067'>1067</a><a href='#L1068' id='L1068'>1068</a><a href='#L1069' id='L1069'>1069</a><a href='#L1070' id='L1070'>1070</a><a href='#L1071' id='L1071'>1071</a><a href='#L1072' id='L1072'>1072</a><a href='#L1073' id='L1073'>1073</a><a href='#L1074' id='L1074'>1074</a><a href='#L1075' id='L1075'>1075</a><a href='#L1076' id='L1076'>1076</a><a href='#L1077' id='L1077'>1077</a><a href='#L1078' id='L1078'>1078</a><a href='#L1079' id='L1079'>1079</a><a href='#L1080' id='L1080'>1080</a><a href='#L1081' id='L1081'>1081</a><a href='#L1082' id='L1082'>1082</a><a href='#L1083' id='L1083'>1083</a><a href='#L1084' id='L1084'>1084</a><a href='#L1085' id='L1085'>1085</a><a href='#L1086' id='L1086'>1086</a><a href='#L1087' id='L1087'>1087</a><a href='#L1088' id='L1088'>1088</a><a href='#L1089' id='L1089'>1089</a><a href='#L1090' id='L1090'>1090</a><a href='#L1091' id='L1091'>1091</a><a href='#L1092' id='L1092'>1092</a><a href='#L1093' id='L1093'>1093</a><a href='#L1094' id='L1094'>1094</a><a href='#L1095' id='L1095'>1095</a><a href='#L1096' id='L1096'>1096</a><a href='#L1097' id='L1097'>1097</a><a href='#L1098' id='L1098'>1098</a><a href='#L1099' id='L1099'>1099</a><a href='#L1100' id='L1100'>1100</a><a href='#L1101' id='L1101'>1101</a><a href='#L1102' id='L1102'>1102</a><a href='#L1103' id='L1103'>1103</a><a href='#L1104' id='L1104'>1104</a><a href='#L1105' id='L1105'>1105</a><a href='#L1106' id='L1106'>1106</a><a href='#L1107' id='L1107'>1107</a><a href='#L1108' id='L1108'>1108</a><a href='#L1109' id='L1109'>1109</a><a href='#L1110' id='L1110'>1110</a><a href='#L1111' id='L1111'>1111</a><a href='#L1112' id='L1112'>1112</a><a href='#L1113' id='L1113'>1113</a><a href='#L1114' id='L1114'>1114</a><a href='#L1115' id='L1115'>1115</a><a href='#L1116' id='L1116'>1116</a><a href='#L1117' id='L1117'>1117</a><a href='#L1118' id='L1118'>1118</a><a href='#L1119' id='L1119'>1119</a><a href='#L1120' id='L1120'>1120</a><a href='#L1121' id='L1121'>1121</a><a href='#L1122' id='L1122'>1122</a><a href='#L1123' id='L1123'>1123</a><a href='#L1124' id='L1124'>1124</a><a href='#L1125' id='L1125'>1125</a><a href='#L1126' id='L1126'>1126</a><a href='#L1127' id='L1127'>1127</a><a href='#L1128' id='L1128'>1128</a><a href='#L1129' id='L1129'>1129</a><a href='#L1130' id='L1130'>1130</a><a href='#L1131' id='L1131'>1131</a><a href='#L1132' id='L1132'>1132</a><a href='#L1133' id='L1133'>1133</a><a href='#L1134' id='L1134'>1134</a><a href='#L1135' id='L1135'>1135</a><a href='#L1136' id='L1136'>1136</a><a href='#L1137' id='L1137'>1137</a><a href='#L1138' id='L1138'>1138</a><a href='#L1139' id='L1139'>1139</a><a href='#L1140' id='L1140'>1140</a><a href='#L1141' id='L1141'>1141</a><a href='#L1142' id='L1142'>1142</a><a href='#L1143' id='L1143'>1143</a><a href='#L1144' id='L1144'>1144</a><a href='#L1145' id='L1145'>1145</a><a href='#L1146' id='L1146'>1146</a><a href='#L1147' id='L1147'>1147</a><a href='#L1148' id='L1148'>1148</a><a href='#L1149' id='L1149'>1149</a><a href='#L1150' id='L1150'>1150</a><a href='#L1151' id='L1151'>1151</a><a href='#L1152' id='L1152'>1152</a><a href='#L1153' id='L1153'>1153</a><a href='#L1154' id='L1154'>1154</a><a href='#L1155' id='L1155'>1155</a><a href='#L1156' id='L1156'>1156</a><a href='#L1157' id='L1157'>1157</a><a href='#L1158' id='L1158'>1158</a><a href='#L1159' id='L1159'>1159</a><a href='#L1160' id='L1160'>1160</a><a href='#L1161' id='L1161'>1161</a><a href='#L1162' id='L1162'>1162</a><a href='#L1163' id='L1163'>1163</a><a href='#L1164' id='L1164'>1164</a><a href='#L1165' id='L1165'>1165</a><a href='#L1166' id='L1166'>1166</a><a href='#L1167' id='L1167'>1167</a><a href='#L1168' id='L1168'>1168</a><a href='#L1169' id='L1169'>1169</a><a href='#L1170' id='L1170'>1170</a><a href='#L1171' id='L1171'>1171</a><a href='#L1172' id='L1172'>1172</a><a href='#L1173' id='L1173'>1173</a><a href='#L1174' id='L1174'>1174</a><a href='#L1175' id='L1175'>1175</a><a href='#L1176' id='L1176'>1176</a><a href='#L1177' id='L1177'>1177</a><a href='#L1178' id='L1178'>1178</a><a href='#L1179' id='L1179'>1179</a><a href='#L1180' id='L1180'>1180</a><a href='#L1181' id='L1181'>1181</a><a href='#L1182' id='L1182'>1182</a><a href='#L1183' id='L1183'>1183</a><a href='#L1184' id='L1184'>1184</a><a href='#L1185' id='L1185'>1185</a><a href='#L1186' id='L1186'>1186</a><a href='#L1187' id='L1187'>1187</a><a href='#L1188' id='L1188'>1188</a><a href='#L1189' id='L1189'>1189</a><a href='#L1190' id='L1190'>1190</a><a href='#L1191' id='L1191'>1191</a><a href='#L1192' id='L1192'>1192</a><a href='#L1193' id='L1193'>1193</a><a href='#L1194' id='L1194'>1194</a><a href='#L1195' id='L1195'>1195</a><a href='#L1196' id='L1196'>1196</a><a href='#L1197' id='L1197'>1197</a><a href='#L1198' id='L1198'>1198</a><a href='#L1199' id='L1199'>1199</a><a href='#L1200' id='L1200'>1200</a><a href='#L1201' id='L1201'>1201</a><a href='#L1202' id='L1202'>1202</a><a href='#L1203' id='L1203'>1203</a><a href='#L1204' id='L1204'>1204</a><a href='#L1205' id='L1205'>1205</a><a href='#L1206' id='L1206'>1206</a><a href='#L1207' id='L1207'>1207</a><a href='#L1208' id='L1208'>1208</a><a href='#L1209' id='L1209'>1209</a><a href='#L1210' id='L1210'>1210</a><a href='#L1211' id='L1211'>1211</a><a href='#L1212' id='L1212'>1212</a><a href='#L1213' id='L1213'>1213</a><a href='#L1214' id='L1214'>1214</a><a href='#L1215' id='L1215'>1215</a><a href='#L1216' id='L1216'>1216</a><a href='#L1217' id='L1217'>1217</a><a href='#L1218' id='L1218'>1218</a><a href='#L1219' id='L1219'>1219</a><a href='#L1220' id='L1220'>1220</a><a href='#L1221' id='L1221'>1221</a><a href='#L1222' id='L1222'>1222</a><a href='#L1223' id='L1223'>1223</a><a href='#L1224' id='L1224'>1224</a><a href='#L1225' id='L1225'>1225</a><a href='#L1226' id='L1226'>1226</a><a href='#L1227' id='L1227'>1227</a><a href='#L1228' id='L1228'>1228</a><a href='#L1229' id='L1229'>1229</a><a href='#L1230' id='L1230'>1230</a><a href='#L1231' id='L1231'>1231</a><a href='#L1232' id='L1232'>1232</a><a href='#L1233' id='L1233'>1233</a><a href='#L1234' id='L1234'>1234</a><a href='#L1235' id='L1235'>1235</a><a href='#L1236' id='L1236'>1236</a><a href='#L1237' id='L1237'>1237</a><a href='#L1238' id='L1238'>1238</a><a href='#L1239' id='L1239'>1239</a><a href='#L1240' id='L1240'>1240</a><a href='#L1241' id='L1241'>1241</a><a href='#L1242' id='L1242'>1242</a><a href='#L1243' id='L1243'>1243</a><a href='#L1244' id='L1244'>1244</a><a href='#L1245' id='L1245'>1245</a><a href='#L1246' id='L1246'>1246</a><a href='#L1247' id='L1247'>1247</a><a href='#L1248' id='L1248'>1248</a><a href='#L1249' id='L1249'>1249</a><a href='#L1250' id='L1250'>1250</a><a href='#L1251' id='L1251'>1251</a><a href='#L1252' id='L1252'>1252</a><a href='#L1253' id='L1253'>1253</a><a href='#L1254' id='L1254'>1254</a><a href='#L1255' id='L1255'>1255</a><a href='#L1256' id='L1256'>1256</a><a href='#L1257' id='L1257'>1257</a><a href='#L1258' id='L1258'>1258</a><a href='#L1259' id='L1259'>1259</a><a href='#L1260' id='L1260'>1260</a><a href='#L1261' id='L1261'>1261</a><a href='#L1262' id='L1262'>1262</a><a href='#L1263' id='L1263'>1263</a><a href='#L1264' id='L1264'>1264</a><a href='#L1265' id='L1265'>1265</a><a href='#L1266' id='L1266'>1266</a><a href='#L1267' id='L1267'>1267</a><a href='#L1268' id='L1268'>1268</a><a href='#L1269' id='L1269'>1269</a><a href='#L1270' id='L1270'>1270</a><a href='#L1271' id='L1271'>1271</a><a href='#L1272' id='L1272'>1272</a><a href='#L1273' id='L1273'>1273</a><a href='#L1274' id='L1274'>1274</a><a href='#L1275' id='L1275'>1275</a><a href='#L1276' id='L1276'>1276</a><a href='#L1277' id='L1277'>1277</a><a href='#L1278' id='L1278'>1278</a><a href='#L1279' id='L1279'>1279</a><a href='#L1280' id='L1280'>1280</a><a href='#L1281' id='L1281'>1281</a><a href='#L1282' id='L1282'>1282</a><a href='#L1283' id='L1283'>1283</a><a href='#L1284' id='L1284'>1284</a><a href='#L1285' id='L1285'>1285</a><a href='#L1286' id='L1286'>1286</a><a href='#L1287' id='L1287'>1287</a><a href='#L1288' id='L1288'>1288</a><a href='#L1289' id='L1289'>1289</a><a href='#L1290' id='L1290'>1290</a><a href='#L1291' id='L1291'>1291</a><a href='#L1292' id='L1292'>1292</a><a href='#L1293' id='L1293'>1293</a><a href='#L1294' id='L1294'>1294</a><a href='#L1295' id='L1295'>1295</a><a href='#L1296' id='L1296'>1296</a><a href='#L1297' id='L1297'>1297</a><a href='#L1298' id='L1298'>1298</a><a href='#L1299' id='L1299'>1299</a><a href='#L1300' id='L1300'>1300</a><a href='#L1301' id='L1301'>1301</a><a href='#L1302' id='L1302'>1302</a><a href='#L1303' id='L1303'>1303</a><a href='#L1304' id='L1304'>1304</a><a href='#L1305' id='L1305'>1305</a><a href='#L1306' id='L1306'>1306</a><a href='#L1307' id='L1307'>1307</a><a href='#L1308' id='L1308'>1308</a><a href='#L1309' id='L1309'>1309</a><a href='#L1310' id='L1310'>1310</a><a href='#L1311' id='L1311'>1311</a><a href='#L1312' id='L1312'>1312</a><a href='#L1313' id='L1313'>1313</a><a href='#L1314' id='L1314'>1314</a><a href='#L1315' id='L1315'>1315</a><a href='#L1316' id='L1316'>1316</a><a href='#L1317' id='L1317'>1317</a><a href='#L1318' id='L1318'>1318</a><a href='#L1319' id='L1319'>1319</a><a href='#L1320' id='L1320'>1320</a><a href='#L1321' id='L1321'>1321</a><a href='#L1322' id='L1322'>1322</a><a href='#L1323' id='L1323'>1323</a><a href='#L1324' id='L1324'>1324</a><a href='#L1325' id='L1325'>1325</a><a href='#L1326' id='L1326'>1326</a><a href='#L1327' id='L1327'>1327</a><a href='#L1328' id='L1328'>1328</a><a href='#L1329' id='L1329'>1329</a><a href='#L1330' id='L1330'>1330</a><a href='#L1331' id='L1331'>1331</a><a href='#L1332' id='L1332'>1332</a><a href='#L1333' id='L1333'>1333</a><a href='#L1334' id='L1334'>1334</a><a href='#L1335' id='L1335'>1335</a><a href='#L1336' id='L1336'>1336</a><a href='#L1337' id='L1337'>1337</a><a href='#L1338' id='L1338'>1338</a><a href='#L1339' id='L1339'>1339</a><a href='#L1340' id='L1340'>1340</a><a href='#L1341' id='L1341'>1341</a><a href='#L1342' id='L1342'>1342</a><a href='#L1343' id='L1343'>1343</a><a href='#L1344' id='L1344'>1344</a><a href='#L1345' id='L1345'>1345</a><a href='#L1346' id='L1346'>1346</a><a href='#L1347' id='L1347'>1347</a><a href='#L1348' id='L1348'>1348</a><a href='#L1349' id='L1349'>1349</a><a href='#L1350' id='L1350'>1350</a><a href='#L1351' id='L1351'>1351</a><a href='#L1352' id='L1352'>1352</a><a href='#L1353' id='L1353'>1353</a><a href='#L1354' id='L1354'>1354</a><a href='#L1355' id='L1355'>1355</a><a href='#L1356' id='L1356'>1356</a><a href='#L1357' id='L1357'>1357</a><a href='#L1358' id='L1358'>1358</a><a href='#L1359' id='L1359'>1359</a><a href='#L1360' id='L1360'>1360</a><a href='#L1361' id='L1361'>1361</a><a href='#L1362' id='L1362'>1362</a><a href='#L1363' id='L1363'>1363</a><a href='#L1364' id='L1364'>1364</a><a href='#L1365' id='L1365'>1365</a><a href='#L1366' id='L1366'>1366</a><a href='#L1367' id='L1367'>1367</a><a href='#L1368' id='L1368'>1368</a><a href='#L1369' id='L1369'>1369</a><a href='#L1370' id='L1370'>1370</a><a href='#L1371' id='L1371'>1371</a><a href='#L1372' id='L1372'>1372</a><a href='#L1373' id='L1373'>1373</a><a href='#L1374' id='L1374'>1374</a><a href='#L1375' id='L1375'>1375</a><a href='#L1376' id='L1376'>1376</a><a href='#L1377' id='L1377'>1377</a><a href='#L1378' id='L1378'>1378</a><a href='#L1379' id='L1379'>1379</a><a href='#L1380' id='L1380'>1380</a><a href='#L1381' id='L1381'>1381</a><a href='#L1382' id='L1382'>1382</a><a href='#L1383' id='L1383'>1383</a><a href='#L1384' id='L1384'>1384</a><a href='#L1385' id='L1385'>1385</a><a href='#L1386' id='L1386'>1386</a><a href='#L1387' id='L1387'>1387</a><a href='#L1388' id='L1388'>1388</a><a href='#L1389' id='L1389'>1389</a><a href='#L1390' id='L1390'>1390</a><a href='#L1391' id='L1391'>1391</a><a href='#L1392' id='L1392'>1392</a><a href='#L1393' id='L1393'>1393</a><a href='#L1394' id='L1394'>1394</a><a href='#L1395' id='L1395'>1395</a><a href='#L1396' id='L1396'>1396</a><a href='#L1397' id='L1397'>1397</a><a href='#L1398' id='L1398'>1398</a><a href='#L1399' id='L1399'>1399</a><a href='#L1400' id='L1400'>1400</a><a href='#L1401' id='L1401'>1401</a><a href='#L1402' id='L1402'>1402</a><a href='#L1403' id='L1403'>1403</a></div><div class="highlight markdown-code-block"><pre class=""><div class='line' id='LC1'><span class="p">(</span><span class="kd">function</span> <span class="nx">webpackUniversalModuleDefinition</span><span class="p">(</span><span class="nx">root</span><span class="p">,</span> <span class="nx">factory</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC2'>	<span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">exports</span> <span class="o">===</span> <span class="dl">'</span><span class="s1">object</span><span class="dl">'</span> <span class="o">&amp;&amp;</span> <span class="k">typeof</span> <span class="nx">module</span> <span class="o">===</span> <span class="dl">'</span><span class="s1">object</span><span class="dl">'</span><span class="p">)</span>&#x000A;</div><div class='line' id='LC3'>		<span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="nx">factory</span><span class="p">();</span>&#x000A;</div><div class='line' id='LC4'>	<span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">define</span> <span class="o">===</span> <span class="dl">'</span><span class="s1">function</span><span class="dl">'</span> <span class="o">&amp;&amp;</span> <span class="nx">define</span><span class="p">.</span><span class="nx">amd</span><span class="p">)</span>&#x000A;</div><div class='line' id='LC5'>		<span class="nx">define</span><span class="p">([],</span> <span class="nx">factory</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC6'>	<span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">exports</span> <span class="o">===</span> <span class="dl">'</span><span class="s1">object</span><span class="dl">'</span><span class="p">)</span>&#x000A;</div><div class='line' id='LC7'>		<span class="nx">exports</span><span class="p">[</span><span class="dl">"</span><span class="s2">ecStat</span><span class="dl">"</span><span class="p">]</span> <span class="o">=</span> <span class="nx">factory</span><span class="p">();</span>&#x000A;</div><div class='line' id='LC8'>	<span class="k">else</span>&#x000A;</div><div class='line' id='LC9'>		<span class="nx">root</span><span class="p">[</span><span class="dl">"</span><span class="s2">ecStat</span><span class="dl">"</span><span class="p">]</span> <span class="o">=</span> <span class="nx">factory</span><span class="p">();</span>&#x000A;</div><div class='line' id='LC10'><span class="p">})(</span><span class="k">this</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC11'><span class="k">return</span> <span class="cm">/******/</span> <span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">modules</span><span class="p">)</span> <span class="p">{</span> <span class="c1">// webpackBootstrap</span>&#x000A;</div><div class='line' id='LC12'><span class="cm">/******/</span> 	<span class="c1">// The module cache</span>&#x000A;</div><div class='line' id='LC13'><span class="cm">/******/</span> 	<span class="kd">var</span> <span class="nx">installedModules</span> <span class="o">=</span> <span class="p">{};</span>&#x000A;</div><div class='line' id='LC14'>&#x000A;</div><div class='line' id='LC15'><span class="cm">/******/</span> 	<span class="c1">// The require function</span>&#x000A;</div><div class='line' id='LC16'><span class="cm">/******/</span> 	<span class="kd">function</span> <span class="nx">__webpack_require__</span><span class="p">(</span><span class="nx">moduleId</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC17'>&#x000A;</div><div class='line' id='LC18'><span class="cm">/******/</span> 		<span class="c1">// Check if module is in cache</span>&#x000A;</div><div class='line' id='LC19'><span class="cm">/******/</span> 		<span class="k">if</span><span class="p">(</span><span class="nx">installedModules</span><span class="p">[</span><span class="nx">moduleId</span><span class="p">])</span>&#x000A;</div><div class='line' id='LC20'><span class="cm">/******/</span> 			<span class="k">return</span> <span class="nx">installedModules</span><span class="p">[</span><span class="nx">moduleId</span><span class="p">].</span><span class="nx">exports</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC21'>&#x000A;</div><div class='line' id='LC22'><span class="cm">/******/</span> 		<span class="c1">// Create a new module (and put it into the cache)</span>&#x000A;</div><div class='line' id='LC23'><span class="cm">/******/</span> 		<span class="kd">var</span> <span class="nx">module</span> <span class="o">=</span> <span class="nx">installedModules</span><span class="p">[</span><span class="nx">moduleId</span><span class="p">]</span> <span class="o">=</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC24'><span class="cm">/******/</span> 			<span class="na">exports</span><span class="p">:</span> <span class="p">{},</span>&#x000A;</div><div class='line' id='LC25'><span class="cm">/******/</span> 			<span class="na">id</span><span class="p">:</span> <span class="nx">moduleId</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC26'><span class="cm">/******/</span> 			<span class="na">loaded</span><span class="p">:</span> <span class="kc">false</span>&#x000A;</div><div class='line' id='LC27'><span class="cm">/******/</span> 		<span class="p">};</span>&#x000A;</div><div class='line' id='LC28'>&#x000A;</div><div class='line' id='LC29'><span class="cm">/******/</span> 		<span class="c1">// Execute the module function</span>&#x000A;</div><div class='line' id='LC30'><span class="cm">/******/</span> 		<span class="nx">modules</span><span class="p">[</span><span class="nx">moduleId</span><span class="p">].</span><span class="nx">call</span><span class="p">(</span><span class="nx">module</span><span class="p">.</span><span class="nx">exports</span><span class="p">,</span> <span class="nx">module</span><span class="p">,</span> <span class="nx">module</span><span class="p">.</span><span class="nx">exports</span><span class="p">,</span> <span class="nx">__webpack_require__</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC31'>&#x000A;</div><div class='line' id='LC32'><span class="cm">/******/</span> 		<span class="c1">// Flag the module as loaded</span>&#x000A;</div><div class='line' id='LC33'><span class="cm">/******/</span> 		<span class="nx">module</span><span class="p">.</span><span class="nx">loaded</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC34'>&#x000A;</div><div class='line' id='LC35'><span class="cm">/******/</span> 		<span class="c1">// Return the exports of the module</span>&#x000A;</div><div class='line' id='LC36'><span class="cm">/******/</span> 		<span class="k">return</span> <span class="nx">module</span><span class="p">.</span><span class="nx">exports</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC37'><span class="cm">/******/</span> 	<span class="p">}</span>&#x000A;</div><div class='line' id='LC38'>&#x000A;</div><div class='line' id='LC39'>&#x000A;</div><div class='line' id='LC40'><span class="cm">/******/</span> 	<span class="c1">// expose the modules object (__webpack_modules__)</span>&#x000A;</div><div class='line' id='LC41'><span class="cm">/******/</span> 	<span class="nx">__webpack_require__</span><span class="p">.</span><span class="nx">m</span> <span class="o">=</span> <span class="nx">modules</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC42'>&#x000A;</div><div class='line' id='LC43'><span class="cm">/******/</span> 	<span class="c1">// expose the module cache</span>&#x000A;</div><div class='line' id='LC44'><span class="cm">/******/</span> 	<span class="nx">__webpack_require__</span><span class="p">.</span><span class="nx">c</span> <span class="o">=</span> <span class="nx">installedModules</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC45'>&#x000A;</div><div class='line' id='LC46'><span class="cm">/******/</span> 	<span class="c1">// __webpack_public_path__</span>&#x000A;</div><div class='line' id='LC47'><span class="cm">/******/</span> 	<span class="nx">__webpack_require__</span><span class="p">.</span><span class="nx">p</span> <span class="o">=</span> <span class="dl">""</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC48'>&#x000A;</div><div class='line' id='LC49'><span class="cm">/******/</span> 	<span class="c1">// Load entry module and return exports</span>&#x000A;</div><div class='line' id='LC50'><span class="cm">/******/</span> 	<span class="k">return</span> <span class="nx">__webpack_require__</span><span class="p">(</span><span class="mi">0</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC51'><span class="cm">/******/</span> <span class="p">})</span>&#x000A;</div><div class='line' id='LC52'><span class="cm">/************************************************************************/</span>&#x000A;</div><div class='line' id='LC53'><span class="cm">/******/</span> <span class="p">([</span>&#x000A;</div><div class='line' id='LC54'><span class="cm">/* 0 */</span>&#x000A;</div><div class='line' id='LC55'><span class="cm">/***/</span> <span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">module</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">__webpack_require__</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC56'>&#x000A;</div><div class='line' id='LC57'>	<span class="kd">var</span> <span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span><span class="p">;</span><span class="o">!</span><span class="p">(</span><span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">require</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC58'>&#x000A;</div><div class='line' id='LC59'>	    <span class="k">return</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC60'>&#x000A;</div><div class='line' id='LC61'>	        <span class="na">clustering</span><span class="p">:</span> <span class="nx">__webpack_require__</span><span class="p">(</span><span class="mi">1</span><span class="p">),</span>&#x000A;</div><div class='line' id='LC62'>	        <span class="na">regression</span><span class="p">:</span> <span class="nx">__webpack_require__</span><span class="p">(</span><span class="mi">5</span><span class="p">),</span>&#x000A;</div><div class='line' id='LC63'>	        <span class="na">statistics</span><span class="p">:</span> <span class="nx">__webpack_require__</span><span class="p">(</span><span class="mi">6</span><span class="p">),</span>&#x000A;</div><div class='line' id='LC64'>	        <span class="na">histogram</span><span class="p">:</span> <span class="nx">__webpack_require__</span><span class="p">(</span><span class="mi">15</span><span class="p">)</span>&#x000A;</div><div class='line' id='LC65'>&#x000A;</div><div class='line' id='LC66'>	    <span class="p">};</span>&#x000A;</div><div class='line' id='LC67'>&#x000A;</div><div class='line' id='LC68'>	<span class="p">}.</span><span class="nx">call</span><span class="p">(</span><span class="nx">exports</span><span class="p">,</span> <span class="nx">__webpack_require__</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">module</span><span class="p">),</span> <span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span> <span class="o">!==</span> <span class="kc">undefined</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span><span class="p">));</span>&#x000A;</div><div class='line' id='LC69'>&#x000A;</div><div class='line' id='LC70'><span class="cm">/***/</span> <span class="p">}),</span>&#x000A;</div><div class='line' id='LC71'><span class="cm">/* 1 */</span>&#x000A;</div><div class='line' id='LC72'><span class="cm">/***/</span> <span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">module</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">__webpack_require__</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC73'>&#x000A;</div><div class='line' id='LC74'>	<span class="kd">var</span> <span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span><span class="p">;</span><span class="o">!</span><span class="p">(</span><span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">require</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC75'>&#x000A;</div><div class='line' id='LC76'>	    <span class="kd">var</span> <span class="nx">dataProcess</span> <span class="o">=</span> <span class="nx">__webpack_require__</span><span class="p">(</span><span class="mi">2</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC77'>	    <span class="kd">var</span> <span class="nx">dataPreprocess</span> <span class="o">=</span> <span class="nx">dataProcess</span><span class="p">.</span><span class="nx">dataPreprocess</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC78'>	    <span class="kd">var</span> <span class="nx">array</span> <span class="o">=</span> <span class="nx">__webpack_require__</span><span class="p">(</span><span class="mi">3</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC79'>	    <span class="kd">var</span> <span class="nx">arraySize</span> <span class="o">=</span> <span class="nx">array</span><span class="p">.</span><span class="nx">size</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC80'>	    <span class="kd">var</span> <span class="nx">sumOfColumn</span> <span class="o">=</span> <span class="nx">array</span><span class="p">.</span><span class="nx">sumOfColumn</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC81'>	    <span class="kd">var</span> <span class="nx">arraySum</span> <span class="o">=</span> <span class="nx">array</span><span class="p">.</span><span class="nx">sum</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC82'>	    <span class="kd">var</span> <span class="nx">zeros</span> <span class="o">=</span> <span class="nx">array</span><span class="p">.</span><span class="nx">zeros</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC83'>	    <span class="kd">var</span> <span class="nx">isArray</span> <span class="o">=</span> <span class="nx">array</span><span class="p">.</span><span class="nx">isArray</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC84'>	    <span class="kd">var</span> <span class="nx">mathSqrt</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">sqrt</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC85'>	    <span class="kd">var</span> <span class="nx">mathPow</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">pow</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC86'>&#x000A;</div><div class='line' id='LC87'>	    <span class="cm">/**</span>&#x000A;</div><div class='line' id='LC88'><span class="cm">	     * KMeans of clustering algorithm</span>&#x000A;</div><div class='line' id='LC89'><span class="cm">	     * @param  {Array.&lt;Array.&lt;number&gt;&gt;} data  two-dimension array</span>&#x000A;</div><div class='line' id='LC90'><span class="cm">	     * @param  {number} k   the number of clusters in a dataset</span>&#x000A;</div><div class='line' id='LC91'><span class="cm">	     * @return {Object}</span>&#x000A;</div><div class='line' id='LC92'><span class="cm">	     */</span>&#x000A;</div><div class='line' id='LC93'>	    <span class="kd">function</span> <span class="nx">kMeans</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="nx">k</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC94'>&#x000A;</div><div class='line' id='LC95'>	        <span class="kd">var</span> <span class="nx">size</span> <span class="o">=</span> <span class="nx">arraySize</span><span class="p">(</span><span class="nx">data</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC96'>	        <span class="c1">// create array to assign data points to centroids, also holds SE of each point</span>&#x000A;</div><div class='line' id='LC97'>	        <span class="kd">var</span> <span class="nx">clusterAssigned</span> <span class="o">=</span> <span class="nx">zeros</span><span class="p">(</span><span class="nx">size</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="mi">2</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC98'>	        <span class="kd">var</span> <span class="nx">centroids</span> <span class="o">=</span> <span class="nx">createRandCent</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="nx">k</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC99'>	        <span class="kd">var</span> <span class="nx">clusterChanged</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC100'>	        <span class="kd">var</span> <span class="nx">minDist</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC101'>	        <span class="kd">var</span> <span class="nx">minIndex</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC102'>	        <span class="kd">var</span> <span class="nx">distIJ</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC103'>	        <span class="kd">var</span> <span class="nx">ptsInClust</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC104'>&#x000A;</div><div class='line' id='LC105'>	        <span class="k">while</span> <span class="p">(</span><span class="nx">clusterChanged</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC106'>	            <span class="nx">clusterChanged</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC107'>	            <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">size</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC108'>	                <span class="nx">minDist</span> <span class="o">=</span> <span class="kc">Infinity</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC109'>	                <span class="nx">minIndex</span> <span class="o">=</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC110'>	                <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">j</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">j</span> <span class="o">&lt;</span> <span class="nx">k</span><span class="p">;</span> <span class="nx">j</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC111'>	                    <span class="nx">distIJ</span> <span class="o">=</span> <span class="nx">distEuclid</span><span class="p">(</span><span class="nx">data</span><span class="p">[</span><span class="nx">i</span><span class="p">],</span> <span class="nx">centroids</span><span class="p">[</span><span class="nx">j</span><span class="p">]);</span>&#x000A;</div><div class='line' id='LC112'>	                    <span class="k">if</span> <span class="p">(</span><span class="nx">distIJ</span> <span class="o">&lt;</span> <span class="nx">minDist</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC113'>	                        <span class="nx">minDist</span> <span class="o">=</span> <span class="nx">distIJ</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC114'>	                        <span class="nx">minIndex</span> <span class="o">=</span> <span class="nx">j</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC115'>	                    <span class="p">}</span>&#x000A;</div><div class='line' id='LC116'>	                <span class="p">}</span>&#x000A;</div><div class='line' id='LC117'>	                <span class="k">if</span> <span class="p">(</span><span class="nx">clusterAssigned</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="mi">0</span><span class="p">]</span> <span class="o">!==</span> <span class="nx">minIndex</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC118'>	                    <span class="nx">clusterChanged</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC119'>	                <span class="p">}</span>&#x000A;</div><div class='line' id='LC120'>	                <span class="nx">clusterAssigned</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="mi">0</span><span class="p">]</span> <span class="o">=</span> <span class="nx">minIndex</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC121'>	                <span class="nx">clusterAssigned</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="mi">1</span><span class="p">]</span> <span class="o">=</span> <span class="nx">mathPow</span><span class="p">(</span><span class="nx">minDist</span><span class="p">,</span> <span class="mi">2</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC122'>	            <span class="p">}</span>&#x000A;</div><div class='line' id='LC123'>	            <span class="c1">//recalculate centroids</span>&#x000A;</div><div class='line' id='LC124'>	            <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">k</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC125'>	                <span class="nx">ptsInClust</span> <span class="o">=</span> <span class="p">[];</span>&#x000A;</div><div class='line' id='LC126'>	                <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">j</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">j</span> <span class="o">&lt;</span> <span class="nx">clusterAssigned</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">j</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC127'>	                    <span class="k">if</span> <span class="p">(</span><span class="nx">clusterAssigned</span><span class="p">[</span><span class="nx">j</span><span class="p">][</span><span class="mi">0</span><span class="p">]</span> <span class="o">===</span> <span class="nx">i</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC128'>	                        <span class="nx">ptsInClust</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">data</span><span class="p">[</span><span class="nx">j</span><span class="p">]);</span>&#x000A;</div><div class='line' id='LC129'>	                    <span class="p">}</span>&#x000A;</div><div class='line' id='LC130'>	                <span class="p">}</span>&#x000A;</div><div class='line' id='LC131'>	                <span class="nx">centroids</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="nx">meanInColumns</span><span class="p">(</span><span class="nx">ptsInClust</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC132'>	            <span class="p">}</span>&#x000A;</div><div class='line' id='LC133'>	        <span class="p">}</span>&#x000A;</div><div class='line' id='LC134'>&#x000A;</div><div class='line' id='LC135'>	        <span class="kd">var</span> <span class="nx">clusterWithKmeans</span> <span class="o">=</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC136'>	            <span class="na">centroids</span><span class="p">:</span> <span class="nx">centroids</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC137'>	            <span class="na">clusterAssigned</span><span class="p">:</span> <span class="nx">clusterAssigned</span>&#x000A;</div><div class='line' id='LC138'>	        <span class="p">};</span>&#x000A;</div><div class='line' id='LC139'>	        <span class="k">return</span> <span class="nx">clusterWithKmeans</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC140'>	    <span class="p">}</span>&#x000A;</div><div class='line' id='LC141'>&#x000A;</div><div class='line' id='LC142'>	    <span class="cm">/**</span>&#x000A;</div><div class='line' id='LC143'><span class="cm">	     * Calculate the average of each column in a two-dimensional array</span>&#x000A;</div><div class='line' id='LC144'><span class="cm">	     *  and returns the values as an array.</span>&#x000A;</div><div class='line' id='LC145'><span class="cm">	     * @param  {Array.&lt;Array&gt;} dataList two-dimensional array</span>&#x000A;</div><div class='line' id='LC146'><span class="cm">	     * @return {Array}</span>&#x000A;</div><div class='line' id='LC147'><span class="cm">	     */</span>&#x000A;</div><div class='line' id='LC148'>	    <span class="kd">function</span> <span class="nx">meanInColumns</span><span class="p">(</span><span class="nx">dataList</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC149'>&#x000A;</div><div class='line' id='LC150'>	        <span class="kd">var</span> <span class="nx">size</span> <span class="o">=</span> <span class="nx">arraySize</span><span class="p">(</span><span class="nx">dataList</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC151'>	        <span class="kd">var</span> <span class="nx">meanArray</span> <span class="o">=</span> <span class="p">[];</span>&#x000A;</div><div class='line' id='LC152'>	        <span class="kd">var</span> <span class="nx">sum</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC153'>	        <span class="kd">var</span> <span class="nx">mean</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC154'>	        <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">j</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">j</span> <span class="o">&lt;</span> <span class="nx">size</span><span class="p">[</span><span class="mi">1</span><span class="p">];</span> <span class="nx">j</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC155'>	            <span class="nx">sum</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC156'>	            <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">size</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC157'>	                <span class="nx">sum</span> <span class="o">+=</span> <span class="nx">dataList</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="nx">j</span><span class="p">];</span>&#x000A;</div><div class='line' id='LC158'>	            <span class="p">}</span>&#x000A;</div><div class='line' id='LC159'>	            <span class="nx">mean</span> <span class="o">=</span> <span class="nx">sum</span> <span class="o">/</span> <span class="nx">size</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span>&#x000A;</div><div class='line' id='LC160'>	            <span class="nx">meanArray</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">mean</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC161'>	        <span class="p">}</span>&#x000A;</div><div class='line' id='LC162'>	        <span class="k">return</span> <span class="nx">meanArray</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC163'>	    <span class="p">}</span>&#x000A;</div><div class='line' id='LC164'>&#x000A;</div><div class='line' id='LC165'>	    <span class="cm">/**</span>&#x000A;</div><div class='line' id='LC166'><span class="cm">	     * The combine of hierarchical clustering and k-means.</span>&#x000A;</div><div class='line' id='LC167'><span class="cm">	     * @param  {Array} data   two-dimension array.</span>&#x000A;</div><div class='line' id='LC168'><span class="cm">	     * @param  {[type]} k   the number of clusters in a dataset. It has to be greater than 1.</span>&#x000A;</div><div class='line' id='LC169'><span class="cm">	     * @param  {boolean}  stepByStep</span>&#x000A;</div><div class='line' id='LC170'><span class="cm">	     * @return {}</span>&#x000A;</div><div class='line' id='LC171'><span class="cm">	     */</span>&#x000A;</div><div class='line' id='LC172'>	    <span class="kd">function</span> <span class="nx">hierarchicalKMeans</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="nx">k</span><span class="p">,</span> <span class="nx">stepByStep</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC173'>	        <span class="k">if</span> <span class="p">(</span><span class="nx">k</span> <span class="o">&lt;</span> <span class="mi">2</span> <span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC174'>	            <span class="k">return</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC175'>	        <span class="p">}</span>&#x000A;</div><div class='line' id='LC176'>	        <span class="kd">var</span> <span class="nx">dataSet</span> <span class="o">=</span> <span class="nx">dataPreprocess</span><span class="p">(</span><span class="nx">data</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC177'>	        <span class="kd">var</span> <span class="nx">size</span> <span class="o">=</span> <span class="nx">arraySize</span><span class="p">(</span><span class="nx">dataSet</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC178'>	        <span class="kd">var</span> <span class="nx">clusterAssment</span> <span class="o">=</span> <span class="nx">zeros</span><span class="p">(</span><span class="nx">size</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="mi">2</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC179'>	        <span class="c1">// initial center point</span>&#x000A;</div><div class='line' id='LC180'>	        <span class="kd">var</span> <span class="nx">centroid0</span> <span class="o">=</span> <span class="nx">meanInColumns</span><span class="p">(</span><span class="nx">dataSet</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC181'>	        <span class="kd">var</span> <span class="nx">centList</span> <span class="o">=</span> <span class="p">[</span><span class="nx">centroid0</span><span class="p">];</span>&#x000A;</div><div class='line' id='LC182'>	        <span class="kd">var</span> <span class="nx">squareError</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC183'>	        <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">size</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC184'>	            <span class="nx">squareError</span> <span class="o">=</span> <span class="nx">distEuclid</span><span class="p">(</span><span class="nx">dataSet</span><span class="p">[</span><span class="nx">i</span><span class="p">],</span> <span class="nx">centroid0</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC185'>	            <span class="nx">clusterAssment</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="mi">1</span><span class="p">]</span> <span class="o">=</span> <span class="nx">mathPow</span><span class="p">(</span><span class="nx">squareError</span><span class="p">,</span> <span class="mi">2</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC186'>	        <span class="p">}</span>&#x000A;</div><div class='line' id='LC187'>	        <span class="kd">var</span> <span class="nx">lowestSSE</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC188'>	        <span class="kd">var</span> <span class="nx">ptsInClust</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC189'>	        <span class="kd">var</span> <span class="nx">ptsNotClust</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC190'>	        <span class="kd">var</span> <span class="nx">clusterInfo</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC191'>	        <span class="kd">var</span> <span class="nx">sseSplit</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC192'>	        <span class="kd">var</span> <span class="nx">sseNotSplit</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC193'>	        <span class="kd">var</span> <span class="nx">index</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC194'>	        <span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC195'>	            <span class="na">isEnd</span><span class="p">:</span> <span class="kc">false</span>&#x000A;</div><div class='line' id='LC196'>	        <span class="p">};</span>&#x000A;</div><div class='line' id='LC197'>&#x000A;</div><div class='line' id='LC198'>	        <span class="kd">function</span> <span class="nx">oneStep</span><span class="p">()</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC199'>	            <span class="c1">//the existing clusters are continuously divided</span>&#x000A;</div><div class='line' id='LC200'>	            <span class="c1">//until the number of clusters is k</span>&#x000A;</div><div class='line' id='LC201'>	            <span class="k">if</span> <span class="p">(</span><span class="nx">index</span> <span class="o">&lt;</span> <span class="nx">k</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC202'>	                <span class="nx">lowestSSE</span> <span class="o">=</span> <span class="kc">Infinity</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC203'>	                <span class="kd">var</span> <span class="nx">centSplit</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC204'>	                <span class="kd">var</span> <span class="nx">newCentroid</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC205'>	                <span class="kd">var</span> <span class="nx">newClusterAss</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC206'>&#x000A;</div><div class='line' id='LC207'>	                <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">j</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">j</span> <span class="o">&lt;</span> <span class="nx">centList</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">j</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC208'>	                    <span class="nx">ptsInClust</span> <span class="o">=</span> <span class="p">[];</span>&#x000A;</div><div class='line' id='LC209'>	                    <span class="nx">ptsNotClust</span> <span class="o">=</span> <span class="p">[];</span>&#x000A;</div><div class='line' id='LC210'>	                    <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">clusterAssment</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC211'>	                        <span class="k">if</span> <span class="p">(</span><span class="nx">clusterAssment</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="mi">0</span><span class="p">]</span> <span class="o">===</span> <span class="nx">j</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC212'>	                            <span class="nx">ptsInClust</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">dataSet</span><span class="p">[</span><span class="nx">i</span><span class="p">]);</span>&#x000A;</div><div class='line' id='LC213'>	                        <span class="p">}</span>&#x000A;</div><div class='line' id='LC214'>	                        <span class="k">else</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC215'>	                            <span class="nx">ptsNotClust</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">clusterAssment</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="mi">1</span><span class="p">]);</span>&#x000A;</div><div class='line' id='LC216'>	                        <span class="p">}</span>&#x000A;</div><div class='line' id='LC217'>	                    <span class="p">}</span>&#x000A;</div><div class='line' id='LC218'>	                    <span class="nx">clusterInfo</span> <span class="o">=</span> <span class="nx">kMeans</span><span class="p">(</span><span class="nx">ptsInClust</span><span class="p">,</span> <span class="mi">2</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC219'>	                    <span class="nx">sseSplit</span> <span class="o">=</span> <span class="nx">sumOfColumn</span><span class="p">(</span><span class="nx">clusterInfo</span><span class="p">.</span><span class="nx">clusterAssigned</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC220'>	                    <span class="nx">sseNotSplit</span> <span class="o">=</span> <span class="nx">arraySum</span><span class="p">(</span><span class="nx">ptsNotClust</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC221'>	                    <span class="k">if</span> <span class="p">(</span><span class="nx">sseSplit</span> <span class="o">+</span> <span class="nx">sseNotSplit</span> <span class="o">&lt;</span> <span class="nx">lowestSSE</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC222'>	                        <span class="nx">lowestSSE</span> <span class="o">=</span> <span class="nx">sseNotSplit</span> <span class="o">+</span> <span class="nx">sseSplit</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC223'>	                        <span class="nx">centSplit</span> <span class="o">=</span> <span class="nx">j</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC224'>	                        <span class="nx">newCentroid</span> <span class="o">=</span> <span class="nx">clusterInfo</span><span class="p">.</span><span class="nx">centroids</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC225'>	                        <span class="nx">newClusterAss</span> <span class="o">=</span> <span class="nx">clusterInfo</span><span class="p">.</span><span class="nx">clusterAssigned</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC226'>	                    <span class="p">}</span>&#x000A;</div><div class='line' id='LC227'>	                <span class="p">}</span>&#x000A;</div><div class='line' id='LC228'>&#x000A;</div><div class='line' id='LC229'>	                <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">newClusterAss</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC230'>	                    <span class="k">if</span> <span class="p">(</span><span class="nx">newClusterAss</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="mi">0</span><span class="p">]</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC231'>	                        <span class="nx">newClusterAss</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="mi">0</span><span class="p">]</span> <span class="o">=</span> <span class="nx">centSplit</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC232'>	                    <span class="p">}</span>&#x000A;</div><div class='line' id='LC233'>	                    <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">newClusterAss</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="mi">0</span><span class="p">]</span> <span class="o">===</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC234'>	                        <span class="nx">newClusterAss</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="mi">0</span><span class="p">]</span> <span class="o">=</span> <span class="nx">centList</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC235'>	                    <span class="p">}</span>&#x000A;</div><div class='line' id='LC236'>	                <span class="p">}</span>&#x000A;</div><div class='line' id='LC237'>&#x000A;</div><div class='line' id='LC238'>	                <span class="nx">centList</span><span class="p">[</span><span class="nx">centSplit</span><span class="p">]</span> <span class="o">=</span> <span class="nx">newCentroid</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span>&#x000A;</div><div class='line' id='LC239'>	                <span class="nx">centList</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">newCentroid</span><span class="p">[</span><span class="mi">1</span><span class="p">]);</span>&#x000A;</div><div class='line' id='LC240'>	                <span class="k">for</span> <span class="p">(</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">j</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">clusterAssment</span><span class="p">.</span><span class="nx">length</span> <span class="o">&amp;&amp;</span> <span class="nx">j</span> <span class="o">&lt;</span> <span class="nx">newClusterAss</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC241'>	                    <span class="k">if</span> <span class="p">(</span><span class="nx">clusterAssment</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="mi">0</span><span class="p">]</span> <span class="o">===</span> <span class="nx">centSplit</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC242'>	                        <span class="nx">clusterAssment</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="mi">0</span><span class="p">]</span> <span class="o">=</span> <span class="nx">newClusterAss</span><span class="p">[</span><span class="nx">j</span><span class="p">][</span><span class="mi">0</span><span class="p">];</span>&#x000A;</div><div class='line' id='LC243'>	                        <span class="nx">clusterAssment</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="mi">1</span><span class="p">]</span> <span class="o">=</span> <span class="nx">newClusterAss</span><span class="p">[</span><span class="nx">j</span><span class="o">++</span><span class="p">][</span><span class="mi">1</span><span class="p">];</span>&#x000A;</div><div class='line' id='LC244'>	                    <span class="p">}</span>&#x000A;</div><div class='line' id='LC245'>	                <span class="p">}</span>&#x000A;</div><div class='line' id='LC246'>&#x000A;</div><div class='line' id='LC247'>	                <span class="kd">var</span> <span class="nx">pointInClust</span> <span class="o">=</span> <span class="p">[];</span>&#x000A;</div><div class='line' id='LC248'>	                <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">centList</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC249'>	                    <span class="nx">pointInClust</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="p">[];</span>&#x000A;</div><div class='line' id='LC250'>	                    <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">j</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">j</span> <span class="o">&lt;</span> <span class="nx">clusterAssment</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">j</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC251'>	                        <span class="k">if</span> <span class="p">(</span><span class="nx">clusterAssment</span><span class="p">[</span><span class="nx">j</span><span class="p">][</span><span class="mi">0</span><span class="p">]</span> <span class="o">===</span> <span class="nx">i</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC252'>	                            <span class="nx">pointInClust</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">push</span><span class="p">(</span><span class="nx">dataSet</span><span class="p">[</span><span class="nx">j</span><span class="p">]);</span>&#x000A;</div><div class='line' id='LC253'>	                        <span class="p">}</span>&#x000A;</div><div class='line' id='LC254'>	                    <span class="p">}</span>&#x000A;</div><div class='line' id='LC255'>	                <span class="p">}</span>&#x000A;</div><div class='line' id='LC256'>&#x000A;</div><div class='line' id='LC257'>	                <span class="nx">result</span><span class="p">.</span><span class="nx">clusterAssment</span> <span class="o">=</span> <span class="nx">clusterAssment</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC258'>	                <span class="nx">result</span><span class="p">.</span><span class="nx">centroids</span> <span class="o">=</span> <span class="nx">centList</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC259'>	                <span class="nx">result</span><span class="p">.</span><span class="nx">pointsInCluster</span> <span class="o">=</span> <span class="nx">pointInClust</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC260'>&#x000A;</div><div class='line' id='LC261'>&#x000A;</div><div class='line' id='LC262'>	                <span class="nx">index</span><span class="o">++</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC263'>	            <span class="p">}</span>&#x000A;</div><div class='line' id='LC264'>	            <span class="k">else</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC265'>	                <span class="nx">result</span><span class="p">.</span><span class="nx">isEnd</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC266'>	            <span class="p">}</span>&#x000A;</div><div class='line' id='LC267'>&#x000A;</div><div class='line' id='LC268'>	            <span class="k">return</span> <span class="nx">result</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC269'>	        <span class="p">}</span>&#x000A;</div><div class='line' id='LC270'>&#x000A;</div><div class='line' id='LC271'>	        <span class="kd">var</span> <span class="nx">step</span> <span class="o">=</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC272'>	            <span class="na">next</span><span class="p">:</span> <span class="nx">oneStep</span>&#x000A;</div><div class='line' id='LC273'>	        <span class="p">};</span>&#x000A;</div><div class='line' id='LC274'>&#x000A;</div><div class='line' id='LC275'>	        <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">stepByStep</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC276'>	            <span class="kd">var</span> <span class="nx">result</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC277'>	            <span class="k">while</span> <span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="nx">result</span> <span class="o">=</span> <span class="nx">step</span><span class="p">.</span><span class="nx">next</span><span class="p">()).</span><span class="nx">isEnd</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC278'>	            <span class="k">return</span> <span class="nx">result</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC279'>	        <span class="p">}</span>&#x000A;</div><div class='line' id='LC280'>	        <span class="k">else</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC281'>	            <span class="k">return</span> <span class="nx">step</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC282'>	        <span class="p">}</span>&#x000A;</div><div class='line' id='LC283'>&#x000A;</div><div class='line' id='LC284'>	    <span class="p">}</span>&#x000A;</div><div class='line' id='LC285'>&#x000A;</div><div class='line' id='LC286'>	    <span class="cm">/**</span>&#x000A;</div><div class='line' id='LC287'><span class="cm">	     * Create random centroid of kmeans.</span>&#x000A;</div><div class='line' id='LC288'><span class="cm">	     * @param  {Array.&lt;number&gt;} dataSet  two-dimension array</span>&#x000A;</div><div class='line' id='LC289'><span class="cm">	     * @param  {number} k   the number of centroids to be created</span>&#x000A;</div><div class='line' id='LC290'><span class="cm">	     * @return {Array.&lt;number&gt;}   random centroids of kmeans</span>&#x000A;</div><div class='line' id='LC291'><span class="cm">	     */</span>&#x000A;</div><div class='line' id='LC292'>	    <span class="kd">function</span> <span class="nx">createRandCent</span><span class="p">(</span><span class="nx">dataSet</span><span class="p">,</span> <span class="nx">k</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC293'>	        <span class="kd">var</span> <span class="nx">size</span> <span class="o">=</span> <span class="nx">arraySize</span><span class="p">(</span><span class="nx">dataSet</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC294'>	        <span class="c1">//constructs a two-dimensional array with all values 0</span>&#x000A;</div><div class='line' id='LC295'>	        <span class="kd">var</span> <span class="nx">centroids</span> <span class="o">=</span> <span class="nx">zeros</span><span class="p">(</span><span class="nx">k</span><span class="p">,</span> <span class="nx">size</span><span class="p">[</span><span class="mi">1</span><span class="p">]);</span>&#x000A;</div><div class='line' id='LC296'>	        <span class="kd">var</span> <span class="nx">minJ</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC297'>	        <span class="kd">var</span> <span class="nx">maxJ</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC298'>	        <span class="kd">var</span> <span class="nx">rangeJ</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC299'>	        <span class="c1">//create random cluster centers, within bounds of each dimension</span>&#x000A;</div><div class='line' id='LC300'>	        <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">j</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">j</span> <span class="o">&lt;</span> <span class="nx">size</span><span class="p">[</span><span class="mi">1</span><span class="p">];</span> <span class="nx">j</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC301'>	            <span class="nx">minJ</span> <span class="o">=</span> <span class="nx">dataSet</span><span class="p">[</span><span class="mi">0</span><span class="p">][</span><span class="nx">j</span><span class="p">];</span>&#x000A;</div><div class='line' id='LC302'>	            <span class="nx">maxJ</span> <span class="o">=</span> <span class="nx">dataSet</span><span class="p">[</span><span class="mi">0</span><span class="p">][</span><span class="nx">j</span><span class="p">];</span>&#x000A;</div><div class='line' id='LC303'>	            <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">size</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC304'>	                <span class="k">if</span> <span class="p">(</span><span class="nx">dataSet</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="nx">j</span><span class="p">]</span> <span class="o">&lt;</span> <span class="nx">minJ</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC305'>	                    <span class="nx">minJ</span> <span class="o">=</span> <span class="nx">dataSet</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="nx">j</span><span class="p">];</span>&#x000A;</div><div class='line' id='LC306'>	                <span class="p">}</span>&#x000A;</div><div class='line' id='LC307'>	                <span class="k">if</span> <span class="p">(</span><span class="nx">dataSet</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="nx">j</span><span class="p">]</span> <span class="o">&gt;</span> <span class="nx">maxJ</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC308'>	                    <span class="nx">maxJ</span> <span class="o">=</span> <span class="nx">dataSet</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="nx">j</span><span class="p">];</span>&#x000A;</div><div class='line' id='LC309'>	                <span class="p">}</span>&#x000A;</div><div class='line' id='LC310'>	            <span class="p">}</span>&#x000A;</div><div class='line' id='LC311'>	            <span class="nx">rangeJ</span> <span class="o">=</span> <span class="nx">maxJ</span> <span class="o">-</span> <span class="nx">minJ</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC312'>	            <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">k</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC313'>	                <span class="nx">centroids</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="nx">j</span><span class="p">]</span> <span class="o">=</span> <span class="nx">minJ</span> <span class="o">+</span> <span class="nx">rangeJ</span> <span class="o">*</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">random</span><span class="p">();</span>&#x000A;</div><div class='line' id='LC314'>	            <span class="p">}</span>&#x000A;</div><div class='line' id='LC315'>	        <span class="p">}</span>&#x000A;</div><div class='line' id='LC316'>	        <span class="k">return</span> <span class="nx">centroids</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC317'>	    <span class="p">}</span>&#x000A;</div><div class='line' id='LC318'>&#x000A;</div><div class='line' id='LC319'>	    <span class="cm">/**</span>&#x000A;</div><div class='line' id='LC320'><span class="cm">	     * Distance method for calculating similarity</span>&#x000A;</div><div class='line' id='LC321'><span class="cm">	     * @param  {Array.&lt;number&gt;}  vec1</span>&#x000A;</div><div class='line' id='LC322'><span class="cm">	     * @param  {Array.&lt;nnumber&gt;}  vec2</span>&#x000A;</div><div class='line' id='LC323'><span class="cm">	     * @return {number}</span>&#x000A;</div><div class='line' id='LC324'><span class="cm">	     */</span>&#x000A;</div><div class='line' id='LC325'>	    <span class="kd">function</span> <span class="nx">distEuclid</span><span class="p">(</span><span class="nx">vec1</span><span class="p">,</span> <span class="nx">vec2</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC326'>&#x000A;</div><div class='line' id='LC327'>	        <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">vec1</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">vec2</span><span class="p">))</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC328'>	            <span class="k">return</span> <span class="nx">mathSqrt</span><span class="p">(</span><span class="nx">mathPow</span><span class="p">(</span><span class="nx">vec1</span> <span class="o">-</span> <span class="nx">vec2</span><span class="p">,</span> <span class="mi">2</span><span class="p">));</span>&#x000A;</div><div class='line' id='LC329'>	        <span class="p">}</span>&#x000A;</div><div class='line' id='LC330'>&#x000A;</div><div class='line' id='LC331'>	        <span class="kd">var</span> <span class="nx">powerSum</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC332'>	        <span class="c1">//subtract the corresponding elements in the vectors</span>&#x000A;</div><div class='line' id='LC333'>	        <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">vec1</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC334'>	            <span class="nx">powerSum</span> <span class="o">+=</span> <span class="nx">mathPow</span><span class="p">(</span><span class="nx">vec1</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">-</span> <span class="nx">vec2</span><span class="p">[</span><span class="nx">i</span><span class="p">],</span> <span class="mi">2</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC335'>	        <span class="p">}</span>&#x000A;</div><div class='line' id='LC336'>&#x000A;</div><div class='line' id='LC337'>	        <span class="k">return</span> <span class="nx">mathSqrt</span><span class="p">(</span><span class="nx">powerSum</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC338'>	    <span class="p">}</span>&#x000A;</div><div class='line' id='LC339'>&#x000A;</div><div class='line' id='LC340'>	    <span class="k">return</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC341'>	        <span class="na">kMeans</span><span class="p">:</span> <span class="nx">kMeans</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC342'>	        <span class="na">hierarchicalKMeans</span><span class="p">:</span> <span class="nx">hierarchicalKMeans</span>&#x000A;</div><div class='line' id='LC343'>	    <span class="p">};</span>&#x000A;</div><div class='line' id='LC344'>&#x000A;</div><div class='line' id='LC345'>	<span class="p">}.</span><span class="nx">call</span><span class="p">(</span><span class="nx">exports</span><span class="p">,</span> <span class="nx">__webpack_require__</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">module</span><span class="p">),</span> <span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span> <span class="o">!==</span> <span class="kc">undefined</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span><span class="p">));</span>&#x000A;</div><div class='line' id='LC346'>&#x000A;</div><div class='line' id='LC347'><span class="cm">/***/</span> <span class="p">}),</span>&#x000A;</div><div class='line' id='LC348'><span class="cm">/* 2 */</span>&#x000A;</div><div class='line' id='LC349'><span class="cm">/***/</span> <span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">module</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">__webpack_require__</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC350'>&#x000A;</div><div class='line' id='LC351'>	<span class="kd">var</span> <span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span><span class="p">;</span><span class="o">!</span><span class="p">(</span><span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">require</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC352'>&#x000A;</div><div class='line' id='LC353'>	    <span class="kd">var</span> <span class="nx">array</span> <span class="o">=</span> <span class="nx">__webpack_require__</span><span class="p">(</span><span class="mi">3</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC354'>	    <span class="kd">var</span> <span class="nx">isArray</span> <span class="o">=</span> <span class="nx">array</span><span class="p">.</span><span class="nx">isArray</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC355'>	    <span class="kd">var</span> <span class="nx">size</span> <span class="o">=</span> <span class="nx">array</span><span class="p">.</span><span class="nx">size</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC356'>	    <span class="kd">var</span> <span class="nx">number</span> <span class="o">=</span> <span class="nx">__webpack_require__</span><span class="p">(</span><span class="mi">4</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC357'>	    <span class="kd">var</span> <span class="nx">isNumber</span> <span class="o">=</span> <span class="nx">number</span><span class="p">.</span><span class="nx">isNumber</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC358'>&#x000A;</div><div class='line' id='LC359'>	    <span class="cm">/**</span>&#x000A;</div><div class='line' id='LC360'><span class="cm">	     * Data preprocessing, filter the wrong data object.</span>&#x000A;</div><div class='line' id='LC361'><span class="cm">	     *  for example [12,] --- missing y value</span>&#x000A;</div><div class='line' id='LC362'><span class="cm">	     *              [,12] --- missing x value</span>&#x000A;</div><div class='line' id='LC363'><span class="cm">	     *              [12, b] --- incorrect y value</span>&#x000A;</div><div class='line' id='LC364'><span class="cm">	     *              ['a', 12] --- incorrect x value</span>&#x000A;</div><div class='line' id='LC365'><span class="cm">	     * @param  {Array.&lt;Array&gt;} data</span>&#x000A;</div><div class='line' id='LC366'><span class="cm">	     * @return {Array.&lt;Array.&lt;number&gt;&gt;}</span>&#x000A;</div><div class='line' id='LC367'><span class="cm">	     */</span>&#x000A;</div><div class='line' id='LC368'>	    <span class="kd">function</span> <span class="nx">dataPreprocess</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC369'>&#x000A;</div><div class='line' id='LC370'>	        <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">data</span><span class="p">))</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC371'>	            <span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="dl">'</span><span class="s1">Invalid data type, you should input an array</span><span class="dl">'</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC372'>	        <span class="p">}</span>&#x000A;</div><div class='line' id='LC373'>	        <span class="kd">var</span> <span class="nx">predata</span> <span class="o">=</span> <span class="p">[];</span>&#x000A;</div><div class='line' id='LC374'>	        <span class="kd">var</span> <span class="nx">arraySize</span> <span class="o">=</span> <span class="nx">size</span><span class="p">(</span><span class="nx">data</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC375'>&#x000A;</div><div class='line' id='LC376'>	        <span class="k">if</span> <span class="p">(</span><span class="nx">arraySize</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC377'>&#x000A;</div><div class='line' id='LC378'>	            <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">arraySize</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC379'>&#x000A;</div><div class='line' id='LC380'>	                <span class="k">if</span> <span class="p">(</span><span class="nx">isNumber</span><span class="p">(</span><span class="nx">data</span><span class="p">[</span><span class="nx">i</span><span class="p">]))</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC381'>	                    <span class="nx">predata</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">data</span><span class="p">[</span><span class="nx">i</span><span class="p">]);</span>&#x000A;</div><div class='line' id='LC382'>	                <span class="p">}</span>&#x000A;</div><div class='line' id='LC383'>	            <span class="p">}</span>&#x000A;</div><div class='line' id='LC384'>	        <span class="p">}</span>&#x000A;</div><div class='line' id='LC385'>	        <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">arraySize</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">2</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC386'>&#x000A;</div><div class='line' id='LC387'>	            <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">arraySize</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC388'>&#x000A;</div><div class='line' id='LC389'>	                <span class="kd">var</span> <span class="nx">isCorrect</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC390'>	                <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">j</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">j</span> <span class="o">&lt;</span> <span class="nx">arraySize</span><span class="p">[</span><span class="mi">1</span><span class="p">];</span> <span class="nx">j</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC391'>	                    <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">isNumber</span><span class="p">(</span><span class="nx">data</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="nx">j</span><span class="p">]))</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC392'>	                        <span class="nx">isCorrect</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC393'>	                    <span class="p">}</span>&#x000A;</div><div class='line' id='LC394'>	                <span class="p">}</span>&#x000A;</div><div class='line' id='LC395'>	                <span class="k">if</span> <span class="p">(</span><span class="nx">isCorrect</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC396'>	                    <span class="nx">predata</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">data</span><span class="p">[</span><span class="nx">i</span><span class="p">]);</span>&#x000A;</div><div class='line' id='LC397'>	                <span class="p">}</span>&#x000A;</div><div class='line' id='LC398'>	            <span class="p">}</span>&#x000A;</div><div class='line' id='LC399'>	        <span class="p">}</span>&#x000A;</div><div class='line' id='LC400'>	        <span class="k">return</span> <span class="nx">predata</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC401'>	    <span class="p">}</span>&#x000A;</div><div class='line' id='LC402'>&#x000A;</div><div class='line' id='LC403'>	    <span class="cm">/**</span>&#x000A;</div><div class='line' id='LC404'><span class="cm">	     * @param {string|number} val</span>&#x000A;</div><div class='line' id='LC405'><span class="cm">	     * @return {number}</span>&#x000A;</div><div class='line' id='LC406'><span class="cm">	     */</span>&#x000A;</div><div class='line' id='LC407'>	    <span class="kd">function</span> <span class="nx">getPrecision</span><span class="p">(</span><span class="nx">val</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC408'>	        <span class="kd">var</span> <span class="nx">str</span> <span class="o">=</span> <span class="nx">val</span><span class="p">.</span><span class="nx">toString</span><span class="p">();</span>&#x000A;</div><div class='line' id='LC409'>	        <span class="c1">// scientific notation is not considered</span>&#x000A;</div><div class='line' id='LC410'>	        <span class="kd">var</span> <span class="nx">dotIndex</span> <span class="o">=</span> <span class="nx">str</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="dl">'</span><span class="s1">.</span><span class="dl">'</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC411'>	        <span class="k">return</span> <span class="nx">dotIndex</span> <span class="o">&lt;</span> <span class="mi">0</span> <span class="p">?</span> <span class="mi">0</span> <span class="p">:</span> <span class="nx">str</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span> <span class="o">-</span> <span class="nx">dotIndex</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC412'>	    <span class="p">}</span>&#x000A;</div><div class='line' id='LC413'>&#x000A;</div><div class='line' id='LC414'>	    <span class="k">return</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC415'>	        <span class="na">dataPreprocess</span><span class="p">:</span> <span class="nx">dataPreprocess</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC416'>	        <span class="na">getPrecision</span><span class="p">:</span> <span class="nx">getPrecision</span>&#x000A;</div><div class='line' id='LC417'>	    <span class="p">};</span>&#x000A;</div><div class='line' id='LC418'>&#x000A;</div><div class='line' id='LC419'>	<span class="p">}.</span><span class="nx">call</span><span class="p">(</span><span class="nx">exports</span><span class="p">,</span> <span class="nx">__webpack_require__</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">module</span><span class="p">),</span> <span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span> <span class="o">!==</span> <span class="kc">undefined</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span><span class="p">));</span>&#x000A;</div><div class='line' id='LC420'>&#x000A;</div><div class='line' id='LC421'><span class="cm">/***/</span> <span class="p">}),</span>&#x000A;</div><div class='line' id='LC422'><span class="cm">/* 3 */</span>&#x000A;</div><div class='line' id='LC423'><span class="cm">/***/</span> <span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">module</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">__webpack_require__</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC424'>&#x000A;</div><div class='line' id='LC425'>	<span class="kd">var</span> <span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span><span class="p">;</span><span class="o">!</span><span class="p">(</span><span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">require</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC426'>&#x000A;</div><div class='line' id='LC427'>	    <span class="kd">var</span> <span class="nx">objToString</span> <span class="o">=</span> <span class="nb">Object</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">toString</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC428'>	    <span class="kd">var</span> <span class="nx">arrayProto</span> <span class="o">=</span> <span class="nb">Array</span><span class="p">.</span><span class="nx">prototype</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC429'>	    <span class="kd">var</span> <span class="nx">nativeMap</span> <span class="o">=</span> <span class="nx">arrayProto</span><span class="p">.</span><span class="nx">map</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC430'>&#x000A;</div><div class='line' id='LC431'>	    <span class="cm">/**</span>&#x000A;</div><div class='line' id='LC432'><span class="cm">	     * Get the size of a array</span>&#x000A;</div><div class='line' id='LC433'><span class="cm">	     * @param  {Array} data</span>&#x000A;</div><div class='line' id='LC434'><span class="cm">	     * @return {Array}</span>&#x000A;</div><div class='line' id='LC435'><span class="cm">	     */</span>&#x000A;</div><div class='line' id='LC436'>	    <span class="kd">function</span> <span class="nx">size</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC437'>	        <span class="kd">var</span> <span class="nx">s</span> <span class="o">=</span> <span class="p">[];</span>&#x000A;</div><div class='line' id='LC438'>	        <span class="k">while</span> <span class="p">(</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">data</span><span class="p">))</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC439'>	            <span class="nx">s</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">length</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC440'>	            <span class="nx">data</span> <span class="o">=</span> <span class="nx">data</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span>&#x000A;</div><div class='line' id='LC441'>	        <span class="p">}</span>&#x000A;</div><div class='line' id='LC442'>	        <span class="k">return</span> <span class="nx">s</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC443'>	    <span class="p">}</span>&#x000A;</div><div class='line' id='LC444'>&#x000A;</div><div class='line' id='LC445'>	    <span class="cm">/**</span>&#x000A;</div><div class='line' id='LC446'><span class="cm">	     * @param {*}  value</span>&#x000A;</div><div class='line' id='LC447'><span class="cm">	     * @return {boolean}</span>&#x000A;</div><div class='line' id='LC448'><span class="cm">	     */</span>&#x000A;</div><div class='line' id='LC449'>	    <span class="kd">function</span> <span class="nx">isArray</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC450'>	        <span class="k">return</span> <span class="nx">objToString</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="o">===</span> <span class="dl">'</span><span class="s1">[object Array]</span><span class="dl">'</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC451'>	    <span class="p">}</span>&#x000A;</div><div class='line' id='LC452'>&#x000A;</div><div class='line' id='LC453'>	    <span class="cm">/**</span>&#x000A;</div><div class='line' id='LC454'><span class="cm">	     * constructs a (m x n) array with all values 0</span>&#x000A;</div><div class='line' id='LC455'><span class="cm">	     * @param  {number} m  the row</span>&#x000A;</div><div class='line' id='LC456'><span class="cm">	     * @param  {number} n  the column</span>&#x000A;</div><div class='line' id='LC457'><span class="cm">	     * @return {Array}</span>&#x000A;</div><div class='line' id='LC458'><span class="cm">	     */</span>&#x000A;</div><div class='line' id='LC459'>	    <span class="kd">function</span> <span class="nx">zeros</span><span class="p">(</span><span class="nx">m</span><span class="p">,</span> <span class="nx">n</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC460'>	        <span class="kd">var</span> <span class="nx">zeroArray</span> <span class="o">=</span> <span class="p">[];</span>&#x000A;</div><div class='line' id='LC461'>	        <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">m</span> <span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC462'>	            <span class="nx">zeroArray</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="p">[];</span>&#x000A;</div><div class='line' id='LC463'>	            <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">j</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">j</span> <span class="o">&lt;</span> <span class="nx">n</span><span class="p">;</span> <span class="nx">j</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC464'>	                <span class="nx">zeroArray</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="nx">j</span><span class="p">]</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC465'>	            <span class="p">}</span>&#x000A;</div><div class='line' id='LC466'>	        <span class="p">}</span>&#x000A;</div><div class='line' id='LC467'>	        <span class="k">return</span> <span class="nx">zeroArray</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC468'>	    <span class="p">}</span>&#x000A;</div><div class='line' id='LC469'>&#x000A;</div><div class='line' id='LC470'>	    <span class="cm">/**</span>&#x000A;</div><div class='line' id='LC471'><span class="cm">	     * Sums each element in the array.</span>&#x000A;</div><div class='line' id='LC472'><span class="cm">	     * Internal use, for performance considerations, to avoid</span>&#x000A;</div><div class='line' id='LC473'><span class="cm">	     * unnecessary judgments and calculations.</span>&#x000A;</div><div class='line' id='LC474'><span class="cm">	     * @param  {Array} vector</span>&#x000A;</div><div class='line' id='LC475'><span class="cm">	     * @return {number}</span>&#x000A;</div><div class='line' id='LC476'><span class="cm">	     */</span>&#x000A;</div><div class='line' id='LC477'>	    <span class="kd">function</span> <span class="nx">sum</span><span class="p">(</span><span class="nx">vector</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC478'>	        <span class="kd">var</span> <span class="nx">sum</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC479'>	        <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">vector</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC480'>	            <span class="nx">sum</span> <span class="o">+=</span> <span class="nx">vector</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span>&#x000A;</div><div class='line' id='LC481'>	        <span class="p">}</span>&#x000A;</div><div class='line' id='LC482'>	        <span class="k">return</span> <span class="nx">sum</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC483'>	    <span class="p">}</span>&#x000A;</div><div class='line' id='LC484'>&#x000A;</div><div class='line' id='LC485'>	    <span class="cm">/**</span>&#x000A;</div><div class='line' id='LC486'><span class="cm">	     * Computes the sum of the specified column elements in a two-dimensional array</span>&#x000A;</div><div class='line' id='LC487'><span class="cm">	     * @param  {Array.&lt;Array&gt;} dataList  two-dimensional array</span>&#x000A;</div><div class='line' id='LC488'><span class="cm">	     * @param  {number} n  the specified column, zero-based</span>&#x000A;</div><div class='line' id='LC489'><span class="cm">	     * @return {number}</span>&#x000A;</div><div class='line' id='LC490'><span class="cm">	     */</span>&#x000A;</div><div class='line' id='LC491'>	    <span class="kd">function</span> <span class="nx">sumOfColumn</span><span class="p">(</span><span class="nx">dataList</span><span class="p">,</span> <span class="nx">n</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC492'>	        <span class="kd">var</span> <span class="nx">sum</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC493'>	        <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">dataList</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC494'>	            <span class="nx">sum</span> <span class="o">+=</span> <span class="nx">dataList</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="nx">n</span><span class="p">];</span>&#x000A;</div><div class='line' id='LC495'>	        <span class="p">}</span>&#x000A;</div><div class='line' id='LC496'>	        <span class="k">return</span> <span class="nx">sum</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC497'>	    <span class="p">}</span>&#x000A;</div><div class='line' id='LC498'>&#x000A;</div><div class='line' id='LC499'>&#x000A;</div><div class='line' id='LC500'>	    <span class="kd">function</span> <span class="nx">ascending</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC501'>&#x000A;</div><div class='line' id='LC502'>	        <span class="k">return</span> <span class="nx">a</span> <span class="o">&gt;</span> <span class="nx">b</span> <span class="p">?</span> <span class="mi">1</span> <span class="p">:</span> <span class="nx">a</span> <span class="o">&lt;</span> <span class="nx">b</span> <span class="p">?</span> <span class="o">-</span><span class="mi">1</span> <span class="p">:</span> <span class="nx">a</span> <span class="o">===</span> <span class="nx">b</span> <span class="p">?</span> <span class="mi">0</span> <span class="p">:</span> <span class="kc">NaN</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC503'>&#x000A;</div><div class='line' id='LC504'>	    <span class="p">}</span>&#x000A;</div><div class='line' id='LC505'>&#x000A;</div><div class='line' id='LC506'>	    <span class="cm">/**</span>&#x000A;</div><div class='line' id='LC507'><span class="cm">	     * Binary search algorithm --- this bisector is specidfied to histogram, which every bin like that [a, b),</span>&#x000A;</div><div class='line' id='LC508'><span class="cm">	     * so the return value use to add 1.</span>&#x000A;</div><div class='line' id='LC509'><span class="cm">	     * @param  {Array.&lt;number&gt;} array</span>&#x000A;</div><div class='line' id='LC510'><span class="cm">	     * @param  {number} value</span>&#x000A;</div><div class='line' id='LC511'><span class="cm">	     * @param  {number} start</span>&#x000A;</div><div class='line' id='LC512'><span class="cm">	     * @param  {number} end</span>&#x000A;</div><div class='line' id='LC513'><span class="cm">	     * @return {number}</span>&#x000A;</div><div class='line' id='LC514'><span class="cm">	     */</span>&#x000A;</div><div class='line' id='LC515'>	    <span class="kd">function</span> <span class="nx">bisect</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">start</span><span class="p">,</span> <span class="nx">end</span><span class="p">)</span> <span class="p">{</span> <span class="c1">//移出去</span>&#x000A;</div><div class='line' id='LC516'>&#x000A;</div><div class='line' id='LC517'>	        <span class="k">if</span> <span class="p">(</span><span class="nx">start</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC518'>	            <span class="nx">start</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC519'>	        <span class="p">}</span>&#x000A;</div><div class='line' id='LC520'>	        <span class="k">if</span> <span class="p">(</span><span class="nx">end</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC521'>	            <span class="nx">end</span> <span class="o">=</span> <span class="nx">array</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC522'>	        <span class="p">}</span>&#x000A;</div><div class='line' id='LC523'>	        <span class="k">while</span> <span class="p">(</span><span class="nx">start</span> <span class="o">&lt;</span> <span class="nx">end</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC524'>	            <span class="kd">var</span> <span class="nx">mid</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">((</span><span class="nx">start</span> <span class="o">+</span> <span class="nx">end</span><span class="p">)</span> <span class="o">/</span> <span class="mi">2</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC525'>	            <span class="kd">var</span> <span class="nx">compare</span> <span class="o">=</span> <span class="nx">ascending</span><span class="p">(</span><span class="nx">array</span><span class="p">[</span><span class="nx">mid</span><span class="p">],</span> <span class="nx">value</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC526'>	            <span class="k">if</span> <span class="p">(</span><span class="nx">compare</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC527'>	                <span class="nx">end</span> <span class="o">=</span> <span class="nx">mid</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC528'>	            <span class="p">}</span>&#x000A;</div><div class='line' id='LC529'>	            <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">compare</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC530'>	                <span class="nx">start</span> <span class="o">=</span> <span class="nx">mid</span> <span class="o">+</span> <span class="mi">1</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC531'>	            <span class="p">}</span>&#x000A;</div><div class='line' id='LC532'>	            <span class="k">else</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC533'>	                <span class="k">return</span> <span class="nx">mid</span> <span class="o">+</span> <span class="mi">1</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC534'>	            <span class="p">}</span>&#x000A;</div><div class='line' id='LC535'>	        <span class="p">}</span>&#x000A;</div><div class='line' id='LC536'>	        <span class="k">return</span> <span class="nx">start</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC537'>	    <span class="p">}</span>&#x000A;</div><div class='line' id='LC538'>&#x000A;</div><div class='line' id='LC539'>	    <span class="cm">/**</span>&#x000A;</div><div class='line' id='LC540'><span class="cm">	     * 数组映射</span>&#x000A;</div><div class='line' id='LC541'><span class="cm">	     * @memberOf module:zrender/core/util</span>&#x000A;</div><div class='line' id='LC542'><span class="cm">	     * @param {Array} obj</span>&#x000A;</div><div class='line' id='LC543'><span class="cm">	     * @param {Function} cb</span>&#x000A;</div><div class='line' id='LC544'><span class="cm">	     * @param {*} [context]</span>&#x000A;</div><div class='line' id='LC545'><span class="cm">	     * @return {Array}</span>&#x000A;</div><div class='line' id='LC546'><span class="cm">	     */</span>&#x000A;</div><div class='line' id='LC547'>	    <span class="kd">function</span> <span class="nx">map</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">cb</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC548'>	        <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="nx">obj</span> <span class="o">&amp;&amp;</span> <span class="nx">cb</span><span class="p">))</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC549'>	            <span class="k">return</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC550'>	        <span class="p">}</span>&#x000A;</div><div class='line' id='LC551'>	        <span class="k">if</span> <span class="p">(</span><span class="nx">obj</span><span class="p">.</span><span class="nx">map</span> <span class="o">&amp;&amp;</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">map</span> <span class="o">===</span> <span class="nx">nativeMap</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC552'>	            <span class="k">return</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="nx">cb</span><span class="p">,</span> <span class="nx">context</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC553'>	        <span class="p">}</span>&#x000A;</div><div class='line' id='LC554'>	        <span class="k">else</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC555'>	            <span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="p">[];</span>&#x000A;</div><div class='line' id='LC556'>	            <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">len</span> <span class="o">=</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">len</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC557'>	                <span class="nx">result</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">cb</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">obj</span><span class="p">[</span><span class="nx">i</span><span class="p">],</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">obj</span><span class="p">));</span>&#x000A;</div><div class='line' id='LC558'>	            <span class="p">}</span>&#x000A;</div><div class='line' id='LC559'>	            <span class="k">return</span> <span class="nx">result</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC560'>	        <span class="p">}</span>&#x000A;</div><div class='line' id='LC561'>	    <span class="p">}</span>&#x000A;</div><div class='line' id='LC562'>&#x000A;</div><div class='line' id='LC563'>&#x000A;</div><div class='line' id='LC564'>	    <span class="k">return</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC565'>	        <span class="na">size</span><span class="p">:</span> <span class="nx">size</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC566'>	        <span class="na">isArray</span><span class="p">:</span> <span class="nx">isArray</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC567'>	        <span class="na">zeros</span><span class="p">:</span> <span class="nx">zeros</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC568'>	        <span class="na">sum</span><span class="p">:</span> <span class="nx">sum</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC569'>	        <span class="na">sumOfColumn</span><span class="p">:</span> <span class="nx">sumOfColumn</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC570'>	        <span class="na">ascending</span><span class="p">:</span> <span class="nx">ascending</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC571'>	        <span class="na">bisect</span><span class="p">:</span> <span class="nx">bisect</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC572'>	        <span class="na">map</span><span class="p">:</span> <span class="nx">map</span>&#x000A;</div><div class='line' id='LC573'>	    <span class="p">};</span>&#x000A;</div><div class='line' id='LC574'>&#x000A;</div><div class='line' id='LC575'>	<span class="p">}.</span><span class="nx">call</span><span class="p">(</span><span class="nx">exports</span><span class="p">,</span> <span class="nx">__webpack_require__</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">module</span><span class="p">),</span> <span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span> <span class="o">!==</span> <span class="kc">undefined</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span><span class="p">));</span>&#x000A;</div><div class='line' id='LC576'>&#x000A;</div><div class='line' id='LC577'><span class="cm">/***/</span> <span class="p">}),</span>&#x000A;</div><div class='line' id='LC578'><span class="cm">/* 4 */</span>&#x000A;</div><div class='line' id='LC579'><span class="cm">/***/</span> <span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">module</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">__webpack_require__</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC580'>&#x000A;</div><div class='line' id='LC581'>	<span class="kd">var</span> <span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span><span class="p">;</span><span class="o">!</span><span class="p">(</span><span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">require</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC582'>&#x000A;</div><div class='line' id='LC583'>	    <span class="cm">/**</span>&#x000A;</div><div class='line' id='LC584'><span class="cm">	     * Test whether value is a number.</span>&#x000A;</div><div class='line' id='LC585'><span class="cm">	     * @param  {*}  value</span>&#x000A;</div><div class='line' id='LC586'><span class="cm">	     * @return {boolean}</span>&#x000A;</div><div class='line' id='LC587'><span class="cm">	     */</span>&#x000A;</div><div class='line' id='LC588'>	    <span class="kd">function</span> <span class="nx">isNumber</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC589'>&#x000A;</div><div class='line' id='LC590'>	        <span class="nx">value</span> <span class="o">=</span> <span class="nx">value</span> <span class="o">===</span> <span class="kc">null</span> <span class="p">?</span> <span class="kc">NaN</span> <span class="p">:</span> <span class="o">+</span><span class="nx">value</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC591'>	        <span class="k">return</span> <span class="k">typeof</span> <span class="nx">value</span> <span class="o">===</span> <span class="dl">'</span><span class="s1">number</span><span class="dl">'</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nb">isNaN</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC592'>	    <span class="p">}</span>&#x000A;</div><div class='line' id='LC593'>&#x000A;</div><div class='line' id='LC594'>	    <span class="cm">/**</span>&#x000A;</div><div class='line' id='LC595'><span class="cm">	     * Test if a number is integer.</span>&#x000A;</div><div class='line' id='LC596'><span class="cm">	     * @param  {number}  value</span>&#x000A;</div><div class='line' id='LC597'><span class="cm">	     * @return {boolean}</span>&#x000A;</div><div class='line' id='LC598'><span class="cm">	     */</span>&#x000A;</div><div class='line' id='LC599'>	    <span class="kd">function</span> <span class="nx">isInteger</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC600'>	        <span class="k">return</span> <span class="nb">isFinite</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">value</span> <span class="o">===</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC601'>	    <span class="p">}</span>&#x000A;</div><div class='line' id='LC602'>&#x000A;</div><div class='line' id='LC603'>	    <span class="k">return</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC604'>	        <span class="na">isNumber</span><span class="p">:</span> <span class="nx">isNumber</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC605'>	        <span class="na">isInteger</span><span class="p">:</span> <span class="nx">isInteger</span>&#x000A;</div><div class='line' id='LC606'>	    <span class="p">};</span>&#x000A;</div><div class='line' id='LC607'>&#x000A;</div><div class='line' id='LC608'>	<span class="p">}.</span><span class="nx">call</span><span class="p">(</span><span class="nx">exports</span><span class="p">,</span> <span class="nx">__webpack_require__</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">module</span><span class="p">),</span> <span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span> <span class="o">!==</span> <span class="kc">undefined</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span><span class="p">));</span>&#x000A;</div><div class='line' id='LC609'>&#x000A;</div><div class='line' id='LC610'><span class="cm">/***/</span> <span class="p">}),</span>&#x000A;</div><div class='line' id='LC611'><span class="cm">/* 5 */</span>&#x000A;</div><div class='line' id='LC612'><span class="cm">/***/</span> <span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">module</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">__webpack_require__</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC613'>&#x000A;</div><div class='line' id='LC614'>	<span class="kd">var</span> <span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span><span class="p">;</span><span class="o">!</span><span class="p">(</span><span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">require</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC615'>&#x000A;</div><div class='line' id='LC616'>	    <span class="kd">var</span> <span class="nx">dataProcess</span> <span class="o">=</span> <span class="nx">__webpack_require__</span><span class="p">(</span><span class="mi">2</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC617'>	    <span class="kd">var</span> <span class="nx">dataPreprocess</span> <span class="o">=</span> <span class="nx">dataProcess</span><span class="p">.</span><span class="nx">dataPreprocess</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC618'>&#x000A;</div><div class='line' id='LC619'>	    <span class="kd">var</span> <span class="nx">regreMethods</span> <span class="o">=</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC620'>&#x000A;</div><div class='line' id='LC621'>	        <span class="cm">/**</span>&#x000A;</div><div class='line' id='LC622'><span class="cm">	         * Common linear regression algorithm</span>&#x000A;</div><div class='line' id='LC623'><span class="cm">	         * @param  {Array.&lt;Array.&lt;number&gt;&gt;} data two-dimensional array</span>&#x000A;</div><div class='line' id='LC624'><span class="cm">	         * @return {Object}</span>&#x000A;</div><div class='line' id='LC625'><span class="cm">	         */</span>&#x000A;</div><div class='line' id='LC626'>	        <span class="na">linear</span><span class="p">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC627'>&#x000A;</div><div class='line' id='LC628'>	            <span class="kd">var</span> <span class="nx">predata</span> <span class="o">=</span> <span class="nx">dataPreprocess</span><span class="p">(</span><span class="nx">data</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC629'>	            <span class="kd">var</span> <span class="nx">sumX</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC630'>	            <span class="kd">var</span> <span class="nx">sumY</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC631'>	            <span class="kd">var</span> <span class="nx">sumXY</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC632'>	            <span class="kd">var</span> <span class="nx">sumXX</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC633'>	            <span class="kd">var</span> <span class="nx">len</span> <span class="o">=</span> <span class="nx">predata</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC634'>&#x000A;</div><div class='line' id='LC635'>	            <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">len</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC636'>	                <span class="nx">sumX</span> <span class="o">+=</span> <span class="nx">predata</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="mi">0</span><span class="p">];</span>&#x000A;</div><div class='line' id='LC637'>	                <span class="nx">sumY</span> <span class="o">+=</span> <span class="nx">predata</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="mi">1</span><span class="p">];</span>&#x000A;</div><div class='line' id='LC638'>	                <span class="nx">sumXY</span> <span class="o">+=</span> <span class="nx">predata</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="mi">0</span><span class="p">]</span> <span class="o">*</span> <span class="nx">predata</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="mi">1</span><span class="p">];</span>&#x000A;</div><div class='line' id='LC639'>	                <span class="nx">sumXX</span> <span class="o">+=</span> <span class="nx">predata</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="mi">0</span><span class="p">]</span> <span class="o">*</span> <span class="nx">predata</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="mi">0</span><span class="p">];</span>&#x000A;</div><div class='line' id='LC640'>	            <span class="p">}</span>&#x000A;</div><div class='line' id='LC641'>&#x000A;</div><div class='line' id='LC642'>	            <span class="kd">var</span> <span class="nx">gradient</span> <span class="o">=</span> <span class="p">((</span><span class="nx">len</span> <span class="o">*</span> <span class="nx">sumXY</span><span class="p">)</span> <span class="o">-</span> <span class="p">(</span><span class="nx">sumX</span> <span class="o">*</span> <span class="nx">sumY</span><span class="p">))</span> <span class="o">/</span> <span class="p">((</span><span class="nx">len</span> <span class="o">*</span> <span class="nx">sumXX</span><span class="p">)</span> <span class="o">-</span> <span class="p">(</span><span class="nx">sumX</span> <span class="o">*</span> <span class="nx">sumX</span><span class="p">));</span>&#x000A;</div><div class='line' id='LC643'>	            <span class="kd">var</span> <span class="nx">intercept</span> <span class="o">=</span> <span class="p">(</span><span class="nx">sumY</span> <span class="o">/</span> <span class="nx">len</span><span class="p">)</span> <span class="o">-</span> <span class="p">((</span><span class="nx">gradient</span> <span class="o">*</span> <span class="nx">sumX</span><span class="p">)</span> <span class="o">/</span> <span class="nx">len</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC644'>&#x000A;</div><div class='line' id='LC645'>	            <span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="p">[];</span>&#x000A;</div><div class='line' id='LC646'>	            <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">j</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">j</span> <span class="o">&lt;</span> <span class="nx">predata</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">j</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC647'>	                <span class="kd">var</span> <span class="nx">coordinate</span> <span class="o">=</span> <span class="p">[</span><span class="nx">predata</span><span class="p">[</span><span class="nx">j</span><span class="p">][</span><span class="mi">0</span><span class="p">],</span> <span class="nx">gradient</span> <span class="o">*</span> <span class="nx">predata</span><span class="p">[</span><span class="nx">j</span><span class="p">][</span><span class="mi">0</span><span class="p">]</span> <span class="o">+</span> <span class="nx">intercept</span><span class="p">];</span>&#x000A;</div><div class='line' id='LC648'>	                <span class="nx">result</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">coordinate</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC649'>	            <span class="p">}</span>&#x000A;</div><div class='line' id='LC650'>&#x000A;</div><div class='line' id='LC651'>	            <span class="kd">var</span> <span class="nx">string</span> <span class="o">=</span> <span class="dl">'</span><span class="s1">y = </span><span class="dl">'</span> <span class="o">+</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">(</span><span class="nx">gradient</span> <span class="o">*</span> <span class="mi">100</span><span class="p">)</span> <span class="o">/</span> <span class="mi">100</span> <span class="o">+</span> <span class="dl">'</span><span class="s1">x + </span><span class="dl">'</span> <span class="o">+</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">(</span><span class="nx">intercept</span> <span class="o">*</span> <span class="mi">100</span><span class="p">)</span> <span class="o">/</span> <span class="mi">100</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC652'>&#x000A;</div><div class='line' id='LC653'>	            <span class="k">return</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC654'>	                <span class="na">points</span><span class="p">:</span> <span class="nx">result</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC655'>	                <span class="na">parameter</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC656'>	                    <span class="na">gradient</span><span class="p">:</span> <span class="nx">gradient</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC657'>	                    <span class="na">intercept</span><span class="p">:</span> <span class="nx">intercept</span>&#x000A;</div><div class='line' id='LC658'>	                <span class="p">},</span>&#x000A;</div><div class='line' id='LC659'>	                <span class="na">expression</span><span class="p">:</span> <span class="nx">string</span>&#x000A;</div><div class='line' id='LC660'>	            <span class="p">};</span>&#x000A;</div><div class='line' id='LC661'>	        <span class="p">},</span>&#x000A;</div><div class='line' id='LC662'>&#x000A;</div><div class='line' id='LC663'>	        <span class="cm">/**</span>&#x000A;</div><div class='line' id='LC664'><span class="cm">	         * If the raw data include [0,0] point, we should choose linearThroughOrigin</span>&#x000A;</div><div class='line' id='LC665'><span class="cm">	         *   instead of linear.</span>&#x000A;</div><div class='line' id='LC666'><span class="cm">	         * @param  {Array.&lt;Array&gt;} data  two-dimensional number array</span>&#x000A;</div><div class='line' id='LC667'><span class="cm">	         * @return {Object}</span>&#x000A;</div><div class='line' id='LC668'><span class="cm">	         */</span>&#x000A;</div><div class='line' id='LC669'>	        <span class="na">linearThroughOrigin</span><span class="p">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC670'>&#x000A;</div><div class='line' id='LC671'>	            <span class="kd">var</span> <span class="nx">predata</span> <span class="o">=</span> <span class="nx">dataPreprocess</span><span class="p">(</span><span class="nx">data</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC672'>	            <span class="kd">var</span> <span class="nx">sumXX</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC673'>	            <span class="kd">var</span> <span class="nx">sumXY</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC674'>&#x000A;</div><div class='line' id='LC675'>	            <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">predata</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC676'>	                <span class="nx">sumXX</span> <span class="o">+=</span> <span class="nx">predata</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="mi">0</span><span class="p">]</span> <span class="o">*</span> <span class="nx">predata</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="mi">0</span><span class="p">];</span>&#x000A;</div><div class='line' id='LC677'>	                <span class="nx">sumXY</span> <span class="o">+=</span> <span class="nx">predata</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="mi">0</span><span class="p">]</span> <span class="o">*</span> <span class="nx">predata</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="mi">1</span><span class="p">];</span>&#x000A;</div><div class='line' id='LC678'>	            <span class="p">}</span>&#x000A;</div><div class='line' id='LC679'>&#x000A;</div><div class='line' id='LC680'>	            <span class="kd">var</span> <span class="nx">gradient</span> <span class="o">=</span> <span class="nx">sumXY</span> <span class="o">/</span> <span class="nx">sumXX</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC681'>	            <span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="p">[];</span>&#x000A;</div><div class='line' id='LC682'>&#x000A;</div><div class='line' id='LC683'>	            <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">j</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">j</span> <span class="o">&lt;</span> <span class="nx">predata</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">j</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC684'>	                <span class="kd">var</span> <span class="nx">coordinate</span> <span class="o">=</span> <span class="p">[</span><span class="nx">predata</span><span class="p">[</span><span class="nx">j</span><span class="p">][</span><span class="mi">0</span><span class="p">],</span> <span class="nx">predata</span><span class="p">[</span><span class="nx">j</span><span class="p">][</span><span class="mi">0</span><span class="p">]</span> <span class="o">*</span> <span class="nx">gradient</span><span class="p">];</span>&#x000A;</div><div class='line' id='LC685'>	                <span class="nx">result</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">coordinate</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC686'>	            <span class="p">}</span>&#x000A;</div><div class='line' id='LC687'>&#x000A;</div><div class='line' id='LC688'>	            <span class="kd">var</span> <span class="nx">string</span> <span class="o">=</span> <span class="dl">'</span><span class="s1">y = </span><span class="dl">'</span> <span class="o">+</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">(</span><span class="nx">gradient</span> <span class="o">*</span> <span class="mi">100</span><span class="p">)</span> <span class="o">/</span> <span class="mi">100</span> <span class="o">+</span> <span class="dl">'</span><span class="s1">x</span><span class="dl">'</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC689'>&#x000A;</div><div class='line' id='LC690'>	            <span class="k">return</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC691'>	                <span class="na">points</span><span class="p">:</span> <span class="nx">result</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC692'>	                <span class="na">parameter</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC693'>	                    <span class="na">gradient</span><span class="p">:</span> <span class="nx">gradient</span>&#x000A;</div><div class='line' id='LC694'>	                <span class="p">},</span>&#x000A;</div><div class='line' id='LC695'>	                <span class="na">expression</span><span class="p">:</span> <span class="nx">string</span>&#x000A;</div><div class='line' id='LC696'>	            <span class="p">};</span>&#x000A;</div><div class='line' id='LC697'>	        <span class="p">},</span>&#x000A;</div><div class='line' id='LC698'>&#x000A;</div><div class='line' id='LC699'>	        <span class="cm">/**</span>&#x000A;</div><div class='line' id='LC700'><span class="cm">	         * Exponential regression</span>&#x000A;</div><div class='line' id='LC701'><span class="cm">	         * @param  {Array.&lt;Array.&lt;number&gt;&gt;} data  two-dimensional number array</span>&#x000A;</div><div class='line' id='LC702'><span class="cm">	         * @return {Object}</span>&#x000A;</div><div class='line' id='LC703'><span class="cm">	         */</span>&#x000A;</div><div class='line' id='LC704'>	        <span class="na">exponential</span><span class="p">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC705'>&#x000A;</div><div class='line' id='LC706'>	            <span class="kd">var</span> <span class="nx">predata</span> <span class="o">=</span> <span class="nx">dataPreprocess</span><span class="p">(</span><span class="nx">data</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC707'>	            <span class="kd">var</span> <span class="nx">sumX</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC708'>	            <span class="kd">var</span> <span class="nx">sumY</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC709'>	            <span class="kd">var</span> <span class="nx">sumXXY</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC710'>	            <span class="kd">var</span> <span class="nx">sumYlny</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC711'>	            <span class="kd">var</span> <span class="nx">sumXYlny</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC712'>	            <span class="kd">var</span> <span class="nx">sumXY</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC713'>&#x000A;</div><div class='line' id='LC714'>	            <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">predata</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC715'>	                <span class="nx">sumX</span> <span class="o">+=</span> <span class="nx">predata</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="mi">0</span><span class="p">];</span>&#x000A;</div><div class='line' id='LC716'>	                <span class="nx">sumY</span> <span class="o">+=</span> <span class="nx">predata</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="mi">1</span><span class="p">];</span>&#x000A;</div><div class='line' id='LC717'>	                <span class="nx">sumXY</span> <span class="o">+=</span> <span class="nx">predata</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="mi">0</span><span class="p">]</span> <span class="o">*</span> <span class="nx">predata</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="mi">1</span><span class="p">];</span>&#x000A;</div><div class='line' id='LC718'>	                <span class="nx">sumXXY</span> <span class="o">+=</span> <span class="nx">predata</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="mi">0</span><span class="p">]</span> <span class="o">*</span> <span class="nx">predata</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="mi">0</span><span class="p">]</span> <span class="o">*</span> <span class="nx">predata</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="mi">1</span><span class="p">];</span>&#x000A;</div><div class='line' id='LC719'>	                <span class="nx">sumYlny</span> <span class="o">+=</span> <span class="nx">predata</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="mi">1</span><span class="p">]</span> <span class="o">*</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">predata</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="mi">1</span><span class="p">]);</span>&#x000A;</div><div class='line' id='LC720'>	                <span class="nx">sumXYlny</span> <span class="o">+=</span> <span class="nx">predata</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="mi">0</span><span class="p">]</span> <span class="o">*</span> <span class="nx">predata</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="mi">1</span><span class="p">]</span> <span class="o">*</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">predata</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="mi">1</span><span class="p">]);</span>&#x000A;</div><div class='line' id='LC721'>	            <span class="p">}</span>&#x000A;</div><div class='line' id='LC722'>&#x000A;</div><div class='line' id='LC723'>	            <span class="kd">var</span> <span class="nx">denominator</span> <span class="o">=</span> <span class="p">(</span><span class="nx">sumY</span> <span class="o">*</span> <span class="nx">sumXXY</span><span class="p">)</span> <span class="o">-</span> <span class="p">(</span><span class="nx">sumXY</span> <span class="o">*</span> <span class="nx">sumXY</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC724'>	            <span class="kd">var</span> <span class="nx">coefficient</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">pow</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">E</span><span class="p">,</span> <span class="p">(</span><span class="nx">sumXXY</span> <span class="o">*</span> <span class="nx">sumYlny</span> <span class="o">-</span> <span class="nx">sumXY</span> <span class="o">*</span> <span class="nx">sumXYlny</span><span class="p">)</span> <span class="o">/</span> <span class="nx">denominator</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC725'>	            <span class="kd">var</span> <span class="nx">index</span> <span class="o">=</span> <span class="p">(</span><span class="nx">sumY</span> <span class="o">*</span> <span class="nx">sumXYlny</span> <span class="o">-</span> <span class="nx">sumXY</span> <span class="o">*</span> <span class="nx">sumYlny</span><span class="p">)</span> <span class="o">/</span> <span class="nx">denominator</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC726'>	            <span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="p">[];</span>&#x000A;</div><div class='line' id='LC727'>&#x000A;</div><div class='line' id='LC728'>	            <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">j</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">j</span> <span class="o">&lt;</span> <span class="nx">predata</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">j</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC729'>	                <span class="kd">var</span> <span class="nx">coordinate</span> <span class="o">=</span> <span class="p">[</span><span class="nx">predata</span><span class="p">[</span><span class="nx">j</span><span class="p">][</span><span class="mi">0</span><span class="p">],</span> <span class="nx">coefficient</span> <span class="o">*</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">pow</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">E</span><span class="p">,</span> <span class="nx">index</span> <span class="o">*</span> <span class="nx">predata</span><span class="p">[</span><span class="nx">j</span><span class="p">][</span><span class="mi">0</span><span class="p">])];</span>&#x000A;</div><div class='line' id='LC730'>	                <span class="nx">result</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">coordinate</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC731'>	            <span class="p">}</span>&#x000A;</div><div class='line' id='LC732'>&#x000A;</div><div class='line' id='LC733'>	            <span class="kd">var</span> <span class="nx">string</span> <span class="o">=</span> <span class="dl">'</span><span class="s1">y = </span><span class="dl">'</span> <span class="o">+</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">(</span><span class="nx">coefficient</span> <span class="o">*</span> <span class="mi">100</span><span class="p">)</span> <span class="o">/</span> <span class="mi">100</span> <span class="o">+</span> <span class="dl">'</span><span class="s1">e^(</span><span class="dl">'</span> <span class="o">+</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">(</span><span class="nx">index</span> <span class="o">*</span> <span class="mi">100</span><span class="p">)</span> <span class="o">/</span> <span class="mi">100</span> <span class="o">+</span> <span class="dl">'</span><span class="s1">x)</span><span class="dl">'</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC734'>&#x000A;</div><div class='line' id='LC735'>	            <span class="k">return</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC736'>	                <span class="na">points</span><span class="p">:</span> <span class="nx">result</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC737'>	                <span class="na">parameter</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC738'>	                    <span class="na">coefficient</span><span class="p">:</span> <span class="nx">coefficient</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC739'>	                    <span class="na">index</span><span class="p">:</span> <span class="nx">index</span>&#x000A;</div><div class='line' id='LC740'>	                <span class="p">},</span>&#x000A;</div><div class='line' id='LC741'>	                <span class="na">expression</span><span class="p">:</span> <span class="nx">string</span>&#x000A;</div><div class='line' id='LC742'>	            <span class="p">};</span>&#x000A;</div><div class='line' id='LC743'>&#x000A;</div><div class='line' id='LC744'>	        <span class="p">},</span>&#x000A;</div><div class='line' id='LC745'>&#x000A;</div><div class='line' id='LC746'>	        <span class="cm">/**</span>&#x000A;</div><div class='line' id='LC747'><span class="cm">	         * Logarithmic regression</span>&#x000A;</div><div class='line' id='LC748'><span class="cm">	         * @param  {Array.&lt;Array.&lt;number&gt;&gt;} data  two-dimensional number array</span>&#x000A;</div><div class='line' id='LC749'><span class="cm">	         * @return {Object}</span>&#x000A;</div><div class='line' id='LC750'><span class="cm">	         */</span>&#x000A;</div><div class='line' id='LC751'>	        <span class="na">logarithmic</span><span class="p">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC752'>&#x000A;</div><div class='line' id='LC753'>	            <span class="kd">var</span> <span class="nx">predata</span> <span class="o">=</span> <span class="nx">dataPreprocess</span><span class="p">(</span><span class="nx">data</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC754'>	            <span class="kd">var</span> <span class="nx">sumlnx</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC755'>	            <span class="kd">var</span> <span class="nx">sumYlnx</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC756'>	            <span class="kd">var</span> <span class="nx">sumY</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC757'>	            <span class="kd">var</span> <span class="nx">sumlnxlnx</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC758'>&#x000A;</div><div class='line' id='LC759'>	            <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">predata</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC760'>	                <span class="nx">sumlnx</span> <span class="o">+=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">predata</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="mi">0</span><span class="p">]);</span>&#x000A;</div><div class='line' id='LC761'>	                <span class="nx">sumYlnx</span> <span class="o">+=</span> <span class="nx">predata</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="mi">1</span><span class="p">]</span> <span class="o">*</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">predata</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="mi">0</span><span class="p">]);</span>&#x000A;</div><div class='line' id='LC762'>	                <span class="nx">sumY</span> <span class="o">+=</span> <span class="nx">predata</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="mi">1</span><span class="p">];</span>&#x000A;</div><div class='line' id='LC763'>	                <span class="nx">sumlnxlnx</span> <span class="o">+=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">pow</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">predata</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="mi">0</span><span class="p">]),</span> <span class="mi">2</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC764'>	            <span class="p">}</span>&#x000A;</div><div class='line' id='LC765'>&#x000A;</div><div class='line' id='LC766'>	            <span class="kd">var</span> <span class="nx">gradient</span> <span class="o">=</span> <span class="p">(</span><span class="nx">i</span> <span class="o">*</span> <span class="nx">sumYlnx</span> <span class="o">-</span> <span class="nx">sumY</span> <span class="o">*</span> <span class="nx">sumlnx</span><span class="p">)</span> <span class="o">/</span> <span class="p">(</span><span class="nx">i</span> <span class="o">*</span> <span class="nx">sumlnxlnx</span> <span class="o">-</span> <span class="nx">sumlnx</span> <span class="o">*</span> <span class="nx">sumlnx</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC767'>	            <span class="kd">var</span> <span class="nx">intercept</span> <span class="o">=</span> <span class="p">(</span><span class="nx">sumY</span> <span class="o">-</span> <span class="nx">gradient</span> <span class="o">*</span> <span class="nx">sumlnx</span><span class="p">)</span> <span class="o">/</span> <span class="nx">i</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC768'>	            <span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="p">[];</span>&#x000A;</div><div class='line' id='LC769'>&#x000A;</div><div class='line' id='LC770'>	            <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">j</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">j</span> <span class="o">&lt;</span> <span class="nx">predata</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">j</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC771'>	                <span class="kd">var</span> <span class="nx">coordinate</span> <span class="o">=</span> <span class="p">[</span><span class="nx">predata</span><span class="p">[</span><span class="nx">j</span><span class="p">][</span><span class="mi">0</span><span class="p">],</span> <span class="nx">gradient</span> <span class="o">*</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">predata</span><span class="p">[</span><span class="nx">j</span><span class="p">][</span><span class="mi">0</span><span class="p">])</span> <span class="o">+</span> <span class="nx">intercept</span><span class="p">];</span>&#x000A;</div><div class='line' id='LC772'>	                <span class="nx">result</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">coordinate</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC773'>	            <span class="p">}</span>&#x000A;</div><div class='line' id='LC774'>&#x000A;</div><div class='line' id='LC775'>	            <span class="kd">var</span> <span class="nx">string</span> <span class="o">=</span>&#x000A;</div><div class='line' id='LC776'>	                <span class="dl">'</span><span class="s1">y = </span><span class="dl">'</span>&#x000A;</div><div class='line' id='LC777'>	                <span class="o">+</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">(</span><span class="nx">intercept</span> <span class="o">*</span> <span class="mi">100</span><span class="p">)</span> <span class="o">/</span> <span class="mi">100</span>&#x000A;</div><div class='line' id='LC778'>	                <span class="o">+</span> <span class="dl">'</span><span class="s1"> + </span><span class="dl">'</span>&#x000A;</div><div class='line' id='LC779'>	                <span class="o">+</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">(</span><span class="nx">gradient</span> <span class="o">*</span> <span class="mi">100</span><span class="p">)</span> <span class="o">/</span> <span class="mi">100</span> <span class="o">+</span> <span class="dl">'</span><span class="s1">ln(x)</span><span class="dl">'</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC780'>&#x000A;</div><div class='line' id='LC781'>	            <span class="k">return</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC782'>	                <span class="na">points</span><span class="p">:</span> <span class="nx">result</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC783'>	                <span class="na">parameter</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC784'>	                    <span class="na">gradient</span><span class="p">:</span> <span class="nx">gradient</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC785'>	                    <span class="na">intercept</span><span class="p">:</span> <span class="nx">intercept</span>&#x000A;</div><div class='line' id='LC786'>	                <span class="p">},</span>&#x000A;</div><div class='line' id='LC787'>	                <span class="na">expression</span><span class="p">:</span> <span class="nx">string</span>&#x000A;</div><div class='line' id='LC788'>	            <span class="p">};</span>&#x000A;</div><div class='line' id='LC789'>&#x000A;</div><div class='line' id='LC790'>	        <span class="p">},</span>&#x000A;</div><div class='line' id='LC791'>&#x000A;</div><div class='line' id='LC792'>	        <span class="cm">/**</span>&#x000A;</div><div class='line' id='LC793'><span class="cm">	         * Polynomial regression</span>&#x000A;</div><div class='line' id='LC794'><span class="cm">	         * @param  {Array.&lt;Array.&lt;number&gt;&gt;} data  two-dimensional number array</span>&#x000A;</div><div class='line' id='LC795'><span class="cm">	         * @param  {number} order  order of polynomials</span>&#x000A;</div><div class='line' id='LC796'><span class="cm">	         * @return {Object}</span>&#x000A;</div><div class='line' id='LC797'><span class="cm">	         */</span>&#x000A;</div><div class='line' id='LC798'>	        <span class="na">polynomial</span><span class="p">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="nx">order</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC799'>&#x000A;</div><div class='line' id='LC800'>	            <span class="kd">var</span> <span class="nx">predata</span> <span class="o">=</span> <span class="nx">dataPreprocess</span><span class="p">(</span><span class="nx">data</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC801'>	            <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">order</span> <span class="o">===</span> <span class="dl">'</span><span class="s1">undefined</span><span class="dl">'</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC802'>	                <span class="nx">order</span> <span class="o">=</span> <span class="mi">2</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC803'>	            <span class="p">}</span>&#x000A;</div><div class='line' id='LC804'>	            <span class="c1">//coefficient matrix</span>&#x000A;</div><div class='line' id='LC805'>	            <span class="kd">var</span> <span class="nx">coeMatrix</span> <span class="o">=</span> <span class="p">[];</span>&#x000A;</div><div class='line' id='LC806'>	            <span class="kd">var</span> <span class="nx">lhs</span> <span class="o">=</span> <span class="p">[];</span>&#x000A;</div><div class='line' id='LC807'>	            <span class="kd">var</span> <span class="nx">k</span> <span class="o">=</span> <span class="nx">order</span> <span class="o">+</span> <span class="mi">1</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC808'>&#x000A;</div><div class='line' id='LC809'>	            <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">k</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC810'>	                <span class="kd">var</span> <span class="nx">sumA</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC811'>	                <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">n</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">n</span> <span class="o">&lt;</span> <span class="nx">predata</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">n</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC812'>	                    <span class="nx">sumA</span> <span class="o">+=</span> <span class="nx">predata</span><span class="p">[</span><span class="nx">n</span><span class="p">][</span><span class="mi">1</span><span class="p">]</span> <span class="o">*</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">pow</span><span class="p">(</span><span class="nx">predata</span><span class="p">[</span><span class="nx">n</span><span class="p">][</span><span class="mi">0</span><span class="p">],</span> <span class="nx">i</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC813'>	                <span class="p">}</span>&#x000A;</div><div class='line' id='LC814'>	                <span class="nx">lhs</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">sumA</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC815'>&#x000A;</div><div class='line' id='LC816'>	                <span class="kd">var</span> <span class="nx">temp</span> <span class="o">=</span> <span class="p">[];</span>&#x000A;</div><div class='line' id='LC817'>	                <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">j</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">j</span> <span class="o">&lt;</span> <span class="nx">k</span><span class="p">;</span> <span class="nx">j</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC818'>	                    <span class="kd">var</span> <span class="nx">sumB</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC819'>	                    <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">m</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">m</span> <span class="o">&lt;</span> <span class="nx">predata</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">m</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC820'>	                        <span class="nx">sumB</span> <span class="o">+=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">pow</span><span class="p">(</span><span class="nx">predata</span><span class="p">[</span><span class="nx">m</span><span class="p">][</span><span class="mi">0</span><span class="p">],</span> <span class="nx">i</span> <span class="o">+</span> <span class="nx">j</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC821'>	                    <span class="p">}</span>&#x000A;</div><div class='line' id='LC822'>	                    <span class="nx">temp</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">sumB</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC823'>	                <span class="p">}</span>&#x000A;</div><div class='line' id='LC824'>	                <span class="nx">coeMatrix</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">temp</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC825'>	            <span class="p">}</span>&#x000A;</div><div class='line' id='LC826'>	            <span class="nx">coeMatrix</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">lhs</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC827'>&#x000A;</div><div class='line' id='LC828'>	            <span class="kd">var</span> <span class="nx">coeArray</span> <span class="o">=</span> <span class="nx">gaussianElimination</span><span class="p">(</span><span class="nx">coeMatrix</span><span class="p">,</span> <span class="nx">k</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC829'>&#x000A;</div><div class='line' id='LC830'>	            <span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="p">[];</span>&#x000A;</div><div class='line' id='LC831'>&#x000A;</div><div class='line' id='LC832'>	            <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">predata</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC833'>	                <span class="kd">var</span> <span class="nx">value</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC834'>	                <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">n</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">n</span> <span class="o">&lt;</span> <span class="nx">coeArray</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">n</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC835'>	                    <span class="nx">value</span> <span class="o">+=</span> <span class="nx">coeArray</span><span class="p">[</span><span class="nx">n</span><span class="p">]</span> <span class="o">*</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">pow</span><span class="p">(</span><span class="nx">predata</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="mi">0</span><span class="p">],</span> <span class="nx">n</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC836'>	                <span class="p">}</span>&#x000A;</div><div class='line' id='LC837'>	                <span class="nx">result</span><span class="p">.</span><span class="nx">push</span><span class="p">([</span><span class="nx">predata</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="mi">0</span><span class="p">],</span> <span class="nx">value</span><span class="p">]);</span>&#x000A;</div><div class='line' id='LC838'>	            <span class="p">}</span>&#x000A;</div><div class='line' id='LC839'>&#x000A;</div><div class='line' id='LC840'>	            <span class="kd">var</span> <span class="nx">string</span> <span class="o">=</span> <span class="dl">'</span><span class="s1">y = </span><span class="dl">'</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC841'>	            <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="nx">coeArray</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span><span class="o">--</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC842'>	                <span class="k">if</span> <span class="p">(</span><span class="nx">i</span> <span class="o">&gt;</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC843'>	                    <span class="nx">string</span> <span class="o">+=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">(</span><span class="nx">coeArray</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">*</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">pow</span><span class="p">(</span><span class="mi">10</span><span class="p">,</span> <span class="nx">i</span> <span class="o">+</span> <span class="mi">1</span><span class="p">))</span> <span class="o">/</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">pow</span><span class="p">(</span><span class="mi">10</span><span class="p">,</span> <span class="nx">i</span> <span class="o">+</span> <span class="mi">1</span><span class="p">)</span> <span class="o">+</span> <span class="dl">'</span><span class="s1">x^</span><span class="dl">'</span> <span class="o">+</span> <span class="nx">i</span> <span class="o">+</span> <span class="dl">'</span><span class="s1"> + </span><span class="dl">'</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC844'>	                <span class="p">}</span>&#x000A;</div><div class='line' id='LC845'>	                <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">i</span> <span class="o">===</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC846'>	                    <span class="nx">string</span> <span class="o">+=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">(</span><span class="nx">coeArray</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">*</span> <span class="mi">100</span><span class="p">)</span> <span class="o">/</span> <span class="mi">100</span> <span class="o">+</span> <span class="dl">'</span><span class="s1">x</span><span class="dl">'</span> <span class="o">+</span> <span class="dl">'</span><span class="s1"> + </span><span class="dl">'</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC847'>	                <span class="p">}</span>&#x000A;</div><div class='line' id='LC848'>	                <span class="k">else</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC849'>	                    <span class="nx">string</span> <span class="o">+=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">(</span><span class="nx">coeArray</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">*</span> <span class="mi">100</span><span class="p">)</span> <span class="o">/</span> <span class="mi">100</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC850'>	                <span class="p">}</span>&#x000A;</div><div class='line' id='LC851'>	            <span class="p">}</span>&#x000A;</div><div class='line' id='LC852'>&#x000A;</div><div class='line' id='LC853'>	            <span class="k">return</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC854'>	                <span class="na">points</span><span class="p">:</span> <span class="nx">result</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC855'>	                <span class="na">parameter</span><span class="p">:</span> <span class="nx">coeArray</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC856'>	                <span class="na">expression</span><span class="p">:</span> <span class="nx">string</span>&#x000A;</div><div class='line' id='LC857'>	            <span class="p">};</span>&#x000A;</div><div class='line' id='LC858'>&#x000A;</div><div class='line' id='LC859'>	        <span class="p">}</span>&#x000A;</div><div class='line' id='LC860'>&#x000A;</div><div class='line' id='LC861'>	    <span class="p">};</span>&#x000A;</div><div class='line' id='LC862'>&#x000A;</div><div class='line' id='LC863'>	    <span class="cm">/**</span>&#x000A;</div><div class='line' id='LC864'><span class="cm">	     * Gaussian elimination</span>&#x000A;</div><div class='line' id='LC865'><span class="cm">	     * @param  {Array.&lt;Array.&lt;number&gt;&gt;} matrix   two-dimensional number array</span>&#x000A;</div><div class='line' id='LC866'><span class="cm">	     * @param  {number} number</span>&#x000A;</div><div class='line' id='LC867'><span class="cm">	     * @return {Array}</span>&#x000A;</div><div class='line' id='LC868'><span class="cm">	     */</span>&#x000A;</div><div class='line' id='LC869'>	    <span class="kd">function</span> <span class="nx">gaussianElimination</span><span class="p">(</span><span class="nx">matrix</span><span class="p">,</span> <span class="nx">number</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC870'>&#x000A;</div><div class='line' id='LC871'>	        <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">matrix</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC872'>	            <span class="kd">var</span> <span class="nx">maxColumn</span> <span class="o">=</span> <span class="nx">i</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC873'>	            <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">j</span> <span class="o">=</span> <span class="nx">i</span> <span class="o">+</span> <span class="mi">1</span><span class="p">;</span> <span class="nx">j</span> <span class="o">&lt;</span> <span class="nx">matrix</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">;</span> <span class="nx">j</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC874'>	                <span class="k">if</span> <span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span><span class="nx">matrix</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="nx">j</span><span class="p">])</span> <span class="o">&gt;</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span><span class="nx">matrix</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="nx">maxColumn</span><span class="p">]))</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC875'>	                    <span class="nx">maxColumn</span> <span class="o">=</span> <span class="nx">j</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC876'>	                <span class="p">}</span>&#x000A;</div><div class='line' id='LC877'>	            <span class="p">}</span>&#x000A;</div><div class='line' id='LC878'>	            <span class="c1">// the matrix here is the transpose of the common Augmented matrix.</span>&#x000A;</div><div class='line' id='LC879'>	            <span class="c1">//  so the can perform the primary column transform, in fact, equivalent</span>&#x000A;</div><div class='line' id='LC880'>	            <span class="c1">//  to the primary line changes</span>&#x000A;</div><div class='line' id='LC881'>	            <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">k</span> <span class="o">=</span> <span class="nx">i</span><span class="p">;</span> <span class="nx">k</span> <span class="o">&lt;</span> <span class="nx">matrix</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">k</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC882'>	                <span class="kd">var</span> <span class="nx">temp</span> <span class="o">=</span> <span class="nx">matrix</span><span class="p">[</span><span class="nx">k</span><span class="p">][</span><span class="nx">i</span><span class="p">];</span>&#x000A;</div><div class='line' id='LC883'>	                <span class="nx">matrix</span><span class="p">[</span><span class="nx">k</span><span class="p">][</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="nx">matrix</span><span class="p">[</span><span class="nx">k</span><span class="p">][</span><span class="nx">maxColumn</span><span class="p">];</span>&#x000A;</div><div class='line' id='LC884'>	                <span class="nx">matrix</span><span class="p">[</span><span class="nx">k</span><span class="p">][</span><span class="nx">maxColumn</span><span class="p">]</span> <span class="o">=</span> <span class="nx">temp</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC885'>	            <span class="p">}</span>&#x000A;</div><div class='line' id='LC886'>	            <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">n</span> <span class="o">=</span> <span class="nx">i</span> <span class="o">+</span> <span class="mi">1</span><span class="p">;</span> <span class="nx">n</span> <span class="o">&lt;</span> <span class="nx">matrix</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">;</span> <span class="nx">n</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC887'>	                <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">m</span> <span class="o">=</span> <span class="nx">matrix</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">;</span> <span class="nx">m</span> <span class="o">&gt;=</span> <span class="nx">i</span><span class="p">;</span> <span class="nx">m</span><span class="o">--</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC888'>	                    <span class="nx">matrix</span><span class="p">[</span><span class="nx">m</span><span class="p">][</span><span class="nx">n</span><span class="p">]</span> <span class="o">-=</span> <span class="nx">matrix</span><span class="p">[</span><span class="nx">m</span><span class="p">][</span><span class="nx">i</span><span class="p">]</span> <span class="o">/</span> <span class="nx">matrix</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="nx">i</span><span class="p">]</span> <span class="o">*</span> <span class="nx">matrix</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="nx">n</span><span class="p">];</span>&#x000A;</div><div class='line' id='LC889'>	                <span class="p">}</span>&#x000A;</div><div class='line' id='LC890'>	            <span class="p">}</span>&#x000A;</div><div class='line' id='LC891'>	        <span class="p">}</span>&#x000A;</div><div class='line' id='LC892'>&#x000A;</div><div class='line' id='LC893'>	        <span class="kd">var</span> <span class="nx">data</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Array</span><span class="p">(</span><span class="nx">number</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC894'>	        <span class="kd">var</span> <span class="nx">len</span> <span class="o">=</span> <span class="nx">matrix</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC895'>	        <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">j</span> <span class="o">=</span> <span class="nx">matrix</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">2</span><span class="p">;</span> <span class="nx">j</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">j</span><span class="o">--</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC896'>	            <span class="kd">var</span> <span class="nx">temp</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC897'>	            <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="nx">j</span> <span class="o">+</span> <span class="mi">1</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">matrix</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC898'>	                <span class="nx">temp</span> <span class="o">+=</span> <span class="nx">matrix</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="nx">j</span><span class="p">]</span> <span class="o">*</span> <span class="nx">data</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span>&#x000A;</div><div class='line' id='LC899'>	            <span class="p">}</span>&#x000A;</div><div class='line' id='LC900'>	            <span class="nx">data</span><span class="p">[</span><span class="nx">j</span><span class="p">]</span> <span class="o">=</span> <span class="p">(</span><span class="nx">matrix</span><span class="p">[</span><span class="nx">len</span><span class="p">][</span><span class="nx">j</span><span class="p">]</span> <span class="o">-</span> <span class="nx">temp</span><span class="p">)</span> <span class="o">/</span> <span class="nx">matrix</span><span class="p">[</span><span class="nx">j</span><span class="p">][</span><span class="nx">j</span><span class="p">];</span>&#x000A;</div><div class='line' id='LC901'>&#x000A;</div><div class='line' id='LC902'>	        <span class="p">}</span>&#x000A;</div><div class='line' id='LC903'>&#x000A;</div><div class='line' id='LC904'>	        <span class="k">return</span> <span class="nx">data</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC905'>	    <span class="p">}</span>&#x000A;</div><div class='line' id='LC906'>&#x000A;</div><div class='line' id='LC907'>	    <span class="kd">var</span> <span class="nx">regression</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">regreMethod</span><span class="p">,</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">order</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC908'>&#x000A;</div><div class='line' id='LC909'>	        <span class="k">return</span> <span class="nx">regreMethods</span><span class="p">[</span><span class="nx">regreMethod</span><span class="p">](</span><span class="nx">data</span><span class="p">,</span> <span class="nx">order</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC910'>&#x000A;</div><div class='line' id='LC911'>	    <span class="p">};</span>&#x000A;</div><div class='line' id='LC912'>&#x000A;</div><div class='line' id='LC913'>	    <span class="k">return</span> <span class="nx">regression</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC914'>&#x000A;</div><div class='line' id='LC915'>	<span class="p">}.</span><span class="nx">call</span><span class="p">(</span><span class="nx">exports</span><span class="p">,</span> <span class="nx">__webpack_require__</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">module</span><span class="p">),</span> <span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span> <span class="o">!==</span> <span class="kc">undefined</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span><span class="p">));</span>&#x000A;</div><div class='line' id='LC916'>&#x000A;</div><div class='line' id='LC917'><span class="cm">/***/</span> <span class="p">}),</span>&#x000A;</div><div class='line' id='LC918'><span class="cm">/* 6 */</span>&#x000A;</div><div class='line' id='LC919'><span class="cm">/***/</span> <span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">module</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">__webpack_require__</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC920'>&#x000A;</div><div class='line' id='LC921'>	<span class="kd">var</span> <span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span><span class="p">;</span><span class="o">!</span><span class="p">(</span><span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">require</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC922'>&#x000A;</div><div class='line' id='LC923'>	    <span class="kd">var</span> <span class="nx">statistics</span> <span class="o">=</span> <span class="p">{};</span>&#x000A;</div><div class='line' id='LC924'>&#x000A;</div><div class='line' id='LC925'>	    <span class="nx">statistics</span><span class="p">.</span><span class="nx">max</span> <span class="o">=</span> <span class="nx">__webpack_require__</span><span class="p">(</span><span class="mi">7</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC926'>	    <span class="nx">statistics</span><span class="p">.</span><span class="nx">deviation</span> <span class="o">=</span> <span class="nx">__webpack_require__</span><span class="p">(</span><span class="mi">8</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC927'>	    <span class="nx">statistics</span><span class="p">.</span><span class="nx">mean</span> <span class="o">=</span> <span class="nx">__webpack_require__</span><span class="p">(</span><span class="mi">10</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC928'>	    <span class="nx">statistics</span><span class="p">.</span><span class="nx">median</span> <span class="o">=</span> <span class="nx">__webpack_require__</span><span class="p">(</span><span class="mi">12</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC929'>	    <span class="nx">statistics</span><span class="p">.</span><span class="nx">min</span> <span class="o">=</span> <span class="nx">__webpack_require__</span><span class="p">(</span><span class="mi">14</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC930'>	    <span class="nx">statistics</span><span class="p">.</span><span class="nx">quantile</span> <span class="o">=</span> <span class="nx">__webpack_require__</span><span class="p">(</span><span class="mi">13</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC931'>	    <span class="nx">statistics</span><span class="p">.</span><span class="nx">sampleVariance</span> <span class="o">=</span> <span class="nx">__webpack_require__</span><span class="p">(</span><span class="mi">9</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC932'>	    <span class="nx">statistics</span><span class="p">.</span><span class="nx">sum</span> <span class="o">=</span> <span class="nx">__webpack_require__</span><span class="p">(</span><span class="mi">11</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC933'>&#x000A;</div><div class='line' id='LC934'>	    <span class="k">return</span> <span class="nx">statistics</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC935'>&#x000A;</div><div class='line' id='LC936'>	<span class="p">}.</span><span class="nx">call</span><span class="p">(</span><span class="nx">exports</span><span class="p">,</span> <span class="nx">__webpack_require__</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">module</span><span class="p">),</span> <span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span> <span class="o">!==</span> <span class="kc">undefined</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span><span class="p">));</span>&#x000A;</div><div class='line' id='LC937'>&#x000A;</div><div class='line' id='LC938'><span class="cm">/***/</span> <span class="p">}),</span>&#x000A;</div><div class='line' id='LC939'><span class="cm">/* 7 */</span>&#x000A;</div><div class='line' id='LC940'><span class="cm">/***/</span> <span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">module</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">__webpack_require__</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC941'>&#x000A;</div><div class='line' id='LC942'>	<span class="kd">var</span> <span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span><span class="p">;</span><span class="o">!</span><span class="p">(</span><span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">require</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC943'>&#x000A;</div><div class='line' id='LC944'>	    <span class="kd">var</span> <span class="nx">number</span> <span class="o">=</span> <span class="nx">__webpack_require__</span><span class="p">(</span><span class="mi">4</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC945'>	    <span class="kd">var</span> <span class="nx">isNumber</span> <span class="o">=</span> <span class="nx">number</span><span class="p">.</span><span class="nx">isNumber</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC946'>&#x000A;</div><div class='line' id='LC947'>	    <span class="cm">/**</span>&#x000A;</div><div class='line' id='LC948'><span class="cm">	     * Is a method for computing the max value of a list of numbers,</span>&#x000A;</div><div class='line' id='LC949'><span class="cm">	     * which will filter other data types.</span>&#x000A;</div><div class='line' id='LC950'><span class="cm">	     * @param  {Array.&lt;number&gt;} data</span>&#x000A;</div><div class='line' id='LC951'><span class="cm">	     * @return {number}</span>&#x000A;</div><div class='line' id='LC952'><span class="cm">	     */</span>&#x000A;</div><div class='line' id='LC953'>	    <span class="kd">function</span> <span class="nx">max</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC954'>&#x000A;</div><div class='line' id='LC955'>	        <span class="kd">var</span> <span class="nx">maxData</span> <span class="o">=</span> <span class="o">-</span><span class="kc">Infinity</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC956'>	        <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">data</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC957'>	            <span class="k">if</span> <span class="p">(</span><span class="nx">isNumber</span><span class="p">(</span><span class="nx">data</span><span class="p">[</span><span class="nx">i</span><span class="p">])</span> <span class="o">&amp;&amp;</span> <span class="nx">data</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">&gt;</span> <span class="nx">maxData</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC958'>	                <span class="nx">maxData</span> <span class="o">=</span> <span class="nx">data</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span>&#x000A;</div><div class='line' id='LC959'>	            <span class="p">}</span>&#x000A;</div><div class='line' id='LC960'>	        <span class="p">}</span>&#x000A;</div><div class='line' id='LC961'>	        <span class="k">return</span> <span class="nx">maxData</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC962'>	    <span class="p">}</span>&#x000A;</div><div class='line' id='LC963'>&#x000A;</div><div class='line' id='LC964'>	    <span class="k">return</span> <span class="nx">max</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC965'>&#x000A;</div><div class='line' id='LC966'>	<span class="p">}.</span><span class="nx">call</span><span class="p">(</span><span class="nx">exports</span><span class="p">,</span> <span class="nx">__webpack_require__</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">module</span><span class="p">),</span> <span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span> <span class="o">!==</span> <span class="kc">undefined</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span><span class="p">));</span>&#x000A;</div><div class='line' id='LC967'>&#x000A;</div><div class='line' id='LC968'><span class="cm">/***/</span> <span class="p">}),</span>&#x000A;</div><div class='line' id='LC969'><span class="cm">/* 8 */</span>&#x000A;</div><div class='line' id='LC970'><span class="cm">/***/</span> <span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">module</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">__webpack_require__</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC971'>&#x000A;</div><div class='line' id='LC972'>	<span class="kd">var</span> <span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span><span class="p">;</span><span class="o">!</span><span class="p">(</span><span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">require</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC973'>&#x000A;</div><div class='line' id='LC974'>	    <span class="kd">var</span> <span class="nx">variance</span> <span class="o">=</span> <span class="nx">__webpack_require__</span><span class="p">(</span><span class="mi">9</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC975'>&#x000A;</div><div class='line' id='LC976'>	    <span class="cm">/**</span>&#x000A;</div><div class='line' id='LC977'><span class="cm">	     * Computing the deviation</span>&#x000A;</div><div class='line' id='LC978'><span class="cm">	     * @param  {Array.&lt;number&gt;} data</span>&#x000A;</div><div class='line' id='LC979'><span class="cm">	     * @return {number}</span>&#x000A;</div><div class='line' id='LC980'><span class="cm">	     */</span>&#x000A;</div><div class='line' id='LC981'>	    <span class="k">return</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC982'>&#x000A;</div><div class='line' id='LC983'>	        <span class="kd">var</span> <span class="nx">squaredDeviation</span> <span class="o">=</span> <span class="nx">variance</span><span class="p">(</span><span class="nx">data</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC984'>&#x000A;</div><div class='line' id='LC985'>	        <span class="k">return</span> <span class="nx">squaredDeviation</span> <span class="p">?</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">sqrt</span><span class="p">(</span><span class="nx">squaredDeviation</span><span class="p">)</span> <span class="p">:</span> <span class="nx">squaredDeviation</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC986'>	    <span class="p">};</span>&#x000A;</div><div class='line' id='LC987'>	<span class="p">}.</span><span class="nx">call</span><span class="p">(</span><span class="nx">exports</span><span class="p">,</span> <span class="nx">__webpack_require__</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">module</span><span class="p">),</span> <span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span> <span class="o">!==</span> <span class="kc">undefined</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span><span class="p">));</span>&#x000A;</div><div class='line' id='LC988'>&#x000A;</div><div class='line' id='LC989'><span class="cm">/***/</span> <span class="p">}),</span>&#x000A;</div><div class='line' id='LC990'><span class="cm">/* 9 */</span>&#x000A;</div><div class='line' id='LC991'><span class="cm">/***/</span> <span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">module</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">__webpack_require__</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC992'>&#x000A;</div><div class='line' id='LC993'>	<span class="kd">var</span> <span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span><span class="p">;</span><span class="o">!</span><span class="p">(</span><span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">require</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC994'>&#x000A;</div><div class='line' id='LC995'>	    <span class="kd">var</span> <span class="nx">number</span> <span class="o">=</span> <span class="nx">__webpack_require__</span><span class="p">(</span><span class="mi">4</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC996'>	    <span class="kd">var</span> <span class="nx">isNumber</span> <span class="o">=</span> <span class="nx">number</span><span class="p">.</span><span class="nx">isNumber</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC997'>	    <span class="kd">var</span> <span class="nx">mean</span> <span class="o">=</span> <span class="nx">__webpack_require__</span><span class="p">(</span><span class="mi">10</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC998'>&#x000A;</div><div class='line' id='LC999'>	    <span class="cm">/**</span>&#x000A;</div><div class='line' id='LC1000'><span class="cm">	     * Computing the variance of list of sample</span>&#x000A;</div><div class='line' id='LC1001'><span class="cm">	     * @param  {Array.&lt;number&gt;} data</span>&#x000A;</div><div class='line' id='LC1002'><span class="cm">	     * @return {number}</span>&#x000A;</div><div class='line' id='LC1003'><span class="cm">	     */</span>&#x000A;</div><div class='line' id='LC1004'>	    <span class="kd">function</span> <span class="nx">sampleVariance</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC1005'>&#x000A;</div><div class='line' id='LC1006'>	        <span class="kd">var</span> <span class="nx">len</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC1007'>	        <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">len</span> <span class="o">||</span> <span class="nx">len</span> <span class="o">&lt;</span> <span class="mi">2</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC1008'>	            <span class="k">return</span> <span class="mi">0</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC1009'>	        <span class="p">}</span>&#x000A;</div><div class='line' id='LC1010'>	        <span class="k">if</span> <span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;=</span> <span class="mi">2</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC1011'>&#x000A;</div><div class='line' id='LC1012'>	            <span class="kd">var</span> <span class="nx">meanValue</span> <span class="o">=</span> <span class="nx">mean</span><span class="p">(</span><span class="nx">data</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC1013'>	            <span class="kd">var</span> <span class="nx">sum</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC1014'>	            <span class="kd">var</span> <span class="nx">temple</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC1015'>&#x000A;</div><div class='line' id='LC1016'>	            <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">data</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC1017'>	                <span class="k">if</span> <span class="p">(</span><span class="nx">isNumber</span><span class="p">(</span><span class="nx">data</span><span class="p">[</span><span class="nx">i</span><span class="p">]))</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC1018'>	                    <span class="nx">temple</span> <span class="o">=</span> <span class="nx">data</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">-</span> <span class="nx">meanValue</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC1019'>	                    <span class="nx">sum</span> <span class="o">+=</span> <span class="nx">temple</span> <span class="o">*</span> <span class="nx">temple</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC1020'>	                <span class="p">}</span>&#x000A;</div><div class='line' id='LC1021'>	            <span class="p">}</span>&#x000A;</div><div class='line' id='LC1022'>	            <span class="k">return</span> <span class="nx">sum</span> <span class="o">/</span> <span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC1023'>	        <span class="p">}</span>&#x000A;</div><div class='line' id='LC1024'>	    <span class="p">}</span>&#x000A;</div><div class='line' id='LC1025'>&#x000A;</div><div class='line' id='LC1026'>	    <span class="k">return</span> <span class="nx">sampleVariance</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC1027'>&#x000A;</div><div class='line' id='LC1028'>	<span class="p">}.</span><span class="nx">call</span><span class="p">(</span><span class="nx">exports</span><span class="p">,</span> <span class="nx">__webpack_require__</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">module</span><span class="p">),</span> <span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span> <span class="o">!==</span> <span class="kc">undefined</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span><span class="p">));</span>&#x000A;</div><div class='line' id='LC1029'>&#x000A;</div><div class='line' id='LC1030'>&#x000A;</div><div class='line' id='LC1031'><span class="cm">/***/</span> <span class="p">}),</span>&#x000A;</div><div class='line' id='LC1032'><span class="cm">/* 10 */</span>&#x000A;</div><div class='line' id='LC1033'><span class="cm">/***/</span> <span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">module</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">__webpack_require__</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC1034'>&#x000A;</div><div class='line' id='LC1035'>	<span class="kd">var</span> <span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span><span class="p">;</span><span class="o">!</span><span class="p">(</span><span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">require</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC1036'>&#x000A;</div><div class='line' id='LC1037'>	    <span class="kd">var</span> <span class="nx">sum</span> <span class="o">=</span> <span class="nx">__webpack_require__</span><span class="p">(</span><span class="mi">11</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC1038'>&#x000A;</div><div class='line' id='LC1039'>	    <span class="cm">/**</span>&#x000A;</div><div class='line' id='LC1040'><span class="cm">	     * Is a method for computing the mean value of a list of numbers,</span>&#x000A;</div><div class='line' id='LC1041'><span class="cm">	     * which will filter other data types.</span>&#x000A;</div><div class='line' id='LC1042'><span class="cm">	     * @param  {Array.&lt;number&gt;} data</span>&#x000A;</div><div class='line' id='LC1043'><span class="cm">	     * @return {number}</span>&#x000A;</div><div class='line' id='LC1044'><span class="cm">	     */</span>&#x000A;</div><div class='line' id='LC1045'>	    <span class="kd">function</span> <span class="nx">mean</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC1046'>&#x000A;</div><div class='line' id='LC1047'>	        <span class="kd">var</span> <span class="nx">len</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC1048'>&#x000A;</div><div class='line' id='LC1049'>	        <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">len</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC1050'>	            <span class="k">return</span> <span class="mi">0</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC1051'>	        <span class="p">}</span>&#x000A;</div><div class='line' id='LC1052'>&#x000A;</div><div class='line' id='LC1053'>	        <span class="k">return</span> <span class="nx">sum</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="o">/</span> <span class="nx">data</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC1054'>&#x000A;</div><div class='line' id='LC1055'>	    <span class="p">}</span>&#x000A;</div><div class='line' id='LC1056'>&#x000A;</div><div class='line' id='LC1057'>	    <span class="k">return</span> <span class="nx">mean</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC1058'>&#x000A;</div><div class='line' id='LC1059'>&#x000A;</div><div class='line' id='LC1060'>	<span class="p">}.</span><span class="nx">call</span><span class="p">(</span><span class="nx">exports</span><span class="p">,</span> <span class="nx">__webpack_require__</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">module</span><span class="p">),</span> <span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span> <span class="o">!==</span> <span class="kc">undefined</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span><span class="p">));</span>&#x000A;</div><div class='line' id='LC1061'>&#x000A;</div><div class='line' id='LC1062'><span class="cm">/***/</span> <span class="p">}),</span>&#x000A;</div><div class='line' id='LC1063'><span class="cm">/* 11 */</span>&#x000A;</div><div class='line' id='LC1064'><span class="cm">/***/</span> <span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">module</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">__webpack_require__</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC1065'>&#x000A;</div><div class='line' id='LC1066'>	<span class="kd">var</span> <span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span><span class="p">;</span><span class="o">!</span><span class="p">(</span><span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">require</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC1067'>&#x000A;</div><div class='line' id='LC1068'>	    <span class="kd">var</span> <span class="nx">number</span> <span class="o">=</span> <span class="nx">__webpack_require__</span><span class="p">(</span><span class="mi">4</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC1069'>	    <span class="kd">var</span> <span class="nx">isNumber</span> <span class="o">=</span> <span class="nx">number</span><span class="p">.</span><span class="nx">isNumber</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC1070'>&#x000A;</div><div class='line' id='LC1071'>	    <span class="cm">/**</span>&#x000A;</div><div class='line' id='LC1072'><span class="cm">	     * Is a method for computing the sum of a list of numbers,</span>&#x000A;</div><div class='line' id='LC1073'><span class="cm">	     * which will filter other data types.</span>&#x000A;</div><div class='line' id='LC1074'><span class="cm">	     * @param  {Array.&lt;number&gt;} data</span>&#x000A;</div><div class='line' id='LC1075'><span class="cm">	     * @return {number}</span>&#x000A;</div><div class='line' id='LC1076'><span class="cm">	     */</span>&#x000A;</div><div class='line' id='LC1077'>	    <span class="kd">function</span> <span class="nx">sum</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC1078'>&#x000A;</div><div class='line' id='LC1079'>	        <span class="kd">var</span> <span class="nx">len</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC1080'>&#x000A;</div><div class='line' id='LC1081'>	        <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">len</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC1082'>	            <span class="k">return</span> <span class="mi">0</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC1083'>	        <span class="p">}</span>&#x000A;</div><div class='line' id='LC1084'>	        <span class="kd">var</span> <span class="nx">sumData</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC1085'>	        <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">len</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC1086'>	            <span class="k">if</span> <span class="p">(</span><span class="nx">isNumber</span><span class="p">(</span><span class="nx">data</span><span class="p">[</span><span class="nx">i</span><span class="p">]))</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC1087'>	                <span class="nx">sumData</span> <span class="o">+=</span> <span class="nx">data</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span>&#x000A;</div><div class='line' id='LC1088'>	            <span class="p">}</span>&#x000A;</div><div class='line' id='LC1089'>	        <span class="p">}</span>&#x000A;</div><div class='line' id='LC1090'>	        <span class="k">return</span> <span class="nx">sumData</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC1091'>	    <span class="p">}</span>&#x000A;</div><div class='line' id='LC1092'>&#x000A;</div><div class='line' id='LC1093'>	    <span class="k">return</span> <span class="nx">sum</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC1094'>&#x000A;</div><div class='line' id='LC1095'>	<span class="p">}.</span><span class="nx">call</span><span class="p">(</span><span class="nx">exports</span><span class="p">,</span> <span class="nx">__webpack_require__</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">module</span><span class="p">),</span> <span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span> <span class="o">!==</span> <span class="kc">undefined</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span><span class="p">));</span>&#x000A;</div><div class='line' id='LC1096'>&#x000A;</div><div class='line' id='LC1097'><span class="cm">/***/</span> <span class="p">}),</span>&#x000A;</div><div class='line' id='LC1098'><span class="cm">/* 12 */</span>&#x000A;</div><div class='line' id='LC1099'><span class="cm">/***/</span> <span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">module</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">__webpack_require__</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC1100'>&#x000A;</div><div class='line' id='LC1101'>	<span class="kd">var</span> <span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span><span class="p">;</span><span class="o">!</span><span class="p">(</span><span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">require</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC1102'>&#x000A;</div><div class='line' id='LC1103'>	    <span class="kd">var</span> <span class="nx">quantile</span> <span class="o">=</span> <span class="nx">__webpack_require__</span><span class="p">(</span><span class="mi">13</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC1104'>&#x000A;</div><div class='line' id='LC1105'>	    <span class="cm">/**</span>&#x000A;</div><div class='line' id='LC1106'><span class="cm">	     * Is a method for computing the median value of a sorted array of numbers</span>&#x000A;</div><div class='line' id='LC1107'><span class="cm">	     * @param  {Array.&lt;number&gt;} data</span>&#x000A;</div><div class='line' id='LC1108'><span class="cm">	     * @return {number}</span>&#x000A;</div><div class='line' id='LC1109'><span class="cm">	     */</span>&#x000A;</div><div class='line' id='LC1110'>	    <span class="kd">function</span> <span class="nx">median</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC1111'>&#x000A;</div><div class='line' id='LC1112'>	        <span class="k">return</span> <span class="nx">quantile</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="mf">0.5</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC1113'>	    <span class="p">}</span>&#x000A;</div><div class='line' id='LC1114'>&#x000A;</div><div class='line' id='LC1115'>	    <span class="k">return</span> <span class="nx">median</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC1116'>&#x000A;</div><div class='line' id='LC1117'>	<span class="p">}.</span><span class="nx">call</span><span class="p">(</span><span class="nx">exports</span><span class="p">,</span> <span class="nx">__webpack_require__</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">module</span><span class="p">),</span> <span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span> <span class="o">!==</span> <span class="kc">undefined</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span><span class="p">));</span>&#x000A;</div><div class='line' id='LC1118'>&#x000A;</div><div class='line' id='LC1119'><span class="cm">/***/</span> <span class="p">}),</span>&#x000A;</div><div class='line' id='LC1120'><span class="cm">/* 13 */</span>&#x000A;</div><div class='line' id='LC1121'><span class="cm">/***/</span> <span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">module</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">__webpack_require__</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC1122'>&#x000A;</div><div class='line' id='LC1123'>	<span class="kd">var</span> <span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span><span class="p">;</span><span class="o">!</span><span class="p">(</span><span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">require</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC1124'>&#x000A;</div><div class='line' id='LC1125'>	    <span class="cm">/**</span>&#x000A;</div><div class='line' id='LC1126'><span class="cm">	     * Estimating quantiles from a sorted sample of numbers</span>&#x000A;</div><div class='line' id='LC1127'><span class="cm">	     * @see https://en.wikipedia.org/wiki/Quantile#Estimating_quantiles_from_a_sample</span>&#x000A;</div><div class='line' id='LC1128'><span class="cm">	     * R-7 method</span>&#x000A;</div><div class='line' id='LC1129'><span class="cm">	     * @param  {Array.&lt;number&gt;} data  sorted array</span>&#x000A;</div><div class='line' id='LC1130'><span class="cm">	     * @param  {number} p</span>&#x000A;</div><div class='line' id='LC1131'><span class="cm">	     */</span>&#x000A;</div><div class='line' id='LC1132'>	    <span class="k">return</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="nx">p</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC1133'>&#x000A;</div><div class='line' id='LC1134'>	        <span class="kd">var</span> <span class="nx">len</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC1135'>&#x000A;</div><div class='line' id='LC1136'>	        <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">len</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC1137'>	            <span class="k">return</span> <span class="mi">0</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC1138'>	        <span class="p">}</span>&#x000A;</div><div class='line' id='LC1139'>	        <span class="k">if</span> <span class="p">(</span><span class="nx">p</span> <span class="o">&lt;=</span> <span class="mi">0</span> <span class="o">||</span> <span class="nx">len</span> <span class="o">&lt;</span> <span class="mi">2</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC1140'>	            <span class="k">return</span> <span class="nx">data</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span>&#x000A;</div><div class='line' id='LC1141'>	        <span class="p">}</span>&#x000A;</div><div class='line' id='LC1142'>	        <span class="k">if</span> <span class="p">(</span><span class="nx">p</span> <span class="o">&gt;=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC1143'>	            <span class="k">return</span> <span class="nx">data</span><span class="p">[</span><span class="nx">len</span> <span class="o">-</span><span class="mi">1</span><span class="p">];</span>&#x000A;</div><div class='line' id='LC1144'>	        <span class="p">}</span>&#x000A;</div><div class='line' id='LC1145'>	        <span class="c1">// in the wikipedia's R-7 method h = (N - 1)p + 1, but here array index start from 0</span>&#x000A;</div><div class='line' id='LC1146'>	        <span class="kd">var</span> <span class="nx">h</span> <span class="o">=</span> <span class="p">(</span><span class="nx">len</span> <span class="o">-</span> <span class="mi">1</span><span class="p">)</span> <span class="o">*</span> <span class="nx">p</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC1147'>	        <span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nx">h</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC1148'>	        <span class="kd">var</span> <span class="nx">a</span> <span class="o">=</span> <span class="nx">data</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span>&#x000A;</div><div class='line' id='LC1149'>	        <span class="kd">var</span> <span class="nx">b</span> <span class="o">=</span> <span class="nx">data</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span> <span class="mi">1</span><span class="p">];</span>&#x000A;</div><div class='line' id='LC1150'>	        <span class="k">return</span> <span class="nx">a</span> <span class="o">+</span> <span class="p">(</span><span class="nx">b</span> <span class="o">-</span> <span class="nx">a</span><span class="p">)</span> <span class="o">*</span> <span class="p">(</span><span class="nx">h</span> <span class="o">-</span> <span class="nx">i</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC1151'>	    <span class="p">};</span>&#x000A;</div><div class='line' id='LC1152'>&#x000A;</div><div class='line' id='LC1153'>	<span class="p">}.</span><span class="nx">call</span><span class="p">(</span><span class="nx">exports</span><span class="p">,</span> <span class="nx">__webpack_require__</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">module</span><span class="p">),</span> <span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span> <span class="o">!==</span> <span class="kc">undefined</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span><span class="p">));</span>&#x000A;</div><div class='line' id='LC1154'>&#x000A;</div><div class='line' id='LC1155'><span class="cm">/***/</span> <span class="p">}),</span>&#x000A;</div><div class='line' id='LC1156'><span class="cm">/* 14 */</span>&#x000A;</div><div class='line' id='LC1157'><span class="cm">/***/</span> <span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">module</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">__webpack_require__</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC1158'>&#x000A;</div><div class='line' id='LC1159'>	<span class="kd">var</span> <span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span><span class="p">;</span><span class="o">!</span><span class="p">(</span><span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">require</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC1160'>&#x000A;</div><div class='line' id='LC1161'>	    <span class="kd">var</span> <span class="nx">number</span> <span class="o">=</span> <span class="nx">__webpack_require__</span><span class="p">(</span><span class="mi">4</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC1162'>	    <span class="kd">var</span> <span class="nx">isNumber</span> <span class="o">=</span> <span class="nx">number</span><span class="p">.</span><span class="nx">isNumber</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC1163'>&#x000A;</div><div class='line' id='LC1164'>	    <span class="cm">/**</span>&#x000A;</div><div class='line' id='LC1165'><span class="cm">	     * Is a method for computing the min value of a list of numbers,</span>&#x000A;</div><div class='line' id='LC1166'><span class="cm">	     * which will filter other data types.</span>&#x000A;</div><div class='line' id='LC1167'><span class="cm">	     * @param  {Array.&lt;number&gt;} data</span>&#x000A;</div><div class='line' id='LC1168'><span class="cm">	     * @return {number}</span>&#x000A;</div><div class='line' id='LC1169'><span class="cm">	     */</span>&#x000A;</div><div class='line' id='LC1170'>	    <span class="kd">function</span> <span class="nx">min</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC1171'>&#x000A;</div><div class='line' id='LC1172'>	        <span class="kd">var</span> <span class="nx">minData</span> <span class="o">=</span> <span class="kc">Infinity</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC1173'>	        <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">data</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC1174'>	            <span class="k">if</span> <span class="p">(</span><span class="nx">isNumber</span><span class="p">(</span><span class="nx">data</span><span class="p">[</span><span class="nx">i</span><span class="p">])</span> <span class="o">&amp;&amp;</span> <span class="nx">data</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">&lt;</span> <span class="nx">minData</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC1175'>	                <span class="nx">minData</span> <span class="o">=</span> <span class="nx">data</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span>&#x000A;</div><div class='line' id='LC1176'>	            <span class="p">}</span>&#x000A;</div><div class='line' id='LC1177'>	        <span class="p">}</span>&#x000A;</div><div class='line' id='LC1178'>	        <span class="k">return</span> <span class="nx">minData</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC1179'>	    <span class="p">}</span>&#x000A;</div><div class='line' id='LC1180'>&#x000A;</div><div class='line' id='LC1181'>	    <span class="k">return</span> <span class="nx">min</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC1182'>&#x000A;</div><div class='line' id='LC1183'>	<span class="p">}.</span><span class="nx">call</span><span class="p">(</span><span class="nx">exports</span><span class="p">,</span> <span class="nx">__webpack_require__</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">module</span><span class="p">),</span> <span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span> <span class="o">!==</span> <span class="kc">undefined</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span><span class="p">));</span>&#x000A;</div><div class='line' id='LC1184'>&#x000A;</div><div class='line' id='LC1185'><span class="cm">/***/</span> <span class="p">}),</span>&#x000A;</div><div class='line' id='LC1186'><span class="cm">/* 15 */</span>&#x000A;</div><div class='line' id='LC1187'><span class="cm">/***/</span> <span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">module</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">__webpack_require__</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC1188'>&#x000A;</div><div class='line' id='LC1189'>	<span class="kd">var</span> <span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span><span class="p">;</span><span class="o">!</span><span class="p">(</span><span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">require</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC1190'>&#x000A;</div><div class='line' id='LC1191'>	    <span class="kd">var</span> <span class="nx">max</span> <span class="o">=</span> <span class="nx">__webpack_require__</span><span class="p">(</span><span class="mi">7</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC1192'>	    <span class="kd">var</span> <span class="nx">min</span> <span class="o">=</span> <span class="nx">__webpack_require__</span><span class="p">(</span><span class="mi">14</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC1193'>	    <span class="kd">var</span> <span class="nx">quantile</span> <span class="o">=</span> <span class="nx">__webpack_require__</span><span class="p">(</span><span class="mi">13</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC1194'>	    <span class="kd">var</span> <span class="nx">deviation</span> <span class="o">=</span> <span class="nx">__webpack_require__</span><span class="p">(</span><span class="mi">8</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC1195'>	    <span class="kd">var</span> <span class="nx">dataProcess</span> <span class="o">=</span> <span class="nx">__webpack_require__</span><span class="p">(</span><span class="mi">2</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC1196'>	    <span class="kd">var</span> <span class="nx">dataPreprocess</span> <span class="o">=</span> <span class="nx">dataProcess</span><span class="p">.</span><span class="nx">dataPreprocess</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC1197'>	    <span class="kd">var</span> <span class="nx">getPrecision</span> <span class="o">=</span> <span class="nx">dataProcess</span><span class="p">.</span><span class="nx">getPrecision</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC1198'>	    <span class="kd">var</span> <span class="nx">array</span> <span class="o">=</span> <span class="nx">__webpack_require__</span><span class="p">(</span><span class="mi">3</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC1199'>	    <span class="kd">var</span> <span class="nx">ascending</span> <span class="o">=</span> <span class="nx">array</span><span class="p">.</span><span class="nx">ascending</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC1200'>	    <span class="kd">var</span> <span class="nx">map</span> <span class="o">=</span> <span class="nx">array</span><span class="p">.</span><span class="nx">map</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC1201'>	    <span class="kd">var</span> <span class="nx">range</span> <span class="o">=</span> <span class="nx">__webpack_require__</span><span class="p">(</span><span class="mi">16</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC1202'>	    <span class="kd">var</span> <span class="nx">bisect</span> <span class="o">=</span> <span class="nx">array</span><span class="p">.</span><span class="nx">bisect</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC1203'>	    <span class="kd">var</span> <span class="nx">tickStep</span> <span class="o">=</span> <span class="nx">__webpack_require__</span><span class="p">(</span><span class="mi">17</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC1204'>&#x000A;</div><div class='line' id='LC1205'>	    <span class="cm">/**</span>&#x000A;</div><div class='line' id='LC1206'><span class="cm">	     * Compute bins for histogram</span>&#x000A;</div><div class='line' id='LC1207'><span class="cm">	     * @param  {Array.&lt;number&gt;} data</span>&#x000A;</div><div class='line' id='LC1208'><span class="cm">	     * @param  {string} threshold</span>&#x000A;</div><div class='line' id='LC1209'><span class="cm">	     * @return {Object}</span>&#x000A;</div><div class='line' id='LC1210'><span class="cm">	     */</span>&#x000A;</div><div class='line' id='LC1211'>	    <span class="kd">function</span> <span class="nx">computeBins</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="nx">threshold</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC1212'>&#x000A;</div><div class='line' id='LC1213'>	        <span class="k">if</span> <span class="p">(</span><span class="nx">threshold</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC1214'>	            <span class="nx">threshold</span> <span class="o">=</span> <span class="nx">thresholdMethod</span><span class="p">.</span><span class="nx">squareRoot</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC1215'>	        <span class="p">}</span>&#x000A;</div><div class='line' id='LC1216'>	        <span class="k">else</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC1217'>	            <span class="nx">threshold</span> <span class="o">=</span> <span class="nx">thresholdMethod</span><span class="p">[</span><span class="nx">threshold</span><span class="p">];</span>&#x000A;</div><div class='line' id='LC1218'>	        <span class="p">}</span>&#x000A;</div><div class='line' id='LC1219'>	        <span class="kd">var</span> <span class="nx">values</span> <span class="o">=</span> <span class="nx">dataPreprocess</span><span class="p">(</span><span class="nx">data</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC1220'>	        <span class="kd">var</span> <span class="nx">maxValue</span> <span class="o">=</span> <span class="nx">max</span><span class="p">(</span><span class="nx">values</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC1221'>	        <span class="kd">var</span> <span class="nx">minValue</span> <span class="o">=</span> <span class="nx">min</span><span class="p">(</span><span class="nx">values</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC1222'>	        <span class="kd">var</span> <span class="nx">binsNumber</span> <span class="o">=</span> <span class="nx">threshold</span><span class="p">(</span><span class="nx">values</span><span class="p">,</span> <span class="nx">minValue</span><span class="p">,</span> <span class="nx">maxValue</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC1223'>	        <span class="kd">var</span> <span class="nx">step</span> <span class="o">=</span> <span class="nx">tickStep</span><span class="p">(</span><span class="nx">minValue</span><span class="p">,</span> <span class="nx">maxValue</span><span class="p">,</span> <span class="nx">binsNumber</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC1224'>	        <span class="kd">var</span> <span class="nx">precision</span> <span class="o">=</span> <span class="o">-</span><span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span><span class="nx">maxValue</span> <span class="o">-</span> <span class="nx">minValue</span><span class="p">)</span> <span class="o">/</span> <span class="nx">binsNumber</span><span class="p">)</span> <span class="o">/</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">LN10</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC1225'>	        &#x000A;</div><div class='line' id='LC1226'>	        <span class="c1">// return the xAxis coordinate for each bins, except the end point of the value</span>&#x000A;</div><div class='line' id='LC1227'>	        <span class="kd">var</span> <span class="nx">rangeArray</span> <span class="o">=</span> <span class="nx">range</span><span class="p">(</span>&#x000A;</div><div class='line' id='LC1228'>	                <span class="c1">// use function toFixed() to avoid data like '0.700000001'</span>&#x000A;</div><div class='line' id='LC1229'>	                <span class="o">+</span><span class="p">((</span><span class="nb">Math</span><span class="p">.</span><span class="nx">ceil</span><span class="p">(</span><span class="nx">minValue</span> <span class="o">/</span> <span class="nx">step</span><span class="p">)</span> <span class="o">*</span> <span class="nx">step</span><span class="p">).</span><span class="nx">toFixed</span><span class="p">(</span><span class="nx">precision</span><span class="p">)),</span>&#x000A;</div><div class='line' id='LC1230'>	                <span class="o">+</span><span class="p">((</span><span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nx">maxValue</span> <span class="o">/</span> <span class="nx">step</span><span class="p">)</span> <span class="o">*</span> <span class="nx">step</span><span class="p">).</span><span class="nx">toFixed</span><span class="p">(</span><span class="nx">precision</span><span class="p">)),</span>&#x000A;</div><div class='line' id='LC1231'>	                <span class="nx">step</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC1232'>	                <span class="nx">precision</span>&#x000A;</div><div class='line' id='LC1233'>	            <span class="p">);</span>&#x000A;</div><div class='line' id='LC1234'>&#x000A;</div><div class='line' id='LC1235'>	        <span class="kd">var</span> <span class="nx">len</span> <span class="o">=</span> <span class="nx">rangeArray</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC1236'>&#x000A;</div><div class='line' id='LC1237'>	        <span class="kd">var</span> <span class="nx">bins</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Array</span><span class="p">(</span><span class="nx">len</span> <span class="o">+</span> <span class="mi">1</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC1238'>&#x000A;</div><div class='line' id='LC1239'>	        <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;=</span> <span class="nx">len</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC1240'>	            <span class="nx">bins</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="p">{};</span>&#x000A;</div><div class='line' id='LC1241'>	            <span class="nx">bins</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">sample</span> <span class="o">=</span> <span class="p">[];</span>&#x000A;</div><div class='line' id='LC1242'>	            <span class="nx">bins</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">x0</span> <span class="o">=</span> <span class="nx">i</span> <span class="o">&gt;</span> <span class="mi">0</span> &#x000A;</div><div class='line' id='LC1243'>	                <span class="p">?</span> <span class="nx">rangeArray</span><span class="p">[</span><span class="nx">i</span> <span class="o">-</span> <span class="mi">1</span><span class="p">]</span>&#x000A;</div><div class='line' id='LC1244'>	                <span class="p">:</span> <span class="p">(</span><span class="nx">rangeArray</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">-</span> <span class="nx">minValue</span><span class="p">)</span> <span class="o">===</span> <span class="nx">step</span>&#x000A;</div><div class='line' id='LC1245'>	                <span class="p">?</span> <span class="nx">minValue</span>&#x000A;</div><div class='line' id='LC1246'>	                <span class="p">:</span> <span class="p">(</span><span class="nx">rangeArray</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">-</span> <span class="nx">step</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC1247'>	            <span class="nx">bins</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">x1</span> <span class="o">=</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">len</span>&#x000A;</div><div class='line' id='LC1248'>	                <span class="p">?</span> <span class="nx">rangeArray</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span>&#x000A;</div><div class='line' id='LC1249'>	                <span class="p">:</span> <span class="p">(</span><span class="nx">maxValue</span> <span class="o">-</span> <span class="nx">rangeArray</span><span class="p">[</span><span class="nx">i</span><span class="o">-</span><span class="mi">1</span><span class="p">])</span> <span class="o">===</span> <span class="nx">step</span>&#x000A;</div><div class='line' id='LC1250'>	                <span class="p">?</span> <span class="nx">maxValue</span>&#x000A;</div><div class='line' id='LC1251'>	                <span class="p">:</span> <span class="nx">rangeArray</span><span class="p">[</span><span class="nx">i</span> <span class="o">-</span> <span class="mi">1</span><span class="p">]</span> <span class="o">+</span> <span class="nx">step</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC1252'>	        <span class="p">}</span>&#x000A;</div><div class='line' id='LC1253'>&#x000A;</div><div class='line' id='LC1254'>	        <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">values</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC1255'>	            <span class="k">if</span> <span class="p">(</span><span class="nx">minValue</span> <span class="o">&lt;=</span> <span class="nx">values</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">&amp;&amp;</span> <span class="nx">values</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">&lt;=</span> <span class="nx">maxValue</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC1256'>	                <span class="nx">bins</span><span class="p">[</span><span class="nx">bisect</span><span class="p">(</span><span class="nx">rangeArray</span><span class="p">,</span> <span class="nx">values</span><span class="p">[</span><span class="nx">i</span><span class="p">],</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">len</span><span class="p">)].</span><span class="nx">sample</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">values</span><span class="p">[</span><span class="nx">i</span><span class="p">]);</span>&#x000A;</div><div class='line' id='LC1257'>	            <span class="p">}</span>&#x000A;</div><div class='line' id='LC1258'>	        <span class="p">}</span>&#x000A;</div><div class='line' id='LC1259'>&#x000A;</div><div class='line' id='LC1260'>	        <span class="kd">var</span> <span class="nx">data</span> <span class="o">=</span> <span class="nx">map</span><span class="p">(</span><span class="nx">bins</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">bin</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC1261'>	            <span class="c1">// use function toFixed() to avoid data like '6.5666638489'</span>&#x000A;</div><div class='line' id='LC1262'>	            <span class="k">return</span> <span class="p">[</span><span class="o">+</span><span class="p">((</span><span class="nx">bin</span><span class="p">.</span><span class="nx">x0</span> <span class="o">+</span> <span class="nx">bin</span><span class="p">.</span><span class="nx">x1</span><span class="p">)</span> <span class="o">/</span> <span class="mi">2</span><span class="p">).</span><span class="nx">toFixed</span><span class="p">(</span><span class="nx">precision</span><span class="p">),</span> <span class="nx">bin</span><span class="p">.</span><span class="nx">sample</span><span class="p">.</span><span class="nx">length</span><span class="p">];</span>&#x000A;</div><div class='line' id='LC1263'>	        <span class="p">});</span>&#x000A;</div><div class='line' id='LC1264'>&#x000A;</div><div class='line' id='LC1265'>	        <span class="kd">var</span> <span class="nx">customData</span> <span class="o">=</span> <span class="nx">map</span><span class="p">(</span><span class="nx">bins</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">bin</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC1266'>	            <span class="k">return</span> <span class="p">[</span><span class="nx">bin</span><span class="p">.</span><span class="nx">x0</span><span class="p">,</span> <span class="nx">bin</span><span class="p">.</span><span class="nx">x1</span><span class="p">,</span> <span class="nx">bin</span><span class="p">.</span><span class="nx">sample</span><span class="p">.</span><span class="nx">length</span><span class="p">];</span>&#x000A;</div><div class='line' id='LC1267'>	        <span class="p">});</span>&#x000A;</div><div class='line' id='LC1268'>&#x000A;</div><div class='line' id='LC1269'>	        <span class="k">return</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC1270'>	            <span class="na">bins</span><span class="p">:</span> <span class="nx">bins</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC1271'>	            <span class="na">data</span><span class="p">:</span> <span class="nx">data</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC1272'>	            <span class="na">customData</span><span class="p">:</span> <span class="nx">customData</span>&#x000A;</div><div class='line' id='LC1273'>	        <span class="p">};</span>&#x000A;</div><div class='line' id='LC1274'>	    <span class="p">}</span>&#x000A;</div><div class='line' id='LC1275'>&#x000A;</div><div class='line' id='LC1276'>	    <span class="cm">/**</span>&#x000A;</div><div class='line' id='LC1277'><span class="cm">	     * Four kinds of threshold methods used to</span>&#x000A;</div><div class='line' id='LC1278'><span class="cm">	     * compute how much bins the histogram should be divided</span>&#x000A;</div><div class='line' id='LC1279'><span class="cm">	     * @see  https://en.wikipedia.org/wiki/Histogram</span>&#x000A;</div><div class='line' id='LC1280'><span class="cm">	     * @type {Object}</span>&#x000A;</div><div class='line' id='LC1281'><span class="cm">	     */</span>&#x000A;</div><div class='line' id='LC1282'>	    <span class="kd">var</span> <span class="nx">thresholdMethod</span> <span class="o">=</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC1283'>&#x000A;</div><div class='line' id='LC1284'>	        <span class="na">squareRoot</span><span class="p">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC1285'>&#x000A;</div><div class='line' id='LC1286'>	            <span class="kd">var</span> <span class="nx">bins</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">ceil</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">sqrt</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">length</span><span class="p">));</span>&#x000A;</div><div class='line' id='LC1287'>&#x000A;</div><div class='line' id='LC1288'>	            <span class="k">return</span> <span class="nx">bins</span> <span class="o">&gt;</span> <span class="mi">50</span> <span class="p">?</span> <span class="mi">50</span> <span class="p">:</span> <span class="nx">bins</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC1289'>	        <span class="p">},</span>&#x000A;</div><div class='line' id='LC1290'>&#x000A;</div><div class='line' id='LC1291'>	        <span class="na">scott</span><span class="p">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="nx">min</span><span class="p">,</span> <span class="nx">max</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC1292'>&#x000A;</div><div class='line' id='LC1293'>	            <span class="k">return</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">ceil</span><span class="p">((</span><span class="nx">max</span> <span class="o">-</span> <span class="nx">min</span><span class="p">)</span> <span class="o">/</span> <span class="p">(</span><span class="mf">3.5</span> <span class="o">*</span> <span class="nx">deviation</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="o">*</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">pow</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">length</span><span class="p">,</span> <span class="o">-</span><span class="mi">1</span> <span class="o">/</span> <span class="mi">3</span><span class="p">)));</span>&#x000A;</div><div class='line' id='LC1294'>	        <span class="p">},</span>&#x000A;</div><div class='line' id='LC1295'>&#x000A;</div><div class='line' id='LC1296'>	        <span class="na">freedmanDiaconis</span><span class="p">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="nx">min</span><span class="p">,</span> <span class="nx">max</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC1297'>&#x000A;</div><div class='line' id='LC1298'>	            <span class="nx">data</span><span class="p">.</span><span class="nx">sort</span><span class="p">(</span><span class="nx">ascending</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC1299'>&#x000A;</div><div class='line' id='LC1300'>	            <span class="k">return</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">ceil</span><span class="p">(</span>&#x000A;</div><div class='line' id='LC1301'>	                <span class="p">(</span><span class="nx">max</span> <span class="o">-</span> <span class="nx">min</span><span class="p">)</span> <span class="o">/</span> <span class="p">(</span><span class="mi">2</span> <span class="o">*</span> <span class="p">(</span><span class="nx">quantile</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="mf">0.75</span><span class="p">)</span> <span class="o">-</span> <span class="nx">quantile</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="mf">0.25</span><span class="p">))</span> <span class="o">*</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">pow</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">length</span><span class="p">,</span> <span class="o">-</span><span class="mi">1</span> <span class="o">/</span> <span class="mi">3</span><span class="p">))</span>&#x000A;</div><div class='line' id='LC1302'>	            <span class="p">);</span>&#x000A;</div><div class='line' id='LC1303'>	        <span class="p">},</span>&#x000A;</div><div class='line' id='LC1304'>&#x000A;</div><div class='line' id='LC1305'>	        <span class="na">sturges</span><span class="p">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC1306'>&#x000A;</div><div class='line' id='LC1307'>	            <span class="k">return</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">ceil</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="o">/</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">LN2</span><span class="p">)</span> <span class="o">+</span> <span class="mi">1</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC1308'>&#x000A;</div><div class='line' id='LC1309'>	        <span class="p">}</span>&#x000A;</div><div class='line' id='LC1310'>	    <span class="p">};</span>&#x000A;</div><div class='line' id='LC1311'>&#x000A;</div><div class='line' id='LC1312'>	    <span class="k">return</span> <span class="nx">computeBins</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC1313'>&#x000A;</div><div class='line' id='LC1314'>	<span class="p">}.</span><span class="nx">call</span><span class="p">(</span><span class="nx">exports</span><span class="p">,</span> <span class="nx">__webpack_require__</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">module</span><span class="p">),</span> <span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span> <span class="o">!==</span> <span class="kc">undefined</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span><span class="p">));</span>&#x000A;</div><div class='line' id='LC1315'>&#x000A;</div><div class='line' id='LC1316'><span class="cm">/***/</span> <span class="p">}),</span>&#x000A;</div><div class='line' id='LC1317'><span class="cm">/* 16 */</span>&#x000A;</div><div class='line' id='LC1318'><span class="cm">/***/</span> <span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">module</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">__webpack_require__</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC1319'>&#x000A;</div><div class='line' id='LC1320'>	<span class="kd">var</span> <span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span><span class="p">;</span><span class="o">!</span><span class="p">(</span><span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">require</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC1321'>&#x000A;</div><div class='line' id='LC1322'>	    <span class="kd">var</span> <span class="nx">dataProcess</span> <span class="o">=</span> <span class="nx">__webpack_require__</span><span class="p">(</span><span class="mi">2</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC1323'>	    <span class="kd">var</span> <span class="nx">getPrecision</span> <span class="o">=</span> <span class="nx">dataProcess</span><span class="p">.</span><span class="nx">getPrecision</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC1324'>&#x000A;</div><div class='line' id='LC1325'>	    <span class="cm">/**</span>&#x000A;</div><div class='line' id='LC1326'><span class="cm">	     * Computing range array.</span>&#x000A;</div><div class='line' id='LC1327'><span class="cm">	     * Adding param precision to fix range value, avoiding range[i] = 0.7000000001.</span>&#x000A;</div><div class='line' id='LC1328'><span class="cm">	     * @param  {number} start</span>&#x000A;</div><div class='line' id='LC1329'><span class="cm">	     * @param  {number} end</span>&#x000A;</div><div class='line' id='LC1330'><span class="cm">	     * @param  {number} step</span>&#x000A;</div><div class='line' id='LC1331'><span class="cm">	     * @param  {number} precision</span>&#x000A;</div><div class='line' id='LC1332'><span class="cm">	     * @return {Array.&lt;number&gt;}</span>&#x000A;</div><div class='line' id='LC1333'><span class="cm">	     */</span>&#x000A;</div><div class='line' id='LC1334'>	    <span class="k">return</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">start</span><span class="p">,</span> <span class="nx">end</span><span class="p">,</span> <span class="nx">step</span><span class="p">,</span> <span class="nx">precision</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC1335'>&#x000A;</div><div class='line' id='LC1336'>	        <span class="kd">var</span> <span class="nx">len</span> <span class="o">=</span> <span class="nx">arguments</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC1337'>&#x000A;</div><div class='line' id='LC1338'>	        <span class="k">if</span> <span class="p">(</span><span class="nx">len</span> <span class="o">&lt;</span> <span class="mi">2</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC1339'>	            <span class="nx">end</span> <span class="o">=</span> <span class="nx">start</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC1340'>	            <span class="nx">start</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC1341'>	            <span class="nx">step</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC1342'>	        <span class="p">}</span>&#x000A;</div><div class='line' id='LC1343'>	        <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">len</span> <span class="o">&lt;</span> <span class="mi">3</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC1344'>	            <span class="nx">step</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC1345'>	        <span class="p">}</span>&#x000A;</div><div class='line' id='LC1346'>	        <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">len</span> <span class="o">&lt;</span> <span class="mi">4</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC1347'>	            <span class="nx">step</span> <span class="o">=</span> <span class="o">+</span><span class="nx">step</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC1348'>	            <span class="nx">precision</span> <span class="o">=</span> <span class="nx">getPrecision</span><span class="p">(</span><span class="nx">step</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC1349'>	        <span class="p">}</span>&#x000A;</div><div class='line' id='LC1350'>	        <span class="k">else</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC1351'>	            <span class="nx">precision</span> <span class="o">=</span> <span class="o">+</span><span class="nx">precision</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC1352'>	        <span class="p">}</span>&#x000A;</div><div class='line' id='LC1353'>&#x000A;</div><div class='line' id='LC1354'>	        <span class="kd">var</span> <span class="nx">n</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">ceil</span><span class="p">(((</span><span class="nx">end</span> <span class="o">-</span> <span class="nx">start</span><span class="p">)</span> <span class="o">/</span> <span class="nx">step</span><span class="p">).</span><span class="nx">toFixed</span><span class="p">(</span><span class="nx">precision</span><span class="p">));</span>&#x000A;</div><div class='line' id='LC1355'>	        <span class="kd">var</span> <span class="nx">range</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Array</span><span class="p">(</span><span class="nx">n</span> <span class="o">+</span> <span class="mi">1</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC1356'>	        <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">n</span> <span class="o">+</span> <span class="mi">1</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC1357'>	            <span class="nx">range</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="o">+</span><span class="p">(</span><span class="nx">start</span> <span class="o">+</span> <span class="nx">i</span> <span class="o">*</span> <span class="nx">step</span><span class="p">).</span><span class="nx">toFixed</span><span class="p">(</span><span class="nx">precision</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC1358'>	        <span class="p">}</span>&#x000A;</div><div class='line' id='LC1359'>	        <span class="k">return</span> <span class="nx">range</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC1360'>	    <span class="p">};</span>&#x000A;</div><div class='line' id='LC1361'>&#x000A;</div><div class='line' id='LC1362'>	<span class="p">}.</span><span class="nx">call</span><span class="p">(</span><span class="nx">exports</span><span class="p">,</span> <span class="nx">__webpack_require__</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">module</span><span class="p">),</span> <span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span> <span class="o">!==</span> <span class="kc">undefined</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span><span class="p">));</span>&#x000A;</div><div class='line' id='LC1363'>&#x000A;</div><div class='line' id='LC1364'><span class="cm">/***/</span> <span class="p">}),</span>&#x000A;</div><div class='line' id='LC1365'><span class="cm">/* 17 */</span>&#x000A;</div><div class='line' id='LC1366'><span class="cm">/***/</span> <span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">module</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">__webpack_require__</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC1367'>&#x000A;</div><div class='line' id='LC1368'>	<span class="kd">var</span> <span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span><span class="p">;</span><span class="o">!</span><span class="p">(</span><span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">require</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC1369'>&#x000A;</div><div class='line' id='LC1370'>	    <span class="cm">/**</span>&#x000A;</div><div class='line' id='LC1371'><span class="cm">	     * Computing the length of step</span>&#x000A;</div><div class='line' id='LC1372'><span class="cm">	     * @see  https://github.com/d3/d3-array/blob/master/src/ticks.js</span>&#x000A;</div><div class='line' id='LC1373'><span class="cm">	     * @param {number} start</span>&#x000A;</div><div class='line' id='LC1374'><span class="cm">	     * @param {number} stop</span>&#x000A;</div><div class='line' id='LC1375'><span class="cm">	     * @param {number} count</span>&#x000A;</div><div class='line' id='LC1376'><span class="cm">	     */</span>&#x000A;</div><div class='line' id='LC1377'>	    <span class="k">return</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">start</span><span class="p">,</span> <span class="nx">stop</span><span class="p">,</span> <span class="nx">count</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC1378'>&#x000A;</div><div class='line' id='LC1379'>	        <span class="kd">var</span> <span class="nx">step0</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span><span class="nx">stop</span> <span class="o">-</span> <span class="nx">start</span><span class="p">)</span> <span class="o">/</span> <span class="nx">count</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC1380'>	        <span class="kd">var</span> <span class="nx">precision</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">step0</span><span class="p">)</span> <span class="o">/</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">LN10</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC1381'>	        <span class="kd">var</span> <span class="nx">step1</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">pow</span><span class="p">(</span><span class="mi">10</span><span class="p">,</span> <span class="nx">precision</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC1382'>	        <span class="kd">var</span> <span class="nx">error</span> <span class="o">=</span> <span class="nx">step0</span> <span class="o">/</span> <span class="nx">step1</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC1383'>&#x000A;</div><div class='line' id='LC1384'>	        <span class="k">if</span> <span class="p">(</span><span class="nx">error</span> <span class="o">&gt;=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">sqrt</span><span class="p">(</span><span class="mi">50</span><span class="p">))</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC1385'>	            <span class="nx">step1</span> <span class="o">*=</span> <span class="mi">10</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC1386'>	        <span class="p">}</span>&#x000A;</div><div class='line' id='LC1387'>	        <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">error</span> <span class="o">&gt;=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">sqrt</span><span class="p">(</span><span class="mi">10</span><span class="p">))</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC1388'>	            <span class="nx">step1</span> <span class="o">*=</span> <span class="mi">5</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC1389'>	        <span class="p">}</span>&#x000A;</div><div class='line' id='LC1390'>	        <span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="nx">error</span> <span class="o">&gt;=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">sqrt</span><span class="p">(</span><span class="mi">2</span><span class="p">))</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC1391'>	            <span class="nx">step1</span> <span class="o">*=</span> <span class="mi">2</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC1392'>	        <span class="p">}</span>&#x000A;</div><div class='line' id='LC1393'>	        <span class="k">return</span> <span class="o">+</span><span class="p">((</span><span class="nx">stop</span> <span class="o">&gt;=</span> <span class="nx">start</span> <span class="p">?</span> <span class="nx">step1</span> <span class="p">:</span> <span class="o">-</span><span class="nx">step1</span><span class="p">).</span><span class="nx">toFixed</span><span class="p">(</span><span class="o">-</span><span class="nx">precision</span><span class="p">));</span>&#x000A;</div><div class='line' id='LC1394'>&#x000A;</div><div class='line' id='LC1395'>	    <span class="p">};</span>&#x000A;</div><div class='line' id='LC1396'>&#x000A;</div><div class='line' id='LC1397'>	<span class="p">}.</span><span class="nx">call</span><span class="p">(</span><span class="nx">exports</span><span class="p">,</span> <span class="nx">__webpack_require__</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">module</span><span class="p">),</span> <span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span> <span class="o">!==</span> <span class="kc">undefined</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="nx">__WEBPACK_AMD_DEFINE_RESULT__</span><span class="p">));</span>&#x000A;</div><div class='line' id='LC1398'>&#x000A;</div><div class='line' id='LC1399'>&#x000A;</div><div class='line' id='LC1400'><span class="cm">/***/</span> <span class="p">})</span>&#x000A;</div><div class='line' id='LC1401'><span class="cm">/******/</span> <span class="p">])</span>&#x000A;</div><div class='line' id='LC1402'><span class="p">});</span>&#x000A;</div><div class='line' id='LC1403'><span class="p">;</span>&#x000A;</div></pre><div class="markdown-code-block-copy-btn"></div></div></div>
</div>
<script>
  window.Gitee.initReadmeCatalog();
  toMathMlCode('','markdown-body');
  $('.file_content a, .catalog-li a.anchor').click(function () {
    var anchor = $(this).attr('href')
    window.location.hash = anchor
  })
</script>

</div>
</div>
<div class='tree_progress'></div>
<div class='ui small modal' id='modal-linejump'>
<div class='ui custom form content'>
<div class='field'>
<div class='ui right action input'>
<input placeholder='跳转至某一行...' type='number'>
<div class='ui orange button'>
跳转
</div>
</div>
</div>
</div>
</div>


<div class='row column inner-comment' id='blob-comment'>
<input type="hidden" name="comment_path" id="comment_path" value="dist/ecStat.js" />
<div class='tree-comments'>
<h3 id='tree_comm_title'>
评论
(
<span class='comments-count'>
0
</span>
)
</h3>
<div class='ui threaded comments middle aligned' id='notes-list'></div>
<input type="hidden" name="ajax_add_note_id" id="ajax_add_note_id" />
<div class='text-center'>
<div class='tip-loading' style='display: none'>
<div class='ui active mini inline loader'></div>
正在加载...
</div>
</div>
</div>
<script>
  "use strict";
  $(function(){
    var page = 1
    var commentsCount = 0
    var $container = $('.tree-comments')
    var $comments = $container.find('.ui.comments')
    var $tipLoading = $container.find('.tip-loading')
    var $btnLoad = $container.find('.btn-load-more')
    var noteAnchor = new Gitee.NoteAnchor({ defaultAnchor: '#tree_comm_title' })
  
    if (commentsCount < 1) {
      return;
    }
  
    var path;
    if ($('#comment_path').val() === '') {
      path = '/';
    } else {
      path = $('#comment_path').val();
    }
  
    function loadComments () {
      $btnLoad.hide();
      $tipLoading.show();
      $.ajax({
        url: '/yyy0118/echarts-stat/comment_list',
        data: {
          page: page,
          path: path
        },
        success: function(data) {
          var err;
          try {
            $tipLoading.hide();
            $btnLoad.show();
            if (data.status !== 0) {
              $btnLoad.text('无更多评论')
              return $btnLoad.prop('disabled', true).addClass('disabled');
            } else {
              TreeComment.CommentListHandler(data);
              page += 1;
              if (data.comments_count < 10) {
                $('#ajax_add_note_id').val('');
                $btnLoad.text('无更多评论')
                $btnLoad.prop('disabled', true).addClass('disabled');
              }
              // osctree can not load script
              $comments.find('.timeago').timeago();
              $comments.find('.commenter-role-label').popup();
              noteAnchor.locate();
              toMathMlCode('', 'comments');
              return $('.markdown-body pre code').each(function(i, block) {
                return hljs.highlightBlock(block);
              });
            }
          } catch (error) {
            err = error;
            return console.log('loadComments error:' + err);
          }
        }
      });
    };
  
  
    function checkLoad () {
      var listTop, top;
      top = $(window).scrollTop();
      listTop = $container.offset().top;
      if (listTop >= top && listTop < top + $(window).height()) {
        $(window).off('scroll', checkLoad);
        return loadComments();
      }
    };
  
    $btnLoad.on('click', loadComments);
    loadComments()
  })
</script>

</div>
<div class='inner-comment-box' id='comment-box'>
<p>
你可以在<a href="/login">登录</a>后，发表评论
</p>

</div>

<div class='complaint'>
<div class='ui modal small form' id='landing-comments-complaint-modal'>
<i class='iconfont icon-close close'></i>
<div class='header'>
举报
</div>
<div class='content'>
<div class='appeal-success-tip hide'>
<i class='iconfont icon-ic_msg_success'></i>
<div class='appeal-success-text'>
举报成功
</div>
<span>
我们将于2个工作日内通过站内信反馈结果给你！
</span>
</div>
<div class='appeal-tip'>
请认真填写举报原因，尽可能描述详细。
</div>
<div class='ui form appeal-form'>
<div class='inline field'>
<label class='left-part appeal-type-wrap'>
举报类型
</label>
<div class='ui dropdown selection' id='appeal-comments-types'>
<div class='text default'>
请选择举报类型
</div>
<i class='dropdown icon'></i>
<div class='menu'></div>
</div>
</div>
<div class='inline field'>
<label class='left-part'>
举报原因
</label>
<textarea class='appeal-reason' id='appeal-comment-reason' name='msg' placeholder='请说明举报原因' rows='3'></textarea>
</div>
<div class='ui message callback-msg hide'></div>
<div class='ui small error text message exceeded-size-tip'></div>
</div>
</div>
<div class='actions'>
<div class='ui button blank cancel'>
取消
</div>
<div class='ui orange icon button disabled ok' id='complaint-comment-confirm'>
发送
</div>
</div>
</div>
<script>
  var $complaintCommentsModal = $('#landing-comments-complaint-modal'),
      $complainCommentType = $complaintCommentsModal.find('#appeal-comments-types'),
      $complaintModalTip = $complaintCommentsModal.find('.callback-msg'),
      $complaintCommentsContent = $complaintCommentsModal.find('.appeal-reason'),
      $complaintCommentBtn = $complaintCommentsModal.find('#complaint-comment-confirm'),
      complaintSending = false,
      initedCommentsType = false;
  
  function initCommentsTypeList() {
    if (!initedCommentsType) {
      $.ajax({
        url: "/appeals/fetch_types",
        method: 'get',
        data: {'type': 'comment'},
        success: function (data) {
          var result = '';
          for (var i = 0; i < data.length; i++) {
            result = result + "<div class='item' data-value='" + data[i].id + "'>" + data[i].name + "</div>";
          }
          $complainCommentType.find('.menu').html(result);
        }
      });
      $complainCommentType.dropdown({showOnFocus: false});
      initedCommentsType = true;
    }
  }
  $complainCommentType.on('click', function() {
    $complaintCommentsModal.modal({
      autofocus: false,
      onApprove: function() {
        return false;
      },
      onHidden: function() {
        restoreCommonentDefault();
      }
    }).modal('show');
  });
  
  $complaintCommentsContent.on('change keyup', function(e) {
    var content = $(this).val();
    if ($.trim(content).length > 0 && $complainCommentType.dropdown('get value').length > 0 ) {
      $complaintCommentBtn.removeClass('disabled');
      return;
    }
    $complaintCommentBtn.addClass('disabled');
  });
  
  
  $complainCommentType.dropdown({
    showOnFocus: false,
    onChange: function(value, text, $selectedItem) {
      if (value.length > 0 && $.trim($complaintCommentsContent.val()).length > 0) {
        $complaintCommentBtn.removeClass('disabled');
        return
      }
      $complaintCommentBtn.addClass('disabled');
    }
  });
  
  function restoreCommonentDefault() {
    $complainCommentType.dropdown('restore defaults');
    $complaintCommentsContent.val('');
    $('.exceeded-size-tip').text('').hide();
    $complaintModalTip.text('').hide();
    setTimeout(function() {
      setCommentSendTip(false);
    }, 1500);
  }
  
  $complaintCommentBtn.on('click',function(e){
    var reason = $complaintCommentsContent.val();
    var appealableId = $('#landing-comments-complaint-modal').attr('data-id');
    if (complaintSending) {
      return;
    }
    var appealType = $complainCommentType.dropdown('get value');
    var formData = new FormData();
    formData.append('appeal_type_id', appealType);
    formData.append('reason', reason);
    formData.append('appeal_type','Note');
    formData.append('target_id',appealableId);
    $.ajax({
      type: 'POST',
      url: "/appeals",
      cache: false,
      contentType: false,
      processData: false,
      data: formData,
      beforeSend: function() {
        setCommentSendStatus(true);
      },
      success: function(res) {
        if (res.status == 200) {
          setCommentSendTip(true);
          setTimeout(function() {
            $complaintCommentsModal.modal('hide');
            restoreCommonentDefault();
          }, 3000);
        }
        setCommentSendStatus(false);
      },
      error: function(err) {
        showCommonTips(err.responseJSON.message, 'error');
        setCommentSendStatus(false);
      }
    })
  });
  
  function showCommonTips(text, type) {
    $complaintModalTip.text(text).show();
    if (type == 'error') {
      $complaintModalTip.removeClass('success').addClass('error');
    } else {
      $complaintModalTip.removeClass('error').addClass('success');
    }
  }
  
  function setCommentSendStatus(value) {
    complaintSending = value;
    if (complaintSending) {
      $complaintCommentBtn.addClass('loading');
      $complaintCommentsContent.attr('readonly', true);
      $complainCommentType.attr('readonly', true);
    } else {
      $complaintCommentBtn.removeClass('loading');
      $complaintCommentsContent.attr('readonly', false);
      $complainCommentType.attr('readonly', false);
    }
  }
  
  function setCommentSendTip(value) {
    if (value) {
      $('.appeal-success-tip').removeClass('hide');
      $('.appeal-tip').addClass('hide');
      $('.appeal-form').addClass('hide');
      $('#landing-comments-complaint-modal .actions').addClass('hide');
    } else {
      $('.appeal-success-tip').addClass('hide');
      $('.appeal-tip').removeClass('hide');
      $('.appeal-form').removeClass('hide');
      $('#landing-comments-complaint-modal .actions').removeClass('hide');
    }
  }
</script>

</div>
<script>
  "use strict";
  $('.js-check-star').checkbox('set unchecked')
</script>

</div>
</div>
</div>
<div class='four wide column' style='display: none;'>
<div class='project__right-side'>
<div class='side-item intro'>
<div class='header'>
<h4>简介</h4>
</div>
<div class='content'>
<span class='git-project-desc-text'>Statistics tool for ECharts</span>
<a class='hide spread' href='javascript:void(0);'>
展开
<i class='caret down icon'></i>
</a>
<a class='retract hide' href='javascript:void(0);'>
收起
<i class='caret up icon'></i>
</a>
<div class='intro-list'>
<div class='blank d-flex d-flex-between dropdown item js-project-label_show label-list-line-feed project-label-list ui' data-labels='[]' data-url='/yyy0118/echarts-stat/update_description'>
<div class='mixed-label'>
</div>

<div class='default'>暂无标签</div>
</div>
<div class='hide item'>
<i class='iconfont icon-link'></i>
<span class='git-project-homepage'>
<a rel="nofollow" id="homepage" target="_blank" href="/yyy0118/echarts-stat/blob/master/dist/ecStat.js">/yyy0118/echarts-stat/blob/master/dist/ecStat.js</a>
</span>
</div>

</div>
</div>
<div class='content intro-form'>
<div class='ui small input'>
<textarea name='project[description]' placeholder='描述' rows='5'></textarea>
</div>
<div class='ui small input'>
<input data-regex-value='(^$)|(^(http|https):\/\/(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).*)|(^(http|https):\/\/[a-zA-Z0-9]+([_\-\.]{1}[a-zA-Z0-9]+)*\.[a-zA-Z]{2,10}(:[0-9]{1,10})?(\?.*)?(\/.*)?$)' name='project[homepage]' placeholder='主页(eg: https://gitee.com)' type='text'>
</div>
<button class='ui orange button mt-1 btn-save'>
保存更改
</button>
<div class='ui blank button btn-cancel-edit'>
取消
</div>
</div>
</div>
<div class='side-item release'>
<div class='header'>
<h4>发行版</h4>
</div>
<div class='content'>
<span class='text-muted'>
暂无发行版
</span>
</div>
</div>
<div class='side-item contrib' data-url='/yyy0118/echarts-stat/contributors_count?ref=master' id='contributor'>
<div class='header'>
<h4>
贡献者
<span class='text-muted' id='contributor-count'></span>
</h4>
<a class="ui link button pull-right" href="/yyy0118/echarts-stat/contributors?ref=master">全部</a>
</div>
<div class='content' id='contributor-list'></div>
<div class='ui active centered inline loader' id='contributor-loader'></div>
</div>
<div class='side-item events' data-url='/yyy0118/echarts-stat/events.json' id='proj-events'>
<div class='header'>
<h4>近期动态</h4>
</div>
<div class='content'>
<div class='ui comments' id='event-list'></div>
<a class="loadmore hide" href="javascript:void(0);">加载更多
<i class='icon dropdown'></i>
</a><center>
<div class='text-muted nomore hide'>不能加载更多了</div>
<div class='ui inline loader active'></div>
</center>
</div>
</div>
</div>
<div class='ui modal tiny' id='edit-project-description'>
<i class='iconfont icon-close close'></i>
<div class='header'>编辑仓库简介</div>
<div class='content'>
<div class='item mb-2'>
<div class='title label'>简介内容</div>
<div class='ui small input'>
<textarea maxlength='200' name='project[description]' placeholder='描述' rows='5'>Statistics tool for ECharts</textarea>
</div>
</div>
<div class='item mb-2'>
<div class='title label'>主页</div>
<div class='ui small input'>
<input data-regex-value='(^$)|(^(http|https):\/\/(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).*)|(^(http|https):\/\/[a-zA-Z0-9]+([_\-\.]{1}[a-zA-Z0-9]+)*\.[a-zA-Z]{2,10}(:[0-9]{1,10})?(\?.*)?(\/.*)?$)' name='project[homepage]' placeholder='主页(eg: https://gitee.com)' type='text'>
</div>
</div>
</div>
<div class='actions'>
<button class='ui button blank cancel'>取消</button>
<button class='ui button orange btn-save'>保存更改</button>
</div>
</div>

<script>
  window.gon.projectRightSide = {
    homepage: null,
    description: "Statistics tool for ECharts",
    url: '/yyy0118/echarts-stat/update_description',
    i18n: {
      invalidHomepage: '不是有效的 http 地址',
      descriptionLimitExceeded: '简介长度不得超过%{limit}个字符',
      noDescription: '暂无描述',
      noPermission: '无权限操作！',
      requestError: '修改发生错误，请稍后重试！'
    }
  }
  window.gon.cloneArrSelectedLabel = [] || []
  $(function () {
    var $editModal = $('#edit-project-description')
    $editModal.modal({
      onShow: function () {
        window.globalUtils.getFocus($editModal.find('textarea'))
      }
    })
    $('.project__right-side').on('click', '.header .btn-edit', function () {
      $editModal.modal('show')
    })
    $('#license-popup').popup({ position: 'bottom center', lastResort: 'bottom center' })
  
    $('.js-project-label_show').projectLabel({
      i18n: {
        empty: "标签名不能为空",
        verify: "标签名只允许包含中文、字母、数字或者中划线(-)，不能以中划线开头，且长度少于35个字符",
        max: "最多选择 5 个标签"
      }
    })
  })
</script>

</div>
</div>
</div>
<script>
  (function() {
    $(function() {
      Tree.init();
      return TreeCommentActions.init();
    });
  
  }).call(this);
</script>

</div>
<script>
  (function() {
    var donateModal;
  
    Gitee.modalHelper = new GiteeModalHelper({
      alertText: '提示',
      okText: '确定'
    });
  
    donateModal = new ProjectDonateModal({
      el: '#project-donate-modal',
      alipayUrl: '/yyy0118/echarts-stat/alipay',
      wepayUrl: '/yyy0118/echarts-stat/wepay',
      nameIsBlank: '名称不能为空',
      nameTooLong: '名称过长（最多为 36 个字符）',
      modalHelper: Gitee.modalHelper
    });
  
    if (null === 'true') {
      donateModal.show();
    }
  
    $('#project-donate').on('click', function() {
      return donateModal.show();
    });
  
  }).call(this);
</script>
<script>
  Tree.initHighlightTheme('white')
</script>


</div>
<div class='gitee-project-extension'>
<div class='extension public'>1</div>
<div class='extension https'>https://gitee.com/yyy0118/echarts-stat.git</div>
<div class='extension ssh'>git@gitee.com:yyy0118/echarts-stat.git</div>
<div class='extension namespace'>yyy0118</div>
<div class='extension repo'>echarts-stat</div>
<div class='extension name'>echarts-stat</div>
<div class='extension branch'>master</div>
</div>

<script>
  $(function() {
    GitLab.GfmAutoComplete.dataSource = "/yyy0118/echarts-stat/autocomplete_sources"
    GitLab.GfmAutoComplete.Emoji.assetBase = '/assets/emoji'
    GitLab.GfmAutoComplete.setup();
  });
</script>

<footer id='git-footer-main'>
<div class='ui container'>
<div class='logo-row'>
<img class='logo-img' src='/static/images/logo-black.svg?t=158106666'>
</div>
<div class='name-important'>
深圳市奥思网络科技有限公司版权所有
</div>
<div class='ui two column grid d-flex-center'>
<div class='nine wide column git-footer-left'>
<div class='ui four column grid' id='footer-left'>
<div class='column'>
<div class='ui link list'>
<div class='item'>
<a class="item" href="/all-about-git">Git 大全</a>
</div>
<div class='item'>
<a class="item" href="https://oschina.gitee.io/learn-git-branching/">Git 命令学习</a>
</div>
<div class='item'>
<a class="item" href="https://copycat.gitee.com/">CopyCat 代码克隆检测</a>
</div>
<div class='item'>
<a class="item" href="/appclient">APP与插件下载</a>
</div>
</div>
</div>
<div class='column'>
<div class='ui link list'>
<div class='item'>
<a class="item" href="/gitee_reward">Gitee Reward</a>
</div>
<div class='item'>
<a class="item" href="/gitee-stars">Gitee 封面人物</a>
</div>
<div class='item'>
<a class="item" href="/gvp">GVP 项目</a>
</div>
<div class='item'>
<a class="item" href="https://blog.gitee.com/">Gitee 博客</a>
</div>
<div class='item'>
<a class="item" href="/enterprises#nonprofit-plan">Gitee 公益计划</a>
</div>
</div>
</div>
<div class='column'>
<div class='ui link list'>
<div class='item'>
<a class="item" href="/api/v5/swagger">OpenAPI</a>
</div>
<div class='item'>
<a class="item" href="/help">帮助文档</a>
</div>
<div class='item'>
<a class="item" href="/self_services">在线自助服务</a>
</div>
<div class='item'>
<a class="item" href="/help/articles/4338#article-header0">更新日志</a>
</div>
</div>
</div>
<div class='column'>
<div class='ui link list'>
<div class='item'>
<a class="item" href="/about_us">关于我们</a>
</div>
<div class='item'>
<a class="item" href="https://www.oschina.net/news/131099/oschina-hiring">加入我们</a>
</div>
<div class='item'>
<a class="item" href="/terms">使用条款</a>
</div>
<div class='item'>
<a class="item" href="/oschina/git-osc/issues">意见建议</a>
</div>
<div class='item'>
<a class="item" href="/links.html">合作伙伴</a>
</div>
</div>
</div>
</div>
</div>
<div class='seven wide column right aligned followus git-footer-right'>
<div class='qrcode mini_app'>
<img src="https://assets.gitee.com/assets/mini_app-e5eee5a21c552b69ae6bf2cf87406b59.jpg" alt="Mini app" />
<p class='mini_app-text'>微信小程序</p>
</div>
<div class='qrcode weixin'>
<img src="https://assets.gitee.com/assets/qrcode-weixin-9e7cfb27165143d2b8e8b268a52ea822.jpg" alt="Qrcode weixin" />
<p class='weixin-text'>微信服务号</p>
</div>
<div class='phone-and-qq column'>
<div class='ui list official-support-container'>
<div class='item'>
<a class="icon-popup" title="点击加入 Gitee 官方群" href="//qm.qq.com/cgi-bin/qm/qr?k=OUfztMuf7jElTIf78lMuNT_D_lZYOWnd"><i class='iconfont icon-logo-qq'></i>
<span>官方技术交流QQ群：515965326</span>
</a></div>
<div class='item mail-and-zhihu'>
<a href="mailto: git@oschina.cn"><i class='iconfont icon-msg-mail'></i>
<span id='git-footer-email'>git#oschina.cn</span>
</a></div>
<div class='item mail-and-zhihu'>
<a target="_blank" href="https://www.zhihu.com/org/ma-yun-osc/"><i class='iconfont icon-zhihu'></i>
<span>Gitee</span>
</a></div>
<div class='item tel'>
<a>
<i class='iconfont icon-tel'></i>
<span>售前及售后使用咨询：400-606-0201</span>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
<div class='bottombar'>
<div class='ui container'>
<div class='ui d-flex d-flex-between'>
<div class='seven wide column partner d-flex'>
<div class='open-atom d-flex-center'>
<img class="logo-openatom mr-1" src="https://assets.gitee.com/assets/logo-openatom-d083391cc8a54e283529f3fc11cc38ca.svg" alt="Logo openatom" />
<a target="_blank" href="https://www.openatom.org/">开放原子开源基金会</a>
<div class='sub-title ml-1'>合作代码托管平台</div>
</div>
<div class='report-12377 d-flex-center ml-3'>
<img class="report-12377__logo mr-1" src="https://assets.gitee.com/assets/12377@2x-1aa42ed2d2256f82a61ecf57be1ec244.png" alt="12377@2x" />
<a target="_blank" href="https://12377.cn">违法和不良信息举报中心</a>
</div>
<div class='copyright ml-3'>
<a href="http://beian.miit.gov.cn/">粤ICP备12009483号</a>
</div>
</div>
<div class='nine wide column right aligned'>
<i class='icon world'></i>
<a href="/language/zh-CN">简 体</a>
/
<a href="/language/zh-TW">繁 體</a>
/
<a href="/language/en">English</a>
</div>
</div>
</div>
</div>
</footer>
<script>
  var officialEmail = $('#git-footer-email').text()
  $('#git-footer-main .icon-popup').popup({ position: 'bottom center' })
  $('#git-footer-email').text(officialEmail.replace('#', '@'))
  window.gon.popover_card_locale = {
    follow:"关注",
    unfollow:"已关注",
    gvp_title: "GVP - Gitee 最有价值开源项目",
    project: "项目",
    org: "开源组织",
    member: "",
    author: "作者",
    user_blocked: "该用户已被屏蔽或已注销",
    net_error: "网络错误",
    unknown_exception: "未知异常"
  }
  window.gon.select_message = {
    placeholder: "请输入个人空间地址或完整的邮箱地址"
  }
</script>
<script src="https://assets.gitee.com/webpacks/popover_card-a11f191f82a7fff418c3.bundle.js"></script>
<link rel="stylesheet" media="all" href="https://assets.gitee.com/webpacks/css/gitee_nps-69491f94919350b0258c.css" />
<script src="https://assets.gitee.com/webpacks/gitee_nps-9117089ddb56e2922e35.bundle.js"></script>


<div class='side-toolbar'>
<div class='button toolbar-help'>
<i class='iconfont icon-help'></i>
</div>
<div class='ui popup left center dark'>点此查找更多帮助</div>
<div class='toolbar-help-dialog'>
<div class='toolbar-dialog-header'>
<h3 class='toolbar-dialog-title'>搜索帮助</h3>
<form class="toolbar-help-search-form" action="/help/load_keywords_data" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
<div class='ui icon input fluid toolbar-help-search'>
<input name='keywords' placeholder='请输入产品名称或问题' type='text'>
<i class='icon search'></i>
</div>
</form>

<i class='iconfont icon-close toolbar-dialog-close-icon'></i>
</div>
<div class='toolbar-dialog-content'>
<div class='toolbar-help-hot-search'>
<div class='toolbar-roll'>
<a class="init active" title="Git 命令在线学习" href="https://oschina.gitee.io/learn-git-branching/?utm_source==gitee-help-widget"><i class='Blue icon icon-command iconfont'></i>
<span>Git 命令在线学习</span>
</a><a class="init " title="如何在 Gitee 导入 GitHub 仓库" href="https://gitee.com/help/articles/4261?utm_source==gitee-help-widget"><i class='icon icon-clipboard iconfont orange'></i>
<span>如何在 Gitee 导入 GitHub 仓库</span>
</a></div>
<div class='toolbar-list'>
<div class='toolbar-list-item'>
<a href="/help/articles/4114">Git 仓库基础操作</a>
</div>
<div class='toolbar-list-item'>
<a href="/help/articles/4166">企业版和社区版功能对比</a>
</div>
<div class='toolbar-list-item'>
<a href="/help/articles/4191">SSH 公钥设置</a>
</div>
<div class='toolbar-list-item'>
<a href="/help/articles/4194">如何处理代码冲突</a>
</div>
<div class='toolbar-list-item'>
<a href="/help/articles/4232">仓库体积过大，如何减小？</a>
</div>
<div class='toolbar-list-item'>
<a href="/help/articles/4279">如何找回被删除的仓库数据</a>
</div>
<div class='toolbar-list-item'>
<a href="/help/articles/4283">Gitee 产品配额说明</a>
</div>
<div class='toolbar-list-item'>
<a href="/help/articles/4284">GitHub仓库快速导入Gitee及同步更新</a>
</div>
<div class='toolbar-list-item'>
<a href="/help/articles/4328">什么是 Release（发行版）</a>
</div>
<div class='toolbar-list-item'>
<a href="/help/articles/4354">将 PHP 项目自动发布到 packagist.org</a>
</div>
</div>
</div>
<div class='toolbar-help-search-reseult'>
<div class='toolbar-help-flex-column'>
<div class='ui centered inline loader toolbar-help-loader'></div>
<div class='toolbar-list'></div>
<div class='toolbar-help-link-to-help'>
<a target="_blank" href="">查看更多搜索结果</a>
</div>
</div>
</div>
</div>
</div>
<script>
  var opt = { position: 'left center'};
  var $helpSideToolbar = $('.button.toolbar-help');
  var $toolbarRoll = $('.toolbar-roll');
  
  $(function() {
    if (false) {
      $helpSideToolbar.popup(opt).popup({lastResort:'left center'})
    } else {
      $helpSideToolbar.popup({lastResort:'left center'}).popup('show', opt);
      setTimeout(function() {
        $helpSideToolbar.popup('hide', opt);
      }, 3000);
    }
  
    if ($toolbarRoll.length) {
      setInterval(function() {
        var $nextActiveLink = $toolbarRoll.find('a.active').next();
        if (!$nextActiveLink.length) {
          $nextActiveLink = $toolbarRoll.find('a:first-child');
        }
        $nextActiveLink.attr('class', 'active').siblings().removeClass('active init');
      }, 5000);
    }
  })
</script>

<div class='popup button' id='home-comment'>
<i class='iconfont icon-comment'></i>
</div>
<div class='ui popup dark'>评论</div>
<div class='toolbar-appeal popup button'>
<i class='iconfont icon-report'></i>
</div>
<div class='ui popup dark'>
仓库举报
</div>
<script>
  $('.toolbar-appeal').popup({ position: 'left center' });
</script>

<div class='button gotop popup' id='gotop'>
<i class='iconfont icon-top'></i>
</div>
<div class='ui popup dark'>回到顶部</div>
</div>
<div class='form modal normal-modal tiny ui' id='unlanding-complaint-modal'>
<i class='iconfont icon-close close'></i>
<div class='header'>
登录提示
</div>
<div class='container actions'>
<div class='content'>
该操作需登录 Gitee 帐号，请先登录后再操作。
</div>
<div class='ui orange icon large button ok'>
立即登录
</div>
<div class='ui button blank cancel'>
没有帐号，去注册
</div>
</div>
</div>
<script>
  var $elm = $('.toolbar-appeal');
  
  $elm.on('click', function() {
    var modals = $("#unlanding-complaint-modal.normal-modal");
    if (modals.length > 1) {
      modals.eq(0).modal('show');
    } else {
      modals.modal('show');
    }
  })
  $("#unlanding-complaint-modal.normal-modal").modal({
    onDeny: function() {
      window.location.href = "/signup?from=";
    },
    onApprove: function() {
      window.location.href = "/login?from=";
    }
  })
</script>

<style>
  .side-toolbar .bdsharebuttonbox a {
    font-size: 24px;
    color: white !important;
    opacity: 0.9;
    margin: 6px 6px 0px 6px;
    background-image: none;
    text-indent: 0;
    height: auto;
    width: auto;
  }
</style>
<style>
  #udesk_btn a {
    margin: 0px 20px 167px 0px !important;
  }
</style>
<script>
  (function() {
    $('#project-user-message').popup({
      position: 'left center'
    });
  
  }).call(this);
</script>
<script>
  Gitee.initSideToolbar({
    hasComment: true,
    commentUrl: '/yyy0118/echarts-stat#tree_comm_title'
  })
</script>





<script>
  (function() {
    this.__gac = {
      domain: 'www.oschina.net'
    };
  
  }).call(this);
</script>

</body>
</html>
