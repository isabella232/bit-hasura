import NextAuth from 'next-auth'

export default ({ Component, pageProps }) => {
  return (
    <NextAuth.Provider>
      <Component {...pageProps} />
    </NextAuth.Provider>
  )
}