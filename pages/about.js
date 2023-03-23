import Head from "next/head";
import Document from "./_document";

export default function About() {
    return (
        <>
            <Head>
                <meta property="og:title" content="ABout US" />
                <meta property="og:description" content="It is About Us Page" />
                <meta property="og:image" content="https://raw.githubusercontent.com/rajshah1601/ems/master/thumbnail.png" />
                <meta property="og:url" content="https://ems-c4rr.vercel.app/" />
                <meta property="og:type" content="website" />

                <meta name="keywords" content="Employee Management System, CRUD, NEXT JS, MONGO DB"></meta>

                <meta name="twitter:title" content="Employee Management System" />
                <meta name="twitter:description" content="It is About Us Page" />
                <meta name="twitter:image" content="https://raw.githubusercontent.com/rajshah1601/ems/master/thumbnail.png6" />
                <meta name="twitter:card" content="summary_large_image"></meta>
                <meta property="fb:app_id" content="332061129096483" />
            </Head>
            <h1>This is About Page</h1>

        </>
    );
}

