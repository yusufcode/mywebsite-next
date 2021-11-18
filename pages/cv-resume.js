import Head from "next/head";
import styles from "../styles/Cv.module.scss";
import Header from "../components/cv/Header";
import TitleText from "../components/cv/TitleText";
import SectionDescription from "../components/cv/SectionDescription";
import NumberLiList from "../components/cv/NumberLiList";
import NumberTitleDescription from "../components/cv/NumberTitleDescription";

const skillsList = [
  "Html (9/10) [2 years]",
  "Css, Sass, Scss (9/10) [2 years]",
  "JavaScript (7/10) [1.5 year]",
  "Node.js, Rest (6/10) [8 months]",
  "React.js, Next.js (3/10) [1 month]"
]

const doList = [
  "Pixel Perfect conversation.",
  "Do the 1st very fast.",
  "Careful on UI/UX issues.",
  "Coding by considiring SEO rules.",
  "Fully responsive designs with all devices."
]

const goalsList = [
  "Become an expert of React. (main goal)",
  "Develop mobile apps on React Native. (kind of website supporter apps)",
  "Develop games for mobile and desktop platforms on Unity. (for hobby)"
]

const titleAndDescriptionList = [
  {title: "Narcade", description: "I have worked in this one of most important mobile game company in Turkey as a Software Developer. The best thing I do in this company is Info Transfer software. I’ve created a software. Thanks to this software, an employee can finish the job in 1 minute instead of 3 work days."},
  {title: "Global Ekspress", description: "I have worked in this C2C E-Commerce Parketplace as a Junior Front-End Web Developer. I’ve designed lots of website elements. Sometimes from scratch, sometimes from PSD to HTML, CSS, JS. This was the first company that I worked in the job about Web Technologies. I improved my Pixel Perfect design skill here."},
  {title: "Blacks Creative", description: "I've worked in this web agency as a Front-End Web Developer. I designed a lot of web templates. My best achievement in this company is designing an e-commerce web template in only a day. I have improved my fast coding skills here."},
  {title: "Melexsoft", description: "I have worked with this NFT and BlockChain creator company as a Frontend Web Developer. I've designed huge websites and web templates from scratch for them. I've improved my JS skills here."}
]

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/img/logo/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>
        <title>CV (Resume) - Yusuf Code</title>
        <meta name="description" content="Hello! I'm Yusuf, full-stack web developer."/>
        <meta name="keywords" content="yusufcode, yusuf code, web developer, full stack web developer, freelance web developer"/>
      </Head>

      <div className={styles.section}>
        <Header title="Personal Info" />

        <div className={styles.sectionBody}>
          <TitleText title="Name Surname" text="Yusuf Akbaba" />
          <TitleText title="Age" text="22" />
          <TitleText title="Location" text="St. Petersburg, Russia" />
        </div>
      </div>

      <div className={styles.section}>
        <Header title="Skills" />

        <div className={styles.sectionBody}>
          <SectionDescription text="I develop Full-Stack websites for over 2 years but more dominant on Front-End."/>

          <NumberLiList title="Skills" liArray={skillsList}/>
          <NumberLiList title="What I Do" liArray={doList}/>
          <NumberLiList title="Goals" liArray={goalsList}/>

        </div>
      </div>

      <div className={styles.section}>
        <Header title="Experience" />

        <div className={styles.sectionBody}>
          
          <NumberTitleDescription titlesAndDescription={titleAndDescriptionList} />

        </div>
      </div>

      <div className={styles.section}>
        <Header title="Contact" />

        <div className={styles.sectionBody}>
          <TitleText title="E-Mail" text="yusuf1akbaba@gmail.com" linkMail/>
          <TitleText title="Phone Number" text="+7 (931) 100 7111" linkTel/>
        </div>
      </div>
      
    </>
  );
}
