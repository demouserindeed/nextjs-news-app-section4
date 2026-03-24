export default function NewsDetailsPage({ params }) {
  const { id } = params;
  return (
    <>
      <h1>News Details Page</h1>
      <p>{`NewsID : ${id}`}</p>
    </>
  );
}
