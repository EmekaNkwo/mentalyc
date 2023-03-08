import React, { lazy, Suspense, useState } from "react";
import { Container, Button, CircularProgress, Box } from "@mui/material";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { Uploaditem } from "../components";

const UploadModal = lazy(() => import("../components/UploadModal"));

function Home() {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const [processingTasks, setProcessingTasks] = useState([]);
  const [note, setNote] = useState();
  const [clientName, setClientName] = useState();

  const handleUpload = (e) => {
    e.preventDefault();
    handleClose();
    const noteType = note;
    const name = clientName;
    const newTask = { noteType, name, progress: 0 };
    setProcessingTasks([...processingTasks, newTask]);
    setNote("");
    setClientName("");
    console.log(processingTasks);
    console.log("Clicked");
  };

  return (
    <>
      {open && (
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-[calc(100vh-72px)]">
              <Box sx={{ display: "flex" }}>
                <CircularProgress />
              </Box>
            </div>
          }
        >
          <UploadModal
            open={open}
            handleClose={handleClose}
            setNote={setNote}
            note={note}
            clientName={clientName}
            setClientName={setClientName}
            handleSubmit={handleUpload}
          />
        </Suspense>
      )}
      <Container
        style={{
          marginTop: 2,
        }}
      >
        <div className="flex flex-col gap-[1.2rem]">
          <div className="flex items-center justify-between">
            <span className="text-[18px]">Hi Maria</span>
            <AiOutlineQuestionCircle className="text-[20px] text-[#731054]" />
          </div>
          <span className="text-[22px] font-medium">
            Upload your sessions's recordings
          </span>
          <Button
            variant="contained"
            size="medium"
            style={{
              backgroundImage: "linear-gradient(to right, #731054, #DE0D6F)",
            }}
            onClick={() => setOpen(true)}
          >
            Upload
          </Button>
        </div>

        {processingTasks.length > 0 ? (
          <>
            <div className="mt-[3rem]">
              <Uploaditem
                processingTasks={processingTasks}
                setProcessingTasks={setProcessingTasks}
              />
            </div>
          </>
        ) : null}
      </Container>
    </>
  );
}

export default Home;
