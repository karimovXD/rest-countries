import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Image, Skeleton } from 'antd';
import { abbreviateNumber } from 'js-abbreviation-number';
//service
import { PostService } from '../service/PostService';
//components
import Back from '../components/Back';
import Borders from '../components/Borders';

const About = () => {
  const { title } = useParams();
  const [oneCountry, setOneCountry] = useState(null);

  const handleGetCountryByName = async () => {
    try {
      const response = await PostService.searchCountry(title);
      setOneCountry(response[0] || response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleGetCountryByName();
  }, [])

  return (
    oneCountry ?
      <section className='pt-14 w-full h-auto xxl:w-[1440px] m-auto px-5'>
        <Back>Back</Back>
        <div className='pt-14 md:pt-0 flex items-center justify-between flex-col md:flex-row'>
          <div className='w-full md:w-[40%] text-center'>{
            <Image src={oneCountry.flags.png} />
          }</div>
          <div className='w-full md:w-[60%] flex flex-col items-center md:items-start justify-center pt-5'>
            <h1 className='text-xl font-medium'>{oneCountry.name.common}</h1>
            <div className='py-5 flex items-start gap-12 flex-col md:flex-row'>
              <ul className='flex flex-col gap-1'>
                <li className='flex items-center justify-start gap-2'>
                  <h5 className='font-bold'>Native-Name:</h5>
                  <span className='text-gray-500 font-normal'>{Object.values(oneCountry.name.nativeName)[0].official}</span>
                </li>
                <li className='flex items-center justify-start gap-2'>
                  <h5 className='font-bold'>Population:</h5>
                  <span className='text-gray-500 font-normal'>{abbreviateNumber(oneCountry.population, 2)}</span>
                </li>
                <li className='flex items-center justify-start gap-2'>
                  <h5 className='font-bold'>Region:</h5>
                  <span className='text-gray-500 font-normal'>{oneCountry.region}</span>
                </li>
                <li className='flex items-center justify-start gap-2'>
                  <h5 className='font-bold'>Sub Region:</h5>
                  <span className='text-gray-500 font-normal'>{oneCountry.subregion}</span>
                </li>
                <li className='flex items-center justify-start gap-2'>
                  <h5 className='font-bold'>Capital:</h5>
                  <span className='text-gray-500 font-normal'>{oneCountry.capital}</span>
                </li>
              </ul>
              <ul className='flex flex-col gap-1'>
                <li className='flex items-center justify-start gap-2'>
                  <h5 className='font-bold'>Top Level Domain:</h5>
                  <span className='text-gray-500 font-normal'>{oneCountry.tld}</span>
                </li>
                <li className='flex items-center justify-start gap-2'>
                  <h5 className='font-bold'>Currency:</h5>
                  <span className='text-gray-500 font-normal'>{Object.values(oneCountry.currencies)[0].name}</span>
                </li>
                <li className='flex items-center justify-start gap-2'>
                  <h5 className='font-bold'>Languages:</h5>
                  <span className='text-gray-500 font-normal'>{
                    Object.values(oneCountry.languages)
                  }</span>
                </li>
              </ul>
            </div>
            {
              oneCountry.borders ?
                <div className='flex items-center gap-3 flex-col md:flex-row'>
                  <h1 className='font-bold'>Border Countries:</h1>
                  <div className='flex flex-wrap gap-4'>{oneCountry?.borders.map((item, i) => <Borders key={i}>{item}</Borders>)}</div>
                </div> :
                ''
            }
          </div>
        </div>
      </section > :
      <Skeleton />
  )
}

export default About;