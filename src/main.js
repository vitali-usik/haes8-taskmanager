'use strict';

const mainFilterElement = document.getElementsByClassName(`main__filter`)[0];

const MOCK_FILTER_DATA = {
  'all': {
    name: `all`,
    count: 15,
    id: `all`,
    isChecked: true,
  },
  'overdue': {
    name: `overdue`,
    count: 0,
    id: `overdue`,
    isDisabled: true,
  },
  'today': {
    name: `today`,
    count: 0,
    id: `today`,
    isDisabled: true,
  },
  'favorites': {
    name: `favorites`,
    count: 7,
    id: `favorites`,
  },
  'repeating': {
    name: `repeating`,
    count: 2,
    id: `repeating`,
  },
  'tags': {
    name: `tags`,
    count: 6,
    id: `tags`,
  },
  'archive': {
    name: `archive`,
    count: 115,
    id: `archive`,
  }
};

const clearFiltersContainer = () => {
  mainFilterElement.innerHTML = ``;
};

const renderFilter = ({name, count, id, isChecked = false, isDisabled = false}) => (
  `
    <input
      type="radio"
      id="filter__${id}"
      class="filter__input visually-hidden"
      name="filter"
      ${isChecked ? `checked` : ``}
      ${isDisabled ? `disabled` : ``}
    />
    <label for="filter__${id}" class="filter__label">
      ${name} <span class="filter__${id}-count">${count}</span>
    </label>
  `
);

const renderFilters = (data) => {
  let fragment = ``;

  for (let filter in data) {
    fragment += renderFilter(data[filter]);
  }

  mainFilterElement.insertAdjacentHTML(`beforeend`, fragment);
};

function init() {
  clearFiltersContainer();
  renderFilters(MOCK_FILTER_DATA);
}

init();
