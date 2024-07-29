import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Article, Close, School, Storefront, Verified } from '@mui/icons-material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function AuthorityWidget() {


    return (
        <section>
            <div className="flex text-black flex-col items-center justify-center px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:pt-32 md:px-0">
                <div className="flex flex-col items-center max-w-2xl md:px-8">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-xs   tracking-wider    rounded-full bg-red-300">
                                Yetkiler
                            </p>
                        </div>
                        <h2 className="max-w-lg mb-6   text-5xl   leading-none tracking-tight text-gray-900   md:mx-auto">
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
                                <span className="relative">Kullanıcı</span>
                            </span>{' '}
                            Yetkilerini Yönetin</h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            Yetkilendirme modülümüz, kullanıcılarınızın erişim seviyelerini yönetmenizi sağlar. Her kullanıcıya özel yetkiler atayarak, hangi bilgilere ve işlemlere erişebileceklerini belirleyin.
                        </p>
                    </div>


                </div>
                <img
                    src="/project-izmir-assets/authority/authority-control.png"
                    className="w-full max-w-screen-sm mx-auto object-cover rounded md:w-auto lg:max-w-screen-md"
                    alt=""
                />
            </div>

            <div className="mt-10  rounded-lg px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="flex flex-col items-center  justify-between lg:flex-row">
                    <div className="my-10 lg:max-w-lg lg:pr-5 xl:order-last lg:mb-0">
                        <div className="max-w-xl mb-6">
                            <h2 className="max-w-lg mb-6   text-3xl tracking-tight text-gray-900 sm:text-4xl sm:leading-none">Güvenli ve Esnek Erişim</h2>
                            <p className="text-base text-gray-700 md:text-lg">
                                Kullanıcılarınızın güvenliğini sağlamak için esnek yetkilendirme seçenekleri sunuyoruz. Her kullanıcıya görevlerine uygun yetkiler vererek, veri güvenliğinizi en üst düzeyde tutun.
                            </p>

                        </div>
                    </div>
                    <div className="relative justify-end xl:px-10 lg:w-1/2">
                        <img className="object-cover   w-full   shadow-lg rounded-3xl" src="/project-izmir-assets/authority/roles.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="   lg:max-w-screen-xl flex text-black flex-col items-center justify-center px-4 pb-10   mx-auto sm:max-w-xl md:max-w-full ">
                <h2 className="max-w-lg mb-6   text-3xl tracking-tight text-gray-900 sm:text-4xl sm:leading-none">Erişim Bilgileri</h2>

                <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
                    <dl className="-my-3 divide-y divide-gray-100 text-sm">
                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">Yönetici</dt>
                            <dd className="text-gray-700 sm:col-span-2">Her yere erişimi var.</dd>
                        </div>

                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">Seyirci</dt>
                            <dd className="text-gray-700 sm:col-span-2">Yalnızca harita ve bazı mülk bilgilerini görebilir. Hiçbir şeyi değiştiremez.</dd>
                        </div>

                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">Avukat</dt>
                            <dd className="text-gray-700 sm:col-span-2">Dökümanları eklemeye, değiştirmeye ve görmeye yetkisi var.</dd>
                        </div>

                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">Muhasebeci</dt>
                            <dd className="text-gray-700 sm:col-span-2">Finansal belgeleri eklemeye, değiştirmeye ve görmeye yetkisi var. Kira takibi ve muhasebe sayfasında tam yetkili.</dd>
                        </div>

                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">Bekleyen</dt>
                            <dd className="text-gray-700 sm:col-span-2">Herhangi bir yetkisi yok.</dd>
                        </div>
                    </dl>
                </div>
            </div>


        </section>

    );
}

export default AuthorityWidget;