import { memo } from 'react'
import { Divider } from 'antd'
import { abbreviateNumber } from 'js-abbreviation-number'
import { Link } from 'react-router-dom'

const CountryCard = ({ country }) => {
    console.log('child chizildi');

    return (
        <Link to={`/about/${country.name.common}`}>
            <div className='w-full xs:w-52 sm:w-64 md:w-80 h-full flex flex-col bg-white rounded-md'>
                <div className='w-full h-auto'>
                    <img src={country.flags.png} alt="" className='w-full h-auto xs:h-28 sm:h-32 md:h-40' />
                </div>
                <div className='px-3 pb-3 md:px-5 md:pb-4'>
                    <Divider plain orientation='left'>{country.name.common}</Divider>
                    <div className='text-[12px] xs:text-xs sm:text-sm md:text-md'>
                        <ul className='flex flex-col items-start justify-start gap-3'>
                            <li className='flex items-center justify-start gap-2 '><h4 className='font-medium'>Population:</h4><span className='text-gray-500'>{abbreviateNumber(country.population, 2)}</span></li>
                            <li className='flex items-center justify-start gap-2 '><h4 className='font-medium'>Region:</h4><span className='text-gray-500'>{country.region}</span></li>
                            <li className='flex items-center justify-start gap-2 '><h4 className='font-medium'>Capital:</h4><span className='text-gray-500'>{country.capital}</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default memo(CountryCard)