module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['camdan.me', 'img.camdan.me', 'cdn.camdan.me'],
  },
  async redirects() {
    return [
      {
        source: '/socials',
        destination: '/contact',
        permanent: false,
      },
      {
        source: '/donate',
        destination: 'https://donate.stripe.com/7sI14mgl29wV0ve3cd',
        permanent: false,
      },
      {
        source: '/gift',
        destination: 'https://buy.stripe.com/28o9ASecU10p1ziaEE',
        permanent: false,
      },
      {
        source: '/vcard',
        destination: 'https://cdn.camdan.me/logos/vcard.vcf',
        permanent: false,
      },
      {
        source: '/nfc',
        destination: '/vcard',
        permanent: false,
      },
    ];
  },
};
