import '../styles/globals.css'
import '../configAmplify.js'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Auth, Hub } from 'aws-amplify'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  const [signedInUser, setSignedInUser] = useState(false)
  useEffect(() => {
    authListener()
  })
  async function authListener() {
    Hub.listen('auth', (data) => {
      switch (data.payload.event) {
        case 'signIn':
          return setSignedInUser(true)
        case 'signOut':
          return setSignedInUser(false)
      }
    })
    try {
      await Auth.currentAuthenticatedUser()
      setSignedInUser(true)
    } catch (err) {}
  }
  return (
  <div>
    <nav className="p-16 border-b border-gray-300">
      <Link href="/">
        <span className="mr-6 cursor-pointer">Latest Article Page</span>
      </Link>
      <Link href="/create-post">
        <span className="mr-6 cursor-pointer"> Management Page</span>
      </Link>
      {
        signedInUser && (
          <Link href="/my-posts">
            <span className="mr-6 cursor-pointer">My Article Page</span>
          </Link>
        )
      }
      <Link href="/profile">
        <span className="mr-6 cursor-pointer">Profile</span>
      </Link>
    </nav>
    <div className="py-8 px-16">
      <Component {...pageProps} />
    </div>
  </div>
  )
}
export default MyApp
