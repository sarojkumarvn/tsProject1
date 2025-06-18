import { createContext, useState  , useContext} from "react";

// Correct context type
interface CounterContextValue {
  value: number;
  setCount: (num: number) => void;
}

// Initialize context with `undefined`, you can add a check while using it
 const CounterContext = createContext<CounterContextValue | undefined>(undefined);
export const useCounter = () => {
    return useContext(CounterContext);
}

// Props for the provider
interface CounterContextProviderProps {
  children: React.ReactNode;
}

// Proper component name
const CounterProvider: React.FC<CounterContextProviderProps> = ({ children }) => {
  const [count, setCount] = useState<number>(1);

  return (
    <CounterContext.Provider value={{ value: count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
