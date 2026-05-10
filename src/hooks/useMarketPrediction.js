import { useMemo } from 'react';

function useMarketPrediction(predictions) {
  return useMemo(() => {
    const ranked = [...predictions].sort((a, b) => b.confidence - a.confidence);
    const topPrediction = ranked[0] ?? null;

    return {
      topPrediction,
      allPredictions: ranked
    };
  }, [predictions]);
}

export default useMarketPrediction;
