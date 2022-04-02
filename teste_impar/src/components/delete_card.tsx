import { Card, CardActions, CardContent, Button, Typography, Divider, Modal, Box } from '@mui/material';

import { IconTrashStyle } from '../styles/delete_card.style';
import iconTrash from "../assets/icon-trash.svg";

type DeleteCardProps = {
    id: number;
    deletedPokemons: number[];
    setDeletedPokemons: React.Dispatch<React.SetStateAction<number[]>>;
    show: boolean;
    setShowDeleteCard: React.Dispatch<React.SetStateAction<boolean>>;
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export function DeleteCard({ id, deletedPokemons, setDeletedPokemons, show, setShowDeleteCard }: DeleteCardProps) {
    ///const handleClose = () => setShowDeleteCard(false);
    //debugger;
    return (
        <Modal
            open={show}
            onClose={() => setShowDeleteCard(false)}
        >
            {/* <Box sx={style}> */}
            <Card
                sx={{
                    minWidth: 300,
                    maxWidth: 325,
                    minHeight: 300,
                    maxHeight: 325,
                    position: 'absolute',
                    borderRadius: '15px',
                    border: '1.75px solid #f5f5f5',
                    backgroundColor: '#f5f5f5',
                    top: '20%',
                    left: '40%',
                }} >
                <CardContent>
                    <IconTrashStyle>
                        <img src={iconTrash} alt="icon-trash" style={{ verticalAlign: 'middle', width: '2.5em' }} />
                    </IconTrashStyle>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        style={{
                            paddingLeft: '35%',
                            paddingTop: '12%',
                            color: '#DB2525',
                            fontWeight: 'bold',
                            fontFamily: 'Sans-serif',
                            opacity: 0.85,
                        }}
                    >
                        Excluir
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        style={{
                            paddingLeft: '10%',
                            fontSize: '0.8em',
                            color: '#454545',
                            fontWeight: 'bold',
                            opacity: 0.75,
                        }}>
                        CERTEZA QUE DESEJA EXCLUIR?
                    </Typography>
                </CardContent>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="horizontal" />
                <CardActions>
                    <Button
                        size="medium"
                        fullWidth={true}
                        color="primary"
                        variant="contained"
                        style={{
                            textTransform: 'unset',
                            backgroundColor: '#DB2525',
                        }}
                        onClick={() => {
                            console.log("Clicou aqui (id): ", id);
                            setDeletedPokemons([...deletedPokemons, id]);
                            setShowDeleteCard(false);
                        }}
                    >
                        Excluir
                    </Button>
                    <Button
                        size="medium"
                        fullWidth={true}
                        color="primary"
                        variant="outlined"
                        style={{
                            textTransform: 'unset',
                            color: '#DB2525',
                            borderColor: '#DB2525',
                        }}
                        onClick={() => setShowDeleteCard(false)}
                    >
                        Cancelar
                    </Button>
                </CardActions>
            </Card>
            {/* </Box> */}
        </Modal>
    );
}