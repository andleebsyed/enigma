import { Link } from "react-router-dom"

export function Intro() {
    return (
        <main className="max-w-md mt-10 m-3">
        <p className="text-center pb-4 text-white text-xl ">
            Play Quizzes of your choice and test your General Knowledge

          
            <p className="text-center pb-4 text-red font-bold">  Instructions</p>
            <p className="text-center pb-4 text-white">There are different categories inside from which you can play.</p>
            
<p className="text-center pb-4 text-white"> For each question</p>
           
<p className="text-center pb-4 text-white">if you answer correctly you will be rewarded with <span className="text-green font-bold">5 points</span></p>

<p className="text-center pb-4 text-white">if you answer incorrectly, <span className="text-red font-bold">2 points will be deducted</span> from your total points</p>
            
                <p className="text-center pb-4 text-white"> Sounds Fair?</p>
                <Link to = '/signup'>
                <button className="bg-red p-4  rounded w-60">Sign Up</button>

                </Link>
           
        </p>
    </main>
    )
}