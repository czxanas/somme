// import metaImage from '@images/meta.png'; // Need to import it from the right path

export const defaultSeo: Seo = {
    title: 'Astro boilerplate',
    description: 'Boilerplate for Astro',
    social: {
        facebook: {
            title: 'Astro boilerplate',
            image: {
                // url: metaImage.src
            },
            description: 'Boilerplate for Astro'
        },
        twitter: {
            creator: 'Anas',
            title: 'Astro basic boilerplate',
            image: {
                // url: metaImage.src
            },
            description: 'Basic boilerplate for Astro'
        }
    },
    advanced: {
        // robots: ['noindex', 'nofollow'],
        // canonical: 'https://yourdomain.ca'
    }
};
