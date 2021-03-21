import React,{useState} from 'react'
import TextInput from '../Inputs/TextInput'
import RadioInput from '../Inputs/RadioInput'
import queryAPI from '../apidata/queryAPI'

import './style.css'

function SearchBar({setResults}) {
    const [searchTerm, setSearchTerm] = useState('')
    const [sort, setSort] = useState('relevance')
    const [filter, setFilter] = useState('any')

    const sortList = ['relevance', 'date']
    const filterList = ['any', 'story', 'comment', 'poll']


    const handleSubmit = e => {
        e.preventDefault()

        if (searchTerm) {
            queryAPI(searchTerm, sort, filter)
                .then(res => {
                    setResults(res)
                })
                .catch(error => console.log(error))
            }
        }

    return (
        <form onSubmit={handleSubmit} className="search">
         <span className='search-bar'>
                <TextInput 
                    placeholder='article, author, comment...' 
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)} />

                <button/>
                </span>
                <span className='search-radios'>
                Sort By:
                {sortList.map((item, i) => <RadioInput key={i} name={item} group='sort' checked={sort === item} onChange={e => setSort(e.target.value)}/>)}
            </span>

            <span className='search-radios'>
                Filter:
                {filterList.map((item, i) => <RadioInput key={i} name={item} group='filter' checked={filter === item} onChange={e => setFilter(e.target.value)}/>)}
            </span>
        </form>            
    )
}

export default SearchBar
