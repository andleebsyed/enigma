import { General } from "../../Components/Options/General"
import { Right } from "../../Components/Options/Right"
import { Wrong } from "../../Components/Options/Wrong"

export function Question() {
    
    return (
        <div className="min-h-screen bg-grey">
            <section className="flex justify-between">
                <span className="text-white font-bold m-2">Question 0/0</span>
                <span className="text-white font-bold m-2">Score:100</span>
            </section>
            
            <main className="flex flex-col items-center ml-2 mr-2 mt-16 ">
                <div className="bg-grey-extralight rounded mb-4 md:w-4/5">
                    <p className="font-extrabold text-white break-all p-4">Question goes uygfweui y jhdwyh jhdgfh jsdchv jkhsfre yhfuj  sidusiud iusdisuf ikuiku</p>
                </div>
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