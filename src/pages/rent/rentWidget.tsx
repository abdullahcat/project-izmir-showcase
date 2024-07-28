import { CurrencyExchangeOutlined, DateRange, LocationOnOutlined, OtherHouses, OtherHousesOutlined, PaymentsOutlined, Schedule, Search, Sort, Today } from '@mui/icons-material';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

function RentWidget() {


    return (
        <section>
            <div className="flex text-black flex-col items-center justify-center px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:pt-32 md:px-0">
                <div className="flex flex-col items-center max-w-2xl md:px-8">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold  tracking-wider    rounded-full bg-red-300">
                                Kira Takibi
                            </p>
                        </div>
                        <h2 className="max-w-lg mb-6 font-sans text-5xl   leading-none tracking-tight text-gray-900   md:mx-auto">
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
                                <span className="relative">Kiranızı</span>
                            </span>{' '}
                            Kolayca Takip Edin                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            Kira takibi modülümüz, kiralarınızı düzenli olarak takip etmenizi sağlar. Ödeme geçmişini görüntüleyin, ödemeleri kaydedin ve gecikmiş ödemeler hakkında bilgilendirme alın.
                        </p>
                    </div>


                </div>
                <img
                    src="/project-izmir-assets/rent/rent-tablet.png"
                    className="w-full max-w-screen-sm mx-auto object-cover rounded md:w-auto lg:max-w-screen-md"
                    alt=""
                />
            </div>

            <div className="px-4 text-black py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid row-gap-8 sm:row-gap-0 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="p-8 border-b sm:border-r">
                        <div className="max-w-md text-center">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-red-300 text-black sm:w-16 sm:h-16">
                                <Search></Search>
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">Arama</h6>
                            <p className="mb-3 text-sm text-gray-900">
                                Kiradaki mülkler arasında arama yap.
                            </p>
                        </div>
                    </div>
                    <div className="p-8 border-b lg:border-r">
                        <div className="max-w-md text-center">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-red-300 text-black sm:w-16 sm:h-16">
                                <Sort></Sort>
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">Sırala</h6>
                            <p className="mb-3 text-sm text-gray-900">
                                Kirada olan mülkler arasında isme göre veya gecikme süresine göre sıralayabilirsin.
                            </p>
                        </div>
                    </div>
                    <div className="p-8 border-b sm:border-r lg:border-r-0">
                        <div className="max-w-md text-center">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-red-300 text-black sm:w-16 sm:h-16">
                                <Schedule></Schedule>
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">Gecikme</h6>
                            <p className="mb-3 text-sm text-gray-900">
                                Gecikme sürelerine göre filtrele.
                            </p>
                        </div>
                    </div>
                    <div className="p-8 border-b lg:border-b-0 lg:border-r">
                        <div className="max-w-md text-center">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-red-300 text-black sm:w-16 sm:h-16">
                                <OtherHousesOutlined></OtherHousesOutlined>
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">Mülk Türü</h6>
                            <p className="mb-3 text-sm text-gray-900">
                                Mülkün türüne göre filtrele.
                            </p>
                        </div>
                    </div>
                    <div className="p-8 border-b sm:border-b-0 sm:border-r">
                        <div className="max-w-md text-center">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-red-300 text-black sm:w-16 sm:h-16">
                                <LocationOnOutlined></LocationOnOutlined>
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">Şehir</h6>
                            <p className="mb-3 text-sm text-gray-900">
                                Mülklerin bulunduğu şehirlere göre filtrele.
                            </p>
                        </div>
                    </div>
                    <div className="p-8">
                        <div className="max-w-md text-center">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-red-300 text-black sm:w-16 sm:h-16">
                                <PaymentsOutlined></PaymentsOutlined>
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">Ödemeler</h6>
                            <p className="mb-3 text-sm text-gray-900">
                                Gecikmesi bulunup bulunmadığına göre mülkleri ayır.                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-4 text-black py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="max-w-xl text-center mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <h2 className="max-w-lg mb-6 font-sans text-3xl leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        Önemli Değişkenler
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                        Kiranın doğru takip edilebilmesi için bu parametrelerin doğru belirlenmesi gerekir.
                    </p>
                </div>
                <div className="flex grid flex-col items-center justify-center gap-8 lg:grid-cols-3">
                    <div className="flex flex-col items-center text-center">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-red-300">
                            <DateRange className="w-8 h-8" />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Başlangıç Tarihi</h6>
                        <p className="max-w-md mb-3 text-sm text-gray-900">
                            Kiranızı takip etmeye başlamak istediğiniz tarih.
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-red-300">
                            <Today className="w-8 h-8" />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Ödeme Günü</h6>
                        <p className="max-w-md mb-3 text-sm text-gray-900">
                            Kiranın ödenmesi gereken gün.
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-red-300">
                            <CurrencyExchangeOutlined className="w-8 h-8" />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Kira Değişimi</h6>
                        <p className="max-w-md mb-3 text-sm text-gray-900">
                            Geçerli olduğu tarih ve kiranın ne kadar olduğunu belirten değişken.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default RentWidget;