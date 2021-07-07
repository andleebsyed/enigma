import { useNavigate } from "react-router-dom"

export function SignUp() {
    const navigate = useNavigate()
    function SignUpSubmitHandler(event :React.SyntheticEvent) {
        event.preventDefault();
        navigate('/categories', {replace: true})
        
    }
    return (
        <div className="flex min-h-screen items-center justify-center bg-grey-dark">
                  <main className="flex flex-col w-96 p-8  m-3 bg-grey-light rounded-sm">
        <span className="text-center text-blue font-bold text-xl">Sign Up?</span>
        <form className="flex flex-col" onSubmit={SignUpSubmitHandler}>
            <label className="text-white mt-8">Username:</label>
            <input className="rounded-sm p-1.5 mb-8 bg-grey-lighter font-bold" type="text" name="username" required />
            <label className="text-white">Email:</label>
            <input className="rounded-sm p-1.5 mb-8 bg-grey-lighter font-bold" type="email" name="email" required  />
            <label className="text-white">Password:</label>
            <input className="rounded-sm p-1.5 mb-8 bg-grey-lighter font-bold" type="password" name="password" required />
            <label className="text-white">Confirm Password:</label>
            <input className="rounded-sm p-1.5 mb-14 bg-grey-lighter font-bold" type="password" name="confirmPassword" required />   
            <input className="bg-red p-4 text-white rounded" type="submit" name="signUp" value="Sign Up" />
        </form>
    </main>
         </div>
      
    )
}