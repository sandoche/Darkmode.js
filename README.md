# Darkmode.js ![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)

🌓 Add darkmode / nightmode to your website in a few seconds

This library uses the css `mix-blend-mode` in order to bring Dark-mode to any of your website.
You can use this library to display a widget or just use it programmatically without widget!
It also uses localstorage by default so your last setting will be remembered !

I have been inspired by this article: https://dev.wgao19.cc/2019-05-04__sun-moon-blending-mode/

## Demo
Check out the demo in these websites: 
- https://darkmodejs.learn.uno
- https://www.sandoche.com

## How to use
Darkmode.js is very easy to use, just copy paste the following code or use the npm package.

### Easy way (using the JSDelivr CDN)
Just add this code to your html page:
```html
<script src="https://cdn.jsdelivr.net/npm/darkmode-js@1.2.5/lib/darkmode-js.min.js"></script>
<script>
  new Darkmode().showWidget();
</script>
```

### Using NPM
```sh
npm install darkmode-js
```

Then add the following javascript code:
```javascript
import Darkmode from 'darkmode-js';

new Darkmode().showWidget();
```

## Options
Here are the option availables:
```javascript
var options = {
  bottom: '64px', // default: '32px'
  right: 'unset', // default: '32px'
  left: '32px', // default: 'unset'
  time: '0.5s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  buttonColorDark: '#100f2c',  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: false, // default: true,
  label: '🌓' // default: ''
}

const darkmode = new Darkmode(options);
darkmode.showWidget();
```

## Methods
If you don't want to show the widget and enable/disable Darkmode programatically you can use the method `toggle()`. You can also check if the darkmode is activated with the method `isActivated()`. See them in action in the following action.
```javascript
const darkmode =  new Darkmode();
darkmode.toggle();
console.log(darkmode.isActivated()) // will return true
```

## Override style
* A CSS class `darkmode--activated` is added to the body tag when the darkmode is activated. You can take advantage of it to override the style and have a custom style
* Use the class `darkmode-ignore` where you don't want to apply darkmode

### Examples
```css
.darkmode--activated p, .darkmode--activated li {
  color: #000;
}
```
```html
<span class="darkmode-ignore">😬<span>
```

## Debug
If it does not work you may have to add the following code, but this will invalidate the classes to override.
```css
.darkmode-layer, .darkmode-toggle {
  z-index: 500;
}
```

## Browser compatibility
This library uses the CSS `mix-blend-mode: difference;` in order to provide the darkmode.
It may not be compatible with all the browsers.

Check the compatibility here: https://caniuse.com/#search=mix-blend-mode

## Development
* `yarn build` or `npm run build` - produces production version of your library under the `lib` folder
* `yarn dev` or `npm run dev` - produces development version of your library and runs a watcher
* `yarn test` or `npm run test` - it runs the tests :)
* `yarn test:watch` or `npm run test:watch` - same as above but in a watch mode

## Show your support
Please ⭐️ this repository if this project helped you!
<a href="https://www.patreon.com/getify">[![patreon.png](https://c5.patreon.com/external/logo/become_a_patron_button.png)](https://www.patreon.com/sandoche)</a>

## Buy me a beer 🍺
If you like this project, feel free to donate:
* Paypal: https://www.paypal.me/kanbanote
* Bitcoin: 19JiNZ1LkMaz57tewqJaTg2hQWH4RgW4Yp
* Ethereum: 0xded81fa4624e05339924355fe3504ba9587d5419
* Monero: 43jqzMquW2q989UKSrB2YbeffhmJhbYb2Yxu289bv7pLRh4xVgMKj5yTd52iL6x1dvCYs9ERg5biHYxMjGkpSTs6S2jMyJn
* Motive: MOTIV-25T5-SD65-V7LJ-BBWRD (Get Motive Now: https://motive.network)
