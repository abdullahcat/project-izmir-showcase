import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Hero from '@/components/hero';
import { Tab } from '@headlessui/react';
import AuthWidget from './auth/authwidget';
import MapWidget from './map/mapwidget';
import RentWidget from './rent/rentWidget';
import AuthorityWidget from './authority/authorityWidget';
import PropertiesWidget from './property/propertiesWidget';
import AccountingWidget from './accounting/accountingWidget';
import { ArrowUpward } from '@mui/icons-material';

const HomePage: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [showButton, setShowButton] = useState(false);

    const tabs = ['Giriş', 'Harita', 'Mülkler', 'Kira', 'Muhasebe', 'Yetkiler'];

    const renderContent = (index: number) => {
        switch (index) {
            case 0:
                return <AuthWidget></AuthWidget>
            case 1:
                return <MapWidget></MapWidget>;
            case 2:
                return <PropertiesWidget></PropertiesWidget>;
            case 3:
                return <RentWidget></RentWidget>;
            case 4:
                return <AccountingWidget></AccountingWidget>;
            case 5:
                return <AuthorityWidget></AuthorityWidget>;
            default:
                return null;
        }
    };

    const handleScroll = () => {
        if (window.pageYOffset > 600) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <Head>
                <title>Project İzmir</title>
            </Head>
            <Hero />
            <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
                <Tab.List className="flex m-4 xl:m-10 font-bold transition duration-300 ease-in-out bg-gray-50 rounded-full">
                    {tabs.map((tab, index) => (
                        <Tab
                            key={index}
                            className={({ selected }) =>
                                `w-full py-2.5 text-sm leading-5 rounded-full transition duration-200 ease-in-out
                                ${selected ? 'bg-red-500 text-white shadow' : 'text-red-500 hover:bg-gray-100 hover:text-black'}`
                            }
                        >
                            {tab}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="mt-2">
                    {tabs.map((_, index) => (
                        <Tab.Panel key={index}>
                            {renderContent(index)}
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
            <div

                className={`fixed bottom-4 right-4 hover:cursor-pointer hover:shadow-2xl   p-3 shadow-lg transition-opacity  bg-red-500 border-red-500 text-white hover:-translate-y-1   rounded-full space-x-2 flex flex-row   hover:border-red-600   duration-300 ease-in-out hover:bg-red-600 ${showButton ? 'opacity-100' : 'opacity-0'
                    }`}
                onClick={scrollToTop}
            >
                <ArrowUpward></ArrowUpward>
            </div>
        </div>
    );
};

export default HomePage;