import Head from "next/head";
import withData from "../lib/apollo";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import Nav from "../components/Nav";

export const ALL_BEVERAGES_QUERY = gql`
  query MyQuery {
    Beverage {
      ABV
      Details
      Name
      ID
    }
  }
`;

const Beverage = () => {
  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    ALL_BEVERAGES_QUERY,
    {}
  );

  if (error) {
    console.log(error);
    return <div>Error loading data.</div>;
  }
  if (loading) return <div>Loading</div>;
  const { Beverage } = data;

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main>
        <h1>Beverages</h1>
        <ul>
          {Beverage.map((beverage) => (
            <li key={beverage.ID}>
              <h2>{beverage.Name}</h2>
              <p>{beverage.Description}</p>
              <p>ABV: {beverage.ABV}%</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default withData((props) => <Beverage />);
