/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import pluralize from 'pluralize';
import { capitalize as _capitalize } from 'lodash';

const toCamelCase = (string: string): string =>
  string
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) =>
      index === 0 ? letter.toLowerCase() : letter.toUpperCase()
    )
    .replace(/\s+/g, '');

const singular = (string: string): string => {
  const stringParts = string.split('-');

  const parsedString = pluralize.singular(
    stringParts.map(_capitalize).join('')
  );

  return parsedString[0].toLowerCase() + parsedString.substr(1);
};

const getKeyValue = (key: string) => (obj: Record<string, any>) => obj[key];

export default { toCamelCase, singular, getKeyValue };
