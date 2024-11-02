import { useState, useEffect } from 'react';
import { http } from '../axios';
import { useNavigate } from 'react-router-dom';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await http(url);

                if (response.status != 200) {
                    throw new Error('Network response was not ok');
                }

                setData(response.data);
                
            } catch (error) {                
                if (error.status == 403) {
                    navigate('/login');
                    localStorage.clear();
                }
                
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
};

export default useFetch;
