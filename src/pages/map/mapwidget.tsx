import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Article, Close, School, Storefront, Verified } from '@mui/icons-material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function MapWidget() {


    return (
        <section>
            <div className="flex text-black flex-col items-center justify-center px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:pt-32 md:px-0">
                <div className="flex flex-col items-center max-w-2xl md:px-8">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-xs   tracking-wider    rounded-full bg-red-300">
                                Harita
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
                            Kolayca Takip Edin                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            Uygulamamızın harita özelliği sayesinde mülklerinizi tek bir bakışta görebilirsiniz. Mülklerinizi görsel olarak haritada takip edin, konumlarını belirleyin ve yakındaki önemli yerleri kolayca bulun.
                        </p>
                    </div>


                </div>
                <img
                    src="/project-izmir-assets/map/map.png"
                    className="w-full max-w-screen-sm mx-auto object-cover rounded md:w-auto lg:max-w-screen-md"
                    alt=""
                />
            </div>

            <div className="mt-10  rounded-lg px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="flex flex-col items-center  justify-between lg:flex-row">
                    <div className="my-10 lg:max-w-lg lg:pr-5 xl:order-last lg:mb-0">
                        <div className="max-w-xl mb-6">
                            <h2 className="max-w-lg mb-6  text-3xl tracking-tight text-gray-900 sm:text-4xl sm:leading-none">Kolay ve Hızlı Arama</h2>
                            <p className="text-base text-gray-700 md:text-lg">
                                Haritamızın adres ve mülk arama özelliği sayesinde, aradığınız mülkleri ve adresleri hızlıca bulun. Tek yapmanız gereken, arama çubuğuna adres veya mülk ismini yazmak.

                            </p>

                        </div>
                    </div>
                    <div className="relative justify-end xl:px-10 lg:w-1/2">
                        <img className="object-cover xl:w-96 w-full   shadow-lg rounded-3xl" src="/project-izmir-assets/map/search_open.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="rounded-lg px-4 my-10 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between">
                    <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
                        <div className="max-w-xl mb-6 text-start lg:text-left">
                            <h2 className="max-w-lg mb-6  text-3xl tracking-tight text-gray-900 sm:text-4xl sm:leading-none">İkonlarla Yönünü Bul</h2>
                            <p className="text-base text-gray-700 md:text-lg">Yerleşim, ticari ve arazi ikonları ile mülklerini daha kolay takip et.</p>
                        </div>
                    </div>
                    <div className="relative xl:px-10 flex justify-center lg:w-1/2">
                        <img className="object-cover w-52 rounded-2xl" src="/project-izmir-assets/map/map-icons.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="  rounded-lg px-4   py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="flex flex-col items-center justify-between lg:flex-row">
                    <div className="mb-10 xl:order-last lg:max-w-lg lg:pr-5 lg:mb-0">
                        <div className="max-w-xl mb-6">
                            <h2 className="max-w-lg mb-6  text-3xl tracking-tight text-gray-900 sm:text-4xl sm:leading-none">Mülk Kartları</h2>
                            <p className="text-base text-gray-700 md:text-lg">Mülk kartları sayesinde her bir mülkün detaylarına hızlıca erişebilirsiniz. Bu kartlar, mülklerinizin temel bilgilerini ve önemli ayrıntılarını tek bir bakışta görmenizi sağlar.</p>
                        </div>
                    </div>
                    <div className="relative xl:px-10 lg:w-1/2">
                        <img className="object-cover w-full   shadow-lg rounded-2xl" src="/project-izmir-assets/map/map-property-card.png" alt="" />
                    </div>
                </div>
            </div>


        </section>

    );
}

export default MapWidget;