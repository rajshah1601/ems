import Head from "next/head";


export default function About() {
    const metaData = {
        title: "About Us",
        description: "It is About Us Page",
        image: "https://embed-ssl.wistia.com/deliveries/613483271f9d18315e30e1369cc4b7d2b52fa947.jpg?image_crop_resized=640x382",
        url: "https://ems-c4rr.vercel.app/",
        type: "website",
        keywords: "Employee Management System, CRUD, NEXT JS, MONGO DB,About us",
        twitter: {
            title: "About Us",
            description: "It is About Us Page",
            image: "https://embed-ssl.wistia.com/deliveries/613483271f9d18315e30e1369cc4b7d2b52fa947.jpg?image_crop_resized=640x382",
            card: "summary_large_image"
        },
        fbAppId: "332061129096483"
    };
    return (
        <>
            <Head>
                <meta property="og:title" content={metaData.title} />
                <meta property="og:description" content={metaData.description} />
                <meta property="og:image" content={metaData.image} />
                <meta property="og:url" content={metaData.url} />
                <meta property="og:type" content={metaData.type} />
                <meta name="keywords" content={metaData.keywords}></meta>
                <meta name="twitter:title" content={metaData.twitter.title} />
                <meta name="twitter:description" content={metaData.twitter.description} />
                <meta name="twitter:image" content={metaData.twitter.image} />
                <meta name="twitter:card" content={metaData.twitter.card}></meta>
                <meta property="fb:app_id" content={metaData.fbAppId} />
            </Head>
            <h1>This is About Page</h1>

        </>
    );
}

