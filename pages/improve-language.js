import { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Improve-language.module.scss";
import stylesButton from "../styles/Button.module.scss";
import Button from "../components/Button";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Loader from "react-loader-spinner";
import axios from "axios";
import Flags from "country-flag-icons/react/3x2"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Home() {

  const [screenSelectLanguage, setScreenSelectLanguage] = useState(1)
  const [myLanguage, setMyLanguage] = useState('')
  const [improveLanguage, setImproveLanguage] = useState('')
  const [myLanguageDrop, setMyLanguageDrop] = useState(false)
  const [improveLanguageDrop, setImproveLanguageDrop] = useState(false)
  
  const [screenSelectStudyType, setScreenSelectStudyType] = useState(0)
  const [studyType, setStudyType] = useState('')
  
  const [screenSelectTheme, setScreenSelectTheme] = useState(0)
  const [theme, setTheme] = useState('')
  
  const [screenLearn, setScreenLearn] = useState(0)
  const [screenTest, setScreenTest] = useState(0)

  const [category, setCategory] = useState('general')
  const [allWords, setAllWords] = useState([])
  const [neverAskedWords, setNeverAskedWords] = useState([])
  const [question, setQuestion] = useState()
  const [answers, setAnswers] = useState()
  const [answeredQuestions, setAnsweredQuestions] = useState([])

  useEffect(() => {
    getAllData(category)
  }, [])

  //SCREEN SELECT LANGUAGE
  function myLanguageDropToggle(){
    setMyLanguageDrop(!myLanguageDrop)
    setImproveLanguageDrop(false)
  }

  function improveLanguageDropToggle(){
    setImproveLanguageDrop(!improveLanguageDrop)
    setMyLanguageDrop(false)
  }

  function setLanguages(typleLanguage, selectedLanguage){

    if(typleLanguage == 'myLanguage'){
      setMyLanguage(selectedLanguage)

      if(selectedLanguage == improveLanguage){
        setImproveLanguage('')
      }
      
    } else if(typleLanguage == 'improveLanguage'){
      setImproveLanguage(selectedLanguage)

      if(selectedLanguage == myLanguage){
        setMyLanguage('')
      }
      
    }

    setMyLanguageDrop(false)
    setImproveLanguageDrop(false)
    
  }

  function continueButtonClickSelectLanguage(){
    setScreenSelectLanguage(0)
    setScreenSelectStudyType(1)
  }

  //SCREEN SELECT STUDY TYPE
  function setStudyTypes(e, type){

    const otherSelected = e.target.closest(`.${styles.screenSelectStudyType_selectCards}`).getElementsByClassName(styles.active)
    
    if(otherSelected.length > 0){
      otherSelected[0].classList.remove(styles.active)

    }
    
    const selected = e.target
    selected.classList.add(styles.active)

    if(type == 'learn'){
      setStudyType('learn')
    } else if(type == 'test'){
      setStudyType('test')
    }

  }
  
  function continueButtonClickSelectStudyType(){
    setScreenSelectStudyType(0)
    setScreenSelectTheme(1)
  }

  //SCREEN SELECT THEME
  function showThemeListDrop(e){

    const dropBody = e.target.closest(`.${styles.screenSelectTheme_themeListDrop}`).getElementsByClassName(styles.screenSelectTheme_themeListDropBody)

    if(!dropBody[0].classList.contains(styles.showDropBody)){
      dropBody[0].classList.add(styles.showDropBody)
      
    } else{
      dropBody[0].classList.remove(styles.showDropBody)
    }
    
  }

  //SCREEN TEST
  async function getAllData(cat){

    if(cat){
      cat = `?cat=${cat}`
    } else{
      cat = ``
    }
    
    axios
    .get(`/api/improve-language${cat}`)
    .then(res => {
      setAllWords(res.data)
      setNeverAskedWords(res.data)
      newQuestionAndAnswers(res.data)
    })
    .catch(err =>{
      console.log(err)
    })

  }

  async function newQuestionAndAnswers(wordsList){

    let neverAskedList
    let allWordsList

    if(wordsList){
      neverAskedList = [...wordsList]
      allWordsList = [...wordsList]
    } else{
      neverAskedList = [...neverAskedWords]
      allWordsList = [...allWords]
    }

    const questionIndex = randomNumber(neverAskedList.length)
    const newQuestion = neverAskedList[questionIndex]

    const questionId = newQuestion._id
    for (let i = 0; i < allWordsList.length; i++) {
      if(allWordsList[i]._id === questionId){
        allWordsList.splice(i, 1)
      }
    }

    let newAnswers = []
    let answerIndex
    for (let i = 0; i < 4; i++) {
      answerIndex = randomNumber(allWordsList.length)
      newAnswers[i] = allWordsList[answerIndex]
      allWordsList.splice(answerIndex, 1)
    }

    newAnswers.push(newQuestion)
    const randomisedAnswers = newAnswers.sort(()=>Math.random() - 0.5)

    setQuestion(newQuestion)
    setAnswers(randomisedAnswers)

    neverAskedList.splice(questionIndex, 1)
    setNeverAskedWords(neverAskedList)
    
  }

  function randomNumber(max) {
    return Math.floor(Math.random() * max);
  }

  function continueButtonStatus(action){

    const button = document.getElementsByClassName(styles.button)
    
    if(action){
      button[0].classList.remove(stylesButton.disabled)
    } else{
      document.getElementsByClassName(styles.selectedAnswer)[0].classList.remove(styles.selectedAnswer)
      button[0].classList.add(stylesButton.disabled)
    }

    
  }

  function chooseAnswer(e){

    continueButtonStatus(true)
    
    const otherSelected = e.target.closest('div').getElementsByClassName(styles.selectedAnswer)
    
    if(otherSelected.length > 0){
      otherSelected[0].classList.remove(styles.selectedAnswer)
    }
    
    const selected = e.target
    selected.classList.add(styles.selectedAnswer)

  }

  function continueButtonClick(){

    if(document.getElementsByClassName(styles.selectedAnswer)){

      const questionWord = document.getElementsByClassName(styles.questionWord)
      const selectedWord = document.getElementsByClassName(styles.selectedAnswer)

      const questionWordId = questionWord[0].getAttribute('wordId')
      const selectedWordId = selectedWord[0].getAttribute('wordId')
      
      let result = false
      
      if(selectedWord.length > 0){
        if(questionWordId === selectedWordId){
          result = true
        } else{
          result = false
        }
      }

      continueButtonStatus(false)
      newQuestionAndAnswers()
      addAnsweredQuestion(question, answers, selectedWordId, result)
      
    }

  }

  function addAnsweredQuestion(question, answers, answer, result){

    const newAnswer = {
      "questionId":question._id,
      "answers":[
        {"answerId":answers[0]._id},
        {"answerId":answers[1]._id},
        {"answerId":answers[2]._id},
        {"answerId":answers[3]._id},
        {"answerId":answers[4]._id}
      ],
      "answerId":answer,
      "result":result
    }

    let temporaryList = answeredQuestions
    temporaryList.push(newAnswer)
    setAnsweredQuestions(temporaryList)

  }
  
  return (
    <>
      <Head>
        <title>Improve Language - Yusuf Code</title>
        <meta name="description" content="You can learn words with this application."/>
        <meta name="keywords" content="learn, language, words, learn words, learn language, yusufcode, yusuf code, web developer, full stack web developer, freelance web developer"/>
      </Head>

      <div className={styles.back}>
        <div className={styles.main}>

          {screenSelectLanguage ? 
            <div className={styles.screenSelectLanguage}>
              <div className={styles.screenSelectLanguage_selectCards}>
                <div className={styles.screenSelectLanguage_selectCardCover}>
                  <div className={styles.screenSelectLanguage_selectCard}>
                    <h3 className={styles.screenSelectLanguage_selectTitle}>My Language</h3>
                    <div className={styles.screenSelectLanguage_select} onClick={() => myLanguageDropToggle()}>
                      {
                        myLanguage == 'TR' ?
                        <Flags.TR width={75} className={styles.screenSelectLanguage_flagInSelect}/> :
                        myLanguage == 'GB' ?
                        <Flags.GB width={75} className={styles.screenSelectLanguage_flagInSelect}/> :
                        myLanguage == 'RU' ?
                        <Flags.RU width={75} className={styles.screenSelectLanguage_flagInSelect}/> :
                        ''
                      }
                    </div>
                    {
                      myLanguageDrop ? 
                      <div className={styles.screenSelectLanguage_options}>
                        <div className={styles.screenSelectLanguage_option} onClick={() => setLanguages('myLanguage', 'TR')}>
                          <Flags.TR width={50} className={styles.screenSelectLanguage_flagInSelect}/>
                        </div>
                        <div className={styles.screenSelectLanguage_option} onClick={() => setLanguages('myLanguage', 'GB')}>
                          <Flags.GB width={50} className={styles.screenSelectLanguage_flagInSelect}/>
                        </div>
                        <div className={styles.screenSelectLanguage_option} onClick={() => setLanguages('myLanguage', 'RU')}>
                          <Flags.RU width={50} className={styles.screenSelectLanguage_flagInSelect}/>
                        </div>
                      </div>
                      : false
                    }
                  </div>
                </div>
        
                <div className={styles.screenSelectLanguage_selectCardCover}>
                  <div className={styles.screenSelectLanguage_selectCard}>
                  <h3 className={styles.screenSelectLanguage_selectTitle}>Improve Language</h3>
                    <div className={styles.screenSelectLanguage_select} onClick={() => improveLanguageDropToggle()}>
                      {
                        improveLanguage == 'TR' ?
                        <Flags.TR width={75} className={styles.screenSelectLanguage_flagInSelect}/> :
                        improveLanguage == 'GB' ?
                        <Flags.GB width={75} className={styles.screenSelectLanguage_flagInSelect}/> :
                        improveLanguage == 'RU' ?
                        <Flags.RU width={75} className={styles.screenSelectLanguage_flagInSelect}/> :
                        ''
                      }
                    </div>
                    {
                      improveLanguageDrop ? 
                      <div className={styles.screenSelectLanguage_options}>
                        <div className={styles.screenSelectLanguage_option} onClick={() => setLanguages('improveLanguage', 'TR')}>
                          <Flags.TR width={50} className={styles.screenSelectLanguage_flagInSelect}/>
                        </div>
                        <div className={styles.screenSelectLanguage_option} onClick={() => setLanguages('improveLanguage', 'GB')}>
                          <Flags.GB width={50} className={styles.screenSelectLanguage_flagInSelect}/>
                        </div>
                        <div className={styles.screenSelectLanguage_option} onClick={() => setLanguages('improveLanguage', 'RU')}>
                          <Flags.RU width={50} className={styles.screenSelectLanguage_flagInSelect}/>
                        </div>
                      </div>
                      : false
                    }
                  </div>
                </div>
              </div>
              
              {myLanguage != '' && improveLanguage != '' ?
              <Button title="Continue" className={styles.screenSelectLanguage_continueButton} buttonType="primary" onClick={()=>continueButtonClickSelectLanguage()}/>
              : false
              }
            </div>
            : false
          }

          {screenSelectStudyType ?
            <div className={styles.screenSelectStudyType}>
              <div className={styles.screenSelectStudyType_selectCards}>
                <div className={styles.screenSelectStudyType_selectCardCover}>
                  <div className={styles.screenSelectStudyType_selectCard} onClick={(e) => setStudyTypes(e, 'learn')}>
                    Learn
                  </div>
                </div>
                <div className={styles.screenSelectStudyType_selectCardCover}>
                  <div className={styles.screenSelectStudyType_selectCard} onClick={(e) => setStudyTypes(e, 'test')}>
                    Test
                  </div>
                </div>
              </div>

              {studyType != '' ?
              <Button title="Continue" className={styles.screenSelectStudyType_continueButton} buttonType="primary" onClick={()=>continueButtonClickSelectStudyType()}/>
              : false
              }
            </div>
            : false
          }

          {screenSelectTheme ?
            <div className={styles.screenSelectTheme}>
              <ul className={styles.screenSelectTheme_themeList}>
                <li className={styles.screenSelectTheme_themeListElement}>All</li>
                <li className={styles.screenSelectTheme_themeListElement}>Family</li>
                <div className={styles.screenSelectTheme_themeListDrop}>
                  <li className={styles.screenSelectTheme_themeListDropHeader} onClick={(e) => showThemeListDrop(e)}>University <KeyboardArrowDownIcon/></li>
                  <div className={styles.screenSelectTheme_themeListDropBody}>
                    <li className={styles.screenSelectTheme_themeListDropElement}>All</li>
                    <li className={styles.screenSelectTheme_themeListDropElement}>University Registration</li>
                    <li className={styles.screenSelectTheme_themeListDropElement}>University Math</li>
                    <li className={styles.screenSelectTheme_themeListDropElement}>University Physics</li>
                    <li className={styles.screenSelectTheme_themeListDropElement}>University Chemistry</li>
                  </div>
                </div>
              </ul>
            </div>
            : false
          }

          {screenTest ? 
            <div id="screenTest">
              <div className={styles.actionBar}>
                <Button
                  title={<MenuIcon/>}
                  buttonType="icon"
                  color="white"
                  size="l"
                  className={styles.menuButton}
                />
              </div>

              <div className={styles.scoreboardCard}>
                <div className={styles.sbPartCover}>
                  <div className={styles.sbPart}>
                    <h3 className={styles.sbTitle}>{category}</h3>
                    <p className={styles.sbText}>{allWords ? allWords.length : <Loader type="TailSpin" color="#aaa" height={25} width={25}/>}</p>
                  </div>
                </div>

                <div className={styles.sbPartCover}>
                  <div className={styles.sbPart}>
                    <h3 className={styles.sbTitle}>Rest</h3>
                    <p className={styles.sbText}>{neverAskedWords ? neverAskedWords.length : '0'}</p>
                  </div>
                </div>

                <div className={styles.sbPartCover}>
                  <div className={styles.sbPart}>
                    <h3 className={styles.sbTitle}>Answered</h3>
                    <p className={styles.sbText}>{answeredQuestions ? answeredQuestions.length : '0'}</p>
                  </div>
                </div>
              </div>
              
              <div className={styles.questionCard}>
                <h3 className={styles.title}>English</h3>
                {
                  question ? <p className={styles.questionWord} wordid={question._id}>{question.en}</p> : <Loader type="TailSpin" color="#aaa" height={25} width={25}/>
                }
              </div>

              <div className={styles.answerCard}>
                <h3 className={styles.title + ' ' + styles.titleWhite}>Russian</h3>
                {
                  answers ? answers.map((answer, i)=><p key={i  } className={styles.answerWord} wordid={answer._id} onClick={(e) => chooseAnswer(e)}>{answer.ru}</p>) : <Loader type="TailSpin" color="#fff" height={25} width={25}/>
                }
              </div>
              
              <Button title="Continue" className={styles.button} buttonType="primary" onClick={()=>continueButtonClick()}/>
            </div> 
            : false
          }
          
        </div>
      </div>

    </>
  );
}