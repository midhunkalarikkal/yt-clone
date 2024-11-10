import { useEffect, useState } from 'react'

const useGetChannelData = (channelId) => {
    const [channelData, setChannelData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!channelId) return;
    
        const fetchChannelData = async () => {
          try {
            const response = await fetch(
                "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id="+channelId+"&key=AIzaSyAeXtix3AC_GXfQVylvtIaCmfAo-PuI11w"
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