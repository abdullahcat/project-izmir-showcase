import { LocationOnOutlined, OtherHousesOutlined, Search } from "@mui/icons-material";
import Head from "next/head";
import Link from "next/link";

export default function Page() {

    return (
        <section>
            <Head>
                <title>
                    Project İzmir | Mülk Detayları
                </title>
            </Head>
            <div className="flex bg-red-100 pb-10 text-black flex-col items-center justify-center px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:pt-32 md:px-0">
                <div className="flex flex-col items-center max-w-2xl md:px-8">
                    <div className="max-w-xl mb-10 md:mx-auto  text-center lg:max-w-2xl md:mb-12">

                        <h2 className="max-w-lg mb-6  text-5xl   leading-none tracking-tight text-gray-900   md:mx-auto">

                            Kullanıcı Dostu Mülk Yönetimi
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            Tüm mülk bilgilerinizi tek bir platformda kolayca yönetin. Kritik bilgileri görüntüleyin, düzenleyin ve dokümanlara, kira bilgilerine hızlıca erişin. Verimli ve pratik mülk yönetimi deneyimi.
                        </p>
                    </div>


                </div>
                <img
                    src="/project-izmir-assets/property/property-details.png"
                    className="w-full  max-w-screen-sm mx-auto object-cover rounded md:w-auto lg:max-w-screen-md"
                    alt=""
                />
            </div>



            <section>

                <div className="  px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                    <div className="mx-auto sm:text-center lg:max-w-2xl">
                        <div className="max-w-xl   md:mx-auto  text-center lg:max-w-2xl md:mb-12">

                            <h2 className="max-w-lg mb-6  text-3xl  leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                                1. Dosyalar
                            </h2>

                        </div>
                        <div className="mb-4 lg:mb-6">
                            <img
                                className="object-cover   rounded-lg  shadow-2xl    "
                                src="/project-izmir-assets/property/docs.png"
                                alt=""
                            />
                        </div>

                    </div>
                </div>
                <div className="   rounded-lg px-4   mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                    <div className="flex flex-col items-center  justify-center lg:flex-row">
                        <div className="my-10 lg:max-w-lg  xl:order-last lg:mb-0">
                            <div className="max-w-xl xl:text-left text-center mb-6">
                                <h2 className="max-w-lg mb-6  text-2xl tracking-tight text-gray-900 sm:text-4xl sm:leading-none">Yeni Dosya Ekle
                                </h2>
                                <p className="text-base mb-6 text-gray-700 md:text-lg">
                                    Dökümanlar sekmesine giderek mülkünüze ait önemli belgeleri ekleyebilirsiniz. Dosya türleri; kontrat, tapu senedi ve diğer olmak üzere üçe ayrılır. Kontrat türünde kontratın başlangıç ve bitiş tarihlerini belirtebilirsiniz.
                                </p>
                            </div>
                        </div>
                        <div
                            className="relative justify-end xl:px-10 lg:w-1/2"  >
                            <img className="object-cover  w-56 hover:-translate-y-3   hover:cursor-pointer  transition duration-300 ease-in-out" src="/project-izmir-assets/property/newdoc.png" alt="" />
                        </div>
                    </div>
                </div>

            </section>

            <section>

                <div className="  px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                    <div className="mx-auto sm:text-center lg:max-w-2xl">
                        <div className="max-w-xl   md:mx-auto  text-center lg:max-w-2xl md:mb-12">

                            <h2 className="max-w-lg mb-6  text-3xl  leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                                2. Kiralar
                            </h2>

                        </div>
                        <div className="mb-4 lg:mb-6">

                            <img
                                className="object-coverrounded-lg  shadow-2xl    "
                                src="/project-izmir-assets/property/rent.png"
                                alt=""
                            />
                        </div>

                    </div>
                </div>
                <div className="   rounded-lg px-4   mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                    <div className="flex flex-col items-center  justify-center lg:flex-row">
                        <div className="my-10 lg:max-w-lg  xl:order-last lg:mb-0">
                            <div className="max-w-xl xl:text-left text-center mb-6">
                                <h2 className="max-w-lg mb-6  text-2xl tracking-tight text-gray-900 sm:text-4xl sm:leading-none">Yeni Kira Ödemesi Ekle
                                </h2>
                                <p className="text-base mb-6 text-gray-700 md:text-lg">
                                    Kiralarını kolayca takip edebilmek için kira ödemeleri ekleyin! Kira ödemeleri eklemek için miktar, geçerli olduğu tarih ve ödeme tarihi girin. Ödemelerin zamanını muhasebe sayfasından, geçerlilik tarihine göre kiraları kira takibi sayfasından takip edebilirsiniz.
                                </p>
                            </div>
                        </div>
                        <div
                            className="relative justify-end xl:px-10 lg:w-1/2"  >
                            <img className="object-cover  w-56 hover:-translate-y-3   hover:cursor-pointer  transition duration-300 ease-in-out" src="/project-izmir-assets/property/newrent.png" alt="" />
                        </div>
                    </div>
                </div>

            </section>

            <section>

                <div className="  px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                    <div className="mx-auto sm:text-center lg:max-w-2xl">
                        <div className="max-w-xl   md:mx-auto  text-center lg:max-w-2xl md:mb-12">

                            <h2 className="max-w-lg mb-6  text-3xl  leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                                3. Gelirler
                            </h2>

                        </div>
                        <div className="mb-4 lg:mb-6">

                            <img
                                className="object-coverrounded-lg  shadow-2xl    "
                                src="/project-izmir-assets/property/revenues.png"
                                alt=""
                            />
                        </div>

                    </div>
                </div>
                <div className="   rounded-lg px-4   mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                    <div className="flex flex-col items-center  justify-center lg:flex-row">
                        <div className="my-10 lg:max-w-lg  xl:order-last lg:mb-0">
                            <div className="max-w-xl xl:text-left text-center mb-6">
                                <h2 className="max-w-lg mb-6  text-2xl tracking-tight text-gray-900 sm:text-4xl sm:leading-none">Yeni Gelir Ekle
                                </h2>
                                <p className="text-base mb-6 text-gray-700 md:text-lg">
                                    Gelirler sekmesine giderek mülklerinizden elde ettiğiniz gelirleri takip edebilirsiniz. Yeni bir gelir eklemek için "Yeni Gelir Ekle" butonuna tıklayın, başlık, açıklama, miktar ve tarih bilgilerini girin ve "Ekle" butonuna tıklayarak gelir kaydını ekleyin.
                                </p>
                            </div>
                        </div>
                        <div
                            className="relative justify-end xl:px-10 lg:w-1/2"  >
                            <img className="object-cover  w-56 hover:-translate-y-3   hover:cursor-pointer  transition duration-300 ease-in-out" src="/project-izmir-assets/property/newrevenue.png" alt="" />
                        </div>
                    </div>
                </div>

            </section>


            <section>

                <div className="  px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                    <div className="mx-auto sm:text-center lg:max-w-2xl">
                        <div className="max-w-xl   md:mx-auto  text-center lg:max-w-2xl md:mb-12">

                            <h2 className="max-w-lg mb-6  text-3xl  leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                                4. Giderler
                            </h2>

                        </div>
                        <div className="mb-4 lg:mb-6">

                            <img
                                className="object-coverrounded-lg  shadow-2xl    "
                                src="/project-izmir-assets/property/expenses.png"
                                alt=""
                            />
                        </div>

                    </div>
                </div>
                <div className="   rounded-lg px-4   mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                    <div className="flex flex-col items-center  justify-center lg:flex-row">
                        <div className="my-10 lg:max-w-lg  xl:order-last lg:mb-0">
                            <div className="max-w-xl xl:text-left text-center mb-6">
                                <h2 className="max-w-lg mb-6  text-2xl tracking-tight text-gray-900 sm:text-4xl sm:leading-none">Yeni Gider Ekle
                                </h2>
                                <p className="text-base mb-6 text-gray-700 md:text-lg">
                                    Giderler sekmesine giderek mülklerinizle ilgili harcamaları yönetebilirsiniz. Yeni bir gider eklemek için "Yeni Gider Ekle" butonuna tıklayın, başlık, açıklama, miktar ve tarih bilgilerini girin ve "Ekle" butonuna tıklayarak gider kaydını ekleyin.
                                </p>
                            </div>
                        </div>
                        <div
                            className="relative justify-end xl:px-10 lg:w-1/2"  >
                            <img className="object-cover  w-56 hover:-translate-y-3   hover:cursor-pointer  transition duration-300 ease-in-out" src="/project-izmir-assets/property/newexpense.png" alt="" />
                        </div>
                    </div>
                </div>

            </section>

            <section>

                <div className="  px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                    <div className="mx-auto sm:text-center lg:max-w-2xl">
                        <div className="max-w-xl   md:mx-auto  text-center lg:max-w-2xl md:mb-12">

                            <h2 className="max-w-lg mb-6  text-3xl  leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                                5. Notlar
                            </h2>

                        </div>
                        <div className="mb-4 lg:mb-6">

                            <img
                                className="object-coverrounded-lg  shadow-2xl    "
                                src="/project-izmir-assets/property/notes.png"
                                alt=""
                            />
                        </div>

                    </div>
                </div>
                <div className="   rounded-lg px-4   mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                    <div className="flex flex-col items-center  justify-center lg:flex-row">
                        <div className="my-10 lg:max-w-lg  xl:order-last lg:mb-0">
                            <div className="max-w-xl xl:text-left text-center mb-6">
                                <h2 className="max-w-lg mb-6  text-2xl tracking-tight text-gray-900 sm:text-4xl sm:leading-none">Yeni Not Ekle
                                </h2>
                                <p className="text-base mb-6 text-gray-700 md:text-lg">
                                    Notlar sekmesine giderek mülklerinizle ilgili önemli notları ekleyebilirsiniz. Yeni bir not eklemek için "Yeni Not Ekle" butonuna tıklayın; başlığını, not içeriğini yazın ve "Ekle" butonuna tıklayarak notu ekleyin.
                                </p>
                            </div>
                        </div>
                        <div
                            className="relative justify-end xl:px-10 lg:w-1/2"  >
                            <img className="object-cover  w-56 hover:-translate-y-3   hover:cursor-pointer  transition duration-300 ease-in-out" src="/project-izmir-assets/property/newnote.png" alt="" />
                        </div>
                    </div>
                </div>

            </section>

            <section>

                <div className="  px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                    <div className="mx-auto sm:text-center lg:max-w-2xl">
                        <div className="max-w-xl   md:mx-auto  text-center lg:max-w-2xl md:mb-12">

                            <h2 className="max-w-lg mb-6   text-3xl  leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                                6. Kira Değişiklikleri
                            </h2>

                        </div>
                        <div className="mb-4 lg:mb-6">

                            <img
                                className="object-coverrounded-lg  shadow-2xl    "
                                src="/project-izmir-assets/property/rentchange.png"
                                alt=""
                            />
                        </div>

                    </div>
                </div>
                <div className="   rounded-lg px-4   mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                    <div className="flex flex-col items-center  justify-center lg:flex-row">
                        <div className="my-10 lg:max-w-lg  xl:order-last lg:mb-0">
                            <div className="max-w-xl xl:text-left text-center mb-6">
                                <h2 className="max-w-lg mb-6  text-2xl tracking-tight text-gray-900 sm:text-4xl sm:leading-none">Yeni Kira Değişikliği Ekle
                                </h2>
                                <p className="text-base mb-6 text-gray-700 md:text-lg">
                                    Kira Değişimi sekmesine giderek kira miktarındaki değişiklikleri yönetebilirsiniz. Yeni bir kira değişimi eklemek için "Yeni Kira Değişimi Ekle" butonuna tıklayın, yeni kira miktarını ve değişim tarihini girin ve "Ekle" butonuna tıklayarak kira değişimini ekleyin.
                                </p>
                            </div>
                        </div>
                        <div
                            className="relative justify-end xl:px-10 lg:w-1/2"  >
                            <img className="object-cover  w-56 hover:-translate-y-3   hover:cursor-pointer  transition duration-300 ease-in-out" src="/project-izmir-assets/property/newrentchange.png" alt="" />
                        </div>
                    </div>
                </div>

            </section>


            <hr className="my-20" />
            <div className="    lg:max-w-screen-xl flex text-black flex-col items-center justify-center px-4 pb-20   mx-auto sm:max-w-xl md:max-w-full ">
                <h2 className="max-w-lg mb-6  text-3xl tracking-tight text-gray-900 sm:text-4xl sm:leading-none">Hangi Bilgileri Kaydediyoruz?</h2>

                <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
                    <dl className="-my-3 divide-y divide-gray-100 text-sm">
                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">İsim</dt>
                            <dd className="text-gray-700 sm:col-span-2">Mülkünüzün ismi.</dd>
                        </div>

                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">Açıklama</dt>
                            <dd className="text-gray-700 sm:col-span-2">Mülkünüz hakkında istediğiniz bir açıklama.</dd>
                        </div>

                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">Adres</dt>
                            <dd className="text-gray-700 sm:col-span-2">Mülkünüzün adresi.</dd>
                        </div>

                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">Şehir</dt>
                            <dd className="text-gray-700 sm:col-span-2">Mülkünüzün bulunduğu şehir.</dd>
                        </div>
                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">Tür</dt>
                            <dd className="text-gray-700 sm:col-span-2">Mülkünüzün tür.</dd>
                        </div>
                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">Notlar</dt>
                            <dd className="text-gray-700 sm:col-span-2">Mülkünüze eklediğiniz notlar.</dd>
                        </div>
                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">Koordinatlar</dt>
                            <dd className="text-gray-700 sm:col-span-2">Haritada üzerinde görüntüleneebilmesi için mülkünüzün koordinatları.</dd>
                        </div>
                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">Dosyalar</dt>
                            <dd className="text-gray-700 sm:col-span-2">Mülkünüz hakkında eklediğiniz dosyalar.</dd>
                        </div>
                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">Giderler</dt>
                            <dd className="text-gray-700 sm:col-span-2">Mülkünüzün gider bilgileri.</dd>
                        </div>
                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">Gelirler</dt>
                            <dd className="text-gray-700 sm:col-span-2">Mülkünüzün gelir bilgileri.</dd>
                        </div>
                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">Kira Teslim Tarihi</dt>
                            <dd className="text-gray-700 sm:col-span-2">Mülkünüz kirada ise kiranızın teslim tarihi.</dd>
                        </div>
                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">Kirada Mı?</dt>
                            <dd className="text-gray-700 sm:col-span-2">Mülkünüz kirada mı.</dd>
                        </div>
                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">Kiralar?</dt>
                            <dd className="text-gray-700 sm:col-span-2">Mülkünüzün kira ödeme bilgileri.</dd>
                        </div>
                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">Kira Başlangıç Tarihi</dt>
                            <dd className="text-gray-700 sm:col-span-2">Mülkünüz kirada ise kiranızın başlangıç tarihi.</dd>
                        </div>
                    </dl>
                </div>
            </div>


        </section>

    );
}