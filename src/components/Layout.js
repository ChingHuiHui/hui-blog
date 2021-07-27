import React, { useState } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { sidebar, list, subTitle, isOpen, tag } from './layout.module.css'

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
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)

  // const { site } = useStaticQuery(graphql`
  //   query {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <div className="flex">
      <aside className={`${sidebar} ${isSideBarOpen ? isOpen : ''}`}>
        <div className="backdrop-filter backdrop-grayscale"></div>
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
          {/* <div className="absolute bottom-0 left-0 right-0 bg-white px-4">
            <ul className="flex justify-between">
              <li>
                <a>GITHUB</a>
              </li>
              <li>RESUME</li>
              <li>INSTAGRAM</li>
              <li>LINKEDIN</li>
            </ul>
          </div> */}
        </div>
      </aside>
      <main className="min-h-screen flex-1 bg-white my-12 lg:my-15">
        {children}
      </main>
    </div>
  )
}

export default Layout
