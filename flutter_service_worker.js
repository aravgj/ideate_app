'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"app-for-ideate/.git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
"app-for-ideate/.git/config": "cfeb40628bda09dc90f7d99c66c6c499",
"app-for-ideate/.git/description": "3c0013f7bfeb4cba729c6f6d3b9759dc",
"app-for-ideate/.git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
"app-for-ideate/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"app-for-ideate/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"app-for-ideate/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"app-for-ideate/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"app-for-ideate/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"app-for-ideate/.git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
"app-for-ideate/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"app-for-ideate/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"app-for-ideate/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"app-for-ideate/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"app-for-ideate/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"app-for-ideate/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"app-for-ideate/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"app-for-ideate/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"app-for-ideate/.git/index": "d7974ae4942c75bd569827bc39bc84c6",
"app-for-ideate/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"app-for-ideate/.git/logs/HEAD": "bb349b4df882595a5488a40b6620df22",
"app-for-ideate/.git/logs/refs/heads/gh-pages": "be102a746505bbba6de134fa29286c04",
"app-for-ideate/.git/logs/refs/heads/main": "5f0b5c8c4167d72cabdabc530445a8f7",
"app-for-ideate/.git/objects/6f/9509c88bed7080d496fc5e1d87a9315e30549d": "c02716d7aaed30ce1c5697a2fb40d317",
"app-for-ideate/.git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
"app-for-ideate/.git/objects/fd/1213efe2ba822aab4246e4d9964144293f6e56": "f16058397f5b4630660a02ae55594ce7",
"app-for-ideate/.git/refs/heads/gh-pages": "08e648215803c548b732dc0fcf76e388",
"app-for-ideate/.git/refs/heads/main": "08e648215803c548b732dc0fcf76e388",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "ca5c618bff131879c70a20367a74faab",
"assets/NOTICES": "0d55b531103f6c890fb5b9ab546bab08",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "d3eb4332cc986f40774a6d32cb89bff4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"ideate/.git/COMMIT_EDITMSG": "35c1f5f73559130eddbef34e50e22ad6",
"ideate/.git/config": "25df458df86a69b2ab1c1994cdcd7b83",
"ideate/.git/description": "7ce85429b55f4b0fbb0cb55754ba93b4",
"ideate/.git/FETCH_HEAD": "c9ad757cbc277e814ab05f220f621a90",
"ideate/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"ideate/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"ideate/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"ideate/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"ideate/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"ideate/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"ideate/.git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
"ideate/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"ideate/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"ideate/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"ideate/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"ideate/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"ideate/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"ideate/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"ideate/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"ideate/.git/index": "f7f9f12c52cf3737a3dee6e654c57332",
"ideate/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"ideate/.git/logs/HEAD": "c2a48b116a017c63ee1d411468d6fec6",
"ideate/.git/logs/refs/heads/main": "219868898a05f47fa962a8981876e771",
"ideate/.git/logs/refs/remotes/origin/HEAD": "fd24fd6ba5595f6027a465c97b1797d5",
"ideate/.git/logs/refs/remotes/origin/main": "9c7d5d240871bce9be52da1f09461d15",
"ideate/.git/objects/32/64b468dcb6f4c4c0a27a7d8654e954e0f3eae8": "229295e4968cdf0f6a15f377c47037df",
"ideate/.git/objects/64/8392926347e404254c6fbd5d1ce2b798c986f6": "5f27b6d343895b0873efb94717a3858f",
"ideate/.git/objects/6f/9509c88bed7080d496fc5e1d87a9315e30549d": "c02716d7aaed30ce1c5697a2fb40d317",
"ideate/.git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
"ideate/.git/refs/heads/main": "6b497c8e34a9553519a6da3e7764a90b",
"ideate/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"ideate/.git/refs/remotes/origin/main": "6b497c8e34a9553519a6da3e7764a90b",
"index.html": "3dd71c2a34fa304d54d1b04d0a66604f",
"/": "3dd71c2a34fa304d54d1b04d0a66604f",
"main.dart.js": "3ab70aeec5e8146f9fb82e03c6c47034",
"manifest.json": "c99842c134a9da56745658bbcecb1a83",
"version.json": "a257ae20c7984d7561a0c7e443c83f9b"};
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
