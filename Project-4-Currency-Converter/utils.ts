import axios from 'axios';

const API_KEY: string = 'f2c6f846a55b72674c464b5b1748d666';
const BASE_URL: string = 'https://api.exchangeratesapi.io/latest';

// Function to get exchange rates
export async function getExchangeRates(baseCurrency: string): Promise<{ [currency: string]: number } | null> {
    try {
        const response = await axios.get(`${BASE_URL}?base=${baseCurrency}`);
        return response.data.rates;
    } catch (error: any) {
        console.error('Error fetching exchange rates:', error.message);
        return null;
    }
}

// Function to convert currency
export function convertCurrency(
    amount: number,
    fromCurrency: string,
    toCurrency: string,
    rates: { [currency: string]: number }
): string {
    const convertedAmount: number = (amount / rates[fromCurrency]) * rates[toCurrency];
    return convertedAmount.toFixed(2);
}