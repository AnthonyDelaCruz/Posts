export default function Layout({ children }) {
  return (
    <div className="container px-3 py-5 px-md-5">
      {children}
      <div className="text-center mt-5">
        <h5>Made with NextJS</h5>
      </div>
    </div>
  );
}
