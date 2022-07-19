import React from "react"

export default function Qustion(props){
    console.log(props.checkedAnswer)
    const [selections,setSelections] = React.useState(props.answers)
    function handleClick(selectedAnswer){
        let result=[]
        for(let i=0;i<selections.length;i++){
            if(selections[i].answer===selectedAnswer.answer){
                result.push({
                    answer:selections[i].answer,
                    isSelected:true,
                    isCorrect:selections[i].answer===selectedAnswer.isCorrect? true:false
                })
            }else{
                result.push({
                    answer:selections[i].answer,
                    isSelected:false
                })
            }
        }
        props.setQuestionData(prevData => prevData.map( data => (
            data.props.question===props.question ? {...data,answers:result} : {...data})))
        setSelections(result)
    }
    const answerButtons = selections.map((answer)=>
    <button className="question-button" 
            style={
            answer.isSelected===true ? {backgroundColor:"#E6E6FA"}:
            answer.isCorrect === true && props.isCheckedAnswer ? {backgroundColor:"green"} :
            answer.isCorrect === true && props.isCheckedAnswer === false ? {backgroundColor:"red"}  :
            {backgroundColor:"white"}}
            onClick={()=>handleClick(answer)}
           >
        {answer.answer}
    </button>)
    return(
        <div>
            <h1 className = "question-header">{props.question}</h1>
            <div className = "question-answer">
                {answerButtons}
            </div>
        </div>
    )
}