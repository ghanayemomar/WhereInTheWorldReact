export default function DetailImage({ countries }) {
  return (
    <div class="lg:w-2/5 lg:mt-40 mt-16">
      <img src={countries[0].flags.svg} />
    </div>
  );
}
