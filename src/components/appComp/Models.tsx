import Card from "./Card";
export default function Models() {
  return (
    <div className="grid grid-cols-2 gap-4 py-8 md:grid-cols-4 md:gap-8 md:py-16">
      <Card />

      <Card />

      <Card />

      <Card />

      <div className="hidden md:block">
        <Card />
      </div>
      <div className="hidden md:block">
        <Card />
      </div>
      <div className="hidden md:block">
        <Card />
      </div>
      <div className="hidden md:block">
        <Card />
      </div>
    </div>
  );
}
