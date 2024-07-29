import { Instagram, LinkedIn, X } from "@mui/icons-material";
import Link from "next/link";
/* eslint-disable @next/next/no-img-element */


function Footer() {
    return (

        <footer className="border-t bg-white">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link href={'/'}>
                        <div className="flex flex-row items-center justify-center   sm:justify-start">
                            <img src="/project-izmir-assets/logo/project-logo.png" className="h-10 w-10" alt="" />
                            <blockquote className="text-2xl   font-semibold italic text-center text-black">
                                Project <span className="before:block ml-1 before:absolute before:-inset-1 before:-skew-y-3 before:bg-red-400 relative inline-block">
                                    <span className="relative text-white">İzmir</span>
                                </span>
                            </blockquote>


                        </div>
                    </Link>
                    <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
                        <Link className="hover:underline" href={"https://artesdeilusion.com"}>Artes de Ilusión &copy;</Link> 2024. Tüm Hakları Saklıdır.
                    </p>
                </div>
            </div>
        </footer>

    )
}

export default Footer;