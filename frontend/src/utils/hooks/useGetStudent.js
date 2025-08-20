import React, { useState, useEffect} from "react";
import getStudentInfo from "../getStudentInfo";

export const useGetStudent = () => {
    const [student, setStudent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStudentInfo = async () => {
            try {
                const studentInfo = await getStudentInfo();
                setStudent(studentInfo);
            } catch (err) {
                console.error("Error fetching user info:", err);
                setError(err);
                setStudent(null);
            } finally {
                setLoading(false);
            }
        };

        fetchStudentInfo();
    }, []);

    return { student, loading, error };
}
