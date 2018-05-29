import Document, { Head, Main, NextScript } from "next/document";

import styles from "./styles.scss";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body className={styles.body}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
