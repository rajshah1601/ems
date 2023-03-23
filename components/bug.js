import Document from "@/pages/_document";

export default function Bug({ message }) {
    return (
        <>
            <Document
                title="Errors"
                description="Its All About Error"
                url="https://emsystemdemo.netlify.app/"

            />
            <div className="success container mx-auto">
                <div className="flex justify-center mx-auto border border-red-200 bg-red-400 w-3/6 text-gray-900 text-md my-4 py-2 text-center bg-opacity-5">
                    {message}
                </div>
            </div>
        </>

    )
}