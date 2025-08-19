import React, { useState, useEffect} from "react";
import getUserInfo from "../getUserInfo";

export const useGetUser = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const userInfo = await getUserInfo();
                setUser(userInfo);
            } catch (err) {
                console.error("Error fetching user info:", err);
                setError(err);
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        fetchUserInfo();
    }, []);

    return { user, loading, error };
}
