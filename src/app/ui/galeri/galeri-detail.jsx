"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/button";
import Masonry from "react-masonry-css";
import { useRouter } from "next/navigation";

export const GaleriDetail = ({ galeri }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const handlePopup = (index) => {
        setSelectedImageIndex(index);
        setIsOpen(true);
    };

    const closePopupOnOutsideClick = (e) => {
        if (e.target.id === "popup-overlay") {
            setIsOpen(false);
            setSelectedImageIndex(null);
        }
    };

    const handleNext = () => {
        setSelectedImageIndex((prevIndex) =>
            prevIndex + 1 >= galeri.images.length ? 0 : prevIndex + 1
        );
    };

    const handlePrevious = () => {
        setSelectedImageIndex((prevIndex) =>
            prevIndex - 1 < 0 ? galeri.images.length - 1 : prevIndex - 1
        );
    };

    const breakpointColumns = {
        default: 4,
        1100: 3,
        768: 2,
        480: 2,
    };

    const selectedImage = selectedImageIndex !== null ? galeri.images[selectedImageIndex] : null;

    const router = useRouter();

    return (
        <section className="py-12">
            <article className="max-w-4xl mx-auto p-4 lg:p-6 bg-gray-100 shadow-lg border rounded-md">

                <div className="lg:mt-7 mt-4">
                    <Button onClick={() => router.back()} className="text-lg text-white bg-blue-secondary hover:bg-dark/80 mt-7 ">
                        Back
                    </Button>
                </div>

                <div className="my-7 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-blue-700 my-1">{galeri?.title}</h2>
                    <p className="text-sm lg:text-md">{galeri.description}</p>
                </div>

                <Masonry
                    breakpointCols={breakpointColumns}
                    className="flex gap-4"
                    columnClassName="masonry-column"
                >
                    {galeri.images.map((image, index) => (
                        <div
                            key={image.id}
                            className="relative mb-4"
                        >
                            <Image
                                src={image.imageUrl}
                                alt={`Image ${image.id}`}
                                width={300}
                                height={0}
                                className="w-full h-auto rounded-lg shadow-lg object-cover cursor-pointer hover:brightness-75 transition-all"
                                onClick={() => handlePopup(index)}
                                placeholder="blur"
                                blurDataURL="/placeholder.jpg"
                            />
                        </div>
                    ))}
                </Masonry>

                {isOpen && selectedImage && (
                    <div
                        id="popup-overlay"
                        className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-6 lg:px-0"
                        onClick={closePopupOnOutsideClick}
                    >
                        <div className="relative">
                            <Image
                                className="max-w-full max-h-[90vh]  rounded-md"
                                alt={selectedImage.alt || galeri.title}
                                src={selectedImage.imageUrl}
                                width={410}
                                height={0}
                                onClick={(e) => e.stopPropagation()}
                            />
                            <button
                                className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm hover:bg-red-700"
                                onClick={() => {
                                    setIsOpen(false);
                                    setSelectedImageIndex(null);
                                }}
                            >
                                X
                            </button>
                            <button
                                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white px-3 py-3 lg:px-2 lg:py-2 hover:bg-opacity-60 transition-all rounded-r-lg"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handlePrevious();
                                }}
                            >
                                &larr;
                            </button>
                            <button
                                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white px-3 py-3 lg:px-2 lg:py-2 hover:bg-opacity-60 transition-all rounded-l-lg"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleNext();
                                }}
                            >
                                &rarr;
                            </button>

                        </div>
                    </div>
                )}

            </article>
        </section>
    );
};
