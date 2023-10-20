import React, {
  useState,
  useContext,
  useEffect,
  ReactNode,
  useCallback,
  createContext,
  Dispatch,
  SetStateAction,
} from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

interface ContextTypes {
  loading: boolean;
  cocktails: never[];
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
}

interface ItemsTypes {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strAlcoholic: string;
  strGlass: string;
}

const AppContext = createContext<ContextTypes>({
  loading: true,
  cocktails: [],
  searchTerm: 's',
  setSearchTerm: () => {},
});

const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('s');
  const [cocktails, setCocktails] = useState([]);

  const fetchDrinks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      /* console.log(data); */
      const { drinks } = data;
      if (drinks) {
        const newCocktails = drinks.map((item: ItemsTypes) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            item;

          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);
  useEffect(() => {
    fetchDrinks();
  }, [searchTerm, fetchDrinks]);
  return (
    <AppContext.Provider
      value={{ loading, cocktails, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
