# Darkmode.js
![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg) [![Medium Badge](https://badgen.net/badge/icon/medium?icon=medium&label)](https://medium.com/@sandoche) [![Twitter: sandochee](https://img.shields.io/twitter/follow/sandochee.svg?style=social)](https://twitter.com/sandochee)

🌓 Add a Dark Mode / Night Mode to your website in a few seconds

This library uses the CSS `mix-blend-mode` to bring Dark Mode to any of your websites.
Just copy-paste the snippet and you will get a widget to turn on and off the Dark Mode. You can also use it without the widget programmatically. The plugin is lightweight, built-in Vanilla.
It also uses local storage by default, so your last setting will be remembered!

I have been inspired by this article: https://dev.wgao19.cc/2019-05-04__sun-moon-blending-mode/

## Features
- Widget appears automatically
- Saving users choice
- Automatically shows Darkmode if the OS prefered theme is dark (if the browsers support `prefers-color-scheme`)
- Can be used programmatically without widget

## ✨ Demo
Check out the demo in these websites: 
- https://darkmodejs.learn.uno
- https://tradivegan.com (with custom label)
- https://what.toeat.in (with custom label)
- https://www.kanbanote.com (without the widget, once logged in)
- https://www.sandoche.com (with custom label)
- https://pilab.dev (without the widget, with a custom toggle button)

## Wordpress plugins
If you are using Wordpress you may want to have a look at these plugins based on Darkmode.js:
- https://wordpress.org/plugins/blackout-darkmode-widget/
- https://wordpress.org/plugins/darkmode/

## 📖 How to use
Darkmode.js is very easy to use, just copy-paste the following code or use the npm package.

### 🚀 Easy way (using the JSDelivr CDN)
Just add this code to your HTML page:
```html
<script src="https://cdn.jsdelivr.net/npm/darkmode-js@1.5.7/lib/darkmode-js.min.js"></script>
<script>
  function addDarkmodeWidget() {
    new Darkmode().showWidget();
  }
  window.addEventListener('load', addDarkmodeWidget);
</script>
```

### 📦 Using NPM
```sh
npm install darkmode-js
```

Then add the following JavaScript code:
```javascript
import Darkmode from 'darkmode-js';

new Darkmode().showWidget();
```

## ⚙️ Options
Here are the option availables:
```javascript
const options = {
  bottom: '64px', // default: '32px'
  right: 'unset', // default: '32px'
  left: '32px', // default: 'unset'
  time: '0.5s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#fff',  // default: '#fff'
  buttonColorDark: '#100f2c',  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: false, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true // default: true
}

const darkmode = new Darkmode(options);
darkmode.showWidget();
```

## ▶️ Methods
If you don't want to show the widget and enable/disable Darkmode programatically you can use the method `toggle()`. You can also check if the Dark Mode is activated with the method `isActivated()`. See them in action in the following example:
```javascript
const darkmode =  new Darkmode();
darkmode.toggle();
console.log(darkmode.isActivated()) // will return true
```

## Override style
* A CSS class `darkmode--activated` is added to the body tag when the darkmode is activated. You can take advantage of it to override the style and have a custom style
* Use the class `darkmode-ignore` where you don't want to apply darkmode
* You can also add this style: `isolation: isolate;` in your CSS, this will also ignore the darkmode.
* It is also possible to revert the Dark Mode with this style `mix-blend-mode: difference;`

### Examples
```css
.darkmode--activated p, .darkmode--activated li {
  color: #000;
}

.button {
  isolation: isolate;
}

.darkmode--activated .logo {
  mix-blend-mode: difference;
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
This library uses the CSS `mix-blend-mode: difference;` to provide the Dark Mode.
It may not be compatible with all the browsers. Therefore the widget has been hidden in Internet Explorer and Edge.
This library also uses `prefers-color-scheme: dark` to automatically enable the Dark Mode if the OS prefered theme is dark.

Check the compatibility here: 
- https://caniuse.com/#search=mix-blend-mode
- https://caniuse.com/#search=prefers-color-scheme (to activate Dark Mode automatically)

## Development
* `yarn build` or `npm run build` - produces a production version of your library under the `lib` folder
* `yarn dev` or `npm run dev` - produces development version of your library and runs a watcher
* `yarn test` or `npm run test` - it runs the tests :)
* `yarn test:watch` or `npm run test:watch` - same as above but in a watch mode

## ⭐️ Show your support
Please ⭐️ this repository if this project helped you!

<a href="https://www.patreon.com/sandoche">[![patreon.png](https://c5.patreon.com/external/logo/become_a_patron_button.png)](https://www.patreon.com/sandoche)</a>

## 🍺 Buy me a beer 
If you like this project, feel free to donate:
* PayPal: https://www.paypal.me/kanbanote
* Bitcoin: 19JiNZ1LkMaz57tewqJaTg2hQWH4RgW4Yp
* Ethereum: 0xded81fa4624e05339924355fe3504ba9587d5419
* Monero: 43jqzMquW2q989UKSrB2YbeffhmJhbYb2Yxu289bv7pLRh4xVgMKj5yTd52iL6x1dvCYs9ERg5biHYxMjGkpSTs6S2jMyJn
* Motive: MOTIV-25T5-SD65-V7LJ-BBWRD (Get Motive Now: https://motive.network)
