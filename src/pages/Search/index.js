import { useState } from "react";
import { Container , Grid , Card , CardContent,Stack,Typography,TextField,Button } from "@mui/material"
import * as React from 'react';
import { useNavigate } from "react-router-dom";


const Search= () => {
    const [searchText , setSearchtext] = useState("");
    const history = useNavigate();

    function searchInput (event) {
        setSearchtext(event.target.value);

    }

    function searchButton() {
        if(searchText==="") return;
        history(`/search/${searchText}`); //aqui se envia lo obtenido a la url

    }

    
    return (
    <Container maxWidth="sm">
        <Grid container mt={3}>
            <Grid item xs={12}>
                <Card >
                    <CardContent>
                        <Typography variant="h2">OMDB Search</Typography>
                        <Stack 
                            mt={2} 
                            direction="row" 
                            justifyContent="space_between" 
                            spacing={2}>
                            <TextField 
                                fullwidth="true"
                                label="Movie or tv show ..."
                                onChange={searchInput}
                                />
                            <Button variant="contained" fullWidth onClick={searchButton}>
                                Search
                            </Button>
                        </Stack>
                    </CardContent>
                </Card>
            </Grid>

        </Grid>
    </Container>

    )}

export default Search


