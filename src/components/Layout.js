import * as React from 'react'
import { Link } from 'gatsby'

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <aside className="bg-primary w-96">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="min-h-screen flex-1 bg-red-300">{children}</main>
    </div>
  )
}

export default Layout
