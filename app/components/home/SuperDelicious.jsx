import Recipe from "./Recipe";
export default function SuperDelicious({ superDelicious }) {
  return (
    <section class="mb-16" id="super_delicious">
      <h2 class="text-3xl font-bold mb-8">Super Delicious</h2>
      <div class="grid md:grid-cols-3 gap-8">
        {superDelicious.map((recipe, index) => (
          <Recipe key={index} recipe={recipe} callingAs={"delicious"} />
        ))}
      </div>
    </section>
  );
}
