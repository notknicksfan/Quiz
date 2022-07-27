import React from "react"
import Homepage from "./components/Homepage"
import Question from "./components/Question"

export default function App(){
    const [homepage,setHomepage] = React.useState(true)
    function handleHomepage(){
        setHomepage(false)
    }
    const [questionData,setQuestionData] = React.useState()
    const [checkedAnswer,setCheckedAnswer] =React.useState(false)
    const [correctCount,setCorrectCount] = React.useState(0) 
    React.useEffect(function(){
        console.log("Effect ran")
        fetch("https://opentdb.com/api.php?amount=5")
            .then(res => res.json())
            //fixed issues where setQuestionData was not an array, was returning json
            .then(data => setQuestionData(
                data.results.map(
                    (data)=>
                    <Question 
                        question={data.question}
                        answers=
                        
                        {data.type==="boolean" ?  [{answer:"True",isSelected:false},{answer:"False",isSelected:false}]:
                            [data.correct_answer].concat(data.incorrect_answers).sort((a, b) => 0.5 - Math.random()).map(
                            function(answer){
                                return {
                                    answer:answer,
                                    isSelected:false,
                                }
                            }
                        )}
                        correct={data.correct_answer}
                        type={data.type}
                        setQuestionData={setQuestionData}
                        isChecked={checkedAnswer}
                    />)))
        
    },[])
     
    function checkAnswers(){
        let count = 0
        for(let i = 0;i<questionData.length;i++){
            const correct_answer = questionData[i].props.correct
            const selected_answer = questionData[i].answers.filter(answer => (answer.isSelected===true))
            if (selected_answer[0].answer === correct_answer){
                count+=1
            }
            
        }
        setCorrectCount(count)
        setCheckedAnswer(true)
        
    }
    function emptyQuestions(){
        setHomepage(true)
        setCheckedAnswer(false)
    }
    return(
        <div>
            {homepage ? <Homepage handleHomepage={()=>handleHomepage()}/> : 
            <div className = "app-questions">
                {questionData}
                {checkedAnswer===false ? <button className="app-check"onClick={checkAnswers}>Check answers</button>:""}
                {checkedAnswer===true ? 
                <div className="result">
                    <h3 className="app-results">You scored {correctCount}/{questionData.length} correct answers</h3>
                    <button className="app-playagain" onClick={emptyQuestions}>play again</button>
                </div>
                    : ""}
            </div>}
        </div>
    )
}