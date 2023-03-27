import React, { useContext, useEffect } from 'react';
import { Box } from '@mui/material';

import useLocalStorage from '../hooks/useLocalStorage';
import { DataContext } from '../context/DataProvider';

const Result = () => {
    const { html, css, js } = useContext(DataContext);
    const [src, setSrc] = useLocalStorage('result', '');

    const srcCode = `
        <html>
        <body>${html}</body>
        <script>${js}</script>
        <style>${css}<style>
        <html>
    `;

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrc(srcCode)
        }, 1000);

        return () => clearTimeout(timeout);
    }, [html, css, js]);

    return (
        <Box sx={{ height: '30vh' }}>
            <iframe
                srcDoc={src}
                title="Output"
                sandbox="allow-scripts"
                frameBorder={0}
                width="100%"
                height="100%"
            />
        </Box>
    );
}

export default Result;