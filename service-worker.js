/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

["public/fonts/fontawesome-webfont.eot", "32400f4e08932a94d8bfd2422702c446"], ["public/fonts/fontawesome-webfont.svg", "f775f9cca88e21d45bebe185b27c0e5b"], ["public/fonts/fontawesome-webfont.ttf", "a3de2170e4e9df77161ea5d3f31b2668"], ["public/fonts/fontawesome-webfont.woff", "a35720c2fed2c7f043bc7e4ffb45e073"], ["public/foundation-icons/foundation-icons.css", "1cd4a8fd4256f604413ba805f5c7630c"], ["public/foundation-icons/foundation-icons.eot", "92827f088b9eda87169bdc2b9888ce52"], ["public/foundation-icons/foundation-icons.svg", "17cb1ed2e8467b51bb26cf017daa9722"], ["public/foundation-icons/foundation-icons.ttf", "e20945d7c929279ef7a6f1db184a4470"], ["public/foundation-icons/foundation-icons.woff", "a188c2f768ce5033d3f5d47be7280e25"], ["public/foundation-icons/preview.html", "4ffb94dd362bb02b9e410087f53efd4b"], ["public/foundation-icons/svgs/fi-address-book.svg", "821f2d12850346e0e67269faced070c7"], ["public/foundation-icons/svgs/fi-alert.svg", "cf010c251a3d1ef2814f969e3890a778"], ["public/foundation-icons/svgs/fi-align-center.svg", "8f7d940ffef8c3fda72661b31b140695"], ["public/foundation-icons/svgs/fi-align-justify.svg", "2246c1e5c44b8f54fde1bd17acf74bc0"], ["public/foundation-icons/svgs/fi-align-left.svg", "386b4362db43eb3b9d0c055049b1c27f"], ["public/foundation-icons/svgs/fi-align-right.svg", "07b9ac8c77198bc4077c789aa91d9476"], ["public/foundation-icons/svgs/fi-anchor.svg", "20f9e049247fe2bc5ea8f5a548b7ac5e"], ["public/foundation-icons/svgs/fi-annotate.svg", "f134553e82afb62cf47f0ee3ed26b338"], ["public/foundation-icons/svgs/fi-archive.svg", "be96a73faee85daadbf264659e67f0aa"], ["public/foundation-icons/svgs/fi-arrow-down.svg", "e8b51045747742c87bc8f8cf947846ce"], ["public/foundation-icons/svgs/fi-arrow-left.svg", "93a3dbc6b9909edff61f342a66944e8b"], ["public/foundation-icons/svgs/fi-arrow-right.svg", "c8d1a382b543569536199fe8d8962e60"], ["public/foundation-icons/svgs/fi-arrow-up.svg", "e22c3469bca01a730814f2d7bf586e7d"], ["public/foundation-icons/svgs/fi-arrows-compress.svg", "39b1ed67bae8b6ec8b725f72d29c80f4"], ["public/foundation-icons/svgs/fi-arrows-expand.svg", "d07e78c5ef84a08694781219a11acc1f"], ["public/foundation-icons/svgs/fi-arrows-in.svg", "2f0304826580162875f5940db380f3a5"], ["public/foundation-icons/svgs/fi-arrows-out.svg", "6ad5c8f7d689f587e2b9ce19e0bdaf23"], ["public/foundation-icons/svgs/fi-asl.svg", "6c5f8026965a04f9c9a0febc635b8e95"], ["public/foundation-icons/svgs/fi-asterisk.svg", "23733184c76d3a1ff9f5a5e4f5675251"], ["public/foundation-icons/svgs/fi-at-sign.svg", "a9f9b797f4f8343053996cde6db3646b"], ["public/foundation-icons/svgs/fi-background-color.svg", "afd6dc158fa00510e4fc78765f140ec3"], ["public/foundation-icons/svgs/fi-battery-empty.svg", "e0d1877781e07bf9e2e79362ae65eb2c"], ["public/foundation-icons/svgs/fi-battery-full.svg", "c54323246bf19a741c528e18b363a4f3"], ["public/foundation-icons/svgs/fi-battery-half.svg", "5158e60dd7dc7bccedc9e142ef6cd0fa"], ["public/foundation-icons/svgs/fi-bitcoin-circle.svg", "285acbe53990cbe29db09e8822bc23c7"], ["public/foundation-icons/svgs/fi-bitcoin.svg", "c9d21b8e8dad0eb149f239d349b25f44"], ["public/foundation-icons/svgs/fi-blind.svg", "7a294cda0ae62b67975d85f6d031110c"], ["public/foundation-icons/svgs/fi-bluetooth.svg", "1b63e0d390f8c31830a0520ddfb5397b"], ["public/foundation-icons/svgs/fi-bold.svg", "68c98ba460233caffc448a2b4c3cb75e"], ["public/foundation-icons/svgs/fi-book-bookmark.svg", "249a757b65358894372fa2030607b3e3"], ["public/foundation-icons/svgs/fi-book.svg", "1265dd9c47f53abc06c3ea9baff494b7"], ["public/foundation-icons/svgs/fi-bookmark.svg", "25b610c190376b2974785572337b000f"], ["public/foundation-icons/svgs/fi-braille.svg", "626495bd5002d28f539ff9a5de194778"], ["public/foundation-icons/svgs/fi-burst-new.svg", "1e3f6ff4e40845f6882563d372e20b43"], ["public/foundation-icons/svgs/fi-burst-sale.svg", "8580024e60a1c6fabdf169c26e1d875b"], ["public/foundation-icons/svgs/fi-burst.svg", "4e92f1bb6bdbbfe74dbdbb3ac63f3e79"], ["public/foundation-icons/svgs/fi-calendar.svg", "3e9adb59f0716567ea96f7a121bb0404"], ["public/foundation-icons/svgs/fi-camera.svg", "ed111fa706725b72b8faeb91764cd73f"], ["public/foundation-icons/svgs/fi-check.svg", "c0d746faa503f99a29258dddbbb8c4e0"], ["public/foundation-icons/svgs/fi-checkbox.svg", "2e617f8822cb7b3c4bd7bfd5b3d920b7"], ["public/foundation-icons/svgs/fi-clipboard-notes.svg", "2832973b1caa6fd5658edde2e7883f1d"], ["public/foundation-icons/svgs/fi-clipboard-pencil.svg", "f41df58cc9182635b3a3cb6682c7ca62"], ["public/foundation-icons/svgs/fi-clipboard.svg", "1d12258f69b626786e7fb5ca11eecd8f"], ["public/foundation-icons/svgs/fi-clock.svg", "2647f7ca075b15dab29ac70f18910b09"], ["public/foundation-icons/svgs/fi-closed-caption.svg", "06495be3a1b2f99a0047fd15b9b22d49"], ["public/foundation-icons/svgs/fi-cloud.svg", "161a238ef5a54d6e13b07cdca51dacc5"], ["public/foundation-icons/svgs/fi-comment-minus.svg", "1270e7b63e9e7c5983a8eeab8a89d9b3"], ["public/foundation-icons/svgs/fi-comment-quotes.svg", "290f7470014254b6202309ff3376b31c"], ["public/foundation-icons/svgs/fi-comment-video.svg", "b8f5a892501d7e931afa4cc0a575da5e"], ["public/foundation-icons/svgs/fi-comment.svg", "9954f2a9b19bb3b983b4dbaa22f4cad5"], ["public/foundation-icons/svgs/fi-comments.svg", "378eb98eef396cf9e2267a6a002015c4"], ["public/foundation-icons/svgs/fi-compass.svg", "76383eeb3f3990a173040bd4022f8491"], ["public/foundation-icons/svgs/fi-contrast.svg", "b611d3ce84f08715452d53b3b030777b"], ["public/foundation-icons/svgs/fi-credit-card.svg", "f6724c35f22af820c78979d4d0562df3"], ["public/foundation-icons/svgs/fi-crop.svg", "2c0c02440c005f69dc04b1e95e7e9939"], ["public/foundation-icons/svgs/fi-crown.svg", "640f8524e71656856f7dfeb32398a712"], ["public/foundation-icons/svgs/fi-css3.svg", "12d739786fa3e62fad7e293e8cbad812"], ["public/foundation-icons/svgs/fi-database.svg", "b8c9ce6cbd3a4232518a25b40fcc3212"], ["public/foundation-icons/svgs/fi-die-five.svg", "3d55990c253a2f3b9218db8ffb6d59cc"], ["public/foundation-icons/svgs/fi-die-four.svg", "3fbcfb689fd9113aee20560457374565"], ["public/foundation-icons/svgs/fi-die-one.svg", "a269d119dea511911d7552d97024b60a"], ["public/foundation-icons/svgs/fi-die-six.svg", "4dd12d96362a5a6258398849ea2463cf"], ["public/foundation-icons/svgs/fi-die-three.svg", "082267a1a9160c8be91ba77d5f1def55"], ["public/foundation-icons/svgs/fi-die-two.svg", "4ed5ee8b410d831e7700fa0db2f0227a"], ["public/foundation-icons/svgs/fi-dislike.svg", "b418396a1b176666dede8fc0be9150c4"], ["public/foundation-icons/svgs/fi-dollar-bill.svg", "e0da67eab26583857b258f9b5245ce7e"], ["public/foundation-icons/svgs/fi-dollar.svg", "1ecc30261dbdbaf38ad32a1b79607dc7"], ["public/foundation-icons/svgs/fi-download.svg", "8db7a8eab6698c98960fcd6d4af5694c"], ["public/foundation-icons/svgs/fi-eject.svg", "3b9fe73ea58a004822a1622eb42fc283"], ["public/foundation-icons/svgs/fi-elevator.svg", "43d989dc1574b87d25df4c3c22cc169a"], ["public/foundation-icons/svgs/fi-euro.svg", "62c156a406e89baa00e048f63e1a08d2"], ["public/foundation-icons/svgs/fi-eye.svg", "f62f7f8318b3992a3564fb1e3420ad7a"], ["public/foundation-icons/svgs/fi-fast-forward.svg", "ddc4dbb184f94d436ed1ff920975263e"], ["public/foundation-icons/svgs/fi-female-symbol.svg", "6fc8adc597fee28c36bba01e61385f95"], ["public/foundation-icons/svgs/fi-female.svg", "da02041223360b9ffe82349f227315a7"], ["public/foundation-icons/svgs/fi-filter.svg", "7487fda0d5f4c663edb41ae3895df899"], ["public/foundation-icons/svgs/fi-first-aid.svg", "d286214c108def3d138b2339aaf9415e"], ["public/foundation-icons/svgs/fi-flag.svg", "410b44e4cc440660abf7a6fefa9b7eb2"], ["public/foundation-icons/svgs/fi-folder-add.svg", "08a969dedb2ef71ee5f014f5a0534209"], ["public/foundation-icons/svgs/fi-folder-lock.svg", "7d2db25eb83c8a481dd6e3f03fcd685e"], ["public/foundation-icons/svgs/fi-folder.svg", "f41e981f7cee48a6a9e602b2ae4a4e9a"], ["public/foundation-icons/svgs/fi-foot.svg", "db3f907d79fed9e339f28fdf353bdcc3"], ["public/foundation-icons/svgs/fi-foundation.svg", "2b142058d832e2265505df1c2afb96d1"], ["public/foundation-icons/svgs/fi-graph-bar.svg", "9e7fc4e90e0b88d38191085e224a53fb"], ["public/foundation-icons/svgs/fi-graph-horizontal.svg", "d831b1dd76c3803b1ce04b8eb807ef8a"], ["public/foundation-icons/svgs/fi-graph-pie.svg", "71b3105b1359f7ab6436007a9bc93f8a"], ["public/foundation-icons/svgs/fi-graph-trend.svg", "4833770e178c04368b3568b38d19f6d5"], ["public/foundation-icons/svgs/fi-guide-dog.svg", "2521e31165ad0100633879d0ce26879c"], ["public/foundation-icons/svgs/fi-hearing-aid.svg", "e9182a47371a661e1a0816e0b1f8e9c6"], ["public/foundation-icons/svgs/fi-heart.svg", "8a9670a6771896c403bf3d66f50e0aaa"], ["public/foundation-icons/svgs/fi-home.svg", "5310eda3d92c7179d2f56264e6104c40"], ["public/foundation-icons/svgs/fi-html5.svg", "edbacfdcd88ae3c1d3551056252f260e"], ["public/foundation-icons/svgs/fi-indent-less.svg", "2620f73aa3913e22422e3540732d7794"], ["public/foundation-icons/svgs/fi-indent-more.svg", "c68034e26961fac7127f6d49e8797027"], ["public/foundation-icons/svgs/fi-info.svg", "19209cc1d41fb9ca6a6df22ba74d78f8"], ["public/foundation-icons/svgs/fi-italic.svg", "7e618b9627ae4fe7edbb69e458250096"], ["public/foundation-icons/svgs/fi-key.svg", "7cea10a9275071713925de0b46f3f908"], ["public/foundation-icons/svgs/fi-laptop.svg", "ac657a6575aeb9fbf099d208122c10d7"], ["public/foundation-icons/svgs/fi-layout.svg", "59f00fb95da3b88682b84aae38fd6024"], ["public/foundation-icons/svgs/fi-lightbulb.svg", "489a30b8efb59d49afac5c41a1fc1b85"], ["public/foundation-icons/svgs/fi-like.svg", "68b1aee80c145b7acd5bece54291db87"], ["public/foundation-icons/svgs/fi-link.svg", "655fbc1f357d74f55e8b93f193bc7987"], ["public/foundation-icons/svgs/fi-list-bullet.svg", "252d8b82fba7878c4aa8cadd1a9ffd86"], ["public/foundation-icons/svgs/fi-list-number.svg", "bb08543778eba9901449d26e4584edae"], ["public/foundation-icons/svgs/fi-list-thumbnails.svg", "41d3781db3f52dc46539a28053497c47"], ["public/foundation-icons/svgs/fi-list.svg", "0091cd8e4b1fd0346aa534d0cc527025"], ["public/foundation-icons/svgs/fi-lock.svg", "1bfec03575929b673d6d62b3e68acbd0"], ["public/foundation-icons/svgs/fi-loop.svg", "da779e1eeeee712adc0ae67200a74784"], ["public/foundation-icons/svgs/fi-magnifying-glass.svg", "6876485b7149860c861e2d1a4fa5ea18"], ["public/foundation-icons/svgs/fi-mail.svg", "e9af65d5344b1149a1041550493d6345"], ["public/foundation-icons/svgs/fi-male-female.svg", "8652fca7e2307909438f43061d4187d6"], ["public/foundation-icons/svgs/fi-male-symbol.svg", "c9d754413f67589f2924664eb6e30230"], ["public/foundation-icons/svgs/fi-male.svg", "9b6059c0f1bf71048b3b124718ce7b4a"], ["public/foundation-icons/svgs/fi-map.svg", "a398cfc04e36b2603cc72b61f2db666e"], ["public/foundation-icons/svgs/fi-marker.svg", "0064c5eb6838adcfb1311c8c9df2a5d5"], ["public/foundation-icons/svgs/fi-megaphone.svg", "524851c93e0fb92d202c649f337368f4"], ["public/foundation-icons/svgs/fi-microphone.svg", "a2e0a42e410e207b3d49747355191b03"], ["public/foundation-icons/svgs/fi-minus-circle.svg", "26a62e062d8bfdc379ae480b3e38efd8"], ["public/foundation-icons/svgs/fi-minus.svg", "bff11801089d7f89414e4004c260c42c"], ["public/foundation-icons/svgs/fi-mobile-signal.svg", "640edd65c0e8c49440973699631082ca"], ["public/foundation-icons/svgs/fi-mobile.svg", "23d14ef962fd4b6ec3be5bc5dd7cf2b2"], ["public/foundation-icons/svgs/fi-monitor.svg", "0481d4709f52994fb14df3b4e3388f0b"], ["public/foundation-icons/svgs/fi-mountains.svg", "f4487d2c2c715445ecf573f5755110bf"], ["public/foundation-icons/svgs/fi-music.svg", "f46527ba66ce82c0f9b4cd53f7eef7ea"], ["public/foundation-icons/svgs/fi-next.svg", "149434f645a5a580a73137d5fb546792"], ["public/foundation-icons/svgs/fi-no-dogs.svg", "f7ce009c4792ed6b39ff0ccd2d9b8697"], ["public/foundation-icons/svgs/fi-no-smoking.svg", "421f9c2b7407825175a3ddc5628c61e5"], ["public/foundation-icons/svgs/fi-page-add.svg", "30430772578fa1646ee90fa9d1cbe9a2"], ["public/foundation-icons/svgs/fi-page-copy.svg", "dbd79928107a3bb44f20dc25c16c9bc2"], ["public/foundation-icons/svgs/fi-page-csv.svg", "a7100dcf51936b696b5c93441286b2a7"], ["public/foundation-icons/svgs/fi-page-delete.svg", "7cf993fd39206fe64b8dcada69052b24"], ["public/foundation-icons/svgs/fi-page-doc.svg", "53b2d634ce8c249939c435dec701edae"], ["public/foundation-icons/svgs/fi-page-edit.svg", "b6984cef8e652460f7a37c0e47b7650b"], ["public/foundation-icons/svgs/fi-page-export-csv.svg", "3ff429d92046af0d099b715d059e82e5"], ["public/foundation-icons/svgs/fi-page-export-doc.svg", "d631a903a689239fe1a00047a7a8b365"], ["public/foundation-icons/svgs/fi-page-export-pdf.svg", "baecfa5d3db288c3bf8426b699338efe"], ["public/foundation-icons/svgs/fi-page-export.svg", "a571cef3a161745e048f255352b19438"], ["public/foundation-icons/svgs/fi-page-filled.svg", "b33365b8ce07f685fc58a67e06b870c7"], ["public/foundation-icons/svgs/fi-page-multiple.svg", "f756f8e7de044053fd212853c34b0c85"], ["public/foundation-icons/svgs/fi-page-pdf.svg", "49000c105c043833320c29d4107028b8"], ["public/foundation-icons/svgs/fi-page-remove.svg", "21dcdb4312dea9eff3633533f001094c"], ["public/foundation-icons/svgs/fi-page-search.svg", "085ac05ec1a065758509c55a642ec756"], ["public/foundation-icons/svgs/fi-page.svg", "3b77f52f62352cfe4d6fad7906c09c29"], ["public/foundation-icons/svgs/fi-paint-bucket.svg", "ab64461d235bf0b7ece18890c5f51ce9"], ["public/foundation-icons/svgs/fi-paperclip.svg", "c678241f179dc82cf67cf518eefac59e"], ["public/foundation-icons/svgs/fi-pause.svg", "0e23d494aff658d3a3a68424c52c6a0f"], ["public/foundation-icons/svgs/fi-paw.svg", "f978fd187ea451fcd8e335cb152bf09e"], ["public/foundation-icons/svgs/fi-paypal.svg", "f35077c878529051791db26b4c923a00"], ["public/foundation-icons/svgs/fi-pencil.svg", "b44d06d6bf7f735fc78a7cfe7575de04"], ["public/foundation-icons/svgs/fi-photo.svg", "71e150ffda2211b8ec82629a63d5ab90"], ["public/foundation-icons/svgs/fi-play-circle.svg", "1c84d3395d51c3d31fe1d03fc64817e5"], ["public/foundation-icons/svgs/fi-play-video.svg", "ab79b43732eabd880d9e4ed90efae13c"], ["public/foundation-icons/svgs/fi-play.svg", "19fd0c5dea96984ec18ed851affb754b"], ["public/foundation-icons/svgs/fi-plus.svg", "f26e2148f190210ad07194346b4736d4"], ["public/foundation-icons/svgs/fi-pound.svg", "2566d1db8a712a37765c51976e731e58"], ["public/foundation-icons/svgs/fi-power.svg", "6c137dddd69e6b8f4fbd7743fd36d5b1"], ["public/foundation-icons/svgs/fi-previous.svg", "037143be668f32c8d8233056c012c4d4"], ["public/foundation-icons/svgs/fi-price-tag.svg", "006cc149d901831cc5eeae72477c1a14"], ["public/foundation-icons/svgs/fi-pricetag-multiple.svg", "3881001275d5a90594a396fd780786ca"], ["public/foundation-icons/svgs/fi-print.svg", "bf56806c337d375f07edee58f302d08f"], ["public/foundation-icons/svgs/fi-prohibited.svg", "d02a6c825a21848d1153fe43cf6df0da"], ["public/foundation-icons/svgs/fi-projection-screen.svg", "e46df67e4731857af84b10ad13b9c884"], ["public/foundation-icons/svgs/fi-puzzle.svg", "298c0ed76beca6991db7c28656324acf"], ["public/foundation-icons/svgs/fi-quote.svg", "c4f57286ec42159808312d7f13816e2c"], ["public/foundation-icons/svgs/fi-record.svg", "1a7c9fa6bc774a67c880cd9d80f5eb2b"], ["public/foundation-icons/svgs/fi-refresh.svg", "a84cf782d51fe310b69c3e033f5d522c"], ["public/foundation-icons/svgs/fi-results-demographics.svg", "3e6adf44482adcc1dd46836535ede106"], ["public/foundation-icons/svgs/fi-results.svg", "a72492133427a75351fb4dc738f11784"], ["public/foundation-icons/svgs/fi-rewind-ten.svg", "486a5bf2bc2d2ec42e6a2534a1e7105d"], ["public/foundation-icons/svgs/fi-rewind.svg", "b5a863b4ff3d449d82f3a6f7a849e5c5"], ["public/foundation-icons/svgs/fi-rss.svg", "d6f131d6bf0fc193bc7a1d9cc5545940"], ["public/foundation-icons/svgs/fi-safety-cone.svg", "cbc72a541092a21659cead765ad23d59"], ["public/foundation-icons/svgs/fi-save.svg", "5df532b0397c49eb68be320b6c2160bf"], ["public/foundation-icons/svgs/fi-share.svg", "ca95f30b12a9c9cdf5a391bc300600b1"], ["public/foundation-icons/svgs/fi-sheriff-badge.svg", "1e2808267eb08b99c056461aa80c3ee9"], ["public/foundation-icons/svgs/fi-shield.svg", "2ac502ac5817a4a62e45f350973a22f7"], ["public/foundation-icons/svgs/fi-shopping-bag.svg", "09a02323dd6e98a365c6cb35668c8b0e"], ["public/foundation-icons/svgs/fi-shopping-cart.svg", "bb4ca079b32fec857d94b9082bb0fe95"], ["public/foundation-icons/svgs/fi-shuffle.svg", "f3f2b990d3c6b9824ac6bc5aeadb1f23"], ["public/foundation-icons/svgs/fi-skull.svg", "8c1e156b57a21c0874ccf5af03b7598e"], ["public/foundation-icons/svgs/fi-social-500px.svg", "d127b25c89a0939990fe8d95a559c879"], ["public/foundation-icons/svgs/fi-social-adobe.svg", "10b7fef99c6f9e6e7c1b667ade7f6603"], ["public/foundation-icons/svgs/fi-social-amazon.svg", "f4f57b87368e2cdf86bd59e2627d68d3"], ["public/foundation-icons/svgs/fi-social-android.svg", "d2a0e3a0049bed0ff72df5b412fa57ab"], ["public/foundation-icons/svgs/fi-social-apple.svg", "a9527e28c375929d69d1510d28752041"], ["public/foundation-icons/svgs/fi-social-behance.svg", "a80ad84cb4d3028bc062f958d760e590"], ["public/foundation-icons/svgs/fi-social-bing.svg", "c348a49d2b2ccc59e8e4bbb28463e236"], ["public/foundation-icons/svgs/fi-social-blogger.svg", "5830c3b7ec12d716943ad753bbed5714"], ["public/foundation-icons/svgs/fi-social-delicious.svg", "f396c1099c8af7284d4241ff584b191d"], ["public/foundation-icons/svgs/fi-social-designer-news.svg", "ca8b1818e788dadc2391906ee4f37edb"], ["public/foundation-icons/svgs/fi-social-deviant-art.svg", "ab69ade0b5622e2d4d7488891adbde67"], ["public/foundation-icons/svgs/fi-social-digg.svg", "390f72c1a443d487a8507dceb265de76"], ["public/foundation-icons/svgs/fi-social-dribbble.svg", "a3bfe871b2ba9cb2706490574db5ff14"], ["public/foundation-icons/svgs/fi-social-drive.svg", "cbb9efbfa91f6424896c34e038ccf2ad"], ["public/foundation-icons/svgs/fi-social-dropbox.svg", "d7b2fe792013ca79ece5f1cbc4ac225c"], ["public/foundation-icons/svgs/fi-social-evernote.svg", "821014eff58d5dbb918a906f571e3b7a"], ["public/foundation-icons/svgs/fi-social-facebook.svg", "9a338d366eef62a8afbfbe277b2647c9"], ["public/foundation-icons/svgs/fi-social-flickr.svg", "894794ecfd212996dc24255f19322482"], ["public/foundation-icons/svgs/fi-social-forrst.svg", "fb766638b816f7dcdf590844db0c45bf"], ["public/foundation-icons/svgs/fi-social-foursquare.svg", "726803141f9034d0428f67685d3a6263"], ["public/foundation-icons/svgs/fi-social-game-center.svg", "b902e8aea2743838e0c7c80520ba3871"], ["public/foundation-icons/svgs/fi-social-github.svg", "b476025db52f675c1c3909e357029a57"], ["public/foundation-icons/svgs/fi-social-google-plus.svg", "42054ff5659ef8ce532aee1104d439d2"], ["public/foundation-icons/svgs/fi-social-hacker-news.svg", "5c8458c68a77cdd49f0b281d1ab0a63c"], ["public/foundation-icons/svgs/fi-social-hi5.svg", "8db8179d1bbe541628973b23465efaa3"], ["public/foundation-icons/svgs/fi-social-instagram.svg", "46658ec6dfe540119a3ca00eb0b0f34a"], ["public/foundation-icons/svgs/fi-social-joomla.svg", "8a776606b4e77c1fd783deb95b708d7e"], ["public/foundation-icons/svgs/fi-social-lastfm.svg", "6d32ff1b018dea992e705b2ad4c6d76d"], ["public/foundation-icons/svgs/fi-social-linkedin.svg", "3d3026e331024b9e03c05e8f2fb94e10"], ["public/foundation-icons/svgs/fi-social-medium.svg", "c7dd10d5187f38d06a477a342f61b992"], ["public/foundation-icons/svgs/fi-social-myspace.svg", "0ff5c85893fad3d7e1da61171398cac8"], ["public/foundation-icons/svgs/fi-social-orkut.svg", "2569c83e402c83a9df303cebdc6db06f"], ["public/foundation-icons/svgs/fi-social-path.svg", "3c953af51d8742aa0264d1beb7ea84b5"], ["public/foundation-icons/svgs/fi-social-picasa.svg", "0d37b376ef9102049edf08617cf04f4a"], ["public/foundation-icons/svgs/fi-social-pinterest.svg", "b196b288494b107ad5bc00b2046c0096"], ["public/foundation-icons/svgs/fi-social-rdio.svg", "e0e45671845c2e3badc5bffb76c7ab3d"], ["public/foundation-icons/svgs/fi-social-reddit.svg", "4ad6195c4f6fc6d45c46d18bd8477750"], ["public/foundation-icons/svgs/fi-social-skillshare.svg", "7b657d54d7e7dbd2bc4a6c639cf398ed"], ["public/foundation-icons/svgs/fi-social-skype.svg", "6269b7e9627c08bf9246f2a7f0ab6fd7"], ["public/foundation-icons/svgs/fi-social-smashing-mag.svg", "9f2cb7f638b9af54c795a3051e01bcbb"], ["public/foundation-icons/svgs/fi-social-snapchat.svg", "7c3ff80bc5c559001374af5b17871fdf"], ["public/foundation-icons/svgs/fi-social-spotify.svg", "c7483b503b15f1a0fab58d33ad367f1d"], ["public/foundation-icons/svgs/fi-social-squidoo.svg", "d2d90581dd92fad15f6c3626368cdd49"], ["public/foundation-icons/svgs/fi-social-stack-overflow.svg", "bfab9e4b722b55d942be03d4b6058b22"], ["public/foundation-icons/svgs/fi-social-steam.svg", "162365e6d003be6bc251a865f6741aac"], ["public/foundation-icons/svgs/fi-social-stumbleupon.svg", "8086a3ee3e701eae9c78736162f40b7f"], ["public/foundation-icons/svgs/fi-social-treehouse.svg", "0b33bbfa493d2e6ffa8ccbc6b5120703"], ["public/foundation-icons/svgs/fi-social-tumblr.svg", "4691c5c60fed0e8a97ad7b0f7aa1182a"], ["public/foundation-icons/svgs/fi-social-twitter.svg", "08b7dd110cd8667163f3fbf6a12232dc"], ["public/foundation-icons/svgs/fi-social-vimeo.svg", "f78e4434f8fd3555489070a2ce8324ef"], ["public/foundation-icons/svgs/fi-social-windows.svg", "c2c963314ff476fa30950d196b7562ab"], ["public/foundation-icons/svgs/fi-social-xbox.svg", "1b67cf8a943b8d5828bbac7e2b1d81b8"], ["public/foundation-icons/svgs/fi-social-yahoo.svg", "e8a7abbd67cbeefc66fbc7ed4cb2c5df"], ["public/foundation-icons/svgs/fi-social-yelp.svg", "f961b8bd2a372210024cdd71415a172e"], ["public/foundation-icons/svgs/fi-social-youtube.svg", "63ce2206605c9a76327ed7c344ce47ed"], ["public/foundation-icons/svgs/fi-social-zerply.svg", "5969ac2c80d2d812b52549d7ba0d2bcf"], ["public/foundation-icons/svgs/fi-social-zurb.svg", "706a53d681575fc0aaa2cd2a563cf3ae"], ["public/foundation-icons/svgs/fi-sound.svg", "28f3754aefeeff50d477429a778ae9c9"], ["public/foundation-icons/svgs/fi-star.svg", "62d6e12964cd603584139d00d44c4171"], ["public/foundation-icons/svgs/fi-stop.svg", "d8eff3f1e362f0c155d781c7df9bdbbe"], ["public/foundation-icons/svgs/fi-strikethrough.svg", "72804d35d9042b7b4746a89c6e4329ae"], ["public/foundation-icons/svgs/fi-subscript.svg", "52f070dd42e14a51d2483f924f4e554b"], ["public/foundation-icons/svgs/fi-superscript.svg", "1aba456028e427d404ef30be1b73ba34"], ["public/foundation-icons/svgs/fi-tablet-landscape.svg", "d5fb92812269d6a76da4a54b7458a1dd"], ["public/foundation-icons/svgs/fi-tablet-portrait.svg", "c94e9b39bb423c8a4d3f5d721bbfa310"], ["public/foundation-icons/svgs/fi-target-two.svg", "b825d1af99b56e4b850e41b99f672786"], ["public/foundation-icons/svgs/fi-target.svg", "de4d9d3df9315fe06c62ab43aba2b9d4"], ["public/foundation-icons/svgs/fi-telephone-accessible.svg", "78f32eec8c86d0616c0b3627c3807483"], ["public/foundation-icons/svgs/fi-telephone.svg", "81240427f6217a919f587fa4725518be"], ["public/foundation-icons/svgs/fi-text-color.svg", "1255e381bc53513a1e04cf9a6bd4186c"], ["public/foundation-icons/svgs/fi-thumbnails.svg", "a4b3d7290df3f99383801f69cf0a319f"], ["public/foundation-icons/svgs/fi-ticket.svg", "79767de58d6deb2c80441f711bd418bd"], ["public/foundation-icons/svgs/fi-torso-business.svg", "44f576cdac0b9efc2250da82a0018e2e"], ["public/foundation-icons/svgs/fi-torso-female.svg", "5572c21d50d9edba01527410d9bb4cfd"], ["public/foundation-icons/svgs/fi-torso.svg", "f67a3c8717a758b70243fa4ffb37248b"], ["public/foundation-icons/svgs/fi-torsos-all-female.svg", "c654f7a52433b94b9b4f00f2d92f463a"], ["public/foundation-icons/svgs/fi-torsos-all.svg", "929c17585700e78d562697fceb4508ae"], ["public/foundation-icons/svgs/fi-torsos-female-male.svg", "b1b6f77193d25c6959ec3dfa49fdfcb2"], ["public/foundation-icons/svgs/fi-torsos-male-female.svg", "db0cda272ec3e2c3e92a59cd3f47dfc0"], ["public/foundation-icons/svgs/fi-torsos.svg", "8b966fe6b1d66154fddd2655194009a3"], ["public/foundation-icons/svgs/fi-trash.svg", "1b2bb02d5f9921c9c963afd488544b87"], ["public/foundation-icons/svgs/fi-trees.svg", "1338da56ff409f5651fc6c3e11fa7a46"], ["public/foundation-icons/svgs/fi-trophy.svg", "87850ac3ce64e279ae11e19b63d28037"], ["public/foundation-icons/svgs/fi-underline.svg", "0068c599d3efdddb1baf4f3f1963b8a5"], ["public/foundation-icons/svgs/fi-universal-access.svg", "439a095df67a2da889d3b181aa5a49a4"], ["public/foundation-icons/svgs/fi-unlink.svg", "1884db69187036e821976d6505632019"], ["public/foundation-icons/svgs/fi-unlock.svg", "2ae7ce10e7843f9fe64a3c823ea8910d"], ["public/foundation-icons/svgs/fi-upload-cloud.svg", "c05c6686f1045a28d572ba73e3bef205"], ["public/foundation-icons/svgs/fi-upload.svg", "c37034584e13559a0a7a6dfa1127afc2"], ["public/foundation-icons/svgs/fi-usb.svg", "65a3a150c8cec044c3077c0acd52c9ba"], ["public/foundation-icons/svgs/fi-video.svg", "ce4d95b7a94a5a6ecb56ec241d07b872"], ["public/foundation-icons/svgs/fi-volume-none.svg", "5f4f3ac30886a22735d70079e355160e"], ["public/foundation-icons/svgs/fi-volume-strike.svg", "a00ab8c0299f656de504af1ef1eb9d29"], ["public/foundation-icons/svgs/fi-volume.svg", "c302a07012697c1ac04a604a7d3e31ee"], ["public/foundation-icons/svgs/fi-web.svg", "10751a6bfb6feee15c2f4541c0e1adca"], ["public/foundation-icons/svgs/fi-wheelchair.svg", "71b2275ae00ed5946439dbe5a49846b7"], ["public/foundation-icons/svgs/fi-widget.svg", "773d966b11317c7de27743377e9d79a8"], ["public/foundation-icons/svgs/fi-wrench.svg", "dfad1321ce8a5c267a5993742c412025"], ["public/foundation-icons/svgs/fi-x-circle.svg", "cdcc649d044dab576330f2e829974138"], ["public/foundation-icons/svgs/fi-x.svg", "b9d69db6197c176689ae592028bf8491"], ["public/foundation-icons/svgs/fi-yen.svg", "d78ef50a10638b4fbc05b6f406ca27b0"], ["public/foundation-icons/svgs/fi-zoom-in.svg", "9bdff7b9a701a20ade6e587825572f86"], ["public/foundation-icons/svgs/fi-zoom-out.svg", "11fcf0cb5be4b15c6fa5d0385918e6b3"], ["public/images/103.png", "a9cd8b589c95ea6d379db3515445ffb2"], ["public/images/92.png", "2fa741287eb6167e722af4e1b88cdb8a"], ["public/images/93.png", "425ed590654c20bc440d406da386b338"], ["public/images/Gear.png", "285f7a996228d1ff48a38447f8578d5d"], ["public/images/Shopping_Cart.png", "cdca493793c73896cd5bc789c82f448d"], ["public/images/Spinner.png", "ac73561c07ff66581309c61cd4969eb3"], ["public/images/accepted_cards.png", "229caa4383a7cb7544c16733267a9426"], ["public/images/bmodel1.jpg", "5c53573e111bc23515865badf70a90d0"], ["public/images/bmodel2.jpg", "a80b1d40bc16452c27cab1f63f58ebe6"], ["public/images/bmodel3.jpg", "5d4a10ff062931080d2a3b7963dc9886"], ["public/images/bounce.gif", "f865aaf77bb386019503ba99e4c45dae"], ["public/images/cart.png", "fd19a6255f4e6cbd643ecd2efbd3544b"], ["public/images/close.png", "dc3a2e1adc68e46716e48cec8aebbced"], ["public/images/hero.jpg", "df7bbc03d4ac1be686e67f3ef619944a"], ["public/images/hero1.jpg", "6cf498b4a6c2033fc29f13265c5dd666"], ["public/images/load.gif", "04836c514aea7d3d203112128be81fd6"], ["public/images/loader.gif", "855c4efe2d69a930234e104508c816df"], ["public/images/loader1.gif", "c3a18175aaadf880f94e3bb23d4bfc39"], ["public/images/loaders.gif", "3398f46e2bea75d855d3194c707c54ae"], ["public/images/loading.gif", "7b7a1e2e4984df8040a1513a49ebfea5"], ["public/images/model1.jpg", "62df5dea6266dce72586f29cb5d49b5d"], ["public/images/model2.jpg", "9ef8e695fd3b3f627872bd028045cc95"], ["public/images/model3.jpg", "ed2c05efe7f6c27de6868f5679947599"], ["public/images/p1.jpg", "7cf1dac73c2d905f761b513f4eb37006"], ["public/images/p2.jpg", "8731c2af83a84afdded79b622d39e59f"], ["public/images/p3.jpg", "9108b2685c8fa9613864dee021cb375c"], ["public/images/production.gif", "98b75ad8ff04c28973b6dc49aa758b92"], ["public/images/suit_jacket.jpg", "da26f37074e1ff129d55152eb24c6b76"], ["public/images/uload.gif", "7dfd4c8e30522dc8cdee55eb157c51bc"], ["public/javascripts/checkout.js", "20a8b7aaea9580d62e6c823efcf50c26"], ["public/javascripts/main.js", "0df944b4bd2efbcbebefcd4789caeb79"], ["public/javascripts/vendor/bootstrap.min.js", "4e671428a6c942ad04081073a2328faf"], ["public/javascripts/vendor/dropin.min.js", "25b35a39b62ecbaaceffedea1948c5f3"], ["public/javascripts/vendor/foundation.js", "50ff891cc87a8b07051cb1ff1387c791"], ["public/javascripts/vendor/foundation.min.js", "f0d74cb6b302ac5f878e5355adbb1845"], ["public/javascripts/vendor/jquery.js", "80ce670bfaac71f41dd180b8ed952055"], ["public/javascripts/vendor/what-input.js", "d2838cf3418f6056100cbbeff0833fdc"], ["public/stylesheets/bootstrap.min.css", "91e7759d86ef4f9e28da8363369b6ca8"], ["public/stylesheets/bootstrap1.min.css", "ec3bb52a00e176a7181d454dffaea219"], ["public/stylesheets/foundation.min.css", "1eef807a251d1ddfe329836044884634"], ["public/stylesheets/normalize.css", "1e9c0f3b13da66012ea079bc1509fef2"], ["public/stylesheets/style.css", "52b8cd934fa651766bce2da5babb8842"], ["public/stylesheets/styles.css", "6d876879553b8d806cba536adbf897bf"], ["public/stylesheets/user.css", "9700412550c0676f2101d1f31c0a4a61"], ["routes/ajax.js", "3be2fa5ac315f31f602300ceffb22848"], ["routes/checkout.js", "a0a9c391a49e0fe9c9a7aab109b6fbc7"], ["routes/index.js", "6249e4bd0fde760c56685c8bf6451c5c"], ["routes/users.js", "2237f4693c3e8721b3a087bc9eb20b3e"];

