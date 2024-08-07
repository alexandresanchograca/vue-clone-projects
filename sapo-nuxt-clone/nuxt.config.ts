// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {
        enabled: true,
        timeline: {
            enabled: true,
        },
    },
    runtimeConfig: {
        newsApiSecretPath: "projects/174638299956/secrets/NEWS_API_KEY/versions/latest",
        newsApiKey: "",
    },
    components: [
        {
            path: "~/components",
            pathPrefix: false,
        },
    ],
    app: {
        head: {
            title: "ECO - Economia Online",
            script: [
                {
                    src: "https://kit.fontawesome.com/3210827b43.js",
                    crossorigin: "anonymous",
                    defer: true,
                },
            ],
            link: [
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap",
                },
            ],
        },
    },
});