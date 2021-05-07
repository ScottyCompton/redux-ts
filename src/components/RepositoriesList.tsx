import React, {useState} from 'react';
import { useSelector } from '../hooks/useTypesSelector';
import { useActions } from '../hooks/useActions';


const RepositoriesList:React.FC = () => {
    const [term, setTerm] = useState('');
    const {searchRepositories} = useActions();
    const { data, error, loading } = useSelector((state) => state.repositories);

    const handleOnchange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setTerm(e.target.value);
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        searchRepositories(term);
    }

    const displayResults = () => {
        if(error) {
            return <h3>{error}</h3>
        }
        if(loading) {
            return <h3>searching...</h3>
        }
        if(data.length === 0) {
            return <h3>Nothing found!</h3>
        }    
        return <ul>{data.map((item) => <li>{item}</li>)}</ul>
    }

    return <div>
        <form onSubmit={handleSubmit}>
            <input value={term} onChange={handleOnchange} />
            <button>Search</button>
        </form>
        {displayResults()}
    </div>
}

export default RepositoriesList;