import Link from 'next/link';
import React, { useEffect, useState } from 'react';
/* eslint-disable @next/next/no-img-element */

function Hero() {
    const [text, setText] = useState('');
    const words = ["Kiralarını takip et.", "Mülklerini yönet.", "Gelir ve giderlerine ulaş.", "Kontrol sende."];
    let i = 0;
    let j = 0;
    let isDeleting = false;

    useEffect(() => {
        function type() {
            const currentWord = words[i];
            if (isDeleting) {
                setText(currentWord.substring(0, j - 1));
                j--;
                if (j === 0) {
                    isDeleting = false;
                    i++;
                    if (i === words.length) {
                        i = 0;
                    }
                }
            } else {
                setText(currentWord.substring(0, j + 1));
                j++;
                if (j === currentWord.length) {
                    isDeleting = true;
                }
            }
            setTimeout(type, 125);
        }

        type();
    }, []);

    return (
        <section  >
            <div className="bg-warmneutral">
                <div className="container flex flex-col items-center px-4 pt-20 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-black">
                    <img src="/project-izmir-assets/logo/project-logo.png" className="h-16 w-16" alt="" />

                    <h1 className="text-5xl  mt-3    font-black">&quot;<span className='text-red-500'>{text}</span>&quot;</h1>
                    <p className="my-6 text-lg   xl:max-w-3xl  ">
                        Kiraların, mülklerin, giderlerin artık tek bir yerde.
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                        <Link
                            href={'http://projectizmir.artesdeilusion.com'}
                            className="relative inline-block px-5 py-2 border bg-red-500 border-red-500 text-white hover:-translate-y-1   rounded-full space-x-2 flex flex-row   hover:border-red-600 transition duration-300 ease-in-out hover:bg-red-600"
                        >
                            Başla
                        </Link>


                    </div>
                </div>
            </div>
            <img src="/project-izmir-assets/general/project-properties-on-mac.png" alt="" className="w-6/7 mx-auto pb-10  px-4 -mt-20 rounded-lg lg:-mt-40" />
        </section >
    );
}

export default Hero;