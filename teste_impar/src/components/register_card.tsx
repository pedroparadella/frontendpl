import { Dispatch, SetStateAction, useState } from 'react';
import { Drawer, Box, TextField, Grid, Divider, Typography, InputLabel, Button, InputBase, IconButton } from '@mui/material';

import iconeCriar from '../assets/icone_criar.svg';

type RegisterCardProps = {
    open: boolean;
    onClose: Dispatch<SetStateAction<boolean>>;
};

export function RegisterCard({ open, onClose }: RegisterCardProps) {
    const [nome, setNome] = useState('');

    return (
        <Drawer
            anchor='right'
            open={open}
            onClose={() => { onClose(false); console.log("Fechou o drawer") }}
            className='register_card'
        >
            <Box style={{ width: 700 }}>
                <Grid container spacing={3}>
                    <Grid
                        item
                        xs={1}
                        style={{ paddingLeft: '7.5%', paddingTop: '8%' }}
                    >
                        <img src={iconeCriar} alt="Criar card" />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography
                            variant="h5"
                            component="h2"
                            className='text_header'
                            style={{
                                color: '#5F1478',
                                fontWeight: 'bold',
                                fontFamily: 'Sans-serif',
                                paddingTop: '22.5%',
                                paddingLeft: '12.5%'
                            }}
                        >
                            Criar card
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider sx={{ height: 10, m: 0.5 }} orientation="horizontal" />
                    </Grid>
                    <Grid
                        item
                        xs={10}
                        style={{ paddingLeft: '7.5%', paddingTop: '5%' }}
                    >
                        <InputLabel
                            margin='dense'
                            style={{
                                color: '#454545',
                                fontFamily: 'Sans-serif',
                                fontWeight: '550',
                                fontSize: '0.8rem',
                                opacity: 0.8,
                                paddingBottom: '0.5rem'
                            }}
                        >
                            DIGITE UM NOME PARA O CARD
                        </InputLabel>
                        <TextField
                            label="Digite o título"
                            variant="outlined"
                            fullWidth
                            id="contained-button-file"
                            value={nome}
                            onChange={(event) => setNome(event.target.value)}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={10}
                        style={{ paddingLeft: '7.5%', paddingTop: '5%' }}
                    >
                        <InputLabel
                            margin='dense'
                            style={{
                                color: '#454545',
                                fontFamily: 'Sans-serif',
                                fontWeight: '550',
                                fontSize: '0.8rem',
                                opacity: 0.8,
                                paddingBottom: '0.5rem'
                            }}
                        >
                            INCLUA UMA IMAGEM PARA APARECER NO CARD
                        </InputLabel>
                        <TextField label="Nenhum arquivo selecionado" variant="outlined" fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <Divider sx={{ height: 10, m: 0.5 }} orientation="horizontal" />
                    </Grid>
                    <Grid item xs={8} />
                    <Grid item xs={4}>
                        <Button
                            color='primary'
                            variant='contained'
                            style={{
                                backgroundColor: '#E76316',
                                textTransform: 'unset',
                            }}
                            onClick={() => {
                                onClose(false);
                                console.log("Fechou o drawer clicando no botao de criar novo card");
                            }}
                        >
                            Criar card
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Drawer>
    );
}