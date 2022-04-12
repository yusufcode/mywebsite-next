import Head from "next/head";
import styles from "../styles/Cv.module.scss";
import Header from "../components/cv/Header";
import TitleText from "../components/cv/TitleText";
import SectionDescription from "../components/cv/SectionDescription";
import NumberLiList from "../components/cv/NumberLiList";
import NumberTitleDescription from "../components/cv/NumberTitleDescription";

const skillsList = [
  "Html (2.5 years)",
  "Css (2.5 years)",
  "JavaScript (2 year)",
  "Node.js, Rest Api (1 year)",
  "Sass, Scss (8 months)",
  "React.js, Styled Components, Context Api (6 months)"
]

const doList = [
  "Pixel Perfect conversation. (PSD->HTML,CSS,JS->JSX)",
  "Careful on UI/UX issues.",
  "Coding by considiring SEO rules. (Importance of html tags)",
  "Fully responsive designs with all devices."
]

const goalsList = [
  "Become an expert of React. (main goal)",
  "Develop mobile apps on React Native. (to support website already builded)",
  "Develop games for mobile and desktop platforms on Unity. (personal entertainment)"
]

const hobbiesList = [
  "I play chess. It helps me to make better my steps in the future.",
  "I watch Formula 1. It is very interesting for me to see what engineers can make and race engineers can set a plan. "
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
        <title>CV (Resume) - Yusuf Code</title>
        <meta name="description" content="Hello! I'm Yusuf. I develop Full-Stack websites for over 2.5 years but more dominant on Front-End."/>
        <meta name="keywords" content="yusufcode, yusuf code, web developer, full stack web developer, freelance web developer"/>
      </Head>

      <div className={styles.section}>
        <Header title="Personal Info" />

        <div className={styles.sectionBody}>
          <TitleText title="Full Name" text="Yusuf Akbaba" />
          <TitleText title="Age" text="22" />
        </div>
      </div>

      <div className={styles.section}>
        <Header title="About Me" />

        <div className={styles.sectionBody}>
          <SectionDescription text="I develop Full-Stack websites for over 2.5 years but more dominant on Front-End."/>

          <NumberLiList title="Technologies I Use" liArray={skillsList}/>
          <NumberLiList title="What I Do" liArray={doList}/>
          <NumberLiList title="Goals" liArray={goalsList}/>
          <NumberLiList title="Hobbies" liArray={hobbiesList}/>

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
          <TitleText title="E-Mail" text="yusuf1code@gmail.com" linkMail/>
          <TitleText title="Phone" text="It's not your lucky day :)"/>
        </div>
      </div>
      
    </>
  );
}
