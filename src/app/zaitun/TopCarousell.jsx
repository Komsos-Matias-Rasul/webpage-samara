'use client'

import { Button } from "@heroui/button"
import {useState, useRef, useEffect} from "react"
import { SwiperSlide, Swiper } from "swiper/react"
import { Autoplay } from 'swiper/modules'
import Image from "next/image"

import 'swiper/css'
import Link from "next/link"
import { getTopArticles } from "@/actions/articles"

const getTopArticle = async (callback) => {
  const articleData = await getTopArticles()
  callback(articleData)
}

const TopCarousell = () => {
  const [topArticles, setTopArticles] = useState([])
  useEffect(()=> {
    getTopArticle(setTopArticles)
  }, [])
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
    <div className="relative">
      <div className="z-10 flex items-center absolute right-0 top-0 gap-2 mt-4 mr-4">
        <Button onPress={slidePrev} isIconOnly variant="solid" radius="full" className="bg-xmas-primary text-xmas-neutral">{"<"}</Button>
        <Button onPress={slideNext} isIconOnly variant="solid" radius="full" className="bg-xmas-primary text-xmas-neutral">{">"}</Button>
      </div>

      {
        topArticles.length > 0 ?
        (
          <div className="w-full relative z-0">
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
                topArticles.map((item, i) => {
                  return (
                    <SwiperSlide key={i}>
                      <div className="relative">
                        <div className="relative w-full aspect-square bg-xmas-tertiary/25">
                          <Image
                            src={item.thumb_img}
                            alt=""
                            fill
                            className="object-cover brightness-75"
                            />
                        </div >
                        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-b from-xmas-primary/0 to-xmas-primary/75" />
                        <Link href={`/zaitun/${item.slug}`} className="absolute bottom-4 left-4 text-3xl md:text-4xl lg:text-6xl text-xmas-neutral font-ibara font-bold hover:underline">{item.title}</Link>
                      </div>
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>
          </div>
        ):
        (
          <div className="w-full relative z-0">
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
                [0, 1, 2].map((i) => {
                  return (
                    <SwiperSlide key={i}>
                      <div className="relative w-full aspect-square bg-xmas-tertiary/25" />
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>
          </div>
        )
      }

      {
        topArticles.length > 0 ?
        (
          <div className="hidden md:grid grid-cols-3 gap-4 mt-4">
            {
              topArticles.map((item, i) => {
                return (
                  <div key={i} className={
                    (currentNews === i ? "-translate-y-3 " : "translate-y-0 ") +
                    " flex flex-col gap-2 transition-transform duration-400"
                    }>
                    <Link href={`/zaitun/${item.slug}`}>
                      <div className={
                        (currentNews === i ? "shadow-lg " : "shadow-none ") +
                        " relative w-full aspect-square bg-xmas-tertiary/25 transition-shadow rounded-lg overflow-hidden"}>
                        <Image
                          src={item.thumb_img}
                          alt=""
                          fill
                          className="object-cover"
                        />
                      </div>
                    </Link>
                    <Link href={`/zaitun/${item.slug}`}>
                      <h3 className="text-xl font-ibara font-medium text-xmas-primary line-clamp-3 lg:line-clamp-none">{item.title}</h3>
                    </Link>
                    <div className="flex items-center gap-2">
                      <div>
                        <p className="text-xs text-xmas-secondary uppercase">{item.writer_name}</p>
                        <p className="text-xs text-xmas-tertiary">{new Date(item.created_at).toLocaleDateString('id-US', {
                          dateStyle: 'long'
                        })}</p>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        )
        :
        (
          <div className="hidden md:grid grid-cols-3 gap-4 mt-4">
            {
              [0,1,2].map((i) => {
                return (
                  <div key={i} className={
                    (currentNews === i ? "-translate-y-3 " : "translate-y-0 ") +
                    " flex flex-col gap-2 transition-transform duration-400"
                    }>
                      <div className={
                        (currentNews === i ? "shadow-lg " : "shadow-none ") +
                        " relative w-full aspect-square bg-xmas-tertiary/25 transition-shadow rounded-lg"}>
                      </div>
                      <div className="bg-xmas-tertiary/25 w-full h-8 rounded-full animate-pulse" />
                    <div className="flex items-center gap-2">
                      <div className="flex flex-col gap-2 w-1/3">
                        <div className="bg-xmas-tertiary/25 w-full h-3 rounded-full animate-pulse" />
                        <div className="bg-xmas-tertiary/25 w-full h-2 rounded-full animate-pulse" />
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        )
      }
    </div>
  )
}
export default TopCarousell