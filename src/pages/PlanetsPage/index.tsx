import React from 'react';
import { Planet } from '../../components/Planet';
import styles from './PlanetsPage.module.scss';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { getPlanets } from '../../redux/planets/asyncActions';
import { clearResults } from '../../redux/planets/slice';

export const PlanetsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { results, next } = useAppSelector((state) => state.planets);
  const [page, setPage] = React.useState(1);
  const [isFetching, setIsFetching] = React.useState(false);
  const observer = React.useRef<IntersectionObserver>();

  const lastPlanetElementRef = React.useCallback(
    (node: HTMLDivElement) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && next) {
          setPage((page) => page + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [next]
  );

  React.useEffect(() => {
    dispatch(clearResults());
    setPage(1);
  }, []);

  React.useEffect(() => {
    dispatch(getPlanets(page));
  }, [page]);

  return (
    <div className={styles.root}>
      {results.map((item, i) => {
        const isLastElement: boolean = results.length === i + 1;
        if (isLastElement)
          return <Planet key={i} ref={lastPlanetElementRef} {...item} />;
        else return <Planet key={i} {...item} />;
      })}
    </div>
  );
};
