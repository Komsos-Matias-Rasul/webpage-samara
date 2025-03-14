import PropTypes from "prop-types";
import { Card, CardBody, CardFooter } from "@heroui/card";
import Link from "next/link";
import Image from "next/image";

const slugify = (text) => 
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') 
    .replace(/^-+|-+$/g, '');

export const PengurusItem = ({ item }) => {
    return (
        <Link href={`/susunan-pengurus/${slugify(item.namaBidang)}`}>
            <Card
                shadow="sm"
                key={item.id}
                className="border rounded-md shadow-lg cursor-pointer hover:bg-black/5"
            >
                <CardBody className="overflow-visible">
                    <Image
                        className="rounded-t-xl md:h-50 rounded"
                        width={300} 
                        height={290}
                        alt={item.namaBidang}
                        src={item.imageBidang}
                    />
                </CardBody>
                <hr className="border-gray-300" />
                <CardFooter className="flex-col items-center text-left">
                    <b className="text-sm md:text-md lg:text-lg text-blue-secondary">{item.namaBidang}</b>
                </CardFooter>
            </Card>
        </Link>
    );
};

PengurusItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        namaBidang: PropTypes.string.isRequired,
        imageBidang: PropTypes.string.isRequired,
        penguruss: PropTypes.arrayOf(
            PropTypes.shape({
                koorBidang: PropTypes.arrayOf(
                    PropTypes.shape({
                        namaKoorBidang: PropTypes.string.isRequired,
                        jabatanKoorBidang: PropTypes.string.isRequired
                    })
                ).isRequired,
                image: PropTypes.string.isRequired,
                seksi: PropTypes.arrayOf(
                    PropTypes.shape({
                        namaSeksi: PropTypes.string.isRequired,
                        seksiDetail: PropTypes.arrayOf(
                            PropTypes.shape({
                                nama: PropTypes.string.isRequired,
                                jabatan: PropTypes.string.isRequired
                            })
                        ).isRequired
                    })
                ).isRequired
            })
        ).isRequired
    }).isRequired
};