import React from 'react';
import { Planet } from '../../components/Planet';
import styles from './PlanetsPage.module.scss';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { getPlanets } from '../../redux/planets/asyncActions';

const options = {
  rootMargin: '0px',
  threshold: 0.5,
};

export const PlanetsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { results, next } = useAppSelector((state) => state.planets);
  const [page, setPage] = React.useState(1);
  const [isFetching, setIsFetching] = React.useState(false);
  const observer = React.useRef();
  const lastPlanetElementRef = React.useRef<HTMLDivElement>(null);

  const callbackFunc = (entries: any) => {
    console.log('.asdsa');
    const [entry] = entries;
    setPage(page + 1);
    dispatch(getPlanets(page + 1));
  };

  React.useEffect(() => {
    dispatch(getPlanets(page));
  }, []);

  React.useEffect(() => {
    console.log('Меню обсервер');
    const observer = new IntersectionObserver(callbackFunc, options);

    if (lastPlanetElementRef.current)
      observer.observe(lastPlanetElementRef.current);

    return () => {
      if (lastPlanetElementRef.current)
        observer.unobserve(lastPlanetElementRef.current);
    };
  }, [lastPlanetElementRef]);

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
