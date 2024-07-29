import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Article, Close, School, Storefront, Verified } from '@mui/icons-material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function AuthWidget() {


    return (

        <div className="text-black flex flex-col items-center justify-center px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:pt-32 md:px-0">
            <div className="flex flex-col items-center max-w-2xl md:px-8">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <div>
                        <p className="inline-block px-3 py-px mb-4 text-xs   tracking-wider    rounded-full bg-red-300">
                            Giriş
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
                            <span className="relative">Her Yerden</span>
                        </span>{' '}
                        Kolay ve Güvenli Erişim
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                        Uygulamamız, kullanıcıların her yerden ve her cihazdan kolayca erişim sağlayabileceği güvenli bir platform sunar.
                    </p>
                </div>


            </div>
            <div className="  rounded-lg px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="flex flex-col items-center justify-between lg:flex-row">
                    <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
                        <div className="max-w-xl mb-6">
                            <h2 className="max-w-lg mb-6  text-3xl tracking-tight text-gray-900 sm:text-4xl sm:leading-none">Kayıt Ol</h2>
                            <p className="text-base text-gray-700 md:text-lg">Platformu dış etkenlerden korumak için tasarlanmış giriş altyapısı.</p>
                            <ul className='list-disc md:text-lg text-base space-y-2 pt-5 pl-4'>
                                <li className="text-gray-600">Adını soyadını gir.</li>
                                <li className="text-gray-600">E-Postanı gir.</li>
                                <li className="text-gray-600">Şifre belirle.</li>
                                <li className="text-gray-600">Yöneticinden aldığın kayıt kodunu gir.</li>
                                <p className="text-base text-gray-600 md:text-xs">Kayıt kodları özeldir ve kimseyle paylaşılmaması tavsiye edilir.</p>
                            </ul>
                        </div>
                    </div>
                    <div className="relative xl:px-10 lg:w-1/2">
                        <img className="object-cover w-full   xl:h-96 shadow-lg rounded-xl" src="/project-izmir-assets/auth/register.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="  rounded-lg px-4 my-10 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="flex flex-col items-center justify-between lg:flex-row">
                    <div className="lg:order-last mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
                        <div className="max-w-xl mb-6">
                            <h2 className="max-w-lg mb-6  text-3xl tracking-tight text-gray-900 sm:text-4xl sm:leading-none">E-Postanı Onayla</h2>
                            <p className="text-base text-gray-700 md:text-lg">Kusursuz güvenlik sağlamak için onaylanmamış E-Posta ile kayıt olmaya izin vermiyoruz.</p>
                            <p className="text-base pt-2 text-gray-700 md:text-xs">(E-Postanızı onayladıktan sonra sayfayı yenileyin.)</p>
                        </div>
                    </div>
                    <div className="relative xl:px-10 lg:w-1/2">
                        <img className="object-cover w-full shadow-lg rounded-2xl" src="/project-izmir-assets/auth/verify_email.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="  rounded-lg px-4   py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="flex flex-col items-center justify-between lg:flex-row">
                    <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
                        <div className="max-w-xl mb-6">
                            <h2 className="max-w-lg mb-6  text-3xl tracking-tight text-gray-900 sm:text-4xl sm:leading-none">Bekleme Modundasınız!</h2>
                            <p className="text-base text-gray-700 md:text-lg">Kayıt işleminiz tamamlandı, hesabınız bekleme moduna alındı ve geriye son bir adım kaldı. Yöneticiniz size erişim izni verecek!</p>
                            <div className='text-base text-gray-700 md:text-lg pt-2 underline'>Yöneticinizden yetkilendirme isteyin.</div>
                        </div>
                    </div>
                    <div className="relative xl:px-10 lg:w-1/2">
                        <img className="object-cover w-full   shadow-lg rounded-2xl" src="/project-izmir-assets/auth/standby_mode.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="rounded-lg px-4 my-10 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="flex flex-col items-center justify-between lg:flex-row">
                    <div className="mb-10 xl:order-last lg:max-w-lg lg:pr-5 lg:mb-0">
                        <div className="max-w-xl mb-6">
                            <h2 className="max-w-lg mb-6  text-3xl tracking-tight text-gray-900 sm:text-4xl sm:leading-none">Giriş Yap</h2>
                            <p className="text-base text-gray-700 md:text-lg">E-Posta adresini ve şifreni kullanarak uygulamaya ister telefonundan, ister bilgisayarından giriş yap.</p>
                            <p className="text-base pt-2 text-gray-700 md:text-xs">Şifreni unutursan "Şifreni mi unuttun?" butonuna tıklayarak yeni şifre alabilirsin!</p>
                        </div>
                    </div>
                    <div className="relative xl:px-10 lg:w-1/2">
                        <img className="object-cover w-full   shadow-lg rounded-2xl" src="/project-izmir-assets/auth/login.png" alt="" />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default AuthWidget;