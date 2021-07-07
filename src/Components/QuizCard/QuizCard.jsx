import { Link } from "react-router-dom"

export function QuizCard() {
    return (
        <section className=" bg-grey-dark h-72 w-56 flex flex-col mt-4 m-4 items-center rounded">
                <h1 className="text-blue text-2xl font-bold mb-2">Aqua</h1>
                <img alt="placeholder" src="https://via.placeholder.com/150" />
            <span className="text-white mx-4 text-center ">Do you know about marine life</span>
            <Link to="/question">
            <button className="p-1 m-1  w-40 bg-red text-white font-semibold  rounded">Play Now</button>
            </Link>
                
            </section>
    )
}