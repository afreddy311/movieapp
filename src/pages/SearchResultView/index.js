
import { AppBar, Typography,Box,Toolbar,Button,Container } from "@mui/material";
import { useEffect,useState  } from "react";
import { useNavigate, useParams} from "react-router-dom";
import Services from "../../Services";
import { CardMovie } from "../../components";

const SearchResults=()=>{
     const {searchText}=useParams();
     const [movies,setMovies]=useState([]);
     const history = useNavigate();

    async function  getSearchResults() {
           const data=await Services.searchByText(searchText);
           setMovies(data.Search);
           console.log(data.Search);

    }

    useEffect(() => {
        getSearchResults();
    },[]);

    function backButton() {
        history("/search");
    }


    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{flexGrow: 1}}>

                    Search Results:"{searchText}"
                    </Typography>
                    <Button variant="outlined" color="error" onClick={backButton}>
                        Back
                    </Button>

                </Toolbar>
            </AppBar>
            <Container maxWidth="sm">
                {movies.length > 0 ? (
                    movies.map((movie,index)=>(
                        <CardMovie movie={movie} Key={index} />
                    ))
                ) : (
                    <h4>Not Found</h4>
                )};

            </Container>
        </Box>
    )




};

export default SearchResults;