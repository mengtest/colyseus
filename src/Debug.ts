import debug from 'debug';
import { MatchMakeError } from './MatchMaker';

export const debugMatchMaking = debug('colyseus:matchmaking');
export const debugPatch = debug('colyseus:patch');
export const debugError = debug('colyseus:errors');
export const debugConnection = debug('colyseus:connection');

export const debugAndPrintError = (e: Error | string) => {
  const message = (e instanceof Error) ? e.stack : e;

  if (!(e instanceof MatchMakeError)) {
    console.error(message);
  }

  debugError.call(debugError, message);
};
