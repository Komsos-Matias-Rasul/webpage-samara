"use client";
import { Button } from "@heroui/button";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image"
import { useRouter } from "next/navigation";

export const BeritaDetail = ({ berita }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handlePopup = () => {
        setIsOpen(!isOpen);
    };

    const closePopupOnOutsideClick = (e) => {
        if (e.target.id === "popup-overlay") {
            setIsOpen(false);
        }
    };

    const router = useRouter();

    return (
        <section className="py-12">
            <article className="max-w-4xl mx-auto p-6 bg-gray-100 shadow-md border rounded-lg">
                <div className="lg:mt-7">
                    <Button onClick={() => router.back()} className="text-lg text-white bg-blue-secondary hover:bg-dark/80 mt-7 my-5">
                        Back
                    </Button>
                </div>
                <div
                    className="relative shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
                    onClick={handlePopup}
                >
                    <Image
                        className="w-full h-56 object-cover group-hover:brightness-75 transition-all duration-300"
                        alt={berita.title}
                        src={berita.imageUrl}
                        width={500}
                        height={200}
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-white font-bold text-lg">Ketuk untuk memperbesar</p>
                    </div>
                </div>

                {isOpen && (
                    <div
                        id="popup-overlay"
                        className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
                        onClick={closePopupOnOutsideClick}
                    >
                        <div className="relative">
                            <img
                                className="max-w-full max-h-[90vh] rounded-md"
                                alt={berita.title}
                                src={berita.imageUrl}
                                onClick={(e) => e.stopPropagation()}
                            />
                            <button
                                className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm hover:bg-red-700"
                                onClick={handlePopup}
                            >
                                X
                            </button>
                        </div>
                    </div>
                )}





                <div className="my-10">
                    <div className="text-lg text-blue-secondary font-bold my-1">BIDANG {berita.bidang}</div>
                    <h2 className="text-4xl font-bold text-blue-primary my-1">{berita?.title}</h2>
                    <b className="text-gray-400 my-1">{new Date(berita?.date).toLocaleDateString()}</b>
                    <p className="mt-9" dangerouslySetInnerHTML={{
                        __html: berita.isiBerita.replace(/\n/g, "<br />"),
                    }}>
                        {/* {berita?.isiBerita} */}
                    </p>
                </div>


            </article>
        </section>
    );
};
