export function SignIn() {
    return (
        <section className="w-96 p-8 mt-10 bg-grey-light m-3">
                    <p className="text-center text-white font-bold text-xl">Already have an Account?</p>
                    <form className="flex flex-col">
                        <label className="text-white mt-8">Username:</label>
                        <input className="rounded-sm p-1.5 mb-8 bg-grey-lighter font-bold" type="text" name="username" required  />
                        <label className="text-white">Password:</label>
                        <input className="rounded-sm p-1.5 mb-20 bg-grey-lighter font-bold" type="password" name="password" required />
                        <input className="bg-red p-4 text-white rounded" type="submit" name ="Sign In" value = "Sign In" />
                    </form>
                </section>
    )
}