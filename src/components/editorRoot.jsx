import React, { useContext } from 'react';
import { Stack } from '@mui/material';
import Editor from './editor';
import colors from '../constants/colors';

import { DataContext } from '../context/DataProvider';

const EditorRoot = () => {
    const { html, seHtml, css, setCss, js, setJs } = useContext(DataContext);

    return (
        <Stack direction="row" sx={{ background: colors.grey2 }}>
            <Editor heading="HTML" icon="/" iconBg={colors.red} value={html} onChange={seHtml} language="xml" />
            <Editor heading="CSS" icon="*" iconBg={colors.blue} value={css} onChange={setCss} language="css" />
            <Editor heading="JS" icon="()" iconBg={colors.yellow} value={js} onChange={setJs} language="javascript" />
        </Stack>
    );
}

export default EditorRoot;