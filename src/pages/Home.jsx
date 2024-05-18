import { useEffect, useMemo } from 'react'
import { Routes, Route } from 'react-router-dom';
import { Space, Skeleton, } from 'antd'
//pages
import About from './About';
import SearchedCountry from './SearchedCountry';
import SelectedRegion from './SelectedRegion';
//components
import SearchInput from '../components/SearchInput'
import CountryCard from '../components/CountryCard';
import SelectRegion from '../components/SelectRegion';
//service
import { PostService } from '../service/PostService';
//context
import { setMyContext } from '../context/MyContext';

const Home = () => {
    const { countries, setCountries } = setMyContext();
    const memoCountries = useMemo(() => countries);
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
                        memoCountries ?
                            <section className='w-full h-auto xxl:w-[1440px] m-auto px-5 pt-14'>
                                <Space className='w-full flex justify-between' wrap>
                                    <SearchInput />
                                    <SelectRegion />
                                </Space>
                                <div className='w-full flex items-start justify-center gap-5 xxl:justify-between flex-wrap pt-14'>{
                                    memoCountries.map((item, i) => {
                                        return <CountryCard country={item} key={i} />
                                    })
                                }</div>
                            </section> :
                            <Skeleton />
                    } />
                    <Route path='/about/:title' element={<About />} />
                    <Route path='/country/:title' element={<SearchedCountry />} />
                    <Route path='/region/:title' element={<SelectedRegion />} />
                </Routes>
            </main>
            <footer>
            </footer>
        </div>
    )
}

export default Home