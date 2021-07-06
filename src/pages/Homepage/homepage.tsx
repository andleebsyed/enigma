import { Intro } from "../../Components/Intro/Intro";
import { SignIn } from "../../Components/SignIn/SignIn";

export function Homepage() {
    return (
        <div>
            <main className="flex flex-row justify-around flex-wrap bg-grey">
                <Intro />
                <SignIn />
            </main>
        </div>
    )
}