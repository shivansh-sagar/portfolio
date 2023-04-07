import sanityClient from '@sanity/client'
import urlForImage from '@sanity/image-url'

// import myConfiguredSanityClient from '@sanity/client'
// import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: 'ej8kfklg',
    dataset:'production',
    apiVersion:'2022-02-01',
    useCdn: true,
    token: 'skGJbHQg1HcBtopDoQktGOToPaPu2VF6Usnx0gIi7LEXHlh8XZXVczsOK10B7vVvAqOmcJZQyNO8NTUBmSHOeFYlilAhholZbAdQ4FKp2ffPGzH41MSDZuv4qLj1D1mEdnjzSCDUen5Dfn9dh2Gf3Kr9NVVqeRxLBpYWngrXBj18Wx8uAPzJ',
});

const builder = urlForImage(client);

export const urlFor = (source) => builder.image(source);

