/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        output: "export",
        images: {
            loader: 'imgix',
            path: '',
        },
    },
};

export default nextConfig;
