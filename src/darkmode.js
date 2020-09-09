export const IS_BROWSER = typeof window !== 'undefined';

export default class Darkmode {
  constructor(options) {
    if (!IS_BROWSER) {
      return;
    }

    const defaultOptions = {
      bottom: '32px',
      right: '32px',
      left: 'unset',
      time: '0.3s',
      mixColor: '#fff',
      backgroundColor: '#fff',
      buttonColorDark: '#100f2c',
      buttonColorLight: '#fff',
      label: '',
      saveInCookies: true,
      autoMatchOsTheme: true
    };

    options = Object.assign({}, defaultOptions, options);

    const css = `
      .darkmode-layer {
        position: fixed;
        pointer-events: none;
        background: ${options.mixColor};
        transition: all ${options.time} ease;
        mix-blend-mode: difference;
      }

      .darkmode-layer--button {
        width: 2.9rem;
        height: 2.9rem;
        border-radius: 50%;
        right: ${options.right};
        bottom: ${options.bottom};
        left: ${options.left};
      }

      .darkmode-layer--simple {
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        transform: scale(1) !important;
      }

      .darkmode-layer--expanded {
        transform: scale(100);
        border-radius: 0;
      }

      .darkmode-layer--no-transition {
        transition: none;
      }

      .darkmode-toggle {
        background: ${options.buttonColorDark};
        width: 3rem;
        height: 3rem;
        position: fixed;
        border-radius: 50%;
        border:none;
        right: ${options.right};
        bottom: ${options.bottom};
        left: ${options.left};
        cursor: pointer;
        transition: all 0.5s ease;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .darkmode-toggle--white {
        background: ${options.buttonColorLight};
      }

      .darkmode-toggle--inactive {
        display: none;
      }

      .darkmode-background {
        background: ${options.backgroundColor};
        position: fixed;
        pointer-events: none;
        z-index: -10;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }

      img, .darkmode-ignore {
        isolation: isolate;
        display: inline-block;
      }

      @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
        .darkmode-toggle {display: none !important}
      }

      @supports (-ms-ime-align:auto), (-ms-accelerator:true) {
        .darkmode-toggle {display: none !important}
      }
    `;

    const layer = document.createElement('div');
    const button = document.createElement('button');
    const background = document.createElement('div');

    button.innerHTML = options.label;
    button.classList.add('darkmode-toggle--inactive');
    layer.classList.add('darkmode-layer');
    background.classList.add('darkmode-background');

    const darkmodeActivated =
      window.localStorage.getItem('darkmode') === 'true';
    const preferedThemeOs =
      options.autoMatchOsTheme &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    const darkmodeNeverActivatedByAction =
      window.localStorage.getItem('darkmode') === null;

    if (
      (darkmodeActivated === true && options.saveInCookies) ||
      (darkmodeNeverActivatedByAction && preferedThemeOs)
    ) {
      layer.classList.add(
        'darkmode-layer--expanded',
        'darkmode-layer--simple',
        'darkmode-layer--no-transition'
      );
      button.classList.add('darkmode-toggle--white');
      document.body.classList.add('darkmode--activated');
    }

    document.body.insertBefore(button, document.body.firstChild);
    document.body.insertBefore(layer, document.body.firstChild);
    document.body.insertBefore(background, document.body.firstChild);

    this.addStyle(css);

    this.button = button;
    this.layer = layer;
    this.saveInCookies = options.saveInCookies;
    this.time = options.time;
  }

  addStyle(css) {
    const linkElement = document.createElement('link');

    linkElement.setAttribute('rel', 'stylesheet');
    linkElement.setAttribute('type', 'text/css');
    linkElement.setAttribute(
      'href',
      'data:text/css;charset=UTF-8,' + encodeURIComponent(css)
    );
    document.head.appendChild(linkElement);
  }

  showWidget() {
    if (!IS_BROWSER) {
      return;
    }
    const button = this.button;
    const layer = this.layer;
    const time = parseFloat(this.time) * 1000;

    button.classList.add('darkmode-toggle');
    button.classList.remove('darkmode-toggle--inactive');
    button.setAttribute("aria-label", "Activate dark mode");
    button.setAttribute("aria-checked", "false");
    button.setAttribute("role", "checkbox");
    layer.classList.add('darkmode-layer--button');

    button.addEventListener('click', () => {
      const isDarkmode = this.isActivated();

      if (!isDarkmode) {
        layer.classList.add('darkmode-layer--expanded');
        button.setAttribute('disabled', true);
        setTimeout(() => {
          layer.classList.add('darkmode-layer--no-transition');
          layer.classList.add('darkmode-layer--simple');
          button.removeAttribute('disabled');
        }, time);
      } else {
        layer.classList.remove('darkmode-layer--simple');
        button.setAttribute('disabled', true);
        setTimeout(() => {
          layer.classList.remove('darkmode-layer--no-transition');
          layer.classList.remove('darkmode-layer--expanded');
          button.removeAttribute('disabled');
        }, 1);
      }

      button.classList.toggle('darkmode-toggle--white');
      document.body.classList.toggle('darkmode--activated');
      window.localStorage.setItem('darkmode', !isDarkmode);
    });
  }

  toggle() {
    if (!IS_BROWSER) {
      return;
    }
    const layer = this.layer;
    const isDarkmode = this.isActivated();
    const button = this.button;

    layer.classList.toggle('darkmode-layer--simple');
    document.body.classList.toggle('darkmode--activated');
    window.localStorage.setItem('darkmode', !isDarkmode);
    button.setAttribute("aria-label", "De-activate dark mode");
    button.setAttribute("aria-checked", "true");

  }

  isActivated() {
    if (!IS_BROWSER) {
      return null;
    }
    return document.body.classList.contains('darkmode--activated');
  }
}
