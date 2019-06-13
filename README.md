![Logo](logo.gif "Logo")

# Darkmode.js ![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)

🌓 Add darkmode / nightmode to your website in a few seconds

## Demo
Check out the demo in these websites: 
- (coming soon)

## How to use
Darkmode.js is very easy to use, just copy paste the following code or use the npm package.

### Important
Your background (even white) needs to be in another tag than body.

### Easy way (using the JSDelivr CDN)
Just add this code to your html page:
```html
<script src="https://cdn.jsdelivr.net/npm/darkmode/lib/darkmode.min.js"></script>
<script>
  new Darkmode().showWidget();
</script>
```

### Using NPM
```sh
npm install darkmode
```

Then add the following javascript code:
```javascript
import Darkmode from 'darkmode';

new Darkmode().showWidget();
```

### Programmatically (without the widget)
(coming soon)

## Options
Here are the option availables:
```javascript
var options = {
}

const darkmode = Darkmode(options);
darkmode.showWidget();
```

## Development

* `yarn build` or `npm run build` - produces production version of your library under the `lib` folder
* `yarn dev` or `npm run dev` - produces development version of your library and runs a watcher
* `yarn test` or `npm run test` - it runs the tests :)
* `yarn test:watch` or `npm run test:watch` - same as above but in a watch mode

## Buy me a beer 🍺
If you like this project, feel free to donate:
* Paypal: https://www.paypal.me/kanbanote
* Bitcoin: 19JiNZ1LkMaz57tewqJaTg2hQWH4RgW4Yp
* Ethereum: 0xded81fa4624e05339924355fe3504ba9587d5419
* Monero: 43jqzMquW2q989UKSrB2YbeffhmJhbYb2Yxu289bv7pLRh4xVgMKj5yTd52iL6x1dvCYs9ERg5biHYxMjGkpSTs6S2jMyJn
* Motive: MOTIV-25T5-SD65-V7LJ-BBWRD (Get Motive Now: https://motive.network)
