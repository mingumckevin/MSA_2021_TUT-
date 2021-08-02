import React, { useEffect, useState } from "react";
import { TextField, Typography, Grid, Container, Input, FormHelperText, Button } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import { useMutation, useQuery } from "@apollo/client";

const SubmitForm = () => {
    const [addProject] = useMutation(ADD_PROJECT);
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");
    const {loading, error, data} = useQuery<Projects>(PROJECTS); //What am I doing ... 



    useEffect{() = {
        console.log(data),
    }, [data]);
scroll

    const handleNameUpdate = (event:any) =>{
        setName(event.target.value);

    }
    const handleUrlUpdate = (event:any) => {
        setUrl(event.target.value)

    }

    const nameControl = <FormControl>
                    <InputLabel htmlFor="my-input">Project Name</InputLabel>
                    <Input id="my-input" aria-describeby="The project name"></Input>
                    <FormHelperText id="The project name">The GitHub project name</FormHelperText>
                </FormControl>

    const urlControl = <FormControl>
                    <InputLabel htmlFor="my-input">GitHub URL</InputLabel>
                    <Input id="my-input" aria-describeby="The project GitHub URL"></Input>
                    <FormHelperText id="The project URL">The GitHub project URL</FormHelperText>
                </FormControl>


    const handleClick = () => {
        alert("Submit form clicked!");
    };


    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <div style={{display: 'flex', flexGrow: 1, alignContent: 'center', justifyContent: 'center'}}>
                <FormControl>
                    <InputLabel htmlFor="my-input">Project Name</InputLabel>
                    <Input id="my-input" aria-describeby="The project name"></Input>
                    <FormHelperText id="The project name">The GitHub project name</FormHelperText>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">GitHub URL</InputLabel>
                    <Input id="my-input" aria-describeby="The project GitHub URL"></Input>
                    <FormHelperText id="The project URL">The GitHub project URL</FormHelperText>
                </FormControl>
                
                const handleSubmit = async() => {
                    try {
                        await addProject {{variables:{
                            name: nameControl,
                            description: "",
                            Link: githubUrl,
                            year:"2021",
                        }}}});
                    }
                    catch(e):
                    console.log(e)




                        }}}
                    }
                }
            </div>
            <Button onClick={handleClick}>Submit!</Button>
        </div>
    )
};

export default SubmitForm;