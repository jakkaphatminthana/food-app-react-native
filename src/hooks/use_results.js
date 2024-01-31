import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    //initState
    useEffect(() => {
        searchApi('pasta');
    }, []);

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get(
                '/search', {
                params: {
                    limit: 50,
                    searchTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
        } catch (e) {
            console.log(`Catch error | search: ${e}`);
            setErrorMessage("Something went wrong");
        }
    }

    return [searchApi, results, errorMessage];
};