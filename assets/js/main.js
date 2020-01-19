// function LoadCSS(cssURL) {
//   // 'cssURL' is the stylesheet's URL, i.e. /css/styles.css
//   return new Promise(function (resolve, reject) {
//     var link = document.createElement('link');
//     link.rel = 'stylesheet';
//     link.href = cssURL;
//     document.head.appendChild(link);
//     link.onload = function () {
//       resolve();
//       console.log('CSS has loaded!');
//     };
//   });
// }

// LoadCSS('assets/css/dark.css').then(function () {
//   console.log('Another function is triggered after CSS had been loaded.');
//   return DoAfterCSSHasLoaded();
// });