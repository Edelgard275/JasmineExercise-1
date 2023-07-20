
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    amount: 10000,
    years: 8,
    rate: 6.2,
  };
  expect(calculateMonthlyPayment(values)).toEqual('132.39')
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {
    amount: 10050,
    years: 8,
    rate: 6.2,
  };
  expect(calculateMonthlyPayment(values)).toEqual('133.05')
});

it("should handle a very large interest rate", function() {
  const values = {
    amount: 20000,
    years: 40,
    rate: 98,
  };
});
/// etc
