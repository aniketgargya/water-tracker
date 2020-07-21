module.exports = {
    plugins: [
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "Water Tracker",
                short_name: "Water",
                start_url: "/",
                background_color: "#ffffff",
                theme_color: "#000000",
                display: "standalone",
                icon: "src/images/icon.png",
                theme_color_in_head: false,
            }
        },
        {
            resolve: "gatsby-plugin-offline",
            options: {
                workboxConfig: {
                    globPatterns: ['**/*']
                }
            }
        },
        {
            resolve: "gatsby-plugin-react-head"
        }
    ]
};