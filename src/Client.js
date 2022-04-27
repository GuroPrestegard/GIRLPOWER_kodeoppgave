import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "ua8qq6rx", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  apiVersion: '2021-08-31', // use a UTC date string
  token: "", // or leave blank for unauthenticated usage
  useCdn: true
});
