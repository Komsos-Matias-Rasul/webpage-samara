"use client";
import { Button } from "@heroui/button";
import Link from "next/link";
import Image from "next/image";
import { Card, CardBody } from "@heroui/card";

export const PengurusDetail = ({ pengurus }) => {
  return (
    <>
      <section className="py-12">
        <article className="max-w-4xl mx-auto p-6 bg-gray-100 shadow-md border rounded-lg">
          <div className="container mx-auto px-4 ">
            <div className="lg:mt-7 ">
              <Link href="/susunan-pengurus">
                <Button className="text-lg text-white bg-blue-secondary hover:bg-dark/80 mt-7 my-5">
                  Back
                </Button>
              </Link>
            </div>

            <h2 className=" text-3xl font-bold mb-6 text-center text-blue-primary">
              {pengurus.namaBidang}
            </h2>

            {pengurus.penguruss.map((pengurusItem, index) => (

              <div key={index} className="mb-8">
                <div className="">
                  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
                    {pengurusItem.koorBidang.map((koor, koorIndex) => (
                      <Card key={koorIndex} className="shadow" >
                        <CardBody>
                          <Image
                            src={pengurusItem.image}
                            alt={koor.namaKoorBidang}
                            width={150}
                            height={150}
                            layout="responsive"
                            className="mx-auto mb-2 w-25 h-25 object-cover rounded"
                          />
                          <h1 className="text-md text-center font-semibold">{koor.namaKoorBidang}</h1>
                          <hr className="my-2 border-t-2 border-gray-300" />
                          <p className="text-center text-gray-600">{koor.jabatanKoorBidang}</p>
                        </CardBody>
                      </Card>
                    ))}
                  </div>
                </div>

                {pengurusItem.seksi.map((seksi, seksiIndex) => (
                  <div key={seksiIndex} className="flex flex-col mt-2 sm:mt-4 md:mt-6 lg:mt-9">
                    <h3 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mt-4 text-center">
                      {seksi.namaSeksi}
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-4">
                      {seksi.seksiDetail.map((detail, detailIndex) => (
                        <Card key={detailIndex} className="shadow">
                          <CardBody>
                            <Image
                              src={pengurusItem.image}
                              alt=""
                              width={150}
                              height={150}
                              layout="responsive"
                              className="mx-auto mb-2 w-25 h-25 object-cover rounded"
                            />
                            <h1 className="text-md text-center font-semibold">{detail.nama}</h1>
                            <hr className="my-2 border-t-2 border-gray-300" />
                            <p className="text-center text-gray-600">{detail.jabatan}</p>
                          </CardBody>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}

              </div>
            ))}
          </div>
        </article>
      </section>
    </>
  );
};
