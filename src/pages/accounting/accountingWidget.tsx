import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Article, Close, DoneAll, School, Storefront, Verified } from '@mui/icons-material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function AccountingWidget() {


    return (
        <section>
            <div className="flex text-black flex-col items-center justify-center px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:pt-32 md:px-0">
                <div className="flex flex-col items-center max-w-2xl md:px-8">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-xs   tracking-wider    rounded-full bg-red-300">
                                Muhasebe
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
                                <span className="relative">Finansal</span>
                            </span>{' '}
                            İşlemleri Yönetin                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            Muhasebe modülümüz, tüm finansal işlemlerinizi yönetmenizi sağlar. Gelir ve giderleri kaydedin, finansal raporlar oluşturun ve mali durumunuzu takip edin.

                        </p>
                    </div>


                </div>
                <img
                    src="/project-izmir-assets/accounting/accounting.png"
                    className="w-full max-w-screen-sm mx-auto object-cover rounded md:w-auto lg:max-w-screen-md"
                    alt=""
                />
            </div>

            <div className="rounded-lg px-4 my-10 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between">
                    <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
                        <div className="max-w-xl mb-6 text-start lg:text-left">
                            <h2 className="max-w-lg mb-6  text-3xl tracking-tight text-gray-900 sm:text-4xl sm:leading-none">Finansal İşlemleri Kolayca Yönetin</h2>
                            <p className="text-base text-gray-700 md:text-lg">                                Gelir ve giderlerinizi kolayca ekleyerek mali durumunuzu takip edin. Her türlü gelir ve gideri kaydedebilir, hangi tarihte ve ne kadar ödeme yapıldığını veya alındığını görebilirsiniz.
                            </p>
                        </div>
                    </div>
                    <div className="relative xl:px-10 flex justify-center lg:w-1/2">
                        <img className="object-cover w-96 rounded-2xl" src="/project-izmir-assets/accounting/buttons.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="   rounded-lg px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="flex flex-col items-center  justify-between lg:flex-row">
                    <div className="my-10 lg:max-w-lg lg:pr-5 xl:order-last lg:mb-0">
                        <div className="max-w-xl mb-6">
                            <h2 className="max-w-lg mb-6  text-3xl tracking-tight text-gray-900 sm:text-4xl sm:leading-none">İstatistiksel Analiz</h2>
                            <p className="text-base text-gray-700 md:text-lg">
                                Gelir ve giderlerinizi detaylı grafikler ve tablolarla analiz edin. Bu özellik, mali durumunuzu daha iyi anlamanızı sağlar ve bütçenizi planlamada yardımcı olur. Gelir ve giderlerinizin zaman içindeki değişimini ve dağılımını kolayca takip edebilirsiniz.
                            </p>

                        </div>
                    </div>
                    <div className="relative justify-end xl:px-10 lg:w-1/2">
                        <img className="object-cover w-full rounded-3xl" src="/project-izmir-assets/accounting/chart.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="px-4 text-black py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

                    <h2 className="max-w-lg mb-6  text-3xl  text-center leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        Hepsi bir yerde!
                    </h2>
                    <p className="text-base text-center text-gray-700 md:text-lg">
                        Gelirler, kiralar ve giderlerin hepsini buradan yönetebilirsiniz.
                    </p>
                </div>
                <div className="flex grid flex-col text-center items-center justify-center gap-8 lg:grid-cols-3">
                    <div className="sm:text-center">
                        <div className="flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full   bg-red-300 sm:mx-auto">
                            <DoneAll className='w-8 h-8'></DoneAll>

                        </div>
                        <h6 className="mb-2  leading-5">Kiralar</h6>


                    </div>
                    <div className="sm:text-center">
                        <div className="flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full   bg-red-300 sm:mx-auto">
                            <DoneAll className='w-8 h-8'></DoneAll>

                        </div>
                        <h6 className="mb-2  leading-5">Gelirler</h6>


                    </div>
                    <div className="sm:text-center">
                        <div className="flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full   bg-red-300 sm:mx-auto">
                            <DoneAll className='w-8 h-8'></DoneAll>
                        </div>
                        <h6 className="mb-2  leading-5">Giderler</h6>


                    </div>
                </div>
            </div>

            <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="mx-auto sm:text-center lg:max-w-2xl">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

                        <h2 className="max-w-lg mb-6  text-3xl  leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                            Finansal Takvim
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            Gelir ve giderlerinizi takvim üzerinde görüntüleyin. Bu özellik sayesinde, mali işlemlerinizi tarih bazında organize edebilir ve belirli bir dönemdeki tüm işlemleri bir bakışta görebilirsiniz.

                        </p>
                    </div>
                    <div className="mb-4     lg:mb-6">
                        <img
                            className="object-cover   rounded-lg  shadow-2xl    "
                            src="/project-izmir-assets/accounting/calendar.png"
                            alt=""
                        />
                    </div>

                </div>
            </div>

            <div className="   lg:max-w-screen-xl flex text-black flex-col items-center justify-center px-4 pb-10   mx-auto sm:max-w-xl md:max-w-full ">
                <h2 className="max-w-lg mb-6  text-3xl tracking-tight text-gray-900 sm:text-4xl sm:leading-none">Veri Bilgileri</h2>

                <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
                    <dl className="-my-3 divide-y divide-gray-100 text-sm">
                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">Kira</dt>
                            <ul className='list-disc pl-4'>
                                <li>
                                    <span className=''>Değer:</span> Kira tutarı.
                                </li>
                                <li>
                                    <span className=''>Geçerlilik Tarihi:</span> Kiranın hangi ay için yatırıldığını belirten tarih.
                                </li>
                                <li>
                                    <span className=''>Ödeme Tarihi:</span> Kiranın ödendiği tarih.
                                </li>
                                <li>
                                    <span className=''>Mülk:</span> Kiranın ait olduğu mülk.
                                </li>
                            </ul>
                        </div>

                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">Gider</dt>
                            <ul className='list-disc pl-4'>
                                <li>
                                    <span className=''>Değer:</span> Gider tutarı.
                                </li>
                                <li>
                                    <span className=''>İsim:</span> Giderin ismi.
                                </li>
                                <li>
                                    <span className=''>Açıklama:</span> Giderin açıklması.
                                </li>
                                <li>
                                    <span className=''>Tarih:</span> Harcamanın yapıldığı tarih.
                                </li>
                                <li>
                                    <span className=''>Mülk:</span> Giderin ait olduğu mülk.
                                </li>
                            </ul>
                        </div>

                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">Gelir</dt>
                            <ul className='list-disc pl-4'>
                                <li>
                                    <span className=''>Değer:</span> Gelir tutarı.
                                </li>
                                <li>
                                    <span className=''>İsim:</span> Gelirin ismi.
                                </li>
                                <li>
                                    <span className=''>Açıklama:</span> Gelirin açıklması.
                                </li>
                                <li>
                                    <span className=''>Tarih:</span> Harcamanın yapıldığı tarih.
                                </li>
                                <li>
                                    <span className=''>Mülk:</span> Gelirin ait olduğu mülk.
                                </li>
                            </ul>
                        </div>
                    </dl>
                </div>
            </div>




        </section>

    );
}

export default AccountingWidget;