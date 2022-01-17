import { Link } from 'react-router-dom';

function HotPotatoSummary({ hotpotato }) {
  return (
    <div className="my-10">
      <Link to={`/hotpotatos/${hotpotato.id}/`} className="text-md">
        {hotpotato.title} - {hotpotato.author}
      </Link>
      {hotpotato.photo && (
        <img
          className="object-none h-48 w-80 hover:object-scale-down"
          src={hotpotato.photo}
          alt=""
        />
      )}
    </div>
  );
}

export default HotPotatoSummary;
