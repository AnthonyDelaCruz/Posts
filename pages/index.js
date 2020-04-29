import Head from "next/head";
import Layout from "../components/Layout";
import CardItem from "../components/Card";
import posts from "../data/posts.json";

export default function Home({ sample }) {
  React.useEffect(() => {
    console.log("posrResponse", posts);
  }, []);
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container">
          <h1 className="font-weight-bold mb-5">Posts for the day.</h1>
          <div className="row">
            {posts.map((post) => (
              <div className="mb-3 mb-md-0 col-md-4 col-sm-12">
                <CardItem key={post.id} post={post} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
