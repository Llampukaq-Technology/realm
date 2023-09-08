const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  
})
module.exports = () => {
  const plugins = [ withNextra];
  return plugins.reduce((acc, next) => next(acc), {
    reactStrictMode: true,
    images: {
      unoptimized: true
  },
    output: "export",
    swcMinify: true,
    reactStrictMode: false,
    typescript: {
      ignoreBuildErrors: true,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
  });
};


