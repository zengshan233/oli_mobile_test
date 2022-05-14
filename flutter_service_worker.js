'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "12e23269c98061de5db5305e4c9ca529",
"assets/assets/fonts/iconfont.ttf": "303222c0f9511b05a545b488c15a88ad",
"assets/assets/i18n/en.json": "d0a3131f12cc4ddc12da2e026068a56d",
"assets/assets/i18n/zh.json": "f639ce62912bdc3c4185c0d9b10e6fc3",
"assets/assets/images/card_default.png": "2bde559a48487be5c48325492ace9aab",
"assets/assets/images/card_master.png": "7b7905f96f07938de98686c0ecdc68bc",
"assets/assets/images/card_visa.png": "05422e6cd3ee75e2268155d0fd44260c",
"assets/assets/images/card_yl.png": "7485a2b60bafdde3b1da511f60485901",
"assets/assets/images/card_yy.png": "9c4037404eff8f35f843721c8d1620b4",
"assets/assets/images/creator_bg.webp": "db5384f5e1c0d8b78d9c75ccfbe0a39c",
"assets/assets/images/customer.png": "daf4f571f6228e9e82599eed3faae368",
"assets/assets/images/customer_s.png": "c20324f9d257b61f99a62528236456ee",
"assets/assets/images/default_avatar.jpg": "f26281467764d71ebe6c42cf36808df2",
"assets/assets/images/eye.png": "e3988d5ab3c5aaead8906abd688fc3f3",
"assets/assets/images/full.png": "1d87cc926007d62eacadf51e925cc7d8",
"assets/assets/images/icons/0.png": "5a9d3263b27d5c75d2806dcb0f08d547",
"assets/assets/images/icons/1.png": "ba177047886bf951938e22720e282c38",
"assets/assets/images/icons/2.png": "c075b762ea179105d301e1020a6a864b",
"assets/assets/images/icons/add.png": "e761fc49d6fd8546b32fd83b065db86c",
"assets/assets/images/icons/agree.png": "2dd0a1218d3d62ad208f981dbb73b9cb",
"assets/assets/images/icons/arrow-down.png": "085981d96ea12ef43b2ba30cdc8eeca2",
"assets/assets/images/icons/arrow-up.png": "4c7e7b3e7680c06d46a90c00c8c2850f",
"assets/assets/images/icons/author-follow.png": "d150d3e78e6974dba8b5e353796dbdfd",
"assets/assets/images/icons/bear.png": "214821867c4087838d4104c743f0bb6d",
"assets/assets/images/icons/bull.png": "1b45f5039361b03cb381c2269b287732",
"assets/assets/images/icons/calendar.png": "b61f6efb821abf7afbe5de76ea8b99ae",
"assets/assets/images/icons/calendar_menu.png": "bb99f42d972769f60900f002568b4e54",
"assets/assets/images/icons/camera.png": "8116c5eea1cdb09fd20630959bcbe50f",
"assets/assets/images/icons/card.png": "7b708dd0dca77075a2ace7dec9c6fa3e",
"assets/assets/images/icons/chat_icon_add.png": "2de8fc37f23de861464fef83d0ad38ab",
"assets/assets/images/icons/chevron.png": "22083945005061b2b970d891ed139d14",
"assets/assets/images/icons/circle.png": "8422d36702767eba709c85a4143746fe",
"assets/assets/images/icons/close.png": "064ec74445686285ea4c670a3ad21133",
"assets/assets/images/icons/collect.png": "78649743e3ac343ff72a3ef2ee1f4919",
"assets/assets/images/icons/collect_menu.png": "1b8943f1b45e38091d4a5516810bd3eb",
"assets/assets/images/icons/comment_like.png": "7b39be59d5536c520378566218b20e3f",
"assets/assets/images/icons/down_arrow.png": "afd14e833b77b78bb0fdbcbb5b0f9349",
"assets/assets/images/icons/follow.png": "e155b3c61adfe948fc41ac27b276b95e",
"assets/assets/images/icons/grey_arrow.png": "3b8ec05e01935148b2f6bdb4ff981f05",
"assets/assets/images/icons/heart.png": "7835b9a9a0acdec1e29f39f9a80518fc",
"assets/assets/images/icons/history.png": "dd9e9a6b5588908c1b671cde9187b903",
"assets/assets/images/icons/home_tab.png": "18ea8efcde02853f70f81415cdf89b9f",
"assets/assets/images/icons/home_tab_on.png": "05d4e3b7716aaf86e254949b9cafedf4",
"assets/assets/images/icons/icon_chat_camera.png": "a22d00b2bb2a0d6963b009d48be11c2d",
"assets/assets/images/icons/icon_chat_cancelsending.png": "51326b56c5d6212a4d03ccc0dc8200d8",
"assets/assets/images/icons/icon_chat_close.png": "c4db7913e222d9b02b4d513daac301c7",
"assets/assets/images/icons/icon_chat_face.png": "1539c7fa2e1ef6c8612a0be9b26a04ff",
"assets/assets/images/icons/icon_chat_file.png": "b9d100596ec7c6d66dd9a94f8b0033ee",
"assets/assets/images/icons/icon_chat_image.png": "3a418264216228ada513f8d102397e69",
"assets/assets/images/icons/icon_chat_keyboard.png": "e63c3a138f112d630605dabc6c2b7120",
"assets/assets/images/icons/icon_chat_more.png": "60b645f64a6adcacf0d6603cbdfa3e87",
"assets/assets/images/icons/icon_chat_video.png": "6f587113da213b1e36f58019df5db56e",
"assets/assets/images/icons/icon_chat_voice.png": "14701985a5eedadd201ed3d20821d0f1",
"assets/assets/images/icons/icon_chat_voice_play.png": "93af842b11b8677b50adafb5d224a4e3",
"assets/assets/images/icons/invest.png": "1eae9252d2f1e4ea3c6990b2f5513a43",
"assets/assets/images/icons/left_arrow.png": "25a327299f778c8422cb908022a3c771",
"assets/assets/images/icons/like.png": "ab07aa845a5287cbfe268dc8bbd1c063",
"assets/assets/images/icons/menu.png": "947bc4b2168974eb6f44749e639c5912",
"assets/assets/images/icons/meta.png": "7626cb51eec518bb82471535124754b2",
"assets/assets/images/icons/mine_analysis.png": "1055cc42925ece5a93b4a0c100424161",
"assets/assets/images/icons/mine_history.png": "5a1ac1723e0da7f47a83f2f02d9e02f9",
"assets/assets/images/icons/mine_like.png": "f6daa760ab138be5f1620a8881dedf71",
"assets/assets/images/icons/mine_service.png": "3d3117bbbbb7c33b30b1523f7cfe5110",
"assets/assets/images/icons/mine_setting.png": "df2ed799fae7378309af0041e57d0fa6",
"assets/assets/images/icons/mine_starred.png": "840f6f07c928a75e0dcdadf281e1dd66",
"assets/assets/images/icons/mine_subscribe.png": "60ae2f54b8d0154bb857a2297be08207",
"assets/assets/images/icons/mine_tab.png": "639ba4e9f857b5c774e583bb27ff487c",
"assets/assets/images/icons/mine_tab_on.png": "b4d4f3b89ed70e049e1aa44d0515b352",
"assets/assets/images/icons/more.png": "da3efbc31f802584f2a3a54dd42fd21a",
"assets/assets/images/icons/news.png": "0c3636c93b156b4f8055d027675a8998",
"assets/assets/images/icons/news_tab.png": "6845cbcdef60a3d70d4fcac0b7916229",
"assets/assets/images/icons/picked.png": "badd0539f270943de79071f0a016e7cf",
"assets/assets/images/icons/play.png": "ed0e84e3d5c3f3579fe0e53142b9b0f6",
"assets/assets/images/icons/point.png": "59c6cfde274d756e5a8b05771cb085ae",
"assets/assets/images/icons/profile.png": "08d1d4e45cd334c280129cefec3204ed",
"assets/assets/images/icons/radius_close.png": "5e221ff2a3e55393ff2606279254ff56",
"assets/assets/images/icons/rate_off.png": "6c960b93e07a122e9c88ad6a8305fd29",
"assets/assets/images/icons/rate_on.png": "ff06fba5b07f24c519d9644c2cbabf0d",
"assets/assets/images/icons/research_tab.png": "213249247ff950f61cb94ae87cedc893",
"assets/assets/images/icons/research_tab_on.png": "b907c9c245d98246e385b36ce1063a60",
"assets/assets/images/icons/right_arrow.png": "e8150e7dde898e09faf53c5bce9e18e4",
"assets/assets/images/icons/send.png": "988f20a320ee56f9916c9a91d3d46b39",
"assets/assets/images/icons/set.png": "28d6e9970ebcdc924946b81bffe4b225",
"assets/assets/images/icons/sight_camera_switch.png": "579bfebcfc3cf25d692e891252bde8fc",
"assets/assets/images/icons/sight_message_icon.png": "b7025958de49657425b4c1e2a1f2e797",
"assets/assets/images/icons/sight_preview_cancel.png": "b165e3188f7ff4cdb1b444b4ff360c7f",
"assets/assets/images/icons/sight_preview_done.png": "a4c198c53bc19475dc9578d37e4e8c23",
"assets/assets/images/icons/sight_top_toolbar_close.png": "6ff9a9b020f3d864333899f21a9b80c9",
"assets/assets/images/icons/star.png": "0a892f5dca6ca0c241e2fca1a2ebb598",
"assets/assets/images/icons/stock_calendar.png": "9874345c71ad2c3f8a97a3616d35cc54",
"assets/assets/images/icons/stock_menu.png": "8304ba4c8dfd23b8f93fffb6c35ba963",
"assets/assets/images/icons/stock_tab.png": "8724bc830cb1cb20bee84f9eaf2eae66",
"assets/assets/images/icons/stock_tab_1.png": "9f242b91e67faaced5f1ff6c58bcb353",
"assets/assets/images/icons/stock_tab_2.png": "0efda4862e876a07a7a5bfa04b7df578",
"assets/assets/images/icons/stock_tab_3.png": "45a46213abb9b367b52c7ac225db7e2a",
"assets/assets/images/icons/stock_tab_4.png": "b0486358bfb4b64444c374f1c86b1221",
"assets/assets/images/icons/stock_tab_5.png": "dfa3b956afec0654fb6c6cc6b4692d4d",
"assets/assets/images/icons/stock_tab_on.png": "261d84c45a3c9dbae2c42e5f5b8298fb",
"assets/assets/images/icons/stock_us.png": "5acacd2314ac8941c9ef9da69fd2b672",
"assets/assets/images/icons/success.png": "7bed186f5f642ed531916f2e33c387aa",
"assets/assets/images/icons/toTop.png": "caa7a631ad0474f29f364b8fed6f633b",
"assets/assets/images/icons/trend.png": "45165702e79de6efc3f1ad2cd00d8532",
"assets/assets/images/icons/unlogin.png": "60109c5c6da894610ad25c1d2415bf44",
"assets/assets/images/icons/unlogin_profile.png": "3f86f87478cdedf5cb3836c7532bbe12",
"assets/assets/images/icons/unpicked.png": "c7f28199d47f92e0d6851282d762bb05",
"assets/assets/images/icons/video_tab.png": "ab136a346ef716226428706ae48a935c",
"assets/assets/images/icons/video_tab_on.png": "8fee059c6b58b7f8ecade9fd60efb3ab",
"assets/assets/images/icons/viewMore.png": "31de71fcfe5dc3444b6f243e3d4cbd3e",
"assets/assets/images/icons/voice_recoder.gif": "e86081db77fa67519f8846721d061255",
"assets/assets/images/icons/watchlist.png": "9723999a25fe8b9c129aa8888ae008ae",
"assets/assets/images/icon_chat_close.png": "c4db7913e222d9b02b4d513daac301c7",
"assets/assets/images/icon_nodata.png": "017c7a93e12d32a25c74b3bfd8b32d6d",
"assets/assets/images/icon_search.png": "dc4ae515c1002b2981ee37ebc4e4d473",
"assets/assets/images/icon_service.png": "58afa46754cfd70bb594c040d4119394",
"assets/assets/images/indicate.png": "8705bca92ddfa0a625941d30f69c6e19",
"assets/assets/images/launch_new.jpg": "e53e598808b5fe0569e3281ca6c489d9",
"assets/assets/images/launch_old.jpg": "71c0dc6e977702e3a1e6f6f70297acbe",
"assets/assets/images/left_arrow.png": "a93e463f6f4ec3e00e6ecc56a848dc6a",
"assets/assets/images/like.png": "9a47e3ddd3ed3fdf187a007f04321916",
"assets/assets/images/logo.png": "657d9793ba71c20e1f0663ce465f96c3",
"assets/assets/images/slide.png": "8627f2370d375291f8ce9abfa50d2ff9",
"assets/assets/images/stock_bear_rate.png": "b05ddcc00d97f6e034edec14deba865c",
"assets/assets/images/svg/error.svg": "31dbde60f5622e38adf66724a7a28c2b",
"assets/assets/images/svg/loading.svg": "ca9bee109ce7c6808ded95a0d239b048",
"assets/assets/images/svg/stock/arrowLine.svg": "ff5771eb562d036f5ed3d5a6cf2efd5c",
"assets/assets/images/svg/stock/arrowSegment.svg": "b5d7216bc9301aac0ecc95f08f076736",
"assets/assets/images/svg/stock/candle.svg": "29b2fdd504a4faeb7d8bc8067fb7c32d",
"assets/assets/images/svg/stock/crooked3.svg": "7b77d384ef31f1c12aa7d7ebfa48f580",
"assets/assets/images/svg/stock/crooked5.svg": "6e9d94ff212a2e5c4362d3ada3fd6c13",
"assets/assets/images/svg/stock/elliott3.svg": "2f1d814eb7ddb2f1fae265b9d48c9826",
"assets/assets/images/svg/stock/elliott5.svg": "605e302c3a61122f7a8d1ff443cad5af",
"assets/assets/images/svg/stock/fallingWedge.svg": "dbb8ff6d77f02f6940b6ec3cdfa578a9",
"assets/assets/images/svg/stock/full.svg": "d01afeacf348b42ff16b2e8fc6b0213d",
"assets/assets/images/svg/stock/hidden.svg": "3d8689f26d4f73021cccd91125bdd63a",
"assets/assets/images/svg/stock/horizontalLine.svg": "aa9e8f185de1e37fc737dbb243a5dd5e",
"assets/assets/images/svg/stock/indicator.svg": "9cfff0b7162d8e4bfc4ad6381f262fdd",
"assets/assets/images/svg/stock/line.svg": "aa568b2934c9ce4e16092f508d492e46",
"assets/assets/images/svg/stock/lineSegment.svg": "f962222ee21690f4ada9482e450865dd",
"assets/assets/images/svg/stock/ohlc.svg": "b0b4c626a4215b1db36bf3542c9d9950",
"assets/assets/images/svg/stock/ray.svg": "99d00da055df86a486e811485d998d2e",
"assets/assets/images/svg/stock/reverse.svg": "ccd2a0c9ce280ebe4c8a89bbdae4c7a9",
"assets/assets/images/svg/stock/risingWedge.svg": "63db8fa5b5269738d35aa134cbfdbc75",
"assets/assets/images/svg/stock/segment.svg": "3202eb415a4c012551334d46cd513474",
"assets/assets/images/svg/stock/verticalLine.svg": "7dfd3a6f3e3d524e7720290d340ed19c",
"assets/assets/images/trail.png": "6021da828885a46deb207dde744ffd3d",
"assets/assets/images/update_bg_app_top.png": "55c14a0a8dc55c20f5eb49443c248348",
"assets/assets/images/view.png": "c1a00b1708cfbcfbd06bc0775ae47c8d",
"assets/assets/images/voicePlay.gif": "dd294da0a2531c5557a2fb3a83fe32c2",
"assets/assets/images/voicePlayRight.gif": "c8193c46ce813b4099025517a3b41eba",
"assets/assets/lottie/loading.json": "1b89a689976d795e488504d5b7668266",
"assets/FontManifest.json": "91a8d354b558323850a3048e219b3632",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "e9f0f6c1d459dd23430f9e84bdfe0430",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/flutter_base/assets/images/filter_load.png": "6fbe3539c4047105dd29837cb04b0e16",
"assets/packages/flutter_base/assets/images/icon_nodata.png": "017c7a93e12d32a25c74b3bfd8b32d6d",
"assets/packages/flutter_base/assets/images/loading.svg": "39d3016b091a2badc324d4edaa578121",
"assets/packages/flutter_base/assets/lottie/loading.json": "1b89a689976d795e488504d5b7668266",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_update_dialog/assets/update_bg_app_top.png": "55c14a0a8dc55c20f5eb49443c248348",
"assets/packages/flutter_update_dialog/assets/update_ic_close.png": "cef2924be0e145da7ab1eba16043decc",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.ico": "2182e2e05573ae2def3f003de20d1379",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/icon-29.png": "2ef25a3c6749e882f148a41d2750d876",
"icons/icon-60.png": "90cb0ea6d697f3cf93c9cbbdbee52dd9",
"icons/icon-83.png": "19870ac8cd94d83330d3d2c72de1163b",
"index.html": "83a35c006e94d41334e89fb3fc0f7e07",
"/": "83a35c006e94d41334e89fb3fc0f7e07",
"main.dart.js": "5d5da7ca3dd850c9580fb9d49a723ee4",
"manifest.json": "6832edb5e4be94645c6dd56e59200dee",
"pdf.js": "e1a3ddf0caee90195637a8aa9cbb2e34",
"version.json": "e2e8e6c44a89fae0e228c5fd33dca749"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
