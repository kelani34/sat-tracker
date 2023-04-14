/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // Adds CesiumJS to the webpack bundle
    config.module.rules.push({
      test: /\.(png|gif|jpg|jpeg|svg|xml|czml|json|woff|woff2|eot|ttf|otf)$/,
      use: ["url-loader"],
    });

    return config;
  },
};
