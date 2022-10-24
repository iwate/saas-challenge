import { useSession, signIn, signOut } from "next-auth/react"
import useSWR from "swr";

const ep = process.env.NEXT_PUBLIC_API_EP
const createFetcher = token => {
    const headers = new Headers();
    headers.append('Authorization', `Bearer ${token}`)
    return async (url) => fetch(url, { headers, mode: "cors" }).then(res => res.text())
}

const ApiData = () => {
    const { data: session } = useSession()
    const { data, error } = useSWR(`${ep}/api/HttpTrigger1?name=iwate`, createFetcher(session.idToken))
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    return <div>{data}</div>
}

function HomePage() {
    const { data: session } = useSession()

    if (session) {
        return (
            <>
                Signed in as {session.user.email} <br />
                <ApiData/> <br/>
                <button onClick={() => signOut()}>Sign out</button>
            </>
        )
    }
    return (
        <>
            Not signed in <br />
            <button onClick={() => signIn('azure-ad-b2c')}>Sign in</button>
        </>
    )
}

export default HomePage