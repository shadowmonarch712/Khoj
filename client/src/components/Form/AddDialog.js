import { Box, Button, Card, Dialog, Stack, TextField, Typography } from "@mui/material"
import { React, useState, useEffect } from "react"
import { createRequest, updateRequest } from "../../actions/requests";
import { useDispatch, useSelector } from "react-redux";

const AddDialog = ({ openAdd, handleAddClose, currentId, setCurrentId, onAddQuestionComplete }) => {
    const [requestData, setRequestData] = useState({
        name: "",
        title: "",
        message: "",
        tags: "",
    });
    const request = useSelector((state) => currentId ? state.requests.find((p) => p._id === currentId) : null);
    const dispatch = useDispatch();
    useEffect(() => {
        if (request) setRequestData(request);
    }, [request])
    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentId) {
            dispatch(updateRequest(currentId, requestData));
        } else {
            dispatch(createRequest(requestData));
        }
        handleAddClose();
    };
    return (
        <Dialog open={openAdd} fullWidth onClose={handleAddClose} sx={{ borderRadius: "0" }}>
            <Card
                sx={{
                    borderRadius: "0",
                    px: 1,
                    pt: 1,
                }}
            >
                <Box pt={3} pb={3} px={3}>
                    <Typography
                        variant="h4"
                        color="info"
                        fontWeight="medium"
                        alignItems="center"
                        alignContent="center"
                        sx={{ width: "100%", fontWeight: 'bold' }}
                    >
                        { currentId ? 'Edit' : 'Create' }
                    </Typography>
                    <TextField
                        id="name"
                        label="Name"
                        type="text"
                        color="info"
                        fullWidth
                        sx={{ mt: "1.5rem" }}
                        value={requestData.name}
                        onChange={(e) =>
                            setRequestData({ ...requestData, name: e.target.value })
                        }
                    />
                    <TextField
                        id="title"
                        label="Title"
                        type="text"
                        color="info"
                        fullWidth
                        sx={{ mt: "1.5rem" }}
                        value={requestData.title}
                        onChange={(e) => setRequestData({ ...requestData, title: e.target.value })}
                    />
                    <TextField
                        id="message"
                        label="Message"
                        type="text"
                        color="info"
                        fullWidth
                        sx={{ mt: "1.5rem" }}
                        value={requestData.message}
                        onChange={(e) =>
                            setRequestData({ ...requestData, message: e.target.value })
                        }
                    />
                    <TextField
                        id="tags"
                        label="Tags"
                        type="text"
                        color="info"
                        fullWidth
                        sx={{ mt: "1.5rem" }}
                        value={requestData.tags}
                        onChange={(e) =>
                            setRequestData({ ...requestData, tags: e.target.value.split(',') })
                        }
                    />
                    <Stack
                        direction="row"
                        spacing={2}
                        sx={{ display: "flex", alignItems: "center", marginTop: 3 }}
                    >
                        <Button
                            variant="contained"
                            onClick={handleSubmit}
                            sx={{
                                fontWeight: "500", ':hover': {
                                    boxShadow: 10,
                                }
                            }}
                        >
                            Submit
                        </Button>
                        <Button
                            color="primary"
                            variant="contained"
                            onClick={handleAddClose}
                            sx={{
                                margin: "20", fontWeight: "500", ':hover': {
                                    boxShadow: 10,
                                }
                            }}
                        >
                            Cancel
                        </Button>
                    </Stack>
                </Box>
            </Card>
        </Dialog>
    )

}

export default AddDialog