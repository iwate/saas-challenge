import { useSession, signIn } from "next-auth/react"
import useSWR from "swr";

const fetcher = (url, token) => {
    const headers = new Headers();
    headers.append('Authorization', `Bearer ${token}`)
    return fetch(url, { headers, mode: "cors" }).then(res => res.text())
}

const ApiData = () => {
    const { data: session } = useSession()
    const { data, error } = useSWR([`${session.apiEp}/api/GetProfile?oid=${session.oid}`, session.idToken], fetcher)
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
                <button onClick={() => window.location = '/api/auth/logout'}>Sign out</button>
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
