/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e89ea38ac33f0f5093608033328aaf85"
  },
  {
    "url": "annotations.html",
    "revision": "a5f97525e53e990437bff2a16dfd0625"
  },
  {
    "url": "assets/css/0.styles.a325861f.css",
    "revision": "b039d31404100ac11700bdd8f352875b"
  },
  {
    "url": "assets/img/err-422-swui.abcf1054.png",
    "revision": "abcf1054db171750b85d94d57a232aff"
  },
  {
    "url": "assets/img/errors-client.8c545526.png",
    "revision": "8c54552649e7349065bb8839351529d2"
  },
  {
    "url": "assets/img/errors-json-client.281534f3.png",
    "revision": "281534f3154c83e9673738f942eb454c"
  },
  {
    "url": "assets/img/errors-json-server.8d28ca48.png",
    "revision": "8d28ca48e78c7a8383b770ea1aa57774"
  },
  {
    "url": "assets/img/errors-server.c923a910.png",
    "revision": "c923a91036ddede850666c665b20cd7d"
  },
  {
    "url": "assets/img/jsdoc-method.9bfd2316.png",
    "revision": "9bfd2316c02dc6e8a92a536c362db346"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/SwaggerUI.faac8e72.png",
    "revision": "faac8e72ce413b51c78465adb9e6382b"
  },
  {
    "url": "assets/img/swui-alias.50b1bde7.png",
    "revision": "50b1bde755ca1bca4d14035e2deec587"
  },
  {
    "url": "assets/img/swui-endpoint-description.f12d2880.png",
    "revision": "f12d2880700088f56e11d0ef8525bb5c"
  },
  {
    "url": "assets/img/SwUi-Response.59b451a9.png",
    "revision": "59b451a91dcdb0ac2fc2c1d8ee6fdc51"
  },
  {
    "url": "assets/js/10.2f313838.js",
    "revision": "7ac0500cf1b88c03d7b02ed74cccbc29"
  },
  {
    "url": "assets/js/11.6cd6cdde.js",
    "revision": "8304f6d491d790bb79fa483b779866a9"
  },
  {
    "url": "assets/js/12.12396b42.js",
    "revision": "7f469a2f1a651ab235396d48a6414678"
  },
  {
    "url": "assets/js/13.8be139b4.js",
    "revision": "0dbd3f6863f2025a71c0f844d308af5a"
  },
  {
    "url": "assets/js/14.d6672a08.js",
    "revision": "cd91d28d83b8374fb54976652783624f"
  },
  {
    "url": "assets/js/15.502dc0ed.js",
    "revision": "2b35a77d7b9e41c624a54ea0926f2f1a"
  },
  {
    "url": "assets/js/16.e6f71bec.js",
    "revision": "45d7f6d435b9963fbf273532cd5519a7"
  },
  {
    "url": "assets/js/17.e5301d8e.js",
    "revision": "b63830666c5b56f84013afd963ff0167"
  },
  {
    "url": "assets/js/18.34cb7ccb.js",
    "revision": "f889011efe56fdbc29418e91835c3ccd"
  },
  {
    "url": "assets/js/19.d1da5c58.js",
    "revision": "c73190e0b5bd02438084051ac246f483"
  },
  {
    "url": "assets/js/2.4a7f1085.js",
    "revision": "fc4faad8bbfd16f7c4d07b7295718640"
  },
  {
    "url": "assets/js/20.71ddaf2a.js",
    "revision": "ace70d2ec765dfa7d80969b9024f4e72"
  },
  {
    "url": "assets/js/21.afed0d8f.js",
    "revision": "5d341906280251310caaabe6d6abff3f"
  },
  {
    "url": "assets/js/22.d8736a8f.js",
    "revision": "95e2204560263cab13d90b8b22bec6bf"
  },
  {
    "url": "assets/js/23.f19318f1.js",
    "revision": "d87b5def87a4a51f499f850fdef500fa"
  },
  {
    "url": "assets/js/24.83cf2032.js",
    "revision": "0a32512f8212e8b5592548a85f7e9219"
  },
  {
    "url": "assets/js/25.ca2126eb.js",
    "revision": "f4cd49e65fb20fb5c71825c526c4b58b"
  },
  {
    "url": "assets/js/3.21e1e3e1.js",
    "revision": "c0542a4b05b8add20db539e7daa0c4de"
  },
  {
    "url": "assets/js/4.aabeda1c.js",
    "revision": "8133ae75e86b29fd1a50aee70853d441"
  },
  {
    "url": "assets/js/5.f574af08.js",
    "revision": "22a2ac135087ca9fd1e689a0306f5340"
  },
  {
    "url": "assets/js/6.027b84f5.js",
    "revision": "d4b24a595c4c30ac49ed3525c9727a20"
  },
  {
    "url": "assets/js/7.957059e5.js",
    "revision": "a374e7769ade2b57c9c1df28f3604f74"
  },
  {
    "url": "assets/js/8.2e2c1755.js",
    "revision": "daf0ca9bb8261e5452431e5431700a6c"
  },
  {
    "url": "assets/js/9.ad4e0b2e.js",
    "revision": "ef5e56b8a7b486fefed625cd82d9b51c"
  },
  {
    "url": "assets/js/app.fcac324a.js",
    "revision": "5982fbf915f2eeeac5dbf60959a239ef"
  },
  {
    "url": "authentication.html",
    "revision": "bbb7aeca55f1d83accbd80aee9488385"
  },
  {
    "url": "decorators.html",
    "revision": "e6285586f600f9ab0b3566092286f852"
  },
  {
    "url": "descriptions.html",
    "revision": "8aff4492ae3e10702b1930e840e27993"
  },
  {
    "url": "di.html",
    "revision": "4f7813a0687a7f88eb6d09320de3a5d8"
  },
  {
    "url": "error-handling.html",
    "revision": "f3dda1a15af2357d89bcd9a326ee07f9"
  },
  {
    "url": "examples.html",
    "revision": "23c617a8a9f1469e403707c4ed94f3ad"
  },
  {
    "url": "faq.html",
    "revision": "05c81839113f55f2ca9aae7cb9e7ce8e"
  },
  {
    "url": "file-upload.html",
    "revision": "14f503f1b87d84c4f9baf22cfe6d1bcf"
  },
  {
    "url": "generating.html",
    "revision": "06ba35cc7cfd0768973251671c121992"
  },
  {
    "url": "getting-started.html",
    "revision": "f397ac6d923ea65d6e67d14850d94aa6"
  },
  {
    "url": "index.html",
    "revision": "052ba69a318ea4f1e10b16391bf8b7b2"
  },
  {
    "url": "introduction.html",
    "revision": "eaa5480cc75d8795ad91ac1570aecd9d"
  },
  {
    "url": "live-reloading.html",
    "revision": "195d294c9ea09f45392bdaef11ad0579"
  },
  {
    "url": "path-mapping.html",
    "revision": "9725fe9044059c9977e59ea66b3576a6"
  },
  {
    "url": "routes.html",
    "revision": "9fa4ce2749a8eb2144ac85a7240fa3de"
  },
  {
    "url": "templates.html",
    "revision": "3010c46f30acb21b807075612eddd195"
  },
  {
    "url": "upgrading.html",
    "revision": "058a966fd0a497bd9d7503449932c4ad"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
