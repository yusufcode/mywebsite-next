import { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Improve-language.module.scss";
import stylesButton from "../styles/Button.module.scss";
import Button from "../components/Button";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Loader from "react-loader-spinner";
import axios from "axios";

export default function Home() {

  const [category, setCategory] = useState('family')
  const [allWords, setAllWords] = useState([])
  const [neverAskedWords, setNeverAskedWords] = useState([])
  const [question, setQuestion] = useState()
  const [answers, setAnswers] = useState()
  const [answeredQuestions, setAnsweredQuestions] = useState([])

  useEffect(() => {
    getAllData(category)
  }, [])

  async function getAllData(cat){

    if(cat){
      cat = `?cat=${cat}`
    } else{
      cat = ``
    }
    
    axios
    .get(`http://127.0.0.1:3000/api/improve-language${cat}`)
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
        <link rel="icon" href="/img/logo/logo.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <title>Improve Language - Yusuf Code</title>
        <meta
          name="description"
          content="You can learn words with this application."
        />
        <meta
          name="keywords"
          content="learn, language, words, learn words, learn language, yusufcode, yusuf code, web developer, full stack web developer, freelance web developer"
        />
      </Head>

      <div className={styles.back}>
        <div className={styles.main}>

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
                <h3 className={styles.sbTitle}>Family</h3>
                <p className={styles.sbText}>{allWords ? allWords.length : <Loader type="TailSpin" color="#aaa" height={25} width={25}/>}</p>
              </div>
              {/* <div className={styles.sbCard}>
                <ul>

                  {
                    allWords.map((w,i)=>
                    <li key={i}>{w}</li>
                    )
                  }
                  
                  
                </ul>
              </div> */}
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
            <h3 className={styles.title}>Turkish</h3>
            {
              question ? <p className={styles.questionWord} wordid={question._id}>{question.tr}</p> : <Loader type="TailSpin" color="#aaa" height={25} width={25}/>
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
      </div>

    </>
  );
}
