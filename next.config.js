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
