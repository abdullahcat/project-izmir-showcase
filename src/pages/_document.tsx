// pages/_document.tsx
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html >
                <Head>
                    <link rel="apple-touch-icon" sizes="180x180" href="/favicon_package_v0.16/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon_package_v0.16/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon_package_v0.16/favicon-16x16.png" />
                    <link rel="manifest" href="/favicon_package_v0.16/site.webmanifest" />
                    <link rel="mask-icon" href="/favicon_package_v0.16/safari-pinned-tab.svg" color="#5bbad5" />
                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta name="theme-color" content="#ffffff" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;