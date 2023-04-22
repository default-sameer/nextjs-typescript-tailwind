import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col py-2">
      <Head>
        <title>Next App with Typescript & Tailwind</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-head text-6xl font-bold">
          Welcome to{' '}
          <a
            className="relative text-blue-600 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-100 after:bg-black after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-right hover:after:scale-x-0"
            href="https://nextjs.org"
          >
            Next.js!
          </a>
        </h1>

        <p className="text-paragraph mt-3 text-2xl">
          Get started by editing{' '}
          <code className="rounded-md p-3 font-mono text-lg">
            pages/index.tsx
          </code>
        </p>
      </main>
    </div>
  )
}

export default Home
