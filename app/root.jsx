import { Outlet, LiveReload, Link, Links, Meta } from "@remix-run/react";
import globalStylesUrl from '~/styles/global.css'
export const links = () => [{rel: 'stylesheet', href: globalStylesUrl }]

export const meta = () => { 
  const description = 'A cool blog built with Remix'
  const keywords = 'remix, react, javascript'

  return {
    description,
    keywords
  }
}
// rfce
// npm i prisma @prisma/client
// npx prisma init --datasource-provider sqlite
// npx prisma db push
// node prisma/seed
// npx prisma studio

export default function App() {
  return(
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  )
}

function Document({ children, title}){
  return (
    <html lang="en">
      <head>
        <Links />
        <Meta />
        <title>{title ? title: 'Remix Blog'}</title>
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === 'development' ?
        <LiveReload /> : null}
      </body>
    </html>
  )
}

function Layout({children}){
  return (
    <>
      <nav className="navbar">
        <Link to='/' className="logo">
          Remix
        </Link>
        <ul className="nav">
          <li>
            <Link to='/posts'>Posts</Link>
          </li>
        </ul>
      </nav>
      <div className="container">
        {children}
      </div>
    </>
  )
}

// export function ErrorBoundary({error}){
//     console.log(error)
//     return (
//         <Document>
//           <Layout>
//             <h1>Error</h1>
//             <p>{error.message}</p>
//           </Layout>
//         </Document>
//     )
// }