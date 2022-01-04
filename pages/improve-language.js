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
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function Home() {

  const [actionMenuDrop, setActionMenuDrop] = useState(false)

  const [screenSelectLanguage, setScreenSelectLanguage] = useState(1)
  const [myLanguage, setMyLanguage] = useState([])
  const [improveLanguage, setImproveLanguage] = useState([])
  const [myLanguageDrop, setMyLanguageDrop] = useState(false)
  const [improveLanguageDrop, setImproveLanguageDrop] = useState(false)
  
  const [screenSelectStudyType, setScreenSelectStudyType] = useState(0)
  const [studyType, setStudyType] = useState('')
  
  const [screenSelectCategory, setScreenSelectCategory] = useState(0)
  const [allCategories, setAllCategories] = useState([])
  const [category, setCategory] = useState()
  
  const [screenLearn, setScreenLearn] = useState(0)
  const [screenTest, setScreenTest] = useState(0)

  const [screenEndOfTest, setScreenEndOfTest] = useState(0)

  
  const [allWords, setAllWords] = useState([])
  const [neverAskedWords, setNeverAskedWords] = useState([])
  const [question, setQuestion] = useState()
  const [answers, setAnswers] = useState()
  const [answeredQuestions, setAnsweredQuestions] = useState([])
  const [correctAnswers, setCorrectAnswers] = useState([])
  const [wrongAnswers, setWrongAnswers] = useState([])

  function changeScreen(screenName){
    setScreenSelectLanguage(0)
    setScreenSelectStudyType(0)
    setScreenSelectCategory(0)
    setScreenLearn(0)
    setScreenTest(0)
    setScreenEndOfTest(0)

    if(screenName == 'selectLanguage'){
      setScreenSelectLanguage(1)
    } else if(screenName == 'studyType'){
      setScreenSelectStudyType(1)
    } else if(screenName == 'category'){
      setScreenSelectCategory(1)
    } else if(screenName == 'learn'){
      setScreenLearn(1)
    } else if(screenName == 'test'){
      setScreenTest(1)
    } else if(screenName == 'endOfTest'){
      setScreenEndOfTest(1)
    }

    setActionMenuDrop(false)
  }

  //SCREEN SELECT LANGUAGE
  function myLanguageDropToggle(){
    setMyLanguageDrop(!myLanguageDrop)
    setImproveLanguageDrop(false)
  }

  function improveLanguageDropToggle(){
    setImproveLanguageDrop(!improveLanguageDrop)
    setMyLanguageDrop(false)
  }

  function setLanguages(typleLanguage, selectedLanguageShort, selectedLanguageLong){

    if(typleLanguage == 'myLanguage'){
      setMyLanguage({'short':selectedLanguageShort, 'long': selectedLanguageLong})

      if(selectedLanguageShort == improveLanguage.short){
        setImproveLanguage([])
      }
      
    } else if(typleLanguage == 'improveLanguage'){
      setImproveLanguage({'short':selectedLanguageShort, 'long': selectedLanguageLong})

      if(selectedLanguageShort == myLanguage.short){
        setMyLanguage([])
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
    setScreenSelectCategory(1)
    getAllCategories()
  }

  async function getAllCategories(name){

    if(name){
      name = `?name=${name}`
    } else{
      name = ``
    }
    
    axios
    .get(`${process.env.NEXT_PUBLIC_API_IMPROVE_LANGUAGE_CATEGORIES}${name}`)
    .then(res => {
      setAllCategories(res.data)
    })
    .catch(err =>{
      console.log(err)
    })

  }

  //SCREEN SELECT CATEGORY
  function showCategoryListDrop(e){

    const drop = e.target.closest(`.${styles.screenSelectCategory_categoryListDrop}`)

    if(!drop.classList.contains(styles.activeDrop)){
      drop.classList.add(styles.activeDrop)
    } else{
      drop.classList.remove(styles.activeDrop)
    }
    
  }

  function setCategoryAndMove(cat){

    setCategory(cat)
    setScreenSelectCategory(0)
    
    if(studyType == 'learn'){
      setScreenLearn(1)
    } else if (studyType == 'test'){
      getAllData(cat)
      setScreenTest(1)
      setAnsweredQuestions([])
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
    .get(`${process.env.NEXT_PUBLIC_API_IMPROVE_LANGUAGE_WORDS}${cat}`)
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

    if(neverAskedList.length > 0){
      
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
      
    } else {

      endOfTest()
      
    }

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

  function endOfTest(){

    setScreenTest(0)
    setScreenEndOfTest(1)
    calculateAnsweredQuestions()
    
  }

  //SCREEN END OF TEST
  function calculateAnsweredQuestions(){

    let correctAnswersLocal = []
    let wrongAnswersLocal = []

    for (let i = 0; i < answeredQuestions.length; i++) {
      if(answeredQuestions[i].result == true){
        correctAnswersLocal[i] = answeredQuestions[i]
      } else{
        wrongAnswersLocal[i] = answeredQuestions[i]
      }
    }

    setCorrectAnswers(correctAnswersLocal)
    setWrongAnswers(wrongAnswersLocal)

    console.log(correctAnswersLocal)
    console.log(wrongAnswersLocal)

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
          {(myLanguage > [] && improveLanguage > []) || studyType || category ?  
            <div className={styles.actionBar}>
              {actionMenuDrop ?
                <Button
                  title={<CloseIcon/>}
                  buttonType="icon"
                  color="white"
                  size="l"
                  className={styles.actionButton}
                  onClick={() => setActionMenuDrop(false)}
                />
                :
                <Button
                  title={<MenuIcon/>}
                  buttonType="icon"
                  color="white"
                  size="l"
                  className={styles.actionButton}
                  onClick={() => setActionMenuDrop(true)}
                />
              }

              {actionMenuDrop ?
                <div className={styles.actionButtonList}>
                  <ul>
                    {(myLanguage > [] && improveLanguage > []) ?
                      <li onClick={() => changeScreen('selectLanguage')}>Select Language</li>
                      :false
                    }
                    {studyType ?
                      <li onClick={() => changeScreen('studyType')}>Select Study Type</li>
                      :false
                    }
                    {category ?
                      <li onClick={() => changeScreen('category')}>Select Category</li>
                      :false
                    }
                  </ul>
                </div>
                : false
              }
            </div>
            : false
          }

          {screenSelectLanguage ? 
            <div className={styles.screenSelectLanguage}>
              <div className={styles.screenSelectLanguage_selectCards}>
                <div className={styles.screenSelectLanguage_selectCardCover}>
                  <div className={styles.screenSelectLanguage_selectCard}>
                    <h3 className={styles.screenSelectLanguage_selectTitle}>My Language</h3>
                    <div className={styles.screenSelectLanguage_select} onClick={() => myLanguageDropToggle()}>
                      {
                        myLanguage.short == 'tr' ?
                        <Flags.TR width={75} className={styles.screenSelectLanguage_flagInSelect}/> :
                        myLanguage.short == 'en' ?
                        <Flags.GB width={75} className={styles.screenSelectLanguage_flagInSelect}/> :
                        myLanguage.short == 'ru' ?
                        <Flags.RU width={75} className={styles.screenSelectLanguage_flagInSelect}/> :
                        ''
                      }
                    </div>
                    {
                      myLanguageDrop ? 
                      <div className={styles.screenSelectLanguage_options}>
                        <div className={styles.screenSelectLanguage_option} onClick={() => setLanguages('myLanguage', 'tr', 'turkish')}>
                          <Flags.TR width={50} className={styles.screenSelectLanguage_flagInSelect}/>
                        </div>
                        <div className={styles.screenSelectLanguage_option} onClick={() => setLanguages('myLanguage', 'en', 'english')}>
                          <Flags.GB width={50} className={styles.screenSelectLanguage_flagInSelect}/>
                        </div>
                        <div className={styles.screenSelectLanguage_option} onClick={() => setLanguages('myLanguage', 'ru', 'russian')}>
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
                        improveLanguage.short == 'tr' ?
                        <Flags.TR width={75} className={styles.screenSelectLanguage_flagInSelect}/> :
                        improveLanguage.short == 'en' ?
                        <Flags.GB width={75} className={styles.screenSelectLanguage_flagInSelect}/> :
                        improveLanguage.short == 'ru' ?
                        <Flags.RU width={75} className={styles.screenSelectLanguage_flagInSelect}/> :
                        ''
                      }
                    </div>
                    {
                      improveLanguageDrop ? 
                      <div className={styles.screenSelectLanguage_options}>
                        <div className={styles.screenSelectLanguage_option} onClick={() => setLanguages('improveLanguage', 'tr', 'turkish')}>
                          <Flags.TR width={50} className={styles.screenSelectLanguage_flagInSelect}/>
                        </div>
                        <div className={styles.screenSelectLanguage_option} onClick={() => setLanguages('improveLanguage', 'en', 'english')}>
                          <Flags.GB width={50} className={styles.screenSelectLanguage_flagInSelect}/>
                        </div>
                        <div className={styles.screenSelectLanguage_option} onClick={() => setLanguages('improveLanguage', 'ru', 'russian')}>
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
                  {studyType == 'learn' ?
                    <div className={styles.screenSelectStudyType_selectCard +' '+ styles.active} style={{backgroundColor:'#d5d5d5', cursor:'default'}} onClick={(e) => setStudyTypes(e, 'test')}>
                    Learn
                    <small>(soon)</small>
                    </div>
                    : 
                    <div className={styles.screenSelectStudyType_selectCard} style={{backgroundColor:'#d5d5d5', cursor:'default'}} onClick={(e) => setStudyTypes(e, 'test')}>
                    Learn
                    <small>(soon)</small>
                    </div>
                  }
                </div>
                <div className={styles.screenSelectStudyType_selectCardCover}>
                  {studyType == 'test' ?
                    <div className={styles.screenSelectStudyType_selectCard +' '+ styles.active} onClick={(e) => setStudyTypes(e, 'test')}>
                    Test
                    </div>
                    : 
                    <div className={styles.screenSelectStudyType_selectCard} onClick={(e) => setStudyTypes(e, 'test')}>
                    Test
                    </div>
                  }
                </div>
              </div>

              {studyType != '' ?
              <Button title="Continue" className={styles.screenSelectStudyType_continueButton} buttonType="primary" onClick={()=>continueButtonClickSelectStudyType()}/>
              : false
              }
            </div>
            : false
          }

          {screenSelectCategory ?
            <div className={styles.screenSelectCategory}>
              <ul className={styles.screenSelectCategory_categoryList}>

                {allCategories ?
                  allCategories.map((cat, i) => 
                    <li key={i} className={styles.screenSelectCategory_categoryListLi} onClick={() => setCategoryAndMove(cat.name)}>{cat.name}</li>
                  )
                  : <Loader type="TailSpin" color="#fff" height={25} width={25}/>
                }
                
                {/* <li className={styles.screenSelectCategory_categoryListLi}>Family</li>
                <div className={styles.screenSelectCategory_categoryListDrop}>
                  <li className={styles.screenSelectCategory_categoryListLi} onClick={(e) => showCategoryListDrop(e)}>University <KeyboardArrowDownIcon/></li>
                  <div className={styles.screenSelectCategory_categoryListDropBody}>
                    <li className={styles.screenSelectCategory_categoryListDropLi}>All</li>
                    <li className={styles.screenSelectCategory_categoryListDropLi}>University Registration</li>
                    <li className={styles.screenSelectCategory_categoryListDropLi}>University Math</li>
                    <li className={styles.screenSelectCategory_categoryListDropLi}>University Physics</li>
                    <li className={styles.screenSelectCategory_categoryListDropLi}>University Chemistry</li>
                  </div>
                </div> */}
              </ul>
            </div>
            : false
          }

          {screenTest ? 
            <div id="screenTest">
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
                <h3 className={styles.title}>{improveLanguage.long}</h3>
                {
                  question ? <p className={styles.questionWord} wordid={question._id}>{question[improveLanguage.short]}</p> : <Loader type="TailSpin" color="#aaa" height={25} width={25}/>
                }
              </div>

              <div className={styles.answerCard}>
                <h3 className={styles.title + ' ' + styles.titleWhite}>{myLanguage.long}</h3>
                {
                  answers ? answers.map((answer, i)=><p key={i  } className={styles.answerWord} wordid={answer._id} onClick={(e) => chooseAnswer(e)}>{answer[myLanguage.short]}</p>) : <Loader type="TailSpin" color="#fff" height={25} width={25}/>
                }
              </div>
              
              <Button title="Continue" className={styles.button} buttonType="primary" disabled onClick={()=>continueButtonClick()}/>
            </div> 
            : false
          }

          {screenEndOfTest ?
            <div className="screenEndOfTest">
              <div className={styles.screenEndOfTest_endOfTest}>
                <div className={styles.screenEndOfTest_answersCards}>
                  <div className={styles.screenEndOfTest_answersCardCover}>
                    <div className={styles.screenEndOfTest_answersCard}>
                      <h3 className={styles.screenEndOfTest_answersCardTitle}>Correct Answers</h3>
                      <p className={styles.screenEndOfTest_answersCardResult +' '+ styles.correct}>{correctAnswers.length}</p>
                    </div>
                  </div>

                  <div className={styles.screenEndOfTest_answersCardCover}>
                    <div className={styles.screenEndOfTest_answersCard}>
                      <h3 className={styles.screenEndOfTest_answersCardTitle}>Wrong Answers</h3>
                      <p className={styles.screenEndOfTest_answersCardResult +' '+ styles.wrong}>{wrongAnswers.length}</p> 
                    </div>
                  </div>
                </div>
              </div>
            </div>
            : false
          }
          
        </div>
      </div>

    </>
  );
}