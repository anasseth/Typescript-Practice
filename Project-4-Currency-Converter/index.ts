import inquirer from 'inquirer';
import { getExchangeRates, convertCurrency } from './utils';

async function currencyConverterApp() {
  console.log('Welcome to Currency Converter App');
  const baseCurrency: string = 'USD'; // You can change the base currency as per your needs

  const rates: { [currency: string]: number } | null = await getExchangeRates(baseCurrency);
  if (!rates) {
    return;
  }

  console.log(`Available currencies: ${Object.keys(rates).join(', ')}`);

  const userInput: {
    fromCurrency: string;
    toCurrency: string;
    amount: string;
  } = await inquirer.prompt([
    {
      type: 'input',
      name: 'fromCurrency',
      message: 'Enter the currency you want to convert from:',
    },
    {
      type: 'input',
      name: 'toCurrency',
      message: 'Enter the currency you want to convert to:',
    },
    {
      type: 'input',
      name: 'amount',
      message: 'Enter the amount to convert:',
    },
  ]);

  const { fromCurrency, toCurrency, amount } = userInput;

  if (!(fromCurrency in rates) || !(toCurrency in rates)) {
    console.error('Invalid currency input. Please enter valid currencies.');
    return;
  }

  const numericAmount: number = parseFloat(amount);
  if (isNaN(numericAmount)) {
    console.error('Invalid amount input. Please enter a valid number.');
    return;
  }

  const convertedAmount: string = convertCurrency(
    numericAmount,
    fromCurrency.toUpperCase(),
    toCurrency.toUpperCase(),
    rates
  );
  console.log(`${numericAmount} ${fromCurrency} is equal to ${convertedAmount} ${toCurrency}`);
}

currencyConverterApp();