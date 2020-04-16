import Head from "next/head";

const Home = () => (
  <div className="container">
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <h1 className="text-center">Home</h1>
    <div className="row">
      <div className="col-6">
        Column 1
      </div>
      <div className="col-6">
        Column 1
      </div>
    </div>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet maxime
      illum vel unde dolore ea officia voluptas natus reprehenderit,
      perspiciatis quod quasi deleniti optio officiis esse vero molestiae
      debitis nesciunt?
    </p>
  </div>
);

export default Home;
