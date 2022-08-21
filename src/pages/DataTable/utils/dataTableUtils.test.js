import { filteredText, getRowsToRender } from './dataTableUtils';

const rows = [
  {
    name1: 'Mads L. Klausen',
    email: 'MadsLKlausen@jourrapide.com',
    edit_path: 'http://google.com',
    per_id: 1
  },
  {
    name1: 'Alfred K. Krogh',
    email: 'AlfredKKrogh@armyspy.com',
    edit_path: 'http://google.com',
    per_id: 2
  },
  {
    name1: 'Silas L. Bertelsen',
    email: 'SilasLBertelsen@armyspy.com',
    edit_path: 'http://google.com',
    per_id: 3
  },
  {
    name1: 'Mia A. Johnsen',
    email: 'MiaAJohnsen@dayrep.com',
    edit_path: 'http://google.com',
    per_id: 4
  },
  {
    name1: 'Alfred S. Schou',
    email: 'AlfredSSchou@jourrapide.com',
    edit_path: 'http://google.com',
    per_id: 5
  }
];

it('filteredText function returns all results with `alfred` search param', () => {
  const result = filteredText(rows, 'alfred');

  expect(result).toStrictEqual(
    [
      {
        name1: 'Alfred K. Krogh',
        email: 'AlfredKKrogh@armyspy.com',
        edit_path: 'http://google.com',
        per_id: 2
      },
      {
        name1: 'Alfred S. Schou',
        email: 'AlfredSSchou@jourrapide.com',
        edit_path: 'http://google.com',
        per_id: 5
      }
    ]
  )
});

describe('getRowsToRender', () => {
  it('Returns 3 pages with results', () => {
    const result = getRowsToRender(rows, '2');

    expect(result).toStrictEqual({
      '1': [
        {
          name1: 'Mads L. Klausen',
          email: 'MadsLKlausen@jourrapide.com',
          edit_path: 'http://google.com',
          per_id: 1
        },
        {
          name1: 'Alfred K. Krogh',
          email: 'AlfredKKrogh@armyspy.com',
          edit_path: 'http://google.com',
          per_id: 2
        },
      ],
      '2': [
        {
          name1: 'Silas L. Bertelsen',
          email: 'SilasLBertelsen@armyspy.com',
          edit_path: 'http://google.com',
          per_id: 3
        },
        {
          name1: 'Mia A. Johnsen',
          email: 'MiaAJohnsen@dayrep.com',
          edit_path: 'http://google.com',
          per_id: 4
        },
      ],
      '3': [
        {
          name1: 'Alfred S. Schou',
          email: 'AlfredSSchou@jourrapide.com',
          edit_path: 'http://google.com',
          per_id: 5
        }
      ]
    })
  })

  it('Returns 1 page with filtered result', () => {
    const result = getRowsToRender(rows, '2', 'alfred');

    expect(result).toStrictEqual({
      '1': [
        {
          name1: 'Alfred K. Krogh',
          email: 'AlfredKKrogh@armyspy.com',
          edit_path: 'http://google.com',
          per_id: 2
        },
        {
          name1: 'Alfred S. Schou',
          email: 'AlfredSSchou@jourrapide.com',
          edit_path: 'http://google.com',
          per_id: 5
        }
      ],
    })
  });
})