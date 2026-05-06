import React from 'react';
import { useParams, Navigate } from 'react-router-dom';

const validLanguages = ['fr', 'en'];

const LanguageGuard = ({ children }) => {
    const { lang } = useParams();

    if (!validLanguages.includes(lang)) {
        return <Navigate to="/notfound" />;
    }

    return children;
};

export default LanguageGuard;
