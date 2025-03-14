import PropTypes from "prop-types";
import { Card, CardBody, CardFooter } from "@heroui/card";
import Link from "next/link";
import Image from "next/image";

const slugify = (text) => 
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') 
    .replace(/^-+|-+$/g, '');

    export const BeritaItem = ({ item }) => {
      return (
        <Link href={`/berita/${slugify(item.title)}`} className="flex w-full">
          <Card shadow="sm" key={item.id} className="border rounded-md shadow-lg cursor-pointer hover:bg-black/5">
            <CardBody className="overflow-visible ">
              <Image
                className="rounded-t-xl md:h-56 rounded hover:scale-105 cursor-pointer transition-all duration-300"
                layout="responsive"
                width={16}
                height={9}
                alt={item.title}
                src={item.imageUrl}
              />
            </CardBody>
            <CardFooter className="flex-col items-start text-left p-2 gap-2 md:p-3 md:gap-3 lg:p-3 lg:gap-1">
              <b className="text-sm md:text-md lg:text-lg text-blue-secondary">{item.bidang}</b>
              <b className="text-md md:text-lg lg:text-xl font-bold text-blue-primary hover:underline">{item.title}</b>
              <p className="text-sm lg:text-md my-2 ">{item?.isiBerita.substring(0, 85)}...</p>
              <b className="text-xs md:text-sm lg:text-sm text-gray-400">{new Date(item?.date).toLocaleDateString()}</b>
            </CardFooter>
          </Card>
        </Link>
      );
    };

BeritaItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    isiBerita: PropTypes.string.isRequired,
    bidang: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  }).isRequired
};
