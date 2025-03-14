import PropTypes from "prop-types";
import { Card, CardBody, CardFooter } from "@heroui/card";
import Link from "next/link";
import Image from "next/image";

const slugify = (text) => 
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') 
    .replace(/^-+|-+$/g, '');

export const GaleriItem = ({ item }) => {
  return (
    <>
      <Card
        shadow="sm"
        key={item.id}
        className="border rounded-md shadow-lg"
      >
        <CardBody className="overflow-visible ">
          <Link href={`/galeri/${slugify(item.title)}`} className="flex w-full">
            <Image
              className="rounded-t-xl md:h-56 rounded hover:scale-105 cursor-pointer transition-all duration-300"
              layout="responsive"
              width={16}
              height={9}
              alt={item.title}
              src={item.imageUrl}
            />
          </Link>
        </CardBody>
        <CardFooter className="flex-col items-start text-left p-2 gap-2 md:p-3 md:gap-3 lg:p-3 lg:gap-1">
          <Link href={`/galeri/${slugify(item.title)}`}>
            <b className="text-md md:text-lg lg:text-xl font-bold text-blue-primary hover:underline">{item.title}</b>
          </Link>
          <p className="text-sm lg:text-md my-2 ">{item?.description.substring(0, 85)}...</p>
          <b className="text-xs md:text-sm lg:text-sm text-gray-400">{new Date(item?.date).toLocaleDateString()}</b>
        </CardFooter>
      </Card>
    </>
  );
};

GaleriItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired, 
    date: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        imageUrl: PropTypes.string.isRequired
      })
    ).isRequired 
  }).isRequired
};
