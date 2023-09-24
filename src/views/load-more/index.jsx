export default function LoadMoreView({ handleClick }) {
  return (
    <>
      <div className="d-flex justify-content-center m-5">
        <button className="btn btn-primary" onClick={handleClick}>
          Daha Fazla
        </button>
      </div>
    </>
  );
}
