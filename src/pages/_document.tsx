import Document, {Head, Html, Main, NextScript} from "next/document"

class CustomDocument extends Document {
    render(): JSX.Element {
        return <Html>
            <Head>
                <link href="https://use.typekit.net/zcl3fpx.css" rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    }
}

export default CustomDocument
