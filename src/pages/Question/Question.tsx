import { General } from "../../Components/Options/General"
import { Right } from "../../Components/Options/Right"
import { Wrong } from "../../Components/Options/Wrong"
import { QuizPerformance } from "../../Components/QuizPerformance/QuizPerformance"
import { QuizQuestion } from "../../Components/QuizQuestion/QuizQuestion"

export function Question() {
    
    return (
        <div className="min-h-screen bg-grey">
            {/* <section className="flex justify-between">
                <span className="text-white font-bold m-2">Question 0/0</span> kjkjkj
                <span className="text-white font-bold m-2">Score:100</span>  
            </section> */}
            <QuizPerformance /> 
            
            <main className="flex flex-col items-center ml-2 mr-2 mt-16 ">
                <QuizQuestion />
                {/* options */}
                <General />
                <Right />
                <Wrong />
                <General />
                <button className="text-white bg-blue font-bold p-1 w-20  sm:p-2 ml-3 sm:mr-24 rounded self-end">Skip</button>
            </main>
        </div>
    )
}