module.exports = {
    plugins: [
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "Water Tracker",
                short_name: "Water Tracker",
                start_url: "/",
                background_color: "#b0f7ff",
                theme_color: "#24daff",
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
        }
    ]
};