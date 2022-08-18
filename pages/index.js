import Head from "next/head";
import About from "../components/About";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import styles from "../styles/Home.module.css";
import Service from "../components/Service";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Customers from "../components/Customers";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Polly Miners</title>
        <meta
          name="description"
          content="Polly miners is a mining rig service company that provides you best service in the market."
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Menu />
      <Hero />
      <Service />
      <About />
      {/* <SellThings /> */}
      {/* <BestGpu /> */}
      <Contact id="contact" />
      <Customers />
      {/* <Newsletter  /> */}
      <Footer />
    </div>
  );
}
