import { useEffect } from 'react'
import { CHANNEL_DETAILS_API, GAK } from '../constants';
import { useDispatch } from 'react-redux';
import { addChannelData } from '../videoSlice';

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