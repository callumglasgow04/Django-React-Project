import api from '../api';

const getStudentInfo = async () => {
    try {
        const response = await api.get('api/student/profile/');
        return response.data;
    } catch (error) {
        console.error("Error fetching student info:", error);
        throw error;
    }
}
export default getStudentInfo;