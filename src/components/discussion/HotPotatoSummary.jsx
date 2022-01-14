import { Link } from 'react-router-dom';

function HotPotatoSummary({ hotpotato }) {
  return (
    <div className="mb-7">
      <Link to={`/hotpotatos/${hotpotato.id}/`} className="text-lg">
        → {hotpotato.title} - {hotpotato.author}
      </Link>
      {hotpotato.photo && <img src={hotpotato.photo} alt="" />}
    </div>
  );
}

export default HotPotatoSummary;
