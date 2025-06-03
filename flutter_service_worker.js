'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "f9cbcff2de387bfda611987377bf705f",
"version.json": "0325640b78b9f97959290dc5ebb8b3ed",
"favicon.ico": "454b8c3507725a25528da9f85a7d05d0",
"index.html": "4a29c438c802e49047085a36853e39d1",
"/": "4a29c438c802e49047085a36853e39d1",
"web-app-manifest-192x192.png": "9f171af098abbaffc3ba400ebe86238c",
"apple-touch-icon.png": "5862d03f6b1c6a6fe569fc796ef6bb80",
"main.dart.js": "9f3a11091c546bbec44407dbf4cfe765",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"web-app-manifest-512x512.png": "7d12d4ce22e6617179b5770b81c8b110",
"site.webmanifest": "9090e674d41e265d5f03c180fe5f6721",
"favicon-96x96.png": "50665fe33ea06f2d0baeff737f9ff591",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"assets/AssetManifest.json": "8d367a348319eefd7f333e068d687a2e",
"assets/NOTICES": "cc910b5b8af226890685e7f98e529360",
"assets/FontManifest.json": "0009c36d1233a0c5f522f904dcf92b54",
"assets/AssetManifest.bin.json": "07ee02dd2a1f5d4571815aedf7a5dc3a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "32a15f7713f52ace70814eec9f775ec2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "cdfb02dea76c7baa84be0f84d2214927",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "0bfeb70404525a9ea5fa2790fa40baba",
"assets/fonts/Preahvihear-Regular.ttf": "b728ff1cdead5239b67535d2073baf70",
"assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/fonts/MaterialIcons-Regular.otf": "149e131bdb582d3c7fc944aa75a5d44c",
"assets/assets/github-original-wordmark.png": "a431dc5fa150e8e7eedb314623e614c6",
"assets/assets/figma.svg": "5fd52845a776200afd282c0488af6f2d",
"assets/assets/card.png": "5ddfc0ffd4ba7c2689bf8d9b96792d3a",
"assets/assets/gradient.png": "081fbde1b25d58e5ba058f2d70dc78ed",
"assets/assets/cursor.png": "667e3939c9b5e84f4d70355c83bbede6",
"assets/assets/job.lottie": "1486f486db8ac47c39d990539791a964",
"assets/assets/preview.png": "d49b59eea7a1c3b96ff9c14fb92c1c33",
"assets/assets/javascript.svg": "50b1f12e766978b8b947c986193a175b",
"assets/assets/college.lottie": "33659fc4b054944dd586d0d2f89653de",
"assets/assets/android.svg": "7a39338be818c009cf64f57367970bd3",
"assets/assets/taxi.png": "1882927789865abed4ea5154bb2423d6",
"assets/assets/sm2.png": "7ada74db53664725627fa25c653f14eb",
"assets/assets/firebase-plain.png": "8141bfd9f0783525e126de917368f754",
"assets/assets/firebase.svg": "6e071f37c085cca59f19eb6d737061d4",
"assets/assets/network.lottie": "811aea97803aa95d033835dc7f0bb1d6",
"assets/assets/ellipse.png": "629d35f54e9d4eddfd2f990384f8ce5a",
"assets/assets/sm3.png": "0e54385ae37e4570c13ef64acafe2f4d",
"assets/assets/sm1.png": "b488b94369571c1c63996336f3684e98",
"assets/assets/loading.json": "64d7ee03a0104d54efa9898c64df6cff",
"assets/assets/languages.png": "af9dcab91ad52fd6af03006b4e5f189e",
"assets/assets/flutter.svg": "df95a71c05164da3e239e9055dd12cad",
"assets/assets/java.png": "a3515672a5d44ab93c2551528efd0778",
"assets/assets/arrow.png": "85aa7969104cff7d4293a3d130e474ab",
"assets/assets/react-original-wordmark.png": "08ac609a8002f99d6a6fc3a21552edea",
"assets/assets/dart-original.png": "0d59bdbd681088758a2a41cb167c2077",
"assets/assets/college.json": "c7814ea515c17169420ea024e3b553db",
"assets/assets/java-original.png": "62f829f6894c2400373a30df3daa418e",
"assets/assets/appstore.png": "f48b7c1af07589b55061c2671ac545cd",
"assets/assets/work.json": "bbc6afa24b925c663a86cd3499db5140",
"assets/assets/we1.png": "7c562442a078d0bfc2fc8142db1c225f",
"assets/assets/web1.png": "ac957243aa82e873f5d4c9bc4c496bfd",
"assets/assets/Untitled%2520design.png": "2992d0ddf414c121bf910fcef7c76041",
"assets/assets/avatar.png": "23fed9e1e506c2efd76a58d7207817d0",
"assets/assets/we2.png": "603a4b7f3c95eb9dc641842971e53fcf",
"assets/assets/dart.svg": "9bdebce5ff1d66b398d9ffccd878a5e3",
"assets/assets/gitlab-original-wordmark.png": "9ef8a8c406701795027155ecde8966c6",
"assets/assets/androidstudio-original.png": "2c266538d4f3648dd05f4e459fe90f2f",
"assets/assets/green.png": "f425ba08d94bb364d6138ac13248e2da",
"assets/assets/we3.png": "609e7163d8b408f5bd0a7a733b200411",
"assets/assets/pro1.png": "fa17ae94746fe5f3fc476b45f940cf27",
"assets/assets/graphql-plain.png": "7e3eeabbe43132f067041f9595a100cc",
"assets/assets/Portfolio.png": "ed1144e742ea8c9f2992e3bb416368ff",
"assets/assets/git-plain-wordmark.png": "273c6abd5554f62a283820b7cabe2092",
"assets/assets/logo.png": "bcba502634f6a32b38f74da848bfd525",
"assets/assets/website.gif": "3111a9584ab119a5acc1628a9a8afd01",
"assets/assets/network.json": "ec501a5a9ab5fd114df93f7a84cfbaf2",
"assets/assets/promotion.json": "f267c4d1d7577623e9500dad5f669cde",
"assets/assets/promotion.lottie": "a7debdd20ca15191f9c2fdda64d57908",
"assets/assets/we4.png": "75d7d292df0ec194a6ac06be10f5d36e",
"assets/assets/Print%2520Form%2520_%2520UTTARAKHAND%2520MEDICAL%2520SERVICE%2520SELECTION%2520BOARD.pdf": "012989780df798f4b4ef85f8a68f1583",
"assets/assets/red.webp": "a860c5a22cff68e404fe8ac264fa0af0",
"assets/assets/flutter-original.png": "9d2008bebd846397bd22fd84438f87a4",
"assets/assets/react.svg": "3e675f19f64550d4bb2cee2bcc298072",
"assets/assets/figma-original.png": "765e102867e5a6b78dd85e272a1bef41",
"assets/assets/Line.png": "c39ce4953da21d33db7a018deda0b8f1",
"assets/assets/brown.png": "e85601158d082a536c8be52fc7e289ae",
"assets/assets/google_play.png": "e6d552c5deec92675d47f9b89d816ab8",
"assets/assets/hcu.png": "7fa9a35159c8af5177d564f5cc510a97",
"assets/assets/javascript-original.png": "8edb7287c5f4f4aa168da622d83a3915",
"assets/assets/Skills.png": "ea3abb684d4b5add9fb5b6150ab2ba51",
"assets/assets/app_store.png": "cfe3051a42badae5fed53f6202930576",
"assets/assets/android-plain.png": "e8cc960d39d3d029b23e62798c9c6977",
"assets/assets/vscode-original.png": "57b331df5f9ab931839c389d41b97188",
"assets/assets/graphql.svg": "257bc0f6191a275df7ea73eb8e16d71c",
"assets/assets/xcode-original.png": "058bb41d4b95379a725e8b95bc1b1739",
"assets/assets/dotted_line.png": "3f6d30a3bd0a1682989454d73618be7d",
"favicon.svg": "348f4b5cd74b1aca0d37449ececda2e6",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
