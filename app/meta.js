import config from './config';
const configPath = config.CONFIG;
const root = config.APP_PATH;

const getAppleTouchIcon = size => ({
  rel: 'apple-touch-icon',
  sizes: size,
  href: `${root}/img/${configPath}-icons/apple-icon-${size}.png`,
});


export default function getMetadata(lang) {
  return {
    title: config.title,

    meta: [{
      'http-equiv': 'x-ua-compatible',
      content: 'ie=edge',
    }, {
      'http-equiv': 'Content-Language',
      content: lang,
    }, {
      name: 'charset',
      content: 'utf-8',
    }, {
      name: 'description',
      content: 'Löydä joukkoliikennetarjonta lähelle ja kauas.',
    }, {
      name: 'keywords',
      content: 'reitti,reitit,opas,reittiopas,joukkoliikenne',
    }, {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1 user-scalable=no, minimal-ui', // eslint-disable-line max-len
    }, {
      name: 'mobile-web-app-capable',
      content: 'yes',
    }, {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    }, {
      name: 'msapplication-config',
      content: `${root}/browserconfig.${configPath}.xml`,
    }, {
      name: 'msapplication-TileColor',
      content: `${config.colors.primary}`,
    }, {
      name: 'msapplication-TileImage',
      content: `${root}/img/${configPath}-icons/ms-icon-144x144.png`,
    }, {
      name: 'theme-color',
      content: `${config.colors.primary}`,
    }, {
      property: 'og:url',
      content: `${root}/`,
    }, {
      property: 'og:type',
      content: 'website',
    }, {
      property: 'og:title',
      content: config.socialMedia.title,
    }, {
      property: 'og:site_name',
      content: config.socialMedia.title,
    }, {
      property: 'og:description',
      content: config.socialMedia.description,
    }, {
      property: 'og:image',
      content: `${root}/img/${configPath}-icons/social-share.png`,
    }, {
      property: 'og:locale',
      content: 'fi_FI',
    }, {
      name: 'twitter:card',
      content: 'summary_large_image',
    }, {
      name: 'twitter:site',
      content: '@hsldevcom',
    }, {
      name: 'twitter:title',
      content: config.socialMedia.title,
    }, {
      name: 'twitter:description',
      content: config.socialMedia.description,
    }, {
      name: 'twitter:image',
      content: `${root}/img/${configPath}-icons/social-share.png`,
    }],

    link: [{
      rel: 'apple-touch-startup-image',
      href: `${root}/img/${configPath}-icons/ios-splash-screen.png`,
    },
    getAppleTouchIcon('57x57'),
    getAppleTouchIcon('60x60'),
    getAppleTouchIcon('72x72'),
    getAppleTouchIcon('76x76'),
    getAppleTouchIcon('114x114'),
    getAppleTouchIcon('120x120'),
    getAppleTouchIcon('144x144'),
    getAppleTouchIcon('152x152'),
    getAppleTouchIcon('180x180'),
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '192x192',
      href: `${root}/img/${configPath}-icons/android-icon-192x192.png`,
    }, {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: `${root}/img/${configPath}-icons/favicon-32x32.png`,
    }, {
      rel: 'icon',
      type: 'image/png',
      sizes: '96x96',
      href: `${root}/img/${configPath}-icons/favicon-96x96.png`,
    }, {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: `${root}/img/${configPath}-icons/favicon-16x16.png`,
    }, {
      rel: 'manifest',
      href: `${root}/manifest.${configPath}.json`,
    }],
  };
}
