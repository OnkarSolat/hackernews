import React from 'react'
import ResultItemComment from './ResultItemComment'
import ResultItemStory from './ResultItemStory'


const ResultItem = ({ result }) => { 
    if (result._tags.includes('comment')) {
        return <ResultItemComment result={result}/>
    } else {
        return <ResultItemStory result={result}/>
    } 
}


export default ResultItem
