import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addChannelData } from '../videoSlice';
import { CHANNEL_DETAILS_API, GAK } from '../constants';

const useGetChannelData = (channelId) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (!channelId) return;
        const fetchChannelData = async () => {
            const response = await fetch(
                CHANNEL_DETAILS_API+channelId+"&key="+GAK
            );
            const data = await response.json();
            dispatch(addChannelData(data.items[0]))
        };
    
        fetchChannelData();
      }, [channelId, dispatch]);
}

export default useGetChannelData