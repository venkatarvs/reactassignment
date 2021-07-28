

export default function() {
  // simulates data coming from a database.
  return Promise.resolve(
    [
        {
          custid: 1,
          name: "Suma",
          amt: 120,
          transactionDt: "05-01-2021"
        },
        {
          custid: 1,
          name: "Mona",
          amt: 75,
          transactionDt: "05-05-2021"
        },
        {
          custid: 1,
          name: "Manu",
          amt: 94,
          transactionDt: "05-05-2021"
        },
        {
          custid: 1,
          name: "Any",
          amt: 10,
          transactionDt: "06-01-2021"
        },
        {
          custid: 1,
          name: "Dany",
          amt: 75,
          transactionDt: "06-06-2021"
        },
        {
          custid: 1,
          name: "Tony",
          amt: 200,
          transactionDt: "07-01-2021"
        },
        {
          custid: 1,
          name: "Pavan",
          amt: 1,
          transactionDt: "07-04-2021"
        },
        {
          custid: 1,
          name: "Mady",
          amt: 80,
          transactionDt: "07-03-2021"
        },
        {
          custid: 1,
          name: "Anu",
          amt: 224,
          transactionDt: "07-03-2021"
        },
        {
          custid: 2,
          name: "Century",
          amt: 125,
          transactionDt: "05-01-2021"
        },
        {
          custid: 2,
          name: "An",
          amt: 75,
          transactionDt: "05-04-2021"
        },
        {
          custid: 2,
          name: "Century",
          amt: 10,
          transactionDt: "06-01-2021"
        },
        {
          custid: 2,
          name: "Century",
          amt: 75,
          transactionDt: "06-06-2021"
        },
        {
          custid: 2,
          name: "Century",
          amt: 200,
          transactionDt: "07-01-2021"
        },
        {
          custid: 2,
          name: "Century",
          amt: 224,
          transactionDt: "07-05-2021"
        },
        {
          custid: 3,
          name: "Sallys",
          amt: 120,
          transactionDt: "06-07-2021"
        }
    ]
  );
};