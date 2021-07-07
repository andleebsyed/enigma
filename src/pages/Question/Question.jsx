import { General } from "../../Components/Options/General"
import { Right } from "../../Components/Options/Right"
import { Wrong } from "../../Components/Options/Wrong"

export function Question() {
    
    return (
        <div className="min-h-screen bg-grey">
            <h1 className="text-white font-bold m-2">Question 0/0</h1>
            <main className="flex flex-col items-center ml-2 mr-2 mt-16 ">
                <div className="bg-grey-extralight rounded mb-4 md:w-4/5">
                    <p className="font-extrabold text-white break-all p-4">Question goes uygfweui y jhdwyh jhdgfh jsdchv jkhsfre yhfuj  sidusiud iusdisuf ikuiku</p>
                </div>
                <General />
                <Right />
                <Wrong />
                <General />
            </main>
        </div>
    )
}