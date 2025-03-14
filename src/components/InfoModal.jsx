'use client'
import { Button } from "@heroui/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  } from "@heroui/modal";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const InfoModal = () => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <Modal isOpen={isOpen} onOpenChange={() => setIsOpen(false)} >
      <ModalContent>
        <ModalHeader className="flex items-center ">
          <div className=" relative h-8 aspect-[54/10]">
            <Image src="/static/logo_50.svg" alt="" fill className="object-cover"/>
          </div>
        </ModalHeader>
        <ModalBody>
          <h3 className="font-semibold text-xl">Informasi</h3>
          <p>Situs ini merupakan situs uji coba untuk pembaruan website Paroki Kosambi Baru. Halaman web resmi paroki dapat diakses melalui {" "}
            <Link href="https://parokikosambibaru.or.id"
              className="text-blue-500 underline"
              target="_blank">
              parokikosambibaru.or.id
            </Link>.
          </p>
        </ModalBody>
        <ModalFooter>
          <div className="flex justify-end">
            <Button className="bg-blue-secondary text-white" onClick={() => setIsOpen(false)}>Mengerti</Button>
          </div>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default InfoModal