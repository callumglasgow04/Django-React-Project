import api from '../api';

const getUserInfo = async () => {
    try {
        const response = await api.get('api/user/info/');
        return response.data;
    } catch (error) {
        console.error("Error fetching user info:", error);
        throw error;
    }
}
export default getUserInfo;