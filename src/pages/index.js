import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"

const Home = () => {
  return (
    <Layout>
      <Metadata title="Home" description="This is my home page" />
      <h1>Home Page</h1>
      <h2>I'm ibas, a teacher and ...</h2>
    </Layout>
  )
}

export default Home