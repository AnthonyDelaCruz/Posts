import Layout from "../../components/Layout";
import Link from "next/link";
import posts from "../../data/posts.json";
import Button from "react-bootstrap/Button";

export default function Post({ postDetails }) {
  return (
    <Layout>
      <div className="container post-container">
        <div className="mb-2 back-link">
          <Link href="/">
            <Button variant="info">Back to home.</Button>
          </Link>
        </div>
        <div className="sample-img mb-4"></div>
        {/* <h1>{postDetails.title}</h1> */}
        <div>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </div>
      </div>

      <style jsx>{`
        .sample-img {
          border: 1px solid black;
          height: 300px;
          background: #333333;
        }
        .back-link a {
          color: black;
        }
        @media (max-width: 600px) {
        }
      `}</style>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const postDetails = posts.find((post) => post.id == id);
  return {
    props: {
      postDetails,
    },
  };
}

export async function getStaticPaths() {
  const paths = posts.map((post) => ({
    params: { id: `${post.id}` },
  }));

  return { paths, fallback: false };
}
