/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
       
        images: {
            loader: 'imgix',
            path: '',
        },
    },
};

export default nextConfig;
