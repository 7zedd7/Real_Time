import { SignUp } from '@clerk/nextjs'

function SignUpPage() {
    return (
        <main className='flex h-screen w-full items-center justify-center'>
            <SignUp />
        </main>
    )
}

export default SignUpPage