export default function ComicsCard({ thumb, title }) {
  return (
    <div className="col-2">
      <div className="comic-card">
        <img src={thumb} className="img-fluid" alt={title}></img>
        <h5>{title}</h5>
      </div>
    </div>
  );
}
