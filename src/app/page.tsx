import Image from "next/image";
import TopBar from "./components/TopBar";
import Header from "./components/Header";

export default function Home() {





    return (
        <>
            <TopBar />

            {/* Header */}
            <Header />

            {/* Hero */}
            <div className="block w-full bg-center bg-cover h-[60vh]"
                style={{
                    backgroundImage: `url("/Rectangle 7.png")`
                }}>
                {/* <div className="h-[60vh] bg-gradient-to-r from-cyan-500 to-blue-500 relative"> */}
                <div className="border w-1/2 absolute top-1/4 left-20 p-20 bg-green-400">
                    <h1 className="text-3xl font-bold">
                        NBK Bancassurance Intermediary Limited
                    </h1>
                </div>
            </div>

        </>
    );
}
