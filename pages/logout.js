import { signOut } from "next-auth/react"
import { useEffect } from "react"

function Logout() {
    useEffect(() => {
        signOut({callbackUrl:window.location.origin});
    },[])

    return <div>Log outing...</div>
}

export default Logout