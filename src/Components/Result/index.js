import React from 'react'
import { useSelector } from 'react-redux'

import ResultItem from '../ResultItem';

function Result() {
    // console.log(results)
    
    const results = useSelector(state => state.results)
    return (
        <div className="results-list">
        {
            (results === undefined)
            ? <p className="results-message">No results for query</p>
            : results.hits.map(result => <ResultItem key={result.objectID} result={result}/>)
        }
    </div>
    )
}

export default Result
