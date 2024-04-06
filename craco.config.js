module.export = {
  webpack: {
    configure: (config, { env, paths }) => {
      config.module.rules.unshift({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });
      return config;
    },
  },
};
