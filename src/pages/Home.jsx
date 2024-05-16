import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import { Space, Skeleton, Divider, Select, Input, Card, Flex } from 'antd'
//pages
import About from './About';
import SearchedCountry from './SearchedCountry';
//components
import SearchInput from '../components/SearchInput'
//service
import { PostService } from '../service/PostService';
//context
import { setMyContext } from '../context/MyContext';
import CountryCard from '../components/CountryCard';

const Home = () => {
    const { countries, setCountries } = setMyContext();

    const handleGetCountries = async () => {
        try {
            const response = await PostService.getAllFlags();
            setCountries(response)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handleGetCountries()
    }, [])

    return (
        <div>
            <header className='w-full h-auto shadow-lg bg-white'>
                <nav className='w-full py-10 flex items-center justify-between px-4'>
                    <h2 className='text-xl font-medium'>Where in the world?</h2>
                </nav>
            </header>
            <main>
                <Routes>
                    <Route path='/' element={
                        countries ?
                            <section className='w-full h-auto xxl:w-[1440px] m-auto px-5 pt-14'>
                                <Space>
                                    <SearchInput />
                                </Space>
                                <div className='w-full flex items-start justify-center gap-5 xxl:justify-between flex-wrap pt-14'>{
                                    countries?.map((item, i) => {
                                        return <CountryCard country={item} key={i} />
                                    })
                                }</div>
                            </section> :
                            <Skeleton />
                    } />
                    <Route path='/about' element={<About />} />
                    <Route path='/country/:title' element={<SearchedCountry />} />
                </Routes>
            </main>
            <footer>
            </footer>
        </div>
    )
}

export default Home