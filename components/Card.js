import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Link from "next/link";

export default function CardItem({ post: { title, id } }) {
  return (
    <div className="card shadow">
      <Card>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Link href="/post/[id]" as={`/post/${id}`}>
            <Button variant="success">View Post</Button>
          </Link>
        </Card.Body>
      </Card>
      <style jsx>{`
        .card {
          transition: all 0.2s ease-in-out;
        }
        .card:hover {
          transform: scale(1.03);
        }
        @media (max-width: 600px) {
        }
      `}</style>
    </div>
  );
}
