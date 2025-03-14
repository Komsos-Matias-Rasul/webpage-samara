"use client"

import { Button } from "@heroui/button"
import Image from "next/image"
import { useRef, useState } from "react"

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const DUMMY_NEWS = [
  {
    title: "Zaitun Edisi Natal 2024",
    description: "Majalah digital Zaitun Edisi Natal 2024 telah terbit!\n Klik \"Zaitun\" untuk baca selengkapnya.",
    img: "/assets/zaitun-cover.jpg"
  },
  {
    title: "Audisi PSDC SAMARA",
    description: "PSDC SAMARA mengadakan audisi untuk anggota baru. Terbuka untuk posisi Soprano, Alto, Tenor, dan Bass.",
    img: "/assets/image-4.png"
  },
  {
    title: "Open Recruitment KOMSOS MATIAS",
    description: "Bagi Sahabat Matias yang punya minat di bidang fotografi, videografi, editing & design, website/socmed management dan bakat lain di ranah publikasi, Komsos St. Matias Rasul adalah pilihan yang tepat untuk Sahabat Matias menyalurkan minatnya sekaligus bersinergi dalam pelayanan bidang pewartaan Gereja kita tercinta ini!",
    img: "/assets/image-5.png"
  },
]

const UpdatesSection = () => {

  const [currentNews, setCurrentNews] = useState(0)
  const swiperRef = useRef()

  const slideNext = () => {
    swiperRef.current?.swiper.activeIndex != 2
      ? swiperRef.current?.swiper.slideNext() :
      swiperRef.current?.swiper.slideTo(0)
  }
  const slidePrev = () => {
    swiperRef.current?.swiper.activeIndex != 0
      ? swiperRef.current?.swiper.slidePrev() :
      swiperRef.current?.swiper.slideTo(2)
  }
  const handleSlideChange = () => {
    setCurrentNews(swiperRef.current?.swiper.activeIndex)
  }

  return (
    <>
      <div className="w-full bg-dark-primary text-white flex flex-col md:flex-row-reverse shadow-lg">
        <div className="w-full md:w-1/2">
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            ref={swiperRef}
            slidesPerView={1}
            onSlideChange={handleSlideChange}
          >
            {
              DUMMY_NEWS.map((item, i) => {
                return (
                  <SwiperSlide key={i}>
                    <div className="overflow-hidden">
                      <div className="relative h-[30vh] md:h-[50vh] max-h-[720px] w-full hover:scale-110 transition-transform bg-blue-primary/50">
                        <Image
                          src={String(item.img)}
                          alt={String(item.title)}
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 75vw"
                          fill />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>
        <div className="flex justify-end w-full md:w-1/2 max-w-[650px]">
          <div className="p-8 text-white flex flex-col justify-between">
            <div>
              <p className="font-heading text-blue-secondary mb-2 md:mb-4 font-bold tracking-[5px] md:tracking-[10px] text-sm md:text-base">BERITA PAROKI</p>
              <h1 className="font-heading text-2xl md:text-5xl font-bold line-clamp-2 mb-2 md:mb-4 leading-normal">{DUMMY_NEWS[currentNews].title}</h1>
              <p className="line-clamp-3 md:line-clamp-2 text-sm md:text-base">{DUMMY_NEWS[currentNews].description}</p>
            </div>
            <div className="flex gap-4 justify-center lg:justify-end pt-5">
              <Button onPress={slidePrev} disableRipple isIconOnly variant="ghost" radius="full" color="primary" size="sm">{"<"}</Button>
              <Button onPress={slideNext} disableRipple isIconOnly variant="ghost" radius="full" color="primary" size="sm">{">"}</Button>
            </div>
            {/* <Button as={Link} href="/zaitun" variant="ghost" radius="sm" className="text-white mt-8 data-[hover=true]:border-blue-secondary data-[hover=true]:!bg-blue-secondary">Kunjungi</Button> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default UpdatesSection