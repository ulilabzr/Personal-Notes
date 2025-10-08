import React, { createContext, useCallback, useMemo, useState } from "react";

const LoadingContext = createContext();

export function LoadingProvider({ children }) {
  const [pendingCount, setPendingCount] = useState(0);

  const begin = useCallback(() => setPendingCount((c) => c + 1), []);
  const end = useCallback(() => setPendingCount((c) => (c > 0 ? c - 1 : 0)), []);

  const withLoading = useCallback(async (fn) => {
    begin();
    try {
      return await fn();
    } finally {
      end();
    }
  }, [begin, end]);

  const value = useMemo(() => ({ isLoading: pendingCount > 0, begin, end, withLoading }), [pendingCount, begin, end, withLoading]);

  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
}

export default LoadingContext;


