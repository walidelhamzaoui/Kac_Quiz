import { useState } from 'react';
import  "./Quiz.css"
export default function Quiz(){
const[shofFinal,setshofFinal]=useState(false);
const[score,setscore]=useState(0);
const[currentQuest,setcurrentQuest]=useState(0);

const questions = [
  {
    text: "the year in which kenitra Club ws founded ?",
    options: [
      { id: 0, text: "1838", isCorrect: false },
      { id: 1, text: "1918", isCorrect: false },
      { id: 2, text: "1948", isCorrect: false },
      { id: 3, text: "1938", isCorrect: true },
    ],
  },
  {
    text: "who is the founder of Kenitrq Club ?",
    options: [
      { id: 0, text: "Siddiq Mackensie and Abdul Qadir Chai", isCorrect: true },
      { id: 1, text: "Mohamed Doumou", isCorrect: false },
      { id: 2, text: "Abdul Qadir Chai", isCorrect: false },
      { id: 3, text: "Siddiq Mackensie", isCorrect: false },
    ],
  },
  {
    text: "When did Kenitra Club achieve its first title in the Maroccan Leaque?",
    options: [
      { id: 0, text: "1965", isCorrect: false },
      { id: 1, text: "1990", isCorrect: false },
      { id: 2, text: "1660", isCorrect: true },
      { id: 3, text: "1961", isCorrect: false },
    ],
  },
  {
    text: "How many titles does the Kenitra club have ?",
    options: [
      { id: 0, text: "4", isCorrect: false },
      { id: 1, text: "5", isCorrect: true },
      { id: 2, text: "6", isCorrect: false },
      { id: 3, text: "7", isCorrect: false },
    ],
  },
  {
    text: "The best historical site for Kenitra Club?",
    options: [
      { id: 0, text: "Mohamed Boussati", isCorrect: true },
      { id: 1, text: "Bilal Biat", isCorrect: false },
      { id: 2, text: "Tarik Marzouk", isCorrect: true },
      { id: 3, text: "hicham El Aloui", isCorrect: false },
    ],
  },
];
// help///
const optionClick=(isCorrect)=>{
if(isCorrect) {
setscore(score + 1)

}
if(currentQuest+  1 < questions.length){
  setcurrentQuest(currentQuest  +1)
}else{
  setshofFinal(true)
}





console.log(isCorrect);

}
const restartGame=()=>{
setscore(0);
setcurrentQuest(0)
setshofFinal(false)

}  
return (
<div className="App mt-5">
    <div className='col-lg-6 col-11 p-2' >
   
    
    <div className=' text-center '>
      <h4 className='text-black-50'>Choose the correct response</h4>
      <h5 className='text-black'>CurrentScore <span className='text-dark'>{score}</span> </h5>
      </div>
      {shofFinal?(
            <div className='final-results   '>
            <h2>Final Result</h2>
            <h3>
             ( {(score/questions.length)*100} % )
            
            </h3>
            <button onClick={()=>restartGame()} className='btn btn-danger fs-5 mt-3'>Restart Game</button>
            
            </div>
      
      ):(
      <div className='question-cart text-center  '>
     <h5 className=''>Question {currentQuest+1} Out Of {questions.length}</h5> 
     <h1 className='question-text'>{questions[currentQuest].text}</h1>
     <ul>
     {questions[currentQuest].options.map((option)=>{
     return(
      <li className='option' onClick={()=>optionClick(option.isCorrect)} key={option.id}>{option.text}</li>
     )
     
     })}
    

     </ul>
      </div>
    )
    }
      </div>
      </div>
   
  );
}

