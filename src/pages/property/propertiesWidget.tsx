import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Article, Close, LocationOnOutlined, OtherHousesOutlined, School, Search, Storefront, Verified } from '@mui/icons-material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function PropertiesWidget() {


    return (
        <section>
            <div className="flex text-black flex-col items-center justify-center px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:pt-32 md:px-0">
                <div className="flex flex-col items-center max-w-2xl md:px-8">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-xs   tracking-wider    rounded-full bg-red-300">
                                Mülkler
                            </p>
                        </div>
                        <h2 className="max-w-lg mb-6  text-5xl   leading-none tracking-tight text-gray-900   md:mx-auto">
                            <span className="relative inline-block">
                                <svg
                                    viewBox="0 0 52 24"
                                    fill="currentColor"
                                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                >
                                    <defs>
                                        <pattern
                                            id="192913ce-1f29-4abd-b545-0fbccfd2b0ec"
                                            x="0"
                                            y="0"
                                            width=".135"
                                            height=".30"
                                        >
                                            <circle cx="1" cy="1" r=".7" />
                                        </pattern>
                                    </defs>
                                    <rect
                                        fill="url(#192913ce-1f29-4abd-b545-0fbccfd2b0ec)"
                                        width="52"
                                        height="24"
                                    />
                                </svg>
                                <span className="relative">Mülklerinizi</span>
                            </span>{' '}
                            Yönetin                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            Mülkler modülümüz, sahip olduğunuz tüm mülkleri tek bir yerde yönetmenize olanak tanır. Mülklerinizi listeleyin, detaylı bilgilerini görüntüleyin ve düzenleyin.
                        </p>
                    </div>


                </div>
                <img
                    src="/project-izmir-assets/properties/properties.png"
                    className="w-full  max-w-screen-sm mx-auto object-cover rounded md:w-auto lg:max-w-screen-md"
                    alt=""
                />
            </div>

            <div className=" mt-10 rounded-lg px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="flex flex-col items-center  justify-between lg:flex-row">
                    <div className="my-10 lg:max-w-lg lg:pr-5 xl:order-last lg:mb-0">
                        <div className="max-w-xl mb-6">
                            <h2 className="max-w-lg mb-6  text-3xl tracking-tight text-gray-900 sm:text-4xl sm:leading-none">Mülk Bilgileri Bir Tık Uzağında</h2>
                            <p className="text-base mb-6 text-gray-700 md:text-lg">
                                Mülklerinizi tek bir yerde listeleyerek, detaylı bilgilerini görüntüleyin.
                            </p>
                            <div className="flex flex-wrap justify-start gap-2">
                                <Link
                                    href={'/property'}
                                    className="relative inline-block px-5 py-2 border bg-red-500 border-red-500 text-white     rounded-full space-x-2 flex flex-row   hover:border-red-600 hover:-translate-y-1 transition duration-300 ease-in-out hover:bg-red-600"
                                >
                                    Daha Fazla
                                </Link>


                            </div>

                        </div>
                    </div>
                    <Link
                        className="relative justify-end xl:px-10 lg:w-1/2" href={'/property'}>
                        <img className="object-cover  w-96 hover:-translate-y-3   hover:cursor-pointer  transition duration-300 ease-in-out hover:shadow-2xl shadow-lg rounded-3xl" src="/project-izmir-assets/properties/property-card.png" alt="" />
                    </Link>
                </div>
            </div>
            <div className="px-4 text-black py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8  ">
                <div className="grid row-gap-8 sm:row-gap-0   lg:grid-cols-3">
                    <div className="p-8  lg:border-r">
                        <div className="max-w-md text-center">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-red-300 text-black sm:w-16 sm:h-16">
                                <Search></Search>
                            </div>
                            <h6 className="mb-2  leading-5">Arama</h6>
                            <p className="mb-3 text-sm text-gray-900">
                                Mülklerin arasında arama yap.
                            </p>
                        </div>
                    </div>


                    <div className="p-8 border-y  lg:border-y-0 lg:border-r">
                        <div className="max-w-md text-center">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-red-300 text-black sm:w-16 sm:h-16">
                                <OtherHousesOutlined></OtherHousesOutlined>
                            </div>
                            <h6 className="mb-2  leading-5">Mülk Türü</h6>
                            <p className="mb-3 text-sm text-gray-900">
                                Mülkün türüne göre filtrele.
                            </p>
                        </div>
                    </div>
                    <div className="p-8   sm:border-b-0  ">
                        <div className="max-w-md text-center">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-red-300 text-black sm:w-16 sm:h-16">
                                <LocationOnOutlined></LocationOnOutlined>
                            </div>
                            <h6 className="mb-2  leading-5">Şehir</h6>
                            <p className="mb-3 text-sm text-gray-900">
                                Mülklerin bulunduğu şehirlere göre filtrele.
                            </p>
                        </div>
                    </div>

                </div>
            </div>


            <div className=" justify-end rounded-lg px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="flex flex-col items-center  justify-center lg:flex-row">
                    <div className="my-10 lg:max-w-lg lg:pr-5 xl:order-last lg:mb-0">
                        <div className="max-w-xl mb-6">
                            <h2 className="max-w-lg mb-6  text-3xl tracking-tight text-gray-900 sm:text-4xl sm:leading-none">Mülk Bilgileri Bir Tık Uzağında</h2>
                            <p className="text-base mb-6 text-gray-700 md:text-lg">
                                Mülklerinizi tek bir yerde listeleyerek, detaylı bilgilerini görüntüleyin.
                            </p>
                            <div className="flex flex-wrap justify-start gap-2">
                                <Link
                                    href={'/add-a-property'}
                                    className="relative inline-block px-5 py-2 border bg-red-500 border-red-500 text-white     rounded-full space-x-2 flex flex-row   hover:border-red-600 hover:-translate-y-1 transition duration-300 ease-in-out hover:bg-red-600"
                                >
                                    Daha Fazla
                                </Link>


                            </div>

                        </div>
                    </div>

                    <Link href={'/add-a-property'} className="relative justify-end lg:w-1/2">
                        <img className="object-cover  w-80   hover:-translate-y-3 transition duration-300 ease-in-out hover:cursor-pointer  hover:shadow-2xl shadow-lg rounded-3xl" src="/project-izmir-assets/properties/addproperty.png" alt="" />
                    </Link>

                </div>
            </div>


        </section>

    );
}

export default PropertiesWidget;