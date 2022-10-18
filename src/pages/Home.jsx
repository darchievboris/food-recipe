import {useEffect, useState} from "react";
import {getAllCategories} from "../api";
import Preloader from "../components/Preloader";
import CategoryList from "../components/CategoryList";
import Search from "../components/Search";
import {createSearchParams, useLocation, useNavigate} from "react-router-dom";

function Home() {
    const [catalog, setCatalog] = useState([])
    const [filter, setFilter] = useState([])
    const navigate = useNavigate()
    const {search, pathname} = useLocation()

    const handleSearch = (str) => {
        setFilter(catalog.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase())))
        navigate({
            pathname: pathname, search: `?${createSearchParams({str})}`
        })
    }

    useEffect(() => {
        getAllCategories().then((data) => {
            setCatalog(data.categories);
            setFilter(search ? data.categories.filter(item => item.strCategory.toLowerCase().includes(search.split('=')[1].toLowerCase())) : data.categories)
        }, [filter])


    }, []);
    return (<>
        <Search cb={handleSearch}/>
        {!catalog.length ? (<Preloader/>) : (<CategoryList catalog={filter}/>)}
    </>)
}

export {Home}