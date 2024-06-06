import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="text-xl text-center font-semibold my-10 sm:my-16">
      <h1 className="mb-8 text-2xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      <CreateUser />
    </div>
  );
}

export default Home;
