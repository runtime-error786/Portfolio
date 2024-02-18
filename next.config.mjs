// next.config.js

const nextConfig = {
    images: { unoptimized: true },
    exportPathMap: function () {
        return {
            '/': { page: '/' },
            '/Dash':{page: '/Dash'},
            // Add other pages if necessary
        };
    },
};

module.exports = nextConfig;
