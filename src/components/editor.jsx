import React, { useState } from 'react';
import { Box, styled, IconButton } from '@mui/material';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import colors from '../constants/colors';
import { Controlled as ControlledEditor } from 'react-codemirror2'

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

import '../App.css';

const Header = styled(Box)(({ theme }) => ({
    background: colors.grey2,
    display: 'flex',
    color: colors.grey3,
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: 700
}));

const Heading = styled(Box)(({ theme }) => ({
    background: colors.grey1,
    display: 'flex',
    padding: '9px 12px',
}));


const Editor = ({ heading, icon, iconBg, value, onChange, language }) => {

    const [open, setOpen] = useState(true);

    const handleChange = (editor, data, value) => {
        onChange(value);
    };

    return (
        <Box sx={{ flexGrow: open ? 1 : 0, flexBasis: 0, display: 'flex', flexDirection: 'column', padding: '0px 8px 8px' }}>
            <Header>
                <Heading>
                    <Box component="span"
                        sx={{
                            display: 'flex',
                            placeContent: 'center',
                            background: iconBg,
                            mr: 1.1,
                            pb: 0.5,
                            width: 20,
                            height: 20,
                            borderRadius: '4px',
                            color: colors.black
                        }}
                    >{icon}</Box>
                    {heading}
                </Heading>
                <IconButton sx={{color: colors.grey3}} onClick={() => setOpen(!open)}>
                <CloseFullscreenIcon fontSize='small' />
                </IconButton>
            </Header>
            <ControlledEditor
                options={{
                    mode: language,
                    theme: 'material',
                    lineNumbers: true,
                    lint: true, 
                    lineWrapping: true
                }}
                className="controlled-editor"
                value={value}
                onBeforeChange={handleChange}
            />
        </Box>
    )
}

export default Editor;