var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
  var url = new URL(originalUrl);
  if (url.pathname.slice(-1) === '/') {
    url.pathname += index;
  }
  return url.toString();
};

var cleanResponse = function (originalResponse) {
  // If this is not a redirected response, then we don't have to do anything.
  if (!originalResponse.redirected) {
    return Promise.resolve(originalResponse);
  }

  // Firefox 50 and below doesn't support the Response.body stream, so we may
  // need to read the entire body to memory as a Blob.
  var bodyPromise = 'body' in originalResponse ?
    Promise.resolve(originalResponse.body) :
    originalResponse.blob();

  return bodyPromise.then(function (body) {
    // new Response() is happy when passed either a stream or a Blob.
    return new Response(body, {
      headers: originalResponse.headers,
      status: originalResponse.status,
      statusText: originalResponse.statusText
    });
  });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
  dontCacheBustUrlsMatching) {
  // Create a new URL object to avoid modifying originalUrl.
  var url = new URL(originalUrl);

  // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
  // then add in the extra cache-busting URL parameter.
  if (!dontCacheBustUrlsMatching ||
    !(url.pathname.match(dontCacheBustUrlsMatching))) {
    url.search += (url.search ? '&' : '') +
      encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
  }

  return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
  // If the whitelist is empty, then consider all URLs to be whitelisted.
  if (whitelist.length === 0) {
    return true;
  }

  // Otherwise compare each path regex to the path of the URL passed in.
  var path = (new URL(absoluteUrlString)).pathname;
  return whitelist.some(function (whitelistedPathRegex) {
    return path.match(whitelistedPathRegex);
  });
};

