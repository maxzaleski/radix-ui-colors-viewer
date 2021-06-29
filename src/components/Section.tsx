import * as react from 'react';
import { Palette } from './Palette';

interface Props {
  colours: { [key: string]: any };
  dark?: boolean;
}

export const Section: react.FC<Props> = ({ colours, dark = false }) => {
  const palettes = react.useMemo(() => {
    let c = Object.keys(colours).filter((k) => !k.endsWith('A'));
    c = dark ? c.filter((k) => k.includes('Dark')) : c.filter((k) => !k.includes('Dark'));
    return c.map((k) => <Palette key={k} name={k} colours={colours[k]} />);
  }, []);
  return <>{palettes}</>;
};
