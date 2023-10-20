import { useGlobalContext } from '../context/Context';
import Cocktail from './Cocktail';
import Loading from './Loading';

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return <h2 className="section-title">oops! No matches found.</h2>;
  }
  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map((item: { id: string }) => {
          return (
            <Cocktail
              name={''}
              image={''}
              info={''}
              glass={''}
              key={item.id}
              {...item}
            />
          );
        })}
      </div>
    </section>
  );
};

export default CocktailList;
