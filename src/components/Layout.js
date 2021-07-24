import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { sidebar, list, subTitle } from './layout.module.css'

const links = [
  {
    title: 'About',
    subTitle: 'MEMEGAGA',
    to: '/about',
  },
  {
    title: 'Posts',
    subTitle: '東看看西看看',
    to: '/posts',
  },
  {
    title: 'Portfolios',
    subTitle: '成就感在哪',
    to: '/portfolios',
  },
]

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <aside className={sidebar}>
        <div className="p-4">
          <div className="space-y-4 mb-6">
            <Link
              to="/"
              className="inline-block text-secondary hover:bg-secondary hover:text-white px-2"
            >
              <h1 className="font-bold text-8xl">HUI's BLOG</h1>
            </Link>
            <StaticImage
              src="../images/hui.jpg"
              aspectRatio={16 / 9}
              alt="hui"
              objectFit="contain"
              className="pointer-events-none"
            />
          </div>
          <nav>
            <ul className={list}>
              {links.map((link) => (
                <li key={link.title}>
                  <Link to={link.to} className="block space-x-4">
                    <span className="inline-block text-3xl">{link.title}</span>
                    <span className={subTitle}>{link.subTitle}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
      <main className="min-h-screen flex-1 bg-red-300">{children}</main>
    </div>
  )
}

export default Layout
