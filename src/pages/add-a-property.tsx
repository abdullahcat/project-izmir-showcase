import { AddLocationAlt, LocationOnOutlined, OtherHousesOutlined, Search } from "@mui/icons-material";
import Head from "next/head";
import Link from "next/link";

export default function Page() {

    return (
        <section>
            <Head>
                <title>
                    Project İzmir | Yeni Mülk Ekle
                </title>
            </Head>
            <div className="bg-red-100 pb-10 flex text-black flex-col items-center justify-center px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:pt-32 md:px-0">
                <div className="flex flex-col items-center max-w-2xl md:px-8">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

                        <h2 className="max-w-lg mb-6 font-sans text-5xl   leading-none tracking-tight text-gray-900   md:mx-auto">

                            Yeni Mülkünüzü Kolayca Ekleyin
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            Yeni bir mülk eklemek için bu sayfayı kullanarak mülkünüzle ilgili tüm gerekli bilgileri girebilirsiniz. Kullanıcı dostu arayüzümüz sayesinde mülk ekleme işlemi hızlı ve basittir.
                        </p>
                    </div>


                </div>
                <img
                    src="/project-izmir-assets/add-property/add-a-property.png"
                    className="w-full  max-w-screen-sm mx-auto object-cover rounded md:w-auto lg:max-w-screen-md"
                    alt=""
                />
            </div>

            <div className=" mt-10 rounded-lg px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="flex flex-col items-center  justify-between lg:flex-row">
                    <div className="my-10 lg:max-w-lg lg:pr-5 xl:order-last lg:mb-0">
                        <div className="max-w-xl mb-6">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl tracking-tight text-gray-900 sm:text-4xl sm:leading-none">Mülkünüz kirada mı?</h2>
                            <p className="text-base   text-gray-700 md:text-lg">
                                Mülkünü kirada ise kira bilgilerini ekleyerek kira durumunu takip edebilirsiniz.
                            </p>

                            <p className="text-base pt-2 text-gray-700 md:text-xs">Kira bilgileri; kira başlangıç tarihi, teslim tarihi ve kira değişikliklerinden oluşur.</p>

                        </div>
                    </div>
                    <div
                        className="relative justify-end xl:px-10 lg:w-1/2"  >
                        <img className="object-cover       shadow-lg   rounded-lg" src="/project-izmir-assets/add-property/isRented.png" alt="" />
                    </div>
                </div>
            </div>


            <div className=" justify-end rounded-lg px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="flex flex-col items-center   justify-between lg:flex-row">
                    <div className="my-10 lg:max-w-lg lg:pr-5 xl:order-last  lg:mb-0">
                        <div className="justify-start max-w-xl inline-flex flex">
                            <div className="flex  items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-red-300 text-black sm:w-16 sm:h-16">
                                <AddLocationAlt></AddLocationAlt>
                            </div>
                        </div>
                        <div className="max-w-xl mb-6">

                            <h2 className="max-w-lg mb-6 font-sans text-3xl tracking-tight text-gray-900 sm:text-4xl sm:leading-none">Haritadan Mülkünün Konumunu Seç</h2>
                            <p className="text-base mb-6 text-gray-700 md:text-lg">
                                Mülkünüzü haritada görüntüleyebilmek için konum ekle ikonuna tıklayarak mülkünüzün haritadaki konumunu seçin.                            </p>

                        </div>
                    </div>

                    <div className="relative justify-end lg:w-1/2">
                        <img className="object-cover         shadow-lg rounded-3xl" src="/project-izmir-assets/add-property/select-location.png" alt="" />
                    </div>

                </div>
            </div>


        </section>

    );
}