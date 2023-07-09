export default function DetailImage({ country }) {
  return (
    <div className="lg:w-2/5 lg:mt-36 mt-14">
      <img src={country.flags.svg} alt={country.name.common} />
    </div>
  );
}