export default function DetailImage({ country }) {
  return (
    <div className="lg:w-2/5 lg:mt-40 mt-16">
      <img src={country.flags.svg} />
    </div>
  );
}
