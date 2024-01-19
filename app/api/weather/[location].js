import { NextResponse } from 'next/server';
import axios from 'axios';

export default function Home() {

  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);


export async function GET({ params }) {
  try {
    const { location } = params;
    const weatherAPIKey = process.env.WEATHER_KEY;

    const locationData = await axios.get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${weatherAPIKey}`
    );

    // You might want to fetch weather data using the location information
    // and return the relevant data in the response.

    return NextResponse.json({
      body: locationData.data,
      status: 200,
    });
  } catch (error) {
    console.error('Error fetching location data:', error.response?.data || error.message);
    return NextResponse.error('Internal Server Error');
  }
}}
