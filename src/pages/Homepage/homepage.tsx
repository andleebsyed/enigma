export function Homepage() {
    return (
        <div>
            <header className="flex border-b-4">
                <h1 className="text-white text-2xl font-bold p-2">Enigma!</h1>
            </header>
            <main className="flex flex-row justify-around">
                <section className="max-w-md mt-10">
                    <p className="text-center p-4 text-white text-xl min-w-max">
                        Play Quizzes of your choice and test your General Knowledge

                      
                        <p className="text-center p-4 text-red font-bold">  Instructions</p>
                        <p className="text-center p-4 text-white">There are different categories inside from which you can play.</p>
                        
            <p className="text-center p-4 text-white"> For each question</p>
                       
        <p className="text-center p-4 text-white">if you answer correctly you willl be rewarded with <span className="text-green font-bold">5 points</span></p>

            <p className="text-center p-4 text-white">if you answer incorrectly, <span className="text-red font-bold">2 points will be deducted</span> from your total points</p>
                        
                        <p className="text-center p-4 text-white"> Sounds Fair?</p>
                        <button className="bg-red p-4  rounded w-60">Sign Up</button>
                       
                    </p>
                </section>

                <section className="w-96 p-4 mt-10 bg-grey-light ">
                    <p className="text-center text-white font-bold text-xl">Already have an Account?</p>
                    <form className="flex flex-col">
                        <label className="text-white mt-8">Username:</label>
                        <input className="rounded-sm p-1.5 mb-8 bg-grey-lighter font-bold" type="text" name="username" required  />
                        <label className="text-white">Password:</label>
                        <input className="rounded-sm p-1.5 mb-20 bg-grey-lighter font-bold" type="password" name="password" required />
                        <input className="bg-red p-4 text-white rounded" type="submit" name ="Sign In" value = "Sign In" />
                    </form>
                </section>
            </main>
       
        </div>
    )
}