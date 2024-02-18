// next.config.js

const nextConfig = {
    images: { unoptimized: true },
    // Use output: export configuration instead of next export command
    output: "export",
    exportPathMap: function () {
        return {
            '/': { page: '/' },
            '/Dash': { page: '/Dash' },
            // Add other pages if necessary
        };
    },
};

module.exports = nextConfig;