var stripIgnoredUrlParameters = function (originalUrl,
  ignoreUrlParametersMatching) {
  var url = new URL(originalUrl);
  // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
  url.hash = '';

  url.search = url.search.slice(1) // Exclude initial '?'
    .split('&') // Split into an array of 'key=value' strings
    .map(function (kv) {
      return kv.split('='); // Split each 'key=value' string into a [key, value] array
    })
    .filter(function (kv) {
      return ignoreUrlParametersMatching.every(function (ignoredRegex) {
        return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
      });
    })
    .map(function (kv) {
      return kv.join('='); // Join each [key, value] array into a 'key=value' string
    })
    .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

  return url.toString();
};


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function (item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function (requests) {
    return requests.map(function (request) {
      return request.url;
    });
  }).then(function (urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return setOfCachedUrls(cache).then(function (cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, { credentials: 'same-origin' });
              return fetch(request).then(function (response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function (responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function () {

      // Force the SW to transition from installing -> active state
      return self.skipWaiting();

    })
  );
});

self.addEventListener('activate', function (event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.keys().then(function (existingRequests) {
        return Promise.all(
          existingRequests.map(function (existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function () {

      return self.clients.claim();

    })
  );
});


self.addEventListener('fetch', function (event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
      navigateFallback &&
      (event.request.mode === 'navigate') &&
      isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function (cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function (e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});