import { useEffect, useState } from 'react'
import { CHANNEL_DETAILS_API, GAK } from '../constants';

const useGetChannelData = (channelId) => {
    const [channelData, setChannelData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!channelId) return;
    
        const fetchChannelData = async () => {
          try {
            const response = await fetch(
                CHANNEL_DETAILS_API+channelId+"&key="+GAK
            );
            const data = await response.json();
            setChannelData(data.items[0]);
          } catch (err) {
            setError(true);
          } finally {
            setLoading(false);
          }
        };
    
        fetchChannelData();
      }, [channelId]);
  return { channelData, loading, error };
}

export default useGetChannelData