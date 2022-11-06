/* eslint-disable no-param-reassign */
/**
 * Sets and updates checked checkboxes
 */
export const setCheckboxValues = (clickedOption, values, setValues) => {
  setValues({
    ...values,
    [clickedOption.target.name]: !values[clickedOption.target.name],
  });
};

/**
 * Toggles between how many checkboxes should be shown
 */
export const setCheckboxesShown = (
  checkboxesShown,
  setShown,
  maxShown,
  minShown,
) => {
  setShown(checkboxesShown === maxShown ? minShown : maxShown);
};

export const oneTrue = (subteamsChecked) => {
  const keys = Object.keys(subteamsChecked);

  for (let i = 0; i < keys.length; i += 1) {
    if (subteamsChecked[keys[i]]) {
      return true;
    }
  }
  return false;
};

export const getItemByName = (arr, name) => {
  const obj = arr.filter((item) => item.name === name);
  return obj[0];
};

export const renameObjectKeys = (arr, oldKey, newKey) => {
  const newArr = arr.map((obj) => {
    obj[newKey] = obj[oldKey];
    delete obj[oldKey];
    return obj;
  });
  return newArr;
};

/**
 * Formats the term that comes in the format TERM-20## to Term 20##
 */
export const formatTerm = (currentTerm) => {
  if (currentTerm) {
    const applicationTerm = currentTerm.split('-');
    const term =
      applicationTerm[0].charAt(0) + applicationTerm[0].slice(1).toLowerCase();
    const year = applicationTerm[1];
    return `${term} ${year}`;
  }
  return '';
};

/**
 * Appends a backslash to the prefix URL if there isn't one.
 */
export const sanitizeUrlPrefix = (url) =>
  url + (url.slice(-1) === '/' ? '' : '/');

/**
 * Converts array to JSON object with array values as keys and `true` assigned to each key.
 * */
export const makeTruthTable = (values, isSelected) => {
  const res = {};
  values.forEach((val) => {
    res[val] = isSelected;
  });
  return res;
};

/**
 * Gets season/term from date
 */
export const getTermSeason = (date) => {
  const month = date.getMonth() + 1;
  let season = '';
  if (month <= 4) {
    season = 'WINTER';
  } else if (month <= 8) {
    season = 'SPRING';
  } else {
    season = 'FALL';
  }

  return season;
};

/**
 * Returns date entries in <TERM>-<YEAR> format.
 */
export const getTermDate = (date) =>
  `${getTermSeason(date)}-${date.getFullYear()}`;

/**
 * Creates data from an array of values:
 */
export const createData = (keys, values) => {
  const res = {};
  keys.forEach((kval, idx) => {
    res[kval] = values[idx];
  });
  return res;
};

/**
 * Gets item by id in JSON object array
 */
export const getItemById = (arr, id) => {
  const obj = arr.filter((item) => item.id === id);
  return obj[0];
};

/**
 * Converts a camelCase string to its snake_case equivalent
 * e.g., importantObjectProperty -> important_object_property
 */
export const camelCaseToSnakeCase = (s) =>
  s
    .split(/(?=[A-Z])/)
    .join('_')
    .toLowerCase();

/**
 * Converts a snake_case string to its camelCase equivalent
 * e.g., important_object_property -> importantObjectProperty
 */
export const snakeCaseToCamelCase = (s) =>
  s.replace(/[-_][a-z]/g, (group) => group.slice(-1).toUpperCase());

/**
 * Converts Date object to string in the format '<month>-<day>-<year>'
 */
export const dateToString = (date) =>
  `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;

/**
 * Converts time (represented as Date object) to string in the format '<hour>:<minute> <AM/PM>'
 */
export const timeToString = (time) =>
  time.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

/**
 * Converts string in the format '<month>-<day>-<year>' to Date Object
 */
export const stringToDate = (s) => new Date(s);

/**
 * Converts string in the format '<hour>:<minute> <AM/PM>' to Date Object
 * Ref: https://www.freecodecamp.org/news/mathematics-converting-am-pm-to-24-hour-clock
 */
export const stringToTime = (s) => {
  const period = s.slice(-2) === 'AM' ? 'AM' : 'PM';
  // eslint-disable-next-line prefer-const
  let [hour, minute] = s.split(' ')[0].split(':');
  if (hour === '12' && period === 'AM') {
    hour = '0';
  } else if (hour <= '11' && period === 'PM') {
    hour = (parseInt(hour, 10) + 12).toString();
  }
  const currentDate = new Date();
  // Year, month, and day attributes don't matter for time, so it's set to current year, month, and day
  return new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate(),
    hour,
    minute,
  );
};
