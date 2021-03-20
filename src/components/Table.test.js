import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Table from './Table';

import getAllPeopleJson from '../../__mocks__/swapiGetPeople.json';

const testData = getAllPeopleJson;

test('should have exactly one table', () => {
  jest.spyOn();
  
  const { container } = render(<Table data={testData} />);
  const table = container.getElementsByTagName('table')
  expect(table).toHaveLength(1);
});

test('should have 11 rows', () => {
  const { container } = render(<Table data={testData} />);
  const tr = container.getElementsByTagName('tr')
  expect(tr).toHaveLength(11);
});

test('the first row should contain Luke Skywalker as name', () => {
  const { container } = render(<Table data={testData} />);
  const tds = container.getElementsByTagName('td')
  expect(tds).toHaveLength(30);
  expect(tds[0]).toHaveTextContent(testData[0].name);
});


test('check the content of the first row', () => {
  const { container } = render(<Table data={testData} />);
  const tds = container.getElementsByTagName('td')
  expect(tds).toHaveLength(30);
  expect(tds[0]).toHaveTextContent(testData[0].name);
  expect(tds[1]).toHaveTextContent(testData[0].height);
  expect(tds[2]).toHaveTextContent(testData[0].mass);
});
